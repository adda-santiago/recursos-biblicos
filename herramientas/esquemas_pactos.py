# Uso: python3 herramientas/esquemas_pactos.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Pactos y dispensaciones» (origen: 'esquema').
# Mismo estilo que esquemas_trinidad.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'pactos-y-dispensaciones', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; GRAFITO = '#4a4a4a'; PARDO = '#8a5a2b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760
# Un color por pacto, el mismo en todos los esquemas del recurso
C_NOE, C_ABR, C_SIN, C_TIE, C_DAV, C_NUE, C_CRISTO = TEAL, ORO, GRAFITO, VERDE, MORADO, ROJO, ACC


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False, rot=None):
    st = ' font-style="italic"' if italic else ''
    tr = f' transform="rotate({rot} {x} {y})"' if rot is not None else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}{tr}>{s}</text>'


def lienzo(titulo, sub=None, h=H):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 64, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 98, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14, extra=''):
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"{extra}/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Las partes de un tratado antiguo y el pacto del Sinaí
def tratado():
    o = lienzo('Un tratado antiguo y el pacto del Sinaí', 'Las partes de un tratado de vasallaje y dónde aparecen en Éxodo y Deuteronomio')
    partes = [('Preámbulo', 'Quién es el gran rey', '«Yo soy Jehová tu Dios»', 'Éx 20:2a; Dt 1:1-5'),
              ('Prólogo histórico', 'Lo que el rey ya hizo', '«que te saqué de la tierra de Egipto»', 'Éx 20:2b; Dt 1–4'),
              ('Obligaciones', 'Lealtad exclusiva y leyes', 'Los mandamientos y estatutos', 'Éx 20–23; Dt 5–26'),
              ('Depósito y lectura', 'Guardar el texto y leerlo', 'Las tablas en el arca; leer la ley', 'Éx 25:16; Dt 31:9-13'),
              ('Testigos', 'Quiénes dan fe del pacto', 'Los cielos y la tierra', 'Dt 30:19; 31:28'),
              ('Bendiciones y maldiciones', 'Por cumplir o por romper', 'Bendiciones y maldiciones del pacto', 'Lv 26; Dt 28')]
    o.append(t(265, 148, 'En un tratado antiguo', 18, MUTED, weight='bold'))
    o.append(t(830, 148, 'En el pacto del Sinaí', 18, MUTED, weight='bold'))
    for k, (n, desc, sinai, ref) in enumerate(partes):
        y = 168 + k * 88
        caja(o, 60, y, 410, 72, '#fff', GRAFITO, 10)
        o.append(f'<circle cx="98" cy="{y + 36}" r="20" fill="{GRAFITO}"/>')
        o.append(t(98, y + 43, str(k + 1), 20, '#fff', weight='bold'))
        o.append(t(132, y + 32, n, 21, INK, anchor='start', font=SERIF, weight='bold'))
        o.append(t(132, y + 57, desc, 16, MUTED, anchor='start'))
        flecha(o, 480, y + 36, 550, y + 36, ORO, 3, 10)
        caja(o, 560, y, 580, 72, '#f3e7c9', ORO, 10)
        o.append(t(584, y + 32, sinai, 19, INK, anchor='start', font=SERIF))
        o.append(t(584, y + 57, ref, 16, PARDO, anchor='start', italic=True))
    o.append(t(600, 725, 'Primero el favor del rey, después las obligaciones: Israel obedecía porque ya había sido rescatado.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-tratado', o)


# 2. Los pactos de Dios convergen en Cristo
def pactos():
    o = lienzo('Los pactos de Dios', 'De Noé a Cristo: las promesas a Abraham se amplían y se cumplen en Él')
    # Noé, base
    caja(o, 60, 140, 1080, 64, '#d9eded', C_NOE, 12)
    o.append(t(600, 170, 'Noé · la tierra preservada para el plan de Dios', 22, C_NOE, font=SERIF, weight='bold'))
    o.append(t(600, 194, 'Gn 9:8-17 · señal: el arco iris', 15, MUTED, italic=True))
    # Abraham, tronco
    caja(o, 300, 236, 600, 100, '#f3e7c9', C_ABR, 12)
    o.append(t(600, 270, 'Abraham · Gn 12; 15; 17', 24, C_ABR, font=SERIF, weight='bold'))
    for i, s in enumerate(['tierra', 'descendencia', 'bendición']):
        x = 400 + i * 200
        o.append(f'<rect x="{x - 80}" y="290" width="160" height="34" rx="17" fill="#fff" stroke="{C_ABR}" stroke-width="2"/>')
        o.append(t(x, 313, s, 18, INK, weight='bold'))
    flecha(o, 600, 206, 600, 234, C_NOE, 3, 9)
    # Tres desarrollos
    ramas = [(400, 'La tierra', 'Dt 29–30', 'dispersión y regreso', C_TIE, '#e0eee4'),
             (600, 'David', '2 S 7', 'casa, reino y trono', C_DAV, '#ece3f2'),
             (800, 'Nuevo pacto', 'Jer 31; Ez 36', 'ley en el corazón y el Espíritu', C_NUE, '#f6dcd8')]
    for x, n, ref, prom, c, fondo in ramas:
        flecha(o, x, 326, x, 404, c, 4, 11)
        caja(o, x - 92, 408, 184, 108, fondo, c, 12)
        o.append(t(x, 440, n, 21, c, font=SERIF, weight='bold'))
        o.append(t(x, 464, ref, 15, MUTED, italic=True))
        palabras = prom.split(' '); m = (len(palabras) + 1) // 2
        o.append(t(x, 488, ' '.join(palabras[:m]), 15, INK))
        o.append(t(x, 506, ' '.join(palabras[m:]), 15, INK))
    # Sinaí, añadido al costado
    caja(o, 60, 408, 200, 108, '#e6e6e4', C_SIN, 12)
    o.append(t(160, 440, 'Sinaí', 21, C_SIN, font=SERIF, weight='bold'))
    o.append(t(160, 464, 'Éx 19–24', 15, MUTED, italic=True))
    o.append(t(160, 488, 'añadido por un tiempo', 15, INK))
    o.append(t(160, 506, '(Gá 3:17-19)', 15, MUTED, italic=True))
    o.append(f'<path d="M260,462 C 290,462 296,330 312,322" fill="none" stroke="{C_SIN}" stroke-width="3" stroke-dasharray="8 6"/>')
    # Sacerdotal
    caja(o, 940, 408, 200, 108, '#f2f0ea', GRIS, 12)
    o.append(t(1040, 440, 'Sacerdocio', 21, GRAFITO, font=SERIF, weight='bold'))
    o.append(t(1040, 464, 'Nm 25:12-13', 15, MUTED, italic=True))
    o.append(t(1040, 488, 'un sacerdocio', 15, INK))
    o.append(t(1040, 506, 'para siempre', 15, INK))
    # Cristo
    caja(o, 160, 590, 880, 92, C_CRISTO)
    o.append(t(600, 628, 'Cristo', 30, '#fff', font=SERIF))
    o.append(t(600, 660, 'simiente de Abraham · Hijo de David · cumplió la ley · sacerdote para siempre · mediador del nuevo pacto', 16, '#fff'))
    for x, c in ((160, C_SIN), (400, C_TIE), (600, C_DAV), (800, C_NUE), (1040, GRAFITO)):
        flecha(o, x, 518, 600 + (x - 600) * 0.45, 586, c, 3, 10)
    o.append(t(600, 728, '«todas las promesas de Dios son en él Sí, y en él Amén» (2 Co 1:20)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-pactos', o)


# 3. El olivo de Romanos 11
def olivo():
    o = lienzo('El olivo de Romanos 11', 'Las ramas viven de la raíz: las promesas de Dios a los patriarcas')
    # suelo y raíz
    o.append(f'<rect x="60" y="610" width="1080" height="110" rx="12" fill="#e9dfcc"/>')
    for dx in (-160, -90, -30, 30, 90, 160):
        o.append(f'<path d="M600,612 C {600 + dx * 0.4},630 {600 + dx * 0.9},640 {600 + dx},660" fill="none" stroke="{PARDO}" stroke-width="7" stroke-linecap="round"/>')
    o.append(t(600, 700, 'La raíz: los patriarcas y las promesas (Ro 11:16-18, 28)', 20, PARDO, font=SERIF, weight='bold'))
    # tronco
    o.append(f'<path d="M570,612 C 560,520 585,470 580,400 L 620,400 C 615,470 640,520 630,612 Z" fill="{PARDO}"/>')
    # ramas naturales (verde oscuro)
    nat = [(600, 400, 360, 250), (600, 400, 470, 190), (600, 400, 600, 160), (600, 400, 730, 190)]
    for x1, y1, x2, y2 in nat:
        o.append(f'<path d="M{x1},{y1} Q {(x1 + x2) / 2},{min(y1, y2) - 20} {x2},{y2}" fill="none" stroke="{VERDE}" stroke-width="12" stroke-linecap="round"/>')
        for k in range(4):
            fx = x1 + (x2 - x1) * (0.45 + k * 0.17); fy = y1 + (y2 - y1) * (0.45 + k * 0.17) - 18
            o.append(f'<ellipse cx="{fx:.0f}" cy="{fy:.0f}" rx="16" ry="7" fill="{VERDE}" transform="rotate(-25 {fx:.0f} {fy:.0f})"/>')
    # ramas desgajadas
    for x, y, r in ((300, 520, -30), (400, 560, 20)):
        o.append(f'<path d="M{x},{y} l 80,-26" stroke="{GRIS}" stroke-width="10" stroke-linecap="round" transform="rotate({r} {x} {y})"/>')
    o.append(t(250, 590, 'ramas desgajadas por incredulidad (v. 20)', 16, MUTED, italic=True))
    # ramas injertadas (oro)
    inj = [(600, 430, 860, 300), (600, 450, 900, 400)]
    for x1, y1, x2, y2 in inj:
        o.append(f'<path d="M{x1},{y1} Q {(x1 + x2) / 2},{min(y1, y2) - 30} {x2},{y2}" fill="none" stroke="{ORO}" stroke-width="11" stroke-linecap="round"/>')
        o.append(f'<circle cx="{x1 + 30}" cy="{y1 - 6}" r="9" fill="#fff" stroke="{ORO}" stroke-width="4"/>')
        for k in range(3):
            fx = x1 + (x2 - x1) * (0.55 + k * 0.17); fy = y1 + (y2 - y1) * (0.55 + k * 0.17) - 20
            o.append(f'<ellipse cx="{fx:.0f}" cy="{fy:.0f}" rx="15" ry="7" fill="{ORO}" transform="rotate(-20 {fx:.0f} {fy:.0f})"/>')
    # leyenda
    caja(o, 60, 140, 300, 170, '#fff', GRIS, 12)
    leyenda = [(VERDE, 'Ramas naturales', 'Israel'), (GRIS, 'Ramas desgajadas', 'israelitas incrédulos'), (ORO, 'Olivo silvestre injertado', 'gentiles que creen')]
    for k, (c, a, b) in enumerate(leyenda):
        y = 180 + k * 46
        o.append(f'<line x1="84" y1="{y}" x2="124" y2="{y}" stroke="{c}" stroke-width="10" stroke-linecap="round"/>')
        o.append(t(140, y - 2, a, 17, INK, anchor='start', weight='bold'))
        o.append(t(140, y + 18, b, 15, MUTED, anchor='start'))
    caja(o, 900, 140, 240, 110, '#f3e7c9', ORO, 12)
    o.append(t(1020, 176, '«no sustentas tú', 18, INK, font=SERIF, italic=True))
    o.append(t(1020, 202, 'a la raíz, sino', 18, INK, font=SERIF, italic=True))
    o.append(t(1020, 228, 'la raíz a ti» (v. 18)', 18, INK, font=SERIF, italic=True))
    o.append(t(950, 560, 'Dios puede volver a injertar', 16, VERDE, italic=True))
    o.append(t(950, 582, 'las ramas naturales (vv. 23-24)', 16, VERDE, italic=True))
    guardar('esquema-olivo', o)


DISP = [('Inocencia', 'Gn 1–3', 'no comer del árbol', 'la desobediencia', 'expulsión del Edén', '#d9eded', TEAL),
        ('Conciencia', 'Gn 4–8', 'hacer el bien', 'maldad continua', 'el diluvio', '#e3e0f0', MORADO),
        ('Gobierno humano', 'Gn 9–11', 'llenar la tierra, juzgar', 'Babel', 'confusión de lenguas', '#e0eee4', VERDE),
        ('Promesa', 'Gn 12 – Éx 19', 'creer la promesa', 'bajar a Egipto', 'esclavitud', '#f3e7c9', ORO),
        ('Ley', 'Éx 20 – Hch 1', 'guardar el pacto del Sinaí', 'idolatría; rechazo del Mesías', 'exilio; año 70', '#e6e6e4', GRAFITO),
        ('Gracia (iglesia)', 'Hch 2 – Ap 3', 'creer en Cristo', 'apostasía final', 'la tribulación', '#f6dcd8', ROJO),
        ('Reino', 'Ap 20', 'obedecer al Rey', 'la última rebelión', 'el gran trono blanco', '#dde8f3', AZUL)]


# 4. Las siete dispensaciones
def dispensaciones():
    o = lienzo('Las siete dispensaciones', 'En cada etapa: una responsabilidad, un fracaso, un juicio… y la gracia de Dios')
    w = 152; gap = 4
    for k, (n, ref, resp, falla, juicio, fondo, c) in enumerate(DISP):
        x = 60 + k * (w + gap)
        y = 470 - k * 44
        h = 600 - y
        caja(o, x, y, w, h, fondo, c, 10)
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="10" rx="5" fill="{c}"/>')
        o.append(t(x + w / 2, y + 40, str(k + 1), 26, c, font=SERIF, weight='bold'))
        palabras = n.split(' ')
        if len(palabras) > 1 and len(n) > 12:
            o.append(t(x + w / 2, y + 66, palabras[0], 17, INK, weight='bold'))
            o.append(t(x + w / 2, y + 86, ' '.join(palabras[1:]), 17, INK, weight='bold'))
        else:
            o.append(t(x + w / 2, y + 72, n, 17, INK, weight='bold'))
        o.append(t(x + w / 2, y + 108, ref, 13, MUTED, italic=True))
    # filas inferiores
    filas = [('Responsabilidad', 2), ('Fracaso', 3), ('Juicio', 4)]
    for j, (et, idx) in enumerate(filas):
        y = 618 + j * 30
        for k, d in enumerate(DISP):
            x = 60 + k * (w + gap)
            o.append(t(x + w / 2, y + 14, d[idx], 12, [INK, ROJO, GRAFITO][j]))
    o.append(t(44, 632, 'resp.', 12, MUTED, anchor='end', italic=True))
    o.append(t(44, 662, 'fracaso', 12, MUTED, anchor='end', italic=True))
    o.append(t(44, 692, 'juicio', 12, MUTED, anchor='end', italic=True))
    # flecha de la gracia
    flecha(o, 70, 130 + 30, 1130, 130 + 30, ACC, 5, 14)
    o.append(t(600, 150, 'La gracia de Dios atraviesa todas las etapas: la salvación siempre es por gracia, mediante la fe', 16, ACC, font=SERIF, italic=True))
    o.append(t(600, 735, 'Los nombres y el número varían según los maestros; las dispensaciones son una herramienta para leer la Biblia.', 17, MUTED, italic=True))
    guardar('esquema-dispensaciones', o)


# 5. Pactos y dispensaciones en una sola línea
def juntos():
    o = lienzo('Pactos y dispensaciones', 'Las etapas del plan de Dios y los pactos que las abren o las atraviesan')
    x0, x1 = 60, 1140
    anchos = [0.08, 0.1, 0.08, 0.15, 0.26, 0.2, 0.13]
    xs = [x0]
    for a in anchos:
        xs.append(xs[-1] + a * (x1 - x0))
    y = 200; h = 90
    for k, d in enumerate(DISP):
        caja(o, xs[k] + 2, y, xs[k + 1] - xs[k] - 4, h, d[5], d[6], 8)
        n = d[0].replace(' (iglesia)', '')
        partes = n.split(' ')
        if len(partes) > 1:
            o.append(t((xs[k] + xs[k + 1]) / 2, y + 40, partes[0], 15, INK, weight='bold'))
            o.append(t((xs[k] + xs[k + 1]) / 2, y + 60, partes[1], 15, INK, weight='bold'))
        else:
            o.append(t((xs[k] + xs[k + 1]) / 2, y + 50, n, 16, INK, weight='bold'))
    o.append(t(60, 180, 'Dispensaciones', 17, MUTED, anchor='start', weight='bold'))
    # hitos
    def hito(x, et, c, yy=y - 8):
        o.append(f'<line x1="{x:.0f}" y1="{yy}" x2="{x:.0f}" y2="{y + h + 8}" stroke="{c}" stroke-width="3"/>')
    hito(xs[5], 'Cruz', ACC)
    o.append(t(xs[5], 314 + 10, 'la cruz y Pentecostés', 14, ACC, weight='bold'))
    # pactos: barras desde su inicio hasta el final de la línea (o hasta el fin de la ley)
    o.append(t(60, 372, 'Pactos', 17, MUTED, anchor='start', weight='bold'))
    xj = xs[4] + 0.72 * (xs[5] - xs[4])
    pac = [('Noé', xs[2], x1, C_NOE, 'vigente mientras la tierra permanezca'),
           ('Abraham', xs[3], x1, C_ABR, 'vigente; se cumple en Cristo y en el reino'),
           ('Sinaí', xs[4], xs[5], C_SIN, 'termina con la cruz'),
           ('La tierra', xs[4] + 30, x1, C_TIE, 'espera su cumplimiento pleno'),
           ('David', xs[4] + 260, x1, C_DAV, 'Cristo reina; reinará visiblemente'),
           ('Nuevo pacto', xs[5], x1, C_NUE, 'la iglesia participa; Israel lo recibirá')]
    for k, (n, a, b, c, nota) in enumerate(pac):
        yy = 392 + k * 50
        o.append(f'<rect x="{a:.0f}" y="{yy}" width="{b - a:.0f}" height="22" rx="11" fill="{c}" opacity=".85"/>')
        o.append(f'<circle cx="{a:.0f}" cy="{yy + 11}" r="11" fill="{c}"/>')
        tx = (xj - 22) if n == 'Nuevo pacto' else a - 14
        o.append(t(f'{tx:.0f}', yy + 17, n, 16, c, anchor='end', weight='bold'))
        o.append(t(f'{b - 12:.0f}', yy + 17, nota, 13, '#fff', anchor='end'))
    # anuncio del nuevo pacto
    o.append(f'<line x1="{xj:.0f}" y1="{392 + 5 * 50 + 11}" x2="{xs[5]:.0f}" y2="{392 + 5 * 50 + 11}" stroke="{C_NUE}" stroke-width="3" stroke-dasharray="6 5"/>')
    o.append(f'<circle cx="{xj:.0f}" cy="{392 + 5 * 50 + 11}" r="8" fill="#fff" stroke="{C_NUE}" stroke-width="3"/>')
    o.append(t(f'{xj:.0f}', 392 + 5 * 50 + 44, 'anunciado (Jer 31)', 13, C_NUE, italic=True))
    o.append(t(600, 735, '«de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos» (Ef 1:10)', 18, INK, font=SERIF, italic=True))
    guardar('esquema-pactos-dispensaciones', o)


for f in (tratado, pactos, olivo, dispensaciones, juntos):
    f()
print('Esquemas generados en', OUT)
