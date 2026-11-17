# Uso: python3 herramientas/esquemas_humano.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «El ser humano y el pecado» (origen: 'esquema').
# Mismo estilo que esquemas_espiritu.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'ser-humano-y-pecado', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; PARDO = '#8a5a2b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    s = s.replace('&', '&amp;')
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub=None, h=H):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 60, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 94, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14):
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


def claro(c, a=0.14):
    return f'{c}{int(a * 255):02x}'


def lineas(o, x, y, textos, size=15, fill=INK, salto=21, **kw):
    for i, s in enumerate(textos):
        o.append(t(x, y + i * salto, s, size, fill, **kw))


def caja_txt(o, x, y, w, h, c, titulo, lineas_txt, sub=None, tsize=22, size=15):
    caja(o, x, y, w, h, claro(c, .14), c)
    o.append(t(x + w / 2, y + 36, titulo, tsize, c, weight='bold', font=SERIF))
    yy = y + 60
    if sub:
        o.append(t(x + w / 2, yy, sub, 14, MUTED, italic=True)); yy += 26
    lineas(o, x + w / 2, yy, lineas_txt, size, salto=int(size * 1.4))


# 1. Los cuatro estados del ser humano
def cuatro_estados():
    o = lienzo('El ser humano en cuatro estados', 'Una historia que va del Edén a la nueva Jerusalén')
    est = [
        ('Creado', 'Gn 1–2', ['Bueno y libre', 'en comunión con Dios', '', 'podía no pecar'], VERDE),
        ('Caído', 'Gn 3; Ro 5', ['Separado de Dios', 'esclavo del pecado', '', 'no puede dejar de', 'pecar por sí mismo'], ROJO),
        ('Redimido', 'Ro 6; 2 Co 5:17', ['Nueva criatura', 'con el Espíritu', '', 'puede no pecar', 'por la gracia'], AZUL),
        ('Glorificado', '1 Jn 3:2; Ap 21', ['Semejante a Cristo', 'cuerpo glorioso', '', 'ya no podrá pecar'], ORO),
    ]
    for i, (n, r, d, c) in enumerate(est):
        x = 60 + i * 280
        caja_txt(o, x, 170, 240, 280, c, n, d, sub=r, tsize=28, size=19)
        if i < 3:
            flecha(o, x + 244, 310, x + 276, 310, GRIS, w=4, punta=10)
    o.append(t(600, 530, 'Adán podía no pecar; el pecador no puede dejar de pecar por sí mismo;', 18, INK))
    o.append(t(600, 560, 'el redimido puede no pecar por la gracia; el glorificado ya no podrá pecar.', 18, INK))
    o.append(t(600, 620, 'Fórmula clásica desde Agustín de Hipona (siglo V)', 15, MUTED, italic=True))
    guardar('esquema-cuatro-estados', o)


# 2. La imagen de Dios
def imagen():
    o = lienzo('La imagen de Dios', 'Tres aspectos que Génesis 1:26-28 mantiene juntos')
    cx, cy, r = 600, 400, 165
    cs = [(cx, cy - 95, AZUL), (cx - 110, cy + 80, VERDE), (cx + 110, cy + 80, ORO)]
    for x, y, c in cs:
        o.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{claro(c, .16)}" stroke="{c}" stroke-width="3"/>')
    o.append(t(cx, cy - 190, 'Lo que es', 24, AZUL, weight='bold', font=SERIF))
    lineas(o, cx, cy - 160, ['razón, voluntad, conciencia,', 'capacidad de amar y adorar'], 15)
    o.append(t(cx - 165, cy + 120, 'Su relación', 24, VERDE, weight='bold', font=SERIF))
    lineas(o, cx - 165, cy + 148, ['con Dios y con', 'los demás: «varón', 'y hembra» (Gn 1:27)'], 14)
    o.append(t(cx + 165, cy + 120, 'Su tarea', 24, ORO, weight='bold', font=SERIF))
    lineas(o, cx + 165, cy + 148, ['gobernar la tierra', 'en nombre de Dios', '(Gn 1:28)'], 14)
    o.append(f'<circle cx="{cx}" cy="{cy + 22}" r="52" fill="#ffffff" stroke="{ACC}" stroke-width="3"/>')
    o.append(t(cx, cy + 18, 'Cristo', 22, ACC, weight='bold', font=SERIF))
    o.append(t(cx, cy + 42, 'Col 1:15', 13, MUTED, italic=True))
    o.append(t(170, 180, 'Dañada por el pecado', 17, ROJO, weight='bold', anchor='start'))
    lineas(o, 170, 206, ['pero no perdida', '(Gn 9:6; Stg 3:9)'], 15, anchor='start')
    o.append(t(1030, 180, 'Renovada en Cristo', 17, AZUL, weight='bold', anchor='end'))
    lineas(o, 1030, 206, ['de gloria en gloria', '(2 Co 3:18; Col 3:10)'], 15, anchor='end')
    guardar('esquema-imagen', o)


# 3. ¿Dos o tres partes?
def partes():
    o = lienzo('¿Dos o tres partes?', 'Dos maneras evangélicas de describir al ser humano')
    # dos partes
    cx, cy = 320, 330
    o.append(f'<circle cx="{cx}" cy="{cy}" r="150" fill="{claro(PARDO, .16)}" stroke="{PARDO}" stroke-width="3"/>')
    o.append(f'<circle cx="{cx}" cy="{cy}" r="80" fill="{claro(AZUL, .2)}" stroke="{AZUL}" stroke-width="3"/>')
    o.append(t(cx, cy - 112, 'Cuerpo', 20, PARDO, weight='bold'))
    lineas(o, cx, cy - 4, ['Alma', 'o espíritu'], 19, AZUL, weight='bold')
    o.append(t(cx, 130, 'Dos partes', 26, INK, weight='bold', font=SERIF))
    o.append(t(cx, 520, 'Mt 10:28; Ec 12:7; 2 Co 7:1', 15, MUTED, italic=True))
    # tres partes
    cx = 880
    o.append(f'<circle cx="{cx}" cy="{cy}" r="150" fill="{claro(PARDO, .16)}" stroke="{PARDO}" stroke-width="3"/>')
    o.append(f'<circle cx="{cx}" cy="{cy}" r="100" fill="{claro(VERDE, .18)}" stroke="{VERDE}" stroke-width="3"/>')
    o.append(f'<circle cx="{cx}" cy="{cy}" r="52" fill="{claro(AZUL, .22)}" stroke="{AZUL}" stroke-width="3"/>')
    o.append(t(cx, cy - 118, 'Cuerpo', 20, PARDO, weight='bold'))
    o.append(t(cx, cy - 68, 'Alma', 20, VERDE, weight='bold'))
    o.append(t(cx, cy + 7, 'Espíritu', 18, AZUL, weight='bold'))
    o.append(t(cx, 130, 'Tres partes', 26, INK, weight='bold', font=SERIF))
    o.append(t(cx, 520, '1 Ts 5:23; He 4:12', 15, MUTED, italic=True))
    caja(o, 150, 570, 900, 140, '#ffffff', GRIS)
    o.append(t(600, 606, 'Lo que las dos afirman', 20, ACC, weight='bold', font=SERIF))
    lineas(o, 600, 638, ['La persona es una unidad creada por Dios, con una parte material y otra inmaterial;',
                         'sigue existiendo consciente después de la muerte y resucitará en cuerpo.',
                         'Las Asambleas de Dios no fijan ninguna de las dos.'], 16)
    guardar('esquema-partes', o)


# 4. La tentación: tres puertas
def tentacion():
    o = lienzo('Tres puertas de la tentación', 'En el Edén, en el mundo y en el desierto')
    cols = [('Eva en el Edén', 'Gn 3:6', ROJO), ('El mundo', '1 Jn 2:16', PARDO), ('Jesús en el desierto', 'Mt 4:1-11', AZUL)]
    filas = [
        ('«bueno para comer»', '«los deseos de la carne»', 'piedras en pan → «No sólo de pan»'),
        ('«agradable a los ojos»', '«los deseos de los ojos»', 'los reinos del mundo → «A él sólo servirás»'),
        ('«codiciable para alcanzar la sabiduría»', '«la vanagloria de la vida»', 'echarse del templo → «No tentarás»'),
    ]
    xs = [70, 450, 830]; ws = [360, 360, 320]
    for (n, r, c), x, w in zip(cols, xs, ws):
        caja(o, x, 130, w, 70, claro(c, .2), c)
        o.append(t(x + w / 2, 160, n, 21, c, weight='bold', font=SERIF))
        o.append(t(x + w / 2, 186, r, 14, MUTED, italic=True))
    for i, fila in enumerate(filas):
        y = 230 + i * 120
        for (n, r, c), x, w, s in zip(cols, xs, ws, fila):
            caja(o, x, y, w, 96, '#ffffff', GRIS, rx=10)
            if ' → ' in s:
                a, b = s.split(' → ')
                o.append(t(x + w / 2, y + 42, a, 15, INK)); o.append(t(x + w / 2, y + 68, b, 15, AZUL, weight='bold'))
            else:
                o.append(t(x + w / 2, y + 54, s, 16, INK))
    o.append(t(600, 640, 'Donde Eva cayó, Jesús venció respondiendo con la Escritura: «Escrito está».', 19, INK, font=SERIF, italic=True))
    o.append(t(600, 676, 'Mateo 4 cuenta las tentaciones en otro orden; la correspondencia entre las tres columnas es una ayuda didáctica.', 14, MUTED))
    guardar('esquema-tentacion', o)


# 5. Las sentencias de Génesis 3
def sentencias():
    o = lienzo('Juicio y gracia en Génesis 3', 'Las consecuencias del pecado y la primera promesa')
    bl = [
        ('La serpiente', 'Gn 3:14-15', ['maldita', 'humillada: «polvo comerás»', 'su cabeza será herida'], MORADO),
        ('La mujer', 'Gn 3:16', ['dolor en el parto', 'conflicto en el matrimonio'], ROJO),
        ('El hombre', 'Gn 3:17-19', ['trabajo con fatiga', '«al polvo volverás»'], PARDO),
        ('La tierra', 'Gn 3:17-18', ['maldita por su causa', 'espinos y cardos'], VERDE),
    ]
    for i, (n, r, d, c) in enumerate(bl):
        x = 60 + i * 280
        caja_txt(o, x, 140, 240, 200, c, n, d, sub=r, tsize=24, size=17)
    caja(o, 60, 400, 1080, 200, claro(ORO, .14), ORO)
    o.append(t(600, 440, 'En medio del juicio, la gracia', 24, ORO, weight='bold', font=SERIF))
    gr = [('La promesa', '«ésta te herirá en la cabeza» (Gn 3:15)'), ('El nombre de Eva', '«madre de todos los vivientes» (Gn 3:20)'),
          ('Túnicas de pieles', 'Dios mismo los vistió (Gn 3:21)'), ('Al final', '«no habrá más maldición» (Ap 22:3)')]
    for i, (a, b) in enumerate(gr):
        x = 195 + i * 270
        o.append(t(x, 490, a, 18, INK, weight='bold'))
        o.append(t(x, 518, b, 13, MUTED))
    o.append(t(600, 570, 'Dios maldijo a la serpiente y a la tierra, pero no maldijo a Adán ni a Eva.', 17, INK, italic=True))
    o.append(t(600, 660, 'Con la caída entraron el dolor, el conflicto, la fatiga y la muerte; con la promesa, la esperanza.', 16, MUTED))
    guardar('esquema-sentencias', o)


# 6. Dos Adanes (Romanos 5)
def dos_adanes():
    o = lienzo('Dos hombres, dos resultados', 'Romanos 5:12-21 y 1 Corintios 15:22, 45')
    filas = [('Un acto', 'desobediencia (Ro 5:19)', 'obediencia (Ro 5:19)'),
             ('Entró', 'el pecado (Ro 5:12)', 'la gracia y el don (Ro 5:15)'),
             ('Veredicto', 'condenación (Ro 5:18)', 'justificación de vida (Ro 5:18)'),
             ('Reina', 'la muerte (Ro 5:17)', 'la vida (Ro 5:17, 21)'),
             ('Los suyos', '«en Adán todos mueren»', '«en Cristo todos serán vivificados»')]
    caja(o, 230, 120, 370, 70, claro(ROJO, .2), ROJO); o.append(t(415, 165, 'Adán', 28, ROJO, weight='bold', font=SERIF))
    caja(o, 690, 120, 370, 70, claro(AZUL, .2), AZUL); o.append(t(875, 165, 'Cristo, el postrer Adán', 26, AZUL, weight='bold', font=SERIF))
    for i, (k, a, b) in enumerate(filas):
        y = 215 + i * 78
        o.append(t(200, y + 40, k, 17, MUTED, anchor='end', weight='bold'))
        caja(o, 230, y, 370, 62, '#ffffff', GRIS, rx=10); o.append(t(415, y + 38, a, 17, INK))
        caja(o, 690, y, 370, 62, '#ffffff', GRIS, rx=10); o.append(t(875, y + 38, b, 17, INK))
    o.append(t(645, 420, '«mucho', 18, ORO, weight='bold', font=SERIF)); o.append(t(645, 446, 'más»', 18, ORO, weight='bold', font=SERIF))
    o.append(t(600, 640, '«Mas cuando el pecado abundó, sobreabundó la gracia» (Ro 5:20)', 21, INK, font=SERIF, italic=True))
    o.append(t(600, 680, 'Pertenecemos a Adán por nacimiento; a Cristo, por la fe.', 16, MUTED))
    guardar('esquema-dos-adanes', o)


# 7. ¿Qué heredamos de Adán?
def herencia():
    o = lienzo('¿Qué heredamos de Adán?', 'Tres explicaciones evangélicas del pecado original')
    caja(o, 470, 120, 260, 70, claro(ROJO, .2), ROJO)
    o.append(t(600, 165, 'Adán', 28, ROJO, weight='bold', font=SERIF))
    cols = [('Representación', 'reformada (federal)', ['Adán actuó como cabeza', 'del pacto; su culpa', 'se imputa a todos', '(Ro 5:18-19)'], AZUL),
            ('Unidad', 'realista', ['toda la humanidad', 'estaba en Adán, como', 'Leví en Abraham', '(He 7:9-10)'], MORADO),
            ('Naturaleza', 'wesleyana y muchos pentecostales', ['heredamos la naturaleza', 'caída y la muerte; la culpa', 'es personal al pecar', '(Ez 18:20; Ro 5:12)'], VERDE)]
    for i, (n, s, d, c) in enumerate(cols):
        x = 70 + i * 360
        flecha(o, 600, 192, x + 160, 268, GRIS, w=3, punta=10)
        caja_txt(o, x, 275, 320, 230, c, n, d, sub=s, tsize=24, size=17)
    caja(o, 70, 555, 1040, 140, '#ffffff', GRIS)
    o.append(t(600, 592, 'Lo que todas afirman', 20, ACC, weight='bold', font=SERIF))
    lineas(o, 600, 624, ['Todos nacemos con una naturaleza caída, inclinada al pecado y bajo la muerte (Sal 51:5; Ef 2:3).',
                         'Nadie se salva sin Cristo, y los niños que mueren pequeños están cubiertos por su obra.'], 16)
    guardar('esquema-herencia', o)


# 8. Tres muertes
def muertes():
    o = lienzo('Tres muertes', 'La palabra «muerte» en la Biblia significa separación')
    filas = [('Muerte espiritual', 'separación de Dios, ahora', 'Gn 2:17; Is 59:2; Ef 2:1', 'da vida nueva', 'Ef 2:4-5; Jn 3:5', AZUL),
             ('Muerte física', 'separación del cuerpo y el alma', 'Gn 3:19; Ro 5:12; He 9:27', 'resucitará el cuerpo', '1 Co 15:42-44, 55', PARDO),
             ('Muerte segunda', 'separación eterna de Dios', 'Ap 20:14-15; 2 Ts 1:9', 'libra del juicio', 'Ro 8:1; Jn 5:24', ROJO)]
    o.append(t(330, 140, 'Consecuencia del pecado', 20, INK, weight='bold', font=SERIF))
    o.append(t(910, 140, 'Lo que Cristo hace', 20, VERDE, weight='bold', font=SERIF))
    for i, (n, d, r, cr, rr, c) in enumerate(filas):
        y = 170 + i * 165
        caja(o, 70, y, 540, 135, claro(c, .14), c)
        o.append(t(340, y + 44, n, 25, c, weight='bold', font=SERIF))
        o.append(t(340, y + 76, d, 17, INK))
        o.append(t(340, y + 106, r, 14, MUTED, italic=True))
        flecha(o, 620, y + 68, 700, y + 68, VERDE, w=4)
        caja(o, 710, y, 400, 135, claro(VERDE, .12), VERDE)
        o.append(t(910, y + 60, cr, 21, VERDE, weight='bold'))
        o.append(t(910, y + 92, rr, 14, MUTED, italic=True))
    o.append(t(600, 690, '«La paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús» (Ro 6:23)', 18, INK, font=SERIF, italic=True))
    guardar('esquema-muertes', o)


# 9. La espiral del pecado
def espiral():
    o = lienzo('De la tentación a la esclavitud', 'Santiago 1:14-15 y Juan 8:34')
    pasos = [('El deseo atrae', '«atraído y seducido»'), ('El deseo concibe', '«después que ha concebido»'),
             ('Nace el pecado', '«da a luz el pecado»'), ('Costumbre y cadena', '«esclavo es del pecado»'), ('La muerte', '«da a luz la muerte»')]
    for i, (a, b) in enumerate(pasos):
        x = 120 + i * 105; y = 150 + i * 100
        c = [ORO, PARDO, ROJO, MORADO, INK][i]
        caja(o, x, y, 380, 76, claro(c, .16), c)
        o.append(t(x + 190, y + 34, a, 20, c, weight='bold', font=SERIF))
        o.append(t(x + 190, y + 60, b, 14, MUTED, italic=True))
        if i < 4:
            flecha(o, x + 200, y + 78, x + 290, y + 100, GRIS, w=3, punta=9)
    caja(o, 860, 170, 290, 300, claro(AZUL, .14), AZUL)
    flecha(o, 895, 450, 895, 200, AZUL, w=6, punta=16)
    lineas(o, 1025, 270, ['«Si el Hijo', 'os libertare,', 'seréis', 'verdaderamente', 'libres»'], 19, AZUL, salto=28, font=SERIF, weight='bold')
    o.append(t(1025, 430, 'Jn 8:36', 14, MUTED, italic=True))
    o.append(t(600, 700, 'Lo que comienza como una elección termina como una cadena; Cristo rompe la cadena.', 17, INK))
    guardar('esquema-espiral', o)


cuatro_estados(); imagen(); partes(); tentacion(); sentencias(); dos_adanes(); herencia(); muertes(); espiral()
print('Esquemas generados en', OUT)
