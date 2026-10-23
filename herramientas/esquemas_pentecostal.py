# Uso: python3 herramientas/esquemas_pentecostal.py  (desde la raíz del repositorio)
# Genera los esquemas SVG de «El movimiento pentecostal» (origen: 'esquema').
# Mismo estilo que esquemas_historia2.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# El gráfico de crecimiento mundial y el de América Latina se reutilizan de historia-iglesia-2/img.
import os
RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(RAIZ, 'public', 'apps', 'movimiento-pentecostal', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; CLARO = '#e7e2d6'; ACC = '#9e2b25'
AZUL = '#3f6fa3'; VERDE = '#4f7d43'; ORO = '#a9772a'; MORADO = '#6b4e7c'; ROJO = '#9e2b25'; TEAL = '#1e7a7a'; PARDO = '#8a5a44'
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


def caja(o, x, y, w, h, color, lineas, size=18, blanco=False):
    rect(o, x, y, w, h, color if blanco else '#ffffff', None if blanco else color, rx=10, sw=2.5)
    n = len(lineas)
    for i, (s, b) in enumerate(lineas):
        yy = y + h / 2 + (i - (n - 1) / 2) * (size + 8) + size * .35
        o.append(t(x + w / 2, yy, s, size if b else size - 2, '#ffffff' if blanco else (color if b else INK), weight='bold' if b else 'normal'))


# 1. El árbol del movimiento
def arbol():
    o = lienzo('El árbol del movimiento pentecostal', 'De dónde viene y en qué ramas se dividió (simplificado)')
    caja(o, 60, 140, 230, 76, PARDO, [('Wesley', True), ('metodismo, desde 1738', False)])
    caja(o, 360, 140, 280, 76, ORO, [('Movimiento de santidad', True), ('y sanidad divina, siglo XIX', False)])
    caja(o, 400, 250, 200, 64, VERDE, [('Keswick', True), ('desde 1875', False)], 17)
    caja(o, 720, 140, 300, 76, ROJO, [('Topeka (1901)', True), ('y calle Azusa (1906)', True)], 19, True)
    linea(o, 292, 178, 356, 178, GRIS, 3, True)
    linea(o, 642, 178, 716, 178, GRIS, 3, True)
    linea(o, 500, 218, 500, 248, GRIS, 3, True)
    linea(o, 602, 282, 716, 200, GRIS, 3, True)
    # Tronco
    tx = 170
    linea(o, 870, 218, 870, 350, INK, 3)
    linea(o, 870, 350, tx, 350, INK, 3)
    ramas = [(400, 'Santidad pentecostal: tres obras de gracia', 'Iglesia de Dios (Cleveland), Iglesia de Dios en Cristo, Iglesia Pentecostal de Santidad', ROJO),
             (472, 'Obra consumada: dos obras de gracia (1910)', 'Asambleas de Dios (1914), Iglesia Cuadrangular (1927) y la mayoría de hoy', AZUL),
             (544, 'Unicitarios (1913-1916)', 'Niegan la Trinidad y bautizan solo en el nombre de Jesús; se separaron', MUTED),
             (630, 'Renovación carismática (desde 1960)', 'El Espíritu en iglesias protestantes históricas y en la católica (1967)', MORADO),
             (702, 'Tercera ola (década de 1980)', 'Evangélicos que oran por señales sin hablar de un segundo bautismo', TEAL),
             (774, 'Neopentecostales e independientes (desde la década de 1970)', 'Megaiglesias y redes propias; en algunas, enseñanzas desviadas', ORO)]
    linea(o, tx, 350, tx, 774, INK, 3)
    o.append(t(tx - 20, 405, 'Pentecostales', 15, MUTED, 'end', 'bold'))
    o.append(t(tx - 20, 425, 'clásicos', 15, MUTED, 'end', 'bold'))
    o.append(t(tx - 20, 645, 'Nuevas', 15, MUTED, 'end', 'bold'))
    o.append(t(tx - 20, 665, 'olas', 15, MUTED, 'end', 'bold'))
    for y, n, sub, c in ramas:
        linea(o, tx, y, tx + 46, y, c, 3, True)
        rect(o, tx + 50, y - 28, 960, 58, '#ffffff', c, rx=8)
        o.append(t(tx + 66, y - 5, n, 19, c, 'start', 'bold'))
        o.append(t(tx + 66, y + 18, sub, 15, INK, 'start'))
    o.append(t(600, 840, 'Las ramas se superponen: muchas iglesias toman rasgos de más de una.', 16, MUTED, italic=True))
    guardar('esquema-arbol', o)


# 2. ¿Dos o tres obras de gracia?
def obras():
    o = lienzo('¿Dos o tres obras de gracia?', 'Las dos maneras en que los primeros pentecostales ordenaron la vida cristiana')
    cols = [(90, 'Santidad pentecostal (desde 1906)', ROJO,
             [('1. Conversión', 'Justificación: el perdón de los pecados'), ('2. Santificación completa', 'Una segunda obra instantánea'),
              ('3. Bautismo en el Espíritu', 'Poder para servir, con lenguas')]),
            (630, 'Obra consumada (Durham, 1910)', AZUL,
             [('1. Conversión', 'Justificación y comienzo de la santificación'), ('Santificación progresiva', 'Toda la vida, por la obra de Cristo en la cruz'),
              ('2. Bautismo en el Espíritu', 'Poder para servir, con lenguas')])]
    for x, n, c, pasos in cols:
        o.append(t(x + 240, 160, n, 22, c, weight='bold'))
        for i, (a, b) in enumerate(pasos):
            y = 200 + i * 175
            prog = a.startswith('Santificación progresiva')
            rect(o, x, y, 480, 120, '#ffffff' if not prog else CLARO, c, rx=12, sw=2.5)
            o.append(t(x + 240, y + 52, a, 22, c, weight='bold'))
            o.append(t(x + 240, y + 86, b, 17, INK))
            if i < 2:
                linea(o, x + 240, y + 122, x + 240, y + 172, c, 3, True)
    o.append(t(600, 760, 'Las dos coinciden en que el bautismo en el Espíritu Santo es una experiencia distinta de la conversión.', 18, INK))
    o.append(t(600, 792, 'La mayoría de los pentecostales de hoy, entre ellos las Asambleas de Dios, sigue la segunda.', 18, INK))
    guardar('esquema-obras', o)


# 3. El evangelio completo
def evangelio():
    o = lienzo('El evangelio completo', 'Cristo en el centro: del «evangelio cuádruple» de la santidad al pentecostal')
    filas = [('Cristo, Salvador', 'Jn 3:16; Hch 4:12', VERDE, True, True),
             ('Cristo, Santificador', '1 Ts 5:23; He 13:12', PARDO, True, False),
             ('Cristo, Bautizador en el Espíritu', 'Mt 3:11; Hch 1:5', ROJO, False, True),
             ('Cristo, Sanador', 'Is 53:5; Stg 5:14-15', AZUL, True, True),
             ('Cristo, Rey que viene', 'Hch 1:11; 1 Ts 4:16-17', MORADO, True, True)]
    C1, C2 = 780, 1010
    o.append(t(C1, 160, 'Santidad', 21, PARDO, weight='bold'))
    o.append(t(C1, 184, 'A. B. Simpson, década de 1880', 15, MUTED))
    o.append(t(C2, 160, 'Pentecostales', 21, ROJO, weight='bold'))
    o.append(t(C2, 184, '«evangelio cuadrangular», 1922', 15, MUTED))
    for i, (n, ref, c, a, b) in enumerate(filas):
        y = 210 + i * 110
        rect(o, 80, y, 1040, 92, c, None, rx=10, op=.10)
        o.append(t(110, y + 42, n, 23, c, 'start', 'bold'))
        o.append(t(110, y + 72, ref, 17, MUTED, 'start'))
        for x, si in ((C1, a), (C2, b)):
            if si:
                o.append(f'<circle cx="{x}" cy="{y + 46}" r="22" fill="{c}"/>')
                o.append(f'<path d="M{x - 10},{y + 46} l7,8 l14,-16" stroke="#fff" stroke-width="4" fill="none"/>')
            else:
                o.append(t(x, y + 54, '—', 26, GRIS))
    o.append(t(600, 800, 'Muchos pentecostales hablan de un evangelio quíntuple, con las cinco: Cristo salva, santifica, bautiza, sana y viene.', 16, MUTED, italic=True))
    guardar('esquema-evangelio', o)


# 4. Las tres olas
def olas():
    o = lienzo('Pentecostales, carismáticos y tercera ola', 'Tres grandes corrientes, que hoy se cuentan juntas')
    x0, x1, a0, a1 = 120, 1120, 1900, 2030
    X = lambda a: x0 + (a - a0) * (x1 - x0) / (a1 - a0)
    datos = [(1901, 'Pentecostales clásicos', 'Denominaciones nacidas de Topeka, Azusa y sus derivados', 'Bautismo en el Espíritu, distinto de la conversión; lenguas como evidencia inicial', ROJO),
             (1960, 'Carismáticos', 'Creyentes de iglesias históricas, protestantes y católicas', 'Experiencia del Espíritu sin dejar su iglesia; diversas doctrinas', MORADO),
             (1980, 'Tercera ola', 'Evangélicos que no se llaman pentecostales', 'Señales y sanidades; el bautismo en el Espíritu es la conversión', TEAL)]
    for i, (a, n, s1, s2, c) in enumerate(datos):
        y = 170 + i * 165
        rect(o, X(a), y, x1 - X(a) + 30, 54, c, None, rx=8, op=.88)
        o.append(t(X(a) + 18, y + 35, f'{n} (desde {a})', 21, '#ffffff', 'start', 'bold'))
        xa, an = (X(a), 'start') if a < 1950 else (x1 + 30, 'end')
        o.append(t(xa, y + 84, s1, 17, INK, an))
        o.append(t(xa, y + 110, s2, 16, MUTED, an))
    linea(o, x0, 700, x1, 700, INK, 2)
    for a in range(1900, 2031, 20):
        linea(o, X(a), 692, X(a), 708, INK, 2)
        o.append(t(X(a), 734, str(a), 17, MUTED))
    o.append(t(600, 790, 'Las estadísticas mundiales suman las tres corrientes y las iglesias independientes de estilo pentecostal.', 16, MUTED, italic=True))
    guardar('esquema-olas', o)


# 5. Las tres olas del pentecostalismo en Brasil
def brasil():
    o = lienzo('El pentecostalismo en Brasil', 'Tres etapas, según los estudiosos del movimiento')
    cols = [(1910, 'Primera etapa', '1910-1911', ['Congregación Cristiana', '(São Paulo, 1910)', 'Asambleas de Dios', '(Belém, 1911)'], ROJO,
             'Iglesias pioneras: lenguas, santidad estricta y vida sencilla'),
            (1951, 'Segunda etapa', 'Décadas de 1950 y 1960', ['Cuadrangular (1951)', 'Brasil para Cristo (1955)', 'Dios es Amor (1962)'], AZUL,
             'Cruzadas de sanidad en carpas, radio y grandes ciudades'),
            (1977, 'Tercera etapa', 'Desde 1977', ['Iglesia Universal', 'del Reino de Dios (1977)', 'Internacional de la Gracia (1980)'], ORO,
             'Neopentecostales: televisión, liberación y, en muchas, prosperidad')]
    for i, (a, n, f, ig, c, d) in enumerate(cols):
        x = 70 + i * 365
        rect(o, x, 150, 330, 70, c, None, rx=10, op=.9)
        o.append(t(x + 165, 182, n, 22, '#ffffff', weight='bold'))
        o.append(t(x + 165, 207, f, 16, '#ffffff'))
        rect(o, x, 240, 330, 260, '#ffffff', c, rx=10)
        for j, s in enumerate(ig):
            o.append(t(x + 165, 300 + j * 40, s, 19 if not s.startswith('(') else 16, INK if not s.startswith('(') else MUTED, weight='bold' if not s.startswith('(') else 'normal'))
        palabras = d.split(' ')
        l1, l2 = [], []
        for p in palabras:
            (l1 if len(' '.join(l1 + [p])) < 34 and not l2 else l2).append(p)
        o.append(t(x + 165, 560, ' '.join(l1), 17, c, weight='bold'))
        o.append(t(x + 165, 586, ' '.join(l2), 17, c, weight='bold'))
        if i < 2:
            linea(o, x + 332, 370, x + 363, 370, GRIS, 3, True)
    o.append(t(600, 680, 'En el censo de 2022, el 26,9 % de los brasileños de 10 años o más se declaró evangélico:', 18, INK))
    o.append(t(600, 708, 'más de 47 millones de personas, en su mayoría pentecostales.', 18, INK))
    o.append(t(600, 790, 'Fuentes: P. Freston (1994); IBGE, Censo Demográfico 2022 (publicado en junio de 2025).', 16, MUTED, italic=True))
    guardar('esquema-brasil', o)


# 6. Cómo discernir
def discernir():
    o = lienzo('Seis preguntas para discernir', '«Examinadlo todo; retened lo bueno» (1 Tesalonicenses 5:21)')
    items = [('¿Confiesa y exalta a Cristo?', '1 Jn 4:2-3; Jn 16:14', VERDE),
             ('¿Concuerda con toda la Escritura?', 'Hch 17:11; Gá 1:8', AZUL),
             ('¿Edifica a la iglesia?', '1 Co 14:12, 26', ROJO),
             ('¿Produce el fruto del Espíritu?', 'Mt 7:16; Gá 5:22-23', TEAL),
             ('¿Se hace con orden y en amor?', '1 Co 13:1-3; 14:40', MORADO),
             ('¿Busca el bien de otros, no el dinero?', '1 P 5:2; 2 P 2:3', ORO)]
    for i, (q, r, c) in enumerate(items):
        x = 90 + (i % 2) * 520
        y = 150 + (i // 2) * 200
        rect(o, x, y, 500, 160, '#ffffff', c, rx=12, sw=2.5)
        o.append(f'<circle cx="{x + 52}" cy="{y + 80}" r="30" fill="{c}"/>')
        o.append(t(x + 52, y + 90, str(i + 1), 28, '#ffffff', weight='bold'))
        o.append(t(x + 100, y + 72, q, 21, c, 'start', 'bold'))
        o.append(t(x + 100, y + 108, r, 18, MUTED, 'start'))
    o.append(t(600, 790, 'Las preguntas no apagan al Espíritu (1 Ts 5:19): protegen su obra de las imitaciones.', 18, MUTED, italic=True))
    guardar('esquema-discernir', o)


for f in (arbol, obras, evangelio, olas, brasil, discernir):
    f()
print('Esquemas generados en', OUT)
