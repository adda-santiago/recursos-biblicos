# Uso: python3 herramientas/esquemas_introduccion.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Introducción al Nuevo Testamento» (origen: 'esquema').
# Mismo estilo que esquemas_cristo.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
# Fechas aproximadas: las de Cronología del Nuevo Testamento (cronología única del sitio) y de parte5.js.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'introduccion-nuevo-testamento', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200
# Colores fijos del recurso, uno por grupo de libros
EVA, HCH, PAB, GEN, APO = ORO, VERDE, AZUL, MORADO, ROJO
GRUPO = {'e': EVA, 'h': HCH, 'p': PAB, 'g': GEN, 'a': APO}


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub=None, h=760):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 64, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 98, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10, op=1):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}" fill-opacity="{op}"{b}/>')


# 1. Los 27 libros en cinco grupos
def libros27():
    o = lienzo('Los 27 libros del Nuevo Testamento', 'Agrupados como aparecen en la Biblia', h=680)
    grupos = [
        ('Evangelios', EVA, ['Mateo', 'Marcos', 'Lucas', 'Juan']),
        ('Historia', HCH, ['Hechos']),
        ('Cartas de Pablo', PAB, ['Romanos', '1 Corintios', '2 Corintios', 'Gálatas', 'Efesios', 'Filipenses', 'Colosenses',
                                  '1 Tesalonicenses', '2 Tesalonicenses', '1 Timoteo', '2 Timoteo', 'Tito', 'Filemón']),
        ('Hebreos y cartas generales', GEN, ['Hebreos', 'Santiago', '1 Pedro', '2 Pedro', '1 Juan', '2 Juan', '3 Juan', 'Judas']),
        ('Profecía', APO, ['Apocalipsis']),
    ]
    # Columnas: evangelios+historia | Pablo (2 columnas) | generales | profecía
    def columna(x, y0, nombre, color, libros, ancho=200, cuenta=True):
        o.append(t(x + ancho / 2, y0, nombre, 20 if cuenta else 16, color if cuenta else MUTED, weight='bold', font=SERIF if cuenta else SANS))
        if cuenta:
            o.append(t(x + ancho / 2, y0 + 22, f'{len(libros)} libro' + ('s' if len(libros) > 1 else ''), 15, MUTED))
        y = y0 + 40
        for l in libros:
            caja(o, x, y, ancho, 34, color, op=0.16)
            o.append(f'<rect x="{x}" y="{y}" width="6" height="34" fill="{color}"/>')
            o.append(t(x + 18, y + 23, l, 17, INK, 'start'))
            y += 40
        return y
    columna(40, 150, 'Evangelios', EVA, grupos[0][2])
    columna(40, 390, 'Historia', HCH, grupos[1][2])
    o.append(t(600, 150, 'Cartas de Pablo', 20, PAB, weight='bold', font=SERIF))
    o.append(t(600, 172, '13 libros: 9 a iglesias, 4 a personas', 15, MUTED))
    a_iglesias = grupos[2][2][:9]; a_personas = grupos[2][2][9:]
    columna(290, 200, 'A iglesias', PAB, a_iglesias, 200, cuenta=False)
    columna(510, 200, 'A personas', PAB, a_personas, 200, cuenta=False)
    columna(760, 150, 'Hebreos y generales', GEN, grupos[3][2])
    columna(980, 150, 'Profecía', APO, grupos[4][2], 180)
    o.append(t(600, 650, '5 libros narran · 21 son cartas · 1 es profecía', 20, INK, font=SERIF, italic=True))
    guardar('esquema-27-libros', o)


# 2. Las partes de una carta antigua (Filemón)
def carta():
    o = lienzo('Cómo era una carta del siglo I', 'Las partes de una carta antigua, con el ejemplo de Filemón', h=760)
    partes = [
        ('Remitente', 'Pablo, prisionero de Jesucristo, y el hermano Timoteo', 'v. 1', AZUL),
        ('Destinatarios', 'al amado Filemón… y a la iglesia que está en tu casa', 'vv. 1-2', AZUL),
        ('Saludo', 'Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo', 'v. 3', ORO),
        ('Acción de gracias', 'Doy gracias a mi Dios, haciendo siempre memoria de ti en mis oraciones', 'vv. 4-7', VERDE),
        ('Cuerpo', 'te ruego por mi hijo Onésimo… recíbele como a mí mismo', 'vv. 8-21', INK),
        ('Planes', 'prepárame también alojamiento', 'v. 22', MUTED),
        ('Saludos', 'Te saludan Epafras… Marcos, Aristarco, Demas y Lucas', 'vv. 23-24', MORADO),
        ('Despedida', 'La gracia de nuestro Señor Jesucristo sea con vuestro espíritu', 'v. 25', ROJO),
    ]
    y = 140
    for n, ej, v, c in partes:
        alto = 100 if n == 'Cuerpo' else 62
        caja(o, 80, y, 1040, alto - 8, '#ffffff', GRIS)
        o.append(f'<rect x="80" y="{y}" width="10" height="{alto - 8}" rx="3" fill="{c}"/>')
        o.append(t(110, y + 34, n, 21, c if c != MUTED else INK, 'start', 'bold', SERIF))
        o.append(t(330, y + 34, f'«{ej}»', 18, INK, 'start', italic=True))
        o.append(t(1100, y + 34, v, 16, MUTED, 'end'))
        if n == 'Cuerpo':
            o.append(t(330, y + 66, 'La parte principal: enseñanza, respuestas, ruegos y exhortaciones', 16, MUTED, 'start'))
        y += alto
    o.append(t(600, 735, 'Pablo cambia el saludo griego habitual por «gracia y paz».', 18, MUTED, font=SERIF, italic=True))
    guardar('esquema-carta', o)


# 3. Cuándo se escribió cada libro (línea de tiempo)
def orden():
    H = 760
    o = lienzo('Cuándo se escribió cada libro', 'Fechas aproximadas, del año 40 al 100 d.C.', h=H)
    x0, x1, a0, a1 = 90, 1130, 40, 100
    X = lambda a: x0 + (a - a0) * (x1 - x0) / (a1 - a0)
    eje = 640
    o.append(f'<line x1="{x0}" y1="{eje}" x2="{x1}" y2="{eje}" stroke="{INK}" stroke-width="2"/>')
    for a in range(40, 101, 10):
        o.append(f'<line x1="{X(a):.0f}" y1="{eje}" x2="{X(a):.0f}" y2="{eje + 10}" stroke="{INK}" stroke-width="2"/>')
        o.append(t(f'{X(a):.0f}', eje + 34, str(a), 17, INK))
    # hitos
    for a, n, lado in [(64, 'Nerón persigue (64)', 'end'), (70, 'Cae el templo (70)', 'start')]:
        o.append(f'<line x1="{X(a):.0f}" y1="135" x2="{X(a):.0f}" y2="{eje}" stroke="{ACC}" stroke-width="2" stroke-dasharray="6 6" stroke-opacity="0.45"/>')
        o.append(t(f'{X(a) + (6 if lado == "start" else -6):.0f}', 132, n, 15, ACC, lado, 'bold'))
    # libros: (desde, hasta, nombre, grupo)
    libros = [
        (45, 49, 'Santiago', 'g'), (48, 49, 'Gálatas', 'p'), (50, 51, '1 y 2 Tesalonicenses', 'p'), (50, 60, 'Mateo', 'e'),
        (55, 56, '1 Corintios', 'p'), (55, 65, 'Marcos', 'e'), (55.5, 56.5, '2 Corintios', 'p'), (56.5, 57.5, 'Romanos', 'p'),
        (60, 61, 'Lucas', 'e'), (60, 61, 'Efesios, Colosenses, Filemón', 'p'), (61, 62, 'Filipenses', 'p'),
        (61.5, 62.5, 'Hechos', 'h'), (62, 64, '1 Timoteo, Tito', 'p'), (63, 64, '1 Pedro', 'g'), (64, 67, '2 Pedro', 'g'),
        (64, 68, 'Hebreos', 'g'), (65, 70, 'Judas', 'g'), (66, 67, '2 Timoteo', 'p'), (85, 90, 'Juan', 'e'),
        (85, 95, '1, 2 y 3 Juan', 'g'), (94.5, 95.5, 'Apocalipsis', 'a'),
    ]
    y = 160
    for d, h, n, g in libros:
        c = GRUPO[g]
        xa, xb = X(d), max(X(h), X(d) + 10)
        o.append(f'<rect x="{xa:.0f}" y="{y}" width="{xb - xa:.0f}" height="16" rx="5" fill="{c}"/>')
        if xb < 760:
            o.append(t(f'{xb + 8:.0f}', y + 14, n, 15, INK, 'start'))
        else:
            o.append(t(f'{xa - 8:.0f}', y + 14, n, 15, INK, 'end'))
        y += 22
    # leyenda
    ley = [('Evangelios', EVA), ('Hechos', HCH), ('Cartas de Pablo', PAB), ('Hebreos y generales', GEN), ('Apocalipsis', APO)]
    lx = 140
    for n, c in ley:
        o.append(f'<rect x="{lx}" y="712" width="18" height="18" rx="4" fill="{c}"/>')
        o.append(t(lx + 26, 727, n, 16, INK, 'start'))
        lx += 26 + len(n) * 9 + 50
    guardar('esquema-orden', o)


# 4. Cuatro retratos de Jesús
def cuatro():
    o = lienzo('Cuatro retratos de un mismo Cristo', 'Lo que cada evangelio destaca de Jesús', h=720)
    cols = [
        ('Mateo', 'El Rey', 'prometido', '«hijo de David, hijo de Abraham»', 'Mt 1:1', 'Creyentes judíos', 'Cumple las profecías', EVA),
        ('Marcos', 'El Siervo', 'en acción', '«no vino para ser servido, sino para servir»', 'Mr 10:45', 'Creyentes de Roma', 'Acción: «en seguida»', VERDE),
        ('Lucas', 'El Hombre', 'Salvador de todos', '«vino a buscar y a salvar lo que se había perdido»', 'Lc 19:10', 'Teófilo y los gentiles', 'Oración, Espíritu, los pobres', AZUL),
        ('Juan', 'El Hijo', 'eterno de Dios', '«para que creáis que Jesús es el Cristo»', 'Jn 20:31', 'Creyentes de Asia', 'Señales y «Yo soy»', MORADO),
    ]
    w, gap = 255, 26
    x = (W - (4 * w + 3 * gap)) / 2
    for nom, tit, sub, ver, ref, lect, ras, c in cols:
        caja(o, x, 140, w, 520, '#ffffff', GRIS, 14)
        o.append(f'<rect x="{x}" y="140" width="{w}" height="12" rx="6" fill="{c}"/>')
        cx = x + w / 2
        o.append(t(cx, 200, nom, 30, c, weight='bold', font=SERIF))
        o.append(t(cx, 262, tit, 26, INK, font=SERIF))
        o.append(t(cx, 292, sub, 18, MUTED, italic=True))
        # versículo en dos o tres líneas
        palabras, lineas, ln = ver.split(), [], ''
        for p in palabras:
            if len(ln + ' ' + p) > 24:
                lineas.append(ln); ln = p
            else:
                ln = (ln + ' ' + p).strip()
        lineas.append(ln)
        yy = 350
        for l in lineas:
            o.append(t(cx, yy, l, 17, INK, italic=True, font=SERIF)); yy += 24
        o.append(t(cx, yy + 4, ref, 15, MUTED))
        o.append(f'<line x1="{x + 30}" y1="490" x2="{x + w - 30}" y2="490" stroke="{GRIS}" stroke-width="2"/>')
        o.append(t(cx, 525, 'Primeros lectores', 14, MUTED))
        o.append(t(cx, 550, lect, 17, INK))
        o.append(t(cx, 590, 'Rasgo propio', 14, MUTED))
        o.append(t(cx, 615, ras, 16, INK))
        x += w + gap
    o.append(t(600, 700, 'Un solo Señor, visto por cuatro testigos', 20, INK, font=SERIF, italic=True))
    guardar('esquema-cuatro', o)


# 5. Nueve autores, un solo Espíritu
def autores():
    o = lienzo('Nueve autores, un solo Autor', 'Los escritores del Nuevo Testamento y sus libros', h=740)
    filas = [
        ('Pablo', '13 cartas: Romanos a Filemón', [PAB] * 13, 'Apóstol'),
        ('Lucas', 'Lucas, Hechos', [EVA, HCH], 'Colaborador'),
        ('Juan', 'Juan, 1, 2 y 3 Juan, Apocalipsis', [EVA, GEN, GEN, GEN, APO], 'Apóstol'),
        ('Pedro', '1 y 2 Pedro', [GEN, GEN], 'Apóstol'),
        ('Mateo', 'Mateo', [EVA], 'Apóstol'),
        ('Marcos', 'Marcos', [EVA], 'Colaborador'),
        ('Santiago', 'Santiago', [GEN], 'Hermano del Señor'),
        ('Judas', 'Judas', [GEN], 'Hermano del Señor'),
        ('Autor de Hebreos', 'Hebreos', [GEN], 'Colaborador'),
    ]
    y = 140
    for n, libros, cs, rel in filas:
        k = len(cs)
        o.append(t(250, y + 26, n, 21, INK, 'end', 'bold', SERIF))
        o.append(t(250, y + 46, rel, 13, MUTED, 'end'))
        for i, c in enumerate(cs):
            caja(o, 275 + i * 34, y + 8, 28, 36, c, rx=5)
        o.append(t(275 + k * 34 + 14, y + 33, libros, 17, INK, 'start'))
        y += 58
    # banda del Espíritu
    ley = [('Evangelios', EVA), ('Hechos', HCH), ('Cartas de Pablo', PAB), ('Hebreos y generales', GEN), ('Apocalipsis', APO)]
    lx = 760
    for i, (nl, c) in enumerate(ley):
        o.append(f'<rect x="{lx}" y="{300 + i * 30}" width="16" height="16" rx="4" fill="{c}"/>')
        o.append(t(lx + 24, 314 + i * 30, nl, 15, INK, 'start'))
    caja(o, 80, 672, 1040, 46, ORO, rx=12, op=0.18)
    o.append(t(600, 702, '«Los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21)', 18, INK, font=SERIF, italic=True))
    guardar('esquema-autores', o)


libros27(); carta(); orden(); cuatro(); autores()
print('Esquemas generados en', OUT)
