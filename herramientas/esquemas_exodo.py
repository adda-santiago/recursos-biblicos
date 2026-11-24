# Uso: python3 herramientas/esquemas_exodo.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «El Éxodo y el desierto» (origen: 'esquema').
# Mismo estilo que esquemas_patriarcas.py: fondo crema, Georgia para títulos, Helvetica para rótulos.
import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'exodo-desierto', 'img') + os.sep
os.makedirs(OUT, exist_ok=True)
BG = '#f6f3ec'; INK = '#1f2430'; MUTED = '#6b7080'; GRIS = '#c9c6be'; ACC = '#9e2b25'
AZUL = '#2a6fb0'; VERDE = '#2f7d4a'; ORO = '#c08a1e'; MORADO = '#7a3fa0'; ROJO = '#b03a2e'; TEAL = '#1e8a8a'; PARDO = '#8a5a2b'
SERIF = "Georgia, 'Times New Roman', serif"; SANS = "Helvetica, Arial, sans-serif"
W, H = 1200, 896


def t(x, y, s, size=20, fill=INK, anchor='middle', weight='normal', font=SANS, italic=False):
    st = ' font-style="italic"' if italic else ''
    s = s.replace('&', '&amp;')
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'


def caja(o, x, y, w, h, fondo, borde=None, rx=12):
    b = f' stroke="{borde}" stroke-width="2"' if borde else ''
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fondo}"{b}/>')


def claro(c, a=0.16):
    return f'{c}{int(a * 255):02x}'


def campamento():
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">', f'<rect width="{W}" height="{H}" fill="{BG}"/>']
    o.append(t(600, 54, 'El campamento de Israel', 32, INK, font=SERIF))
    o.append(t(600, 86, 'Números 2 y 3: el tabernáculo en el centro, los levitas alrededor y las doce tribus en cuatro grupos', 17, MUTED))
    cx, cy = 600, 500
    # Tribus (cuatro grupos de tres)
    grupos = [
        # (x, y, w, h, color, título, tribus, cifra)
        (880, 330, 250, 340, VERDE, 'Oriente', ['Judá 74.600', 'Isacar 54.400', 'Zabulón 57.400'], '186.400'),
        (330, 760, 540, 110, AZUL, 'Sur', ['Rubén 46.500', 'Simeón 59.300', 'Gad 45.650'], '151.450'),
        (70, 330, 250, 340, ORO, 'Occidente', ['Efraín 40.500', 'Manasés 32.200', 'Benjamín 35.400'], '108.100'),
        (330, 120, 540, 110, MORADO, 'Norte', ['Dan 62.700', 'Aser 41.500', 'Neftalí 53.400'], '157.600'),
    ]
    for x, y, w, h, c, lado, tribus, total in grupos:
        caja(o, x, y, w, h, claro(c), c)
        if w > h:
            o.append(t(x + w / 2, y + 30, f'{lado}: {total}', 20, c, weight='bold'))
            paso = w / 3
            for i, tr in enumerate(tribus):
                nombre, n = tr.split(' ')
                o.append(t(x + paso * i + paso / 2, y + 66, nombre, 20, INK, weight='bold' if i == 0 else 'normal'))
                o.append(t(x + paso * i + paso / 2, y + 90, n, 16, MUTED))
        else:
            o.append(t(x + w / 2, y + 36, lado, 20, c, weight='bold'))
            o.append(t(x + w / 2, y + 60, total, 17, c))
            for i, tr in enumerate(tribus):
                nombre, n = tr.split(' ')
                yy = y + 120 + i * 75
                o.append(t(x + w / 2, yy, nombre, 21, INK, weight='bold' if i == 0 else 'normal'))
                o.append(t(x + w / 2, yy + 24, n, 16, MUTED))
    # Levitas
    caja(o, 380, 280, 440, 440, claro(PARDO, 0.10), PARDO, 18)
    o.append(t(600, 306, 'Merari (norte)', 17, PARDO))
    o.append(t(600, 706, 'Coat (sur)', 17, PARDO))
    o.append(f'<text x="398" y="500" font-family="{SANS}" font-size="17" fill="{PARDO}" text-anchor="middle" transform="rotate(-90 398 500)">Gersón (occidente)</text>')
    o.append(f'<text x="790" y="500" font-family="{SANS}" font-size="17" fill="{ACC}" text-anchor="middle" font-weight="bold" transform="rotate(90 790 500)">Moisés, Aarón y los sacerdotes</text>')
    # Tabernáculo: patio de 100 x 50 codos, entrada al oriente
    caja(o, 440, 380, 320, 160, '#ffffff', INK, 4)
    caja(o, 470, 425, 140, 70, claro(ORO, 0.35), ORO, 3)
    o.append(t(540, 466, 'Tienda', 16, INK))
    o.append(f'<rect x="680" y="450" width="26" height="26" fill="{claro(ROJO, 0.4)}" stroke="{ROJO}" stroke-width="2"/>')
    o.append(t(693, 498, 'Altar', 14, MUTED))
    o.append(f'<line x1="760" y1="440" x2="760" y2="480" stroke="{BG}" stroke-width="6"/>')
    o.append(t(600, 572, 'El tabernáculo', 19, INK, font=SERIF))
    o.append(t(600, 596, 'Entrada al oriente', 15, MUTED, italic=True))
    # Rosa de los vientos
    o.append(t(1110, 120, 'N', 18, INK, weight='bold'))
    o.append(f'<line x1="1110" y1="128" x2="1110" y2="170" stroke="{INK}" stroke-width="2"/>')
    o.append(f'<polygon points="1110,126 1104,140 1116,140" fill="{INK}"/>')
    o.append(t(600, 884, 'Cifras de Números 1 y 2. Levitas: 22.000 varones de un mes arriba (Nm 3:39). Distancias y proporciones no son a escala.', 14, MUTED))
    o.append('</svg>')
    open(OUT + 'esquema-campamento.svg', 'w', encoding='utf-8').write('\n'.join(o))


campamento()
print('Esquemas generados en', OUT)
