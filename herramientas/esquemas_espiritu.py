# Uso: python3 herramientas/esquemas_espiritu.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «El Espíritu Santo» (origen: 'esquema').
# Mismo estilo que esquemas_cristo.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import math, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'espiritu-santo', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 760
# Colores fijos del recurso: el Espíritu en rojo fuego, el Padre en oro, el Hijo en azul
ESPIRITU, PADRE, HIJO = ROJO, ORO, AZUL


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


def claro(c, a=0.14):
    return f'{c}{int(a * 255):02x}'


# 1. Panorama: el Espíritu de Génesis a Apocalipsis
def panorama():
    o = lienzo('El Espíritu de Génesis a Apocalipsis', 'Una sola historia: el Espíritu que crea, unge, promete, viene sobre Jesús y es derramado')
    etapas = [
        ('Creación', 'Da forma y vida', 'Gn 1:2; Sal 104:30', VERDE),
        ('Antiguo Testamento', 'Viene sobre algunos', 'Jue 6:34; 1 S 16:13', ORO),
        ('Los profetas', 'Anuncian el derramamiento', 'Ez 36:27; Jl 2:28', MORADO),
        ('Jesús', 'Lo unge sin medida', 'Lc 3:22; 4:18', AZUL),
        ('Pentecostés', 'Derramado sobre la iglesia', 'Hch 2:1-4', ROJO),
        ('La iglesia', 'Mora en todos y da poder', 'Ro 8:9; Hch 1:8', TEAL),
        ('La venida', 'El Espíritu clama: «Ven»', 'Ap 22:17', INK),
    ]
    y0 = 330
    o.append(f'<line x1="80" y1="{y0}" x2="1120" y2="{y0}" stroke="{GRIS}" stroke-width="6" stroke-linecap="round"/>')
    # la línea se ensancha después de Pentecostés: el Espíritu sobre todos
    o.append(f'<polygon points="760,{y0 - 4} 1120,{y0 - 28} 1120,{y0 + 28} 760,{y0 + 4}" fill="{claro(ROJO, .22)}"/>')
    xs = [130 + i * 157 for i in range(7)]
    for i, (x, (n, d, r, c)) in enumerate(zip(xs, etapas)):
        o.append(f'<circle cx="{x}" cy="{y0}" r="{18 if n == "Pentecostés" else 12}" fill="{c}"/>')
        arriba = i % 2 == 0
        yy = y0 - 70 if arriba else y0 + 70
        o.append(f'<line x1="{x}" y1="{y0 + (-20 if arriba else 20)}" x2="{x}" y2="{yy + (14 if arriba else -30)}" stroke="{c}" stroke-width="2"/>')
        base = yy - 60 if arriba else yy
        o.append(t(x, base + 4, n, 21, c, weight='bold', font=SERIF))
        o.append(t(x, base + 30, d, 15, INK))
        o.append(t(x, base + 52, r, 13, MUTED, italic=True))
    o.append(t(330, 560, 'Antes de Pentecostés', 22, ORO, font=SERIF, weight='bold'))
    o.append(t(330, 588, 'El Espíritu viene sobre algunos, para una tarea', 16, MUTED))
    o.append(t(930, 560, 'Desde Pentecostés', 22, ROJO, font=SERIF, weight='bold'))
    o.append(t(930, 588, 'Derramado sobre toda carne: mora en cada creyente', 16, MUTED))
    o.append(t(600, 680, '«Ojalá todo el pueblo de Jehová fuese profeta» (Nm 11:29)', 19, INK, font=SERIF, italic=True))
    guardar('esquema-panorama', o)


# 2. Su lugar en la Trinidad: envío y obra
def procede():
    o = lienzo('El Padre, el Hijo y el Espíritu Santo', 'Cómo describe Juan 14–16 la relación del Espíritu con el Padre y con el Hijo')
    P, F, E = (600, 210), (300, 560), (900, 560)
    for (x, y), n, c in [(P, 'El Padre', PADRE), (F, 'El Hijo', HIJO), (E, 'El Espíritu Santo', ESPIRITU)]:
        o.append(f'<circle cx="{x}" cy="{y}" r="88" fill="{claro(c, .16)}" stroke="{c}" stroke-width="4"/>')
        o.append(t(x, y + 8, n, 24 if len(n) < 12 else 21, c, weight='bold', font=SERIF))
    # Padre -> Espíritu
    flecha(o, 670, 270, 845, 485, ESPIRITU, 4)
    o.append(t(800, 340, 'el Padre enviará', 17, INK, 'start', 'bold'))
    o.append(t(800, 362, 'en mi nombre (Jn 14:26)', 15, MUTED, 'start', italic=True))
    # Hijo -> Espíritu
    flecha(o, 395, 548, 805, 548, ESPIRITU, 4)
    o.append(t(600, 528, 'yo os enviaré del Padre (Jn 15:26)', 17, INK, weight='bold'))
    # Espíritu -> Hijo (glorifica)
    flecha(o, 805, 600, 395, 600, HIJO, 3, extra=' stroke-dasharray="10 8"')
    o.append(t(600, 632, 'él me glorificará (Jn 16:14)', 17, INK, weight='bold'))
    # Padre <-> Hijo
    o.append(f'<line x1="540" y1="275" x2="360" y2="490" stroke="{GRIS}" stroke-width="4" stroke-dasharray="4 8"/>')
    o.append(t(330, 360, 'Yo y el Padre', 16, MUTED, 'end', italic=True))
    o.append(t(330, 382, 'uno somos (Jn 10:30)', 16, MUTED, 'end', italic=True))
    o.append(t(900, 690, 'procede del Padre (Jn 15:26)', 15, MUTED, italic=True))
    o.append(t(600, 720, 'Un solo Dios: «en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19)', 17, INK, font=SERIF, italic=True))
    guardar('esquema-procede', o)


# 3. Los símbolos del Espíritu
def simbolos():
    o = lienzo('Los símbolos del Espíritu Santo', 'Imágenes que ilustran su obra; ninguna lo describe por completo', h=800)
    items = [
        ('Viento', 'Jn 3:8; Hch 2:2', 'Invisible, libre y poderoso;', 'da vida (Ez 37:9)', TEAL, 'viento'),
        ('Fuego', 'Mt 3:11; Hch 2:3', 'Purifica, ilumina', 'y enciende el celo', ROJO, 'fuego'),
        ('Agua', 'Jn 7:38-39; Is 44:3', 'Limpia, refresca', 'y hace fructificar', AZUL, 'agua'),
        ('Aceite', '1 S 16:13; 1 Jn 2:20', 'Unge y capacita', 'para servir', ORO, 'aceite'),
        ('Paloma', 'Lc 3:22', 'Paz, mansedumbre', 'y nuevo comienzo', MUTED, 'paloma'),
        ('Sello', 'Ef 1:13; 4:30', 'Pertenencia, autenticidad', 'y protección', MORADO, 'sello'),
        ('Arras', 'Ef 1:14; 2 Co 5:5', 'El primer pago que', 'garantiza la herencia', VERDE, 'arras'),
    ]
    pos = [(160 + i * 293, 170) for i in range(4)] + [(306 + i * 293, 470) for i in range(3)]
    for (x, y), (n, r, d1, d2, c, ic) in zip(pos, items):
        caja(o, x - 130, y, 260, 270, claro(c, .10), c)
        cx, cy = x, y + 70
        if ic == 'viento':
            for k in range(3):
                o.append(f'<path d="M{cx - 60},{cy - 20 + k * 20} q30,-18 60,0 t60,0" fill="none" stroke="{c}" stroke-width="5" stroke-linecap="round"/>')
        elif ic == 'fuego':
            o.append(f'<path d="M{cx},{cy - 42} C{cx + 34},{cy - 10} {cx + 30},{cy + 30} {cx},{cy + 36} C{cx - 30},{cy + 30} {cx - 34},{cy - 6} {cx - 12},{cy - 20} C{cx - 10},{cy} {cx},{cy + 4} {cx},{cy - 42}Z" fill="{c}"/>')
        elif ic == 'agua':
            o.append(f'<path d="M{cx},{cy - 42} C{cx + 30},{cy} {cx + 30},{cy + 34} {cx},{cy + 36} C{cx - 30},{cy + 34} {cx - 30},{cy} {cx},{cy - 42}Z" fill="{c}"/>')
        elif ic == 'aceite':
            o.append(f'<path d="M{cx - 26},{cy + 36} L{cx - 32},{cy - 6} Q{cx},{cy - 26} {cx + 32},{cy - 6} L{cx + 26},{cy + 36} Z" fill="{c}"/>')
            o.append(f'<rect x="{cx - 8}" y="{cy - 40}" width="16" height="22" fill="{c}"/>')
        elif ic == 'paloma':
            o.append(f'<path d="M{cx - 50},{cy + 10} Q{cx - 10},{cy - 40} {cx + 10},{cy - 6} Q{cx + 40},{cy - 30} {cx + 55},{cy - 20} Q{cx + 30},{cy + 30} {cx - 10},{cy + 22} Z" fill="{c}"/>')
        elif ic == 'sello':
            o.append(f'<circle cx="{cx}" cy="{cy}" r="38" fill="{c}"/>')
            o.append(f'<circle cx="{cx}" cy="{cy}" r="26" fill="none" stroke="{BG}" stroke-width="3"/>')
        else:
            for k in range(3):
                o.append(f'<ellipse cx="{cx - 24 + k * 24}" cy="{cy + 10 - k * 8}" rx="24" ry="9" fill="{c}" stroke="{BG}" stroke-width="2"/>')
        o.append(t(x, y + 148, n, 26, c, weight='bold', font=SERIF))
        o.append(t(x, y + 176, r, 15, MUTED, italic=True))
        o.append(t(x, y + 210, d1, 17, INK))
        o.append(t(x, y + 234, d2, 17, INK))
    guardar('esquema-simbolos', o)


# 4. La obra del Espíritu en la salvación
def salvacion():
    o = lienzo('La obra del Espíritu en la salvación', 'Aplica al creyente, de principio a fin, lo que Cristo hizo por él')
    pasos = [
        ('Convence', 'de pecado, justicia y juicio', 'Jn 16:8'),
        ('Regenera', 'nacer del Espíritu', 'Jn 3:5; Tit 3:5'),
        ('Bautiza en el cuerpo', 'nos une a Cristo y a la iglesia', '1 Co 12:13'),
        ('Mora', 'somos templo de Dios', '1 Co 6:19'),
        ('Sella', 'y es las arras de la herencia', 'Ef 1:13-14'),
        ('Da testimonio', '«¡Abba, Padre!»', 'Ro 8:15-16'),
        ('Intercede', 'con gemidos indecibles', 'Ro 8:26'),
        ('Santifica', 'de gloria en gloria', '2 Co 3:18'),
        ('Resucitará', 'vivificará nuestros cuerpos', 'Ro 8:11'),
    ]
    col = [ACC, ROJO, ROJO, ORO, ORO, ORO, VERDE, VERDE, AZUL]
    x0, y0, dx = 120, 200, 0
    for i, ((n, d, r), c) in enumerate(zip(pasos, col)):
        fila, k = divmod(i, 3)
        x = 120 + k * 360 if fila != 1 else 840 - k * 360
        y = 170 + fila * 180
        caja(o, x, y, 280, 120, claro(c, .12), c)
        o.append(f'<circle cx="{x + 28}" cy="{y + 30}" r="17" fill="{c}"/>')
        o.append(t(x + 28, y + 36, str(i + 1), 17, BG, weight='bold'))
        o.append(t(x + 56, y + 38, n, 22, c, 'start', 'bold', SERIF))
        o.append(t(x + 22, y + 74, d, 16, INK, 'start'))
        o.append(t(x + 22, y + 100, r, 14, MUTED, 'start', italic=True))
        if i < 8:
            if k < 2:
                if fila != 1:
                    flecha(o, x + 284, y + 60, x + 354, y + 60, GRIS, 4)
                else:
                    flecha(o, x - 4, y + 60, x - 74, y + 60, GRIS, 4)
            else:
                flecha(o, x + 140, y + 124, x + 140, y + 176, GRIS, 4)
    o.append(t(600, 712, 'Rojo: la conversión · Oro: la vida en el Espíritu · Verde: el crecimiento · Azul: la esperanza', 16, MUTED))
    guardar('esquema-salvacion', o)


# 5. Dos obras: la conversión y el bautismo en el Espíritu
def dos_obras():
    o = lienzo('Dos obras del mismo Espíritu', 'La lectura pentecostal clásica de 1 Corintios 12:13 y Hechos 1:5-8')
    cols = [
        (330, 'En la conversión', ORO, [
            ('Quién obra', 'El Espíritu'), ('Qué hace', 'Regenera, une al cuerpo,'), ('', 'mora y sella'),
            ('Para qué', 'Salvación: vida nueva'), ('Quiénes', 'Todo creyente'), ('Texto', '1 Co 12:13; Ro 8:9')]),
        (870, 'El bautismo en el Espíritu', ROJO, [
            ('Quién obra', 'Cristo bautiza en el Espíritu'), ('Qué hace', 'Reviste de poder;'), ('', 'evidencia: otras lenguas'),
            ('Para qué', 'Servicio: ser testigos'), ('Quiénes', 'Prometido a todo creyente'), ('Texto', 'Hch 1:5, 8; 2:4, 39')]),
    ]
    for x, titulo, c, filas in cols:
        caja(o, x - 240, 140, 480, 470, claro(c, .10), c)
        o.append(t(x, 192, titulo, 27, c, weight='bold', font=SERIF))
        y = 250
        for et, v in filas:
            if et:
                o.append(t(x - 210, y, et, 16, MUTED, 'start', 'bold'))
            o.append(t(x - 70, y, v, 19, INK, 'start'))
            y += 54 if et else 40
    flecha(o, 575, 375, 625, 375, GRIS, 6, 18)
    o.append(t(600, 340, 'después', 15, MUTED))
    o.append(t(600, 410, 'o casi a la vez', 14, MUTED, italic=True))
    o.append(t(330, 660, 'Samaria: creyeron y fueron bautizados (Hch 8:12)', 16, INK, italic=True))
    o.append(t(870, 660, '…y después recibieron el Espíritu (Hch 8:17)', 16, INK, italic=True))
    o.append(t(600, 715, 'Todo creyente tiene el Espíritu; la promesa del bautismo en el Espíritu es para todos', 18, INK, font=SERIF))
    guardar('esquema-dos-obras', o)


# 6. Los nueve dones de 1 Corintios 12
def dones():
    o = lienzo('Los nueve dones de 1 Corintios 12:8-10', '«A cada uno le es dada la manifestación del Espíritu para provecho» (1 Co 12:7)')
    grupos = [
        ('Para saber', 'Dones de revelación', AZUL, ['Palabra de sabiduría', 'Palabra de ciencia', 'Discernimiento de espíritus']),
        ('Para hacer', 'Dones de poder', ROJO, ['Fe', 'Dones de sanidades', 'Hacer milagros']),
        ('Para hablar', 'Dones de expresión', VERDE, ['Profecía', 'Diversos géneros de lenguas', 'Interpretación de lenguas']),
    ]
    for i, (n, sub, c, ds) in enumerate(grupos):
        x = 230 + i * 370
        caja(o, x - 165, 150, 330, 420, claro(c, .10), c)
        o.append(t(x, 200, n, 28, c, weight='bold', font=SERIF))
        o.append(t(x, 228, sub, 16, MUTED, italic=True))
        for k, d in enumerate(ds):
            y = 290 + k * 92
            caja(o, x - 140, y - 34, 280, 64, BG, c, 32)
            o.append(t(x, y + 6, d, 19 if len(d) < 24 else 17, INK, weight='bold'))
    o.append(t(600, 625, '«Todas estas cosas las hace uno y el mismo Espíritu,', 19, INK, font=SERIF, italic=True))
    o.append(t(600, 652, 'repartiendo a cada uno en particular como él quiere» (1 Co 12:11)', 19, INK, font=SERIF, italic=True))
    o.append(t(600, 712, 'La agrupación en tres es una ayuda para enseñar; Pablo no la hace.', 15, MUTED))
    guardar('esquema-dones', o)


# 7. Obras de la carne y fruto del Espíritu
def fruto():
    o = lienzo('Las obras de la carne y el fruto del Espíritu', 'Gálatas 5:19-23: obras en plural, fruto en singular', h=800)
    obras = ['adulterio', 'fornicación', 'inmundicia', 'lascivia', 'idolatría', 'hechicerías', 'enemistades', 'pleitos',
             'celos', 'iras', 'contiendas', 'disensiones', 'herejías', 'envidias', 'homicidios', 'borracheras', 'orgías']
    caja(o, 60, 140, 440, 600, claro(GRIS, .35), GRIS)
    o.append(t(280, 186, 'Obras de la carne', 26, MUTED, weight='bold', font=SERIF))
    o.append(t(280, 212, 'muchas, dispersas, en desorden (vv. 19-21)', 15, MUTED, italic=True))
    import random
    random.seed(7)
    for i, w in enumerate(obras):
        col, fila = i % 2, i // 2
        x = 170 + col * 220 + random.randint(-18, 18)
        y = 262 + fila * 52 + random.randint(-6, 6)
        o.append(t(x, y, w, 19, INK, italic=True))
    o.append(t(280, 722, '«y cosas semejantes a estas» (v. 21)', 15, MUTED, italic=True))
    # el racimo
    caja(o, 560, 140, 580, 600, claro(VERDE, .10), VERDE)
    o.append(t(850, 186, 'El fruto del Espíritu', 26, VERDE, weight='bold', font=SERIF))
    o.append(t(850, 212, 'uno solo, con nueve aspectos (vv. 22-23)', 15, MUTED, italic=True))
    grupos = [('Hacia Dios', ['amor', 'gozo', 'paz'], ROJO), ('Hacia los demás', ['paciencia', 'benignidad', 'bondad'], ORO),
              ('Hacia uno mismo', ['fe', 'mansedumbre', 'templanza'], AZUL)]
    for g, (n, fs, c) in enumerate(grupos):
        y = 320 + g * 140
        o.append(t(590, y + 6, n, 17, c, 'start', 'bold'))
        for k, f in enumerate(fs):
            x = 820 + k * 116
            o.append(f'<circle cx="{x}" cy="{y}" r="54" fill="{claro(c, .22)}" stroke="{c}" stroke-width="3"/>')
            o.append(t(x, y + 6, f, 14 if len(f) > 9 else 17, INK, weight='bold'))
    o.append(t(850, 722, '«contra tales cosas no hay ley» (v. 23)', 15, MUTED, italic=True))
    guardar('esquema-fruto', o)


if __name__ == '__main__':
    panorama(); procede(); simbolos(); salvacion(); dos_obras(); dones(); fruto()
    print('Esquemas generados en', OUT)
