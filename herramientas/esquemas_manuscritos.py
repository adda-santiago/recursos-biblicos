# Uso: python3 herramientas/esquemas_manuscritos.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «De la Biblia a nosotros» (origen: 'esquema').
# Mismo estilo que esquemas_palabra.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'de-la-biblia-a-nosotros', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; GRAFITO = '#4a4a4a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


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


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Materiales de escritura
def materiales():
    o = lienzo('Sobre qué se escribió la Biblia', 'Materiales de escritura del mundo bíblico')
    items = [('Piedra', 'Tablas de la ley', 'Éx 32:16', GRAFITO), ('Arcilla', 'Tablillas con punzón', 'Mesopotamia', ROJO),
             ('Ostraca', 'Trozos de cerámica', 'Cartas y recibos', ORO), ('Papiro', 'Rollo de caña del Nilo', 'Liviano y frágil', VERDE),
             ('Pergamino', 'Rollo de piel', '2 Ti 4:13', MORADO), ('Códice', 'Hojas cosidas: el libro', 'Iglesia, siglos I–IV', AZUL)]
    for i, (n, d, ref, c) in enumerate(items):
        cx = 110 + i * 196
        caja(o, cx - 85, 160, 170, 330, '#fff', c)
        # dibujo simple de cada material
        if n == 'Piedra':
            o.append(f'<path d="M{cx-45},300 L{cx-45},215 Q{cx-45},190 {cx-22},190 Q{cx},190 {cx},215 L{cx},300 Z" fill="#b8b4aa" stroke="{c}" stroke-width="2"/>')
            o.append(f'<path d="M{cx+5},300 L{cx+5},215 Q{cx+5},190 {cx+27},190 Q{cx+50},190 {cx+50},215 L{cx+50},300 Z" fill="#b8b4aa" stroke="{c}" stroke-width="2"/>')
        elif n == 'Arcilla':
            o.append(f'<rect x="{cx-40}" y="195" width="80" height="100" rx="18" fill="#d9a67a" stroke="{c}" stroke-width="2"/>')
            for k in range(5):
                o.append(f'<line x1="{cx-28}" y1="{215+k*16}" x2="{cx+28}" y2="{215+k*16}" stroke="{c}" stroke-width="2" stroke-dasharray="4 4"/>')
        elif n == 'Ostraca':
            o.append(f'<path d="M{cx-45},210 L{cx+30},195 L{cx+48},260 L{cx+10},298 L{cx-40},280 Z" fill="#c98b5a" stroke="{c}" stroke-width="2"/>')
            for k in range(3):
                o.append(f'<line x1="{cx-28}" y1="{228+k*18}" x2="{cx+25}" y2="{222+k*18}" stroke="{INK}" stroke-width="2"/>')
        elif n in ('Papiro', 'Pergamino'):
            col = '#e9dcae' if n == 'Papiro' else '#efe4cf'
            o.append(f'<rect x="{cx-40}" y="205" width="80" height="85" fill="{col}" stroke="{c}" stroke-width="2"/>')
            o.append(f'<rect x="{cx-52}" y="195" width="16" height="105" rx="8" fill="{col}" stroke="{c}" stroke-width="2"/>')
            o.append(f'<rect x="{cx+36}" y="195" width="16" height="105" rx="8" fill="{col}" stroke="{c}" stroke-width="2"/>')
            for k in range(4):
                o.append(f'<line x1="{cx-28}" y1="{222+k*17}" x2="{cx+26}" y2="{222+k*17}" stroke="{INK}" stroke-width="2" opacity=".6"/>')
        else:
            o.append(f'<path d="M{cx},205 L{cx-50},195 L{cx-50},290 L{cx},300 Z" fill="#efe4cf" stroke="{c}" stroke-width="2"/>')
            o.append(f'<path d="M{cx},205 L{cx+50},195 L{cx+50},290 L{cx},300 Z" fill="#efe4cf" stroke="{c}" stroke-width="2"/>')
            for k in range(4):
                o.append(f'<line x1="{cx-40}" y1="{218+k*17}" x2="{cx-8}" y2="{222+k*17}" stroke="{INK}" stroke-width="2" opacity=".6"/>')
                o.append(f'<line x1="{cx+8}" y1="{222+k*17}" x2="{cx+40}" y2="{218+k*17}" stroke="{INK}" stroke-width="2" opacity=".6"/>')
        o.append(t(cx, 350, n, 22, c, font=SERIF, weight='bold'))
        palabras = d.split(' '); mitad = (len(palabras) + 1) // 2
        o.append(t(cx, 385, ' '.join(palabras[:mitad]), 16, INK))
        o.append(t(cx, 407, ' '.join(palabras[mitad:]), 16, INK))
        o.append(t(cx, 450, ref, 15, MUTED, italic=True))
    o.append(f'<line x1="40" y1="545" x2="1160" y2="545" stroke="{GRIS}" stroke-width="3" marker-end="url(#fl)"/>')
    o.append(t(60, 580, 'más antiguo', 16, MUTED, anchor='start', italic=True))
    o.append(t(1140, 580, 'más práctico', 16, MUTED, anchor='end', italic=True))
    o.append(t(600, 690, 'La iglesia adoptó el códice muy pronto: varios libros en un volumen, fácil de llevar y de consultar.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-materiales', o)


# 2. Las tres lenguas
def lenguas():
    o = lienzo('Las lenguas de la Biblia', 'Dios hizo escribir su Palabra en tres lenguas')
    cols = [('Hebreo', ORO, '#f3e7c9', 'בְּרֵאשִׁית', 'bereshit, «en el principio» (Gn 1:1)',
             ['Casi todo el Antiguo Testamento', 'Se escribe de derecha a izquierda', 'Antiguamente, solo consonantes', 'Lengua de Israel']),
            ('Arameo', TEAL, '#d6ece9', 'טַלְיְתָא קוּמִי', 'talitá cumi, «niña, levántate» (Mr 5:41)',
             ['Daniel 2:4–7:28 y partes de Esdras', 'Jeremías 10:11 y palabras sueltas', 'Lengua del imperio persa', 'Lengua cotidiana de Jesús']),
            ('Griego', AZUL, '#dde8f3', 'Ἐν ἀρχῇ ἦν ὁ λόγος', 'en arjé en ho lógos, «en el principio era el Verbo» (Jn 1:1)',
             ['Todo el Nuevo Testamento', 'Griego koiné, el griego común', 'Lengua de todo el Mediterráneo', 'También la Septuaginta'])]
    for i, (n, c, fondo, muestra, lect, filas) in enumerate(cols):
        x = 50 + i * 375
        caja(o, x, 140, 350, 520, fondo)
        o.append(t(x + 175, 190, n, 30, c, font=SERIF, weight='bold'))
        o.append(t(x + 175, 270, muestra, 32, INK, font=SERIF))
        palabras = lect.split(' '); mitad = (len(palabras) + 1) // 2
        o.append(t(x + 175, 312, ' '.join(palabras[:mitad]), 15, MUTED, italic=True))
        o.append(t(x + 175, 333, ' '.join(palabras[mitad:]), 15, MUTED, italic=True))
        o.append(f'<line x1="{x + 30}" y1="365" x2="{x + 320}" y2="365" stroke="{c}" stroke-width="2" opacity=".5"/>')
        for k, f in enumerate(filas):
            o.append(f'<circle cx="{x + 40}" cy="{408 + k * 56}" r="6" fill="{c}"/>')
            o.append(t(x + 58, 414 + k * 56, f, 17, INK, anchor='start'))
    o.append(t(600, 715, 'El título de la cruz estaba «en hebreo, en griego y en latín» (Jn 19:20).', 19, INK, font=SERIF, italic=True))
    guardar('esquema-lenguas', o)


# 3. El camino del texto
def camino():
    o = lienzo('De los escritos originales a tu Biblia', 'El camino de la Palabra escrita')
    pasos = [('Escritos', 'originales', 'Moisés … Juan', ORO), ('Copias', 'a mano', 'durante siglos', ROJO),
             ('Manuscritos', 'conservados', 'papiros, rollos, códices', MORADO), ('Comparación', 'de los testigos', 'crítica textual', TEAL),
             ('Texto', 'hebreo y griego', 'ediciones impresas', AZUL), ('Traducción', 'al español', 'Reina-Valera y otras', VERDE)]
    for i, (a, b, d, c) in enumerate(pasos):
        x = 45 + i * 190
        caja(o, x, 200, 160, 200, '#fff', c)
        o.append(f'<rect x="{x}" y="200" width="160" height="12" rx="6" fill="{c}"/>')
        o.append(t(x + 80, 268, a, 20 if len(a) > 10 else 22, c, font=SERIF, weight='bold'))
        o.append(t(x + 80, 296, b, 17, INK))
        o.append(t(x + 80, 350, d, 14, MUTED, italic=True))
        if i < 5:
            o.append(f'<line x1="{x + 163}" y1="300" x2="{x + 187}" y2="300" stroke="{GRIS}" stroke-width="4" marker-end="url(#fl)"/>')
    o.append(f'<path d="M1095,405 C1095,480 600,470 600,520" fill="none" stroke="{VERDE}" stroke-width="4" marker-end="url(#fl)"/>')
    caja(o, 440, 525, 320, 90, INK)
    o.append(t(600, 570, 'Tu Biblia', 30, '#fff', font=SERIF))
    o.append(t(600, 598, 'Palabra de Dios en tu lengua', 16, '#e8e4da'))
    o.append(t(360, 445, 'Dios inspiró los originales', 16, ORO, italic=True))
    o.append(t(600, 700, 'Los originales no se conservan; las copias fieles y las buenas traducciones transmiten lo que Dios dijo.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-camino', o)


# 4. Mil años más cerca
def mil_anos():
    o = lienzo('Mil años más cerca de Isaías', 'Lo que cambiaron los rollos del mar Muerto')
    x0, x1, a0, a1 = 90, 1110, -800, 1100
    X = lambda a: x0 + (a - a0) / (a1 - a0) * (x1 - x0)
    o.append(f'<line x1="{x0}" y1="360" x2="{x1}" y2="360" stroke="{INK}" stroke-width="3"/>')
    for a in range(-800, 1101, 200):
        o.append(f'<line x1="{X(a)}" y1="352" x2="{X(a)}" y2="368" stroke="{INK}" stroke-width="2"/>')
        o.append(t(X(a), 395, f'{-a} a.C.' if a < 0 else ('0' if a == 0 else f'{a} d.C.'), 15, MUTED))
    marcas = [(-700, 'Isaías profetiza', 'hacia 700 a.C.', ORO, 290), (-125, 'Gran rollo de Isaías', 'Qumrán, hacia 125 a.C.', VERDE, 210), (930, 'Códice de Alepo', 'la copia completa más antigua antes de 1947', AZUL, 250)]
    for a, n, d, c, y in marcas:
        o.append(f'<circle cx="{X(a)}" cy="360" r="12" fill="{c}"/>')
        o.append(f'<line x1="{X(a)}" y1="348" x2="{X(a)}" y2="{y + 20}" stroke="{c}" stroke-width="2"/>')
        anc = 'start' if a < -600 else ('end' if a > 800 else 'middle')
        o.append(t(X(a), y - 20, n, 21, c, anchor=anc, font=SERIF, weight='bold'))
        o.append(t(X(a), y + 6, d, 15, MUTED, anchor=anc))
    o.append(f'<path d="M{X(-125)},430 L{X(-125)},450 L{X(930)},450 L{X(930)},430" fill="none" stroke="{ROJO}" stroke-width="3"/>')
    o.append(t((X(-125) + X(930)) / 2, 485, 'unos mil años de copias a mano', 20, ROJO, weight='bold'))
    caja(o, 160, 540, 880, 110, '#fff', GRIS)
    o.append(t(600, 582, 'Resultado de la comparación', 20, INK, font=SERIF, weight='bold'))
    o.append(t(600, 615, 'Las dos copias coinciden en la inmensa mayoría de los versículos;', 17, INK))
    o.append(t(600, 638, 'las diferencias son sobre todo de ortografía.', 17, INK))
    o.append(t(600, 715, '«La palabra del Dios nuestro permanece para siempre» (Is 40:8).', 19, INK, font=SERIF, italic=True))
    guardar('esquema-mil-anos', o)


# 5. Copias y distancia
def copias():
    o = lienzo('Cuántas copias y qué tan cercanas', 'El Nuevo Testamento comparado con otras obras antiguas (cifras aproximadas)')
    filas = [('Nuevo Testamento', 'griego, siglo I d.C.', 5800, 50, AZUL, 'más de 5.800', 'unos 50 años (P52)'),
             ('Homero', 'Ilíada, siglo VIII a.C.', 1800, 400, ORO, 'unas 1.800', 'siglos; casi todas medievales'),
             ('César', 'Guerra de las Galias, siglo I a.C.', 250, 900, GRAFITO, 'unas 250', 'unos 900 años'),
             ('Tácito', 'Anales 1–6, siglo II d.C.', 1, 750, GRAFITO, '1 manuscrito', 'unos 750 años')]
    o.append(t(470, 150, 'Manuscritos conservados', 18, INK, weight='bold'))
    o.append(t(970, 150, 'Distancia hasta la copia más antigua', 18, INK, weight='bold'))
    for i, (n, d, num, dist, c, et, et2) in enumerate(filas):
        y = 190 + i * 115
        o.append(t(60, y + 30, n, 19, INK, anchor='start', font=SERIF, weight='bold'))
        o.append(t(60, y + 54, d, 14, MUTED, anchor='start'))
        w = max(4, num / 5800 * 320)
        o.append(f'<rect x="320" y="{y + 12}" width="{w}" height="40" rx="5" fill="{c}"/>')
        o.append(t(330 + w if w < 220 else 310 + w, y + 40, et, 16, INK if w < 220 else '#fff', anchor='start' if w < 220 else 'end', weight='bold'))
        if i == 1:
            o.append(t(760, y + 40, et2, 15, INK, anchor='start'))
        else:
            w2 = dist / 1000 * 330
            o.append(f'<rect x="760" y="{y + 12}" width="{w2}" height="40" rx="5" fill="{c}" opacity=".55"/>')
            o.append(t(770 + w2, y + 40, et2, 15, INK, anchor='start'))
    o.append(t(600, 700, 'Más copias y más cercanas al original permiten reconocer con más seguridad lo que se escribió.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-copias', o)


# 6. Tipos de variantes
def variantes():
    o = lienzo('¿Qué clase de diferencias hay entre las copias?', 'Variantes entre los manuscritos griegos del Nuevo Testamento')
    capas = [('Ortografía y errores evidentes', 'Letras cambiadas, palabras repetidas o saltadas', 'la gran mayoría', 760, GRIS),
             ('Sinónimos y orden de palabras', '«Cristo Jesús» o «Jesucristo»; «el Señor» o «Jesús»', 'muchas', 600, '#a9b8c9'),
             ('Con sentido, sin apoyo antiguo', 'Lecturas de un solo manuscrito tardío', 'algunas', 460, ORO),
             ('Con sentido y con apoyo antiguo', 'Ro 5:1 «tenemos» o «tengamos»; los pasajes discutidos', 'menos del 1 %', 330, ROJO)]
    y = 140
    for n, d, cant, w, c in capas:
        x = 600 - w / 2
        caja(o, x, y, w, 105, c, rx=10)
        col = '#fff' if c in (ROJO,) else INK
        o.append(t(600, y + 42, n, 19, col, weight='bold'))
        palabras = d.split(' ')
        if w < 400 and len(d) > 34:
            mitad = (len(palabras) + 1) // 2
            o.append(t(600, y + 68, ' '.join(palabras[:mitad]), 14, col)); o.append(t(600, y + 87, ' '.join(palabras[mitad:]), 14, col))
        else:
            o.append(t(600, y + 72, d, 15, col))
        o.append(t(600 + w / 2 + 20, y + 58, cant, 17, INK, anchor='start', italic=True))
        y += 125
    o.append(t(600, 690, 'Ninguna variante pone en duda una doctrina de la fe cristiana.', 21, INK, font=SERIF, italic=True))
    o.append(t(600, 725, 'Las proporciones son ilustrativas, según las estimaciones de los especialistas.', 15, MUTED))
    guardar('esquema-variantes', o)


# 7. Familias y ediciones
def familias():
    o = lienzo('Familias de manuscritos y ediciones impresas', 'Cómo se agrupan los testigos del Nuevo Testamento')
    caja(o, 450, 125, 300, 70, INK)
    o.append(t(600, 168, 'Escritos originales (siglo I)', 19, '#fff', font=SERIF))
    fam = [(200, 'Alejandrina', 'Egipto', ['P66, P75, P46', 'Vaticano, Sinaítico'], 'texto breve y sobrio', VERDE),
           (600, 'Occidental', 'Roma, Galia, África', ['Códice de Beza', 'latín antiguo'], 'paráfrasis y añadidos', ORO),
           (1000, 'Bizantina', 'Constantinopla', ['Alejandrino (evangelios)', 'la mayoría tardía'], 'texto pleno y armonizado', AZUL)]
    for cx, n, reg, ej, car, c in fam:
        o.append(f'<line x1="600" y1="198" x2="{cx}" y2="248" stroke="{c}" stroke-width="3" marker-end="url(#fl)"/>')
        caja(o, cx - 160, 252, 320, 200, '#fff', c)
        o.append(t(cx, 290, n, 23, c, font=SERIF, weight='bold'))
        o.append(t(cx, 315, reg, 15, MUTED, italic=True))
        for k, e in enumerate(ej):
            o.append(t(cx, 352 + k * 26, e, 17, INK))
        o.append(t(cx, 428, car, 15, MUTED, italic=True))
    caja(o, 760, 520, 400, 120, '#dde8f3', AZUL)
    o.append(t(960, 558, 'Textus Receptus', 23, AZUL, font=SERIF, weight='bold'))
    o.append(t(960, 586, 'Erasmo 1516 → Estienne → Elzevir 1633', 15, INK))
    o.append(t(960, 612, 'Reina-Valera, versión del rey Jacobo', 15, MUTED, italic=True))
    o.append(f'<line x1="1000" y1="455" x2="980" y2="515" stroke="{AZUL}" stroke-width="3" marker-end="url(#fl)"/>')
    caja(o, 40, 520, 600, 120, '#e3efe6', VERDE)
    o.append(t(340, 558, 'Texto crítico', 23, VERDE, font=SERIF, weight='bold'))
    o.append(t(340, 586, 'Westcott y Hort 1881 → Nestle-Aland', 15, INK))
    o.append(t(340, 612, 'compara todas las familias; da más peso a los testigos antiguos', 15, MUTED, italic=True))
    for cx in (200, 600, 1000):
        o.append(f'<line x1="{cx}" y1="455" x2="{340 + (cx - 600) * 0.25}" y2="515" stroke="{VERDE}" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#fl)"/>')
    o.append(t(600, 705, 'Ambos textos coinciden en la inmensa mayoría de los versículos y en todas las doctrinas.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-familias', o)


# 8. La Biblia en español
def espanol():
    o = lienzo('Siete siglos de la Biblia en español', 'Algunas traducciones y revisiones principales')
    x0, x1, a0, a1 = 70, 1130, 1250, 2000
    X = lambda a: x0 + (a - a0) / (a1 - a0) * (x1 - x0)
    o.append(f'<line x1="{x0}" y1="400" x2="{x1}" y2="400" stroke="{INK}" stroke-width="3"/>')
    for a in range(1300, 2001, 100):
        o.append(f'<line x1="{X(a)}" y1="392" x2="{X(a)}" y2="408" stroke="{INK}" stroke-width="2"/>')
        o.append(t(X(a), 430, str(a), 14, MUTED))
    arriba = [(1280, 'Biblia alfonsina', 'de la Vulgata', GRAFITO, 330), (1430, 'Biblia de Alba', 'AT del hebreo', ORO, 250),
              (1553, 'Ferrara', 'AT sefardí', ORO, 330), (1569, 'Biblia del Oso', 'Casiodoro de Reina', ROJO, 170),
              (1909, 'Revisión 1909', '', ROJO, 250), (1960, 'Reina-Valera 1960', '', ROJO, 170)]
    abajo = [(1543, 'NT de Enzinas', 'del griego', AZUL, 480), (1556, 'NT de Pérez de Pineda', 'Ginebra', AZUL, 560),
             (1602, 'Revisión de Valera', 'Ámsterdam', ROJO, 640), (1793, 'Scío', 'católica, de la Vulgata', MORADO, 480),
             (1862, 'Revisiones de 1862 y 1865', '', ROJO, 560), (1944, 'Nácar-Colunga', 'católica, de los originales', MORADO, 640)]
    for a, n, d, c, y in arriba + abajo:
        o.append(f'<circle cx="{X(a)}" cy="400" r="8" fill="{c}"/>')
        o.append(f'<line x1="{X(a)}" y1="400" x2="{X(a)}" y2="{y + (30 if y < 400 else -26)}" stroke="{c}" stroke-width="1.5" opacity=".7"/>')
        anc = 'end' if a > 1900 else ('start' if a < 1300 else 'middle')
        o.append(t(X(a), y, n, 17, c, anchor=anc, weight='bold'))
        if d:
            o.append(t(X(a), y + 20, d, 14, MUTED, anchor=anc, italic=True))
    o.append(f'<rect x="{X(1559)}" y="380" width="{X(1790) - X(1559)}" height="8" fill="{ROJO}" opacity=".25"/>')
    o.append(t((X(1559) + X(1790)) / 2, 375, 'prohibida en España (1559–hacia 1790)', 14, ROJO, italic=True))
    for k, (c, et) in enumerate([(ROJO, 'Reina-Valera'), (AZUL, 'Reforma española'), (ORO, 'Traducciones judías'), (MORADO, 'Traducciones católicas')]):
        o.append(f'<rect x="{110 + k * 260}" y="705" width="16" height="16" rx="3" fill="{c}"/>')
        o.append(t(134 + k * 260, 719, et, 15, INK, anchor='start'))
    guardar('esquema-espanol', o)


# 9. Espectro de traducciones
def espectro():
    o = lienzo('Formas de traducir', 'Del texto más literal al más libre')
    o.append('<defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="#2a6fb0"/><stop offset=".55" stop-color="#7a3fa0"/><stop offset="1" stop-color="#c08a1e"/></linearGradient></defs>')
    o.append('<rect x="80" y="300" width="1040" height="22" rx="11" fill="url(#gr)"/>')
    o.append(t(80, 280, 'Equivalencia formal', 20, AZUL, anchor='start', font=SERIF, weight='bold'))
    o.append(t(80, 255, 'palabra por palabra', 15, MUTED, anchor='start', italic=True))
    o.append(t(600, 280, 'Equivalencia dinámica', 20, MORADO, font=SERIF, weight='bold'))
    o.append(t(600, 255, 'idea por idea', 15, MUTED, italic=True))
    o.append(t(1120, 280, 'Paráfrasis', 20, ORO, anchor='end', font=SERIF, weight='bold'))
    o.append(t(1120, 255, 'texto vuelto a contar', 15, MUTED, anchor='end', italic=True))
    vers = [(105, 'Interlineal', 0), (230, 'La Biblia de las Américas', 1), (330, 'Biblia Textual', 2), (430, 'Reina-Valera 1960', 0),
            (570, 'Nueva Versión Internacional', 1), (710, 'Nueva Traducción Viviente', 0), (790, 'Dios Habla Hoy', 2),
            (935, 'Traducción en Lenguaje Actual', 1), (1090, 'La Biblia al Día', 0)]
    for x, n, fila in vers:
        y = 365 + fila * 36
        o.append(f'<line x1="{x}" y1="325" x2="{x}" y2="{y - 18}" stroke="{INK}" stroke-width="1.5"/>')
        o.append(f'<circle cx="{x}" cy="311" r="6" fill="#fff" stroke="{INK}" stroke-width="2"/>')
        anc = 'start' if x < 150 else ('end' if x > 1050 else 'middle')
        o.append(t(x, y, n, 15, INK, anchor=anc, weight='bold'))
    cols = [(80, 'Ventajas', ['Muestra la forma del original', 'Útil para estudiar palabras'], AZUL),
            (440, 'Ventajas', ['Se entiende con facilidad', 'Útil para leer y comparar'], MORADO),
            (800, 'Uso', ['Captar el tono general', 'No sirve para fundar doctrina'], ORO)]
    for x, tit, lin, c in cols:
        caja(o, x, 490, 320, 150, '#fff', c)
        o.append(t(x + 160, 528, tit, 18, c, weight='bold'))
        for k, l in enumerate(lin):
            o.append(t(x + 160, 564 + k * 30, l, 16, INK))
    o.append(t(600, 705, 'La posición de cada versión es aproximada: toda traducción combina ambas formas en distinta medida.', 17, INK, font=SERIF, italic=True))
    guardar('esquema-espectro', o)


for f in (materiales, lenguas, camino, mil_anos, copias, variantes, familias, espanol, espectro):
    f()
print('Esquemas generados en', OUT)
