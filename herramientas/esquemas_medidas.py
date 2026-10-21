# Uso: python3 herramientas/esquemas_medidas.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Pesos, medidas, monedas y horas bíblicas» (origen: 'esquema').
# Mismo estilo que esquemas_palabra.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Las equivalencias coinciden con public/apps/medidas-biblicas/calculadora/unidades.js.
import os, math
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'medidas-biblicas', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; CLARO = '#e7e2d6'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; GRAFITO = '#4a4a4a'; NOCHE = '#2b3350'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 860


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x:.1f}" y="{y:.1f}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub=None):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">', f'<rect width="{W}" height="{H}" fill="{BG}"/>',
         '<defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke"/></marker></defs>']
    o.append(t(600, 64, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 98, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def rect(o, x, y, w, h, fondo, borde=None, rx=10, sw=2):
    b = f' stroke="{borde}" stroke-width="{sw}"' if borde else ''
    o.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{rx}" fill="{fondo}"{b}/>')


def linea(o, x1, y1, x2, y2, c=GRIS, w=2, flecha=False, dash=None):
    m = ' marker-end="url(#fl)"' if flecha else ''
    d = f' stroke-dasharray="{dash}"' if dash else ''
    o.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{c}" stroke-width="{w}"{m}{d}/>')


def persona(o, x, base, alto_px, c=GRAFITO):
    # silueta simple de pie: cabeza + cuerpo, alto_px desde los pies (base) hacia arriba
    r = alto_px * 0.075
    cy = base - alto_px + r
    o.append(f'<circle cx="{x:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="{c}"/>')
    w = alto_px * 0.24
    top = cy + r * 1.15
    o.append(f'<path d="M{x - w / 2:.1f},{base:.1f} L{x - w / 2:.1f},{top + w * 0.3:.1f} Q{x - w / 2:.1f},{top:.1f} {x:.1f},{top:.1f} Q{x + w / 2:.1f},{top:.1f} {x + w / 2:.1f},{top + w * 0.3:.1f} L{x + w / 2:.1f},{base:.1f} Z" fill="{c}"/>')


# 1. El codo y sus divisiones
def codo():
    o = lienzo('El codo y sus divisiones', 'Medidas tomadas del cuerpo humano (codo común de 44,5 cm)')
    x0, y0, esc = 300, 150, 600 / 52  # px por cm, para que quepa el codo largo
    L = 44.5 * esc
    o.append(f'<path d="M{x0},{y0 + 60} Q{x0 - 30},{y0 + 95} {x0},{y0 + 130} L{x0 + L * 0.62},{y0 + 122} Q{x0 + L * 0.72},{y0 + 140} {x0 + L * 0.8},{y0 + 128} L{x0 + L},{y0 + 104} Q{x0 + L + 10},{y0 + 95} {x0 + L},{y0 + 88} L{x0 + L * 0.8},{y0 + 70} Q{x0 + L * 0.7},{y0 + 52} {x0 + L * 0.6},{y0 + 66} Z" fill="{CLARO}" stroke="{GRIS}" stroke-width="2"/>')
    o.append(t(x0 - 20, y0 + 100, 'codo', 17, MUTED, 'end', italic=True))
    o.append(t(x0 + L + 24, y0 + 100, 'punta del dedo medio', 17, MUTED, 'start', italic=True))
    filas = [('Dedo', 1.85, '1,9 cm', TEAL), ('Palmo menor', 7.4, '4 dedos · 7,4 cm', AZUL), ('Palmo', 22.25, '3 palmos menores · 22 cm', VERDE),
             ('Codo común', 44.5, '2 palmos · 44,5 cm', ORO), ('Codo largo', 51.9, 'codo y palmo menor · 52 cm', ROJO)]
    y = y0 + 190
    for n, cm, txt, c in filas:
        w = cm * esc
        rect(o, x0, y, w, 44, c, rx=6)
        if cm > 8:
            k = 1
            while k * 7.4167 < cm - 0.5:
                xx = x0 + k * 7.4167 * esc
                linea(o, xx, y + 4, xx, y + 40, BG, 2)
                k += 1
        o.append(t(x0 - 16, y + 29, n, 19, INK, 'end', 'bold'))
        o.append(t(x0 + w + 14, y + 29, txt, 17, INK, 'start'))
        y += 76
    o.append(t(600, 790, 'Dos codos comunes son casi un metro (89 cm). Las líneas claras marcan los palmos menores.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-codo', o)


# 2. El arca, el templo y el tabernáculo a escala
def arca():
    o = lienzo('A la misma escala', 'Largo y alto en metros, con el codo común de 44,5 cm')
    esc = 6.6  # px por metro
    base = 640; x0 = 120
    linea(o, 80, base, 1120, base, GRIS, 2)

    def bloque(x, largo, alto, c, nombre, medida):
        rect(o, x, base - alto * esc, largo * esc, alto * esc, c, rx=4)
        o.append(t(x + largo * esc / 2, base - alto * esc - 34, nombre, 19, INK, weight='bold'))
        o.append(t(x + largo * esc / 2, base - alto * esc - 12, medida, 16, MUTED))
    # arca
    bloque(x0, 133.5, 13.4, ORO, 'El arca de Noé', '133 × 13 m (300 × 30 codos)')
    # cancha de fútbol (largo) debajo
    y2 = base + 40
    rect(o, x0, y2, 105 * esc, 14, VERDE, rx=3)
    o.append(t(x0 + 105 * esc + 12, y2 + 12, 'cancha de fútbol: 105 m', 16, VERDE, 'start'))
    persona(o, x0 + 133.5 * esc + 40, base, 1.7 * esc * 1.0 + 0.0, GRAFITO)
    o.append(t(x0 + 133.5 * esc + 40, base + 24, 'persona', 14, MUTED))
    # templo y tabernáculo en una segunda línea
    base2 = 340
    linea(o, 80, base2, 1120, base2, GRIS, 2)
    for x, l, a, c, n, m in [(x0, 26.7, 13.4, MORADO, 'Templo de Salomón', '27 × 13 m'), (x0 + 260, 13.4, 4.5, AZUL, 'Tabernáculo', '13 × 4,5 m'), (x0 + 430, 1.1, 0.7, ROJO, 'Arca del pacto', '1,1 × 0,7 m')]:
        rect(o, x, base2 - a * esc, l * esc, a * esc, c, rx=3)
        o.append(t(x + max(l * esc, 60) / 2, base2 - a * esc - 34, n, 19, INK, weight='bold'))
        o.append(t(x + max(l * esc, 60) / 2, base2 - a * esc - 12, m, 16, MUTED))
    persona(o, x0 + 520, base2, 1.7 * esc, GRAFITO)
    o.append(t(x0 + 520, base2 + 24, 'persona (1,70 m)', 14, MUTED))
    o.append(t(600, 800, 'El arca era más larga que una cancha de fútbol; el tabernáculo, más pequeño que una casa.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-arca', o)


# 3. Alturas: Goliat
def alturas():
    o = lienzo('¿Cuánto medía Goliat?', '1 Samuel 17:4, según el texto hebreo y según otros manuscritos')
    base = 760; esc = 190  # px por metro
    linea(o, 100, base, 1100, base, GRIS, 3)
    for y in range(0, 4):
        yy = base - y * esc
        linea(o, 100, yy, 1100, yy, CLARO, 1, dash='6 6')
        o.append(t(90, yy + 6, f'{y} m', 16, MUTED, 'end'))
    gente = [(260, 1.60, GRAFITO, 'Israelita de la época', '1,60 m'),
             (560, 2.0, AZUL, 'Cuatro codos y un palmo', '2,0 m · Septuaginta, Qumrán'),
             (880, 2.9, ROJO, 'Seis codos y un palmo', '2,9 m · texto hebreo (RV 1960)')]
    for x, m, c, n, s in gente:
        persona(o, x, base, m * esc, c)
        o.append(t(x, base - m * esc - 40, n, 19, c, weight='bold'))
        o.append(t(x, base - m * esc - 16, s, 16, MUTED))
    o.append(t(600, 815, 'Con cualquiera de las dos cifras, Goliat superaba con mucho a un hombre común.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-alturas', o)


# 4. Distancias
def distancias():
    o = lienzo('Distancias bíblicas en kilómetros', 'Estadio de 185 m; codo de 44,5 cm')
    datos = [('Camino de un día de reposo', 'Hch 1:12 · 2.000 codos', 0.9, TEAL),
             ('Betania a Jerusalén', 'Jn 11:18 · 15 estadios', 2.8, AZUL),
             ('La barca de los discípulos', 'Jn 6:19 · 25 a 30 estadios', 5.0, MORADO),
             ('Jerusalén a Emaús', 'Lc 24:13 · 60 estadios', 11.1, VERDE),
             ('Jerusalén a Jericó', 'Lc 10:30', 27, ORO),
             ('Camino de un día', 'Lc 2:44', 30, ROJO)]
    x0 = 430; esc = 680 / 32; y = 170
    for n, r, km, c in datos:
        o.append(t(x0 - 16, y + 22, n, 19, INK, 'end', 'bold'))
        o.append(t(x0 - 16, y + 46, r, 15, MUTED, 'end'))
        rect(o, x0, y + 6, km * esc, 36, c, rx=6)
        o.append(t(x0 + km * esc + 12, y + 31, f'{str(km).replace(".", ",")} km', 18, INK, 'start', 'bold'))
        y += 90
    for k in range(0, 31, 5):
        xx = x0 + k * esc
        linea(o, xx, 160, xx, y, CLARO, 1, dash='4 6')
        o.append(t(xx, y + 24, f'{k}', 14, MUTED))
    o.append(t(x0 + 15 * esc, y + 46, 'kilómetros', 14, MUTED))
    o.append(t(600, 815, 'Una persona a pie recorría entre 25 y 35 kilómetros en un día.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-distancias', o)


# 5. Capacidad
def capacidad():
    o = lienzo('Medidas de capacidad', 'Áridos (grano y harina) y líquidos: efa y bato son la misma medida')
    niveles = [('Homer o coro', '220 L', '= 10 efas o 10 batos', ROJO, 'Ez 45:11'),
               ('Efa · bato', '22 L', '= 3 seahs = 10 gomeres = 6 hines', ORO, 'Rt 2:17; 1 R 7:26'),
               ('Seah («medida»)', '7,3 L', '= 6 cabs', VERDE, 'Gn 18:6; Mt 13:33'),
               ('Hin (líquidos)', '3,7 L', '= 12 logs', TEAL, 'Éx 29:40'),
               ('Gomer', '2,2 L', 'décima parte del efa', AZUL, 'Éx 16:16, 36'),
               ('Cab', '1,2 L', '= 4 logs', MORADO, '2 R 6:25'),
               ('Log', '0,3 L', 'la medida más pequeña', GRAFITO, 'Lv 14:10')]
    y = 140; maxw = 520; x0 = 400
    for n, l, eq, c, r in niveles:
        litros = float(l.split()[0].replace(',', '.'))
        w = max(14, maxw * math.sqrt(litros / 220))
        rect(o, x0, y + 8, w, 54, c, rx=8)
        o.append(t(x0 + w + 14, y + 43, l, 22, c, 'start', 'bold'))
        o.append(t(x0 - 20, y + 32, n, 20, INK, 'end', 'bold'))
        o.append(t(x0 - 20, y + 56, eq, 15, MUTED, 'end'))
        o.append(t(1150, y + 43, r, 15, MUTED, 'end', italic=True))
        y += 92
    o.append(t(600, 820, 'El largo de cada barra es proporcional a la raíz de su capacidad, para que las pequeñas se vean.', 16, MUTED, italic=True))
    guardar('esquema-capacidad', o)


# 6. Pesas
def pesas():
    o = lienzo('Las pesas de Israel', 'Del gera al talento (siclo de 11,4 g)')
    datos = [('Gera', '0,57 g', '1/20 de siclo', GRAFITO), ('Beka', '5,7 g', 'medio siclo', TEAL), ('Pim', '7,8 g', '2/3 de siclo', AZUL),
             ('Siclo', '11,4 g', '20 geras', VERDE), ('Mina', '570 g', '50 siclos', ORO), ('Talento', '34 kg', '60 minas · 3.000 siclos', ROJO)]
    x = 110; base = 520
    for i, (n, g, eq, c) in enumerate(datos):
        r = 22 + i * 13
        cx = x + r
        o.append(f'<path d="M{cx - r},{base} Q{cx - r},{base - r * 1.6} {cx},{base - r * 1.6} Q{cx + r},{base - r * 1.6} {cx + r},{base} Z" fill="{c}"/>')
        o.append(t(cx, base + 34, n, 20, INK, weight='bold'))
        o.append(t(cx, base + 58, g, 18, c, weight='bold'))
        o.append(t(cx, base + 80, eq, 14, MUTED))
        x += 2 * r + 56
    linea(o, 70, base, 1130, base, GRIS, 3)
    rect(o, 160, 650, 880, 120, '#ffffff', GRIS, rx=12)
    o.append(t(600, 688, 'Éxodo 38:25-26: 603.550 hombres × medio siclo = 301.775 siclos', 19, INK))
    o.append(t(600, 720, '= 100 talentos + 1.775 siclos  →  1 talento = 3.000 siclos', 19, ACC, weight='bold'))
    o.append(t(600, 750, 'El propio texto bíblico conserva la clave del sistema.', 16, MUTED, italic=True))
    o.append(t(600, 160, 'Las pesas no están a escala: un talento pesa unas 60.000 veces más que un gera.', 16, MUTED, italic=True))
    guardar('esquema-pesas', o)


# 7. Monedas del NT
def monedas():
    o = lienzo('Las monedas del Nuevo Testamento', 'Equivalencias en tiempos de Jesús')
    pasos = [('2 blancas (leptos)', '= 1 cuadrante', 'Mr 12:42', GRAFITO), ('4 cuadrantes', '= 1 cuarto (as)', 'Mt 10:29', MORADO),
             ('16 cuartos', '= 1 denario = 1 dracma', 'Mt 20:2; Lc 15:8', AZUL), ('2 dracmas', '= impuesto del templo', 'Mt 17:24', TEAL),
             ('4 dracmas', '= 1 estatero (siclo de Tiro)', 'Mt 17:27', VERDE), ('100 dracmas', '= 1 mina', 'Lc 19:13', ORO),
             ('6.000 denarios', '= 1 talento', 'Mt 25:15', ROJO)]
    y = 140
    for i, (a, b, r, c) in enumerate(pasos):
        x = 120 + i * 40
        rect(o, x, y, 760, 70, '#ffffff', c, rx=12, sw=3)
        o.append(f'<circle cx="{x + 40}" cy="{y + 35}" r="22" fill="{c}"/>')
        o.append(t(x + 40, y + 42, str(i + 1), 18, '#ffffff', weight='bold'))
        o.append(t(x + 80, y + 44, a, 21, INK, 'start', 'bold'))
        o.append(t(x + 330, y + 44, b, 20, c, 'start', 'bold'))
        o.append(t(x + 745, y + 44, r, 15, MUTED, 'end', italic=True))
        y += 88
    rect(o, 120, 770, 960, 56, CLARO, rx=10)
    o.append(t(600, 806, '1 denario = el pago de un día de trabajo · 1 denario = 128 blancas', 20, INK, font=SERIF))
    guardar('esquema-monedas', o)


# 8. Jornales
def jornales():
    o = lienzo('Sumas de los evangelios en días de trabajo', '1 denario = 1 día; unos 300 días de trabajo al año')
    datos = [('2 denarios', 'Lc 10:35 · el buen samaritano', 2, TEAL, '2 días'), ('100 denarios', 'Mt 18:28 · la deuda del consiervo', 100, AZUL, '100 días · unos 4 meses'),
             ('1 mina', 'Lc 19:13', 100, MORADO, '100 días · unos 4 meses'), ('200 denarios', 'Jn 6:7 · pan para la multitud', 200, VERDE, '200 días · unos 8 meses'),
             ('300 denarios', 'Jn 12:5 · el perfume de María', 300, ORO, '300 días · un año'), ('1 talento', 'Mt 25:15', 6000, ROJO, '')]
    x0 = 420; esc = 520 / 300; y = 150
    for n, r, d, c, lab in datos:
        o.append(t(x0 - 16, y + 26, n, 20, INK, 'end', 'bold'))
        o.append(t(x0 - 16, y + 50, r, 15, MUTED, 'end'))
        w = min(d, 300) * esc
        rect(o, x0, y + 10, max(w, 6), 36, c, rx=6)
        if d > 300:
            o.append(f'<path d="M{x0 + w - 4},{y + 10} l14,18 l-14,18" fill="none" stroke="{BG}" stroke-width="4"/>')
            o.append(t(x0 + 10, y + 78, '6.000 días · unos 20 años: la barra real sería 20 veces más larga', 16, c, 'start', 'bold'))
        else:
            o.append(t(x0 + w + 12, y + 35, lab, 17, INK, 'start', 'bold'))
        y += 100
    o.append(t(600, 815, 'Diez mil talentos (Mt 18:24) serían unos 200.000 años de trabajo.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-jornales', o)


# 9. El día bíblico
def dia():
    o = lienzo('¿Cuándo empieza el día?', '«Y fue la tarde y la mañana un día» (Génesis 1:5)')
    x0, x1 = 120, 1080
    hpx = (x1 - x0) / 48  # dos días de 24 h, desde el mediodía del jueves al mediodía del sábado

    def X(h):
        return x0 + h * hpx
    # franja de luz y oscuridad (amanecer 6, atardecer 18 en horas desde las 0 del viernes, desfase 12)
    for y, tit in [(200, 'Día moderno'), (420, 'Día bíblico')]:
        o.append(t(x0, y - 50, tit, 20, MUTED, 'start', 'bold'))
        for (a, b, c) in [(0, 6, NOCHE), (6, 18, '#f2d48a'), (18, 30, NOCHE), (30, 42, '#f2d48a'), (42, 48, NOCHE)]:
            o.append(f'<rect x="{X(a):.1f}" y="{y}" width="{(b - a) * hpx:.1f}" height="60" fill="{c}"/>')
    # cortes modernos a medianoche (h=12 y 36 desde mediodía jueves)
    for h, lab in [(12, 'viernes 0:00'), (36, 'sábado 0:00')]:
        linea(o, X(h), 190, X(h), 270, ACC, 4)
        o.append(t(X(h), 300, lab, 16, ACC))
    linea(o, X(12), 176, X(36), 176, INK, 2)
    o.append(t((X(12) + X(36)) / 2, 168, 'viernes', 20, INK, weight='bold'))
    # cortes bíblicos al atardecer (h=6 y 30)
    for h, lab in [(6, 'jueves al ponerse el sol'), (30, 'viernes al ponerse el sol')]:
        linea(o, X(h), 410, X(h), 490, ACC, 4)
        o.append(t(X(h), 520, lab, 16, ACC))
    linea(o, X(6), 396, X(30), 396, INK, 2)
    o.append(t((X(6) + X(30)) / 2, 388, 'sexto día: la preparación', 20, INK, weight='bold'))
    linea(o, X(30), 396, X(48), 396, ACC, 2)
    o.append(t((X(30) + X(48)) / 2, 388, 'día de reposo →', 20, ACC, weight='bold'))
    rect(o, 160, 600, 880, 150, '#ffffff', GRIS, rx=12)
    o.append(t(600, 640, 'El sábado comienza el viernes al ponerse el sol y termina el sábado al ponerse el sol.', 19, INK))
    o.append(t(600, 676, 'Por eso Jesús fue sepultado de prisa: «estaba para comenzar el día de reposo» (Lc 23:54).', 18, MUTED))
    o.append(t(600, 712, 'Las doce horas del día van del amanecer a la puesta del sol (Jn 11:9).', 18, MUTED))
    guardar('esquema-dia', o)


# 10. Horas y vigilias
def horas():
    o = lienzo('Las horas del día y las vigilias de la noche', 'Equivalencias aproximadas: hora bíblica + 6 = hora del reloj')
    cx, cy, R = 600, 500, 260
    # 24 h con el mediodía arriba, en sentido horario
    def ang(h):
        return math.radians((h - 12) / 24 * 360 - 90)
    def P(h, r):
        return cx + r * math.cos(ang(h)), cy + r * math.sin(ang(h))
    def sector(a, b, r1, r2, c):
        x1, y1 = P(a, r2); x2, y2 = P(b, r2); x3, y3 = P(b, r1); x4, y4 = P(a, r1)
        large = 1 if (b - a) > 12 else 0
        o.append(f'<path d="M{x1:.1f},{y1:.1f} A{r2},{r2} 0 {large} 1 {x2:.1f},{y2:.1f} L{x3:.1f},{y3:.1f} A{r1},{r1} 0 {large} 0 {x4:.1f},{y4:.1f} Z" fill="{c}" stroke="{BG}" stroke-width="2"/>')
    for k in range(12):
        c = ORO if k + 1 in (3, 6, 9, 11) else ('#f2d48a' if k % 2 == 0 else '#ead08a')
        sector(6 + k, 7 + k, 150, R, c)
        x, y = P(6.5 + k, 206)
        o.append(t(x, y + 7, str(k + 1), 20, '#ffffff' if k + 1 in (3, 6, 9, 11) else INK, weight='bold'))
    nombres = ['1.ª anochecer', '2.ª medianoche', '3.ª canto del gallo', '4.ª la mañana']
    for k in range(4):
        sector(18 + 3 * k, 21 + 3 * k, 150, R, NOCHE if k % 2 == 0 else '#38426a')
        x, y = P(19.5 + 3 * k, 206)
        o.append(t(x, y + 6, nombres[k], 15, '#ffffff', weight='bold'))
    o.append(f'<circle cx="{cx}" cy="{cy}" r="146" fill="#ffffff" stroke="{GRIS}" stroke-width="2"/>')
    for h in range(0, 24, 3):
        x, y = P(h, 122)
        o.append(t(x, y + 6, f'{h}:00', 15, MUTED))
    o.append(t(cx, cy - 8, 'Las horas', 19, INK, font=SERIF))
    o.append(t(cx, cy + 18, 'del reloj', 19, INK, font=SERIF))
    lab = [(8.5, 'Hora tercera · 9:00', 'Pentecostés (Hch 2:15)', 'end'), (11.5, 'Hora sexta · 12:00', 'El pozo de Sicar (Jn 4:6)', 'end'),
           (14.5, 'Hora novena · 15:00', 'La hora de la oración (Hch 3:1)', 'start'), (16.5, 'Hora undécima · 17:00', 'Los últimos obreros (Mt 20:6)', 'start')]
    pos = {8.5: (330, 250), 11.5: (500, 200), 14.5: (870, 250), 16.5: (900, 400)}
    for h, a, b, anc in lab:
        x, y = P(h, R + 2)
        lx, ly = pos[h]
        linea(o, x, y, lx + (8 if anc == 'end' else -8), ly + 4, GRIS, 1.5)
        o.append(t(lx, ly, a, 17, INK, anc, 'bold'))
        o.append(t(lx, ly + 22, b, 15, MUTED, anc))
    o.append(t(60, 800, 'Noche: cuatro vigilias romanas (Mr 13:35)', 17, NOCHE, 'start', 'bold'))
    o.append(t(1140, 800, 'Día: doce horas, del amanecer al ocaso (Jn 11:9)', 17, ORO, 'end', 'bold'))
    guardar('esquema-horas', o)


# 11. Tres días (cuenta inclusiva)
def tres_dias():
    o = lienzo('«Al tercer día»', 'La cuenta inclusiva: una parte del día cuenta como un día')
    dias = [('Viernes', 'la preparación', 'Muerte a la hora novena y', 'sepultura antes del atardecer', 'Mr 15:42-46', 'Primer día', ROJO),
            ('Sábado', 'día de reposo', 'El cuerpo de Jesús', 'en el sepulcro', 'Lc 23:56', 'Segundo día', GRAFITO),
            ('Domingo', 'primer día de la semana', 'Resurrección', 'al amanecer', 'Mt 28:1-6', 'Tercer día', ORO)]
    for i, (d, s, a, b, r, n, c) in enumerate(dias):
        x = 90 + i * 350
        rect(o, x, 170, 320, 420, '#ffffff', c, rx=16, sw=4)
        rect(o, x, 170, 320, 70, c, rx=16)
        o.append(f'<rect x="{x}" y="215" width="320" height="25" fill="{c}"/>')
        o.append(t(x + 160, 215, d, 28, '#ffffff', weight='bold', font=SERIF))
        o.append(t(x + 160, 275, s, 17, MUTED, italic=True))
        o.append(t(x + 160, 360, a, 19, INK))
        o.append(t(x + 160, 388, b, 19, INK))
        o.append(t(x + 160, 440, r, 16, MUTED, italic=True))
        o.append(f'<circle cx="{x + 160}" cy="520" r="44" fill="{c}"/>')
        o.append(t(x + 160, 528, str(i + 1), 30, '#ffffff', weight='bold'))
        o.append(t(x + 160, 620, n, 22, c, weight='bold'))
    rect(o, 140, 680, 920, 110, CLARO, rx=12)
    o.append(t(600, 720, '«hoy es ya el tercer día que esto ha acontecido» (Lucas 24:21)', 20, INK, font=SERIF, italic=True))
    o.append(t(600, 756, 'Ester: ayuno de tres días, noche y día, y «al tercer día» entra al rey (Est 4:16; 5:1).', 17, MUTED))
    guardar('esquema-tres-dias', o)


# 12. Calendario
def calendario():
    o = lienzo('El año de Israel', 'Meses lunares, fiestas y estaciones (hemisferio norte)')
    meses = [('Nisán', 'Abib', 'mar-abr', ['Pascua', 'Primicias']), ('Iyar', 'Zif', 'abr-may', []), ('Siván', '', 'may-jun', ['Pentecostés']),
             ('Tamuz', '', 'jun-jul', []), ('Ab', '', 'jul-ago', []), ('Elul', '', 'ago-sep', []),
             ('Tisri', 'Etanim', 'sep-oct', ['Trompetas', 'Expiación', 'Tabernáculos']), ('Hesván', 'Bul', 'oct-nov', []), ('Quisleu', '', 'nov-dic', ['Dedicación']),
             ('Tebet', '', 'dic-ene', []), ('Sebat', '', 'ene-feb', []), ('Adar', '', 'feb-mar', ['Purim'])]
    x0 = 60; cw = 90; y0 = 160
    for i, (n, ant, mod, fi) in enumerate(meses):
        x = x0 + i * cw
        c = '#f2d48a' if fi else ('#efe6cf' if i % 2 == 0 else '#e6dcc0')
        rect(o, x + 3, y0, cw - 6, 270, c, rx=10)
        o.append(t(x + cw / 2, y0 + 34, str(i + 1), 26, MUTED, font=SERIF))
        o.append(t(x + cw / 2, y0 + 72, n, 18, INK, weight='bold'))
        o.append(t(x + cw / 2, y0 + 96, ant, 15, ACC, italic=True))
        o.append(t(x + cw / 2, y0 + 124, mod, 14, MUTED))
        for k, f in enumerate(fi):
            o.append(t(x + cw / 2, y0 + 190 + k * 26, f, 14, ROJO, weight='bold'))
    o.append(t(x0, y0 + 300, 'Nombres antiguos en rojo (Abib, Zif, Etanim, Bul); los demás, desde el exilio.', 15, MUTED, 'start', italic=True))
    # franja del campo
    yc = 560
    o.append(t(x0, yc - 16, 'El campo (Dt 11:14)', 19, INK, 'start', 'bold', font=SERIF))
    franjas = [(0, 1, 'Cebada', ORO), (1, 3, 'Trigo', ORO), (3, 6, 'Uvas, higos, dátiles', VERDE), (6, 7, 'Vendimia', VERDE),
               (7, 9, 'Lluvia temprana, siembra', AZUL), (9, 11, 'Lluvias de invierno', AZUL), (11, 12, 'Ll. tardía', AZUL)]
    for a, b, txt, c in franjas:
        rect(o, x0 + a * cw + 3, yc, (b - a) * cw - 6, 54, c, rx=8)
        o.append(t(x0 + (a + b) / 2 * cw, yc + 33, txt, 13, '#ffffff', weight='bold'))
    o.append(t(600, yc + 110, 'Cada dos o tres años se agregaba un segundo Adar, para que la Pascua cayera en primavera, con la siega de la cebada.', 16, MUTED, italic=True))
    o.append(t(600, yc + 140, 'En el hemisferio sur las estaciones están invertidas: la Pascua de Jerusalén cae en otoño austral.', 16, MUTED, italic=True))
    guardar('esquema-calendario', o)


# 13. Tiempo profético
def profetico():
    o = lienzo('Tres maneras de decir lo mismo', 'Daniel y Apocalipsis: el mismo período con meses de treinta días')
    filas = [('Tiempo, y tiempos, y medio tiempo', 'Dn 7:25; 12:7; Ap 12:14', '1 + 2 + ½ = 3½ años', MORADO),
             ('Cuarenta y dos meses', 'Ap 11:2; 13:5', '3½ × 12 = 42 meses', AZUL),
             ('Mil doscientos sesenta días', 'Ap 11:3; 12:6', '42 × 30 = 1.260 días', VERDE)]
    y = 160
    for n, r, c, col in filas:
        rect(o, 110, y, 980, 100, '#ffffff', col, rx=14, sw=3)
        o.append(t(140, y + 44, n, 23, col, 'start', 'bold', font=SERIF))
        o.append(t(140, y + 76, r, 16, MUTED, 'start', italic=True))
        o.append(t(1060, y + 60, c, 22, INK, 'end', 'bold'))
        y += 124
    # semana setenta
    y = 600
    o.append(t(600, y - 26, 'La semana setenta de Daniel (Dn 9:27): siete años', 20, INK, font=SERIF))
    rect(o, 160, y, 440, 70, AZUL, rx=8)
    rect(o, 600, y, 440, 70, ROJO, rx=8)
    o.append(t(380, y + 44, '3½ años · 1.260 días', 20, '#ffffff', weight='bold'))
    o.append(t(820, y + 44, '3½ años · 1.260 días', 20, '#ffffff', weight='bold'))
    linea(o, 600, y - 14, 600, y + 96, INK, 3)
    o.append(t(600, y + 124, 'A la mitad de la semana cesa el sacrificio', 17, INK))
    o.append(t(600, 800, 'El tiempo profético no permite fijar fechas: del día y la hora nadie sabe (Mt 24:36).', 18, MUTED, italic=True))
    guardar('esquema-profetico', o)


# 14. Camino a Jericó
def jerico():
    o = lienzo('De Jerusalén a Jericó', '«Un hombre descendía de Jerusalén a Jericó» (Lucas 10:30)')
    x0, x1 = 140, 1080
    y0 = 560  # nivel del mar
    esc = 0.36  # px por metro de altura
    pts = [(0, 750), (2, 800), (4, 700), (7, 560), (10, 430), (13, 300), (16, 180), (19, 60), (22, -60), (25, -200), (27, -250)]
    def X(km):
        return x0 + km / 27 * (x1 - x0)
    def Y(m):
        return y0 - m * esc
    path = ' '.join(f'{"M" if i == 0 else "L"}{X(k):.1f},{Y(m):.1f}' for i, (k, m) in enumerate(pts))
    o.append(f'<path d="{path} L{X(27):.1f},{Y(-400):.1f} L{X(0):.1f},{Y(-400):.1f} Z" fill="#e8d7b5"/>')
    o.append(f'<path d="{path}" fill="none" stroke="{ORO}" stroke-width="5"/>')
    linea(o, x0 - 20, y0, x1 + 20, y0, AZUL, 2, dash='8 6')
    o.append(t(x1 + 20, y0 - 10, 'nivel del mar', 15, AZUL, 'end', italic=True))
    for m in (800, 400, 0, -400):
        o.append(t(x0 - 30, Y(m) + 5, f'{m} m', 14, MUTED, 'end'))
    o.append(f'<circle cx="{X(0):.1f}" cy="{Y(750):.1f}" r="10" fill="{ACC}"/>')
    o.append(t(X(0) + 4, Y(750) - 22, 'Jerusalén · unos 750 m', 19, INK, 'start', 'bold'))
    o.append(f'<circle cx="{X(27):.1f}" cy="{Y(-250):.1f}" r="10" fill="{ACC}"/>')
    o.append(t(X(27), Y(-250) - 22, 'Jericó · unos −250 m', 19, INK, 'end', 'bold'))
    o.append(t(X(14), Y(330) - 30, 'desierto de Judea', 18, MUTED, italic=True))
    rect(o, 200, 730, 800, 90, '#ffffff', GRIS, rx=12)
    o.append(t(600, 768, 'Unos 27 km de camino y más de 1.000 metros de descenso', 21, INK, font=SERIF))
    o.append(t(600, 798, 'Perfil aproximado, con la altura exagerada para que se vea la pendiente.', 15, MUTED, italic=True))
    guardar('esquema-jerico', o)


# 15. Pentecostés
def pentecostes():
    o = lienzo('De las primicias a Pentecostés', '«contaréis cincuenta días» (Levítico 23:16)')
    x0, x1 = 100, 1100
    def X(d):
        return x0 + (d - 1) / 49 * (x1 - x0)
    y = 360
    rect(o, X(1), y, X(40) - X(1), 40, AZUL, rx=6)
    rect(o, X(40), y, X(50) - X(40), 40, VERDE, rx=6)
    for d in range(1, 51):
        if d % 7 == 1:
            linea(o, X(d), y - 10, X(d), y + 50, BG, 2)
    o.append(t((X(1) + X(40)) / 2, y + 27, '40 días de apariciones (Hch 1:3)', 18, '#ffffff', weight='bold'))
    o.append(t((X(40) + X(50)) / 2, y + 27, 'Espera', 16, '#ffffff', weight='bold'))
    hitos = [(1, 'Día 1', 'Primicias: resurrección', '1 Co 15:20', ORO, -1), (40, 'Día 40', 'Ascensión', 'Hch 1:9-12', AZUL, 1),
             (50, 'Día 50', 'Pentecostés, hora tercera', 'Hch 2:1-4, 15', ROJO, -1)]
    for d, a, b, r, c, lado in hitos:
        x = X(d)
        yy = y - 80 if lado < 0 else y + 130
        linea(o, x, y + (0 if lado < 0 else 40), x, yy + (20 if lado < 0 else -40), c, 3)
        anc = 'start' if d == 1 else ('end' if d == 50 else 'middle')
        o.append(t(x, yy - 30, a, 20, c, anc, 'bold'))
        o.append(t(x, yy - 6, b, 18, INK, anc))
        o.append(t(x, yy + 16, r, 15, MUTED, anc, italic=True))
    o.append(t(X(50), y - 12, '«unánimes en oración y ruego» (Hch 1:14)', 15, VERDE, 'end', italic=True))
    rect(o, 160, 620, 880, 150, '#ffffff', GRIS, rx=12)
    o.append(t(600, 660, 'Pascua: la cruz (1 Co 5:7) · Primicias: la resurrección (1 Co 15:20)', 18, INK))
    o.append(t(600, 694, 'Pentecostés: el Espíritu derramado y la primera cosecha del evangelio (Hch 2:41)', 18, INK))
    o.append(t(600, 734, 'Las líneas claras marcan las siete semanas.', 15, MUTED, italic=True))
    guardar('esquema-pentecostes', o)


for f in (codo, arca, alturas, distancias, capacidad, pesas, monedas, jornales, dia, horas, tres_dias, calendario, profetico, jerico, pentecostes):
    f()
print('Esquemas generados en', OUT)
