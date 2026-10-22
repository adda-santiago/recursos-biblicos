# Uso: python3 herramientas/esquemas_trinidad.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Dios y la Trinidad» (origen: 'esquema').
# Mismo estilo que esquemas_palabra.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'dios-y-la-trinidad', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; GRAFITO = '#4a4a4a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760
# Un color por persona, el mismo en todos los esquemas del recurso
PADRE, HIJO, ESPIRITU = ORO, ROJO, AZUL


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False, rot=None):
    st = ' font-style="italic"' if italic else ''
    tr = f' transform="rotate({rot} {x} {y})"' if rot is not None else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}{tr}>{s}</text>'


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


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14, extra=''):
    # Flecha con punta dibujada (sin marker, para que tome el color en todos los navegadores)
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"{extra}/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Atributos incomunicables y comunicables
def atributos():
    o = lienzo('Los atributos de Dios', 'Lo que solo Dios es, y lo que Dios forma en sus hijos')
    cols = [(60, 'Solo Dios es…', 'incomunicables', MORADO, '#ece3f2',
             [('Eterno', 'Sal 90:2'), ('Independiente', 'Hch 17:25'), ('Inmutable', 'Mal 3:6'),
              ('Omnipresente', 'Sal 139:7'), ('Omnisciente', 'Sal 147:5'), ('Omnipotente', 'Jer 32:17')],
             'nos llevan a adorarle y a confiar'),
            (620, 'Dios forma en sus hijos…', 'comunicables', VERDE, '#e0eee4',
             [('Santidad', '1 P 1:16'), ('Justicia', 'Dt 32:4'), ('Amor', '1 Jn 4:8'), ('Misericordia', 'Lc 6:36'),
              ('Gracia', 'Ef 2:8'), ('Fidelidad', 'Lm 3:23'), ('Sabiduría', 'Stg 1:5'), ('Verdad', 'Jn 17:17')],
             'nos llaman a imitarle')]
    for x, tit, sub, c, fondo, items, efecto in cols:
        caja(o, x, 130, 520, 545, fondo)
        o.append(t(x + 260, 178, tit, 27, c, font=SERIF, weight='bold'))
        o.append(t(x + 260, 204, f'atributos {sub}', 16, MUTED, italic=True))
        filas = (len(items) + 1) // 2
        paso = 88
        y0 = 238 + (585 - 238 - (filas - 1) * paso - 66) / 2
        for k, (n, ref) in enumerate(items):
            cx = x + 40 + (k // filas) * 240
            cy = y0 + (k % filas) * paso
            caja(o, cx, cy, 210, 66, '#fff', c, 10)
            o.append(t(cx + 105, cy + 31, n, 21, INK, weight='bold'))
            o.append(t(cx + 105, cy + 53, ref, 14, MUTED, italic=True))
        o.append(f'<line x1="{x + 60}" y1="615" x2="{x + 460}" y2="615" stroke="{c}" stroke-width="2" opacity=".5"/>')
        o.append(t(x + 260, 648, efecto, 19, c, font=SERIF, italic=True))
    o.append(t(600, 722, 'Cada atributo es Dios entero: su amor es santo, su justicia es amorosa, su poder es sabio.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-atributos', o)


# 2. El escudo de la Trinidad (Scutum Fidei)
def escudo():
    o = lienzo('El escudo de la Trinidad', 'Un diagrama usado desde la Edad Media para enseñar la doctrina')
    P = {'padre': (330, 205), 'hijo': (870, 205), 'esp': (600, 640)}
    C = (600, 365)
    col = {'padre': PADRE, 'hijo': HIJO, 'esp': ESPIRITU}
    nom = {'padre': 'el Padre', 'hijo': 'el Hijo', 'esp': 'el Espíritu Santo'}
    R0 = 78
    def borde(a, b, r1, r2):
        (x1, y1), (x2, y2) = a, b
        d = math.hypot(x2 - x1, y2 - y1); ux, uy = (x2 - x1) / d, (y2 - y1) / d
        return x1 + ux * r1, y1 + uy * r1, x2 - ux * r2, y2 - uy * r2
    # lados: «no es»
    for a, b in (('padre', 'hijo'), ('hijo', 'esp'), ('esp', 'padre')):
        x1, y1, x2, y2 = borde(P[a], P[b], R0 + 4, R0 + 4)
        o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="{GRAFITO}" stroke-width="10" stroke-linecap="round"/>')
        mx, my = (P[a][0] + P[b][0]) / 2, (P[a][1] + P[b][1]) / 2
        ang = math.degrees(math.atan2(P[b][1] - P[a][1], P[b][0] - P[a][0]))
        if ang > 90 or ang < -90:
            ang += 180
        nx, ny = -(P[b][1] - P[a][1]), P[b][0] - P[a][0]; d = math.hypot(nx, ny); nx, ny = nx / d, ny / d
        sgn = 1 if (C[0] - mx) * nx + (C[1] - my) * ny < 0 else -1  # rótulo hacia afuera del triángulo
        lx, ly = mx + nx * 30 * sgn, my + ny * 30 * sgn + 8
        o.append(t(f'{lx:.0f}', f'{ly:.0f}', 'no es', 24, GRAFITO, font=SERIF, italic=True, rot=f'{ang:.1f}'))
    # radios: «es»
    for k in P:
        x1, y1, x2, y2 = borde(P[k], C, R0 + 4, 72)
        flecha(o, x1, y1, x2, y2, col[k], 8, 15)
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        dx, dy = x2 - x1, y2 - y1
        ang = math.degrees(math.atan2(dy, dx))
        if ang > 90 or ang < -90:
            ang += 180
        nx, ny = -dy, dx; d = math.hypot(nx, ny)
        lx, ly = mx + nx / d * 22, my + ny / d * 22 + 8
        o.append(t(f'{lx:.0f}', f'{ly:.0f}', 'es', 24, col[k], font=SERIF, italic=True, weight='bold', rot=f'{ang:.1f}'))
    for k, (x, y) in P.items():
        o.append(f'<circle cx="{x}" cy="{y}" r="{R0}" fill="#fff" stroke="{col[k]}" stroke-width="6"/>')
        partes = nom[k].split(' ', 1) if k != 'esp' else ['el Espíritu', 'Santo']
        o.append(t(x, y - 4, partes[0], 22, col[k], font=SERIF, weight='bold'))
        o.append(t(x, y + 24, partes[1], 22, col[k], font=SERIF, weight='bold'))
    o.append(f'<circle cx="{C[0]}" cy="{C[1]}" r="66" fill="{INK}"/>')
    o.append(t(C[0], C[1] + 11, 'Dios', 32, '#fff', font=SERIF))
    o.append(t(600, 740, 'Cada persona es Dios; ninguna es la otra; y no son tres dioses, sino un solo Dios.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-escudo', o)


# 3. Efesios 1:3-14: una sola salvación, obra de las tres personas
def economia():
    o = lienzo('Una salvación, tres personas', 'Efesios 1:3-14, un solo párrafo de alabanza en el texto griego')
    cols = [('El Padre', 'vv. 3-6', PADRE, '#f3e7c9', ['nos bendijo', 'nos escogió en Cristo', 'antes de la fundación', 'del mundo', 'nos predestinó para ser', 'adoptados hijos'], 'v. 6'),
            ('El Hijo', 'vv. 7-12', HIJO, '#f6dcd8', ['en quien tenemos', 'redención por su sangre', 'el perdón de pecados', 'en Él reunirá', 'todas las cosas', 'en Él tuvimos herencia'], 'v. 12'),
            ('El Espíritu Santo', 'vv. 13-14', ESPIRITU, '#dde8f3', ['oímos la palabra', 'de verdad y creímos', 'fuimos sellados con', 'el Espíritu de la promesa', 'que es las arras', 'de nuestra herencia'], 'v. 14')]
    for i, (n, vv, c, fondo, lineas, ref) in enumerate(cols):
        x = 60 + i * 370
        caja(o, x, 135, 340, 420, fondo)
        o.append(t(x + 170, 185, n, 27, c, font=SERIF, weight='bold'))
        o.append(t(x + 170, 212, vv, 16, MUTED, italic=True))
        o.append(t(x + 170, 255, ['planea y elige', 'redime y une', 'sella y garantiza'][i], 20, INK, weight='bold'))
        for k, s in enumerate(lineas):
            o.append(t(x + 170, 300 + k * 32, s, 18, INK))
        flecha(o, x + 170, 560, x + 170, 610, c, 4, 11)
    caja(o, 60, 615, 1080, 72, INK)
    o.append(t(600, 659, '«para alabanza de la gloria de su gracia» · «para alabanza de su gloria» (vv. 6, 12, 14)', 21, '#fff', font=SERIF))
    o.append(t(600, 732, 'El Padre planea, el Hijo cumple y el Espíritu aplica: una sola obra del único Dios.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-economia', o)


# 4. Las comparaciones y sus límites
def comparaciones():
    o = lienzo('Comparaciones y sus límites', 'Lo que cada una ilustra y el error al que lleva si se toma en serio')
    filas = [('Agua: líquido, hielo, vapor', 'una sustancia en tres formas', 'Modalismo: no está en las tres a la vez', AZUL, 'agua'),
             ('Un hombre: padre, hijo, esposo', 'una persona con tres relaciones', 'Modalismo: tres papeles de uno solo', AZUL, 'hombre'),
             ('Huevo o trébol de tres hojas', 'tres elementos forman uno', 'Partes: cada persona sería un tercio', ORO, 'trebol'),
             ('El sol, su luz y su calor', 'el Hijo y el Espíritu vienen del Padre', 'Cosas: la luz y el calor no son personas', MORADO, 'sol'),
             ('Tres personas humanas', 'tres que se aman y se hablan', 'Triteísmo: serían tres dioses', ROJO, 'tres')]
    o.append(t(330, 140, 'Comparación', 16, MUTED, anchor='start', weight='bold'))
    o.append(t(640, 140, 'Ilustra', 16, MUTED, anchor='start', weight='bold'))
    o.append(t(900, 140, 'Falla', 16, MUTED, anchor='start', weight='bold'))
    for k, (n, ilu, falla, c, ic) in enumerate(filas):
        y = 160 + k * 104
        caja(o, 60, y, 1080, 90, '#fff', GRIS, 12)
        cx, cy = 130, y + 45
        if ic == 'agua':
            o.append(f'<path d="M{cx - 30},{cy + 18} q0,-22 12,-40 q12,18 12,40 a12,12 0 0 1 -24,0z" fill="{AZUL}" opacity=".85"/>')
            o.append(f'<rect x="{cx - 2}" y="{cy - 4}" width="20" height="20" rx="3" fill="#bcd6ee" stroke="{AZUL}" stroke-width="2"/>')
            o.append(f'<path d="M{cx + 22},{cy + 8} q8,-12 0,-24 q8,-12 0,-24" fill="none" stroke="{GRIS}" stroke-width="4"/>')
        elif ic == 'hombre':
            o.append(f'<circle cx="{cx}" cy="{cy - 18}" r="12" fill="{AZUL}"/><path d="M{cx - 18},{cy + 28} q0,-30 18,-30 q18,0 18,30z" fill="{AZUL}"/>')
        elif ic == 'trebol':
            for a in (90, 210, 330):
                r = math.radians(a)
                o.append(f'<circle cx="{cx + 14 * math.cos(r):.0f}" cy="{cy - 14 * math.sin(r):.0f}" r="13" fill="{VERDE}"/>')
            o.append(f'<line x1="{cx}" y1="{cy + 4}" x2="{cx + 6}" y2="{cy + 32}" stroke="{VERDE}" stroke-width="4"/>')
        elif ic == 'sol':
            o.append(f'<circle cx="{cx}" cy="{cy}" r="16" fill="{ORO}"/>')
            for a in range(0, 360, 45):
                r = math.radians(a)
                o.append(f'<line x1="{cx + 22 * math.cos(r):.0f}" y1="{cy + 22 * math.sin(r):.0f}" x2="{cx + 32 * math.cos(r):.0f}" y2="{cy + 32 * math.sin(r):.0f}" stroke="{ORO}" stroke-width="4"/>')
        else:
            for dx in (-26, 0, 26):
                o.append(f'<circle cx="{cx + dx}" cy="{cy - 14}" r="9" fill="{ROJO}"/><path d="M{cx + dx - 13},{cy + 24} q0,-26 13,-26 q13,0 13,26z" fill="{ROJO}"/>')
        o.append(t(190, y + 52, n, 19, INK, anchor='start', font=SERIF, weight='bold'))
        partes = ilu.split(' '); m = (len(partes) + 1) // 2
        o.append(t(640, y + 40, ' '.join(partes[:m]), 16, INK, anchor='start'))
        o.append(t(640, y + 62, ' '.join(partes[m:]), 16, INK, anchor='start'))
        a, _, b = falla.partition(': ')
        o.append(t(900, y + 40, a, 17, c, anchor='start', weight='bold'))
        o.append(t(900, y + 62, b, 15, MUTED, anchor='start'))
    o.append(t(600, 740, 'Ninguna criatura es imagen exacta del Creador: «¿A qué, pues, me haréis semejante?» (Is 40:25).', 19, INK, font=SERIF, italic=True))
    guardar('esquema-comparaciones', o)


# 5. Los tres errores
def errores():
    o = lienzo('Tres maneras de apartarse', 'Cada error niega una de las verdades que la Trinidad sostiene a la vez')
    caja(o, 400, 150, 400, 210, INK)
    o.append(t(600, 195, 'La Trinidad', 28, '#fff', font=SERIF))
    for k, (s, c) in enumerate([('1. Dios es uno', '#f3e7c9'), ('2. Padre, Hijo y Espíritu son Dios', '#f6dcd8'), ('3. Los tres son personas distintas', '#dde8f3')]):
        o.append(t(600, 245 + k * 36, s, 19, c))
    errs = [(70, 460, 'Modalismo', 'Niega 3: una sola persona', 'con tres modos', 'Antes: Sabelio (s. III)', 'Hoy: pentecostales unicitarios', AZUL, '#dde8f3', (500, 362)),
            (430, 460, 'Arrianismo', 'Niega 2: el Hijo es criatura;', 'el Espíritu, una fuerza', 'Antes: Arrio (s. IV)', 'Hoy: Testigos de Jehová', ROJO, '#f6dcd8', (600, 362)),
            (790, 460, 'Triteísmo', 'Niega 1: tres seres,', 'tres dioses', 'Antes: algunos maestros (s. VI)', 'Hoy: mormones', ORO, '#f3e7c9', (700, 362))]
    for x, y, n, a, b, antes, hoy, c, fondo, (ax, ay) in errs:
        caja(o, x, y, 340, 220, fondo, c)
        flecha(o, ax, ay, x + 170, y - 4, c, 4, 11, ' stroke-dasharray="10 7"')
        o.append(t(x + 170, y + 44, n, 26, c, font=SERIF, weight='bold'))
        o.append(t(x + 170, y + 84, a, 17, INK))
        o.append(t(x + 170, y + 108, b, 17, INK))
        o.append(f'<line x1="{x + 40}" y1="{y + 132}" x2="{x + 300}" y2="{y + 132}" stroke="{c}" stroke-width="1.5" opacity=".6"/>')
        o.append(t(x + 170, y + 164, antes, 15, MUTED, italic=True))
        o.append(t(x + 170, y + 192, hoy, 16, INK, weight='bold'))
    o.append(t(600, 735, 'La fe bíblica no elige entre estas verdades: las confiesa todas juntas.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-errores', o)


for f in (atributos, escudo, economia, comparaciones, errores):
    f()
print('Esquemas generados en', OUT)
