# Uso: python3 herramientas/esquemas_patriarcas.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Los patriarcas» (origen: 'esquema').
# Mismo estilo que esquemas_creacion.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Fechas según la cronología del texto (DIRECTRICES §20; Éxodo hacia 1446 a.C.).
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'patriarcas', 'img') + os.sep
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


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


def claro(c, a=0.14):
    return f'{c}{int(a * 255):02x}'


def linea(o, x1, y1, x2, y2, c=GRIS, w=2, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{w}"{d}/>')


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14):
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


# 1. Cuatro generaciones en el tiempo
def patriarcas():
    o = lienzo('Los patriarcas: cuatro generaciones', 'Fechas aproximadas según la cronología del texto bíblico (Éxodo hacia 1446 a.C.)')
    x0, x1, a0, a1 = 110, 1130, -2200, -1780
    X = lambda a: x0 + (a - a0) / (a1 - a0) * (x1 - x0)
    # eje
    linea(o, x0, 620, x1, 620, INK, 2)
    for a in range(-2200, -1779, 50):
        linea(o, X(a), 612, X(a), 628, INK, 2)
        o.append(t(X(a), 652, f'{-a}', 15, MUTED))
    o.append(t(x1, 680, 'años a.C.', 14, MUTED, anchor='end'))
    vidas = [
        ('Abraham', -2166, -1991, 175, 'Gn 11:27–25:11', 'Ur, Harán, Hebrón, Beerseba', VERDE, 130),
        ('Isaac', -2066, -1886, 180, 'Gn 21–35', 'Neguev, Gerar, Beerseba', ORO, 235),
        ('Jacob', -2006, -1859, 147, 'Gn 25–50', 'Beerseba, Betel, Harán, Siquem, Egipto', AZUL, 340),
        ('José', -1915, -1805, 110, 'Gn 30; 37–50', 'Hebrón, Dotán, Egipto', ROJO, 445),
    ]
    for n, a, b, edad, cap, lug, c, y in vidas:
        caja(o, X(a), y, X(b) - X(a), 82, claro(c, 0.22), c, 10)
        o.append(t(X(a) + 14, y + 27, n, 22, c, anchor='start', weight='bold', font=SERIF))
        o.append(t(X(a) + 14, y + 50, f'{-a}–{-b} a.C. · {edad} años · {cap}', 14, INK, anchor='start'))
        o.append(t(X(a) + 14, y + 70, lug, 14, MUTED, anchor='start'))
    hitos = [(-2091, 'Sale de Harán', 0), (-2066, 'Nace Isaac', 1), (-1929, 'Jacob a Harán', 0), (-1898, 'José vendido', 1), (-1876, 'Jacob en Egipto', 2)]
    for a, s_, nivel in hitos:
        linea(o, X(a), 135, X(a), 612, ACC, 1.5, '5 5')
        yy = 572 + nivel * 17
        ancho = 7.2 * len(s_) + 10
        caja(o, X(a) - ancho / 2, yy - 13, ancho, 17, BG, None, 4)
        o.append(t(X(a), yy, s_, 13, ACC, weight='bold'))
    o.append(t(600, 720, 'Los 430 años en Egipto (Éx 12:40) llevan de 1876 a 1446 a.C., el año del Éxodo.', 16, MUTED, italic=True))
    guardar('esquema-patriarcas', o)


# 2. La familia de los patriarcas
def familia():
    o = lienzo('La familia de los patriarcas', 'De Taré a los hijos de José (Génesis 11–50)', h=800)
    def nodo(x, y, s, c=INK, w=150, sub=None, fondo=None):
        caja(o, x - w / 2, y - 22, w, 44 if not sub else 54, fondo or claro(c, 0.15), c, 10)
        o.append(t(x, y + 6, s, 17, c, weight='bold'))
        if sub:
            o.append(t(x, y + 24, sub, 12, MUTED))
    def une(x1, y1, x2, y2, c=GRIS):
        ym = (y1 + y2) / 2
        o.append(f'<path d="M{x1} {y1} V{ym} H{x2} V{y2}" fill="none" stroke="{c}" stroke-width="2.5"/>')
    # Generación 1
    nodo(600, 140, 'Taré', MUTED)
    for x, n in [(330, 'Nacor'), (600, 'Abraham'), (870, 'Harán')]:
        une(600, 162, x, 208)
    nodo(330, 230, 'Nacor', MUTED, sub='Betuel → Rebeca, Labán')
    nodo(600, 230, 'Abraham', VERDE, w=170, sub='con Sara, Agar y Cetura')
    nodo(870, 230, 'Harán', MUTED, sub='Lot → Moab y Amón')
    # Generación 2
    for x in (360, 600, 840):
        une(600, 262, x, 318)
    nodo(360, 340, 'Ismael', MUTED, sub='hijo de Agar · 12 príncipes')
    nodo(600, 340, 'Isaac', ORO, sub='hijo de Sara · con Rebeca')
    nodo(840, 340, 'Hijos de Cetura', MUTED, w=170, sub='Madián y otros')
    # Generación 3
    for x in (440, 760):
        une(600, 372, x, 428)
    nodo(440, 450, 'Esaú (Edom)', MUTED, w=170, sub='monte Seir')
    nodo(760, 450, 'Jacob (Israel)', AZUL, w=180, sub='con Lea, Raquel, Bilha y Zilpa')
    # Doce hijos
    hijos = [('Rubén', 'Lea'), ('Simeón', 'Lea'), ('Leví', 'Lea'), ('Judá', 'Lea'), ('Dan', 'Bilha'), ('Neftalí', 'Bilha'),
             ('Gad', 'Zilpa'), ('Aser', 'Zilpa'), ('Isacar', 'Lea'), ('Zabulón', 'Lea'), ('José', 'Raquel'), ('Benjamín', 'Raquel')]
    col = {'Lea': PARDO, 'Raquel': ROJO, 'Bilha': TEAL, 'Zilpa': MORADO}
    xs = [70 + i * 96 for i in range(12)]
    linea(o, xs[0], 540, xs[-1], 540, GRIS, 2.5)
    une(760, 482, 760, 540)
    for (n, m), x in zip(hijos, xs):
        linea(o, x, 540, x, 565, GRIS, 2.5)
        caja(o, x - 45, 565, 90, 54, claro(col[m], 0.18), col[m], 8)
        o.append(t(x, 590, n, 15, col[m], weight='bold'))
        o.append(t(x, 608, m, 11, MUTED))
    # Efraín y Manasés
    xj = xs[10]
    une(xj, 619, xj - 60, 680); une(xj, 619, xj + 40, 680)
    nodo(xj - 60, 700, 'Manasés', ROJO, w=110); nodo(xj + 50, 700, 'Efraín', ROJO, w=100)
    o.append(t(70, 700, 'Dina, hija de Lea, también nació en Harán (Gn 30:21).', 14, MUTED, anchor='start', italic=True))
    o.append(t(70, 760, 'De Judá vienen David y Jesús; de Leví, los sacerdotes; los hijos de José forman dos tribus.', 15, INK, anchor='start'))
    for i, (m, c) in enumerate(col.items()):
        caja(o, 770 + i * 105, 735, 18, 18, claro(c, 0.4), c, 4)
        o.append(t(794 + i * 105, 749, m, 14, c, anchor='start', weight='bold'))
    guardar('esquema-familia', o)


# 3. Corte de Canaán de oeste a este
def serrania():
    o = lienzo('Dónde vivían los patriarcas', 'Corte de Canaán de oeste a este, a la altura de Betel y Jericó (aproximado)', h=800)
    base = 600
    # perfil: (x, altura relativa)
    perfil = [(60, 0), (230, 10), (330, 60), (420, 230), (520, 330), (600, 360), (680, 320), (760, 140), (820, -60), (880, -120), (930, -60),
              (990, 160), (1080, 300), (1140, 310)]
    pts = ' '.join(f'{x},{base - h}' for x, h in perfil)
    o.append(f'<polygon points="60,{base + 130} {pts} 1140,{base + 130}" fill="{claro(PARDO, 0.25)}" stroke="{PARDO}" stroke-width="3"/>')
    linea(o, 60, base, 1140, base, AZUL, 2, '8 6')
    o.append(t(70, base + 22, 'nivel del mar', 13, AZUL, anchor='start'))
    zonas = [
        (150, 'Llanura costera', 'Ciudades cananeas y, después,', 'filisteas; el camino del mar', MUTED),
        (420, 'Sefela', 'Colinas bajas', '', MUTED),
        (600, 'Serranía central', 'Siquem, Betel, Hebrón: tiendas,', 'altares y pozos de los patriarcas', VERDE),
        (870, 'Valle del Jordán', 'La llanura que eligió Lot;', 'Sodoma, junto al mar Salado', ROJO),
        (1070, 'Mesetas de Galaad', 'Mahanaim y Peniel (Jacob);', 'al sur, Edom (Esaú)', AZUL),
    ]
    for x, n, l1, l2, c in zonas:
        y = 170 if x in (600,) else (230 if x in (150, 1070) else 300)
        o.append(t(x, y, n, 20, c, weight='bold', font=SERIF))
        o.append(t(x, y + 24, l1, 14, INK))
        if l2:
            o.append(t(x, y + 42, l2, 14, INK))
    # tiendas en la serranía
    for x in (560, 600, 640):
        o.append(f'<polygon points="{x - 16},{base - 352} {x},{base - 380} {x + 16},{base - 352}" fill="{INK}"/>')
    o.append(t(600, 770, 'Los patriarcas se movían por la cresta de la serranía y bajaban al Neguev con sus rebaños.', 16, MUTED, italic=True))
    guardar('esquema-serrania', o)


# 4. La fe de Abraham: Génesis 15, 17 y 22
def fe():
    o = lienzo('La fe de Abraham en tres momentos', 'Pablo y Santiago miran momentos distintos de la misma fe')
    y = 380
    linea(o, 100, y, 1100, y, INK, 3)
    momentos = [
        (220, 'Génesis 15', 'hacia 2081 a.C. · unos 85 años', '«Y creyó a Jehová, y le fue', 'contado por justicia» (v. 6)', 'Romanos 4; Gálatas 3:', 'justificado por la fe', VERDE),
        (600, 'Génesis 17', 'hacia 2067 a.C. · 99 años', 'La circuncisión, señal', 'del pacto', 'Romanos 4:10-11: señal', 'de una fe que ya tenía', ORO),
        (980, 'Génesis 22', 'hacia 2050 a.C. · más de 110 años', 'Ofrece a Isaac', 'en el monte Moriah', 'Santiago 2:21-23: la fe', 'se perfecciona por las obras', AZUL),
    ]
    for x, n, f, a1, a2, b1, b2, c in momentos:
        o.append(f'<circle cx="{x}" cy="{y}" r="16" fill="{c}"/>')
        caja(o, x - 170, 150, 340, 170, claro(c, 0.15), c)
        o.append(t(x, 190, n, 24, c, weight='bold', font=SERIF))
        o.append(t(x, 216, f, 14, MUTED))
        o.append(t(x, 256, a1, 17, INK)); o.append(t(x, 280, a2, 17, INK))
        caja(o, x - 170, 440, 340, 100, BG, c)
        o.append(t(x, 482, b1, 16, c, weight='bold')); o.append(t(x, 506, b2, 16, c, weight='bold'))
    o.append(t(410, 372, '14 años', 15, MUTED)); o.append(t(790, 372, 'unos 17 años', 15, MUTED))
    o.append(t(600, 620, 'Dios declara justo al que cree (Génesis 15); la fe verdadera se muestra en la obediencia (Génesis 22).', 17, INK))
    o.append(t(600, 650, 'Fechas aproximadas; la edad de Isaac en Moriah no se conoce con exactitud.', 14, MUTED, italic=True))
    guardar('esquema-fe-abraham', o)


patriarcas(); familia(); serrania(); fe()
print('Esquemas en', OUT)
