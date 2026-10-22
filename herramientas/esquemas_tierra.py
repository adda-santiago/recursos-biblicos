# Uso: python3 herramientas/esquemas_tierra.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «La tierra de Israel» (origen: 'esquema').
# Mismo estilo que esquemas_medidas.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Las alturas, lluvias y distancias son aproximadas (promedios modernos y cotas redondeadas);
# los perfiles exageran la escala vertical para que se vea el relieve.
# El contorno de la tierra del esquema de los vientos sale de public/apps/tierra-de-israel/tierra-geo.js
# (correr antes geo/tierra.py).
import os, json, re
RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(RAIZ, 'public', 'apps', 'tierra-de-israel', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; CLARO = '#e7e2d6'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; AGUA = '#9cc3e0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'
TIERRA = '#c9b48a'; TIERRA2 = '#a88a5c'; ARENA = '#e3cf9f'; OLIVO = '#7f9a3c'; NUBE = '#8f9bb0'
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


def rect(o, x, y, w, h, fondo, borde=None, rx=10, sw=2, op=1):
    b = f' stroke="{borde}" stroke-width="{sw}"' if borde else ''
    oo = f' fill-opacity="{op}"' if op < 1 else ''
    o.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{rx}" fill="{fondo}"{oo}{b}/>')


def linea(o, x1, y1, x2, y2, c=GRIS, w=2, flecha=False, dash=None):
    m = ' marker-end="url(#fl)"' if flecha else ''
    d = f' stroke-dasharray="{dash}"' if dash else ''
    o.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{c}" stroke-width="{w}"{m}{d}/>')


def poli(o, pts, fill, stroke=None, sw=2, op=1):
    s = f' stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"' if stroke else ''
    oo = f' fill-opacity="{op}"' if op < 1 else ''
    o.append(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in pts)}" fill="{fill}"{oo}{s}/>')


def nube(o, x, y, s=1.0, c=NUBE):
    for dx, dy, r in [(-28, 6, 20), (0, -6, 26), (28, 4, 21), (10, 12, 20), (-12, 14, 18)]:
        o.append(f'<circle cx="{x + dx * s:.1f}" cy="{y + dy * s:.1f}" r="{r * s:.1f}" fill="{c}"/>')


def lluvia(o, x, y, n=6, largo=34, sep=14, c=AZUL):
    for i in range(n):
        xx = x - (n - 1) * sep / 2 + i * sep
        linea(o, xx, y + (i % 2) * 8, xx - 8, y + (i % 2) * 8 + largo, c, 2.5)


# ---------- Perfil de un terreno (lista de [km, metros]) ----------
def perfil(o, puntos, x0, x1, ybase, km_max, m_min, m_max, alto, relleno=TIERRA):
    ex = (x1 - x0) / km_max
    ey = alto / (m_max - m_min)
    X = lambda k: x0 + k * ex
    Y = lambda m: ybase - (m - m_min) * ey
    pts = [(X(k), Y(m)) for k, m in puntos]
    poli(o, [(X(0), ybase)] + pts + [(X(puntos[-1][0]), ybase)], relleno, TIERRA2, 2)
    return X, Y


# 1. Perfil de oeste a este a la altura de Jerusalén
def perfil_oe():
    o = lienzo('De la costa a Moab', 'Perfil del terreno de oeste a este, a la altura de Jerusalén (alturas exageradas)')
    P = [[0, 0], [6, 25], [14, 60], [22, 110], [28, 190], [33, 300], [38, 380], [42, 520], [47, 650], [51, 720], [54, 760], [55.5, 810], [58, 700],
         [62, 560], [66, 380], [70, 120], [73, -250], [78, -330], [83, -390], [87, -340], [91, -150], [95, 200], [99, 560], [101, 700], [106, 760], [114, 780], [120, 800]]
    x0, x1, yb = 90, 1130, 640
    X, Y = perfil(o, P, x0, x1, yb, 120, -480, 900, 440)
    # Mar a la izquierda y nivel del mar
    poli(o, [(x0 - 60, Y(0)), (X(0), Y(0)), (X(0), yb), (x0 - 60, yb)], AGUA)
    linea(o, x0 - 60, Y(0), x1, Y(0), AZUL, 1.5, dash='8 6')
    o.append(t(x1 + 4, Y(0) - 6, '0 m', 15, AZUL, 'end'))
    # Agua del Jordán en el fondo
    o.append(f'<circle cx="{X(83):.1f}" cy="{Y(-390) - 4:.1f}" r="6" fill="{AZUL}"/>')
    # Rótulos de lugares
    for k, m, n, dx, anc in [(54, 760, 'Jerusalén · 750 m', -14, 'end'), (55.5, 810, 'Monte de los Olivos · 818 m', 14, 'start'), (73, -250, 'Jericó · −250 m', -14, 'end'),
                             (83, -390, 'Jordán · −390 m', 14, 'start'), (101, 700, 'Monte Nebo · 700 m', -14, 'end'), (0, 0, 'Mediterráneo', 0, 'middle')]:
        xx, yy = X(k), Y(m)
        o.append(f'<circle cx="{xx:.1f}" cy="{yy:.1f}" r="5" fill="{ACC}"/>')
        ty = yy - 18 if m >= 0 else yy + 26
        o.append(t(xx + dx, ty, n, 16, INK, anc, 'bold'))
    # Franjas
    franjas = [(0, 28, 'Llanura costera', ORO), (28, 40, 'Sefela', OLIVO), (40, 58, 'Serranía de Judá', TIERRA2), (58, 73, 'Desierto de Judea', '#c27a33'),
               (73, 92, 'Valle del Jordán', AZUL), (92, 120, 'Meseta de Moab', MORADO)]
    yb2 = 700
    for a, b, n, c in franjas:
        rect(o, X(a) + 2, yb2, X(b) - X(a) - 4, 40, c, rx=6, op=.9)
        o.append(t((X(a) + X(b)) / 2, yb2 + 26, n, 15 if b - a > 16 else 12.5, '#fff', 'middle', 'bold'))
    # Escala horizontal
    for k in range(0, 121, 20):
        linea(o, X(k), yb + 6, X(k), yb + 14, MUTED, 1.5)
        o.append(t(X(k), yb + 32, f'{k} km', 15, MUTED))
    o.append(t(600, 790, 'En unos 120 km el terreno sube a más de 800 m, baja a casi 400 m bajo el nivel del mar y vuelve a subir a 700 m.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-perfil', o)


# 2. Alturas
def alturas():
    o = lienzo('Las alturas de la tierra', 'Metros sobre y bajo el nivel del mar (aproximados)')
    datos = [('Monte Hermón', 2814), ('Monte Merón', 1208), ('Monte Ebal', 940), ('Hebrón', 930), ('Monte Gerizim', 881), ('Monte de los Olivos', 818),
             ('Jerusalén', 750), ('Monte Nebo', 700), ('Monte Tabor', 575), ('Monte Carmelo', 546), ('Mar de Galilea', -210), ('Jericó', -250), ('Mar Muerto', -435)]
    x0, x1 = 300, 1120
    y0 = 140
    paso = 50
    escala = (x1 - x0 - 330) / 2814  # 0 en x0+330
    xcero = x0 + 330 * 0 + 330
    xcero = x0 + 120
    escala = (x1 - xcero) / 2900
    linea(o, xcero, y0 - 10, xcero, y0 + paso * len(datos), INK, 2)
    o.append(t(xcero, y0 - 18, 'nivel del mar', 15, AZUL))
    for i, (n, m) in enumerate(datos):
        y = y0 + i * paso
        w = abs(m) * escala
        c = AZUL if m < 0 else (ACC if m > 2000 else TIERRA2)
        if m >= 0:
            rect(o, xcero, y + 6, w, 30, c, rx=4)
            o.append(t(xcero + w + 10, y + 28, f'{m:,} m'.replace(',', '.'), 17, INK, 'start', 'bold'))
        else:
            rect(o, xcero - w, y + 6, w, 30, c, rx=4)
            o.append(t(xcero + 10, y + 28, f'−{abs(m)} m', 17, AZUL, 'start', 'bold'))
        o.append(t(xcero - (w + 12 if m < 0 else 12), y + 28, n, 18, INK, 'end'))
    o.append(t(600, 820, 'Del Hermón al mar Muerto hay más de 3.200 metros de diferencia en unos 200 km.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-alturas', o)


# 3. El valle del Jordán de norte a sur
def jordan():
    o = lienzo('El valle del Jordán y el Arabá', 'Perfil de norte a sur, del Hermón al golfo de Áqaba (alturas exageradas)')
    P = [[0, 900], [6, 350], [10, 200], [19, 70], [30, -50], [39, -210], [61, -210], [80, -250], [110, -300], [140, -350], [165, -435], [245, -435], [270, -300], [300, 50], [316, 230], [350, 120], [390, 40], [413, 0]]
    x0, x1, yb = 80, 1140, 700
    X, Y = perfil(o, P, x0, x1, yb, 413, -760, 950, 520, ARENA)
    linea(o, x0, Y(0), x1, Y(0), AZUL, 1.5, dash='8 6')
    o.append(t(x1 - 60, Y(0) - 8, 'nivel del mar', 15, AZUL, 'end'))
    # Lagos
    poli(o, [(X(39), Y(-210)), (X(61), Y(-210)), (X(58), Y(-250)), (X(42), Y(-250))], AGUA, AZUL, 1.5)
    poli(o, [(X(165), Y(-435)), (X(245), Y(-435)), (X(235), Y(-560)), (X(200), Y(-735)), (X(175), Y(-560))], AGUA, AZUL, 1.5)
    poli(o, [(X(17), Y(70)), (X(21), Y(70)), (X(20.5), Y(60)), (X(17.5), Y(60))], AGUA, AZUL, 1)
    linea(o, X(61), Y(-210), X(165), Y(-435), AZUL, 3)
    for k, m, n, dy in [(0, 900, 'Hermón', -16), (10, 200, '', 0), (19, 70, 'Lago Hula', -16), (50, -210, 'Mar de Galilea · −210 m', -22),
                        (115, -310, 'Río Jordán', 40), (205, -435, 'Mar Muerto · −435 m', -18), (316, 230, 'Arabá · unos 230 m', -16), (413, 0, 'Áqaba', -16)]:
        xx, yy = X(k), Y(m)
        o.append(t(xx, yy + dy, n, 16, INK, 'middle', 'bold'))
    o.append(t(X(10) + 14, Y(200) + 6, 'Dan · fuentes del Jordán', 16, INK, 'start', 'bold'))
    o.append(t(X(205), Y(-640), 'fondo: unos 730 m bajo el nivel del mar', 14, AZUL))
    for k in range(0, 414, 50):
        linea(o, X(k), yb + 6, X(k), yb + 14, MUTED, 1.5)
        o.append(t(X(k), yb + 34, f'{k} km', 14, MUTED))
    o.append(t(600, 790, 'El Jordán baja unos 700 m desde sus fuentes hasta el mar Muerto, el lugar más bajo de la tierra firme.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-jordan', o)


# 4. Egipto y Canaán: dos maneras de regar
def dos_tierras():
    o = lienzo('Dos maneras de regar', 'Deuteronomio 11:10-12')
    for i, (titulo, sub) in enumerate([('Egipto', 'El agua viene de abajo: el río y los canales'), ('La tierra prometida', 'El agua viene de arriba: la lluvia del cielo')]):
        x = 60 + i * 560
        rect(o, x, 130, 520, 560, '#efe9dc', GRIS, 14)
        o.append(t(x + 260, 172, titulo, 26, INK, font=SERIF, weight='bold'))
        o.append(t(x + 260, 202, sub, 16, MUTED))
    # Egipto: desierto, río, canales y campos
    x = 60
    rect(o, x + 20, 240, 480, 420, ARENA, rx=8)
    rect(o, x + 230, 240, 60, 420, AZUL, rx=0)
    for j in range(5):
        y = 275 + j * 78
        rect(o, x + 60, y, 160, 54, OLIVO, rx=4, op=.8)
        rect(o, x + 300, y, 160, 54, OLIVO, rx=4, op=.8)
        linea(o, x + 230, y + 27, x + 222, y + 27, AZUL, 5)
        linea(o, x + 290, y + 27, x + 298, y + 27, AZUL, 5)
        linea(o, x + 60, y + 27, x + 220, y + 27, AZUL, 2, dash='6 5')
        linea(o, x + 300, y + 27, x + 460, y + 27, AZUL, 2, dash='6 5')
    o.append(t(x + 260, 690 + 40, 'El Nilo se desborda cada año; se riega con canales', 16, INK))
    o.append(t(x + 260, 690 + 64, '«y regabas con tu pie» (Dt 11:10)', 16, MUTED, italic=True))
    # Canaán: mar, nubes, montes, lluvia
    x = 620
    rect(o, x + 20, 240, 480, 420, '#dbe8f2', rx=8)
    poli(o, [(x + 20, 660), (x + 20, 560), (x + 110, 560)] + [(x + 110, 560), (x + 180, 470), (x + 240, 410), (x + 300, 380), (x + 360, 430), (x + 420, 520), (x + 470, 600), (x + 500, 640), (x + 500, 660)], TIERRA, TIERRA2, 2)
    rect(o, x + 20, 560, 90, 100, AZUL, rx=0)
    o.append(t(x + 65, 620, 'mar', 15, '#fff', italic=True))
    nube(o, x + 150, 300, 1.0)
    nube(o, x + 290, 270, 1.2)
    lluvia(o, x + 290, 315, 7, 40)
    lluvia(o, x + 150, 335, 5, 34)
    linea(o, x + 40, 300, x + 100, 300, NUBE, 3, True)
    o.append(t(x + 40, 285, 'viento del oeste', 14, MUTED, 'start'))
    o.append(t(x + 260, 690 + 40, 'Las nubes del mar dejan la lluvia en los montes', 16, INK))
    o.append(t(x + 260, 690 + 64, '«bebe las aguas de la lluvia del cielo» (Dt 11:11)', 16, MUTED, italic=True))
    o.append(t(600, 830, 'En Egipto el hombre controla el agua; en la tierra prometida, depende de Dios.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-dos-tierras', o)


# 5. Lluvia anual por lugar
def lluvia_lugares():
    o = lienzo('¿Cuánto llueve?', 'Lluvia anual aproximada, en milímetros (promedios modernos)')
    datos = [('Monte Hermón', 1200, 'más de 1.000'), ('Alta Galilea (Safed)', 700, 'unos 700'), ('Jerusalén', 550, 'unos 550'), ('Costa (Tel Aviv, Haifa)', 540, 'unos 540'),
             ('Gaza', 350, 'unos 350'), ('Beerseba', 200, 'unos 200'), ('Jericó', 160, 'menos de 200'), ('Mar Muerto', 50, 'unos 50'), ('Eilat', 25, 'unos 25')]
    x0, y0, paso = 360, 140, 66
    esc = 700 / 1250
    for i, (n, mm, lbl) in enumerate(datos):
        y = y0 + i * paso
        c = AZUL if mm >= 500 else (TEAL if mm >= 300 else ('#c27a33' if mm >= 150 else ROJO))
        rect(o, x0, y + 8, mm * esc, 38, c, rx=5)
        o.append(t(x0 - 14, y + 34, n, 19, INK, 'end'))
        o.append(t(x0 + mm * esc + 12, y + 34, f'{lbl} mm', 17, INK, 'start', 'bold'))
    o.append(t(600, 790, 'Llueve más en el norte y en las alturas, y menos hacia el sur y el este.', 18, INK, font=SERIF, italic=True))
    o.append(t(600, 820, 'Bajo unos 250 mm al año, el cultivo sin riego se vuelve muy difícil.', 16, MUTED))
    guardar('esquema-lluvia', o)


# 6. El año de las lluvias
MESES = ['Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago']
HEB = ['Elul–Tishri', 'Tishri–Jeshván', 'Jeshván–Kislev', 'Kislev–Tevet', 'Tevet–Shevat', 'Shevat–Adar', 'Adar–Nisán', 'Nisán–Iyar', 'Iyar–Siván', 'Siván–Tamuz', 'Tamuz–Av', 'Av–Elul']


def lluvias():
    o = lienzo('El año de las lluvias', 'Lluvia mensual aproximada en Jerusalén (mm) y las tres lluvias de la Biblia')
    mm = [0, 15, 60, 105, 130, 115, 75, 25, 3, 0, 0, 0]
    x0, yb, cw = 110, 520, 82
    for i, v in enumerate(mm):
        x = x0 + i * cw
        h = v * 2.6
        c = TEAL if i in (1, 2) else (AZUL if i in (3, 4, 5) else (VERDE if i in (6, 7) else ORO))
        if v:
            rect(o, x + 10, yb - h, cw - 20, h, c, rx=4)
            o.append(t(x + cw / 2, yb - h - 10, str(v), 15, INK))
        else:
            o.append(t(x + cw / 2, yb - 10, '0', 15, MUTED))
        o.append(t(x + cw / 2, yb + 28, MESES[i], 18, INK, weight='bold'))
    linea(o, x0, yb, x0 + 12 * cw, yb, INK, 2)
    bandas = [(1, 3, 'Lluvia temprana', 'yoré · arar y sembrar', TEAL), (3, 6, 'Lluvias de invierno', 'llenan las cisternas', AZUL),
              (6, 8, 'Lluvia tardía', 'malqosh · llena el grano', VERDE), (8, 12, 'Verano seco', 'rocío de noche; vendimia', ORO), (0, 1, 'Seco', '', ORO)]
    for a, b, n, s, c in bandas:
        xa, xb = x0 + a * cw + 4, x0 + b * cw - 4
        rect(o, xa, 580, xb - xa, 70, c, rx=8, op=.9)
        o.append(t((xa + xb) / 2, 610, n, 16 if b - a > 1 else 13, '#fff', weight='bold'))
        if s:
            o.append(t((xa + xb) / 2, 634, s, 14 if b - a > 1 else 12, '#fff'))
    o.append(t(600, 720, '«os ha dado la primera lluvia a su tiempo, y hará descender sobre vosotros', 18, INK, font=SERIF, italic=True))
    o.append(t(600, 748, 'lluvia temprana y tardía como al principio» (Joel 2:23)', 18, INK, font=SERIF, italic=True))
    o.append(t(600, 800, 'Unos 530 mm al año en total; de mayo a septiembre casi no llueve.', 16, MUTED))
    guardar('esquema-lluvias', o)


# 7. Los vientos
def contorno():
    js = open(os.path.join(RAIZ, 'public', 'apps', 'tierra-de-israel', 'tierra-geo.js'), encoding='utf-8').read()
    X = json.loads(re.search(r'const X = (\{.*?\});\n', js, re.S).group(1))
    return X['polys']['t-tierra'], X['polys'].get('t-trans', [])


def vientos():
    o = lienzo('Los vientos de la tierra', 'Cada viento trae un tiempo distinto (Lucas 12:54-55)')
    cx, cy = 600, 470
    tierra, trans = contorno()
    # Proyección simple centrada
    lat0, lon0, esc = 32.25, 35.2, 205
    P = lambda la, lo: (cx + (lo - lon0) * esc * 0.85, cy - (la - lat0) * esc)
    for anillo in trans:
        poli(o, [P(la, lo) for la, lo in anillo], '#e3d6b8', TIERRA2, 1.5)
    for anillo in tierra:
        poli(o, [P(la, lo) for la, lo in anillo], TIERRA, TIERRA2, 2)
    rect(o, 120, 150, 230, 640, '#dbe8f2', rx=12, op=.7)
    o.append(t(235, 470, 'Mar Grande', 18, AZUL, italic=True))
    # Flechas
    vs = [((350, 470), (405, 470), 'Del oeste (del mar)', 'Nubes y lluvia', AZUL, (235, 300)),
          ((600, 150), (600, 215), 'Del norte', 'Frío y seco: «ahuyenta la lluvia» (Pr 25:23)', NUBE, (600, 140)),
          ((600, 800), (600, 735), 'Del sur', 'Calor (Lc 12:55)', ORO, (600, 822)),
          ((1060, 470), (800, 470), 'Solano (del este)', 'Caliente y seco, del desierto', ROJO, (1000, 380))]
    for (x1, y1), (x2, y2), n, s, c, (tx, ty) in vs:
        linea(o, x1, y1, x2, y2, c, 6, True)
    o.append(t(235, 330, 'Viento del oeste', 18, AZUL, weight='bold'))
    o.append(t(235, 354, 'trae nubes y lluvia', 16, INK))
    o.append(t(235, 378, '(Lc 12:54; 1 R 18:44)', 15, MUTED))
    nube(o, 235, 245, 0.9)
    lluvia(o, 235, 268, 5, 26)
    o.append(t(760, 160, 'Viento del norte: frío y seco', 18, INK, 'start', 'bold'))
    o.append(t(760, 184, '«ahuyenta la lluvia» (Pr 25:23)', 16, MUTED, 'start', italic=True))
    o.append(t(760, 760, 'Viento del sur: trae calor (Lc 12:55)', 18, INK, 'start', 'bold'))
    o.append(t(1080, 400, 'Viento solano', 18, ROJO, 'end', weight='bold'))
    o.append(t(1080, 424, 'del este, del desierto:', 16, INK, 'end'))
    o.append(t(1080, 446, 'caliente, seco, con polvo', 16, INK, 'end'))
    o.append(t(1080, 530, 'marchita las plantas', 16, INK, 'end'))
    o.append(t(1080, 552, '(Gn 41:6; Jon 4:8)', 15, MUTED, 'end'))
    guardar('esquema-vientos', o)


# 8. El año agrícola y las fiestas
def ano_agricola():
    o = lienzo('El año del campo y las fiestas', 'Trabajos, cosechas y fiestas de Israel (de septiembre a agosto)')
    x0, cw = 110, 82
    for i, m in enumerate(MESES):
        x = x0 + i * cw
        rect(o, x + 2, 130, cw - 4, 56, '#efe9dc', GRIS, 6, 1)
        o.append(t(x + cw / 2, 156, m, 17, INK, weight='bold'))
        o.append(t(x + cw / 2, 176, HEB[i], 10.5, MUTED))
    filas = [
        ('Lluvias', [(1, 3, 'temprana', TEAL), (3, 6, 'invierno', AZUL), (6, 8, 'tardía', VERDE), (8, 12, 'verano seco', ORO), (0, 1, 'seco', ORO)]),
        ('Siembra', [(1, 4, 'arar y sembrar trigo y cebada', TIERRA2), (4, 6, 'siembra tardía, lino', OLIVO)]),
        ('Cosechas', [(6.6, 7.8, 'cebada', ORO), (7.8, 9.6, 'trigo', '#b5852a'), (9.6, 12, 'higos y granadas', ROJO), (0, 1, 'uvas', MORADO), (1, 2.6, 'aceitunas', VERDE)]),
        ('Fiestas', [(6.2, 8.0, 'Pascua y primicias', ACC), (8.3, 9.9, 'Pentecostés', ACC), (0.1, 1.9, 'Tabernáculos', ACC)]),
    ]
    y = 220
    for n, items in filas:
        o.append(t(x0 - 12, y + 40, n, 18, INK, 'end', 'bold'))
        for a, b, s, c in items:
            xa, xb = x0 + a * cw + 3, x0 + b * cw - 3
            rect(o, xa, y + 12, xb - xa, 48, c, rx=8, op=.9)
            o.append(t((xa + xb) / 2, y + 42, s, 14 if xb - xa > 120 else 12, '#fff', weight='bold'))
        y += 92
    o.append(t(600, 640, 'Las tres fiestas de peregrinación coinciden con las cosechas (Éx 23:14-17; Lv 23).', 18, INK, font=SERIF, italic=True))
    o.append(t(600, 676, 'Los meses hebreos son lunares: su comienzo cambia cada año respecto de nuestro calendario.', 15, MUTED))
    rect(o, 230, 710, 740, 96, '#efe9dc', GRIS, 10, 1)
    o.append(t(600, 744, 'El calendario de Gézer (siglo X a.C.) resume el año así:', 16, INK, weight='bold'))
    o.append(t(600, 770, 'recolección · siembra · siembra tardía · corte del lino · siega de la cebada ·', 15, INK))
    o.append(t(600, 792, 'siega y medida del grano · poda de las viñas · frutos del verano', 15, INK))
    guardar('esquema-ano-agricola', o)


# 9. Un tell
def tell():
    """Un tell visto de lado: una colina de cima plana y laderas empinadas; dentro, las capas de las ciudades
    apiladas, cada una con lo que dejó (muros, casas, ceniza), y a la derecha una zanja escalonada de excavación."""
    o = lienzo('Un tell: ciudades una sobre otra', 'Corte de una colina formada por siglos de ciudades construidas sobre las ruinas de las anteriores')
    base, x0, x1 = 700, 70, 1010          # suelo natural y extremos de la colina
    top, t0, t1 = 300, 330, 750           # cima plana
    # Contorno de la colina (curvas suaves)
    contorno = (f'M{x0},{base} C{x0 + 120},{base - 10} {t0 - 110},{top + 40} {t0},{top} '
                f'L{t1},{top} C{t1 + 110},{top + 40} {x1 - 120},{base - 10} {x1},{base} Z')
    o.append(f'<defs><clipPath id="colina"><path d="{contorno}"/></clipPath></defs>')
    # Cielo y suelo
    rect(o, 0, base, W, 40, '#b9a582', rx=0)
    # Capas: (nombre, color, alto en px), de abajo hacia arriba
    capas = [('Roca natural', '#a8977c', 70), ('Ciudad cananea (Bronce antiguo y medio)', '#d2b386', 80), ('Ciudad cananea destruida (Bronce tardío)', '#c49c6c', 60),
             ('Ceniza', '#3f3630', 10), ('Ciudad israelita (Hierro)', '#e0c89a', 82), ('Ceniza: conquista asiria o babilónica', '#3f3630', 10),
             ('Período persa', '#cdb894', 40), ('Helenístico y romano', '#e9dcbc', 48)]
    y = base
    franjas = []
    o.append('<g clip-path="url(#colina)">')
    for n, c, h in capas:
        # cada capa se curva un poco hacia arriba al centro, como se acumulan los escombros
        o.append(f'<path d="M0,{y} Q{(x0 + x1) / 2},{y - 14} {W},{y} L{W},{y - h} Q{(x0 + x1) / 2},{y - h - 14} 0,{y - h} Z" fill="{c}" stroke="#7d6b55" stroke-width="1"/>')
        franjas.append((n, c, y - h / 2 - 7))
        y -= h
    # Restos en cada capa
    for xx in (250, 760):                                 # muros cananeos
        rect(o, xx, base - 140, 16, 52, '#8f7b5e', rx=1)
    for xx in (230, 700):                                 # casas cananeas
        rect(o, xx, base - 196, 70, 30, '#a98c64', '#7d6b55', 2, 1)
    rect(o, 260, base - 300, 22, 78, '#7e6d55', rx=1)       # muralla israelita
    rect(o, 805, base - 300, 22, 78, '#7e6d55', rx=1)
    for xx in (300, 650):                                 # casas israelitas de cuatro ambientes
        rect(o, xx, base - 268, 80, 36, '#c8ad7e', '#7d6b55', 2, 1)
        linea(o, xx + 27, base - 268, xx + 27, base - 232, '#7d6b55', 1.5)
        linea(o, xx + 54, base - 268, xx + 54, base - 232, '#7d6b55', 1.5)
    for xx in (570,):                                     # columnas romanas arriba
        rect(o, xx, base - 398, 12, 34, '#f4ecd8', '#9a8a6c', 1.5, 1)
        rect(o, xx + 60, base - 398, 12, 34, '#f4ecd8', '#9a8a6c', 1.5, 1)
    o.append('</g>')
    o.append(f'<path d="{contorno}" fill="none" stroke="#6b5a44" stroke-width="2.5"/>')
    # Zanja escalonada de excavación: corta la ladera derecha y deja ver las capas
    zanja = [(700, top - 2), (700, base - 330), (750, base - 330), (750, base - 250), (800, base - 250), (800, base - 170),
             (850, base - 170), (850, base - 90), (1012, base - 90), (1012, top - 2)]
    o.append(f'<polygon points="{" ".join(f"{a},{b}" for a, b in zanja)}" fill="{BG}"/>')
    o.append(f'<polyline points="{" ".join(f"{a},{b}" for a, b in zanja[:-2])}" fill="none" stroke="{ACC}" stroke-width="2.5" stroke-dasharray="7 5"/>')
    o.append(t(860, top - 18, 'zanja de excavación', 16, ACC, weight='bold'))
    o.append(t(985, 430, 'los arqueólogos', 14, ACC, 'middle'))
    o.append(t(985, 448, 'bajan por escalones', 14, ACC, 'middle'))
    # Persona a escala
    o.append(f'<circle cx="1050" cy="{base - 46}" r="6" fill="#4a4038"/>')
    o.append(f'<rect x="1045" y="{base - 39}" width="10" height="39" rx="3" fill="#4a4038"/>')
    o.append(t(1050, base + 28, 'persona', 13, MUTED))
    linea(o, 1140, base, 1140, top, INK, 1.5)
    linea(o, 1132, base, 1148, base, INK, 1.5); linea(o, 1132, top, 1148, top, INK, 1.5)
    o.append(t(1132, (base + top) / 2 - 8, 'unos', 15, INK, 'end', 'bold'))
    o.append(t(1132, (base + top) / 2 + 12, '20 m', 15, INK, 'end', 'bold'))
    # Rótulos dentro de cada capa (a la izquierda, sobre la ladera)
    for n, c, yy in franjas:
        claro = c in ('#3f3630',)
        if c == '#3f3630':
            o.append(t(470, yy + 11, n, 13, '#f4ecd8', 'middle', 'bold'))
        else:
            o.append(t(470, yy + 12, n, 16, INK, 'middle', 'bold'))
    o.append(t(600, 790, 'Cada capa es una época. Al excavar de arriba hacia abajo, se retrocede en la historia.', 18, INK, font=SERIF, italic=True))
    o.append(t(600, 820, '«y la redujo a un montón de escombros» (Josué 8:28): en hebreo, un tel.', 16, MUTED, italic=True))
    guardar('esquema-tell', o)


for f in (perfil_oe, alturas, jordan, dos_tierras, lluvia_lugares, lluvias, vientos, ano_agricola, tell):
    f()
print('Esquemas en', OUT)
