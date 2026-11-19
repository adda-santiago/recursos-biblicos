# Uso: python3 herramientas/esquemas_gramatica_griega.py  (desde la raíz del repositorio)
# Genera los esquemas SVG de «Vocabulario y gramática básica del griego del NT» (origen: 'esquema').
# Mismo estilo que esquemas_gramatica.py. El esquema de frecuencia se calcula con
# herramientas/gramatica_griega/frecuencias.tsv (gramatica_griega_lista.py) y el total del Nestle 1904.
import os, math
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(R, 'public', 'apps', 'gramatica-griega', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; TEAL = '#1e8a8a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
GR = "'Noto Serif', 'Gentium Plus', 'Times New Roman', serif"
W, H = 1200, 896
TOTAL = 137779
CANT = 1124

def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'

def gr(x, y, s, size=40, fill=INK, anchor='middle'):
    return t(x, y, s, size, fill, anchor, font=GR)

def lienzo(titulo, sub=None):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">', f'<rect width="{W}" height="{H}" fill="{BG}"/>',
         '<defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke"/></marker></defs>']
    o.append(t(600, 70, titulo, 34, INK, font=SERIF))
    if sub: o.append(t(600, 106, sub, 19, MUTED))
    return o

def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))

# 1. Terminaciones: el orden cambia, el sentido no
def terminaciones():
    o = lienzo('Las terminaciones dicen quién hace qué', '«El Padre ama al Hijo» en tres órdenes posibles')
    ordenes = [[('ὁ πατήρ', AZUL), ('ἀγαπᾷ', INK), ('τὸν υἱόν', ORO)],
               [('τὸν υἱόν', ORO), ('ἀγαπᾷ', INK), ('ὁ πατήρ', AZUL)],
               [('ἀγαπᾷ', INK), ('ὁ πατήρ', AZUL), ('τὸν υἱόν', ORO)]]
    for i, fila in enumerate(ordenes):
        y = 240 + i * 150
        o.append(f'<rect x="150" y="{y-70}" width="900" height="110" rx="14" fill="#fff" stroke="{GRIS}" stroke-width="2"/>')
        for j, (w, c) in enumerate(fila):
            o.append(gr(330 + j * 270, y + 2, w, 46, c))
        o.append(t(1100, y, '=', 40, MUTED))
    o.append(t(600, 690, 'el Padre ama al Hijo', 34, INK, font=SERIF, italic=True))
    o.append(f'<rect x="210" y="740" width="22" height="22" rx="4" fill="{AZUL}"/>')
    o.append(t(244, 758, 'nominativo: el sujeto (ὁ, -ρ)', 19, INK, anchor='start'))
    o.append(f'<rect x="660" y="740" width="22" height="22" rx="4" fill="{ORO}"/>')
    o.append(t(694, 758, 'acusativo: el complemento (τόν, -ν)', 19, INK, anchor='start'))
    o.append(t(600, 850, 'En español el orden decide; en griego deciden las terminaciones, y el orden sirve para destacar.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-terminaciones', o)

# 2. Curva de frecuencia
def frecuencia():
    filas = [l.rstrip('\n').split('\t') for l in open(os.path.join(R, 'herramientas', 'gramatica_griega', 'frecuencias.tsv'), encoding='utf-8')][1:]
    v = [int(f[2]) for f in filas]
    acc = []; s = 0
    for x in v:
        s += x; acc.append(s / TOTAL)
    o = lienzo('Pocas palabras cubren mucho texto', 'Parte del Nuevo Testamento griego que cubren las palabras más frecuentes (Nestle 1904)')
    x0, y0, x1, y1 = 140, 780, 1120, 170
    sx = lambda n: x0 + (x1 - x0) * n / CANT
    sy = lambda p: y0 - (y0 - y1) * p
    for p in (0, .25, .5, .75, 1):
        o.append(f'<line x1="{x0}" y1="{sy(p):.0f}" x2="{x1}" y2="{sy(p):.0f}" stroke="{GRIS}" stroke-width="1"/>')
        o.append(t(x0 - 14, sy(p) + 6, f'{int(p*100)} %', 17, MUTED, anchor='end'))
    for n in (0, 200, 400, 600, 800, 1000):
        o.append(t(sx(n), y0 + 32, f'{n:,}'.replace(',', '.'), 17, MUTED))
    o.append(t(630, y0 + 58, 'Número de palabras aprendidas, de la más frecuente a la menos frecuente', 18, INK))
    pts = ' '.join(f'{sx(i+1):.1f},{sy(a):.1f}' for i, a in enumerate(acc))
    o.append(f'<polygon points="{x0},{y0} {pts} {sx(CANT):.1f},{y0}" fill="{ACC}" fill-opacity="0.12"/>')
    o.append(f'<polyline points="{pts}" fill="none" stroke="{ACC}" stroke-width="5" stroke-linejoin="round"/>')
    for n, txt in ((1, 'ὁ sola: {:.0f} %'), (100, '100 palabras: {:.0f} %'), (310, '310 palabras: {:.0f} %'), (CANT, '1.124 palabras: {:.0f} %')):
        a = acc[n - 1]; x, y = sx(n), sy(a)
        o.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="9" fill="{ACC}"/>')
        izq = n > 1000
        dy = -20 if (izq or n == 1) else 34
        o.append(t(x + (-18 if izq else 18), y + dy, txt.format(a * 100), 20, INK, anchor='end' if izq else 'start', weight='bold', font=GR if n == 1 else SANS))
    o.append(t(600, 884, 'Al principio cada palabra nueva cubre mucho texto; después la curva se aplana.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-frecuencia', o)

# 3. Los cinco casos
def casos():
    o = lienzo('Los cinco casos', 'Cada caso responde una pregunta (con λόγος, «palabra», y κύριος, «señor»)')
    datos = [('Nominativo', '¿quién?, ¿qué?', 'el sujeto', 'ὁ λόγος', AZUL),
             ('Genitivo', '¿de quién?, ¿de qué?', 'posesión, origen', 'τοῦ λόγου', VERDE),
             ('Dativo', '¿a quién?, ¿con qué?', 'complemento indirecto, medio', 'τῷ λόγῳ', MORADO),
             ('Acusativo', '¿qué?, ¿a quién?', 'complemento directo', 'τὸν λόγον', ORO),
             ('Vocativo', '¡…!', 'a quien se habla', 'κύριε', TEAL)]
    for i, (n, p, f, ej, c) in enumerate(datos):
        y = 170 + i * 130
        o.append(f'<rect x="120" y="{y}" width="960" height="108" rx="14" fill="#fff" stroke="{c}" stroke-width="3"/>')
        o.append(f'<rect x="120" y="{y}" width="16" height="108" rx="6" fill="{c}"/>')
        o.append(t(170, y + 46, n, 28, c, anchor='start', weight='bold', font=SERIF))
        o.append(t(170, y + 82, f, 19, MUTED, anchor='start'))
        o.append(t(560, y + 64, p, 24, INK, font=SERIF, italic=True))
        o.append(gr(930, y + 70, ej, 44, c))
    o.append(t(600, 855, 'El artículo (ὁ, τοῦ, τῷ, τόν) es el mejor ayudante para reconocer el caso.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-casos', o)

# 4. Preposiciones en el espacio
def preposiciones():
    o = lienzo('El sentido básico de las preposiciones', 'Casi todas nacen de una idea de lugar o de movimiento')
    cx, cy, r = 600, 470, 130
    o.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#fff" stroke="{INK}" stroke-width="4"/>')
    o.append(f'<circle cx="{cx}" cy="{cy}" r="12" fill="{ACC}"/>')
    o.append(gr(cx, cy + 50, 'ἐν', 36, ACC)); o.append(t(cx, cy + 80, 'en, dentro', 17, MUTED))
    def flecha(x1, y1, x2, y2, c):
        o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="5" marker-end="url(#fl)"/>')
    # εἰς: entra
    flecha(240, 470, cx - 40, 470, AZUL); o.append(gr(300, 450, 'εἰς', 34, AZUL)); o.append(t(300, 510, 'hacia dentro', 17, MUTED))
    # ἐκ: sale
    flecha(cx + 40, 470, 960, 470, VERDE); o.append(gr(900, 450, 'ἐκ', 34, VERDE)); o.append(t(900, 510, 'de dentro hacia fuera', 17, MUTED))
    # ἀπό: se aleja desde el borde
    flecha(cx + 100, cy - 100, 900, 220, ORO); o.append(gr(985, 215, 'ἀπό', 34, ORO)); o.append(t(985, 252, 'desde, lejos de', 17, MUTED))
    # πρός: hacia el borde
    flecha(300, 220, cx - 100, cy - 100, MORADO); o.append(gr(270, 205, 'πρός', 34, MORADO)); o.append(t(270, 245, 'hacia, junto a', 17, MUTED))
    # ἐπί: encima
    o.append(f'<rect x="{cx-60}" y="{cy-r-40}" width="120" height="30" rx="6" fill="{TEAL}"/>'); o.append(gr(cx, cy - r - 60, 'ἐπί', 34, TEAL)); o.append(t(cx + 130, cy - r - 20, 'sobre', 17, MUTED))
    # ὑπό: debajo
    o.append(f'<rect x="{cx-60}" y="{cy+r+12}" width="120" height="30" rx="6" fill="{AZUL}"/>'); o.append(gr(cx, cy + r + 82, 'ὑπό', 34, AZUL)); o.append(t(cx - 75, cy + r + 34, 'debajo', 17, MUTED, anchor='end'))
    # παρά: al lado
    o.append(f'<circle cx="{cx+r+60}" cy="{cy+120}" r="22" fill="{ORO}"/>'); o.append(gr(cx + r + 140, cy + 135, 'παρά', 30, ORO)); o.append(t(cx + r + 140, cy + 165, 'al lado de', 17, MUTED))
    # μετά: con
    o.append(f'<circle cx="{cx-r-60}" cy="{cy+120}" r="22" fill="{MORADO}"/><circle cx="{cx-r-16}" cy="{cy+120}" r="22" fill="none" stroke="{MORADO}" stroke-width="3"/>'); o.append(gr(cx - r - 150, cy + 135, 'μετά', 30, MORADO)); o.append(t(cx - r - 150, cy + 165, 'con', 17, MUTED))
    # διά: atraviesa (curva) y περί: rodea
    o.append(f'<path d="M {cx-r-90} {cy-40} Q {cx} {cy-10} {cx+r+90} {cy-40}" fill="none" stroke="{ACC}" stroke-width="4" stroke-dasharray="10 8" marker-end="url(#fl)"/>')
    o.append(gr(cx - r - 40, cy - 60, 'διά', 30, ACC)); o.append(t(cx - r - 40, cy - 92, 'a través de', 17, MUTED))
    o.append(f'<circle cx="{cx}" cy="{cy}" r="{r+50}" fill="none" stroke="{GRIS}" stroke-width="3" stroke-dasharray="4 8"/>')
    o.append(gr(cx - 215, cy + 215, 'περί', 30, INK)); o.append(t(cx - 215, cy + 245, 'alrededor', 17, MUTED))
    o.append(t(600, 870, 'Del lugar nacen los demás sentidos: εἰς σωτηρίαν, «para salvación»; ἐκ πίστεως, «por la fe».', 19, INK, font=SERIF, italic=True))
    guardar('esquema-preposiciones', o)

# 5. Las piezas del verbo
def verbo():
    o = lienzo('Las piezas de una forma verbal', 'ἐλύσαμεν, «desatamos» (aoristo)')
    piezas = [('ἐ', 'aumento', 'en el pasado', AZUL, 150), ('λυ', 'raíz', 'desatar', ACC, 230), ('σα', 'marca del aoristo', 'la acción como un todo', ORO, 200), ('μεν', 'terminación', 'nosotros', VERDE, 240)]
    x = 600 - sum(p[4] for p in piezas) / 2
    for w, n, s, c, ancho in piezas:
        o.append(f'<rect x="{x}" y="220" width="{ancho-10}" height="170" rx="16" fill="#fff" stroke="{c}" stroke-width="4"/>')
        o.append(gr(x + (ancho - 10) / 2, 335, w, 84, c))
        o.append(f'<line x1="{x + (ancho-10)/2}" y1="400" x2="{x + (ancho-10)/2}" y2="470" stroke="{c}" stroke-width="3"/>')
        o.append(t(x + (ancho - 10) / 2, 505, n, 22, c, weight='bold'))
        o.append(t(x + (ancho - 10) / 2, 537, s, 19, MUTED, italic=True))
        x += ancho
    filas = [('ἔλυσα', 'desaté', 'otra terminación: otra persona'), ('λύομεν', 'desatamos (presente)', 'sin aumento ni -σα-: otro tiempo'), ('ἐλύθημεν', 'fuimos desatados', '-θη-: voz pasiva')]
    for i, (w, es, nota) in enumerate(filas):
        y = 640 + i * 62
        o.append(gr(330, y, w, 34, INK, anchor='end'))
        o.append(t(360, y - 4, es, 21, INK, anchor='start', font=SERIF, italic=True))
        o.append(t(1000, y - 4, nota, 19, MUTED, anchor='end'))
    o.append(t(600, 860, 'Cada pieza responde una pregunta: cuándo, qué, cómo se mira y quién.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-verbo', o)

# 6. Aspecto
def aspecto():
    o = lienzo('Tres maneras de mirar una acción', 'El aspecto no dice sobre todo cuándo, sino cómo se presenta la acción')
    cols = [(250, 'Aoristo', 'la acción completa, desde fuera', 'ἔλυσα', 'desaté', AZUL),
            (600, 'Presente e imperfecto', 'la acción en desarrollo, desde dentro', 'λύω · ἔλυον', 'desato · desataba', ORO),
            (950, 'Perfecto', 'acción terminada con resultado vigente', 'λέλυκα', 'he desatado', VERDE)]
    for x, n, s, w, es, c in cols:
        o.append(f'<rect x="{x-160}" y="170" width="320" height="560" rx="18" fill="#fff" stroke="{c}" stroke-width="3"/>')
        o.append(t(x, 225, n, 26, c, weight='bold', font=SERIF))
        o.append(t(x, 258, s, 17, MUTED))
    # dibujos
    o.append(f'<circle cx="250" cy="400" r="58" fill="{AZUL}" fill-opacity="0.18" stroke="{AZUL}" stroke-width="5"/>')
    o.append(t(250, 490, 'como una foto', 19, INK, italic=True, font=SERIF))
    o.append(f'<line x1="470" y1="400" x2="720" y2="400" stroke="{ORO}" stroke-width="6" stroke-dasharray="18 10" marker-end="url(#fl)"/>')
    o.append(t(600, 490, 'como un video', 19, INK, italic=True, font=SERIF))
    o.append(f'<circle cx="840" cy="400" r="18" fill="{VERDE}"/><line x1="860" y1="400" x2="1070" y2="400" stroke="{VERDE}" stroke-width="6"/>')
    o.append(t(950, 490, 'un hecho y su efecto', 19, INK, italic=True, font=SERIF))
    for x, n, s, w, es, c in cols:
        o.append(gr(x, 600, w, 40, c))
        o.append(t(x, 645, es, 19, INK, italic=True, font=SERIF))
    o.append(t(250, 700, 'ἐδάκρυσεν, lloró (Jn 11:35)', 17, MUTED, font=GR))
    o.append(t(600, 700, 'αἰτεῖτε, pedid (Mt 7:7)', 17, MUTED, font=GR))
    o.append(t(950, 700, 'γέγραπται, escrito está (Mt 4:4)', 17, MUTED, font=GR))
    o.append(t(600, 820, 'El aoristo no significa «una vez para siempre»: solo mira la acción como un todo.', 20, INK, font=SERIF, italic=True))
    guardar('esquema-aspecto', o)

terminaciones(); frecuencia(); casos(); preposiciones(); verbo(); aspecto()
print('Esquemas escritos en', OUT)
