# Uso: python3 herramientas/esquemas_apocalipsis.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del estudio del libro de Apocalipsis (origen: 'esquema').
# Mismo estilo que herramientas/esquemas_escatologia.py.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'apocalipsis', 'img') + os.sep
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#8a8f98'; GRIS = '#c9c6be'
COL = {'visto': '#7a3fa0', 'iglesia': '#2f7d4a', 'cielo': '#2a6fb0', 'tribulacion': '#b03a2e',
       'venida': '#7a3fa0', 'milenio': '#c08a1e', 'eternidad': '#1e8a8a', 'interludio': '#8a8f98'}
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def svg(cuerpo, titulo, sub):
    o = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">',
         f'<rect width="1200" height="760" fill="{BG}"/>',
         t(600, 62, titulo, 30, font=SERIF), t(600, 94, sub, 18, MUTED)]
    return '\n'.join(o + cuerpo + ['</svg>'])


def estructura():
    o = []
    # Tres partes de 1:19
    partes = [(60, 250, 'visto', 'Las cosas que has visto', 'Capítulo 1', ['Cristo glorificado', 'entre los candeleros']),
              (330, 250, 'iglesia', 'Las que son', 'Capítulos 2–3', ['Las siete iglesias:', 'la era de la iglesia']),
              (600, 540, 'tribulacion', 'Las que han de ser después de estas', 'Capítulos 4–22', ['Lo que vendrá después de', 'la era de la iglesia'])]
    for x, w, c, n, caps, lineas in partes:
        o.append(f'<rect x="{x}" y="130" width="{w}" height="150" rx="14" fill="#fff" stroke="{COL[c]}" stroke-width="4"/>')
        o.append(t(x + w / 2, 172, n, 22 if w < 400 else 24, COL[c], weight='bold', font=SERIF))
        o.append(t(x + w / 2, 202, caps, 18, INK, weight='bold'))
        for k, l in enumerate(lineas):
            o.append(t(x + w / 2, 236 + k * 24, l, 17, MUTED))
    o.append(t(600, 318, '«Escribe las cosas que has visto, y las que son, y las que han de ser después de estas» (Ap 1:19)', 17, INK, italic=True, font=SERIF))
    # Barra de capítulos
    Y = 380; X0 = 60; W = 1080 / 22
    tramos = [(1, 1, 'visto'), (2, 3, 'iglesia'), (4, 5, 'cielo'), (6, 18, 'tribulacion'), (19, 19, 'venida'), (20, 20, 'milenio'), (21, 22, 'eternidad')]
    for a, b, c in tramos:
        x = X0 + (a - 1) * W
        o.append(f'<rect x="{x:.1f}" y="{Y}" width="{(b - a + 1) * W - 3:.1f}" height="44" rx="6" fill="{COL[c]}"/>')
    for n in range(1, 23):
        o.append(t(X0 + (n - 0.5) * W, Y + 29, str(n), 16, '#fff', weight='bold'))
    # Rótulos de la tercera parte
    rot = [(4, 5, 'cielo', 'El trono', 'y el Cordero', '4–5'),
           (6, 18, 'tribulacion', 'La tribulación: sellos, trompetas y copas', 'Semana setenta de Daniel (Dn 9:27)', '6–18'),
           (19, 19, 'venida', 'Segunda', 'venida', '19'),
           (20, 20, 'milenio', 'Milenio y', 'gran trono', '20'),
           (21, 22, 'eternidad', 'Cielos y', 'tierra nueva', '21–22')]
    for a, b, c, l1, l2, caps in rot:
        cx = X0 + ((a - 1) + (b - a + 1) / 2) * W
        bajo = 54 if a == 20 else 0  # el milenio va más abajo para no chocar con sus vecinos
        o.append(f'<line x1="{cx:.1f}" y1="{Y + 48}" x2="{cx:.1f}" y2="{Y + 70 + bajo}" stroke="{COL[c]}" stroke-width="3"/>')
        if b - a > 3:
            o.append(t(cx, Y + 96, l1, 19, COL[c], weight='bold', font=SERIF))
            o.append(t(cx, Y + 120, l2, 16, MUTED))
        else:
            o.append(t(cx, Y + 96 + bajo, l1, 15, COL[c], weight='bold'))
            o.append(t(cx, Y + 116 + bajo, l2, 15, COL[c], weight='bold'))
    # Interludios dentro de 6–18
    o.append(t(560, Y + 196, 'Dentro de 6–18, los paréntesis (7; 10:1–11:14; 12–14; 17–18) explican lo que pasa mientras avanzan los juicios', 16, MUTED, italic=True))
    o.append(t(600, Y + 250, 'Lectura futurista: la iglesia aparece en la tierra en los capítulos 1–3 y vuelve a verse con Cristo en 19', 16, INK))
    o.append(t(600, Y + 274, '(Ap 19:7-8, 14); los capítulos 4–18 describen la tribulación sobre la tierra.', 16, INK))
    return svg(o, 'El bosquejo de Apocalipsis', 'El propio libro da su estructura en 1:19')


def septenarios():
    o = []
    filas = [
        ('Siete sellos', '6:1–8:1', 160, 'tribulacion', 0.55, 'Interludio: los 144.000 y la gran multitud (7)'),
        ('Siete trompetas', '8:2–11:19', 330, 'tribulacion', 0.78, 'Interludio: el librito y los dos testigos (10:1–11:14)'),
        ('Siete copas', '15:1–16:21', 560, 'tribulacion', 1.0, 'Antes: los personajes del conflicto (12–14)'),
    ]
    for n, ref, Y, c, op, inter in filas:
        o.append(t(70, Y + 8, n, 24, INK, 'start', 'bold', SERIF))
        o.append(t(70, Y + 34, ref, 16, MUTED, 'start'))
        for k in range(7):
            x = 330 + k * 92
            o.append(f'<circle cx="{x}" cy="{Y}" r="30" fill="{COL[c]}" opacity="{op}"/>')
            o.append(t(x, Y + 8, str(k + 1), 22, '#fff', weight='bold'))
        o.append(f'<rect x="300" y="{Y + 46}" width="580" height="34" rx="8" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
        o.append(t(590, Y + 69, inter, 16, MUTED, italic=True))
    # Flechas: el 7.º sello contiene las trompetas; la 7.ª trompeta contiene las copas
    o.append('<defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1f2430"/></marker></defs>')
    x7 = 330 + 6 * 92
    o.append(f'<path d="M{x7 + 32},{160} C990,160 990,330 {x7 + 34},{330}" fill="none" stroke="{INK}" stroke-width="2.5" marker-end="url(#f)"/>')
    o.append(t(1100, 232, 'El séptimo sello', 15, INK, 'middle', 'bold'))
    o.append(t(1100, 252, 'abre las trompetas', 15, INK))
    o.append(t(1100, 272, '(8:1-2)', 15, INK))
    o.append(f'<path d="M{x7 + 32},{330} C990,330 990,560 {x7 + 34},{560}" fill="none" stroke="{INK}" stroke-width="2.5" marker-end="url(#f)"/>')
    o.append(t(1100, 420, 'La séptima trompeta', 15, INK, 'middle', 'bold'))
    o.append(t(1100, 440, 'anuncia el reino', 15, INK))
    o.append(t(1100, 460, 'y abre las copas', 15, INK))
    o.append(t(1100, 480, '(11:15; 15:1)', 15, INK))
    o.append(t(600, 690, 'Cada serie sale de la anterior y es más intensa: un cuarto de la tierra (6:8), un tercio (8:7-12), toda la tierra (16).', 16, INK))
    o.append(t(600, 716, 'Después vienen la caída de Babilonia (17–18) y la venida de Cristo (19).', 16, INK))
    return svg(o, 'Los septenarios de los juicios', 'Sellos, trompetas y copas, con sus paréntesis')


os.makedirs(OUT, exist_ok=True)
for nombre, f in [('apo-estructura', estructura), ('apo-septenarios', septenarios)]:
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write(f())
    print('escrito', nombre)
