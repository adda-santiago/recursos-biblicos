# Uso: python3 herramientas/interlineal_griego_citas.py  (desde la raíz del repositorio)
# Arma «Interlineal griego–español (NT)» (public/apps/interlineal-griego/data.js) a partir de
# herramientas/interlineal_griego/parte*.js, con estas marcas (dos arrobas y luego):
#   libro/cap/vv           → texto de la RV 1960 del sitio (public/biblia/rv1960)
#   n1904:libro/cap/vv     → griego de Nestle 1904 (herramientas/n1904.py)
#   intg:libro/cap/v       → lista JS de { gr, tr, es } con la transliteración y la glosa del interlineal
#                            (las mismas que muestra la página interlineal/, calculadas con node)
#   intgtr:libro/cap/v     → la transliteración del versículo en una línea
# y R('libro', cap, v, 'Referencia') → { ref, gr, tr, p, rv } con las marcas de ese versículo (lo usa V() en las partes).
# Antes hay que correr interlineal_griego_datos.py e interlineal_griego_lexico.py.
import os, re, json, sys, glob, subprocess, tempfile
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import n1904
H = os.path.join(R, 'herramientas', 'interlineal_griego')
APP = os.path.join(R, 'public', 'apps', 'interlineal-griego')
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


def griego(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    return js(' '.join(n1904.verso(libro, cap, v) for v in rango(vv)))


NODE = r"""
global.window = {}; global.document = { readyState: 'x', addEventListener() {}, getElementById() { return null; } };
const fs = require('fs'), dir = process.argv[2];
require(dir + '/lexico.js');
eval(fs.readFileSync(dir + '/interlineal.js', 'utf8').replace(/if \(document\.readyState[^\n]*\n/, ''));
const I = window.InterlinealG, refs = JSON.parse(fs.readFileSync(process.argv[3], 'utf8')), out = {};
const libros = {};
for (const r of refs) {
  const [l, c, v] = r.split('/');
  libros[l] = libros[l] || JSON.parse(fs.readFileSync(dir + '/datos/' + l + '.json', 'utf8'));
  const ps = libros[l].c[+c - 1][+v - 1];
  const g = I.glosarVerso(ps);
  out[r] = ps.map((p, i) => ({ gr: p[0], tr: p[1], es: g[i] }));
}
console.log(JSON.stringify(out));
"""


def main():
    partes = sorted(glob.glob(os.path.join(H, 'parte*.js')))
    src = ''.join(open(p, encoding='utf-8').read() for p in partes)
    # R('cod', c, v, 'Ref') → objeto con las cinco marcas del versículo
    src = re.sub(r"R\('([a-z0-9]+)', (\d+), (\d+), '([^']+)'\)",
                 lambda m: "{ ref: '%s', gr: '@@n1904:%s/%s/%s', tr: '@@intgtr:%s/%s/%s', p: '@@intg:%s/%s/%s', rv: '@@%s/%s/%s' }" % ((m.group(4),) + (m.group(1), m.group(2), m.group(3)) * 4), src)
    refs = sorted(set(re.findall(r"'@@intg(?:tr)?:([a-z0-9]+/\d+/\d+)'", src)))
    glos = {}
    if refs:
        with tempfile.NamedTemporaryFile('w', suffix='.json', delete=False) as f:
            json.dump(refs, f)
        with tempfile.NamedTemporaryFile('w', suffix='.cjs', delete=False) as f2:
            f2.write(NODE)
        glos = json.loads(subprocess.check_output(['node', f2.name, os.path.abspath(INT), f.name]))

    def inter(m):
        tipo, ref = m.group(1), m.group(2)
        ws = glos[ref]
        if tipo == 'intgtr':
            t = ' '.join(re.sub(r'[()\[\]]', '', w['tr']) for w in ws if w['tr'])
            return js(t[:1].upper() + t[1:] + '.')
        return '[' + ', '.join('{ gr: %s, tr: %s, es: %s }' % (js(re.sub(r'[.,;·’]$|[·;.,]$', '', w['gr']).strip('()[]')), js(w['tr']), js(w['es'])) for w in ws) + ']'
    out = re.sub(r"'@@(intg|intgtr):([a-z0-9]+/\d+/\d+)'", inter, src)
    out = re.sub(r"'@@n1904:([a-z0-9]+)/(\d+)/([\d-]+)'", griego, out)
    out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
    faltan = [m for m in re.findall(r"src: '(img/[^']+)'", out) if not os.path.exists(os.path.join(APP, m))]
    out = re.sub(r"src: '(img/[^']+)', ", lambda m: m.group(0) if m.group(1) not in faltan else '', out)
    assert '@@' not in out, re.findall(r'@@[^\']*', out)[:5]
    open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
    print('data.js:', len(out), 'caracteres, de', len(partes), 'partes;', len(refs), 'versículos del interlineal')
    r = subprocess.run(['node', '-e', "global.window={};require(process.argv[1]);const D=window.RUTA_DATA;let n=0,p=0,mx=0,mn=1e9;D.rutas.forEach(r=>{n+=r.estaciones.length;r.estaciones.forEach(e=>{const k=e.texto.map(x=>typeof x==='string'?x:x.ejercicio?[x.ejercicio.pregunta,x.ejercicio.explicacion].concat(x.ejercicio.opciones.map(o=>o.t+' '+o.por_que)).join(' '):x.posturas?[x.posturas.a.t,x.posturas.b.t,x.posturas.c||''].join(' '):'').join(' ').split(/\\s+/).length;p+=k;mx=Math.max(mx,k);mn=Math.min(mn,k)})});console.log(D.rutas.length+' rutas, '+n+' estaciones, '+Math.round(p/n)+' palabras por estación (de '+mn+' a '+mx+')')", os.path.join(APP, 'data.js')], capture_output=True, text=True)
    print(r.stdout.strip() or r.stderr.strip())


if __name__ == '__main__':
    main()
