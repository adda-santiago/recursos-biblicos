# Uso: python3 herramientas/esquemas_herodes.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «La dinastía de Herodes» (origen: 'esquema').
# Mismo estilo que esquemas_entre.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Las fechas siguen a Flavio Josefo, con la muerte de Herodes en el 4 a.C. (la otra postura, en II.7).
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'dinastia-herodes', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
HERODES = '#8a5a44'; ASMONEO = '#5e7d4f'; ROMA = '#6b5a7a'; ANTIPAS = '#2f8a8a'; FELIPE = '#c08a1e'; AGRIPA = '#4a6b7c'; AGRIPA2 = '#7a3fa0'
ARQUELAO = '#9e2b25'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x:.0f}" y="{y:.0f}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub, h):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 56, titulo, 32, INK, font=SERIF))
    o.append(t(600, 88, sub, 17, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10, grosor=2):
    b = f' stroke="{borde}" stroke-width="{grosor}"' if borde else ''
    o.append(f'<rect x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h:.0f}" rx="{rx}" fill="{fondo}"{b}/>')


def linea(o, x1, y1, x2, y2, color=MUTED, grosor=2, punteada=False):
    d = ' stroke-dasharray="6 5"' if punteada else ''
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="{color}" stroke-width="{grosor}"{d}/>')


# 1. Quién gobernó dónde: los reinados de la familia sobre una escala de tiempo
def reinados():
    H = 800
    o = lienzo('Los Herodes y el Nuevo Testamento', 'Quién gobernó dónde, del 40 a.C. al 100 d.C. (fechas aproximadas)', H)
    X0, X1, A0, A1 = 300, 1160, -40, 100
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    filas = [
        ('Herodes el Grande', 'rey de todo el país', [(-37, -4, HERODES, '')], 'Mt 2; Lc 1:5'),
        ('Arquelao', 'Judea, Samaria, Idumea', [(-4, 6, ARQUELAO, '')], 'Mt 2:22'),
        ('Gobernadores romanos', 'Judea, Samaria, Idumea', [(6, 41, ROMA, 'prefectos'), (44, 66, ROMA, 'procuradores')], 'Pilato, Félix, Festo'),
        ('Herodes Antipas', 'Galilea y Perea', [(-4, 39, ANTIPAS, '')], 'Lc 3:1; 13:32; 23:7'),
        ('Felipe', 'el noreste', [(-4, 34, FELIPE, '')], 'Lc 3:1'),
        ('Agripa I', 'del norte a todo el país', [(37, 44, AGRIPA, '')], 'Hch 12'),
        ('Agripa II', 'Calcis y el noreste', [(50, 92, AGRIPA2, '')], 'Hch 25–26'),
    ]
    Y0, DY = 150, 66
    # escala
    for a in range(-40, 101, 20):
        x = X(a)
        linea(o, x, Y0 - 18, x, Y0 + DY * len(filas) - 8, GRIS, 1)
        o.append(t(x, Y0 - 26, f'{-a} a.C.' if a < 0 else ('1 d.C.' if a == 0 else f'{a} d.C.'), 14, MUTED))
    for i, (n, d, tramos, ref) in enumerate(filas):
        y = Y0 + i * DY
        o.append(t(X0 - 16, y + 22, n, 19, INK, anchor='end', weight='bold'))
        o.append(t(X0 - 16, y + 43, d, 14, MUTED, anchor='end'))
        for a, b, c, etiqueta in tramos:
            caja(o, X(a), y + 6, X(b) - X(a), 40, c, None, 6)
            if etiqueta and X(b) - X(a) > 70:
                o.append(t((X(a) + X(b)) / 2, y + 31, etiqueta, 13, '#fff', weight='bold'))
        fin = max(b for _, b, _, _ in tramos)
        o.append(t(X(fin) + 8, y + 31, ref, 14, INK, anchor='start', italic=True))
    # hechos del Nuevo Testamento
    yb = Y0 + DY * len(filas) + 30
    o.append(t(X0 - 16, yb + 30, 'Nuevo Testamento', 19, ACC, anchor='end', weight='bold'))
    hechos = [(-5, 'Nace Jesús', 0), (28, 'Ministerio de Jesús', 1), (30, 'Cruz y resurrección', 2), (44, 'Hechos 12', 0),
              (59, 'Pablo ante Agripa', 1), (70, 'Cae el templo', 2)]
    for a, s, fila in hechos:
        x = X(a)
        o.append(f'<line x1="{x:.0f}" y1="{Y0 - 8}" x2="{x:.0f}" y2="{yb + 8 + fila * 34:.0f}" stroke="{ACC}" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.5"/>')
        o.append(f'<circle cx="{x:.0f}" cy="{yb + 8 + fila * 34:.0f}" r="6" fill="{ACC}"/>')
        o.append(t(x + 10, yb + 14 + fila * 34, s, 15, ACC, anchor='start', weight='bold'))
    o.append(t(600, H - 22, 'Herodes muere en el 4 a.C. según la cuenta más aceptada; otros estudiosos proponen el 1 a.C. (estación II.7).', 14, MUTED))
    guardar('hd-reinados', o)


# 2. El árbol de la familia en una mirada
def arbol():
    H = 1000
    o = lienzo('La familia de Herodes', 'Las personas que nombra el Nuevo Testamento van en rojo; el árbol completo, en la página interactiva', H)
    BW, BH = 170, 54

    def p(x, y, n, sub='', nt=False, color=None, ancho=BW):
        borde = ACC if nt else (color or GRIS)
        caja(o, x - ancho / 2, y, ancho, BH, '#fff', borde, 8, 3 if nt else 2)
        o.append(t(x, y + 23, n, 16, ACC if nt else INK, weight='bold'))
        if sub:
            o.append(t(x, y + 42, sub, 12, MUTED))
        return (x, y)

    def union(a, b):  # línea de matrimonio entre dos cajas en la misma fila
        y = a[1] + BH / 2
        linea(o, a[0] + BW / 2, y, b[0] - BW / 2, y, HERODES, 2, True)
        return ((a[0] + b[0]) / 2, y)

    def hijos(desde, lista, y):  # desde = punto (x, y) de la unión o del padre
        ymid = y - 22
        linea(o, desde[0], desde[1], desde[0], ymid)
        xs = [h[0] for h in lista]
        linea(o, min(xs + [desde[0]]), ymid, max(xs + [desde[0]]), ymid)
        for x, _ in lista:
            linea(o, x, ymid, x, y)

    # Generación 0
    y0 = 120
    ant = p(470, y0, 'Antípatro', 'idumeo, † 43 a.C.', color=HERODES)
    cip = p(730, y0, 'Cipros', 'noble nabatea', color=HERODES)
    u0 = union(ant, cip)
    # Generación 1
    y1 = 240
    fas = p(150, y1, 'Fasael', '† 40 a.C.', ancho=130)
    her = p(470, y1, 'Herodes el Grande', 'rey, 37–4 a.C.', nt=True, ancho=200)
    fer = p(800, y1, 'Feroras', 'tetrarca de Perea', ancho=150)
    sal = p(1050, y1, 'Salomé', 'hermana de Herodes', ancho=170)
    hijos((u0[0], u0[1]), [fas, her, fer, sal], y1)
    # Esposas de Herodes (cinco de diez, las que tuvieron hijos que importan)
    y2 = 380
    esposas = [(115, 'Doris', 'primera esposa'), (330, 'Mariamne', 'princesa asmonea'), (545, 'Mariamne II', 'hija de Boeto'), (760, 'Maltace', 'samaritana'), (975, 'Cleopatra', 'de Jerusalén')]
    ys_her = y1 + BH
    linea(o, her[0], ys_her, her[0], y2 - 30, HERODES, 2, True)
    linea(o, 115, y2 - 30, 975, y2 - 30, HERODES, 2, True)
    o.append(t(her[0] + 12, y2 - 48, 'diez esposas; aquí, las cinco cuyos hijos importan', 13, MUTED, anchor='start', italic=True))
    pos = {}
    for x, n, s in esposas:
        linea(o, x, y2 - 30, x, y2, HERODES, 2, True)
        pos[n] = p(x, y2, n, s, color=ASMONEO if n == 'Mariamne' else HERODES, ancho=180)
    # Generación 2: hijos de Herodes
    y3 = 510
    def hijo_de(madre, lista):
        m = pos[madre]
        hijos((m[0], m[1] + BH), lista, y3)
    a2 = p(115, y3, 'Antípatro', 'ejecutado 4 a.C.', ancho=160)
    hijo_de('Doris', [a2])
    ale = p(260, y3, 'Alejandro', 'ejecutado 7 a.C.', ancho=125)
    ari = p(400, y3, 'Aristóbulo', 'ejecutado 7 a.C.', ancho=135)
    hijo_de('Mariamne', [ale, ari])
    h2 = p(560, y3, 'Herodes II', '«Felipe» en Mr 6:17', nt=True, ancho=160)
    hijo_de('Mariamne II', [h2])
    arq = p(715, y3, 'Arquelao', 'etnarca, Mt 2:22', nt=True, ancho=135)
    anti = p(870, y3, 'Antipas', 'tetrarca, Lc 3:1', nt=True, ancho=145)
    hijo_de('Maltace', [arq, anti])
    fel = p(1060, y3, 'Felipe', 'tetrarca, Lc 3:1', nt=True, ancho=140)
    hijo_de('Cleopatra', [fel])
    # Aristóbulo se casa con Berenice, hija de Salomé
    y4 = 640
    ber1 = p(400, y4 - 0, 'Berenice', 'hija de Salomé', ancho=150)
    linea(o, ari[0], y3 + BH, ari[0], y4, HERODES, 2, True)
    o.append(t(ari[0] + 10, y4 - 12, 'se casa con', 12, MUTED, anchor='start', italic=True))
    # línea punteada larga desde Salomé (madre de Berenice)
    o.append(f'<path d="M {sal[0] + 85:.0f} {sal[1] + BH / 2:.0f} L 1185 {sal[1] + BH / 2:.0f} L 1185 {y4 + 27} L {ber1[0] + 75:.0f} {y4 + 27}" fill="none" stroke="{GRIS}" stroke-width="2" stroke-dasharray="3 5"/>')
    o.append(t(1170, y4 + 18, 'hija de Salomé', 12, MUTED, anchor='end', italic=True))
    # Generación 3: hijos de Aristóbulo y Berenice
    y5 = 770
    ag1 = p(230, y5, 'Agripa I', 'rey, Hch 12', nt=True, ancho=140)
    hca = p(400, y5, 'Herodes de Calcis', 'rey de Calcis', ancho=180)
    hrd = p(600, y5, 'Herodías', 'Mt 14; Mr 6', nt=True, ancho=150)
    hijos((ber1[0], y4 + BH), [ag1, hca, hrd], y5)
    # Herodías: primero con Herodes II, después con Antipas
    o.append(f'<path d="M {h2[0]:.0f} {y3 + BH:.0f} C {h2[0]:.0f} 690, {hrd[0] + 10:.0f} 700, {hrd[0] + 10:.0f} {y5:.0f}" fill="none" stroke="{HERODES}" stroke-width="2" stroke-dasharray="6 5"/>')
    o.append(f'<path d="M {anti[0]:.0f} {y3 + BH:.0f} C {anti[0]:.0f} 720, {hrd[0] + 60:.0f} 720, {hrd[0] + 60:.0f} {y5:.0f}" fill="none" stroke="{ANTIPAS}" stroke-width="3" stroke-dasharray="6 5"/>')
    o.append(t(905, 700, '2.º esposo de Herodías', 13, ANTIPAS, anchor='start', italic=True))
    o.append(t(600, 690, '1.er esposo', 13, MUTED, anchor='middle', italic=True))
    # Salomé, hija de Herodías y Herodes II, casada con Felipe
    y6 = 890
    salj = p(760, y6, 'Salomé', 'la hija de Herodías', nt=True, ancho=170)
    linea(o, hrd[0], y5 + BH, hrd[0], y6 + BH / 2)
    linea(o, hrd[0], y6 + BH / 2, salj[0] - 85, y6 + BH / 2)
    o.append(f'<path d="M {fel[0]:.0f} {y3 + BH:.0f} L {fel[0]:.0f} {y6 + BH / 2:.0f} L {salj[0] + 85:.0f} {y6 + BH / 2:.0f}" fill="none" stroke="{FELIPE}" stroke-width="2" stroke-dasharray="6 5"/>')
    o.append(t(fel[0] + 8, y6 + 10, 'esposo de Salomé', 13, FELIPE, anchor='start', italic=True))
    # Generación 4: hijos de Agripa I
    ag2 = p(110, y6, 'Agripa II', 'rey, Hch 25–26', nt=True, ancho=140)
    bere = p(270, y6, 'Berenice', 'Hch 25:13', nt=True, ancho=130)
    dru = p(420, y6, 'Drusila', 'esposa de Félix', nt=True, ancho=140)
    hijos((ag1[0], y5 + BH), [ag2, bere, dru], y6)
    # leyenda
    caja(o, 900, 772, 22, 22, '#fff', ACC, 4, 3)
    o.append(t(930, 789, 'aparece en el Nuevo Testamento', 14, INK, anchor='start'))
    linea(o, 900, 815, 922, 815, HERODES, 2, True)
    o.append(t(930, 820, 'matrimonio', 14, INK, anchor='start'))
    guardar('hd-arbol', o)


# 3. Los cinco Herodes que nombra el Nuevo Testamento, para distinguirlos
def cinco():
    H = 835
    o = lienzo('¿Cuál Herodes?', 'Los nombres de la familia en el Nuevo Testamento y cómo reconocerlos', H)
    filas = [
        ('Herodes el Grande', '«el rey Herodes»', 'Mateo 2; Lucas 1:5', 'Nacimiento de Jesús; los magos; los niños de Belén', HERODES),
        ('Arquelao', '«Arquelao reinaba en Judea»', 'Mateo 2:22', 'José no vuelve a Judea y va a Nazaret', ARQUELAO),
        ('Herodes Antipas', '«Herodes el tetrarca», «el rey Herodes»', 'Lucas 3:1, 19; Marcos 6:14-29; Lucas 13:32 y 23:7-12', 'Juan el Bautista; «esa zorra»; Jesús ante Herodes', ANTIPAS),
        ('Felipe', '«su hermano Felipe tetrarca»', 'Lucas 3:1', 'Cesarea de Filipo (Mt 16:13)', FELIPE),
        ('Agripa I', '«el rey Herodes» en Hechos', 'Hechos 12', 'Mata a Jacobo; encarcela a Pedro; muere en Cesarea', AGRIPA),
        ('Agripa II', '«el rey Agripa»', 'Hechos 25:13–26:32', '«Por poco me persuades a ser cristiano»', AGRIPA2),
    ]
    y = 125
    cab = [(40, 'Persona'), (300, 'Cómo lo llama el texto'), (640, 'Dónde'), (860, 'Qué pasa')]
    for x, s in cab:
        o.append(t(x, y, s, 15, MUTED, anchor='start', weight='bold'))
    RH = 96
    for i, (n, nom, ref, que, c) in enumerate(filas):
        yy = y + 18 + i * (RH + 10)
        caja(o, 30, yy, 1140, RH, '#fff', GRIS, 8, 1)
        caja(o, 30, yy, 10, RH, c, None, 3)
        o.append(t(56, yy + RH / 2 + 7, n, 20, INK, anchor='start', weight='bold', font=SERIF))
        o.append(t(300, yy + RH / 2 + 6, nom, 16, INK, anchor='start', italic=True))
        for col, lineas, color in ((640, ref.split('; '), ACC), (860, que.split('; '), INK)):
            y1 = yy + RH / 2 - (len(lineas) - 1) * 11 + 5
            for k, s in enumerate(lineas):
                o.append(t(col, y1 + k * 22, s, 15, color, anchor='start'))
    o.append(t(600, H - 24, 'Herodes II, primer esposo de Herodías, aparece solo de paso: Marcos 6:17 lo llama Felipe.', 14, MUTED))
    guardar('hd-cual-herodes', o)


reinados()
arbol()
cinco()
print('Esquemas en', OUT)
