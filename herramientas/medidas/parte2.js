/* Pesos, medidas, monedas y horas bíblicas · ruta II. Capacidad y peso (ver encabezado en parte1.js) */
(() => {
  const capacidad = [
    {
      id: 'aridos', n: 'Medidas para el grano: gomer, efa y homer', ref: 'Éxodo 16:16-18, 36; Rut 2:17; Mateo 13:33',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-capacidad.svg', alt: 'Escalera de medidas de capacidad: 1 homer o coro (220 L) = 10 efas; 1 efa (22 L) = 3 seahs = 10 gomeres; 1 seah (7,3 L) = 6 cabs; 1 cab (1,2 L) = 4 logs; 1 log (0,3 L)', pie: 'Cómo se relacionan las medidas de capacidad.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de áridos (grano y harina)',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Cab', '4 logs', '1,2 L', '2 R 6:25'],
            ['Gomer', 'Décima parte de un efa', '2,2 L', 'Éx 16:16'],
            ['Seah («medida»)', 'Tercera parte de un efa', '7,3 L', 'Gn 18:6; Mt 13:33'],
            ['Efa', '10 gomeres', '22 L', 'Rt 2:17'],
            ['Homer o coro', '10 efas', '220 L', 'Ez 45:11; Lc 16:7']
          ],
          nota: 'El efa se calcula entre 22 y 36 litros; este recurso usa 22 L, el valor que dan las vasijas inscritas halladas en Judá.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tres-medidas.webp', alt: 'Una mujer judía del siglo I mezcla levadura en una gran artesa de madera con tres medidas de harina, en el patio de una casa de piedra', pie: '«Tres medidas de harina» (Mt 13:33): unos 22 litros, pan para muchas personas.', origen: 'ia' }
      ],
      texto: [
        'Para el grano y la harina, Israel usaba medidas de capacidad. La más conocida es el efa, de unos 22 litros: algo más que un balde grande. Su décima parte era el gomer, unos 2,2 litros, y diez efas formaban un homer, la carga que podía llevar un asno, unos 220 litros. Ezequiel resume la relación: el bato tiene «la décima parte del homer, y la décima parte del homer el efa» (Ez 45:11).',
        { h: 'El maná de cada día' },
        'Estas medidas aparecen en el relato del maná. Dios mandó recoger «un gomer por cabeza» (Éx 16:16), poco más de dos litros diarios por persona, y el narrador aclara al final: «un gomer es la décima parte de un efa» (Éx 16:36). Quien recogía mucho no tenía de sobra, y quien recogía poco no tenía menos (Éx 16:18). La medida enseñaba a confiar en la provisión diaria de Dios, como Jesús enseñó a pedir el pan de cada día (Mt 6:11).',
        { h: 'Rut, Abraham y la levadura' },
        'Cuando Rut espigó todo un día en el campo de Booz, reunió «como un efa de cebada» (Rt 2:17): unos 22 litros, una cantidad muy generosa para una espigadora. Era una señal de la bondad de Booz, que había mandado dejar caer espigas para ella (Rt 2:16).',
        'La «medida» de muchos pasajes es el seah, la tercera parte de un efa, unos 7,3 litros. Abraham pidió a Sara «tres medidas de flor de harina» para recibir a sus visitantes (Gn 18:6): un efa completo, pan para un banquete. Jesús usó la misma cantidad en una parábola: la levadura que una mujer escondió «en tres medidas de harina, hasta que todo fue leudado» (Mt 13:33). Con unos 22 litros de harina se hace pan para más de cien personas. La parábola no habla de una masa casera pequeña, sino de una gran hornada: así crece el reino de Dios a partir de algo escondido.',
        { ejercicio: {
          pregunta: 'Si un israelita recogía un gomer de maná al día, ¿cuánto recogía en una semana de seis días de recolección?',
          opciones: [
            { t: 'Seis gomeres, algo más de la mitad de un efa.', ok: true, por_que: 'Seis gomeres son seis décimas de efa, unos 13 litros.' },
            { t: 'Seis efas, más de un homer.', ok: false, por_que: 'El gomer es la décima parte del efa, no un efa entero.' },
            { t: 'Un solo gomer, porque guardaba lo que sobraba.', ok: false, por_que: 'El maná guardado se agusanaba, salvo el del sexto día, en que se recogía doble (Éxodo 16:20-22).' }
          ],
          explicacion: 'En realidad el sexto día se recogían dos gomeres por persona, para el sábado (Éxodo 16:22): siete gomeres por semana, siempre la medida justa.'
        } }
      ],
      pensar: 'Dios dio el maná por medida, ni más ni menos. ¿Qué te enseña esa medida diaria sobre cómo confiar en Dios para tus necesidades?'
    },
    {
      id: 'liquidos', n: 'Medidas para líquidos: log, hin y bato', ref: 'Éxodo 29:40; 1 Reyes 7:23-26; 2 Crónicas 4:5',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de líquidos',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Log', '—', '0,3 L', 'Lv 14:10'],
            ['Hin', '12 logs', '3,7 L', 'Éx 29:40'],
            ['Bato', '6 hines (igual que el efa)', '22 L', '1 R 7:26; Lc 16:6'],
            ['Coro', '10 batos', '220 L', 'Ez 45:14'],
            ['Cántaro (metretes, NT)', '—', '39 L', 'Jn 2:6']
          ],
          nota: 'En el Nuevo Testamento, «barriles» (Lc 16:6) traduce batos, y «cántaros» (Jn 2:6), una medida griega de unos 39 litros.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1r/7/23-26', ref: '1 Reyes 7:23-26' }
      ],
      texto: [
        'Los líquidos se medían con una escala paralela. El log, unos 300 mililitros, era la medida de aceite que traía el leproso purificado (Lv 14:10). El hin, unos 3,7 litros, se usaba en las ofrendas diarias: con cada cordero se ofrecía harina amasada «con la cuarta parte de un hin de aceite» y como libación «la cuarta parte de un hin de vino» (Éx 29:40), casi un litro de cada uno. El bato tenía la misma capacidad que el efa (Ez 45:11), unos 22 litros.',
        'Las raciones de Ezequiel durante el asedio simbólico de Jerusalén muestran la escasez: el agua se bebería por medida, «la sexta parte de un hin» (Ez 4:11), poco más de medio litro al día.',
        { h: 'El mar de bronce' },
        'Frente al templo, Salomón puso un gran depósito de bronce para que los sacerdotes se lavaran (2 Cr 4:6). Medía diez codos de diámetro y cinco de alto, unos 4,5 metros de ancho y 2,2 de alto. El libro de Reyes dice que cabían en él «dos mil batos» (1 R 7:26), unos 44.000 litros, mientras Crónicas dice «tres mil batos» (2 Cr 4:5).',
        { posturas: {
          titulo: '¿Dos mil o tres mil batos?',
          a: { n: 'Dos medidas diferentes', t: 'Reyes daría la cantidad de agua que se mantenía de ordinario, y Crónicas la capacidad total del depósito lleno hasta el borde. También pudo cambiar el valor del bato entre la época de Reyes y la del cronista, que escribe después del exilio.' },
          b: { n: 'Un error al copiar', t: 'Los números se copiaban con facilidad de manera equivocada, y en otros pasajes paralelos de Reyes y Crónicas hay diferencias de cifras que la mayoría explica así. Según esta postura, uno de los dos números se alteró en la transmisión del texto.' },
          c: 'Ninguna de las dos explicaciones pone en duda la veracidad de la Escritura, cuya inspiración corresponde a lo que escribieron los autores. Lo que el pasaje enseña no depende de la cifra exacta: el templo tenía un lavacro de proporciones enormes, porque quienes servían a Dios debían presentarse purificados.'
        } },
        { h: 'Las tinajas de Caná' },
        'En el Nuevo Testamento aparecen medidas griegas y romanas. En las bodas de Caná había seis tinajas de piedra, «en cada una de las cuales cabían dos o tres cántaros» (Jn 2:6). El cántaro traduce una medida griega de unos 39 litros, de modo que cada tinaja contenía entre 80 y 120 litros. El taller práctico de este recurso calcula cuánto vino dio Jesús en esa boda.',
        { ejercicio: {
          pregunta: 'La libación diaria era la cuarta parte de un hin de vino con cada cordero. ¿Cuánto es aproximadamente?',
          opciones: [
            { t: 'Casi un litro.', ok: true, por_que: 'Un hin tiene unos 3,7 litros; su cuarta parte, unos 0,9 litros.' },
            { t: 'Unos cinco litros.', ok: false, por_que: 'Eso sería más de un hin completo.' },
            { t: 'Unos veinte litros.', ok: false, por_que: 'Esa es la capacidad de un bato, que equivale a seis hines.' }
          ],
          explicacion: 'El hin era una medida de uso doméstico. Las ofrendas diarias eran cantidades modestas, pero constantes, mañana y tarde (Éxodo 29:38-41).'
        } }
      ],
      pensar: 'El sacerdote debía lavarse antes de servir. ¿Qué significa para ti presentarte limpio delante de Dios antes de servirle (He 10:22)?'
    },
    {
      id: 'siclo', n: 'El siclo y sus divisiones', ref: 'Éxodo 30:13; 38:25-26; 1 Samuel 13:21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pesas.svg', alt: 'Escalera de pesas: gera (0,57 g), beka o medio siclo (5,7 g), pim (7,8 g), siclo (11,4 g), mina de 50 siclos (570 g) y talento de 3.000 siclos (34 kg)', pie: 'Del gera al talento: el sistema de pesas de Israel.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pesas del Antiguo Testamento',
          cab: ['Pesa', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Gera', 'Veinteava parte del siclo', '0,57 g', 'Éx 30:13'],
            ['Beka (medio siclo)', '10 geras', '5,7 g', 'Gn 24:22; Éx 38:26'],
            ['Pim', 'Dos tercios de siclo', '7,8 g', '1 S 13:21'],
            ['Siclo', '20 geras', '11,4 g', 'Gn 23:16'],
            ['Mina', '50 siclos (60 en Ezequiel)', '570 g', 'Esd 2:69; Ez 45:12'],
            ['Talento', '60 minas, 3.000 siclos', '34 kg', 'Éx 38:25']
          ],
          nota: 'El siclo se calcula entre 11 y 12 gramos según las pesas de piedra halladas en Judá.'
        } }
      ],
      texto: [
        'La palabra siclo viene de un verbo hebreo que significa pesar. Antes de que existieran las monedas, el siclo no era una moneda sino un peso: unos 11,4 gramos. La plata y el oro se pesaban en una balanza contra pesas de piedra o de metal, y esa era la forma de pagar.',
        'El siclo se dividía en veinte geras. Medio siclo, la beka, era la ofrenda que cada israelita contado en el censo daba para el santuario: «medio siclo, conforme al siclo del santuario. El siclo es de veinte geras» (Éx 30:13). Los ricos no daban más ni los pobres menos (Éx 30:15): todos eran rescatados por el mismo precio.',
        { h: 'Una cuenta en el desierto' },
        'Éxodo permite comprobar cuántos siclos tenía un talento. Los hombres contados fueron 603.550, y cada uno dio medio siclo (Éx 38:26). Eso suma 301.775 siclos. El texto dice que la plata fue «cien talentos y mil setecientos setenta y cinco siclos» (Éx 38:25). Si cien talentos más 1.775 siclos son 301.775 siclos, entonces cada talento tiene exactamente 3.000 siclos. El propio texto bíblico conserva la clave del sistema.',
        { h: 'Una palabra que se entendió gracias a la arqueología' },
        'Durante siglos, los traductores no supieron qué significaba la palabra «pim» en 1 Samuel 13:21, donde se cuenta lo que cobraban los filisteos por afilar las herramientas de los israelitas. Algunas versiones antiguas la tradujeron por conjetura. A comienzos del siglo XX se encontraron en Judá pequeñas pesas de piedra con la palabra pim grabada, que pesan unos 7,8 gramos: dos tercios de un siclo. Hoy se sabe que el texto habla de un precio, y que los filisteos cobraban caro, porque tenían el monopolio del hierro (1 S 13:19-20).',
        'Es un buen ejemplo de cómo la arqueología no corrige la Biblia, sino que ayuda a entender palabras que el tiempo había hecho oscuras.',
        { ejercicio: {
          pregunta: 'Según Éxodo 38:25-26, ¿cuántos siclos tenía un talento?',
          opciones: [
            { t: '60 siclos.', ok: false, por_que: 'Sesenta es el número de minas en un talento, no de siclos.' },
            { t: '1.000 siclos.', ok: false, por_que: 'Con esa cifra, cien talentos serían 100.000 siclos, muy lejos de los 301.775 que reunió el censo.' },
            { t: '3.000 siclos.', ok: true, por_que: '603.550 medios siclos son 301.775 siclos; menos 1.775 quedan 300.000, que son cien talentos de 3.000 siclos.' }
          ],
          explicacion: 'La cuenta del censo confirma el sistema: 3.000 siclos por talento, unos 34 kilos.'
        } }
      ],
      pensar: 'En el rescate del censo todos daban lo mismo, ricos y pobres (Éx 30:15). ¿Qué te enseña eso sobre el valor de cada persona delante de Dios y sobre el precio de nuestro rescate (1 P 1:18-19)?'
    },
    {
      id: 'balanza', n: 'Balanza justa y pesas falsas', ref: 'Levítico 19:35-36; Amós 8:4-6; Daniel 5:25-28',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/balanza.webp', alt: 'Primer plano de una balanza de bronce de dos platillos sobre una mesa de madera, con plata en un platillo y pesas de piedra pulida en el otro, en un mercado antiguo', pie: 'La balanza: la caja registradora del mundo antiguo.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@dt/25/13-16', ref: 'Deuteronomio 25:13-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'MENE, TEKEL, UPARSIN: pesas convertidas en sentencia',
          cab: ['Palabra', 'Como pesa', 'Como verbo', 'Interpretación de Daniel'],
          filas: [
            ['MENE', 'Mina', 'Contar', 'Contó Dios tu reino, y le ha puesto fin'],
            ['TEKEL', 'Siclo', 'Pesar', 'Pesado has sido en balanza, y fuiste hallado falto'],
            ['PERES (UPARSIN)', 'Media mina', 'Dividir', 'Tu reino ha sido roto, y dado a los medos y a los persas']
          ],
          nota: 'Daniel 5:25-28. «U» significa «y»; «parsin» es el plural de peres.'
        } }
      ],
      texto: [
        'En un mercado antiguo, el comprador y el vendedor dependían de la balanza. Si las pesas estaban alteradas, el engaño era casi imposible de descubrir. Por eso la ley de Dios insiste: «Balanzas justas, pesas justas y medidas justas tendréis» (Lv 19:36). Deuteronomio prohíbe tener dos juegos de pesas, uno grande para comprar y uno chico para vender: «No tendrás en tu bolsa pesa grande y pesa chica» (Dt 25:13).',
        'Proverbios lo dice con fuerza: «El peso falso es abominación a Jehová; Mas la pesa cabal le agrada» (Pr 11:1). Dios no se interesa solo por lo que ocurre en el culto, sino también por el comercio diario. La honestidad en lo pequeño es parte de la santidad.',
        { h: 'La denuncia de los profetas' },
        'Amós retrata a los comerciantes que esperaban con impaciencia el fin del sábado para volver a vender, pensando en cómo achicar la medida, subir el precio y falsear «con engaño la balanza» (Am 8:5). Miqueas pregunta si Dios puede dar por inocente «al que tiene balanza falsa y bolsa de pesas engañosas» (Mi 6:11). Para los profetas, el fraude comercial era una señal de que el pueblo se había apartado de Dios.',
        'Las pesas halladas por la arqueología en Judá muestran pequeñas diferencias de peso. Algunas se deben a la fabricación y al desgaste; otras pudieron ser intencionales. La Biblia no idealiza a su pueblo: muestra que la tentación de engañar estaba en cada mercado.',
        { h: 'Pesado en la balanza' },
        'La escritura misteriosa que apareció en el palacio de Belsasar usó nombres de pesas: «MENE, MENE, TEKEL, UPARSIN» (Dn 5:25). Leídas como sustantivos, son una mina, un siclo y medias minas. Daniel las leyó como verbos: contar, pesar, dividir. Al rey le dijo: «Pesado has sido en balanza, y fuiste hallado falto» (Dn 5:27). Aquella misma noche Babilonia cayó (Dn 5:30). El juicio de Dios usa la misma imagen que el mercado: Él pesa con exactitud.',
        { ejercicio: {
          pregunta: '¿Qué prohíbe Deuteronomio 25:13-14 al hablar de pesa grande y pesa chica?',
          opciones: [
            { t: 'Tener pesas de distintos tamaños para distintas mercaderías.', ok: false, por_que: 'Era normal tener pesas de varios valores. Lo prohibido era tener dos juegos falsos para el mismo valor.' },
            { t: 'Usar una medida para comprar y otra para vender, y así ganar con engaño.', ok: true, por_que: 'La pesa grande servía para recibir más al comprar, y la chica para entregar menos al vender.' },
            { t: 'Comerciar con extranjeros que usaban otras pesas.', ok: false, por_que: 'El texto no habla de extranjeros, sino de la honradez de cada israelita en su propia bolsa y su propia casa.' }
          ],
          explicacion: 'La ley exige una sola medida, exacta y justa, en todos los tratos. Dios promete bendición a quien obra así (Deuteronomio 25:15).'
        } }
      ],
      pensar: 'Dios pesa las acciones (1 S 2:3) y aborrece la pesa falsa. ¿Hay algún trato en tu trabajo o tus estudios donde sientas la tentación de usar «dos medidas»?'
    },
    {
      id: 'talentos', n: 'Minas y talentos: las grandes sumas', ref: '1 Reyes 10:14; 2 Reyes 18:14; Ester 3:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Talentos en el Antiguo Testamento',
          cab: ['Pasaje', 'Cantidad', 'Peso aprox.', 'Qué muestra'],
          filas: [
            ['Éx 25:39', '1 talento de oro', '34 kg', 'El candelero y sus utensilios'],
            ['2 S 12:30', 'Corona de 1 talento de oro', '34 kg', 'Corona ceremonial de Rabá'],
            ['1 R 10:14', '666 talentos de oro al año', '22,8 t', 'La riqueza de Salomón'],
            ['2 R 18:14', '300 de plata y 30 de oro', '10 t y 1 t', 'El tributo de Ezequías a Asiria'],
            ['Est 3:9', '10.000 talentos de plata', '340 t', 'El soborno de Amán'],
            ['1 Cr 29:7', '5.000 de oro y 10.000 de plata', '170 t y 340 t', 'Ofrendas para el templo']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1r/10/14-17', ref: '1 Reyes 10:14-17' }
      ],
      texto: [
        'Para cantidades grandes se usaban la mina y el talento. La mina tenía cincuenta siclos, unos 570 gramos, aunque Ezequiel la fija en sesenta siclos, sumando veinte, veinticinco y quince (Ez 45:12). El talento era la carga que podía llevar un hombre: sesenta minas, tres mil siclos, unos 34 kilos.',
        { h: 'El candelero de oro' },
        'El candelero del tabernáculo, con todos sus utensilios, se hizo «de un talento de oro fino» (Éx 25:39). Unos 34 kilos de oro macizo, trabajado a martillo en una sola pieza (Éx 25:31). La conversión permite imaginar el peso y el valor de la luz que alumbraba el Lugar Santo.',
        { h: 'La riqueza de Salomón' },
        'Salomón recibía cada año «seiscientos sesenta y seis talentos de oro» (1 R 10:14): más de 22 toneladas. Además, hizo doscientos escudos grandes de oro y trescientos más pequeños (1 R 10:16-17). El autor describe una prosperidad extraordinaria, cumplimiento de la promesa de Dios (1 R 3:13). Pero el lector atento recuerda que la ley prohibía al rey amontonar oro (Dt 17:17), y el capítulo siguiente cuenta cómo esa riqueza acompañó su caída (1 R 11:1-6).',
        { h: 'Tributos y sobornos' },
        'Otras cifras muestran la presión de los imperios. Asiria impuso a Ezequías trescientos talentos de plata y treinta de oro (2 R 18:14): unas once toneladas de metal, que obligaron al rey a vaciar el tesoro y a quitar el oro de las puertas del templo (2 R 18:15-16). Amán ofreció al rey de Persia diez mil talentos de plata para destruir a los judíos (Est 3:9): unas 340 toneladas, una suma gigantesca, una parte muy grande de lo que el imperio recaudaba en un año, según las cifras de Heródoto. El odio de Amán estaba dispuesto a pagar cualquier precio.',
        'Con estas cifras en mente se entiende mejor la deuda de «diez mil talentos» de la parábola de Jesús (Mt 18:24), que se estudia en la ruta de las monedas y en el taller práctico.',
        { ejercicio: {
          pregunta: 'Un talento pesaba unos 34 kilos. ¿Qué indica entonces que Amán ofreciera diez mil talentos?',
          opciones: [
            { t: 'Que ofrecía una suma enorme, de cientos de toneladas de plata.', ok: true, por_que: 'Diez mil por 34 kilos son unas 340 toneladas.' },
            { t: 'Que ofrecía lo que un obrero ganaba en un año.', ok: false, por_que: 'Un obrero no ganaba ni una pequeña fracción de un solo talento en un año.' },
            { t: 'Que la cifra no se puede convertir porque el talento era solo una moneda simbólica.', ok: false, por_que: 'El talento era un peso real, que se pesaba en balanza. Por eso Amán dice que lo pesará (Ester 3:9).' }
          ],
          explicacion: 'Las cifras extremas del libro de Ester subrayan el peligro en que estaba el pueblo de Dios, y por eso también la grandeza de su liberación.'
        } }
      ],
      pensar: 'Salomón tuvo más oro que nadie, pero su corazón se desvió (1 R 11:4). ¿Qué lugar ocupa el dinero en tu corazón, y cómo puedes cuidarlo?'
    },
    {
      id: 'pesos-historias', n: 'Lo que pesaba: cabellos, perfumes y granizo', ref: '2 Samuel 14:26; Juan 12:3-5; 19:39; Apocalipsis 6:6; 16:21',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pesos y medidas en los relatos',
          cab: ['Pasaje', 'Lo que dice', 'Equivale a'],
          filas: [
            ['2 S 14:26', 'El cabello de Absalón, 200 siclos', '2,3 kg'],
            ['Ez 4:10', 'Pan de 20 siclos al día', '230 g'],
            ['Jn 12:3', 'Una libra de nardo', '327 g'],
            ['Jn 19:39', 'Cien libras de mirra y áloes', '33 kg'],
            ['Ap 6:6', 'Dos libras de trigo por un denario', '2 L de trigo por el jornal de un día'],
            ['Ap 16:21', 'Granizo del peso de un talento', '34 kg']
          ],
          nota: 'La libra romana pesaba unos 327 g. En Ap 6:6, «libra» traduce una medida de capacidad griega de algo más de un litro.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/12/3-5', ref: 'Juan 12:3-5' }
      ],
      texto: [
        'Algunos relatos usan los pesos para destacar un detalle. Absalón se cortaba el cabello una vez al año, y «pesaba el cabello de su cabeza doscientos siclos de peso real» (2 S 14:26), más de dos kilos. El narrador subraya su belleza y su vanidad; el lector recuerda ese cabello cuando, años después, Absalón queda colgado de una encina por la cabeza (2 S 18:9).',
        { h: 'La libra del Nuevo Testamento' },
        'En los evangelios, la libra es la libra romana, de unos 327 gramos. María de Betania derramó sobre Jesús «una libra de perfume de nardo puro, de mucho precio» (Jn 12:3). Judas calculó enseguida su valor: trescientos denarios (Jn 12:5), el sueldo de casi un año de trabajo. Lo que para Judas era un desperdicio, Jesús lo recibió como un acto de amor que anticipaba su sepultura (Jn 12:7).',
        'Después de la crucifixión, Nicodemo trajo «un compuesto de mirra y de áloes, como cien libras» (Jn 19:39): unos 33 kilos de especias, una cantidad digna de la sepultura de un rey. El hombre que había venido de noche a ver a Jesús (Jn 3:1-2) ahora se mostraba públicamente.',
        { h: 'Dos libras de trigo por un denario' },
        'En Apocalipsis 6:6, «libra» no es un peso sino una medida griega de capacidad, de algo más de un litro: la ración de trigo de una persona para un día. La voz anuncia «Dos libras de trigo por un denario» (Ap 6:6). Si un denario era el sueldo de un día, un trabajador gastaría todo su jornal solo para comprar el pan de un día. Es el lenguaje de una hambruna, que acompaña al jinete del caballo negro.',
        'Más adelante, en el juicio de la séptima copa, cae «un enorme granizo como del peso de un talento» (Ap 16:21): piedras de hielo de unos 34 kilos. La conversión muestra el carácter devastador de ese juicio, y el texto añade que, aun así, los hombres blasfemaron contra Dios en vez de arrepentirse.',
        { ejercicio: {
          pregunta: '¿Qué comunica la voz de Apocalipsis 6:6 al decir «Dos libras de trigo por un denario»?',
          opciones: [
            { t: 'Que el trigo estaría barato y abundante.', ok: false, por_que: 'Un denario era el sueldo de un día entero de trabajo; pagar eso por tan poco trigo es un precio de hambruna.' },
            { t: 'Que el sueldo de un día alcanzaría apenas para comer ese día.', ok: true, por_que: 'Dos «libras» son unos dos litros de trigo: comida para uno o dos días, a cambio de todo el jornal.' },
            { t: 'Que habría que pagar los impuestos en trigo y no en dinero.', ok: false, por_que: 'El texto habla del precio del alimento, no de impuestos.' }
          ],
          explicacion: 'Convertir el precio a jornales revela el sentido: escasez extrema, en la que el trabajo de un día apenas alcanza para comer.'
        } }
      ],
      pensar: 'Judas midió el perfume en denarios; María lo midió en amor. ¿Con qué medida calculas lo que le das a Jesús?'
    }
  ];
  window.__MEDIDAS.capacidad = capacidad;
})();
