# Uso: python3 herramientas/esquemas_entre.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Entre los Testamentos» (origen: 'esquema').
# Mismo estilo que esquemas_pactos.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'entre-los-testamentos', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
PERSA = '#4a6b7c'; GRIEGO = '#c08a1e'; SELEUCIDA = '#7a3fa0'; ASMONEO = '#5e7d4f'; ROMANO = '#9e2b25'; PARDO = '#8a5a2b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W = 1200


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x:.0f}" y="{y:.0f}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub, h):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 60, titulo, 32, INK, font=SERIF))
    o.append(t(600, 94, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def caja(o, x, y, w, h, fondo, borde=None, rx=10, grosor=2):
    b = f' stroke="{borde}" stroke-width="{grosor}"' if borde else ''
    o.append(f'<rect x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h:.0f}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Los cinco períodos
def periodos():
    H = 700
    o = lienzo('De Malaquías a Mateo', 'Los cinco períodos entre los testamentos (430–4 a.C.)', H)
    X0, X1, A0, A1 = 70, 1130, -430, -4
    X = lambda a: X0 + (a - A0) * (X1 - X0) / (A1 - A0)
    bandas = [(-430, -332, 'Persa', PERSA, 'Yehud bajo Persia'), (-332, -198, 'Alejandro y Ptolomeos', GRIEGO, 'Judea bajo Egipto'),
              (-198, -142, 'Seléucida', SELEUCIDA, 'Judea bajo Siria'), (-142, -63, 'Asmoneo', ASMONEO, 'Judea independiente'),
              (-63, -4, 'Romano', ROMANO, 'Roma y Herodes')]
    Y = 200
    for a, b, n, c, d in bandas:
        caja(o, X(a) + 2, Y, X(b) - X(a) - 4, 92, c, None, 8)
        o.append(t((X(a) + X(b)) / 2, Y + 40, n, 19 if X(b) - X(a) > 160 else 17, '#fff', weight='bold'))
        o.append(t((X(a) + X(b)) / 2, Y + 66, d, 14, '#fff'))
    # escala
    for a in range(-400, 0, 50):
        x = X(a)
        o.append(f'<line x1="{x:.0f}" y1="{Y + 98}" x2="{x:.0f}" y2="{Y + 108}" stroke="{MUTED}" stroke-width="2"/>')
        o.append(t(x, Y + 128, f'{-a} a.C.', 14, MUTED))
    o.append(t(X(-430), Y - 14, '430 a.C.', 14, MUTED, anchor='start'))
    o.append(t(X(-4), Y - 14, '4 a.C.', 14, MUTED, anchor='end'))
    # hechos, en tres filas
    hechos = [(-430, 'Malaquías', 0), (-407, 'Elefantina', 1), (-332, 'Alejandro', 0), (-301, 'Ipso', 1), (-260, 'Septuaginta', 2),
              (-200, 'Panión', 0), (-175, 'Jasón', 2), (-167, 'Rebelión macabea', 1, '167–164 a.C.'), (-142, 'Independencia', 0),
              (-111, 'Gerizim', 2), (-63, 'Pompeyo', 0), (-37, 'Herodes rey', 1), (-20, 'Templo', 2), (-5, 'Jesús', 0)]
    base = Y + 160
    for h in hechos:
        x = X(h[0]); y = base + h[2] * 70
        o.append(f'<line x1="{x:.0f}" y1="{Y + 92}" x2="{x:.0f}" y2="{y - 6}" stroke="{GRIS}" stroke-width="1.5" stroke-dasharray="4 4"/>')
    for h in hechos:
        a, s, fila = h[:3]
        fecha = h[3] if len(h) > 3 else f'{-a} a.C.'
        x = X(a); y = base + fila * 70
        ancho = max(len(s) * 9.5, len(fecha) * 7.5) + 12
        o.append(f'<rect x="{x - ancho / 2:.0f}" y="{y + 18:.0f}" width="{ancho:.0f}" height="40" fill="{BG}"/>')
        o.append(f'<circle cx="{x:.0f}" cy="{y + 8}" r="6" fill="{INK}"/>')
        o.append(t(x, y + 34, s, 15, INK, weight='bold'))
        o.append(t(x, y + 52, fecha, 13, MUTED))
    o.append(t(600, 670, 'Dios «muda los tiempos y las edades; quita reyes, y pone reyes» (Daniel 2:21).', 18, INK, font=SERIF, italic=True))
    guardar('esquema-periodos', o)


# 2. La familia asmonea
def asmoneos():
    H = 860
    o = lienzo('Los asmoneos', 'De Matatías a Mariamne, la esposa de Herodes · en color, los que gobernaron', H)
    BW, BH = 176, 58

    def nodo(cx, cy, n, d, gob=False, color=ASMONEO):
        caja(o, cx - BW / 2, cy - BH / 2, BW, BH, color if gob else '#fff', color, 10)
        o.append(t(cx, cy - 4, n, 17, '#fff' if gob else INK, weight='bold', font=SERIF))
        o.append(t(cx, cy + 18, d, 13, '#fff' if gob else MUTED))
        return (cx, cy)

    def linea(a, b):
        (x1, y1), (x2, y2) = a, b
        ym = (y1 + y2) / 2
        o.append(f'<path d="M{x1:.0f},{y1 + BH / 2:.0f} V{ym:.0f} H{x2:.0f} V{y2 - BH / 2:.0f}" fill="none" stroke="{MUTED}" stroke-width="2"/>')

    def matrimonio(a, b):
        (x1, y1), (x2, _) = a, b
        o.append(f'<line x1="{x1 + BW / 2:.0f}" y1="{y1 - 4}" x2="{x2 - BW / 2:.0f}" y2="{y1 - 4}" stroke="{ACC}" stroke-width="2"/>')
        o.append(f'<line x1="{x1 + BW / 2:.0f}" y1="{y1 + 4}" x2="{x2 - BW / 2:.0f}" y2="{y1 + 4}" stroke="{ACC}" stroke-width="2"/>')

    y = [160, 270, 380, 490, 600, 710, 810]
    mat = nodo(600, y[0], 'Matatías', '† 166 a.C.')
    hijos = [(130, 'Juan', '† 160 a.C.', False), (360, 'Simón', '142–134 a.C.', True), (600, 'Judas Macabeo', '166–160 a.C.', True),
             (830, 'Eleazar', '† 162 a.C.', False), (1065, 'Jonatán', '160–143 a.C.', True)]
    H1 = {}
    for x, n, d, g in hijos:
        H1[n] = nodo(x, y[1], n, d, g); linea(mat, H1[n])
    hir = nodo(360, y[2], 'Juan Hircano I', '134–104 a.C.', True); linea(H1['Simón'], hir)
    ari1 = nodo(200, y[3], 'Aristóbulo I', '104–103 a.C.', True); linea(hir, ari1)
    jan = nodo(470, y[3], 'Alejandro Janeo', '103–76 a.C.', True); linea(hir, jan)
    sal = nodo(740, y[3], 'Salomé Alejandra', '76–67 a.C.', True); matrimonio(jan, sal)
    # hijos de Janeo y Salomé: línea desde el punto medio del matrimonio
    mx = (470 + 740) / 2
    o.append(f'<line x1="{mx:.0f}" y1="{y[3] + 4}" x2="{mx:.0f}" y2="{(y[3] + y[4]) / 2:.0f}" stroke="{MUTED}" stroke-width="2"/>')
    hir2 = nodo(470, y[4], 'Hircano II', '63–40 a.C.', True)
    ari2 = nodo(840, y[4], 'Aristóbulo II', '67–63 a.C.', True)
    for n in (hir2, ari2):
        o.append(f'<path d="M{mx:.0f},{(y[3] + y[4]) / 2:.0f} H{n[0]:.0f} V{y[4] - BH / 2:.0f}" fill="none" stroke="{MUTED}" stroke-width="2"/>')
    alejandra = nodo(470, y[5], 'Alejandra', 'hija de Hircano II'); linea(hir2, alejandra)
    alejandro = nodo(760, y[5], 'Alejandro', 'hijo de Aristóbulo II'); linea(ari2, alejandro)
    antig = nodo(1040, y[5], 'Antígono', '40–37 a.C.', True); linea(ari2, antig)
    matrimonio(alejandra, alejandro)
    mx2 = (470 + 760) / 2
    mar = nodo(mx2, y[6], 'Mariamne', '† 29 a.C.')
    o.append(f'<line x1="{mx2:.0f}" y1="{y[5] + 4}" x2="{mx2:.0f}" y2="{y[6] - BH / 2:.0f}" stroke="{MUTED}" stroke-width="2"/>')
    her = nodo(mx2 + 300, y[6], 'Herodes', 'rey 37–4 a.C.', True, ROMANO); matrimonio(mar, her)
    caja(o, 40, 790, 22, 22, ASMONEO, None, 5); o.append(t(72, 807, 'Gobernó Judea', 15, INK, anchor='start'))
    o.append(f'<line x1="40" y1="836" x2="62" y2="836" stroke="{ACC}" stroke-width="2"/><line x1="40" y1="844" x2="62" y2="844" stroke="{ACC}" stroke-width="2"/>')
    o.append(t(72, 846, 'Matrimonio', 15, INK, anchor='start'))
    guardar('esquema-asmoneos', o)


periodos()
asmoneos()
print('Esquemas en', OUT)
