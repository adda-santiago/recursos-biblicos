# Uso: python3 herramientas/esquemas_cronologia.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Cronología del Nuevo Testamento» (origen: 'esquema').
# Mismo estilo que esquemas_herodes.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Cronología del sitio (v2.44): nacimiento hacia el 6–5 a.C.; Herodes muere en el 4 a.C.; bautismo en el 29;
# cruz el viernes 3 de abril del 33; Pentecostés el 24 de mayo del 33; Galión 51–52; Festo 59.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'cronologia-nuevo-testamento', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
JESUS = '#9e2b25'; IGLESIA = '#2f7d4f'; PABLO = '#2f6f9e'; ROMA = '#6b5a7a'; JUDEA = '#8a5a44'; LIBROS = '#c08a1e'; JUAN = '#7a3fa0'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200


def esc(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x:.0f}" y="{y:.0f}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{esc(s)}</text>'


def lienzo(titulo, sub, h):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 56, titulo, 32, INK, font=SERIF))
    o.append(t(600, 88, sub, 17, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=8, grosor=2, op=1):
    b = f' stroke="{borde}" stroke-width="{grosor}"' if borde else ''
    oo = f' opacity="{op}"' if op != 1 else ''
    o.append(f'<rect x="{x:.0f}" y="{y:.0f}" width="{max(w, 2):.0f}" height="{h:.0f}" rx="{rx}" fill="{fondo}"{b}{oo}/>')


def linea(o, x1, y1, x2, y2, color=MUTED, grosor=2, punteada=False, op=1):
    d = ' stroke-dasharray="6 5"' if punteada else ''
    oo = f' opacity="{op}"' if op != 1 else ''
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="{color}" stroke-width="{grosor}"{d}{oo}/>')


def anio(a):
    return f'{-a} a.C.' if a < 0 else f'{a} d.C.'


def escala(o, X, desde, hasta, paso, y0, y1, etiqueta=anio, size=14):
    a = desde
    while a <= hasta:
        if a != 0:
            linea(o, X(a), y0, X(a), y1, GRIS, 1)
            o.append(t(X(a), y0 - 8, etiqueta(a), size, MUTED))
        a += paso


def punto(o, x, y, color, r=7):
    o.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r}" fill="{color}" stroke="{BG}" stroke-width="2"/>')


# 1. El calendario: de los años de Roma a los años del Señor
def calendario():
    H = 700
    o = lienzo('Del año de Roma al año del Señor', 'Dionisio el Exiguo (hacia el 525) fijó el nacimiento de Jesús a fines del año 753 de Roma', H)
    X0, X1, A0, A1 = 120, 1100, 745, 760
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    # escala romana
    o.append(t(X0 - 10, 160, 'Años de Roma (desde la fundación de la ciudad)', 16, MUTED, anchor='start'))
    for a in range(A0, A1 + 1):
        linea(o, X(a), 180, X(a), 196, INK, 1.5)
        if a % 1 == 0:
            o.append(t(X(a), 222, a, 14, INK))
    linea(o, X0, 188, X1, 188, INK, 2)
    # escala cristiana: 753 = 1 d.C.; 752 = 1 a.C.
    o.append(t(X0 - 10, 300, 'Años antes y después de Cristo', 16, ACC, anchor='start'))
    linea(o, X0, 318, X1, 318, ACC, 2)
    for a in range(A0, A1 + 1):
        n = a - 753 if a >= 754 else a - 754
        linea(o, X(a), 310, X(a), 326, ACC, 1.5)
        o.append(t(X(a), 350, (f'{-n} a.C.' if n < 0 else f'{n} d.C.'), 13, ACC))
    # no hay año cero
    xm = (X(753) + X(754)) / 2
    caja(o, xm - 120, 380, 240, 58, '#fff', ACC, 8, 1.5)
    o.append(t(xm, 405, 'No existe el año cero:', 15, ACC, weight='bold'))
    o.append(t(xm, 427, 'del 1 a.C. se pasa al 1 d.C.', 15, INK))
    linea(o, X(753), 330, xm - 40, 380, ACC, 1.5, True)
    linea(o, X(754), 330, xm + 40, 380, ACC, 1.5, True)
    # Herodes y el nacimiento
    xh = X(750)
    linea(o, xh, 236, xh, 300, JUDEA, 3)
    caja(o, xh - 150, 470, 300, 80, '#fff', JUDEA, 8, 2)
    o.append(t(xh, 498, 'Muere Herodes', 18, JUDEA, weight='bold'))
    o.append(t(xh, 522, '750 de Roma = 4 a.C. (Mt 2:19)', 15, INK))
    linea(o, xh, 360, xh, 470, JUDEA, 1.5, True)
    x1, x2 = X(748), X(749.6)
    caja(o, x1, 250, x2 - x1, 30, JESUS, None, 6, op=0.85)
    o.append(t((x1 + x2) / 2, 271, 'Nace Jesús', 15, '#fff', weight='bold'))
    caja(o, X(746) - 30, 580, 330, 70, '#fff', JESUS, 8, 2)
    o.append(t(X(746) + 135, 608, 'Jesús nació hacia el 6–5 a.C.,', 16, INK))
    o.append(t(X(746) + 135, 630, '«en días del rey Herodes» (Mt 2:1)', 16, INK, italic=True))
    xd = X(754)
    caja(o, xd + 10, 470, 330, 80, '#fff', ACC, 8, 2)
    o.append(t(xd + 175, 498, 'Año 1 según Dionisio', 18, ACC, weight='bold'))
    o.append(t(xd + 175, 522, '754 de Roma: su cálculo erró por unos años', 15, INK))
    linea(o, xd, 360, xd + 60, 470, ACC, 1.5, True)
    guardar('cr-calendario', o)


# 2. Las anclas externas
def anclas():
    H = 900
    o = lienzo('Las anclas del Nuevo Testamento', 'Hechos bíblicos que otras fuentes permiten fechar', H)
    X0, X1, A0, A1 = 90, 1150, -10, 75
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    y0 = 150
    linea(o, X0, y0 + 20, X1, y0 + 20, INK, 2)
    for a in range(-10, 76, 10):
        if a == 0:
            continue
        linea(o, X(a), y0 + 12, X(a), y0 + 28, INK, 1.5)
        o.append(t(X(a), y0, anio(a), 14, MUTED))
    datos = [
        (-4, -4, 'Muere Herodes el Grande', 'Josefo; eclipse de luna', 'Mt 2:19', JUDEA),
        (14, 14, 'Muere Augusto: Tiberio, emperador', 'Tácito, Suetonio', 'Lc 3:1', ROMA),
        (26, 36, 'Poncio Pilato, prefecto de Judea', 'Josefo; inscripción de Cesarea', 'Lc 3:1', ROMA),
        (18, 36, 'Caifás, sumo sacerdote', 'Josefo; su osario', 'Jn 18:13', JUDEA),
        (44, 44, 'Muere Herodes Agripa I', 'Josefo', 'Hch 12:23', JUDEA),
        (49, 49, 'Claudio expulsa a los judíos de Roma', 'Suetonio; Orosio', 'Hch 18:2', ROMA),
        (51, 52, 'Galión, procónsul de Acaya', 'Inscripción de Delfos', 'Hch 18:12', ROMA),
        (59, 59, 'Festo sucede a Félix', 'Josefo; monedas de Judea', 'Hch 24:27', ROMA),
        (62, 62, 'Muere Jacobo, hermano del Señor', 'Josefo', 'Gá 1:19', JUDEA),
        (64, 64, 'Incendio de Roma', 'Tácito', '1 P 4:12', ROMA),
        (70, 70, 'Cae Jerusalén y el templo', 'Josefo, Tácito, arco de Tito', 'Lc 21:20', JUDEA),
    ]
    y = y0 + 70
    for a, b, n, fuente, ref, c in datos:
        xa, xb = X(a), X(b)
        if b > a:
            caja(o, xa, y - 12, xb - xa, 24, c, None, 5, op=0.85)
        else:
            punto(o, xa, y, c, 9)
        linea(o, xa, y0 + 20, xa, y - 12, c, 1, True, 0.5)
        lado_izq = xb > 700
        xt = (xa - 16) if lado_izq else (xb + 16)
        anc = 'end' if lado_izq else 'start'
        o.append(t(xt, y - 2, n, 17, INK, anchor=anc, weight='bold'))
        o.append(t(xt, y + 18, f'{fuente} · {ref}', 14, MUTED, anchor=anc))
        y += 58
    o.append(t(600, H - 24, 'Con estas fechas fijas y los intervalos que da la Biblia se reconstruye el resto de la cronología.', 15, MUTED, italic=True))
    guardar('cr-anclas', o)


# 3. El panorama del Nuevo Testamento
def panorama():
    H = 940
    o = lienzo('El Nuevo Testamento en una mirada', 'Unos cien años, del 7 a.C. al 100 d.C. (fechas aproximadas)', H)
    X0, X1, A0, A1 = 230, 1170, -8, 100
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    Y0 = 150
    for a in range(0, 101, 10):
        x = X(a if a else 1)
        linea(o, x, Y0 - 16, x, H - 80, GRIS, 1)
        o.append(t(x, Y0 - 24, anio(a if a else 1), 13, MUTED))
    linea(o, X(-5), Y0 - 16, X(-5), H - 80, GRIS, 1)
    o.append(t(X(-5), Y0 - 24, '5 a.C.', 13, MUTED))
    filas = [
        ('Emperadores', ROMA, [(-8, 14, 'Augusto'), (14, 37, 'Tiberio'), (37, 41, ''), (41, 54, 'Claudio'), (54, 68, 'Nerón'), (69, 81, 'Vespasiano'), (81, 96, 'Domiciano'), (98, 100, '')]),
        ('Judea', JUDEA, [(-8, -4, ''), (-4, 6, 'Arquelao'), (6, 41, 'Prefectos'), (41, 44, ''), (44, 66, 'Procuradores'), (66, 73, 'Guerra')]),
        ('Jesús', JESUS, [(-6, 29, 'Nazaret'), (29, 33, '')]),
        ('La iglesia', IGLESIA, [(33, 46, 'Jerusalén y Antioquía'), (46, 62, 'La misión a los gentiles'), (62, 100, 'Persecución y crecimiento')]),
        ('Pablo', PABLO, [(34, 46, 'Damasco, Tarso'), (46, 57, 'Tres viajes'), (57, 62, 'Preso'), (62, 67, '')]),
        ('Pedro', '#5a6b3f', [(33, 44, 'Jerusalén'), (44, 64, 'Misiones'), (64, 67, '')]),
        ('Juan', JUAN, [(33, 66, 'Jerusalén'), (66, 95, 'Éfeso'), (95, 96, ''), (96, 100, '')]),
    ]
    DY = 74
    for i, (n, c, tramos) in enumerate(filas):
        y = Y0 + 10 + i * DY
        o.append(t(X0 - 16, y + 27, n, 19, INK, anchor='end', weight='bold'))
        for k, (a, b, et) in enumerate(tramos):
            caja(o, X(a) + 1, y + 6, X(b) - X(a) - 2, 34, c, None, 5, op=0.9 if k % 2 == 0 else 0.65)
            if et and X(b) - X(a) > 9 * len(et):
                o.append(t((X(a) + X(b)) / 2, y + 29, et, 14, '#fff', weight='bold'))
    # hitos
    yb = Y0 + 10 + len(filas) * DY + 20
    o.append(t(X0 - 16, yb + 24, 'Hechos clave', 19, ACC, anchor='end', weight='bold'))
    hitos = [(-5, 'Nace Jesús', 0), (29, 'Bautismo', 1), (33, 'Cruz y Pentecostés', 0), (49, 'Concilio', 1),
             (64, 'Incendio de Roma', 0), (70, 'Cae el templo', 1), (95, 'Patmos', 0)]
    for a, s, f in hitos:
        x = X(a)
        linea(o, x, Y0 - 10, x, yb + 8 + f * 34, ACC, 1.5, True, 0.55)
        punto(o, x, yb + 16 + f * 34, ACC, 7)
        o.append(t(x + 10, yb + 21 + f * 34, s, 15, ACC, anchor='start', weight='bold'))
    # libros
    yl = yb + 96
    o.append(t(X0 - 16, yl + 26, 'Se escriben los libros', 19, LIBROS, anchor='end', weight='bold'))
    caja(o, X(45), yl + 8, X(68) - X(45), 30, LIBROS, None, 5, op=0.9)
    o.append(t((X(45) + X(68)) / 2, yl + 29, 'La mayoría de los libros', 13, '#fff', weight='bold'))
    caja(o, X(85), yl + 8, X(96) - X(85), 30, LIBROS, None, 5, op=0.65)
    o.append(t((X(85) + X(96)) / 2, yl + 29, 'Juan', 14, '#fff', weight='bold'))
    o.append(t(600, H - 30, 'Las franjas sin nombre son reinados o etapas breves: Calígula, Agripa I, Nerva y Trajano; los últimos años de Pablo y Pedro; Patmos.', 14, MUTED, italic=True))
    guardar('cr-panorama', o)


# 4. La secuencia del nacimiento
def nacimiento():
    H = 820
    o = lienzo('Del anuncio a Zacarías al regreso a Nazaret', 'El orden de los hechos de Mateo 1–2 y Lucas 1–2 (fechas aproximadas)', H)
    pasos_ = [
        ('Anuncio a Zacarías', 'en el templo (Lc 1:5-25)', 'c. 7–6 a.C.', '#5a6b3f'),
        ('Anuncio a María', 'al sexto mes de Elisabet (Lc 1:26-38)', 'c. 6 a.C.', JESUS),
        ('Nace Juan el Bautista', 'en la montaña de Judea (Lc 1:57-80)', 'c. 6 a.C.', '#5a6b3f'),
        ('Nace Jesús en Belén', 'el censo de Augusto (Lc 2:1-20)', 'c. 6–5 a.C.', JESUS),
        ('Circuncisión y presentación', 'al octavo y al cuadragésimo día (Lc 2:21-38)', 'c. 5 a.C.', JESUS),
        ('Los magos en Belén', 'en una casa (Mt 2:1-12)', 'c. 5 a.C.', '#c08a1e'),
        ('Huida a Egipto', 'y muerte de los niños de Belén (Mt 2:13-18)', 'c. 5–4 a.C.', '#6b7080'),
        ('Muere Herodes', 'eclipse de luna, antes de la Pascua', 'marzo del 4 a.C.', JUDEA),
        ('Regreso a Nazaret', 'Arquelao reina en Judea (Mt 2:19-23; Lc 2:39)', '4 a.C.', JESUS),
    ]
    y = 130
    for i, (n, d, f, c) in enumerate(pasos_):
        cy = y + i * 72
        if i < len(pasos_) - 1:
            linea(o, 450, cy + 14, 450, cy + 72, GRIS, 3)
        punto(o, 450, cy + 14, c, 12)
        o.append(t(420, cy + 20, f, 17, MUTED, anchor='end', weight='bold'))
        o.append(t(480, cy + 13, n, 20, INK, anchor='start', weight='bold'))
        o.append(t(480, cy + 37, d, 15, MUTED, anchor='start'))
    guardar('cr-nacimiento', o)


# 5. El año quince de Tiberio
def tiberio():
    H = 640
    o = lienzo('«El año decimoquinto del imperio de Tiberio César»', 'Lucas 3:1: dos maneras de contar los años de Tiberio', H)
    X0, X1, A0, A1 = 120, 1140, 10, 34
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    for a in range(10, 35, 2):
        linea(o, X(a), 150, X(a), 520, GRIS, 1)
        o.append(t(X(a), 140, anio(a), 13, MUTED))
    # cuenta A
    y = 200
    o.append(t(X0, y - 14, 'Desde la muerte de Augusto (19 de agosto del 14): la cuenta de los historiadores romanos', 16, INK, anchor='start', weight='bold'))
    a0 = 14 + 7.5 / 12
    for k in range(15):
        xa, xb = X(a0 + k), X(a0 + k + 1)
        caja(o, xa + 1, y, xb - xa - 2, 34, ROMA if k < 14 else ACC, None, 4, op=0.55 if k < 14 else 1)
        if k in (0, 14):
            o.append(t((xa + xb) / 2, y + 23, str(k + 1), 15, '#fff', weight='bold'))
    o.append(t(X(a0 + 14.5), y + 62, 'Año 15: agosto del 28 – agosto del 29', 16, ACC, weight='bold'))
    # cuenta B
    y = 340
    o.append(t(X0, y - 14, 'Desde que gobernó junto con Augusto (hacia el 12): sin monedas ni documentos que cuenten así', 16, INK, anchor='start', weight='bold'))
    a0 = 12
    for k in range(15):
        xa, xb = X(a0 + k), X(a0 + k + 1)
        caja(o, xa + 1, y, xb - xa - 2, 34, ROMA if k < 14 else '#6b7080', None, 4, op=0.35 if k < 14 else 0.9)
        if k in (0, 14):
            o.append(t((xa + xb) / 2, y + 23, str(k + 1), 15, '#fff', weight='bold'))
    o.append(t(X(a0 + 14.5), y + 62, 'Año 15: 26–27', 16, MUTED, weight='bold'))
    # pilato
    caja(o, X(26), 470, X(34) - X(26), 30, JUDEA, None, 5, op=0.85)
    o.append(t((X(26) + X(34)) / 2, 491, 'Poncio Pilato, gobernador de Judea (26–36)', 14, '#fff', weight='bold'))
    o.append(t(600, 590, 'El sitio sigue la primera cuenta: Juan comienza a predicar en el 28–29 y Jesús es bautizado en el 29.', 16, INK, italic=True))
    guardar('cr-tiberio', o)


# 6. Las fiestas del Evangelio de Juan
def pascuas():
    H = 700
    o = lienzo('El ministerio de Jesús en las fiestas de Juan', 'Del bautismo, en el otoño del 29, a la cruz, en la Pascua del 33', H)
    X0, X1, A0, A1 = 90, 1150, 29.5, 33.4
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    for a in (30, 31, 32, 33):
        linea(o, X(a), 140, X(a), 560, GRIS, 1)
        o.append(t(X(a) + 6, 150, anio(a), 15, MUTED, anchor='start'))
    # etapas
    etapas = [(29.7, 30.9, 'Judea, Samaria y Caná', '#5a6b3f'), (30.9, 32.75, 'El gran ministerio en Galilea', IGLESIA), (32.75, 33.25, 'Hacia Jerusalén', PABLO)]
    for a, b, n, c in etapas:
        caja(o, X(a), 470, X(b) - X(a), 40, c, None, 6, op=0.85)
        o.append(t((X(a) + X(b)) / 2, 496, n, 15, '#fff', weight='bold'))
    caja(o, X(29.7), 520, X(33.25) - X(29.7), 8, JESUS, None, 3, op=0.6)
    o.append(t(X(29.7), 552, 'Unos tres años y medio', 15, JESUS, anchor='start', weight='bold'))
    fiestas = [
        (29.75, 'Bautismo', 'otoño del 29', 'Mt 3; Jn 1', '#6b7080', 0),
        (30.28, 'Pascua', 'purificación del templo', 'Jn 2:13', JESUS, 1),
        (31.4, 'Una fiesta', '¿Pascua o Tabernáculos?', 'Jn 5:1', '#6b7080', 0),
        (32.28, 'Pascua', 'los cinco mil', 'Jn 6:4', JESUS, 1),
        (32.75, 'Tabernáculos', 'otoño', 'Jn 7:2', LIBROS, 0),
        (32.97, 'Dedicación', 'invierno', 'Jn 10:22', LIBROS, 1),
        (33.26, 'Pascua', 'la cruz', 'Jn 11:55', ACC, 0),
    ]
    for a, n, d, ref, c, f in fiestas:
        x = X(a)
        yy = 220 + f * 110
        linea(o, x, yy + 10, x, 460, c, 1.5, True, 0.6)
        punto(o, x, yy, c, 11)
        o.append(t(x, yy - 22, n, 17, c, weight='bold'))
        o.append(t(x, yy + 34, d, 14, INK))
        o.append(t(x, yy + 54, ref, 14, MUTED, italic=True))
    o.append(t(600, H - 30, 'Entre la Pascua de Juan 2 y la de Juan 6 pasó más de un año (Jn 4:35): por eso se cuentan cuatro Pascuas.', 15, MUTED, italic=True))
    guardar('cr-pascuas', o)


# 7. ¿Miércoles, jueves o viernes?
def dia_cruz():
    H = 640
    o = lienzo('Tres propuestas para el día de la cruz', 'Cómo cuenta cada una los «tres días» hasta la resurrección', H)
    dias = ['Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    X0, DX = 300, 170
    for i, d in enumerate(dias):
        x = X0 + i * DX
        o.append(t(x + DX / 2, 145, d, 18, INK, weight='bold'))
        linea(o, x, 155, x, 540, GRIS, 1)
    linea(o, X0 + 5 * DX, 155, X0 + 5 * DX, 540, GRIS, 1)
    filas = [
        ('Viernes', 'La postura del sitio', 2, 4.15, ACC, 'Vie, sáb y dom: «al tercer día» (Lc 24:21)'),
        ('Jueves', 'Dos días de reposo seguidos', 1, 4.15, '#6b7080', 'Cuatro días; la Pascua y el sábado'),
        ('Miércoles', '72 horas exactas', 0, 3.8, '#6b7080', 'Resurrección el sábado por la tarde'),
    ]
    for i, (n, d, a, b, c, nota) in enumerate(filas):
        y = 190 + i * 120
        o.append(t(X0 - 20, y + 22, n, 21, c, anchor='end', weight='bold'))
        o.append(t(X0 - 20, y + 46, d, 14, MUTED, anchor='end'))
        xa = X0 + (a + 0.75) * DX
        xb = X0 + b * DX
        caja(o, xa, y + 4, xb - xa, 30, c, None, 5, op=0.8)
        punto(o, xa, y + 19, INK, 8)
        o.append(f'<circle cx="{xb:.0f}" cy="{y + 19:.0f}" r="10" fill="#fff" stroke="{c}" stroke-width="3"/>')
        o.append(t((xa + xb) / 2, y + 62, nota, 14, INK))
    punto(o, 140, 568, INK, 8)
    o.append(t(156, 573, 'muerte (hora novena) y sepultura antes del atardecer', 14, INK, anchor='start'))
    o.append(f'<circle cx="720" cy="568" r="9" fill="#fff" stroke="{ACC}" stroke-width="3"/>')
    o.append(t(738, 573, 'resurrección', 14, INK, anchor='start'))
    o.append(t(600, 612, 'Recuerda: el día bíblico empieza al atardecer. «Tres días y tres noches» (Mt 12:40) se contaba de forma inclusiva (Est 4:16; 5:1).', 14, MUTED, italic=True))
    guardar('cr-dia-cruz', o)


# 8. El año de la cruz
def anio_cruz():
    H = 720
    o = lienzo('¿En qué año murió Jesús?', 'Entre el 26 y el 36: los datos que dejan solo dos candidatos', H)
    X0, X1, A0, A1 = 250, 1150, 25.5, 36.5
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    for a in range(26, 37):
        linea(o, X(a), 140, X(a), 560, GRIS, 1)
        o.append(t(X(a), 132, a, 15, MUTED))
    filas = [
        ('Pilato, prefecto', [(26, 36.2)], ROMA),
        ('Caifás, sumo sacerdote', [(25.5, 36.2)], JUDEA),
        ('Año 15 de Tiberio', [(28.6, 29.6)], '#6b7080'),
        ('Ministerio (3½ años)', [(29.7, 33.3)], JESUS),
    ]
    for i, (n, tramos, c) in enumerate(filas):
        y = 160 + i * 62
        o.append(t(X0 - 16, y + 24, n, 17, INK, anchor='end', weight='bold'))
        for a, b in tramos:
            caja(o, X(a), y + 6, X(b) - X(a), 30, c, None, 5, op=0.8)
    # Sejano
    y = 160 + 4 * 62
    o.append(t(X0 - 16, y + 24, 'Cae Sejano en Roma', 17, INK, anchor='end', weight='bold'))
    punto(o, X(31.8), y + 20, ROMA, 10)
    o.append(t(X(31.8) + 16, y + 26, 'octubre del 31: Pilato, sin protector (Jn 19:12)', 14, INK, anchor='start'))
    # viernes 14 de nisán
    y = 160 + 5 * 62
    o.append(t(X0 - 16, y + 24, '14 de nisán en viernes', 17, ACC, anchor='end', weight='bold'))
    for a, et, c in [(30.27, '7 de abril del 30', '#6b7080'), (33.25, '3 de abril del 33', ACC)]:
        o.append(f'<circle cx="{X(a):.0f}" cy="{y + 20:.0f}" r="13" fill="#fff" stroke="{c}" stroke-width="4"/>')
        o.append(t(X(a), y + 56, et, 15, c, weight='bold'))
    o.append(t(600, 640, 'El año 33 encaja con la cuenta normal de Tiberio, con un ministerio de tres años y medio y con Juan 2:20.', 16, INK, italic=True))
    o.append(t(600, 668, 'El año 30 exige contar los años de Tiberio desde el 12 o un ministerio más corto.', 16, MUTED, italic=True))
    guardar('cr-anio-cruz', o)


# 9. Las setenta semanas
def setenta():
    H = 700
    o = lienzo('Las setenta semanas de Daniel 9', 'Sesenta y nueve semanas hasta el Mesías Príncipe, y una semana todavía futura', H)
    xa, xb, xc, xd, xe = 90, 230, 760, 900, 1110
    y = 250
    caja(o, xa, y, xb - xa, 60, '#5a6b3f', None, 6)
    o.append(t((xa + xb) / 2, y + 26, '7 semanas', 17, '#fff', weight='bold'))
    o.append(t((xa + xb) / 2, y + 48, '49 años', 14, '#fff'))
    caja(o, xb + 4, y, xc - xb - 4, 60, PABLO, None, 6)
    o.append(t((xb + xc) / 2, y + 26, '62 semanas', 17, '#fff', weight='bold'))
    o.append(t((xb + xc) / 2, y + 48, '434 años', 14, '#fff'))
    linea(o, xc + 6, y + 30, xd - 6, y + 30, MUTED, 3, True)
    o.append(t((xc + xd) / 2, y - 14, 'Paréntesis', 15, MUTED, weight='bold'))
    caja(o, xd, y, xe - xd, 60, '#fff', ACC, 6, 3)
    o.append(t((xd + xe) / 2, y + 26, 'Semana 70', 17, ACC, weight='bold'))
    o.append(t((xd + xe) / 2, y + 48, '7 años: la tribulación', 14, ACC))
    # extremos
    linea(o, xa, y - 40, xa, y + 100, INK, 2)
    o.append(t(xa, y - 50, 'Nisán del 444 a.C.', 16, INK, anchor='start', weight='bold'))
    o.append(t(xa, y + 124, 'Artajerjes ordena edificar Jerusalén (Neh 2:1-8)', 14, MUTED, anchor='start'))
    linea(o, xc, y - 40, xc, y + 100, ACC, 2)
    o.append(t(xc, y - 50, 'Marzo del 33 d.C.', 16, ACC, weight='bold'))
    o.append(t(xc, y + 124, 'El Mesías Príncipe; luego «se quitará la vida al Mesías»', 14, INK))
    # cálculo
    caja(o, 160, 430, 880, 150, '#fff', GRIS, 10, 1.5)
    o.append(t(600, 466, '69 semanas × 7 años = 483 años proféticos', 19, INK, weight='bold'))
    o.append(t(600, 498, '483 × 360 días = 173.880 días (años de 360 días: Dn 7:25; Ap 12:6, 14)', 17, INK))
    o.append(t(600, 530, 'Del 1 de nisán del 444 a.C. al 30 de marzo del 33 d.C. (cálculo de H. Hoehner)', 17, ACC))
    o.append(t(600, 560, 'Entre la semana 69 y la 70: la destrucción de Jerusalén en el 70 (Dn 9:26) y la edad de la iglesia', 14, MUTED, italic=True))
    o.append(t(600, 640, 'Otra lectura cuenta desde el decreto a Esdras (458 a.C.) con años solares y llega al 26–27 d.C.', 15, MUTED, italic=True))
    guardar('cr-setenta-semanas', o)


# 10. Pablo: Hechos y Gálatas
def pablo_galatas():
    H = 820
    o = lienzo('Los años de Gálatas, al lado de Hechos', 'De la conversión de Pablo al concilio de Jerusalén', H)
    Y0, Y1, A0, A1 = 150, 760, 33, 50
    Y = lambda a: Y0 + (a - A0) * (Y1 - Y0) / (A1 - A0)
    for a in range(34, 51, 2):
        linea(o, 150, Y(a), 1150, Y(a), GRIS, 1)
        o.append(t(130, Y(a) + 5, anio(a), 14, MUTED, anchor='end'))
    o.append(t(420, 132, 'Hechos', 20, IGLESIA, weight='bold'))
    o.append(t(880, 132, 'Gálatas', 20, PABLO, weight='bold'))
    hch = [(34.5, 'Conversión en el camino a Damasco', 'Hch 9:1-19'), (35.5, 'Predica en Damasco', 'Hch 9:20-22'),
           (37, 'Huye en un canasto; visita a Jerusalén', 'Hch 9:23-29'), (38.4, 'Enviado a Tarso', 'Hch 9:30'),
           (44.5, 'Bernabé lo lleva a Antioquía', 'Hch 11:25-26'), (46.5, 'Visita con la ofrenda', 'Hch 11:30; 12:25'),
           (47.5, 'Primer viaje', 'Hch 13–14'), (49, 'El concilio', 'Hch 15')]
    gal = [(34.5, 'Dios me reveló a su Hijo', 'Gá 1:15-16'), (35.5, 'Arabia y otra vez Damasco', 'Gá 1:17'),
           (37, '«Pasados tres años»: quince días con Pedro', 'Gá 1:18-19'), (38.5, 'Siria y Cilicia', 'Gá 1:21'),
           (47.5, '«Pasados catorce años»: otra vez a Jerusalén', 'Gá 2:1-10')]
    for a, n, r in hch:
        y = Y(a)
        punto(o, 300, y, IGLESIA, 9)
        o.append(t(316, y - 2, n, 16, INK, anchor='start', weight='bold'))
        o.append(t(316, y + 17, r, 13, MUTED, anchor='start', italic=True))
    for a, n, r in gal:
        y = Y(a)
        punto(o, 760, y, PABLO, 9)
        o.append(t(776, y - 2, n, 16, INK, anchor='start', weight='bold'))
        o.append(t(776, y + 17, r, 13, MUTED, anchor='start', italic=True))
    # llaves
    o.append(f'<path d="M740 {Y(34.5):.0f} C700 {Y(34.5):.0f}, 700 {Y(37):.0f}, 740 {Y(37):.0f}" fill="none" stroke="{PABLO}" stroke-width="2"/>')
    o.append(t(690, (Y(34.5) + Y(37)) / 2 + 5, '3 años', 14, PABLO, anchor='end', weight='bold'))
    o.append(f'<path d="M740 {Y(34.5):.0f} C640 {Y(36):.0f}, 640 {Y(46):.0f}, 740 {Y(47.5):.0f}" fill="none" stroke="{PABLO}" stroke-width="2" stroke-dasharray="6 5"/>')
    o.append(t(640, Y(42) + 5, '14 años', 14, PABLO, anchor='end', weight='bold'))
    o.append(t(600, H - 22, '«Pasados catorce años» se cuenta desde la conversión: la visita de Gálatas 2 es la de la ofrenda o la del concilio.', 14, MUTED, italic=True))
    guardar('cr-pablo-galatas', o)


# 11. Viajes y cartas de Pablo
def pablo_cartas():
    H = 760
    o = lienzo('Los viajes de Pablo y sus cartas', 'Dónde y cuándo escribió cada carta (fechas aproximadas)', H)
    X0, X1, A0, A1 = 70, 1150, 45, 68
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    for a in range(46, 69, 2):
        linea(o, X(a), 145, X(a), 640, GRIS, 1)
        o.append(t(X(a), 138, a, 14, MUTED))
    tramos = [(46, 48, 'Primer viaje', IGLESIA), (49, 49.6, '', ACC), (49.6, 52.3, 'Segundo viaje', PABLO), (52.6, 57.4, 'Tercer viaje', '#2f8a8a'),
              (57.4, 59.7, 'Cesarea', '#6b7080'), (59.7, 60.3, '', '#6b7080'), (60.3, 62.2, 'Roma', ROMA), (62.2, 66, 'Últimos viajes', '#5a6b3f'), (66, 67.2, '', JESUS)]
    for a, b, n, c in tramos:
        caja(o, X(a) + 1, 160, X(b) - X(a) - 2, 46, c, None, 6, op=0.88)
        if n:
            o.append(t((X(a) + X(b)) / 2, 189, n, 15, '#fff', weight='bold'))
    o.append(t(X(49.3), 228, 'Concilio', 13, ACC))
    o.append(t(X(60), 228, 'Naufragio', 13, MUTED))
    o.append(t(X(66.6), 228, '2.ª prisión', 13, JESUS))
    cartas = [(48.6, 'Gálatas', 'Antioquía', 0), (50.6, '1 Tesalonicenses', 'Corinto', 1), (51.1, '2 Tesalonicenses', 'Corinto', 2),
              (55.4, '1 Corintios', 'Éfeso', 0), (56.3, '2 Corintios', 'Macedonia', 1), (56.9, 'Romanos', 'Corinto', 2),
              (60.6, 'Efesios, Colosenses, Filemón', 'Roma', 0), (61.7, 'Filipenses', 'Roma', 1),
              (63, '1 Timoteo, Tito', 'Macedonia', 2), (66.8, '2 Timoteo', 'Roma', 0)]
    for a, n, lugar, f in cartas:
        x = X(a)
        y = 300 + f * 110
        linea(o, x, 210, x, y - 18, LIBROS, 1.5, True, 0.7)
        o.append(f'<rect x="{x - 9:.0f}" y="{y - 18:.0f}" width="18" height="22" rx="2" fill="{LIBROS}"/>')
        o.append(t(x, y + 26, n, 15, INK, weight='bold'))
        o.append(t(x, y + 46, lugar, 13, MUTED))
    o.append(t(600, 700, 'Gálatas podría ser del tercer viaje (c. 55) si se dirigió a la Galacia del norte.', 15, MUTED, italic=True))
    guardar('cr-pablo-cartas', o)


# 12. Los 27 libros
def libros():
    H = 980
    o = lienzo('Cuándo se escribió cada libro', 'Los 27 libros del Nuevo Testamento en el orden en que se escribieron (fechas probables)', H)
    X0, X1, A0, A1 = 300, 1160, 43, 98
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    for a in range(45, 99, 5):
        linea(o, X(a), 140, X(a), 900, GRIS, 1)
        o.append(t(X(a), 132, a, 14, MUTED))
    x70 = X(70)
    caja(o, x70 - 2, 140, 4, 760, ACC, None, 1)
    o.append(t(x70 + 8, 158, 'Año 70: cae el templo', 14, ACC, anchor='start', weight='bold'))
    L = [
        ('Santiago', 45, 49, LIBROS), ('Gálatas', 48, 49, PABLO), ('1 y 2 Tesalonicenses', 50, 51, PABLO), ('Mateo', 50, 60, JESUS),
        ('1 Corintios', 55, 56, PABLO), ('2 Corintios', 56, 56.6, PABLO), ('Romanos', 56.7, 57.3, PABLO), ('Marcos', 55, 65, JESUS),
        ('Lucas', 60, 61, JESUS), ('Efesios, Colosenses, Filemón', 60, 61, PABLO), ('Filipenses', 61, 62, PABLO), ('Hechos', 62, 62.7, JESUS),
        ('1 Timoteo, Tito', 62, 64, PABLO), ('1 Pedro', 63, 64, LIBROS), ('2 Pedro', 64, 67, LIBROS), ('Hebreos', 64, 68, LIBROS),
        ('Judas', 65, 70, LIBROS), ('2 Timoteo', 66, 67, PABLO), ('Juan', 85, 90, JUAN), ('1, 2 y 3 Juan', 85, 95, JUAN), ('Apocalipsis', 95, 95.8, JUAN)
    ]
    DY = 36
    for i, (n, a, b, c) in enumerate(L):
        y = 172 + i * DY
        o.append(t(X0 - 14, y + 19, n, 16, INK, anchor='end', weight='bold'))
        caja(o, X(a), y + 4, max(X(b) - X(a), 10), 22, c, None, 4, op=0.88)
    ly = 172 + len(L) * DY + 22
    for i, (n, c) in enumerate([('Evangelios y Hechos', JESUS), ('Cartas de Pablo', PABLO), ('Cartas generales', LIBROS), ('Escritos de Juan', JUAN)]):
        x = 200 + i * 230
        caja(o, x, ly, 22, 16, c, None, 3)
        o.append(t(x + 30, ly + 14, n, 15, INK, anchor='start'))
    guardar('cr-libros', o)


for f in (calendario, anclas, panorama, nacimiento, tiberio, pascuas, dia_cruz, anio_cruz, setenta, pablo_galatas, pablo_cartas, libros):
    f()
print('Esquemas generados en', OUT)
