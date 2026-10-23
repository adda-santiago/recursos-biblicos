# Uso: python3 herramientas/esquemas_historia2.py  (desde la raíz del repositorio)
# Genera los esquemas SVG de «Historia de la Iglesia II (de la Reforma a hoy)» (origen: 'esquema').
# Mismo estilo que esquemas_tierra.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Cifras: Status of Global Christianity 2026 (Gordon-Conwell), Latinobarómetro (1995 y 2024),
# Wycliffe Global Alliance (1 de agosto de 2025). Si se actualizan, corregir aquí y en las partes.
import os
RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(RAIZ, 'public', 'apps', 'historia-iglesia-2', 'img') + os.sep
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


def miles(n):
    s = f'{n:,.1f}' if isinstance(n, float) else f'{n:,}'
    return s.replace(',', 'X').replace('.', ',').replace('X', '.')


# 1. Etapas, 1500-2026
def etapas():
    o = lienzo('Cinco siglos en una línea', 'Las grandes etapas de la historia de la iglesia desde la Reforma')
    x0, x1, a0, a1 = 90, 1130, 1500, 2030
    X = lambda a: x0 + (a - a0) * (x1 - x0) / (a1 - a0)
    tramos = [
        (1517, 1555, 'La Reforma', ROJO, 'II'), (1555, 1648, 'Guerras y confesiones', ORO, 'III'),
        (1648, 1792, 'Puritanos, pietistas y avivamientos', VERDE, 'IV'), (1792, 1910, 'El siglo de las misiones', AZUL, 'V'),
        (1910, 2000, 'El siglo XX', MORADO, 'VI'), (2000, 2026, 'Hoy', TEAL, 'VIII')]
    o.append(t(x0, 168, 'Europa y el mundo', 20, INK, 'start', 'bold'))
    for i, (a, b, n, c, r) in enumerate(tramos):
        rect(o, X(a), 190, X(b) - X(a) - 3, 70, c, rx=6, op=.88)
        o.append(t((X(a) + X(b)) / 2, 233, f'Ruta {r}' if X(b) - X(a) > 110 else r, 17, '#ffffff', weight='bold'))
        y = 300 + (i % 2) * 48
        linea(o, (X(a) + X(b)) / 2, 262, (X(a) + X(b)) / 2, y - 22, c, 2)
        o.append(t((X(a) + X(b)) / 2, y, n, 18, c, weight='bold'))
    # Eje
    linea(o, x0, 430, x1, 430, INK, 2)
    for a in range(1500, 2031, 50):
        linea(o, X(a), 422, X(a), 438, INK, 2)
        o.append(t(X(a), 466, str(a), 17, MUTED))
    hitos = [(1517, '95 tesis'), (1648, 'Westfalia'), (1738, 'Wesley'), (1792, 'Carey'), (1906, 'Azusa'), (1974, 'Lausana')]
    for a, n in hitos:
        o.append(f'<circle cx="{X(a):.1f}" cy="430" r="7" fill="{ACC}"/>')
        o.append(t(X(a), 404, f'{n} ({a})', 15, INK))
    # América Latina
    o.append(t(x0, 545, 'América Latina (ruta VII)', 20, INK, 'start', 'bold'))
    al = [(1500, 1810, ['Colonia: una sola iglesia permitida'], ORO), (1810, 1909, ['Independencias y', 'primeros evangélicos'], AZUL),
          (1909, 2026, ['Crecimiento pentecostal', 'y evangélico'], ROJO)]
    for a, b, n, c in al:
        rect(o, X(a), 565, X(b) - X(a) - 3, 64, c, rx=6, op=.85)
        for k, linea_t in enumerate(n):
            o.append(t((X(a) + X(b)) / 2, 604 + (k - (len(n) - 1) / 2) * 21, linea_t, 16, '#ffffff', weight='bold'))
    o.append(t(X(1500) + 4, 655, '← desde 1492', 15, MUTED, 'start', italic=True))
    for a, n, dy, anc in [(1818, 'Thomson', 0, 'middle'), (1909, 'Valparaíso', 26, 'end'), (1916, 'Panamá', 0, 'start')]:
        o.append(f'<circle cx="{X(a):.1f}" cy="680" r="6" fill="{INK}"/>')
        o.append(t(X(a) + (6 if anc == 'start' else -6 if anc == 'end' else 0), 708 + dy, f'{n} ({a})', 15, INK, anc))
    o.append(t(600, 800, 'Las etapas se superponen: las fechas marcan el comienzo de cada una, no un corte exacto.', 17, MUTED, italic=True))
    guardar('esquema-etapas', o)


# 2. Cristianos por continente, 1900 y 2026 (millones)
def continentes():
    o = lienzo('Cristianos por continente', 'En millones de personas, 1900 y 2026')
    datos = [('Europa (con Rusia)', 380.6, 553.3), ('Norteamérica', 79.3, 275.2), ('América Latina', 62.0, 619.5),
             ('África', 9.6, 779.6), ('Asia', 22.0, 415.8), ('Oceanía', 4.8, 30.6)]
    x0, xmax, vmax = 300, 1100, 800
    E = lambda v: (xmax - x0) * v / vmax
    for v in range(0, 801, 200):
        linea(o, x0 + E(v), 140, x0 + E(v), 720, CLARO, 1.5)
        o.append(t(x0 + E(v), 748, miles(v), 16, MUTED))
    for i, (n, a, b) in enumerate(datos):
        y = 160 + i * 94
        o.append(t(x0 - 18, y + 42, n, 20, INK, 'end', 'bold'))
        rect(o, x0, y + 8, max(E(a), 3), 28, GRIS, rx=4)
        o.append(t(x0 + max(E(a), 3) + 10, y + 29, miles(a), 16, MUTED, 'start'))
        rect(o, x0, y + 42, E(b), 32, ACC, rx=4)
        o.append(t(x0 + E(b) + 10, y + 65, miles(b), 18, ACC, 'start', 'bold'))
    rect(o, 330, 785, 22, 16, GRIS, rx=3); o.append(t(360, 799, '1900', 17, INK, 'start'))
    rect(o, 440, 785, 22, 16, ACC, rx=3); o.append(t(470, 799, '2026', 17, INK, 'start'))
    o.append(t(560, 799, 'Fuente: Status of Global Christianity, 2026 (estimaciones).', 16, MUTED, 'start', italic=True))
    guardar('esquema-continentes', o)


# 3. Familias evangélicas
def familias():
    o = lienzo('Las familias evangélicas', 'Cómo se relacionan las principales familias nacidas de la Reforma')
    cajas = {
        'reforma': (600, 160, 'Reforma protestante', '1517', INK),
        'lut': (150, 290, 'Luteranos', '1517', AZUL), 'ref': (420, 290, 'Reformados', '1520-1560', VERDE),
        'ana': (690, 290, 'Anabautistas', '1525', ORO), 'ang': (1010, 290, 'Anglicanos', '1534', ROJO),
        'pie': (150, 440, 'Pietistas y moravos', 'siglos XVII-XVIII', AZUL), 'pres': (420, 440, 'Presbiterianos', 'y congregacionales', VERDE),
        'men': (690, 440, 'Menonitas', '1536', ORO), 'pur': (960, 440, 'Puritanos', 'y separatistas', PARDO),
        'bau': (560, 590, 'Bautistas', '1609', PARDO), 'met': (1060, 590, 'Metodistas', '1738', MORADO),
        'san': (1060, 720, 'Movimiento de santidad', 'siglo XIX', MORADO),
        'pen': (720, 770, 'Pentecostales', '1901-1910', ACC),
    }
    bw, bh = 230, 62

    def p(k, lado):
        x, y = cajas[k][0], cajas[k][1]
        return {'abajo': (x, y + bh / 2), 'arriba': (x, y - bh / 2), 'izq': (x - bw / 2, y), 'der': (x + bw / 2, y)}[lado]

    def une(a, la, b, lb, dash=None, c=INK):
        x1, y1 = p(a, la); x2, y2 = p(b, lb)
        linea(o, x1, y1, x2, y2, c, 2.2, True, dash)
    for k in ('lut', 'ref', 'ana', 'ang'):
        une('reforma', 'abajo', k, 'arriba')
    une('lut', 'abajo', 'pie', 'arriba'); une('ref', 'abajo', 'pres', 'arriba'); une('ana', 'abajo', 'men', 'arriba'); une('ang', 'abajo', 'pur', 'arriba')
    une('ref', 'der', 'pur', 'izq', '6 5', MUTED)
    une('pur', 'abajo', 'bau', 'arriba'); une('men', 'abajo', 'bau', 'arriba', '6 5', MUTED)
    x1, y1 = p('ang', 'der'); x2, y2 = p('met', 'arriba')
    o.append(f'<path d="M{x1},{y1} L1150,{y1} L1150,520 L{x2},520 L{x2},{y2}" fill="none" stroke="{INK}" stroke-width="2.2" marker-end="url(#fl)"/>')
    x1, y1 = p('pie', 'abajo')
    o.append(f'<path d="M{x1},{y1} L{x1},662 L990,662 L990,{cajas["met"][1] + bh / 2 + 4}" fill="none" stroke="{MUTED}" stroke-width="2.2" stroke-dasharray="6 5" marker-end="url(#fl)"/>')
    une('met', 'abajo', 'san', 'arriba'); une('san', 'izq', 'pen', 'der')
    une('bau', 'abajo', 'pen', 'arriba', '6 5', MUTED)
    for k, (x, y, n, s2, c) in cajas.items():
        rect(o, x - bw / 2, y - bh / 2, bw, bh, '#ffffff', c, 10, 2.5)
        o.append(t(x, y - 4, n, 19, c, weight='bold'))
        o.append(t(x, y + 20, s2, 15, MUTED))
    linea(o, 70, 830, 120, 830, INK, 2.2, True); o.append(t(130, 835, 'nace de', 16, INK, 'start'))
    linea(o, 230, 830, 280, 830, MUTED, 2.2, True, '6 5'); o.append(t(290, 835, 'recibe influencia de', 16, INK, 'start'))
    guardar('esquema-familias', o)


# 4. Las cinco solas
def solas():
    o = lienzo('Las cinco «solas» de la Reforma', 'Cinco convicciones que sostienen el mismo evangelio')
    # Techo
    o.append(f'<polygon points="140,250 600,130 1060,250" fill="{ACC}" fill-opacity=".9"/>')
    o.append(t(600, 225, 'El evangelio de la gracia de Dios', 24, '#ffffff', weight='bold', font=SERIF))
    rect(o, 150, 250, 900, 26, ACC, rx=2, op=.75)
    col = [('Sola', 'Escritura', '2 Ti 3:16-17', AZUL), ('Sola', 'gracia', 'Ef 2:8', VERDE), ('Sola', 'fe', 'Ro 3:28', ORO),
           ('Solo', 'Cristo', '1 Ti 2:5', ROJO), ('Solo a Dios', 'la gloria', '1 Co 10:31', MORADO)]
    for i, (a, b, r, c) in enumerate(col):
        x = 215 + i * 192
        rect(o, x - 72, 290, 144, 380, '#ffffff', c, 6, 3)
        rect(o, x - 72, 290, 144, 20, c, rx=3)
        o.append(t(x, 420, a, 21, c, weight='bold'))
        o.append(t(x, 450, b, 21, c, weight='bold'))
        o.append(t(x, 630, r, 16, MUTED))
    rect(o, 130, 680, 940, 60, CLARO, GRIS, 4, 2)
    o.append(t(600, 718, 'Sacerdocio de todos los creyentes (1 P 2:9)', 21, INK, weight='bold'))
    o.append(t(600, 800, 'La lista de las cinco «solas» se formuló en el siglo XX; las convicciones son de los reformadores.', 17, MUTED, italic=True))
    guardar('esquema-solas', o)


# 5. Pentecostales y carismáticos
def pentecostales():
    o = lienzo('Pentecostales y carismáticos en el mundo', 'En millones de personas')
    datos = [('1900', 0.981), ('1970', 57.6), ('2000', 442.6), ('2026', 676.1)]
    y0, ymax, vmax = 720, 160, 700
    Y = lambda v: y0 - (y0 - ymax) * v / vmax
    for v in range(0, 701, 100):
        linea(o, 160, Y(v), 1080, Y(v), CLARO, 1.5)
        o.append(t(145, Y(v) + 6, miles(v), 16, MUTED, 'end'))
    for i, (a, v) in enumerate(datos):
        x = 280 + i * 220
        rect(o, x - 70, Y(v), 140, max(y0 - Y(v), 3), ACC, rx=4, op=.9)
        lab = 'menos de 1' if v < 1 else miles(v)
        o.append(t(x, Y(v) - 14, lab, 22, ACC, weight='bold'))
        o.append(t(x, y0 + 34, a, 20, INK, weight='bold'))
    linea(o, 160, y0, 1080, y0, INK, 2)
    o.append(t(600, 810, 'Fuente: Status of Global Christianity, 2026. Incluye pentecostales clásicos, carismáticos e independientes.', 16, MUTED, italic=True))
    guardar('esquema-pentecostales', o)


# 6. Religión en América Latina, 1995 y 2024
def latam():
    o = lienzo('Religión en América Latina', 'Porcentaje de la población, 1995 y 2024 (Latinobarómetro)')
    datos = [('Católicos', 80, 54, ORO), ('Evangélicos', 6, 19, ACC), ('Sin religión', 4, 19, MUTED)]
    y0, ymax, vmax = 700, 170, 90
    Y = lambda v: y0 - (y0 - ymax) * v / vmax
    for v in range(0, 91, 10):
        linea(o, 150, Y(v), 1090, Y(v), CLARO, 1.5)
        o.append(t(135, Y(v) + 6, f'{v} %', 15, MUTED, 'end'))
    for i, (n, a, b, c) in enumerate(datos):
        x = 300 + i * 310
        rect(o, x - 105, Y(a), 95, y0 - Y(a), c, rx=4, op=.45)
        o.append(t(x - 57, Y(a) - 12, f'{a} %', 20, c, weight='bold'))
        rect(o, x + 10, Y(b), 95, y0 - Y(b), c, rx=4, op=.95)
        o.append(t(x + 57, Y(b) - 12, f'{b} %', 20, c, weight='bold'))
        o.append(t(x - 57, y0 + 28, '1995', 16, MUTED)); o.append(t(x + 57, y0 + 28, '2024', 16, MUTED))
        o.append(t(x, y0 + 62, n, 22, INK, weight='bold'))
    linea(o, 150, y0, 1090, y0, INK, 2)
    o.append(t(600, 815, 'Promedio regional de las encuestas de Latinobarómetro; cada país tiene cifras distintas.', 16, MUTED, italic=True))
    guardar('esquema-latam', o)


# 7. La Escritura en las lenguas del mundo
def biblia():
    o = lienzo('La Escritura en las lenguas del mundo', 'Número de lenguas, al 1 de agosto de 2025')
    datos = [('Con la Biblia completa', 776, ACC), ('Con el Nuevo Testamento', 1798, AZUL),
             ('Con algunas porciones', 1433, VERDE), ('Esperan que comience una traducción', 544, MUTED)]
    x0, xmax, vmax = 470, 1100, 2000
    E = lambda v: (xmax - x0) * v / vmax
    for v in range(0, 2001, 500):
        linea(o, x0 + E(v), 150, x0 + E(v), 600, CLARO, 1.5)
        o.append(t(x0 + E(v), 628, miles(v), 16, MUTED))
    for i, (n, v, c) in enumerate(datos):
        y = 180 + i * 105
        o.append(t(x0 - 18, y + 38, n, 20, INK, 'end', 'bold'))
        rect(o, x0, y + 12, E(v), 44, c, rx=5, op=.9)
        o.append(t(x0 + E(v) + 12, y + 42, miles(v), 20, c, 'start', 'bold'))
    rect(o, 150, 665, 900, 100, CLARO, GRIS, 8, 2)
    o.append(t(600, 705, 'Hay traducción en curso en 4.457 lenguas. En el mundo se hablan más de 7.000.', 20, INK))
    o.append(t(600, 740, 'Las 544 lenguas que esperan las hablan unos 36,8 millones de personas.', 18, MUTED))
    o.append(t(600, 815, 'Fuente: Wycliffe Global Alliance, estadísticas de acceso a la Escritura (2025).', 16, MUTED, italic=True))
    guardar('esquema-biblia', o)


for f in (etapas, continentes, familias, solas, pentecostales, latam, biblia):
    f()
print('Esquemas generados en', OUT)
