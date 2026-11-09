# Uso: python3 herramientas/esquemas_gramatica.py  (desde la raíz del repositorio)
# Genera los esquemas SVG de «Vocabulario y gramática básica del hebreo bíblico» (origen: 'esquema').
# Mismo estilo que esquemas_interpretar.py. El esquema de frecuencia se calcula con
# herramientas/gramatica/frecuencias.tsv (gramatica_lista.py).
import os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(R, 'public', 'apps', 'gramatica-hebrea', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; TEAL = '#1e8a8a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
HEB = "'SBL Hebrew', 'Ezra SIL', 'Noto Serif Hebrew', 'Times New Roman', serif"
W, H = 1200, 896
TOTAL = 295957

def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'

def he(x, y, s, size=40, fill=INK, anchor='middle'):
    return f'<text x="{x}" y="{y}" font-family="{HEB}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" direction="rtl" unicode-bidi="embed">{s}</text>'

def lienzo(titulo, sub=None):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">', f'<rect width="{W}" height="{H}" fill="{BG}"/>',
         '<defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke"/></marker></defs>']
    o.append(t(600, 70, titulo, 34, INK, font=SERIF))
    if sub: o.append(t(600, 106, sub, 19, MUTED))
    return o

def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))

# 1. Una raíz, una familia
def raiz():
    o = lienzo('Una raíz, una familia de palabras', 'Las tres consonantes מ־ל־ך llevan la idea de «reinar»')
    cx, cy = 600, 480
    hojas = [('מֶלֶךְ', 'mélej', 'rey', 600, 210, AZUL), ('מָלַךְ', 'malaj', 'reinó', 960, 340, VERDE), ('מַלְכָּה', 'malká', 'reina', 900, 700, ORO),
             ('מַמְלָכָה', 'mamlajá', 'reino', 300, 700, MORADO), ('מַלְכוּת', 'maljut', 'reinado', 240, 340, TEAL)]
    for w, tr, es, x, y, c in hojas:
        o.append(f'<line x1="{cx}" y1="{cy}" x2="{x}" y2="{y}" stroke="{GRIS}" stroke-width="4"/>')
    o.append(f'<circle cx="{cx}" cy="{cy}" r="120" fill="{ACC}"/>')
    o.append(he(cx, cy + 22, 'מ ל ך', 76, '#fff'))
    o.append(t(cx, cy + 70, 'm · l · j', 20, '#fff'))
    for w, tr, es, x, y, c in hojas:
        o.append(f'<rect x="{x-115}" y="{y-70}" width="230" height="140" rx="16" fill="#fff" stroke="{c}" stroke-width="3"/>')
        o.append(he(x, y - 8, w, 46, c))
        o.append(t(x, y + 26, tr, 19, INK, weight='bold'))
        o.append(t(x, y + 50, es, 18, MUTED, italic=True))
    o.append(t(600, 850, 'Las vocales, los prefijos y las terminaciones forman palabras distintas; las tres consonantes no cambian.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-raiz', o)

# 2. Curva de frecuencia
def frecuencia():
    filas = [l.rstrip('\n').split('\t') for l in open(os.path.join(R, 'herramientas', 'gramatica', 'frecuencias.tsv'), encoding='utf-8')][1:]
    v = [int(f[1]) for f in filas]
    acc = []; s = 0
    for x in v:
        s += x; acc.append(s / TOTAL)
    o = lienzo('Pocas palabras cubren mucho texto', 'Parte del texto hebreo que cubren las palabras más frecuentes (sin prefijos ni arameo)')
    x0, y0, x1, y1 = 140, 780, 1120, 170   # ejes
    sx = lambda n: x0 + (x1 - x0) * n / 751
    sy = lambda p: y0 - (y0 - y1) * p
    for p in (0, .25, .5, .75, 1):
        o.append(f'<line x1="{x0}" y1="{sy(p):.0f}" x2="{x1}" y2="{sy(p):.0f}" stroke="{GRIS}" stroke-width="1"/>')
        o.append(t(x0 - 14, sy(p) + 6, f'{int(p*100)} %', 17, MUTED, anchor='end'))
    for n in (0, 100, 200, 300, 400, 500, 600, 700):
        o.append(t(sx(n), y0 + 32, str(n), 17, MUTED))
    o.append(t(630, y0 + 58, 'Número de palabras aprendidas, de la más frecuente a la menos frecuente', 18, INK))
    pts = ' '.join(f'{sx(i+1):.1f},{sy(a):.1f}' for i, a in enumerate(acc))
    o.append(f'<polygon points="{x0},{y0} {pts} {sx(751):.1f},{y0}" fill="{ACC}" fill-opacity="0.12"/>')
    o.append(f'<polyline points="{pts}" fill="none" stroke="{ACC}" stroke-width="5" stroke-linejoin="round"/>')
    for n, txt in ((1, 'אֵת sola: 3,7 %'), (101, '101 palabras: {:.0f} %'), (421, '421 palabras: {:.0f} %'), (751, '751 palabras: {:.0f} %')):
        a = acc[n - 1]; x, y = sx(n), sy(a)
        lab = txt.format(a * 100) if '{' in txt else txt
        o.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="9" fill="{ACC}"/>')
        dx = 18 if n < 700 else -18
        o.append(t(x + dx, y - (34 if n == 421 else 18), lab, 20, INK, anchor='start' if n < 700 else 'end', weight='bold'))
    o.append(t(600, 884, 'Al principio cada palabra nueva cubre mucho texto; después la curva se aplana.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-frecuencia', o)

# 3. La cadena constructa
def constructo():
    o = lienzo('La cadena constructa', 'Dos sustantivos juntos: el primero «de» el segundo')
    # derecha a izquierda: primera palabra a la derecha
    o.append(f'<rect x="640" y="230" width="400" height="200" rx="18" fill="#fff" stroke="{AZUL}" stroke-width="4"/>')
    o.append(he(840, 330, 'תּוֹרַת', 70, AZUL)); o.append(t(840, 380, 'torat · «la ley de»', 22, INK, weight='bold')); o.append(t(840, 410, 'estado constructo', 18, MUTED, italic=True))
    o.append(f'<rect x="160" y="230" width="400" height="200" rx="18" fill="#fff" stroke="{ACC}" stroke-width="4"/>')
    o.append(he(360, 330, 'יְהוָה', 70, ACC)); o.append(t(360, 380, 'Adonái · «Jehová»', 22, INK, weight='bold')); o.append(t(360, 410, 'estado absoluto', 18, MUTED, italic=True))
    o.append(f'<line x1="630" y1="330" x2="572" y2="330" stroke="{INK}" stroke-width="4" marker-end="url(#fl)"/>')
    o.append(t(600, 480, 'Se lee de derecha a izquierda: torat Adonái, «la ley de Jehová»', 22, INK, font=SERIF))
    reglas = [('1', 'La primera palabra se acorta y no lleva artículo', 'torá → torat (ley → ley de) · banim → bené (hijos → hijos de)'),
              ('2', 'La última decide si toda la cadena es definida', 'bet hamélej: «la casa del rey», porque «rey» lleva artículo'),
              ('3', 'Expresa posesión, material, cualidad o superlativo', 'kelé zahav: «utensilios de oro»')]
    for i, (n, a, b) in enumerate(reglas):
        y = 560 + i * 100
        o.append(f'<circle cx="190" cy="{y}" r="26" fill="{ACC}"/>'); o.append(t(190, y + 8, n, 24, '#fff', weight='bold'))
        o.append(t(240, y - 4, a, 23, INK, anchor='start'))
        o.append(he(1050, y + 34, b, 26, MUTED, anchor='end') if False else t(240, y + 28, b, 21, MUTED, anchor='start'))
    guardar('esquema-constructo', o)

# 4. Perfecto e imperfecto
def aspecto():
    o = lienzo('Dos maneras de mirar una acción', 'El aspecto del verbo hebreo')
    # perfecto: círculo cerrado
    o.append(f'<circle cx="330" cy="400" r="150" fill="#fff" stroke="{AZUL}" stroke-width="8"/>')
    o.append(he(330, 415, 'שָׁמַר', 64, AZUL)); o.append(t(330, 460, 'shamar', 22, INK, weight='bold'))
    o.append(t(330, 610, 'Perfecto (qatal)', 30, AZUL, font=SERIF))
    for i, s in enumerate(['La acción vista como un todo,', 'completa, cumplida o segura', '«guardó», «he guardado»']):
        o.append(t(330, 650 + i * 30, s, 20, INK))
    # imperfecto: flecha abierta
    o.append(f'<path d="M 720 400 A 150 150 0 1 1 870 550" fill="none" stroke="{ACC}" stroke-width="8" marker-end="url(#fl)"/>')
    o.append(he(870, 415, 'יִשְׁמֹר', 64, ACC)); o.append(t(870, 460, 'yishmor', 22, INK, weight='bold'))
    o.append(t(870, 610, 'Imperfecto (yiqtol)', 30, ACC, font=SERIF))
    for i, s in enumerate(['La acción vista en desarrollo,', 'repetida o por suceder', '«guardará», «suele guardar»']):
        o.append(t(870, 650 + i * 30, s, 20, INK))
    o.append(t(600, 820, 'El tiempo (pasado, presente o futuro) lo decide el contexto.', 21, INK, font=SERIF, italic=True))
    o.append(t(600, 852, 'Por eso el perfecto profético anuncia el futuro como un hecho cumplido (Is 9:2).', 19, MUTED))
    guardar('esquema-aspecto', o)

# 5. Los siete binyanim
def binyanim():
    o = lienzo('Los siete binyanim', 'La raíz שׁמר, «guardar», en sus siete construcciones')
    cols = [('Simple', 380), ('Intensivo', 660), ('Causativo', 940)]
    filas = [('Activo', 280), ('Pasivo', 480), ('Reflexivo', 680)]
    for n, x in cols: o.append(t(x, 175, n, 26, INK, font=SERIF))
    for n, y in filas: o.append(t(150, y + 8, n, 24, INK, font=SERIF, anchor='middle'))
    celdas = {('Activo', 'Simple'): ('Qal', 'שָׁמַר', 'shamar · guardó', AZUL, False),
              ('Pasivo', 'Simple'): ('Nifal', 'נִשְׁמַר', 'nishmar · se guardó, fue guardado', VERDE, False),
              ('Activo', 'Intensivo'): ('Piel', 'שִׁמֵּר', 'shimer · observó', ORO, False),
              ('Pasivo', 'Intensivo'): ('Pual', 'שֻׁמַּר', 'shumar · (modelo)', ORO, True),
              ('Activo', 'Causativo'): ('Hifil', 'הִשְׁמִיר', 'hishmir · (modelo)', MORADO, True),
              ('Pasivo', 'Causativo'): ('Hofal', 'הָשְׁמַר', 'hoshmar · (modelo)', MORADO, True),
              ('Reflexivo', 'Intensivo'): ('Hitpael', 'הִשְׁתַּמֵּר', 'hishtamer · se guardó a sí mismo', TEAL, False)}
    for (f, c), (nom, w, tr, col, mod) in celdas.items():
        x = dict(cols)[c]; y = dict(filas)[f]
        o.append(f'<rect x="{x-125}" y="{y-80}" width="250" height="160" rx="16" fill="#fff" stroke="{col}" stroke-width="3"{" stroke-dasharray=\"8 6\"" if mod else ""}/>')
        o.append(t(x, y - 46, nom, 24, col, weight='bold'))
        o.append(he(x, y + 12, w, 46, MUTED if mod else INK))
        o.append(t(x, y + 52, tr, 15, MUTED))
    o.append(f'<rect x="255" y="600" width="250" height="160" rx="16" fill="none" stroke="{GRIS}" stroke-width="2" stroke-dasharray="4 6"/>')
    o.append(t(380, 690, '(el nifal también', 16, MUTED, italic=True)); o.append(t(380, 712, 'puede ser reflexivo)', 16, MUTED, italic=True))
    o.append(t(600, 850, 'Borde punteado: forma modelo que no aparece en la Biblia con esta raíz.', 19, MUTED))
    guardar('esquema-binyanim', o)

raiz(); frecuencia(); constructo(); aspecto(); binyanim()
print('Esquemas generados en', OUT)
