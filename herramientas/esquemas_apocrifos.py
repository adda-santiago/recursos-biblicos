# Uso: python3 herramientas/esquemas_apocrifos.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Los libros apócrifos y pseudoepígrafos» (origen: 'esquema').
# Mismo estilo que esquemas_pactos.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'libros-apocrifos', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; PARDO = '#8a5a2b'; GRAFITO = '#4a4a4a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200
# Colores del recurso: libros comunes, deuterocanónicos, solo ortodoxos, Nuevo Testamento
C_AT, C_DEUT, C_ORT, C_NT = AZUL, ORO, MORADO, VERDE


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub, h):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 64, titulo, 32, INK, font=SERIF))
    o.append(t(600, 98, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Qué libros trae cada Biblia
def canones():
    H = 720
    o = lienzo('Los libros de cada Biblia', 'El Antiguo Testamento cambia según la tradición; el Nuevo Testamento es el mismo', H)
    esc = 9.2  # px por libro
    x0 = 250
    filas = [
        ('Evangélica', '66 libros', [(39, C_AT, '39')], 27),
        ('Católica', '73 libros', [(39, C_AT, '39'), (7, C_DEUT, '+7')], 27),
        ('Ortodoxa griega', 'unos 77 libros', [(39, C_AT, '39'), (7, C_DEUT, '+7'), (4, C_ORT, '+4')], 27),
    ]
    for k, (n, total, segs, nt) in enumerate(filas):
        y = 160 + k * 130
        o.append(t(x0 - 24, y + 34, n, 22, INK, anchor='end', font=SERIF, weight='bold'))
        o.append(t(x0 - 24, y + 60, total, 16, MUTED, anchor='end'))
        x = x0
        for cant, col, et in segs:
            w = cant * esc
            caja(o, x, y, w - 4, 70, col, None, 8)
            o.append(t(x + (w - 4) / 2, y + 44, et, 22, '#fff', weight='bold'))
            x += w
        x += 30
        w = nt * esc
        caja(o, x, y, w - 4, 70, C_NT, None, 8)
        o.append(t(x + (w - 4) / 2, y + 44, '27', 22, '#fff', weight='bold'))
    # rótulos de columnas
    o.append(t(x0 + 39 * esc / 2, 146, 'Antiguo Testamento', 17, MUTED, weight='bold'))
    o.append(t(x0 + 53 * esc + 30 + 27 * esc / 2 - 128, 146, 'Nuevo Testamento', 17, MUTED, weight='bold'))
    # leyenda
    ley = [(C_AT, 'Los libros de la Biblia hebrea'), (C_DEUT, 'Tobías, Judit, 1-2 Macabeos, Sabiduría, Eclesiástico y Baruc, con las adiciones'),
           (C_ORT, '1 Esdras, 3 Macabeos, Oración de Manasés y salmo adicional'), (C_NT, 'Los 27 libros del Nuevo Testamento')]
    for k, (c, s) in enumerate(ley):
        y = 560 + k * 34
        caja(o, 120, y - 18, 24, 24, c, None, 5)
        o.append(t(158, y, s, 18, INK, anchor='start'))
    o.append(t(600, 700, 'La iglesia de Etiopía tiene unos 81 libros: incluye además 1 Enoc y Jubileos.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-canones', o)


# 2. Dónde van las adiciones a Ester y Daniel
def adiciones():
    H = 760
    o = lienzo('Las adiciones griegas a Ester y Daniel', 'Dónde aparecen en las Biblias católicas y ortodoxas', H)
    # Ester
    o.append(t(300, 150, 'Ester', 26, INK, font=SERIF, weight='bold'))
    ester = [('A', 'Sueño de Mardoqueo', 'antes de 1:1'), ('1–3', None, None), ('B', 'Edicto de Amán', 'tras 3:13'), ('4', None, None),
             ('C', 'Oraciones de Mardoqueo y Ester', 'tras 4:17'), ('D', 'Ester ante el rey', 'en lugar de 5:1-2'), ('5–8', None, None),
             ('E', 'Edicto a favor de los judíos', 'tras 8:12'), ('9–10', None, None), ('F', 'Explicación del sueño', 'tras 10:3')]
    y = 180
    for et, desc, donde in ester:
        if desc is None:
            caja(o, 90, y, 420, 34, '#fff', GRIS, 6)
            o.append(t(300, y + 23, f'Capítulo{"s" if "–" in et else ""} {et} (texto hebreo)', 16, MUTED))
            y += 44
        else:
            caja(o, 90, y, 420, 46, '#f3e7c9', C_DEUT, 6)
            o.append(f'<circle cx="118" cy="{y + 23}" r="15" fill="{C_DEUT}"/>')
            o.append(t(118, y + 29, et, 16, '#fff', weight='bold'))
            o.append(t(144, y + 21, desc, 17, INK, anchor='start', font=SERIF))
            o.append(t(144, y + 39, donde, 14, PARDO, anchor='start', italic=True))
            y += 56
    # Daniel
    o.append(t(900, 150, 'Daniel', 26, INK, font=SERIF, weight='bold'))
    dan = [('1–3:23', None), ('Oración de Azarías y cántico de los tres jóvenes', 'Dentro del capítulo 3, entre los versículos 23 y 24'),
           ('3:24–12', None), ('Susana', 'Capítulo 13 en las Biblias católicas'), ('Bel y el dragón', 'Capítulo 14 en las Biblias católicas')]
    y = 180
    for et, donde in dan:
        if donde is None:
            caja(o, 690, y, 420, 70, '#fff', GRIS, 6)
            o.append(t(900, y + 42, f'Daniel {et} (texto hebreo y arameo)', 16, MUTED))
            y += 82
        else:
            caja(o, 690, y, 420, 70, '#f3e7c9', C_DEUT, 6)
            o.append(t(900, y + 30, et, 17, INK, font=SERIF, weight='bold'))
            o.append(t(900, y + 54, donde, 14, PARDO, italic=True))
            y += 82
    o.append(t(600, 725, 'En amarillo, lo que solo está en la versión griega. Jerónimo puso las de Ester al final del libro.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-adiciones', o)


canones()
adiciones()
print('Esquemas en', OUT)
