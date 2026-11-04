# Uso: python3 herramientas/esquemas_sinoptico.py  (desde la raíz del repositorio)
# Genera los esquemas SVG de la ruta «El problema sinóptico» de la Armonía (origen: 'esquema').
# Mismo estilo que esquemas_introduccion.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# El texto bíblico del esquema de las palabras se lee de public/biblia/rv1960, para que coincida con el sitio.
# Colores de los evangelios: los de la Introducción al Nuevo Testamento (Mateo, Marcos, Lucas, Juan).
import os, json, re
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(R, 'public', 'apps', 'evangelios', 'sinoptico', 'img') + os.sep
B = os.path.join(R, 'public', 'biblia', 'rv1960')
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
MT = '#2a6fb0'; MR = '#b03a2e'; LC = '#2f7d4a'; JN = '#7a3fa0'; ORO = '#c08a1e'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{esc(s)}</text>'


def lienzo(titulo, sub=None, h=760):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 60, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 94, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10, op=1.0):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}" fill-opacity="{op}"{b}/>')


def flecha(o, x1, y1, x2, y2, color=INK, ancho=3):
    import math
    a = math.atan2(y2 - y1, x2 - x1); L = 14
    p1 = (x2 - L * math.cos(a - 0.4), y2 - L * math.sin(a - 0.4)); p2 = (x2 - L * math.cos(a + 0.4), y2 - L * math.sin(a + 0.4))
    o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2 - 8 * math.cos(a):.1f}" y2="{y2 - 8 * math.sin(a):.1f}" stroke="{color}" stroke-width="{ancho}"/>')
    o.append(f'<polygon points="{x2},{y2} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}" fill="{color}"/>')


# 1. Tres círculos: material común y propio
def tres_circulos():
    o = lienzo('Lo que comparten y lo que es propio', 'Versículos aproximados de Mateo, Marcos y Lucas', h=880)
    cx = {'mt': (440, 360), 'lc': (760, 360), 'mr': (600, 560)}
    r = 230
    for k, c in (('mt', MT), ('lc', LC), ('mr', MR)):
        x, y = cx[k]
        o.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}" fill-opacity="0.13" stroke="{c}" stroke-width="3"/>')
    o.append(t(300, 170, 'Mateo', 28, MT, weight='bold', font=SERIF))
    o.append(t(300, 198, '1.071 versículos', 16, MUTED))
    o.append(t(900, 170, 'Lucas', 28, LC, weight='bold', font=SERIF))
    o.append(t(900, 198, '1.151 versículos', 16, MUTED))
    o.append(t(600, 826, 'Marcos · 678 versículos', 24, MR, weight='bold', font=SERIF))
    # zonas
    o.append(t(320, 350, 'Propio de Mateo', 19, INK, weight='bold'))
    o.append(t(320, 376, 'cerca de 300', 18, MUTED))
    o.append(t(320, 402, 'los magos, la cizaña', 16, MUTED, italic=True))
    o.append(t(880, 350, 'Propio de Lucas', 19, INK, weight='bold'))
    o.append(t(880, 376, 'cerca de 500', 18, MUTED))
    o.append(t(880, 402, 'el hijo pródigo, Emaús', 16, MUTED, italic=True))
    o.append(t(600, 262, 'Doble tradición', 19, INK, weight='bold'))
    o.append(t(600, 288, 'Mateo y Lucas: unos 230', 17, MUTED))
    o.append(t(600, 312, 'el Padre nuestro, el centurión', 16, MUTED, italic=True))
    o.append(t(600, 430, 'Triple tradición', 21, INK, weight='bold'))
    o.append(t(600, 456, 'en los tres', 17, MUTED))
    o.append(t(600, 480, 'el paralítico, la tempestad', 16, MUTED, italic=True))
    o.append(t(475, 560, 'Mateo y Marcos', 15, INK))
    o.append(t(725, 560, 'Marcos y Lucas', 15, INK))
    o.append(t(600, 690, 'Propio de Marcos: unos 30', 17, INK, weight='bold'))
    o.append(t(600, 714, 'la semilla que crece sola', 15, MUTED, italic=True))
    o.append(t(600, 862, 'Cerca del 90 % de Marcos está en Mateo, y más de la mitad en Lucas', 15, MUTED))
    guardar('esquema-tres-circulos', o)


# 2. El orden: diez pasajes de Marcos 2–5
def orden():
    pas = [('El paralítico', '9:1', '2:1', '5:17'), ('Leví', '9:9', '2:13', '5:27'), ('El ayuno', '9:14', '2:18', '5:33'),
           ('Las espigas', '12:1', '2:23', '6:1'), ('La mano seca', '12:9', '3:1', '6:6'), ('Los doce', '10:1', '3:13', '6:12'),
           ('El sembrador', '13:1', '4:1', '8:4'), ('La tempestad', '8:23', '4:35', '8:22'), ('El gadareno', '8:28', '5:1', '8:26'),
           ('Jairo', '9:18', '5:21', '8:40')]
    def clave(r):
        c, v = r.split(':'); return int(c) * 1000 + int(v)
    orden_mt = sorted(range(10), key=lambda i: clave(pas[i][1]))
    o = lienzo('El mismo orden', 'Diez pasajes de Marcos 2–5 y sus paralelos', h=820)
    y0, dy = 170, 60
    xs = {'mt': 200, 'mr': 600, 'lc': 1000}
    ancho = 300
    for k, nombre, c in (('mt', 'Mateo', MT), ('mr', 'Marcos', MR), ('lc', 'Lucas', LC)):
        o.append(t(xs[k], 140, nombre, 26, c, weight='bold', font=SERIF))
    pos_mt = {i: n for n, i in enumerate(orden_mt)}
    # líneas
    for i in range(10):
        ym = y0 + i * dy + 22
        yl = ym
        yt = y0 + pos_mt[i] * dy + 22
        cruz = pos_mt[i] != i
        o.append(f'<line x1="{xs["mr"] - ancho / 2}" y1="{ym}" x2="{xs["mt"] + ancho / 2}" y2="{yt}" stroke="{ACC if cruz else GRIS}" stroke-width="{3 if cruz else 2}"/>')
        o.append(f'<line x1="{xs["mr"] + ancho / 2}" y1="{ym}" x2="{xs["lc"] - ancho / 2}" y2="{yl}" stroke="{GRIS}" stroke-width="2"/>')
    for i, (n, mt, mr, lc) in enumerate(pas):
        y = y0 + i * dy
        for k, ref, c, nom in (('mr', 'Mr ' + mr, MR, n), ('lc', 'Lc ' + lc, LC, n)):
            caja(o, xs[k] - ancho / 2, y, ancho, 44, c, op=0.14)
            o.append(t(xs[k] - ancho / 2 + 14, y + 28, nom, 17, INK, 'start'))
            o.append(t(xs[k] + ancho / 2 - 14, y + 28, ref, 15, MUTED, 'end'))
    for n_pos, i in enumerate(orden_mt):
        y = y0 + n_pos * dy
        n, mt = pas[i][0], pas[i][1]
        caja(o, xs['mt'] - ancho / 2, y, ancho, 44, MT, op=0.14)
        o.append(t(xs['mt'] - ancho / 2 + 14, y + 28, n, 17, INK, 'start'))
        o.append(t(xs['mt'] + ancho / 2 - 14, y + 28, 'Mt ' + mt, 15, MUTED, 'end'))
    o.append(t(600, 790, 'Lucas sigue el orden de Marcos; Mateo agrupa milagros en los cap. 8–9 y parábolas en el cap. 13 (líneas rojas).', 16, MUTED))
    guardar('esquema-orden', o)


# 3. Las palabras: el paréntesis del paralítico
def versos(libro, cap, a, z):
    v = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    return ' '.join(v[i - 1] for i in range(a, z + 1))


def partir(txt, n):
    lineas, l = [], ''
    for w in txt.split():
        if len(l) + len(w) + 1 > n:
            lineas.append(l); l = w
        else:
            l = (l + ' ' + w).strip()
    lineas.append(l)
    return lineas


def palabras():
    cols = [('Mateo 9:6', MT, versos('mt', 9, 6, 6)), ('Marcos 2:10-11', MR, versos('mr', 2, 10, 11)), ('Lucas 5:24', LC, versos('lc', 5, 24, 24))]
    o = lienzo('Un mismo paréntesis en tres evangelios', 'El narrador interrumpe a Jesús en el mismo punto de la frase', h=520)
    comun = 'Pues para que sepáis que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados'
    for k, (ref, c, txt) in enumerate(cols):
        x = 40 + k * 380
        caja(o, x, 130, 360, 300, '#ffffff', c)
        o.append(f'<rect x="{x}" y="130" width="360" height="8" fill="{c}"/>')
        o.append(t(x + 180, 175, ref, 22, c, weight='bold', font=SERIF))
        y = 220
        for linea in partir(txt, 32):
            # resaltar el paréntesis
            m = re.search(r'\([^)]*\)?|\(?[^(]*\)', linea) if '(' in linea or ')' in linea else None
            if m:
                ini, fin = m.span()
                o.append(f'<text x="{x + 20}" y="{y}" font-family="{SERIF}" font-size="21" fill="{INK}">{esc(linea[:ini])}<tspan fill="{ACC}" font-weight="bold">{esc(linea[ini:fin])}</tspan>{esc(linea[fin:])}</text>')
            else:
                o.append(f'<text x="{x + 20}" y="{y}" font-family="{SERIF}" font-size="21" fill="{INK}">{esc(linea)}</text>')
            y += 31
    o.append(t(600, 480, 'Texto de la Reina-Valera 1960. En rojo, la nota del narrador; en griego las tres frases coinciden casi palabra por palabra.', 16, MUTED))
    assert all(comun in c[2] for c in cols)
    guardar('esquema-palabras', o)


# 4. Las hipótesis
def hipotesis():
    o = lienzo('Cómo se explica la relación', 'Cuatro propuestas; todas parten de la enseñanza de los testigos', h=820)
    def nodo(x, y, s, c, w=130):
        caja(o, x - w / 2, y - 26, w, 52, c, op=0.18, borde=c)
        o.append(t(x, y + 7, s, 20, INK, weight='bold', font=SERIF))
    paneles = [(40, 130, 'Agustín (hacia 400)', 'Mateo, Marcos, Lucas'),
               (620, 130, 'Griesbach · dos evangelios', 'Mateo primero; Marcos combina'),
               (40, 420, 'Dos fuentes (siglo XIX)', 'Marcos primero, más Q'),
               (620, 420, 'Farrer (1955)', 'Marcos primero, sin Q')]
    for x, y, tit, sub in paneles:
        caja(o, x, y, 540, 270, '#ffffff', GRIS)
        o.append(t(x + 270, y + 36, tit, 21, INK, weight='bold', font=SERIF))
        o.append(t(x + 270, y + 62, sub, 16, MUTED))
    # Agustín: Mt -> Mr -> Lc
    x, y = 40, 130
    nodo(x + 110, y + 170, 'Mateo', MT); nodo(x + 270, y + 170, 'Marcos', MR); nodo(x + 430, y + 170, 'Lucas', LC)
    flecha(o, x + 175, y + 170, x + 203, y + 170); flecha(o, x + 335, y + 170, x + 363, y + 170)
    o.append(t(x + 270, y + 240, 'Cada uno conoce al anterior', 15, MUTED, italic=True))
    # Griesbach: Mt -> Lc ; Mt, Lc -> Mr
    x, y = 620, 130
    nodo(x + 130, y + 120, 'Mateo', MT); nodo(x + 410, y + 120, 'Lucas', LC); nodo(x + 270, y + 220, 'Marcos', MR)
    flecha(o, x + 195, y + 120, x + 343, y + 120); flecha(o, x + 160, y + 146, x + 230, y + 194); flecha(o, x + 380, y + 146, x + 310, y + 194)
    # Dos fuentes: Mr, Q -> Mt, Lc
    x, y = 40, 420
    nodo(x + 170, y + 115, 'Marcos', MR); nodo(x + 370, y + 115, 'Q', ORO, 90)
    nodo(x + 170, y + 220, 'Mateo', MT); nodo(x + 370, y + 220, 'Lucas', LC)
    flecha(o, x + 170, y + 141, x + 170, y + 192); flecha(o, x + 210, y + 141, x + 330, y + 194)
    flecha(o, x + 370, y + 141, x + 370, y + 192); flecha(o, x + 335, y + 141, x + 215, y + 194)
    o.append(t(x + 470, y + 120, 'colección', 14, MUTED, italic=True)); o.append(t(x + 470, y + 138, 'de dichos', 14, MUTED, italic=True))
    # Farrer: Mr -> Mt -> Lc ; Mr -> Lc
    x, y = 620, 420
    nodo(x + 130, y + 120, 'Marcos', MR); nodo(x + 410, y + 120, 'Mateo', MT); nodo(x + 270, y + 220, 'Lucas', LC)
    flecha(o, x + 195, y + 120, x + 343, y + 120); flecha(o, x + 160, y + 146, x + 230, y + 194); flecha(o, x + 380, y + 146, x + 310, y + 194)
    # base: tradición oral
    caja(o, 40, 716, 1120, 60, ORO, op=0.16, borde=ORO)
    o.append(t(600, 754, 'Debajo de todas: la enseñanza oral de los apóstoles y testigos (Lc 1:2; Hch 2:42)', 19, INK, font=SERIF))
    guardar('esquema-hipotesis', o)


# 5. Fuentes e inspiración
def inspiracion():
    o = lienzo('Del hecho al evangelio escrito', 'El Espíritu Santo acompaña todo el proceso', h=720)
    niveles = [(540, 'Los hechos y las palabras de Jesús', 'Lo que Jesús hizo y enseñó (Hch 1:1)', MR),
               (390, 'Los testigos y la investigación', 'Los apóstoles enseñan; el evangelista recuerda, investiga y elige (Lc 1:1-3)', ORO),
               (240, 'El evangelio escrito', 'Palabra de un autor humano y Palabra de Dios (2 P 1:21)', MT)]
    for y, tit, sub, c in niveles:
        caja(o, 80, y - 40, 760, 110, c, op=0.14, borde=c)
        o.append(t(460, y + 4, tit, 24, INK, weight='bold', font=SERIF))
        o.append(t(460, y + 36, sub, 16, MUTED))
    flecha(o, 460, 495, 460, 466, INK); flecha(o, 460, 345, 460, 316, INK)
    caja(o, 890, 200, 230, 450, JN, op=0.12, borde=JN)
    o.append(t(1005, 250, 'El Espíritu Santo', 22, JN, weight='bold', font=SERIF))
    for i, s in enumerate(['recuerda', '(Jn 14:26)', '', 'guía', '(Jn 16:13)', '', 'inspira', '(2 Ti 3:16)']):
        o.append(t(1005, 320 + i * 34, s, 20 if not s.startswith('(') else 15, INK if not s.startswith('(') else MUTED, weight='bold' if s and not s.startswith('(') else 'normal'))
    guardar('esquema-inspiracion', o)


tres_circulos(); orden(); palabras(); hipotesis(); inspiracion()
print('Esquemas en', OUT)
