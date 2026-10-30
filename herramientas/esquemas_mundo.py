# Uso: python3 herramientas/esquemas_mundo.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «El mundo judío en tiempos de Jesús» (origen: 'esquema').
# Mismo estilo que esquemas_entre.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'mundo-judio', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
ROMANO = '#9e2b25'; HERODES = '#8a5a44'; GALILEA = '#2f8a8a'; FELIPE = '#a0603a'; DECAPOLIS = '#5d6fb0'
TEMPLO = '#c08a1e'; JESUS = '#4a6b7c'; IGLESIA = '#3f8a4f'; GUERRA = '#5b4b6b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x:.0f}" y="{y:.0f}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub, h):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 60, titulo, 32, INK, font=SERIF))
    o.append(t(600, 94, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10, grosor=2):
    b = f' stroke="{borde}" stroke-width="{grosor}"' if borde else ''
    o.append(f'<rect x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h:.0f}" rx="{rx}" fill="{fondo}"{b}/>')


def flecha(o, x1, y1, x2, y2, color=MUTED, discontinua=False):
    d = ' stroke-dasharray="6 5"' if discontinua else ''
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="{color}" stroke-width="2.5"{d} marker-end="url(#pf)"/>')


def defs(o):
    o.append(f'<defs><marker id="pf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{MUTED}"/></marker></defs>')


# 1. Quién gobernaba en tiempos de Jesús (hacia el año 28 d.C.)
def poder():
    H = 860
    o = lienzo('¿Quién gobernaba?', 'La tierra de Israel durante el ministerio de Jesús (hacia el año 28 d.C.)', H)
    defs(o)

    def nodo(cx, y, w, h, titulo, lineas, color, relleno=True):
        caja(o, cx - w / 2, y, w, h, color if relleno else '#fff', color, 12)
        fg = '#fff' if relleno else INK
        o.append(t(cx, y + 34, titulo, 21, fg, weight='bold', font=SERIF))
        for i, l in enumerate(lineas):
            o.append(t(cx, y + 60 + i * 21, l, 15, fg if relleno else MUTED))

    nodo(600, 125, 420, 92, 'Roma: el emperador Tiberio', ['14–37 d.C. · «Dad, pues, a César lo que es de César»'], ROMANO)
    nodo(600, 262, 360, 74, 'Gobernador de Siria', ['legado con las legiones · vigila la región'], ROMANO, False)
    flecha(o, 600, 217, 600, 260)
    # tercer nivel: cuatro gobiernos
    Y3 = 400
    cols = [(165, 'Prefecto de Judea', ['Poncio Pilato, 26–36 d.C.', 'Judea, Samaria e Idumea', 'Reside en Cesarea'], ROMANO),
            (455, 'Herodes Antipas', ['Tetrarca, 4 a.C.–39 d.C.', 'Galilea y Perea', 'Capital: Tiberíades'], GALILEA),
            (745, 'Felipe', ['Tetrarca, 4 a.C.–34 d.C.', 'Gaulanítide, Traconite…', 'Capital: Cesarea de Filipo'], FELIPE),
            (1035, 'La Decápolis', ['Ciudades griegas', 'bajo la provincia de Siria', 'Gadara, Gerasa, Escitópolis'], DECAPOLIS)]
    for cx, ti, ls, c in cols:
        nodo(cx, Y3, 270, 132, ti, ls, c)
        o.append(f'<path d="M600,336 V368 H{cx} V{Y3 - 4}" fill="none" stroke="{MUTED}" stroke-width="2.5" marker-end="url(#pf)"/>')
    o.append(t(612, 356, 'Roma decide quién gobierna cada región', 14, MUTED, anchor='start', italic=True))
    # el templo bajo el prefecto
    Y4 = 610
    nodo(165, Y4, 270, 112, 'Sumo sacerdote', ['Caifás, 18–36 d.C.', 'nombrado por el prefecto'], TEMPLO)
    flecha(o, 165, Y3 + 132, 165, Y4 - 4, MUTED, True)
    o.append(t(178, Y3 + 160, 'nombra', 14, MUTED, anchor='start', italic=True))
    nodo(455, Y4, 270, 112, 'El Sanedrín', ['Consejo de Jerusalén', 'sacerdotes, escribas y ancianos'], TEMPLO, False)
    o.append(f'<line x1="300" y1="{Y4 + 56}" x2="318" y2="{Y4 + 56}" stroke="{TEMPLO}" stroke-width="3"/>')
    o.append(t(455, Y4 + 140, 'Preside el sumo sacerdote', 14, MUTED, italic=True))
    caja(o, 640, Y4, 520, 112, '#fff', GRIS, 12)
    o.append(t(900, Y4 + 34, 'Lo que podía y no podía hacer', 19, INK, weight='bold', font=SERIF))
    o.append(t(900, Y4 + 62, 'Juzgaba según la ley de Moisés y cuidaba el templo,', 15, MUTED))
    o.append(t(900, Y4 + 84, 'pero no podía ejecutar sin el prefecto: «A nosotros no', 15, MUTED))
    o.append(t(900, Y4 + 104, 'nos está permitido dar muerte a nadie» (Juan 18:31).', 15, MUTED))
    o.append(t(600, 800, 'Por eso Jesús fue juzgado dos veces: ante el Sanedrín y ante Pilato.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-poder', o)


# 2. Gobernantes del 6 a.C. al 74 d.C.
def gobernantes():
    H = 900
    o = lienzo('Los gobernantes del Nuevo Testamento', 'Del nacimiento de Jesús a la caída de Masada (6 a.C.–74 d.C.)', H)
    X0, X1, A0, A1 = 250, 1160, -6, 74
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    filas = [
        ('Emperador', ROMANO, [(-6, 14, 'Augusto'), (14, 37, 'Tiberio'), (37, 41, 'Calígula'), (41, 54, 'Claudio'), (54, 68, 'Nerón'), (69, 74, 'Vespasiano')]),
        ('Judea', ROMANO, [(-6, -4, 'Herodes'), (-4, 6, 'Arquelao'), (6, 26, 'Prefectos'), (26, 36, 'Pilato'), (36, 41, 'Prefectos'), (41, 44, 'Agripa I'), (44, 66, 'Procuradores (Félix, Festo)'), (66, 74, 'Guerra')]),
        ('Galilea y Perea', GALILEA, [(-6, -4, 'Herodes'), (-4, 39, 'Herodes Antipas'), (39, 44, 'Agripa I'), (44, 66, 'Procuradores y Agripa II'), (66, 74, 'Guerra')]),
        ('Tetrarquía de Felipe', FELIPE, [(-6, -4, 'Herodes'), (-4, 34, 'Felipe'), (34, 37, 'Siria'), (37, 44, 'Agripa I'), (44, 53, 'Procur.'), (53, 74, 'Agripa II')]),
        ('Sumo sacerdote', TEMPLO, [(6, 15, 'Anás'), (15, 18, '…'), (18, 36, 'Caifás'), (36, 47, 'Familia de Anás'), (47, 59, 'Ananías'), (59, 70, 'Varios')]),
    ]
    Y0, FH = 150, 84
    for i, (n, c, tramos) in enumerate(filas):
        y = Y0 + i * FH
        o.append(t(40, y + 40, n, 17, INK, anchor='start', weight='bold'))
        for k, (a, b, s) in enumerate(tramos):
            gris = s in ('…', 'Varios', 'Guerra', 'Prefectos', 'Procur.', 'Siria')
            fondo = GRIS if gris else c
            caja(o, X(a) + 1.5, y + 12, X(b) - X(a) - 3, 48, fondo, None, 6)
            ancho = X(b) - X(a)
            cortos = {'Calígula': 'Calíg.', 'Vespasiano': 'Vesp.', 'Agripa I': 'Ag. I', 'Prefectos': 'Pref.', 'Familia de Anás': 'Fam. de Anás', 'Herodes': 'H.', 'Siria': 'Siria'}
            for et, tam in ((s, 15), (cortos.get(s, s), 13)):
                if len(et) * tam * 0.58 < ancho - 6:
                    o.append(t((X(a) + X(b)) / 2, y + 42, et, tam, INK if gris else '#fff', weight='bold'))
                    break
    # eje
    ye = Y0 + len(filas) * FH + 10
    o.append(f'<line x1="{X0}" y1="{ye}" x2="{X1}" y2="{ye}" stroke="{MUTED}" stroke-width="2"/>')
    for a in [-6, 1, 10, 20, 30, 40, 50, 60, 70]:
        o.append(f'<line x1="{X(a):.0f}" y1="{ye}" x2="{X(a):.0f}" y2="{ye + 10}" stroke="{MUTED}" stroke-width="2"/>')
        o.append(t(X(a), ye + 30, f'{-a} a.C.' if a < 0 else f'{a} d.C.', 14, MUTED))
    # hechos
    hechos = [(-5, 'Nace Jesús', 'c. 6–4 a.C.', JESUS, 0), (6, 'Censo de Quirinio', '6 d.C.', ROMANO, 1),
              (28, 'Ministerio de Jesús', 'c. 27–30', JESUS, 0), (31, 'Cruz y resurrección', 'c. 30 o 33', JESUS, 1),
              (44, 'Muere Jacobo', 'Hechos 12', IGLESIA, 0), (62, 'Muere Santiago', 'hermano del Señor', IGLESIA, 1),
              (70, 'Cae el templo', '70 d.C.', GUERRA, 0)]
    base = ye + 70
    for a, s, f, c, fila in hechos:
        x = X(a); y = base + fila * 76
        o.append(f'<line x1="{x:.0f}" y1="{Y0 + 8}" x2="{x:.0f}" y2="{y - 10}" stroke="{c}" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.6"/>')
        o.append(f'<circle cx="{x:.0f}" cy="{y}" r="7" fill="{c}"/>')
        o.append(t(x, y + 28, s, 15, INK, weight='bold'))
        o.append(t(x, y + 46, f, 13, MUTED))
    o.append(t(600, 880, 'Las fechas de la vida de Jesús son aproximadas; se estudian en la Cronología del Nuevo Testamento.', 15, MUTED, italic=True))
    guardar('esquema-gobernantes', o)


# 3. El año judío y sus fiestas
def calendario():
    import math
    H = 1080
    o = lienzo('El año judío en tiempos de Jesús', 'Meses, fiestas, peregrinaciones y cosechas', H)
    cx, cy, R1, R2, R3 = 600, 545, 170, 300, 360
    meses = [('Nisán', 'mar–abr'), ('Iyar', 'abr–may'), ('Siván', 'may–jun'), ('Tamuz', 'jun–jul'), ('Av', 'jul–ago'), ('Elul', 'ago–sep'),
             ('Tishri', 'sep–oct'), ('Hesván', 'oct–nov'), ('Quisleu', 'nov–dic'), ('Tébet', 'dic–ene'), ('Sebat', 'ene–feb'), ('Adar', 'feb–mar')]
    estacion = ['#e7d9a8', '#e7d9a8', '#e7d9a8', '#efd08a', '#efd08a', '#efd08a', '#cfe0e8', '#cfe0e8', '#bcd2e0', '#bcd2e0', '#bcd2e0', '#cfe0e8']
    def pt(r, ang):
        a = math.radians(ang - 90)
        return cx + r * math.cos(a), cy + r * math.sin(a)
    for i, (m, eq) in enumerate(meses):
        a0, a1 = i * 30, (i + 1) * 30
        p = [pt(R2, a0), pt(R2, a1), pt(R1, a1), pt(R1, a0)]
        o.append(f'<path d="M{p[0][0]:.1f},{p[0][1]:.1f} A{R2},{R2} 0 0 1 {p[1][0]:.1f},{p[1][1]:.1f} L{p[2][0]:.1f},{p[2][1]:.1f} A{R1},{R1} 0 0 0 {p[3][0]:.1f},{p[3][1]:.1f} Z" fill="{estacion[i]}" stroke="{BG}" stroke-width="3"/>')
        x, y = pt((R1 + R2) / 2, a0 + 15)
        o.append(t(x, y - 2, m, 18, INK, weight='bold', font=SERIF))
        o.append(t(x, y + 18, eq, 13, MUTED))
    o.append(f'<circle cx="{cx}" cy="{cy}" r="{R1 - 6}" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
    o.append(t(cx, cy - 46, 'Año religioso', 20, INK, font=SERIF, weight='bold'))
    o.append(t(cx, cy - 20, 'empieza en Nisán', 15, MUTED))
    o.append(t(cx, cy + 14, '«Este mes os será', 15, INK, font=SERIF, italic=True))
    o.append(t(cx, cy + 34, 'principio de los meses»', 15, INK, font=SERIF, italic=True))
    o.append(t(cx, cy + 56, '(Éxodo 12:2)', 13, MUTED))
    o.append(t(cx, cy + 96, 'En rojo: las fiestas', 14, ACC, weight='bold'))
    o.append(t(cx, cy + 114, 'de peregrinación', 14, ACC, weight='bold'))
    # fiestas: (ángulo dentro del año, texto, cita, peregrinación)
    fiestas = [(13, 'Pascua y Panes sin levadura', 'Nisán 14–21 · Juan 2:13', True),
               (66, 'Pentecostés', 'Siván 6 · Hechos 2:1', True),
               (184, 'Trompetas y Expiación', 'Tishri 1 y 10 · Hechos 27:9', False),
               (196, 'Tabernáculos', 'Tishri 15–22 · Juan 7:2', True),
               (264, 'Dedicación (Janucá)', 'Quisleu 25 · Juan 10:22', False),
               (343, 'Purim', 'Adar 14–15 · Ester 9', False)]
    for ang, s, c, pere in fiestas:
        x0, y0 = pt(R2 + 4, ang)
        x1, y1 = pt(R3, ang)
        o.append(f'<line x1="{x0:.0f}" y1="{y0:.0f}" x2="{x1:.0f}" y2="{y1:.0f}" stroke="{ACC if pere else MUTED}" stroke-width="2"/>')
        o.append(f'<circle cx="{x0:.0f}" cy="{y0:.0f}" r="6" fill="{ACC if pere else MUTED}"/>')
        if 170 < ang < 200:   # las dos fiestas de Tishri, abajo: una a cada lado
            x1, y1 = pt(R3 + 10, ang)
            anchor = 'start' if ang < 190 else 'end'
            dx = 14 if anchor == 'start' else -14
            o.append(f'<line x1="{x0:.0f}" y1="{y0:.0f}" x2="{x1:.0f}" y2="{y1:.0f}" stroke="{ACC if pere else MUTED}" stroke-width="2"/>')
            y1 += 12 if anchor == 'start' else 40
        else:
            anchor = 'start' if 0 < ang < 180 else 'end'
            dx = 10 if anchor == 'start' else -10
        o.append(t(x1 + dx, y1 - 2, s, 17, ACC if pere else INK, anchor=anchor, weight='bold'))
        o.append(t(x1 + dx, y1 + 18, c, 14, MUTED, anchor=anchor))
    # leyenda de estaciones
    ly = 1040
    for i, (c, s) in enumerate([('#e7d9a8', 'Primavera: cebada y trigo'), ('#efd08a', 'Verano seco: uvas e higos'),
                                ('#cfe0e8', 'Lluvia temprana y tardía, olivas'), ('#bcd2e0', 'Invierno lluvioso')]):
        x = 60 + i * 285
        caja(o, x, ly - 16, 22, 22, c, None, 5)
        o.append(t(x + 30, ly, s, 14, INK, anchor='start'))
    guardar('esquema-calendario', o)


# 4. La última semana
def semana():
    H = 820
    o = lienzo('La última semana', 'De la entrada en Jerusalén a la resurrección, día por día', H)
    dias = [
        ('Domingo', ['Entrada en', 'Jerusalén', 'Mateo 21:1-11'], JESUS),
        ('Lunes', ['Purifica', 'el templo', 'Marcos 11:15-19'], JESUS),
        ('Martes', ['Preguntas', 'en el templo', 'Mateo 22–25'], JESUS),
        ('Miércoles', ['Judas pacta', 'la entrega', 'Mateo 26:14-16'], MUTED),
        ('Jueves', ['Cena pascual', 'y Getsemaní', 'Mateo 26:17-56'], TEMPLO),
        ('Viernes', ['Juicio, cruz', 'y sepultura', 'Mateo 27:1-61'], ROMANO),
        ('Sábado', ['El sepulcro', 'sellado', 'Mateo 27:62-66'], MUTED),
        ('Domingo', ['¡Ha', 'resucitado!', 'Mateo 28:1-10'], IGLESIA),
    ]
    CW = 138; X0 = (W - CW * 8) / 2
    for i, (d, ls, c) in enumerate(dias):
        x = X0 + i * CW
        caja(o, x + 4, 150, CW - 8, 60, c, None, 8)
        o.append(t(x + CW / 2, 188, d, 18, '#fff', weight='bold'))
        caja(o, x + 4, 222, CW - 8, 112, '#fff', c, 8)
        for k, l in enumerate(ls):
            o.append(t(x + CW / 2, 256 + k * 26, l, 16 if k < 2 else 13, INK if k < 2 else MUTED, weight='bold' if k < 2 else 'normal'))
    # el viernes por horas
    o.append(t(600, 440, 'El viernes, hora por hora (las horas judías se cuentan desde el amanecer)', 20, INK, font=SERIF))
    horas = [('Al amanecer', 'El Sanedrín confirma la sentencia', 'Lucas 22:66'), ('Por la mañana', 'Pilato, Herodes Antipas y otra vez Pilato', 'Lucas 23:1-25'),
             ('Hora tercera (9 h)', 'Lo crucifican', 'Marcos 15:25'), ('Hora sexta a novena', 'Tinieblas sobre la tierra', 'Marcos 15:33'),
             ('Hora novena (15 h)', 'Jesús entrega el espíritu', 'Marcos 15:34-37'), ('Antes de la puesta del sol', 'José de Arimatea lo sepulta', 'Lucas 23:50-54')]
    HX0, HX1 = 80, 1120
    o.append(f'<line x1="{HX0}" y1="520" x2="{HX1}" y2="520" stroke="{ROMANO}" stroke-width="4"/>')
    for i, (h, s, r) in enumerate(horas):
        x = HX0 + i * (HX1 - HX0) / (len(horas) - 1)
        o.append(f'<circle cx="{x:.0f}" cy="520" r="9" fill="{ROMANO}"/>')
        y = 560 if i % 2 == 0 else 640
        o.append(f'<line x1="{x:.0f}" y1="529" x2="{x:.0f}" y2="{y - 18}" stroke="{GRIS}" stroke-width="1.5"/>')
        anc = 'start' if i == 0 else 'end' if i == len(horas) - 1 else 'middle'
        o.append(t(x, y, h, 15, ROMANO, anchor=anc, weight='bold'))
        o.append(t(x, y + 20, s, 14, INK, anchor=anc))
        o.append(t(x, y + 38, r, 13, MUTED, anchor=anc))
    o.append(t(600, 740, 'El orden de algunos hechos del lunes al miércoles es aproximado; la Armonía de los evangelios los sigue paso a paso.', 15, MUTED, italic=True))
    o.append(t(600, 786, '«Y al tercer día resucitará» (Mateo 20:19).', 18, INK, font=SERIF, italic=True))
    guardar('esquema-semana', o)


poder()
gobernantes()
calendario()
semana()
print('Esquemas en', OUT)
