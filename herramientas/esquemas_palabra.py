# Uso: python3 herramientas/esquemas_palabra.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «La Palabra de Dios» (origen: 'esquema').
# Mismo estilo que esquemas_interpretar.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'palabra-de-dios', 'img') + os.sep
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


# 1. La cadena de la revelación al lector
def cadena():
    o = lienzo('De Dios al lector', 'Cinco eslabones de la doctrina de la Escritura')
    pasos = [('Revelación', 'Dios se da', 'a conocer', 'He 1:1-2', ORO),
             ('Inspiración', 'Dios guía a los', 'autores al escribir', '2 Ti 3:16', ROJO),
             ('Canon', 'El pueblo de Dios', 'reconoce los libros', 'Ro 3:2', MORADO),
             ('Iluminación', 'El Espíritu abre', 'el entendimiento', 'Lc 24:45', AZUL),
             ('Obediencia', 'El creyente', 'recibe y obedece', 'Stg 1:22', VERDE)]
    for i, (n, a, b, ref, c) in enumerate(pasos):
        cx = 130 + i * 235
        o.append(f'<ellipse cx="{cx}" cy="330" rx="104" ry="70" fill="none" stroke="{c}" stroke-width="14"/>')
        o.append(t(cx, 320, n, 22, c, weight='bold'))
        o.append(t(cx, 348, f'{i + 1}', 16, MUTED))
        o.append(t(cx, 455, a, 17, INK)); o.append(t(cx, 478, b, 17, INK))
        o.append(t(cx, 512, ref, 15, MUTED, italic=True))
    o.append(f'<line x1="70" y1="590" x2="1130" y2="590" stroke="{GRIS}" stroke-width="3" marker-end="url(#fl)"/>')
    o.append(t(130, 625, 'Dios habla', 17, MUTED, italic=True)); o.append(t(1070, 625, 'el lector vive', 17, MUTED, italic=True))
    o.append(t(600, 700, 'Los tres primeros eslabones ocurrieron una vez; los dos últimos ocurren cada vez que alguien lee.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-cadena', o)


# 2. Revelación general y revelación especial
def dos_libros():
    o = lienzo('Dos maneras en que Dios se revela', 'Salmo 19: los cielos (vv. 1-6) y la ley de Jehová (vv. 7-11)')
    cols = [(60, 'Revelación general', ORO, '#f3e7c9', ['Creación (Sal 19:1)', 'Providencia (Hch 14:17)', 'Conciencia (Ro 2:15)'],
             [('Llega a', 'todos los seres humanos'), ('Muestra', 'su eterno poder y deidad'), ('Produce', 'responsabilidad: «no tienen excusa»'), ('No muestra', 'el camino de la salvación')]),
            (620, 'Revelación especial', AZUL, '#dde8f3', ['Palabra a los profetas', 'Cristo, el Verbo hecho carne', 'La Escritura'],
             [('Llega a', 'quien la oye o la lee'), ('Muestra', 'su nombre, su pacto y su plan'), ('Produce', 'fe: «convierte el alma»'), ('Centro', 'Jesucristo y el evangelio')])]
    for x, tit, c, fondo, medios, filas in cols:
        caja(o, x, 140, 520, 520, fondo)
        o.append(t(x + 260, 190, tit, 28, c, font=SERIF, weight='bold'))
        for k, m in enumerate(medios):
            o.append(f'<circle cx="{x + 60}" cy="{233 + k * 34}" r="6" fill="{c}"/>')
            o.append(t(x + 78, 239 + k * 34, m, 18, INK, anchor='start'))
        o.append(f'<line x1="{x + 40}" y1="345" x2="{x + 480}" y2="345" stroke="{c}" stroke-width="2" opacity=".5"/>')
        for k, (et, val) in enumerate(filas):
            y = 390 + k * 66
            o.append(t(x + 50, y, et, 16, c, anchor='start', weight='bold'))
            o.append(t(x + 50, y + 26, val, 19, INK, anchor='start'))
    o.append(t(600, 715, 'La creación deja a todos sin excusa; solo la Palabra lleva a Cristo (Ro 1:20; 10:17).', 19, INK, font=SERIF, italic=True))
    guardar('esquema-dos-libros', o)


# 3. Doble autoría
def doble_autoria():
    o = lienzo('Un texto, dos autores', '«Los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21)')
    caja(o, 70, 170, 380, 250, '#f6dcd8')
    o.append(t(260, 220, 'El Espíritu Santo', 26, ROJO, font=SERIF, weight='bold'))
    o.append(t(260, 248, 'autor divino', 16, MUTED, italic=True))
    for k, s in enumerate(['Origen: el texto es «exhalado por Dios»', 'Verdad: sin error en lo que afirma', 'Autoridad: lo que dice, Dios lo dice', 'Unidad: un solo Autor en 66 libros']):
        o.append(t(100, 290 + k * 32, s, 17, INK, anchor='start'))
    caja(o, 750, 170, 380, 250, '#dde8f3')
    o.append(t(940, 220, 'El autor humano', 26, AZUL, font=SERIF, weight='bold'))
    o.append(t(940, 248, 'Moisés, David, Isaías, Lucas, Pablo…', 16, MUTED, italic=True))
    for k, s in enumerate(['Lengua: hebreo, arameo, griego', 'Estilo y vocabulario propios', 'Investigación y memoria (Lc 1:1-4)', 'Su época, cultura y circunstancias']):
        o.append(t(780, 290 + k * 32, s, 17, INK, anchor='start'))
    o.append(f'<path d="M260,425 C260,500 520,500 560,540" fill="none" stroke="{ROJO}" stroke-width="5" marker-end="url(#fl)"/>')
    o.append(f'<path d="M940,425 C940,500 680,500 640,540" fill="none" stroke="{AZUL}" stroke-width="5" marker-end="url(#fl)"/>')
    caja(o, 380, 550, 440, 110, INK)
    o.append(t(600, 595, 'La Escritura', 28, '#fff', font=SERIF))
    o.append(t(600, 630, 'plenamente Palabra de Dios y plenamente escrito humano', 16, '#e8e4da'))
    o.append(t(600, 715, 'Porque es divina, se obedece; porque es humana en su forma, se estudia.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-doble-autoria', o)


# 4. Los 66 libros
def libros66():
    o = lienzo('Los 66 libros de la Biblia', 'Agrupados según el orden de las Biblias en español')
    grupos = [
        ('Antiguo Testamento · 39', [('Ley', 5, ORO, 'Génesis–Deuteronomio'), ('Historia', 12, ROJO, 'Josué–Ester'), ('Poesía', 5, MORADO, 'Job–Cantares'),
                                     ('Profetas mayores', 5, AZUL, 'Isaías–Daniel'), ('Profetas menores', 12, TEAL, 'Oseas–Malaquías')]),
        ('Nuevo Testamento · 27', [('Evangelios', 4, ORO, 'Mateo–Juan'), ('Historia', 1, ROJO, 'Hechos'), ('Cartas de Pablo', 13, MORADO, 'Romanos–Filemón'),
                                   ('Cartas generales', 8, AZUL, 'Hebreos–Judas'), ('Profecía', 1, TEAL, 'Apocalipsis')])]
    for g, (tit, secs) in enumerate(grupos):
        y0 = 150 + g * 290
        o.append(t(60, y0, tit, 24, INK, anchor='start', font=SERIF, weight='bold'))
        x = 70; cw = 21
        for n, cnt, c, rango in secs:
            ancho = cnt * cw + (cnt - 1) * 3
            for k in range(cnt):
                o.append(f'<rect x="{x + k * (cw + 3)}" y="{y0 + 25}" width="{cw}" height="120" rx="4" fill="{c}" opacity=".85"/>')
            o.append(t(x + ancho / 2, y0 + 180, n, 17, c, weight='bold'))
            o.append(t(x + ancho / 2, y0 + 202, f'{cnt} · {rango}' if ancho > 150 else str(cnt), 14, MUTED))
            if ancho <= 150:
                o.append(t(x + ancho / 2, y0 + 222, rango, 13, MUTED))
            x += ancho + 30
    o.append(t(600, 735, 'La división en capítulos y versículos se agregó en los siglos XIII y XVI; no es parte del texto inspirado.', 18, INK, font=SERIF, italic=True))
    guardar('esquema-66-libros', o)


# 5. Tanaj y Antiguo Testamento
def tanaj():
    o = lienzo('Los mismos libros, contados de dos maneras', 'La Biblia hebrea (24 libros) y el Antiguo Testamento de las Biblias evangélicas (39)')
    partes = [('Ley (Torá) · 5', ORO, ['Génesis, Éxodo, Levítico,', 'Números, Deuteronomio'], ['5 libros', 'Génesis–Deuteronomio']),
              ('Profetas (Neviím) · 8', AZUL, ['Josué, Jueces, Samuel, Reyes,', 'Isaías, Jeremías, Ezequiel, los Doce'], ['21 libros', 'Josué–2 Reyes (6) y los profetas', 'Isaías–Malaquías, sin Lamentaciones ni Daniel (15)']),
              ('Escritos (Ketuvím) · 11', VERDE, ['Salmos, Proverbios, Job, Cantares, Rut,', 'Lamentaciones, Eclesiastés, Ester,', 'Daniel, Esdras-Nehemías, Crónicas'], ['13 libros', 'Job–Cantares (5), Rut, Lamentaciones,', 'Ester, Daniel, Esdras, Nehemías, 1 y 2 Crónicas'])]
    o.append(t(300, 150, 'Biblia hebrea', 22, INK, font=SERIF, weight='bold'))
    o.append(t(900, 150, 'Antiguo Testamento', 22, INK, font=SERIF, weight='bold'))
    y = 175
    for (n, c, lineas, der), h in zip(partes, [120, 140, 170]):
        caja(o, 60, y, 480, h, '#fff', c)
        o.append(f'<rect x="60" y="{y}" width="10" height="{h}" rx="4" fill="{c}"/>')
        o.append(t(90, y + 36, n, 20, c, anchor='start', weight='bold'))
        for k, s in enumerate(lineas):
            o.append(t(90, y + 66 + k * 26, s, 16, INK, anchor='start'))
        hh = 30 + 26 * len(der)
        caja(o, 660, y + h / 2 - hh / 2, 480, hh, '#fff', GRIS)
        for k, s_ in enumerate(der):
            o.append(t(900, y + h / 2 - hh / 2 + 34 + k * 26, s_, 18 if k == 0 else 16, c if k == 0 else INK, weight='bold' if k == 0 else 'normal'))
        o.append(f'<line x1="548" y1="{y + h / 2}" x2="650" y2="{y + h / 2}" stroke="{c}" stroke-width="3" marker-end="url(#fl)"/>')
        y += h + 22
    o.append(t(300, 680, 'Total: 24 libros', 20, INK, weight='bold'))
    o.append(t(900, 680, 'Total: 39 libros', 20, INK, weight='bold'))
    o.append(t(600, 725, 'Jesús nombró las tres partes: «la ley de Moisés, … los profetas y … los salmos» (Lc 24:44).', 18, INK, font=SERIF, italic=True))
    guardar('esquema-tanaj', o)


# 6. Examinar una experiencia
def experiencia():
    o = lienzo('Examinadlo todo; retened lo bueno', 'Tres preguntas para examinar una experiencia espiritual (1 Ts 5:21)')
    preg = [('1', '¿Concuerda con la Escritura?', 'Ni un ángel puede anunciar otro evangelio', 'Gá 1:8; Is 8:20', ROJO),
            ('2', '¿Glorifica a Cristo?', 'El Espíritu «me glorificará»', 'Jn 16:14; 1 Jn 4:2', ORO),
            ('3', '¿Produce el fruto del Espíritu?', 'Amor, gozo, paz… y orden, no confusión', 'Gá 5:22-23; 1 Co 14:33', VERDE)]
    for i, (num, p, d, ref, c) in enumerate(preg):
        x = 70 + i * 365
        caja(o, x, 160, 330, 300, '#fff', c)
        o.append(f'<circle cx="{x + 165}" cy="215" r="30" fill="{c}"/>')
        o.append(t(x + 165, 225, num, 28, '#fff', weight='bold'))
        palabras = p.split(' '); mitad = (len(palabras) + 1) // 2
        o.append(t(x + 165, 295, ' '.join(palabras[:mitad]), 21, INK, font=SERIF, weight='bold'))
        o.append(t(x + 165, 324, ' '.join(palabras[mitad:]), 21, INK, font=SERIF, weight='bold'))
        palabras = d.split(' '); mitad = (len(palabras) + 1) // 2
        o.append(t(x + 165, 375, ' '.join(palabras[:mitad]), 16, MUTED))
        o.append(t(x + 165, 398, ' '.join(palabras[mitad:]), 16, MUTED))
        o.append(t(x + 165, 435, ref, 15, c, italic=True))
        o.append(f'<line x1="{x + 165}" y1="462" x2="{x + 165}" y2="545" stroke="{c}" stroke-width="4" marker-end="url(#fl)"/>')
    caja(o, 70, 555, 1060, 90, INK)
    o.append(t(600, 595, 'La Escritura: la norma que juzga toda experiencia', 24, '#fff', font=SERIF))
    o.append(t(600, 625, '«Mas esto es lo dicho por el profeta Joel» (Hch 2:16)', 17, '#e8e4da', italic=True))
    o.append(t(600, 715, 'La experiencia se somete a la Palabra; la Palabra no se somete a la experiencia.', 19, INK, font=SERIF, italic=True))
    guardar('esquema-experiencia', o)


for f in (cadena, dos_libros, doble_autoria, libros66, tanaj, experiencia):
    f()
print('Esquemas generados en', OUT)
