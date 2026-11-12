# Uso: python3 herramientas/esquemas_creacion.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «La creación y los orígenes» (origen: 'esquema').
# Mismo estilo que esquemas_espiritu.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'creacion-y-origenes', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; PARDO = '#8a5a2b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    s = s.replace('&', '&amp;')
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub=None, h=H):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 60, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 94, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14):
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


def claro(c, a=0.14):
    return f'{c}{int(a * 255):02x}'


def lineas(o, x, y, textos, size=15, fill=INK, salto=21, **kw):
    for i, s in enumerate(textos):
        o.append(t(x, y + i * salto, s, size, fill, **kw))


# 1. Génesis 1 a 11 en cinco momentos
def panorama():
    o = lienzo('Génesis 1 a 11: los orígenes', 'Cinco momentos que explican el mundo y desembocan en el llamado de Abraham')
    etapas = [
        ('La creación', 'Gn 1–2', ['Dios crea todo', 'bueno en gran manera'], VERDE),
        ('La caída', 'Gn 3', ['El pecado entra', 'y con él la muerte'], ROJO),
        ('De Caín a Noé', 'Gn 4–6', ['El pecado se extiende', 'y llena la tierra'], PARDO),
        ('El diluvio', 'Gn 6–9', ['Juicio y salvación', 'pacto con toda carne'], AZUL),
        ('Babel', 'Gn 10–11', ['Orgullo y dispersión', 'de las naciones'], MORADO),
    ]
    y0 = 300; xs = [140 + i * 200 for i in range(5)]
    o.append(f'<line x1="70" y1="{y0}" x2="1000" y2="{y0}" stroke="{GRIS}" stroke-width="6" stroke-linecap="round"/>')
    for x, (n, r, d, c) in zip(xs, etapas):
        o.append(f'<circle cx="{x}" cy="{y0}" r="16" fill="{c}"/>')
        o.append(t(x, y0 - 70, n, 23, c, weight='bold', font=SERIF))
        o.append(t(x, y0 - 42, r, 15, MUTED, italic=True))
        lineas(o, x, y0 + 52, d, 16)
    flecha(o, 1000, y0, 1090, y0, ORO, w=6, punta=16)
    caja(o, 1040, y0 - 120, 140, 96, claro(ORO, .18), ORO)
    o.append(t(1110, y0 - 84, 'Abraham', 22, ORO, weight='bold', font=SERIF))
    o.append(t(1110, y0 - 58, 'Gn 12', 15, MUTED, italic=True))
    o.append(t(1110, y0 - 36, 'la promesa', 15, INK))
    # gracia en cada etapa
    o.append(t(600, 470, 'En cada juicio, una gracia', 22, INK, font=SERIF, weight='bold'))
    gr = ['La promesa a Eva (Gn 3:15)', 'La señal de Caín (Gn 4:15)', 'Noé halló gracia (Gn 6:8)', 'El arco iris (Gn 9:13)', 'El llamado de Abram (Gn 12:3)']
    for i, g in enumerate(gr):
        x = 140 + i * 230
        caja(o, x - 105, 500, 210, 56, '#ffffff', GRIS, rx=10)
        o.append(t(x, 534, g, 14, INK))
    o.append(t(600, 640, '«Serán benditas en ti todas las familias de la tierra» (Gn 12:3)', 20, INK, font=SERIF, italic=True))
    o.append(t(600, 680, 'Desde Génesis 12, la historia se concentra en Abraham y su descendencia.', 16, MUTED))
    guardar('esquema-panorama', o)


# 2. Formar y llenar
def dias():
    o = lienzo('Formar y llenar', 'La tierra estaba «desordenada y vacía» (Gn 1:2): Dios la ordena y la llena')
    o.append(t(330, 140, 'Formar los espacios', 24, AZUL, weight='bold', font=SERIF))
    o.append(t(330, 164, '«desordenada» → orden', 15, MUTED, italic=True))
    o.append(t(870, 140, 'Llenarlos con habitantes', 24, VERDE, weight='bold', font=SERIF))
    o.append(t(870, 164, '«vacía» → plenitud', 15, MUTED, italic=True))
    filas = [
        ('Día 1', 'Luz y tinieblas', 'separa el día de la noche', 'Día 4', 'Sol, luna y estrellas', 'lumbreras para el día y la noche', ORO),
        ('Día 2', 'Cielo y mar', 'separa las aguas', 'Día 5', 'Aves y peces', 'habitantes del cielo y del agua', AZUL),
        ('Día 3', 'Tierra seca y plantas', 'junta las aguas, brota la vida', 'Día 6', 'Animales y ser humano', 'habitantes de la tierra', VERDE),
    ]
    for i, (d1, n1, s1, d2, n2, s2, c) in enumerate(filas):
        y = 190 + i * 140
        caja(o, 110, y, 440, 110, claro(c, .14), c)
        caja(o, 650, y, 440, 110, claro(c, .22), c)
        o.append(t(150, y + 44, d1, 18, c, anchor='start', weight='bold'))
        o.append(t(150, y + 74, n1, 24, INK, anchor='start', font=SERIF))
        o.append(t(150, y + 98, s1, 15, MUTED, anchor='start'))
        o.append(t(690, y + 44, d2, 18, c, anchor='start', weight='bold'))
        o.append(t(690, y + 74, n2, 24, INK, anchor='start', font=SERIF))
        o.append(t(690, y + 98, s2, 15, MUTED, anchor='start'))
        flecha(o, 560, y + 55, 640, y + 55, c, w=4)
    caja(o, 300, 625, 600, 90, claro(ACC, .14), ACC)
    o.append(t(600, 662, 'Día 7: Dios reposa', 26, ACC, weight='bold', font=SERIF))
    o.append(t(600, 692, 'bendice el día y lo santifica (Gn 2:1-3)', 16, INK))
    guardar('esquema-dias', o)


# 3. Cinco lecturas de Génesis 1
def posturas():
    o = lienzo('Cinco lecturas de Génesis 1', 'De la más literal en la cronología a la más figurada, y lo que todas comparten')
    cols = [
        ('Tierra joven', ['Seis días de', '24 horas'], ['Unos miles', 'de años'], 'Respuestas en Génesis', ROJO),
        ('Brecha', ['Ruina entre 1:1 y 1:2;', 'seis días de restauración'], ['Antigua'], 'Scofield, Dake', ORO),
        ('Día-era y progresiva', ['Seis períodos', 'largos'], ['Antigua'], 'Reasons to Believe', VERDE),
        ('Marco literario', ['Un marco temático,', 'no una cronología'], ['El texto no', 'la define'], 'Kline, Blocher', AZUL),
        ('Evolución teísta', ['Lenguaje figurado;', 'Dios usa la evolución'], ['Antigua'], 'BioLogos', MORADO),
    ]
    flecha(o, 120, 138, 1080, 138, GRIS, w=3, punta=10)
    o.append(t(120, 128, 'cronología más literal', 13, MUTED, anchor='start'))
    o.append(t(1080, 128, 'más figurada', 13, MUTED, anchor='end'))
    for i, (n, d, e, q, c) in enumerate(cols):
        x = 40 + i * 226
        caja(o, x, 160, 212, 330, claro(c, .12), c)
        o.append(t(x + 106, 196, n, 19, c, weight='bold', font=SERIF))
        o.append(t(x + 106, 232, 'Los días', 13, MUTED))
        lineas(o, x + 106, 256, d, 15)
        o.append(t(x + 106, 322, 'La tierra', 13, MUTED))
        lineas(o, x + 106, 346, e, 15)
        o.append(t(x + 106, 410, 'Antepasado común', 13, MUTED))
        o.append(t(x + 106, 432, 'Sí' if i == 4 else 'No', 17, c, weight='bold'))
        o.append(t(x + 106, 470, q, 13, MUTED, italic=True))
    caja(o, 40, 520, 1120, 200, '#ffffff', INK)
    o.append(t(600, 558, 'Lo que afirman todas las lecturas cristianas ortodoxas', 21, INK, weight='bold', font=SERIF))
    comun = ['Un solo Dios creó todo de la nada', 'La creación es buena y tiene propósito', 'Cristo es Creador y sustentador',
             'El ser humano lleva la imagen de Dios', 'Dios juzga el pecado y salva por gracia', 'La Escritura es Palabra de Dios']
    for i, s in enumerate(comun):
        x = 230 + (i % 3) * 370; y = 600 + (i // 3) * 40
        o.append(t(x, y, '• ' + s, 16, INK))
    o.append(t(600, 700, 'Las cuatro primeras rechazan que el ser humano descienda de otras especies.', 15, MUTED, italic=True))
    guardar('esquema-posturas', o)


# 4. Dos linajes
def linajes():
    o = lienzo('Dos linajes desde Adán', 'Génesis 4 y 5: una línea construye sin Dios; la otra invoca su nombre')
    caja(o, 500, 120, 200, 56, claro(INK, .08), INK)
    o.append(t(600, 155, 'Adán y Eva', 22, INK, font=SERIF, weight='bold'))
    flecha(o, 560, 178, 330, 228, PARDO, w=3)
    flecha(o, 640, 178, 870, 228, AZUL, w=3)
    izq = ['Caín', 'Enoc (la ciudad)', 'Irad', 'Mehujael', 'Metusael', 'Lamec (dos mujeres, la venganza)']
    der = ['Set', 'Enós («invocar el nombre»)', 'Cainán, Mahalaleel, Jared', 'Enoc (caminó con Dios)', 'Matusalén, Lamec', 'Noé']
    for i, n in enumerate(izq):
        y = 250 + i * 52
        caja(o, 150, y, 360, 40, claro(PARDO, .14), PARDO, rx=10)
        o.append(t(330, y + 27, n, 17, INK))
    for i, n in enumerate(der):
        y = 250 + i * 52
        caja(o, 690, y, 360, 40, claro(AZUL, .14), AZUL, rx=10)
        o.append(t(870, y + 27, n, 17, INK))
    o.append(t(330, 590, 'Jabal · Jubal · Tubal-caín · Naama', 17, PARDO, weight='bold'))
    lineas(o, 330, 618, ['ganado, música y metal (Gn 4:20-22)', '«setenta veces siete» de venganza (Gn 4:24)'], 15, MUTED)
    o.append(t(870, 590, 'Sem · Cam · Jafet', 17, AZUL, weight='bold'))
    lineas(o, 870, 618, ['hasta Abraham, David y Cristo (Lc 3:23-38)', '«comenzaron a invocar» (Gn 4:26)'], 15, MUTED)
    o.append(t(600, 712, 'La cultura es buena; lo que la santifica o la corrompe es a quién sirve.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-linajes', o)


# 5. Los años de vida
def longevidad():
    o = lienzo('Los años de vida de Adán a Abraham', 'Génesis 5 y 11 (texto hebreo, RV 1960)')
    datos = [('Adán', 930), ('Set', 912), ('Enós', 905), ('Cainán', 910), ('Mahalaleel', 895), ('Jared', 962), ('Enoc', 365), ('Matusalén', 969), ('Lamec', 777), ('Noé', 950),
             ('Sem', 600), ('Arfaxad', 438), ('Sala', 433), ('Heber', 464), ('Peleg', 239), ('Reu', 239), ('Serug', 230), ('Nacor', 148), ('Taré', 205), ('Abraham', 175)]
    x0, y0, alto = 100, 640, 460
    escala = alto / 1000
    for v in (0, 250, 500, 750, 1000):
        y = y0 - v * escala
        o.append(f'<line x1="{x0}" y1="{y:.0f}" x2="1150" y2="{y:.0f}" stroke="{GRIS}" stroke-width="1"/>')
        o.append(t(x0 - 10, y + 5, str(v), 13, MUTED, anchor='end'))
    ancho = 1040 / len(datos)
    for i, (n, a) in enumerate(datos):
        x = x0 + 10 + i * ancho
        c = AZUL if i < 10 else ORO
        if n == 'Enoc': c = VERDE
        h = a * escala
        o.append(f'<rect x="{x:.0f}" y="{y0 - h:.0f}" width="{ancho - 12:.0f}" height="{h:.0f}" rx="4" fill="{c}"/>')
        o.append(t(x + (ancho - 12) / 2, y0 - h - 8, str(a), 13, INK))
        o.append(f'<text x="{x + (ancho - 12) / 2:.0f}" y="{y0 + 16}" font-family="{SANS}" font-size="14" fill="{INK}" text-anchor="end" transform="rotate(-40 {x + (ancho - 12) / 2:.0f} {y0 + 16})">{n}</text>')
    xd = x0 + 10 + 10 * ancho - 6
    o.append(f'<line x1="{xd:.0f}" y1="150" x2="{xd:.0f}" y2="{y0}" stroke="{ACC}" stroke-width="3" stroke-dasharray="8 6"/>')
    o.append(t(xd + 10, 165, 'El diluvio', 17, ACC, anchor='start', weight='bold'))
    o.append(t(340, 140, 'Antes del diluvio (Gn 5)', 18, AZUL, weight='bold'))
    o.append(t(880, 140, 'Después del diluvio (Gn 11)', 18, ORO, weight='bold'))
    o.append(t(600, 742, 'Enoc no murió: «le llevó Dios» (Gn 5:24). Siglos después: «setenta años… ochenta» (Sal 90:10).', 15, MUTED, italic=True))
    guardar('esquema-longevidad', o)


# 6. El año del diluvio
def cronologia():
    o = lienzo('El año del diluvio', 'Las fechas de Génesis 7 y 8, en la vida de Noé (meses de 30 días)')
    # dia del año: mes m, dia d -> (m-1)*30 + d ; año 601 suma 360
    def dia(m, d, sig=False): return (m - 1) * 30 + d + (360 if sig else 0)
    ini = dia(2, 17)
    hitos = [
        (dia(2, 17), 'Comienza la lluvia', '600, mes 2, día 17', 'Gn 7:11', AZUL, 'arriba'),
        (dia(2, 17) + 40, 'Fin de los 40 días', 'de lluvia', 'Gn 7:12', AZUL, 'abajo'),
        (dia(7, 17), 'El arca reposa', 'mes 7, día 17 (150 días)', 'Gn 7:24; 8:4', PARDO, 'arriba'),
        (dia(10, 1), 'Se ven las cimas', 'mes 10, día 1', 'Gn 8:5', PARDO, 'abajo'),
        (dia(10, 1) + 40, 'Cuervo y paloma', '40 días después', 'Gn 8:6-12', VERDE, 'arriba'),
        (dia(1, 1, True), 'Superficie seca', '601, mes 1, día 1', 'Gn 8:13', VERDE, 'abajo'),
        (dia(2, 27, True), 'Salen del arca', '601, mes 2, día 27', 'Gn 8:14-16', ACC, 'arriba'),
    ]
    fin = dia(2, 27, True)
    x0, x1, y0 = 90, 1110, 400
    X = lambda d: x0 + (d - ini) / (fin - ini) * (x1 - x0)
    # franjas
    o.append(f'<rect x="{X(ini):.0f}" y="{y0 - 14}" width="{X(ini + 150) - X(ini):.0f}" height="28" fill="{claro(AZUL, .35)}"/>')
    o.append(f'<rect x="{X(ini + 150):.0f}" y="{y0 - 14}" width="{X(fin) - X(ini + 150):.0f}" height="28" fill="{claro(VERDE, .22)}"/>')
    o.append(f'<rect x="330" y="150" width="26" height="16" fill="{claro(AZUL, .35)}"/>')
    o.append(t(364, 164, 'Las aguas prevalecen: 150 días', 15, INK, anchor='start'))
    o.append(f'<rect x="640" y="150" width="26" height="16" fill="{claro(VERDE, .22)}"/>')
    o.append(t(674, 164, 'Las aguas bajan y la tierra se seca', 15, INK, anchor='start'))
    for d, n, f, r, c, lado in hitos:
        x = X(d)
        y = y0 - 110 if lado == 'arriba' else y0 + 110
        o.append(f'<line x1="{x:.0f}" y1="{y0 + (-16 if lado == "arriba" else 16)}" x2="{x:.0f}" y2="{y + (18 if lado == "arriba" else -48):.0f}" stroke="{c}" stroke-width="2"/>')
        o.append(f'<circle cx="{x:.0f}" cy="{y0}" r="9" fill="{c}"/>')
        base = y - 40 if lado == 'arriba' else y
        anc = 'start' if x < 160 else ('end' if x > 1040 else 'middle')
        o.append(t(x, base, n, 17, c, weight='bold', anchor=anc))
        o.append(t(x, base + 22, f, 14, INK, anchor=anc))
        o.append(t(x, base + 42, r, 13, MUTED, italic=True, anchor=anc))
    o.append(t(600, 650, 'Noé estuvo en el arca un año y diez días.', 22, INK, font=SERIF, weight='bold'))
    o.append(t(600, 684, '«Y se acordó Dios de Noé… e hizo pasar Dios un viento sobre la tierra» (Gn 8:1)', 17, MUTED, italic=True))
    guardar('esquema-cronologia-diluvio', o)


# 7. La tabla de las naciones
def naciones():
    o = lienzo('La tabla de las naciones', 'Génesis 10: toda la humanidad, en tres familias, desciende de Noé')
    caja(o, 520, 116, 160, 52, claro(INK, .08), INK)
    o.append(t(600, 150, 'Noé', 24, INK, font=SERIF, weight='bold'))
    ramas = [
        ('Jafet', 'hacia el norte y el oeste', ['Gomer', 'Magog', 'Madai (medos)', 'Javán (griegos)', 'Tubal', 'Mesec', 'Tiras'], 200, AZUL),
        ('Cam', 'hacia el sur', ['Cus', 'Mizraim (Egipto)', 'Fut', 'Canaán', '… y Nimrod, hijo de Cus'], 600, ORO),
        ('Sem', 'hacia el oriente', ['Elam', 'Asur (Asiria)', 'Arfaxad', 'Lud', 'Aram (Siria)'], 1000, VERDE),
    ]
    for n, d, hijos, x, c in ramas:
        flecha(o, 600, 170, x, 222, c, w=3)
        caja(o, x - 150, 226, 300, 70, claro(c, .2), c)
        o.append(t(x, 260, n, 24, c, font=SERIF, weight='bold'))
        o.append(t(x, 284, d, 15, MUTED, italic=True))
        for i, h in enumerate(hijos):
            o.append(t(x, 336 + i * 34, h, 18, INK))
    # línea de Sem a Abraham
    flecha(o, 1000, 520, 1000, 560, VERDE, w=3)
    caja(o, 850, 566, 300, 88, '#ffffff', VERDE)
    o.append(t(1000, 598, 'Arfaxad → Sala → Heber', 16, INK))
    o.append(t(1000, 622, '→ Peleg … → Taré', 16, INK))
    o.append(t(1000, 644, '→ Abraham', 17, VERDE, weight='bold'))
    o.append(t(420, 640, 'Unos setenta nombres: pueblos, regiones y ciudades.', 17, INK))
    o.append(t(420, 668, '«Cada cual según su lengua» (Gn 10:5)', 16, MUTED, italic=True))
    o.append(t(600, 728, '«De una sangre ha hecho todo el linaje de los hombres» (Hch 17:26)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-naciones', o)


# 8. El zigurat
def zigurat():
    o = lienzo('Un zigurat de Mesopotamia', 'Torre escalonada de ladrillo con un santuario en la cima (Gn 11:3-4)')
    suelo = 660; px = 3.9  # píxeles por metro
    # Etemenanki: 7 pisos, base 91 m, alto ~91 m (aprox.)
    x0 = 120
    pisos = [(91, 33), (78, 18), (60, 6), (51, 6), (42, 6), (33, 6), (24, 15)]
    y = suelo
    for i, (lado, alto) in enumerate(pisos):
        w = lado * px; h = alto * px
        xc = x0 + 91 * px / 2
        col = '#c9a26b' if i % 2 == 0 else '#b88f58'
        if i == len(pisos) - 1: col = claro(ACC, .5)
        o.append(f'<rect x="{xc - w / 2:.0f}" y="{y - h:.0f}" width="{w:.0f}" height="{h:.0f}" fill="{col}" stroke="{PARDO}" stroke-width="1.5"/>')
        y -= h
    xc = x0 + 91 * px / 2
    o.append(f'<polygon points="{xc - 18:.0f},{suelo} {xc + 18:.0f},{suelo} {xc + 10:.0f},{suelo - 33 * px:.0f} {xc - 10:.0f},{suelo - 33 * px:.0f}" fill="#e2c592" stroke="{PARDO}"/>')
    o.append(t(xc, y - 14, 'santuario', 15, ACC, weight='bold'))
    o.append(f'<line x1="{x0}" y1="{suelo + 24}" x2="{x0 + 91 * px:.0f}" y2="{suelo + 24}" stroke="{INK}" stroke-width="2"/>')
    o.append(t(xc, suelo + 46, 'unos 91 m de lado', 15, INK))
    o.append(f'<line x1="{x0 - 22}" y1="{suelo}" x2="{x0 - 22}" y2="{y:.0f}" stroke="{INK}" stroke-width="2"/>')
    o.append(f'<text x="{x0 - 32}" y="{(suelo + y) / 2:.0f}" font-family="{SANS}" font-size="15" fill="{INK}" text-anchor="middle" transform="rotate(-90 {x0 - 32} {(suelo + y) / 2:.0f})">unos 91 m de alto (aprox.)</text>')
    # edificio de 10 pisos (30 m) y persona
    bx = 620
    o.append(f'<rect x="{bx}" y="{suelo - 30 * px:.0f}" width="{16 * px:.0f}" height="{30 * px:.0f}" fill="{claro(AZUL, .25)}" stroke="{AZUL}"/>')
    for k in range(1, 10):
        yy = suelo - k * 3 * px
        o.append(f'<line x1="{bx}" y1="{yy:.0f}" x2="{bx + 16 * px:.0f}" y2="{yy:.0f}" stroke="{AZUL}" stroke-width="1"/>')
    o.append(t(bx + 8 * px, suelo - 30 * px - 10, 'edificio de 10 pisos (30 m)', 14, AZUL))
    o.append(f'<rect x="{bx + 90}" y="{suelo - 1.7 * px:.0f}" width="3" height="{1.7 * px:.0f}" fill="{INK}"/>')
    o.append(t(bx + 92, suelo - 14, 'persona', 13, INK))
    o.append(f'<line x1="60" y1="{suelo}" x2="1150" y2="{suelo}" stroke="{PARDO}" stroke-width="3"/>')
    lineas(o, 960, 200, ['El Etemenanki de Babilonia:', '«casa del fundamento', 'del cielo y de la tierra»'], 17, INK, salto=26, font=SERIF)
    lineas(o, 960, 300, ['Ladrillo cocido y betún', '«les sirvió el ladrillo', 'en lugar de piedra,', 'y el asfalto en lugar', 'de mezcla» (Gn 11:3)'], 15, MUTED, salto=22)
    lineas(o, 960, 440, ['Medidas según una tablilla', 'babilónica y Heródoto:', 'reconstrucción aproximada.'], 14, MUTED, salto=20, italic=True)
    guardar('esquema-zigurat', o)


# 9. Génesis y Apocalipsis
def genesis_apocalipsis():
    o = lienzo('Del Edén a la nueva Jerusalén', 'El final de la Biblia responde a su comienzo')
    o.append(t(320, 140, 'Génesis 1–3', 24, VERDE, weight='bold', font=SERIF))
    o.append(t(880, 140, 'Apocalipsis 21–22', 24, ORO, weight='bold', font=SERIF))
    pares = [
        ('Dios creó los cielos y la tierra', 'Gn 1:1', 'Un cielo nuevo y una tierra nueva', 'Ap 21:1'),
        ('Dios separa la luz de las tinieblas', 'Gn 1:4', 'No habrá allí más noche', 'Ap 22:5'),
        ('Un río sale del Edén', 'Gn 2:10', 'Un río de agua de vida sale del trono', 'Ap 22:1'),
        ('El árbol de vida, custodiado', 'Gn 3:24', 'El árbol de vida, para las naciones', 'Ap 22:2'),
        ('«Maldita será la tierra»', 'Gn 3:17', '«No habrá más maldición»', 'Ap 22:3'),
        ('Dios se pasea en el huerto', 'Gn 3:8', 'El tabernáculo de Dios con los hombres', 'Ap 21:3'),
        ('Llanto, dolor y muerte', 'Gn 3:16-19', 'Dios enjugará toda lágrima', 'Ap 21:4'),
    ]
    for i, (a, ra, b, rb) in enumerate(pares):
        y = 168 + i * 74
        caja(o, 80, y, 480, 60, claro(VERDE, .12), VERDE, rx=10)
        caja(o, 640, y, 480, 60, claro(ORO, .16), ORO, rx=10)
        o.append(t(320, y + 28, a, 18, INK, font=SERIF))
        o.append(t(320, y + 50, ra, 13, MUTED, italic=True))
        o.append(t(880, y + 28, b, 18, INK, font=SERIF))
        o.append(t(880, y + 50, rb, 13, MUTED, italic=True))
        flecha(o, 566, y + 30, 634, y + 30, GRIS, w=3, punta=10)
    o.append(t(600, 708, '«He aquí, yo hago nuevas todas las cosas» (Ap 21:5)', 20, INK, font=SERIF, italic=True))
    guardar('esquema-genesis-apocalipsis', o)


panorama(); dias(); posturas(); linajes(); longevidad(); cronologia(); naciones(); zigurat(); genesis_apocalipsis()
print('Esquemas generados en', OUT)
