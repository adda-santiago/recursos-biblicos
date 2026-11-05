# Uso: python3 herramientas/esquemas_lucas.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del estudio de Lucas (origen: 'esquema').
# Mismo estilo que esquemas_sinoptico.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Color de Lucas: el de la Introducción al Nuevo Testamento; Hechos en ocre.
import os, math
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(R, 'public', 'apps', 'lucas', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
MT = '#2a6fb0'; LC = '#2f7d4a'; HCH = '#c08a1e'; LCL = '#dcebdf'; HCL = '#f3e6c6'; MTL = '#d9e6f3'
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
    a = math.atan2(y2 - y1, x2 - x1); L = 14
    p1 = (x2 - L * math.cos(a - 0.4), y2 - L * math.sin(a - 0.4)); p2 = (x2 - L * math.cos(a + 0.4), y2 - L * math.sin(a + 0.4))
    o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2 - 8 * math.cos(a):.1f}" y2="{y2 - 8 * math.sin(a):.1f}" stroke="{color}" stroke-width="{ancho}"/>')
    o.append(f'<polygon points="{x2},{y2} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}" fill="{color}"/>')


# 1. La estructura de Lucas: 24 capítulos en cinco partes
def estructura():
    o = lienzo('La estructura de Lucas', 'De Galilea a Jerusalén: 24 capítulos, 1.151 versículos', h=640)
    x0, x1, y = 70, 1130, 210
    ancho = (x1 - x0) / 24
    partes = [
        (1, 1, 'Prólogo', '1:1-4', '#9aa0a8'),
        (1, 2, 'Nacimiento e infancia', '1:5–2:52', '#8a6bb0'),
        (3, 4, 'Preparación', '3:1–4:13', '#b07a3a'),
        (4, 9, 'Galilea', '4:14–9:50', LC),
        (9, 19, 'El viaje a Jerusalén', '9:51–19:27', HCH),
        (19, 24, 'Jerusalén', '19:28–24:53', ACC),
    ]
    # barra de capítulos
    for c in range(1, 25):
        xa = x0 + (c - 1) * ancho
        caja(o, xa + 2, y, ancho - 4, 46, '#ffffff', GRIS, rx=4)
        o.append(t(xa + ancho / 2, y + 30, str(c), 17, MUTED))
    # tramos (posición aproximada por capítulo y fracción)
    tramos = [(0.0, 0.05, 0), (0.05, 2.0, 1), (2.0, 3.3, 2), (3.3, 8.8, 3), (8.8, 18.6, 4), (18.6, 24.0, 5)]
    for a, b, i in tramos:
        _, _, nombre, ref, col = partes[i]
        xa = x0 + a * ancho; xb = x0 + b * ancho
        caja(o, xa + 1, y + 60, max(xb - xa - 2, 6), 26, col, rx=4)
    filas = [(1, 330), (2, 420), (3, 330), (4, 420), (5, 330)]
    pos = {1: 0.9, 2: 2.6, 3: 6.0, 4: 13.7, 5: 21.3}
    for i, yy in filas:
        _, _, nombre, ref, col = partes[i]
        xc = x0 + pos[i] * ancho
        o.append(f'<line x1="{xc}" y1="{y + 88}" x2="{xc}" y2="{yy - 26}" stroke="{col}" stroke-width="2"/>')
        if i == 1:   # dos líneas, para no cruzar la línea de Preparación
            o.append(t(x0 - 4, yy, 'Nacimiento', 21, col, weight='bold', font=SERIF, anchor='start'))
            o.append(t(x0 - 4, yy + 24, 'e infancia', 21, col, weight='bold', font=SERIF, anchor='start'))
            o.append(t(x0 - 4, yy + 50, ref, 17, MUTED, anchor='start'))
            continue
        o.append(t(xc, yy, nombre, 21, col, weight='bold', font=SERIF))
        o.append(t(xc, yy + 26, ref, 17, MUTED))
    # marcas del viaje
    o.append(t(x0 + 8.8 * ancho, y - 18, '9:51 «afirmó su rostro»', 16, HCH, anchor='start', italic=True))
    o.append(t(x0 + 18.6 * ancho, y - 44, '19:28 «iba delante subiendo»', 16, ACC, anchor='middle', italic=True))
    # pie
    o.append(t(600, 540, 'Comienza en el templo con un sacerdote (1:9) y termina en el templo con los discípulos alabando (24:53).', 18, INK))
    o.append(t(600, 572, 'La parte más larga y más propia de Lucas es el viaje: casi diez capítulos «en el camino».', 18, MUTED))
    guardar('lc-estructura', o)


# 2. Lucas y Hechos: dos tomos
def dos_tomos():
    o = lienzo('Lucas y Hechos: una obra en dos tomos', 'Los dos se encuentran en Jerusalén', h=720)
    # Lucas: flecha hacia Jerusalén
    caja(o, 60, 140, 470, 470, LCL, LC, rx=14)
    o.append(t(295, 182, 'Tomo 1: Lucas', 26, LC, weight='bold', font=SERIF))
    o.append(t(295, 210, '«lo que Jesús comenzó a hacer y a enseñar»', 16, MUTED, italic=True))
    paso = [('El templo: Zacarías (1)', 260), ('Belén y Nazaret (2)', 312), ('Galilea (4–9)', 364), ('El viaje (9–19)', 416), ('Jerusalén: cruz y resurrección', 468), ('La ascensión (24:50-53)', 520)]
    for s, yy in paso:
        o.append(t(295, yy, s, 19, INK))
    for i in range(len(paso) - 1):
        flecha(o, 295, paso[i][1] + 8, 295, paso[i + 1][1] - 22, LC, 2)
    o.append(t(295, 580, 'Movimiento: hacia Jerusalén', 18, LC, weight='bold'))
    # Hechos
    caja(o, 670, 140, 470, 470, HCL, HCH, rx=14)
    o.append(t(905, 182, 'Tomo 2: Hechos', 26, HCH, weight='bold', font=SERIF))
    o.append(t(905, 210, 'lo que Jesús continúa por su Espíritu', 16, MUTED, italic=True))
    paso2 = [('La ascensión (1:9-11)', 260), ('Pentecostés en Jerusalén (2)', 312), ('Judea y Samaria (8–12)', 364), ('Asia Menor y Europa (13–21)', 416), ('Preso hasta Roma (21–28)', 468), ('Roma: «sin impedimento» (28:31)', 520)]
    for s, yy in paso2:
        o.append(t(905, yy, s, 19, INK))
    for i in range(len(paso2) - 1):
        flecha(o, 905, paso2[i][1] + 8, 905, paso2[i + 1][1] - 22, HCH, 2)
    o.append(t(905, 580, 'Movimiento: desde Jerusalén', 18, HCH, weight='bold'))
    # centro
    caja(o, 470, 300, 260, 130, '#ffffff', ACC, rx=12)
    o.append(t(600, 338, 'Jerusalén', 24, ACC, weight='bold', font=SERIF))
    o.append(t(600, 368, 'La promesa del Padre', 17, INK))
    o.append(t(600, 392, 'Lc 24:49 · Hch 1:4-8', 16, MUTED))
    o.append(t(600, 416, 'poder desde lo alto', 16, MUTED, italic=True))
    o.append(t(600, 670, 'Ambos tomos están dedicados a Teófilo (Lc 1:3; Hch 1:1) y juntos son más de una cuarta parte del Nuevo Testamento.', 17, INK))
    guardar('lc-dos-tomos', o)


# 3. Las genealogías de Mateo y Lucas
def genealogias():
    o = lienzo('Las genealogías de Jesús en Mateo y Lucas', 'Iguales de Abraham a David; distintas de David a Jesús', h=900)
    # tronco común
    caja(o, 360, 120, 480, 64, '#ffffff', GRIS)
    o.append(t(600, 150, 'Adán … Abraham', 22, INK, font=SERIF))
    o.append(t(600, 172, 'Lucas sube hasta «Adán, hijo de Dios» (3:38); Mateo empieza en Abraham', 13, MUTED))
    flecha(o, 600, 186, 600, 222, INK, 2)
    caja(o, 420, 226, 360, 60, '#ffffff', INK)
    o.append(t(600, 254, 'Isaac, Jacob, Judá … Booz, Obed, Isaí', 18, INK))
    o.append(t(600, 276, 'la misma línea en los dos', 14, MUTED, italic=True))
    flecha(o, 600, 288, 600, 322, INK, 2)
    caja(o, 470, 326, 260, 56, '#ffffff', ACC)
    o.append(t(600, 362, 'David', 26, ACC, weight='bold', font=SERIF))
    # ramas
    flecha(o, 560, 384, 300, 430, MT, 3)
    flecha(o, 640, 384, 900, 430, LC, 3)
    caja(o, 70, 436, 460, 360, MTL, MT, rx=14)
    caja(o, 670, 436, 460, 360, LCL, LC, rx=14)
    o.append(t(300, 470, 'Mateo 1:6-16', 22, MT, weight='bold', font=SERIF))
    o.append(t(900, 470, 'Lucas 3:23-31', 22, LC, weight='bold', font=SERIF))
    mt = ['Salomón', 'Roboam … los reyes de Judá', 'Josías', 'Jeconías', 'Salatiel', 'Zorobabel', 'Abiud … Matán', 'Jacob', 'José, marido de María']
    lc = ['Natán', 'Matata … (sin reyes)', 'Neri', 'Salatiel', 'Zorobabel', 'Resa … Matat', 'Elí', 'José, «según se creía»', '(María, según la lectura más difundida)']
    for i, s in enumerate(mt):
        o.append(t(300, 510 + i * 30, s, 18, INK if i not in (4, 5) else ACC, weight='bold' if i in (0, 8) else 'normal'))
    for i, s in enumerate(lc):
        o.append(t(900, 510 + i * 30, s, 18 if i < 8 else 15, INK if i not in (3, 4) else ACC, weight='bold' if i in (0, 7) else 'normal', italic=(i == 8)))
    o.append(t(300, 784, 'Línea legal del trono: heredero de David', 15, MT, italic=True))
    o.append(t(900, 784, 'Línea por Natán, hijo de David', 15, LC, italic=True))
    # Jesús
    caja(o, 470, 816, 260, 56, '#ffffff', INK)
    o.append(t(600, 852, 'Jesús, hijo de David', 22, INK, weight='bold', font=SERIF))
    o.append(t(600, 104 + 790, 'Salatiel y Zorobabel (en rojo) aparecen en las dos listas.', 14, MUTED))
    guardar('lc-genealogias', o)


# 4. El viaje a Jerusalén
def viaje():
    o = lienzo('El viaje a Jerusalén', 'Lucas recuerda seis veces adónde va Jesús', h=600)
    x0, x1, y = 110, 1085, 300
    o.append(f'<line x1="{x0}" y1="{y}" x2="{x1 - 20}" y2="{y}" stroke="{HCH}" stroke-width="6"/>')
    flecha(o, x1 - 40, y, x1, y, HCH, 6)
    o.append(t(x0 - 12, y + 7, 'Galilea', 20, LC, weight='bold', font=SERIF, anchor='end'))
    o.append(t(x1 + 8, y + 7, 'Jerusalén', 20, ACC, weight='bold', font=SERIF, anchor='start'))
    marcas = [
        ('9:51', '«afirmó su rostro para', 'ir a Jerusalén»'),
        ('13:22', '«encaminándose', 'a Jerusalén»'),
        ('17:11', '«yendo Jesús a Jerusalén,', 'pasaba entre Samaria y Galilea»'),
        ('18:31', '«He aquí subimos', 'a Jerusalén»'),
        ('19:11', '«estaba cerca', 'de Jerusalén»'),
        ('19:28', '«iba delante', 'subiendo a Jerusalén»'),
    ]
    paso = (x1 - x0 - 120) / (len(marcas) - 1)
    for i, (ref, a, b) in enumerate(marcas):
        x = x0 + 60 + i * paso
        o.append(f'<circle cx="{x}" cy="{y}" r="13" fill="#ffffff" stroke="{HCH}" stroke-width="4"/>')
        arriba = i % 2 == 0
        yy = y - 80 if arriba else y + 70
        o.append(t(x, yy, ref, 22, INK, weight='bold', font=SERIF))
        o.append(t(x, yy + 26, a, 15, MUTED, italic=True))
        o.append(t(x, yy + 46, b, 15, MUTED, italic=True))
    o.append(t(600, 500, 'En el camino: el buen samaritano, Marta y María, el Padre nuestro, el hijo pródigo, el rico y Lázaro, Zaqueo…', 17, INK))
    o.append(t(600, 530, 'Lo que importa no es el itinerario exacto, sino la dirección: Jesús va decidido hacia la cruz.', 17, MUTED))
    guardar('lc-viaje', o)


# 5. Lucas 21: dos horizontes
def discurso():
    o = lienzo('Lucas 21: dos horizontes', 'La destrucción de Jerusalén y la venida del Hijo del Hombre', h=620)
    y = 300
    xs = {'33': 110, '70': 330, 'fin': 930, 'venida': 1090}
    o.append(f'<line x1="{xs["33"]}" y1="{y}" x2="{xs["venida"] - 20}" y2="{y}" stroke="{GRIS}" stroke-width="6"/>')
    flecha(o, xs['venida'] - 40, y, xs['venida'], y, GRIS, 6)
    # tiempos de los gentiles
    o.append(f'<rect x="{xs["70"]}" y="{y - 14}" width="{xs["fin"] - xs["70"]}" height="28" fill="{HCH}" fill-opacity="0.35"/>')
    o.append(t((xs['70'] + xs['fin']) / 2, y + 8, '«los tiempos de los gentiles» (21:24)', 18, INK, weight='bold'))
    for k, ref1, ref2, col, arriba in [
        ('33', 'Año 33', 'Jesús habla en el templo', INK, True),
        ('70', 'Año 70', 'Jerusalén rodeada de ejércitos (21:20-24)', ACC, False),
        ('fin', 'Señales en el cielo', 'angustia de las naciones (21:25-26)', HCH, True),
        ('venida', 'La venida', 'en una nube con poder y gran gloria (21:27)', LC, False),
    ]:
        x = xs[k]
        o.append(f'<circle cx="{x}" cy="{y}" r="14" fill="#ffffff" stroke="{col}" stroke-width="5"/>')
        yy = y - 90 if arriba else y + 80
        anc = 'end' if k == 'venida' else ('start' if k == '33' else 'middle')
        xt = x + (20 if k == '33' else -10 if k == 'venida' else 0)
        o.append(t(xt, yy, ref1, 21, col, weight='bold', font=SERIF, anchor=anc))
        o.append(t(xt, yy + 26, ref2, 15, MUTED, anchor=anc))
    o.append(t(600, 500, 'Jerusalén sería «hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24).', 17, INK))
    o.append(t(600, 530, 'Antes de la venida en gloria: la gran tribulación; antes de ella, el arrebatamiento de la iglesia (1 Ts 4:16-17).', 16, MUTED))
    guardar('lc-discurso', o)


for f in (estructura, dos_tomos, genealogias, viaje, discurso):
    f()
print('Esquemas en', OUT)
