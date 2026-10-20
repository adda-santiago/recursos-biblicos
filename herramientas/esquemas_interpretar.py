# Uso: python3 herramientas/esquemas_interpretar.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Cómo interpretar la Biblia» (origen: 'esquema').
# Mismo estilo que esquemas_escatologia.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'interpretar-biblia', 'img') + os.sep
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
    if sub: o.append(t(600, 98, sub, 18, MUTED))
    return o

def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))

# 1. Las cinco distancias: dos orillas y un puente
def distancias():
    o = lienzo('Cinco distancias entre el texto y nosotros', 'El intérprete construye un puente desde el mundo bíblico hasta hoy')
    o.append(f'<rect x="40" y="170" width="300" height="440" rx="16" fill="#efe6d4"/>')
    o.append(f'<rect x="860" y="170" width="300" height="440" rx="16" fill="#e2ebf3"/>')
    o.append(t(190, 220, 'El mundo bíblico', 24, INK, font=SERIF)); o.append(t(190, 248, 'autor y primeros lectores', 16, MUTED, italic=True))
    o.append(t(1010, 220, 'El lector de hoy', 24, INK, font=SERIF)); o.append(t(1010, 248, 'nuestra lengua y cultura', 16, MUTED, italic=True))
    # río
    o.append(f'<path d="M340,610 C 500,560 700,660 860,610 L860,640 C700,690 500,590 340,640 Z" fill="#cfe0ec"/>')
    # puente
    o.append(f'<path d="M300,420 Q600,250 900,420" fill="none" stroke="{ACC}" stroke-width="10" stroke-linecap="round"/>')
    o.append(f'<line x1="300" y1="430" x2="900" y2="430" stroke="{ACC}" stroke-width="8" stroke-linecap="round"/>')
    for k in range(1, 8):
        u = k / 8
        x = 300 + 600 * u; y = (1 - u) ** 2 * 420 + 2 * u * (1 - u) * 250 + u ** 2 * 420
        o.append(f'<line x1="{x:.0f}" y1="{y:.0f}" x2="{x:.0f}" y2="430" stroke="{ACC}" stroke-width="3"/>')
    items = [('Idioma', 'hebreo, arameo, griego', AZUL), ('Cultura', 'costumbres, valores', VERDE), ('Historia', 'reyes, imperios', ORO),
             ('Geografía', 'lugares, distancias', TEAL), ('Género', 'forma literaria', MORADO)]
    for i, (n, d, c) in enumerate(items):
        x = 405 + i * 97
        o.append(f'<circle cx="{x}" cy="478" r="10" fill="{c}"/>')
        o.append(t(x, 510, n, 15, c, weight='bold'))
        for k, palabra in enumerate(d.split(', ') if ', ' in d else [d]):
            o.append(t(x, 532 + k * 18, palabra, 12, MUTED))
    # textos en las orillas
    for i, s in enumerate(['Hebreo, arameo y griego', 'Antiguo Cercano Oriente', 'y mundo grecorromano', 'Hace 2.000 a 3.500 años']):
        o.append(t(190, 310 + i * 32, s, 17, INK))
    for i, s in enumerate(['Español', 'América Latina', 'Siglo XXI', 'Una Biblia traducida']):
        o.append(t(1010, 310 + i * 32, s, 17, INK))
    o.append(t(600, 700, 'Primero: ¿qué significó para ellos?  Después: ¿qué significa para nosotros?', 19, INK, font=SERIF, italic=True))
    guardar('esquema-distancias', o)

# 2. Un significado, muchas aplicaciones
def significado():
    o = lienzo('Un significado, muchas aplicaciones', 'El ejemplo del buen samaritano (Lucas 10:25-37)')
    o.append(f'<rect x="60" y="300" width="250" height="140" rx="14" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
    o.append(t(185, 345, 'El texto', 24, INK, font=SERIF)); o.append(t(185, 375, 'Lucas 10:25-37', 17, MUTED)); o.append(t(185, 405, 'lo que está escrito', 15, MUTED, italic=True))
    o.append(f'<line x1="318" y1="370" x2="440" y2="370" stroke="{INK}" stroke-width="4" marker-end="url(#fl)"/>')
    o.append(t(380, 352, 'uno solo', 15, MUTED, italic=True))
    o.append(f'<rect x="450" y="270" width="300" height="200" rx="14" fill="{ACC}"/>')
    o.append(t(600, 320, 'Significado', 26, '#fff', font=SERIF))
    for i, s in enumerate(['El prójimo es aquel', 'a quien muestro', 'misericordia, sin importar', 'su origen']):
        o.append(t(600, 360 + i * 26, s, 18, '#fff'))
    aps = ['Visitar a un enfermo', 'Ayudar a un inmigrante', 'Reconciliarme con un vecino', 'Servir en un comedor', 'Cuidar a un desconocido']
    for i, a in enumerate(aps):
        y = 170 + i * 105
        o.append(f'<line x1="756" y1="370" x2="850" y2="{y + 30}" stroke="{AZUL}" stroke-width="3" marker-end="url(#fl)"/>')
        o.append(f'<rect x="860" y="{y}" width="290" height="60" rx="10" fill="#e2ebf3"/>')
        o.append(t(1005, y + 37, a, 18, INK))
    o.append(t(1005, 150, 'Aplicaciones', 22, AZUL, weight='bold'))
    o.append(t(600, 700, 'Las aplicaciones varían; ninguna puede contradecir el significado.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-significado', o)

# 3. El método en tres pasos
def metodo():
    o = lienzo('El método en tres pasos', 'Esdras 7:10: inquirir, cumplir y enseñar')
    pasos = [('1', 'Observación', '¿Qué dice?', ['¿Quién habla y a quién?', '¿Qué pasa, dónde, cuándo?', '¿Qué palabras se repiten?', '¿Qué conectores hay?'], AZUL),
             ('2', 'Interpretación', '¿Qué significa?', ['Contexto literario', 'Contexto histórico y cultural', 'Palabras y género', 'Toda la Escritura y Cristo'], ORO),
             ('3', 'Aplicación', '¿Cómo lo vivo?', ['¿Qué enseña de Dios?', '¿Hay promesa o mandato?', '¿Qué debo cambiar?', '¿Qué haré esta semana?'], VERDE)]
    for i, (n, nom, preg, lista, c) in enumerate(pasos):
        x = 60 + i * 380
        o.append(f'<rect x="{x}" y="160" width="320" height="470" rx="16" fill="#fff" stroke="{c}" stroke-width="3"/>')
        o.append(f'<rect x="{x}" y="160" width="320" height="120" rx="16" fill="{c}"/><rect x="{x}" y="250" width="320" height="30" fill="{c}"/>')
        o.append(f'<circle cx="{x + 50}" cy="220" r="28" fill="#fff"/>'); o.append(t(x + 50, 231, n, 30, c, weight='bold'))
        o.append(t(x + 190, 213, nom, 26, '#fff', font=SERIF)); o.append(t(x + 190, 248, preg, 20, '#fff', weight='bold'))
        for k, s in enumerate(lista):
            o.append(f'<circle cx="{x + 34}" cy="{338 + k * 70}" r="6" fill="{c}"/>')
            o.append(t(x + 52, 345 + k * 70, s, 18, INK, 'start'))
        if i < 2:
            o.append(f'<line x1="{x + 326}" y1="395" x2="{x + 372}" y2="395" stroke="{INK}" stroke-width="4" marker-end="url(#fl)"/>')
    o.append(t(600, 700, 'Antes de todo, orar: «Abre mis ojos, y miraré las maravillas de tu ley» (Sal 119:18)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-metodo', o)

# 4. Los círculos del contexto
def contexto():
    o = lienzo('Los círculos del contexto', 'Cuanto más cerca del versículo, más peso tiene para decidir su sentido')
    capas = [('Toda la Biblia', 300, '#e9e4d8'), ('El testamento', 250, '#e2ddce'), ('El libro', 200, '#d9e3ec'), ('El capítulo o sección', 150, '#c8d8e6'), ('El párrafo', 100, '#b3cadf')]
    cx, cy = 430, 420
    for n, r, c in capas:
        o.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{c}" stroke="#fff" stroke-width="3"/>')
    for n, r, c in capas:
        o.append(t(cx, cy - r + 30, n, 18, INK, weight='bold'))
    o.append(f'<circle cx="{cx}" cy="{cy}" r="52" fill="{ACC}"/>'); o.append(t(cx, cy + 7, 'Versículo', 19, '#fff', weight='bold'))
    ej = ['Ejemplo: Colosenses 2:21', '', '«No manejes, ni gustes, ni aun toques»', '', 'Solo: parece un mandamiento.', '', 'Con el párrafo (2:20-23):', 'Pablo cita reglas humanas', 'para rechazarlas: «no tienen', 'valor alguno contra los', 'apetitos de la carne».']
    for i, s in enumerate(ej):
        o.append(t(800, 230 + i * 30, s, 19 if i != 0 else 22, INK if i else ACC, 'start', 'bold' if i == 0 else 'normal', SERIF if i in (0, 2) else SANS, italic=(i == 2)))
    o.append(t(600, 735, '«Un texto fuera de contexto es un pretexto»', 19, MUTED, font=SERIF, italic=True))
    guardar('esquema-contexto', o)

# 5. La revelación progresiva de la promesa
def revelacion():
    o = lienzo('La revelación progresiva', 'La promesa del Redentor se va aclarando a lo largo de la Escritura')
    Y = 400
    hitos = [(110, 'Génesis 3:15', 'La simiente', 'de la mujer', 1), (300, 'Abraham', 'En tu simiente', 'serán benditas', 2),
             (490, 'David', 'Un hijo suyo', 'reinará para siempre', 3), (680, 'Los profetas', 'Nacerá de una virgen,', 'sufrirá, reinará', 4),
             (880, 'Cristo', 'Vino en el cumplimiento', 'del tiempo (Gá 4:4)', 5), (1070, 'Su venida', 'Reinará y hará', 'nuevas todas las cosas', 5)]
    o.append(f'<path d="M80,{Y} L1130,{Y}" stroke="{GRIS}" stroke-width="4"/>')
    # cuña de luz creciente
    o.append(f'<path d="M100,{Y - 6} L880,{Y - 70} L880,{Y + 70} L100,{Y + 6} Z" fill="{ORO}" opacity="0.22"/>')
    o.append(f'<rect x="880" y="{Y - 70}" width="250" height="140" fill="{ORO}" opacity="0.22"/>')
    for x, n, a, b, k in hitos:
        r = 8 + k * 3
        c = ACC if n in ('Cristo', 'Su venida') else ORO
        o.append(f'<circle cx="{x}" cy="{Y}" r="{r}" fill="{c}"/>')
        o.append(t(x, Y - 100, n, 20, INK, weight='bold', font=SERIF))
        o.append(t(x, Y + 115, a, 16, INK)); o.append(t(x, Y + 137, b, 16, INK))
    refs = [(110, 'Gn 3:15'), (300, 'Gn 12:3; 22:18'), (490, '2 S 7:12-16'), (680, 'Is 7:14; 53; Dn 7'), (880, 'Gá 4:4-5'), (1070, 'Ap 19–22')]
    for x, r in refs: o.append(t(x, Y + 165, r, 14, MUTED, italic=True))
    o.append(t(600, 690, '«Dios, habiendo hablado muchas veces y de muchas maneras… nos ha hablado por el Hijo» (He 1:1-2)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-revelacion', o)

# 6. La biblioteca de 66 libros por género
def generos():
    o = lienzo('La Biblia, una biblioteca', '66 libros agrupados por su género principal')
    G = {'n': ('Narrativa', VERDE), 'l': ('Ley y narrativa', ORO), 'p': ('Poesía y sabiduría', MORADO), 'f': ('Profecía', ROJO),
         'e': ('Evangelios', '#d0662a'), 'h': ('Hechos', VERDE), 'c': ('Cartas', AZUL), 'a': ('Apocalíptica', TEAL)}
    at = [('Gn', 'n'), ('Éx', 'l'), ('Lv', 'l'), ('Nm', 'l'), ('Dt', 'l'), ('Jos', 'n'), ('Jue', 'n'), ('Rt', 'n'), ('1 S', 'n'), ('2 S', 'n'), ('1 R', 'n'), ('2 R', 'n'), ('1 Cr', 'n'), ('2 Cr', 'n'),
          ('Esd', 'n'), ('Neh', 'n'), ('Est', 'n'), ('Job', 'p'), ('Sal', 'p'), ('Pr', 'p'), ('Ec', 'p'), ('Cnt', 'p'), ('Is', 'f'), ('Jer', 'f'), ('Lm', 'p'), ('Ez', 'f'), ('Dn', 'a'),
          ('Os', 'f'), ('Jl', 'f'), ('Am', 'f'), ('Abd', 'f'), ('Jon', 'n'), ('Mi', 'f'), ('Nah', 'f'), ('Hab', 'f'), ('Sof', 'f'), ('Hag', 'f'), ('Zac', 'f'), ('Mal', 'f')]
    nt = [('Mt', 'e'), ('Mr', 'e'), ('Lc', 'e'), ('Jn', 'e'), ('Hch', 'n'), ('Ro', 'c'), ('1 Co', 'c'), ('2 Co', 'c'), ('Gá', 'c'), ('Ef', 'c'), ('Fil', 'c'), ('Col', 'c'), ('1 Ts', 'c'), ('2 Ts', 'c'),
          ('1 Ti', 'c'), ('2 Ti', 'c'), ('Tit', 'c'), ('Flm', 'c'), ('He', 'c'), ('Stg', 'c'), ('1 P', 'c'), ('2 P', 'c'), ('1 Jn', 'c'), ('2 Jn', 'c'), ('3 Jn', 'c'), ('Jud', 'c'), ('Ap', 'a')]
    def estante(libros, y, titulo, ancho):
        o.append(t(60, y - 16, titulo, 20, INK, 'start', 'bold', SERIF))
        o.append(f'<rect x="50" y="{y + 180}" width="{len(libros) * ancho + 20:.0f}" height="8" fill="#b9ab8e"/>')
        for i, (b, g) in enumerate(libros):
            x = 60 + i * ancho
            c = G[g][1]
            o.append(f'<rect x="{x}" y="{y}" width="{ancho - 4}" height="180" rx="3" fill="{c}"/>')
            o.append(f'<text x="{x + (ancho - 4) / 2}" y="{y + 168}" font-family="{SANS}" font-size="15" fill="#fff" font-weight="bold" text-anchor="start" transform="rotate(-90 {x + (ancho - 4) / 2 + 5} {y + 168})">{b}</text>')
    estante(at, 150, 'Antiguo Testamento · 39 libros', 1080 / 39)
    estante(nt, 420, 'Nuevo Testamento · 27 libros', 1080 / 39)
    ley = [('Narrativa', VERDE), ('Ley (con narrativa)', ORO), ('Poesía y sabiduría', MORADO), ('Profecía', ROJO), ('Evangelios', '#d0662a'), ('Cartas', AZUL), ('Apocalíptica', TEAL)]
    x = 820
    for i, (n, c) in enumerate(ley):
        yy = 440 + i * 30
        o.append(f'<rect x="{x}" y="{yy - 14}" width="18" height="18" rx="3" fill="{c}"/>'); o.append(t(x + 28, yy, n, 16, INK, 'start'))
    o.append(t(600, 700, 'Muchos libros combinan géneros: aquí se marca el principal.', 18, MUTED, italic=True))
    guardar('esquema-generos', o)

# 7. Las dos cumbres de la profecía
def montes():
    o = lienzo('La perspectiva profética', 'De lejos, el profeta ve dos cumbres como una sola')
    # observador
    o.append(f'<circle cx="110" cy="470" r="16" fill="{INK}"/><path d="M110,486 L110,560 M110,505 L86,535 M110,505 L134,535 M110,560 L92,610 M110,560 L128,610" stroke="{INK}" stroke-width="5" fill="none" stroke-linecap="round"/>')
    o.append(t(110, 650, 'El profeta', 18, INK, weight='bold')); o.append(t(110, 672, 'Isaías 61:1-2', 15, MUTED, italic=True))
    o.append(f'<line x1="128" y1="470" x2="560" y2="300" stroke="{GRIS}" stroke-width="2" stroke-dasharray="8 8"/><line x1="128" y1="470" x2="1000" y2="290" stroke="{GRIS}" stroke-width="2" stroke-dasharray="8 8"/>')
    # monte 1
    o.append(f'<path d="M380,610 L560,290 L740,610 Z" fill="{AZUL}" opacity="0.85"/>')
    o.append(t(560, 250, 'Primera venida', 22, AZUL, weight='bold', font=SERIF))
    o.append(t(560, 650, '«El año de la buena voluntad', 16, INK)); o.append(t(560, 672, 'de Jehová» · cumplido (Lc 4:21)', 16, INK))
    # monte 2
    o.append(f'<path d="M820,610 L1000,280 L1170,610 Z" fill="{ACC}" opacity="0.85"/>')
    o.append(t(1000, 240, 'Venida en gloria', 22, ACC, weight='bold', font=SERIF))
    o.append(t(1000, 650, '«El día de venganza', 16, INK)); o.append(t(1000, 672, 'del Dios nuestro» · por cumplirse', 16, INK))
    # valle
    o.append(f'<path d="M740,610 Q780,560 820,610 Z" fill="{VERDE}" opacity="0.6"/>')
    o.append(f'<rect x="700" y="400" width="160" height="70" rx="10" fill="#fff" stroke="{VERDE}" stroke-width="2"/>')
    o.append(t(780, 428, 'El valle:', 16, VERDE, weight='bold')); o.append(t(780, 452, 'la era de la iglesia', 16, VERDE))
    o.append(f'<line x1="780" y1="472" x2="780" y2="585" stroke="{VERDE}" stroke-width="2" marker-end="url(#fl)"/>')
    o.append(t(600, 735, 'Jesús leyó Isaías 61 y se detuvo antes del «día de venganza»', 18, MUTED, font=SERIF, italic=True))
    guardar('esquema-montes', o)

# 8. Exégesis y eiségesis
def exegesis():
    o = lienzo('Exégesis y eiségesis', 'Sacar del texto su sentido, o meter en el texto nuestras ideas')
    for i, (titulo, sub, dirr, c, desc) in enumerate([
            ('Exégesis', '«sacar afuera»', 1, VERDE, ['El sentido sale del texto', 'El lector escucha', 'El texto corrige al lector']),
            ('Eiségesis', '«meter adentro»', -1, ROJO, ['La idea entra en el texto', 'El lector se escucha a sí mismo', 'El texto confirma lo que ya pensaba'])]):
        y = 190 + i * 260
        o.append(f'<rect x="40" y="{y}" width="220" height="160" rx="14" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
        o.append(t(150, y + 72, 'El texto', 24, INK, font=SERIF)); o.append(t(150, y + 102, 'bíblico', 18, MUTED))
        o.append(f'<rect x="540" y="{y}" width="220" height="160" rx="14" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
        o.append(t(650, y + 72, 'El lector', 24, INK, font=SERIF)); o.append(t(650, y + 102, 'y sus ideas', 18, MUTED))
        if dirr == 1:
            o.append(f'<line x1="270" y1="{y + 80}" x2="528" y2="{y + 80}" stroke="{c}" stroke-width="8" marker-end="url(#fl)"/>')
        else:
            o.append(f'<line x1="530" y1="{y + 80}" x2="272" y2="{y + 80}" stroke="{c}" stroke-width="8" marker-end="url(#fl)"/>')
        o.append(t(400, y + 55, titulo, 26, c, weight='bold', font=SERIF)); o.append(t(400, y + 118, sub, 18, c, italic=True))
        for k, s in enumerate(desc):
            o.append(f'<circle cx="805" cy="{y + 44 + k * 38}" r="6" fill="{c}"/>'); o.append(t(822, y + 50 + k * 38, s, 18, INK, 'start'))
    o.append(t(600, 720, '«Procura con diligencia… usa bien la palabra de verdad» (2 Ti 2:15)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-exegesis', o)

for f in (distancias, significado, metodo, contexto, revelacion, generos, montes, exegesis):
    f()
print('Esquemas generados en', OUT)
