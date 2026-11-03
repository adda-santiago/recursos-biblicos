# Uso: python3 herramientas/esquemas_cristo.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «La persona y obra de Cristo» (origen: 'esquema').
# Mismo estilo que esquemas_trinidad.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'persona-y-obra-de-cristo', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760
# Colores fijos del recurso: lo divino en oro, lo humano en azul, la cruz en rojo
DIVINO, HUMANO, CRUZ = ORO, AZUL, ROJO


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def lienzo(titulo, sub=None, h=H):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}">', f'<rect width="{W}" height="{h}" fill="{BG}"/>']
    o.append(t(600, 64, titulo, 32, INK, font=SERIF))
    if sub:
        o.append(t(600, 98, sub, 18, MUTED))
    return o


def guardar(nombre, o):
    o.append('</svg>')
    open(OUT + nombre + '.svg', 'w', encoding='utf-8').write('\n'.join(o))


def flecha(o, x1, y1, x2, y2, c, w=4, punta=14, extra=''):
    ux, uy = x2 - x1, y2 - y1; d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    bx, by = x2 - ux * punta * 1.2, y2 - uy * punta * 1.2
    o.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{bx:.0f}" y2="{by:.0f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"{extra}/>')
    o.append(f'<polygon points="{x2:.0f},{y2:.0f} {bx - uy * punta:.0f},{by + ux * punta:.0f} {bx + uy * punta:.0f},{by - ux * punta:.0f}" fill="{c}"/>')


def caja(o, x, y, w, h, fondo, borde=None, rx=14):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


# 1. Humillación y exaltación (Filipenses 2:6-11)
def humillacion():
    o = lienzo('Se humilló… por lo cual Dios le exaltó', 'Filipenses 2:6-11: el camino que baja hasta la cruz y sube hasta el trono')
    baja = [(130, 'En forma de Dios', 'v. 6'), (185, 'Se despojó a sí mismo', 'v. 7'), (240, 'Forma de siervo', 'v. 7'),
            (295, 'Semejante a los hombres', 'v. 7'), (350, 'Se humilló', 'v. 8'), (405, 'Obediente hasta la muerte', 'v. 8')]
    sube = [(405, 'Dios le exaltó hasta lo sumo', 'v. 9'), (330, 'Un nombre sobre todo nombre', 'v. 9'),
            (255, 'Se doble toda rodilla', 'v. 10'), (180, 'Toda lengua confiese', 'v. 11'), (130, 'Para gloria de Dios Padre', 'v. 11')]
    # línea en V
    pts_b = [(330 + i * 48, 150 + i * 70) for i in range(6)]
    fondo = (600, 600)
    pts_s = [(660 + i * 58, 520 - i * 90) for i in range(5)]
    o.append(f'<polyline points="{" ".join(f"{x},{y}" for x, y in pts_b)} {fondo[0]},{fondo[1]}" fill="none" stroke="{HUMANO}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
    o.append(f'<polyline points="{fondo[0]},{fondo[1]} {" ".join(f"{x},{y}" for x, y in pts_s)}" fill="none" stroke="{DIVINO}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
    for (x, y), (_, n, v) in zip(pts_b, baja):
        o.append(f'<circle cx="{x}" cy="{y}" r="9" fill="{HUMANO}"/>')
        o.append(t(x - 18, y + 6, n, 19, INK, 'end', 'bold'))
        o.append(t(x - 18, y + 27, v, 14, MUTED, 'end', italic=True))
    for (x, y), (_, n, v) in zip(pts_s, sube):
        o.append(f'<circle cx="{x}" cy="{y}" r="9" fill="{DIVINO}"/>')
        o.append(t(x + 18, y + 6, n, 19, INK, 'start', 'bold'))
        o.append(t(x + 18, y + 27, v, 14, MUTED, 'start', italic=True))
    # cruz en el fondo
    cx, cy = fondo
    o.append(f'<rect x="{cx - 5}" y="{cy - 42}" width="10" height="74" fill="{CRUZ}"/>')
    o.append(f'<rect x="{cx - 26}" y="{cy - 26}" width="52" height="10" fill="{CRUZ}"/>')
    o.append(t(cx, cy + 62, 'y muerte de cruz', 22, CRUZ, font=SERIF, italic=True))
    o.append(t(330, 690, 'Él se humilló', 24, HUMANO, font=SERIF, weight='bold'))
    o.append(t(330, 716, 'vv. 6-8: lo que hizo el Hijo', 16, MUTED))
    o.append(t(880, 690, 'Dios lo exaltó', 24, DIVINO, font=SERIF, weight='bold'))
    o.append(t(880, 716, 'vv. 9-11: lo que hizo el Padre', 16, MUTED))
    guardar('esquema-humillacion', o)


# 2. Dos naturalezas, una persona (Calcedonia, 451)
def dos_naturalezas():
    o = lienzo('Una persona, dos naturalezas', 'La definición del Concilio de Calcedonia (451) y los errores que excluye')
    # persona central
    caja(o, 400, 130, 400, 86, '#fff', INK, 16)
    o.append(t(600, 166, 'Una sola persona', 26, INK, font=SERIF, weight='bold'))
    o.append(t(600, 196, 'el Hijo eterno de Dios, Jesucristo', 17, MUTED, italic=True))
    # naturalezas
    for x, n, c, fondo, items in [(170, 'Naturaleza divina', DIVINO, '#f6ecd6', ['Eterno, sin principio', 'Todopoderoso, lo sabe todo', 'Creador y sustentador', 'Igual al Padre']),
                                  (690, 'Naturaleza humana', HUMANO, '#e0eaf4', ['Cuerpo y alma humanos', 'Mente y voluntad humanas', 'Nació, creció, murió', 'Igual a nosotros, sin pecado'])]:
        caja(o, x, 270, 340, 230, fondo, c, 16)
        o.append(t(x + 170, 308, n, 23, c, font=SERIF, weight='bold'))
        for k, it in enumerate(items):
            o.append(t(x + 170, 350 + k * 36, it, 18, INK))
        flecha(o, 600 + (-1 if x < 600 else 1) * 60, 218, x + 170, 268, INK, 3, 11)
    # cuatro negaciones
    o.append(t(600, 548, 'verdadero Dios y verdadero hombre · sin confusión, sin cambio, sin división, sin separación', 20, ACC, font=SERIF, italic=True))
    errores = [('Eutiquianismo', 'las naturalezas se mezclan', 'sin confusión ni cambio', 120), ('Nestorianismo', 'dos personas', 'sin división ni separación', 380),
               ('Apolinarismo', 'falta la mente humana', 'alma racional y cuerpo', 640), ('Docetismo y ebionismo', 'falta una naturaleza', 'verdadero Dios y hombre', 900)]
    for n, d, contra, x in errores:
        caja(o, x, 586, 220, 112, '#fff', GRIS, 12)
        o.append(t(x + 110, 620, n, 18, INK, weight='bold'))
        o.append(t(x + 110, 646, d, 15, MUTED, italic=True))
        o.append(t(x + 110, 672, 'lo excluye:', 13, MUTED))
        o.append(t(x + 110, 690, contra, 14, ACC))
    o.append(t(600, 738, 'Calcedonia no explica el misterio: pone límites para no decir algo falso.', 17, MUTED, italic=True))
    guardar('esquema-dos-naturalezas', o)


# 3. Los tres oficios en el tiempo
def oficios():
    o = lienzo('Profeta, sacerdote y rey', 'Lo que Cristo hizo, lo que hace y lo que hará')
    cols = [('Lo que hizo', 'en la tierra'), ('Lo que hace', 'desde la diestra del Padre'), ('Lo que hará', 'cuando vuelva')]
    filas = [('Profeta', 'habla de parte de Dios', TEAL, ['Enseñó con autoridad y anunció el reino', 'Habla por su Palabra y su Espíritu', 'Su palabra juzgará (Jn 12:48)']),
             ('Sacerdote', 'nos representa ante Dios', ROJO, ['Se ofreció una vez para siempre', 'Intercede por los suyos (He 7:25)', 'Nos presentará sin mancha (Jud 24)']),
             ('Rey', 'gobierna en nombre de Dios', DIVINO, ['Venció en la cruz y la resurrección', 'Reina sobre su iglesia y todo poder', 'Reinará visiblemente en la tierra'])]
    x0, y0, cw, rh = 250, 140, 300, 165
    for k, (c, s) in enumerate(cols):
        o.append(t(x0 + k * cw + cw / 2, y0 + 20, c, 22, INK, font=SERIF, weight='bold'))
        o.append(t(x0 + k * cw + cw / 2, y0 + 44, s, 15, MUTED, italic=True))
    for i, (n, d, c, cel) in enumerate(filas):
        y = y0 + 70 + i * rh
        caja(o, 40, y, 195, rh - 20, c)
        o.append(t(137, y + rh / 2 - 12, n, 25, '#fff', font=SERIF, weight='bold'))
        o.append(t(137, y + rh / 2 + 16, d, 14, '#fff', italic=True))
        for k, txt in enumerate(cel):
            caja(o, x0 + k * cw + 10, y, cw - 20, rh - 20, '#fff', c, 12)
            import re as _re
            palabras = _re.sub(r'\(([^)]*)\)', lambda m: '(' + m.group(1).replace(' ', '\u00a0') + ')', txt).split(' '); lineas = []; actual = ''
            for p in palabras:
                if len(actual + ' ' + p) > 24:
                    lineas.append(actual); actual = p
                else:
                    actual = (actual + ' ' + p).strip()
            lineas.append(actual)
            for j, l in enumerate(lineas):
                o.append(t(x0 + k * cw + cw / 2, y + (rh - 20) / 2 - (len(lineas) - 1) * 13 + j * 26 + 7, l, 18, INK))
    o.append(t(600, 735, 'Por la ignorancia necesitamos un profeta; por la culpa, un sacerdote; por la esclavitud, un rey.', 17, MUTED, italic=True))
    guardar('esquema-oficios', o)


# 4. Las etapas del reino
def reino():
    o = lienzo('El reino de Cristo', 'Sus etapas según la lectura premilenial')
    y = 330
    o.append(f'<line x1="60" y1="{y}" x2="1140" y2="{y}" stroke="{GRIS}" stroke-width="6" stroke-linecap="round"/>')
    etapas = [(120, 'Prometido', 'a David', '2 S 7:12-16', MUTED),
              (310, 'Anunciado', 'el reino se ha acercado', 'Mt 4:17', TEAL),
              (500, 'Rechazado', 'por los líderes de Israel', 'Mt 23:37-39', ROJO),
              (700, 'Presente', 'en forma espiritual, en la iglesia', 'Col 1:13', VERDE),
              (900, 'Visible', 'mil años en la tierra', 'Ap 20:4-6', DIVINO),
              (1080, 'Eterno', 'cielos nuevos y tierra nueva', 'Ap 22:3-5', MORADO)]
    for x, n, d, ref, c in etapas:
        o.append(f'<circle cx="{x}" cy="{y}" r="22" fill="{c}"/>')
        o.append(t(x, y - 52, n, 22, c, font=SERIF, weight='bold'))
        palabras = d.split(' '); lineas = []; actual = ''
        for p in palabras:
            if len(actual + ' ' + p) > 16:
                lineas.append(actual); actual = p
            else:
                actual = (actual + ' ' + p).strip()
        lineas.append(actual)
        for j, l in enumerate(lineas):
            o.append(t(x, y + 60 + j * 22, l, 16, INK))
        o.append(t(x, y + 60 + len(lineas) * 22 + 6, ref, 14, MUTED, italic=True))
    # hitos
    for x, txt in [(215, 'Primera venida'), (800, 'Segunda venida')]:
        o.append(f'<line x1="{x}" y1="{y - 120}" x2="{x}" y2="{y + 20}" stroke="{INK}" stroke-width="2" stroke-dasharray="6 6"/>')
        o.append(t(x, y - 128, txt, 18, INK, weight='bold'))
    caja(o, 160, 560, 880, 120, '#fff', GRIS, 14)
    o.append(t(600, 598, 'El rechazo de los líderes de Israel no anuló la promesa: la postergó.', 20, INK, font=SERIF))
    o.append(t(600, 628, '«Desde ahora no me veréis, hasta que digáis: Bendito el que viene en el nombre del Señor» (Mt 23:39).', 16, MUTED, italic=True))
    o.append(t(600, 656, 'Hoy Cristo reina desde la diestra del Padre; cuando vuelva, reinará visiblemente.', 16, MUTED, italic=True))
    guardar('esquema-reino', o)


# 5. Cuatro imágenes de la cruz
def cruz():
    o = lienzo('Cuatro imágenes de la cruz', 'Palabras del mundo antiguo para explicar lo que Cristo hizo')
    cuadros = [('El templo', 'Propiciación', 'La ira justa de Dios contra el pecado', 'Cristo satisfizo su justicia con su sangre', '1 Jn 4:10', ROJO, '#f6e2df'),
               ('El mercado', 'Redención', 'La esclavitud del pecado', 'Cristo pagó el precio de nuestra libertad', '1 P 1:18-19', DIVINO, '#f6ecd6'),
               ('El tribunal', 'Justificación', 'La culpa ante el Juez', 'Dios declara justo al que cree', 'Ro 5:1', AZUL, '#e0eaf4'),
               ('La familia', 'Reconciliación', 'La enemistad con Dios', 'Cristo hizo la paz', '2 Co 5:18-19', VERDE, '#e0eee4')]
    for k, (lugar, pal, prob, sol, ref, c, fondo) in enumerate(cuadros):
        x = 60 + (k % 2) * 550; y = 130 + (k // 2) * 290
        caja(o, x, y, 530, 270, fondo, c, 18)
        o.append(t(x + 30, y + 46, lugar.upper(), 15, c, 'start', 'bold'))
        o.append(t(x + 30, y + 88, pal, 32, INK, 'start', font=SERIF, weight='bold'))
        o.append(t(x + 30, y + 132, 'El problema:', 16, MUTED, 'start', italic=True))
        o.append(t(x + 30, y + 158, prob, 19, INK, 'start'))
        o.append(t(x + 30, y + 196, 'Lo que hizo Cristo:', 16, MUTED, 'start', italic=True))
        o.append(t(x + 30, y + 222, sol, 19, INK, 'start', 'bold'))
        o.append(t(x + 500, y + 250, ref, 15, c, 'end', italic=True))
    guardar('esquema-cruz', o)


# 6. El evangelio completo
def evangelio():
    o = lienzo('El evangelio completo', 'Cuatro verdades sobre Jesús, centradas en Él')
    cx, cy = 600, 420
    o.append(f'<circle cx="{cx}" cy="{cy}" r="92" fill="#fff" stroke="{INK}" stroke-width="3"/>')
    o.append(t(cx, cy - 6, 'Jesucristo', 28, INK, font=SERIF, weight='bold'))
    o.append(t(cx, cy + 24, 'He 13:8', 15, MUTED, italic=True))
    cuadros = [('Salvador', 'En ningún otro hay salvación', 'Hch 4:12', 'Rutas V y VI', ROJO, '#f6e2df', 100, 140),
               ('Bautiza con el Espíritu', 'Él os bautizará en Espíritu Santo', 'Mt 3:11; Hch 2:33', 'Ruta VI', AZUL, '#e0eaf4', 700, 140),
               ('Sanador', 'Tomó nuestras enfermedades', 'Mt 8:17', 'Ruta V', VERDE, '#e0eee4', 100, 520),
               ('Rey que viene', 'Así vendrá como le habéis visto ir', 'Hch 1:11', 'Ruta VII', DIVINO, '#f6ecd6', 700, 520)]
    for n, f, ref, ruta, c, fondo, x, y in cuadros:
        caja(o, x, y, 400, 160, fondo, c, 16)
        o.append(t(x + 200, y + 50, n, 27, c, font=SERIF, weight='bold'))
        o.append(t(x + 200, y + 88, f'«{f}»', 18, INK, italic=True))
        o.append(t(x + 200, y + 116, ref, 15, MUTED))
        o.append(t(x + 200, y + 144, ruta, 14, c, weight='bold'))
        ex = x + (400 if x < 600 else 0); ey = y + (160 if y < 400 else 0)
        dx, dy = cx - ex, cy - ey; d = math.hypot(dx, dy)
        o.append(f'<line x1="{ex}" y1="{ey}" x2="{cx - dx / d * 92:.0f}" y2="{cy - dy / d * 92:.0f}" stroke="{c}" stroke-width="3"/>')
    guardar('esquema-evangelio', o)


for f in (humillacion, dos_naturalezas, oficios, reino, cruz, evangelio):
    f()
print('Esquemas generados en', OUT)
