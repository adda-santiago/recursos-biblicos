# Uso: python3 herramientas/interlineal_citas.py  (desde la raíz del repositorio)
# Arma «Interlineal hebreo–español (AT)» (public/apps/interlineal-hebreo/data.js) a partir de
# herramientas/interlineal/parte*.js, con las marcas de El alfabeto hebreo y del vocabulario, y dos propias:
#   '@@libro/cap/vv'        → texto de la RV 1960 del sitio (public/biblia/rv1960)
#   '@@wlc:libro/cap/vv'    → hebreo del Códice de Leningrado con vocales, sin acentos (herramientas/wlc.py)
#   '@@wlcp:libro/cap/v'    → lista JS de las palabras hebreas del versículo
#   '@@int:libro/cap/v'     → lista JS de { he, tr, es } con la transliteración y la glosa del interlineal
#                              (las mismas que muestra la página interlineal/, calculadas con node)
#   '@@inttr:libro/cap/v'   → la transliteración del versículo en una línea
# Las marcas hebreas siguen la numeración del Códice de Leningrado; las de la RV, la de la RV 1960.
# Antes hay que correr interlineal_datos.py e interlineal_lexico.py.
import os, re, json, sys, glob, subprocess, tempfile
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import wlc
H = os.path.join(R, 'herramientas', 'interlineal')
APP = os.path.join(R, 'public', 'apps', 'interlineal-hebreo')
INT = os.path.join(APP, 'interlineal')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
js = lambda t: "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"

def rango(vv):
    a, _, z = vv.partition('-')
    return range(int(a), int(z or a) + 1)

def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    return js(' '.join(versos[v - 1] for v in rango(vv)))

def hebreo(m):
    tipo, libro, cap, vv = m.group(1), m.group(2), int(m.group(3)), m.group(4)
    if tipo == 'wlcp':
        return '[' + ', '.join(js(w) for w in wlc.palabras(libro, cap, int(vv))) + ']'
    return js(' '.join(wlc.verso(libro, cap, v, acentos=(tipo == 'wlca')) for v in rango(vv)))

NODE = r"""
global.window = {}; global.document = { readyState: 'x', addEventListener() {}, getElementById() { return null; } };
const fs = require('fs'), dir = process.argv[2];
require(dir + '/lexico.js');
eval(fs.readFileSync(dir + '/interlineal.js', 'utf8').replace(/if \(document\.readyState[^\n]*\n/, ''));
const I = window.Interlineal, refs = JSON.parse(fs.readFileSync(process.argv[3], 'utf8')), out = {};
const libros = {};
for (const r of refs) {
  const [l, c, v] = r.split('/');
  libros[l] = libros[l] || JSON.parse(fs.readFileSync(dir + '/datos/' + l + '.json', 'utf8'));
  const ps = libros[l].c[+c - 1][+v - 1];
  out[r] = ps.map((p, i) => {
    const q = p.length === 6 && p[5] && p[5].length ? p[5] : null;
    const prev = ps[i - 1];
    const sigue = prev && /\+$/.test(prev[2].split('/').pop());
    return { he: (p[0] ? p[0].replace(/\//g, '') : '[' + q.map(x => x[0].replace(/\//g, '')).join(' ') + ']') + (p[4] === 1 ? '־' : ''), tr: q ? q.map(x => x[1]).join(' ') : p[1],
             es: sigue ? '(sigue el nombre)' : q ? q.map(I.glosar).join(' ') : I.glosar(p) };
  });
}
console.log(JSON.stringify(out));
"""

def main():
    partes = sorted(glob.glob(os.path.join(H, 'parte*.js')))
    src = ''.join(open(p, encoding='utf-8').read() for p in partes)
    refs = sorted(set(re.findall(r"'@@int(?:tr)?:([a-z0-9]+/\d+/\d+)'", src)))
    glos = {}
    if refs:
        with tempfile.NamedTemporaryFile('w', suffix='.json', delete=False) as f:
            json.dump(refs, f)
        with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f2:
            f2.write(NODE)
        glos = json.loads(subprocess.check_output(['node', f2.name, INT, f.name]))
    def inter(m):
        tipo, ref = m.group(1), m.group(2)
        ws = glos[ref]
        if tipo == 'inttr':
            t = ' '.join(w['tr'] for w in ws if w['tr'])
            return js(t[:1].upper() + t[1:] + '.')
        return '[' + ', '.join('{ he: %s, tr: %s, es: %s }' % (js(w['he']), js(w['tr']), js(w['es'])) for w in ws) + ']'
    out = re.sub(r"'@@(int|inttr):([a-z0-9]+/\d+/\d+)'", inter, src)
    out = re.sub(r"'@@(wlc|wlca|wlcp):([a-z0-9]+)/(\d+)/([\d-]+)'", hebreo, out)
    out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
    faltan = [m for m in re.findall(r"src: '(img/[^']+)'", out) if not os.path.exists(os.path.join(APP, m))]
    out = re.sub(r"src: '(img/[^']+)', ", lambda m: m.group(0) if m.group(1) not in faltan else '', out)
    assert '@@' not in out, re.findall(r'@@[^\']*', out)[:5]
    open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
    print('data.js:', len(out), 'caracteres, de', len(partes), 'partes;', len(refs), 'versículos del interlineal')
    if faltan:
        print('Imágenes por agregar:', ', '.join(sorted(set(faltan))))

if __name__ == '__main__':
    main()
