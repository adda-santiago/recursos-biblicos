# Interlineal hebreo–español (AT) · armado de los datos (desde la v2.51).
# Lee el Códice de Leningrado con la morfología de OSHB (herramientas/biblia/fuentes/wlc/*.xml, ver wlc.py)
# y escribe:
#   public/apps/interlineal-hebreo/interlineal/datos/{libro}.json   un archivo por libro
#   herramientas/interlineal/lemas.tsv                                lemas con frecuencia y léxico de Strong
# El léxico con las glosas en español lo arma herramientas/interlineal_lexico.py.
#
# Formato de cada libro: {"l": código, "n": nombre, "c": [capítulo → [versículo → [palabra]]], "rv": {...}}
#   palabra = [hebreo con vocales y "/" entre prefijos, raíz y sufijos, transliteración, lema, morfología]
#             + un quinto elemento opcional: 1 si va unida a la siguiente por maqaf;
#             + un sexto opcional: el qere [hebreo, transliteración, lema, morfología] cuando la palabra es ketiv.
#   rv = numeración de la RV 1960 cuando difiere de la hebrea: {"cap:vers": "cap:vers"} o "t" (título del salmo).
import os, re, json, sys, collections, xml.etree.ElementTree as ET
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wlc import LIBROS, DIR, NS

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, 'public', 'apps', 'interlineal-hebreo', 'interlineal', 'datos')
TRABAJO = os.path.join(RAIZ, 'herramientas', 'interlineal')
INDICE = json.load(open(os.path.join(RAIZ, 'public', 'biblia', 'indice.json'), encoding='utf8'))
NOMBRES = dict(INDICE['libros'])
RV = INDICE['versiculos']['rv1960']

# ---------------------------------------------------------------- transliteración sencilla
# Como en El alfabeto hebreo: pronunciación israelí moderna, j = ח y כ sin punto, sh = שׁ, ts = צ,
# v = ב sin punto y ו consonante, k = כּ y ק, sin marcar alef ni ayin; la tilde marca el acento
# cuando no sigue la regla del español. La sílaba tónica sale de los acentos masoréticos.
SHEVA, HSEG, HPAT, HQAM, HIR, TSE, SEG, PAT, QAM, HOL, HOLV, QUB, DAG, MET, RAFE, SHIN, SIN, QQ = (
    'ְ', 'ֱ', 'ֲ', 'ֳ', 'ִ', 'ֵ', 'ֶ', 'ַ', 'ָ', 'ֹ', 'ֺ',
    'ֻ', 'ּ', 'ֽ', 'ֿ', 'ׁ', 'ׂ', 'ׇ')
VOCAL = {HSEG: 'e', HPAT: 'a', HQAM: 'o', HIR: 'i', TSE: 'e', SEG: 'e', PAT: 'a', QAM: 'a', HOL: 'o', HOLV: 'o',
         QUB: 'u', QQ: 'o'}
CONS = {'א': '', 'ב': 'v', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'j', 'ט': 't', 'י': 'y', 'כ': 'j',
        'ך': 'j', 'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n', 'ן': 'n', 'ס': 's', 'ע': '', 'פ': 'f', 'ף': 'f', 'צ': 'ts',
        'ץ': 'ts', 'ק': 'k', 'ר': 'r', 'ש': 'sh', 'ת': 't'}
DURA = {'ב': 'b', 'כ': 'k', 'ך': 'k', 'פ': 'p', 'ף': 'p'}
ACENTO = re.compile('[֑-֯]')
POSPOSITIVOS = {'֙', '֒', '֮', '֩'}   # pashta, segolta, zarqa, telisha qetana
PREPOSITIVOS = {'֠', '֚', '֭'}             # telisha gedola, yetiv, dehi

def grupos(palabra):
    """Divide en letras con sus signos: [(letra, signos)]."""
    out = []
    for ch in palabra:
        if 'א' <= ch <= 'ת':
            out.append([ch, ''])
        elif out:
            out[-1][1] += ch
    return out

def tilde(v):
    return {'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú'}[v]

def translit(palabra, nombre=False):
    """palabra: hebreo con vocales y acentos ('/' entre morfemas se ignora)."""
    g = grupos(palabra.replace('/', ''))
    n = len(g)
    if not n:
        return ''
    piezas = []                 # [texto, True si es vocal silábica]
    vidx = [None] * n           # pieza de la vocal de cada letra
    prev_vocal = None
    prev_sheva = False
    for i, (l, s) in enumerate(g):
        ult = i == n - 1
        vocal = next((VOCAL[c] for c in s if c in VOCAL), None)
        sheva = SHEVA in s
        dag = DAG in s
        if l == 'ו' and dag and vocal is None and not sheva and (i == 0 or prev_vocal is None):
            piezas.append(['u', True]); vidx[i] = len(piezas) - 1; prev_vocal, prev_sheva = 'u', False; continue
        if l == 'ו' and (HOL in s or HOLV in s) and not dag and i > 0 and prev_vocal is None:
            piezas.append(['o', True]); vidx[i] = len(piezas) - 1; prev_vocal, prev_sheva = 'o', False; continue
        sig_vav_vocal = i + 1 < n and g[i + 1][0] == 'ו' and (HOL in g[i + 1][1] or (DAG in g[i + 1][1] and not any(c in VOCAL for c in g[i + 1][1])))
        if l == 'י' and vocal is None and not sheva and not dag and prev_vocal in ('i', 'e') and piezas and piezas[-1][1] is True and not sig_vav_vocal:
            continue
        if l == 'י' and vocal is None and not sheva and not dag and prev_vocal == 'a' and i == n - 2 and g[-1][0] == 'ו':
            continue
        if l == 'ה' and ult and vocal is None and not dag:
            continue
        if l == 'א' and vocal is None:
            if i + 1 < n and g[i + 1][0] == 'ו' and HOL in g[i + 1][1]:
                prev_vocal = None
            continue
        if l == 'ש':
            c = 's' if SIN in s else 'sh'
        elif l in DURA and dag:
            c = DURA[l]
        elif l == 'ה' and ult and dag:
            c = 'h'
        else:
            c = CONS[l]
        if l == 'י' and vocal is None and not sheva and prev_vocal in ('a', 'o', 'u'):
            c = 'i'
        if ult and l in ('ח', 'ע', 'ה') and vocal == 'a' and prev_vocal is not None:
            piezas.append(['a', True]); vidx[i] = len(piezas) - 1; piezas.append([c, False]); continue
        piezas.append([c, False])
        if vocal:
            piezas.append([vocal, True]); vidx[i] = len(piezas) - 1
            prev_vocal, prev_sheva = vocal, False
        elif sheva:
            igual = i + 1 < n and CONS.get(g[i + 1][0]) == CONS.get(l) and l not in 'אע'
            vocal_sheva = i == 0 or (prev_sheva and not ult) or (dag and prev_vocal is not None and l not in DURA) or igual
            if vocal_sheva and not ult and not (i == n - 2 and SHEVA in g[-1][1]):
                piezas.append(['e', 'sheva'])
                prev_vocal = 'e'
            else:
                prev_vocal = None
            prev_sheva = True
        else:
            prev_vocal, prev_sheva = None, False
    vocales = [k for k, (_, v) in enumerate(piezas) if v]
    def vocal_de(i):
        if vidx[i] is not None:
            return vidx[i]
        if i + 1 < n and g[i + 1][0] == 'ו' and vidx[i + 1] is not None:
            return vidx[i + 1]
        for j in range(i, -1, -1):
            if vidx[j] is not None:
                return vidx[j]
        return None
    principales = [i for i, (_, s) in enumerate(g) if set(ACENTO.findall(s)) - PREPOSITIVOS - POSPOSITIVOS]
    pashtas = [i for i, (_, s) in enumerate(g) if '\u0599' in s]
    tonica = None
    if principales:
        tonica = vocal_de(principales[-1])
    elif len(pashtas) >= 2:
        tonica = vocal_de(pashtas[0])
    elif ACENTO.search(palabra):
        llenas = [k for k in vocales if piezas[k][1] is True]
        tonica = llenas[-1] if llenas else None
    elif MET in palabra:
        mets = [i for i, (_, s) in enumerate(g) if MET in s]
        tonica = vocal_de(mets[-1])
    texto = [p for p, _ in piezas]
    out = ''.join(texto)
    if tonica is not None and piezas[tonica][1] is True and len(vocales) > 1:
        pos = len(vocales) - 1 - vocales.index(tonica)
        llana = out[-1] in 'aeiouns'
        if pos >= 2 or (pos == 0 and llana) or (pos == 1 and not llana):
            texto[tonica] = tilde(texto[tonica])
            out = ''.join(texto)
    if nombre and out:
        out = out[0].upper() + out[1:]
    return out

def translit_palabra(he, lema, morph):
    """Transliteración de la palabra con sus prefijos; el nombre divino se lee Adonái (o Elohím)."""
    partes_he = he.split('/')
    partes_lema = lema.split('/')
    morfs = morph[1:].split('/')
    if any(re.sub(r'\D', '', p) in ('3068', '3069') for p in partes_lema):
        lectura = 'Elohím' if any(re.sub(r'\D', '', p) == '3069' for p in partes_lema) else 'Adonái'
        pre = []
        for ph, pl in zip(partes_he, partes_lema):
            if re.sub(r'\D', '', pl) in ('3068', '3069'):
                break
            pre.append(ph)
        p = translit('/'.join(pre) + 'א') if pre else ''      # el prefijo con una consonante muda detrás
        return (p + '-' if p else '') + lectura
    nombre = any(m.startswith('Np') for m in morfs)
    t = translit(he)
    if nombre:
        # mayúscula en la raíz, después de los prefijos
        npre = 0
        for m in morfs:
            if m.startswith('Np'):
                break
            npre += 1
        if npre:
            pre = translit('/'.join(partes_he[:npre]) + 'א')
            if t.lower().startswith(pre.lower()) and len(t) > len(pre):
                return pre + '-' + t[len(pre)].upper() + t[len(pre) + 1:]
        return t[:1].upper() + t[1:]
    return t

# ---------------------------------------------------------------- versificación hebrea → RV 1960
# (libro, cap. hebreo, primer vers., último vers., cap. RV, primer vers. RV); "último" None = hasta el final
REGLAS = [
    ('gn', 32, 1, 1, 31, 55), ('gn', 32, 2, None, 32, 1),
    ('ex', 7, 26, 29, 8, 1), ('ex', 8, 1, None, 8, 5), ('ex', 21, 37, 37, 22, 1), ('ex', 22, 1, None, 22, 2),
    ('lv', 5, 20, 26, 6, 1), ('lv', 6, 1, None, 6, 8),
    ('nm', 17, 1, 15, 16, 36), ('nm', 17, 16, None, 17, 1), ('nm', 25, 19, 19, 26, 1), ('nm', 30, 1, 1, 29, 40),
    ('nm', 30, 2, None, 30, 1),
    ('dt', 13, 1, 1, 12, 32), ('dt', 13, 2, None, 13, 1), ('dt', 23, 1, 1, 22, 30), ('dt', 23, 2, None, 23, 1),
    ('dt', 28, 69, 69, 29, 1), ('dt', 29, 1, None, 29, 2),
    ('1s', 21, 1, 1, 20, 42), ('1s', 21, 2, None, 21, 1), ('1s', 24, 1, 1, 23, 29), ('1s', 24, 2, None, 24, 1),
    ('2s', 19, 1, 1, 18, 33), ('2s', 19, 2, None, 19, 1),
    ('1r', 5, 1, 14, 4, 21), ('1r', 5, 15, None, 5, 1), ('1r', 22, 44, 44, 22, 43), ('1r', 22, 45, None, 22, 44),
    ('2r', 12, 1, 1, 11, 21), ('2r', 12, 2, None, 12, 1),
    ('1cr', 5, 27, None, 6, 1), ('1cr', 6, 1, None, 6, 16), ('1cr', 12, 5, 5, 12, 4), ('1cr', 12, 6, None, 12, 5),
    ('2cr', 1, 18, 18, 2, 1), ('2cr', 2, 1, None, 2, 2), ('2cr', 13, 23, 23, 14, 1), ('2cr', 14, 1, None, 14, 2),
    ('neh', 3, 33, None, 4, 1), ('neh', 7, 68, None, 7, 69), ('neh', 4, 1, None, 4, 7), ('neh', 10, 1, 1, 9, 38), ('neh', 10, 2, None, 10, 1),
    ('job', 40, 25, None, 41, 1), ('job', 41, 1, None, 41, 9),
    ('ec', 4, 17, 17, 5, 1), ('ec', 5, 1, None, 5, 2),
    ('cnt', 7, 1, 1, 6, 13), ('cnt', 7, 2, None, 7, 1),
    ('is', 8, 23, 23, 9, 1), ('is', 9, 1, None, 9, 2), ('is', 64, 1, None, 64, 2),
    ('jer', 8, 23, 23, 9, 1), ('jer', 9, 1, None, 9, 2),
    ('ez', 21, 1, 5, 20, 45), ('ez', 21, 6, None, 21, 1),
    ('dn', 3, 31, None, 4, 1), ('dn', 4, 1, None, 4, 4), ('dn', 6, 1, 1, 5, 31), ('dn', 6, 2, None, 6, 1),
    ('os', 2, 1, 2, 1, 10), ('os', 2, 3, None, 2, 1), ('os', 12, 1, 1, 11, 12), ('os', 12, 2, None, 12, 1),
    ('os', 14, 1, 1, 13, 16), ('os', 14, 2, None, 14, 1),
    ('jl', 3, 1, None, 2, 28), ('jl', 4, 1, None, 3, 1),
    ('jon', 2, 1, 1, 1, 17), ('jon', 2, 2, None, 2, 1),
    ('mi', 4, 14, 14, 5, 1), ('mi', 5, 1, None, 5, 2),
    ('nah', 2, 1, 1, 1, 15), ('nah', 2, 2, None, 2, 1),
    ('zac', 2, 1, 4, 1, 18), ('zac', 2, 5, None, 2, 1),
    ('mal', 3, 19, None, 4, 1),
]

def a_rv(cod, cap, v, nheb):
    for (b, c, v1, v2, rc, rv1) in REGLAS:
        if b == cod and c == cap and v >= v1 and (v2 is None or v <= v2):
            return rc, rv1 + (v - v1)
    if cod == 'sal':
        rvn = RV['sal'][cap - 1]
        d = nheb - rvn
        if d > 0:
            return ('t', None) if v <= d else (cap, v - d)
    return cap, v

# ---------------------------------------------------------------- lectura de OSHB
def leer_w(w):
    he = ''.join(w.itertext())
    lema = w.get('lemma', '')
    morph = w.get('morph', '')
    return he, lema, morph

def libro(cod):
    f = LIBROS[cod]
    raiz = ET.parse(os.path.join(DIR, f + '.xml')).getroot()
    caps = []
    for ch in raiz.iter(NS + 'chapter'):
        vs = []
        for ve in ch.iter(NS + 'verse'):
            pals = []
            for el in ve:
                tag = el.tag.replace(NS, '')
                if tag == 'w':
                    he, lema, morph = leer_w(el)
                    p = [he, '', lema, morph]
                    if el.get('type') == 'x-ketiv':
                        p.append(0)
                        p.append(None)   # qere por llenar
                    pals.append(p)
                elif tag == 'seg' and el.get('type') == 'x-maqqef' and pals:
                    if len(pals[-1]) == 4: pals[-1].append(1)
                    else: pals[-1][4] = 1
                elif tag == 'note' and el.get('type') == 'variant':
                    rdg = el.find(NS + 'rdg')
                    if rdg is not None and rdg.get('type') == 'x-qere':
                        qs = [leer_w(w) for w in rdg.iter(NS + 'w')]
                        if el.find(NS + 'catchWord') is None:
                            # qere sin ketiv: se lee una palabra que no está escrita (Rut 3:5)
                            q0 = qs[0]
                            pals.append(['', '', q0[1], q0[2], 0, [[q[0], '', q[1], q[2]] for q in qs]])
                            continue
                        # se cuelga del último ketiv sin qere; si el qere tiene varias palabras, van todas
                        for p in reversed(pals):
                            if len(p) == 6 and p[5] is None:
                                p[5] = [[q[0], '', q[1], q[2]] for q in qs]
                                break
            vs.append(pals)
        caps.append(vs)
    return caps

def main():
    os.makedirs(SALIDA, exist_ok=True)
    os.makedirs(TRABAJO, exist_ok=True)
    freq = collections.Counter()
    pos = collections.defaultdict(collections.Counter)
    ejemplo = {}
    problemas = []
    total = 0
    for cod in LIBROS:
        caps = libro(cod)
        rv = {}
        cubiertos = set()
        for ci, vs in enumerate(caps, 1):
            for vi, pals in enumerate(vs, 1):
                rc, rvv = a_rv(cod, ci, vi, len(vs))
                if rc == 't':
                    rv[f'{ci}:{vi}'] = 't'
                else:
                    if (rc, rvv) != (ci, vi):
                        rv[f'{ci}:{vi}'] = f'{rc}:{rvv}'
                    if rc > len(RV[cod]) or rvv > RV[cod][rc - 1]:
                        problemas.append(f'{cod} {ci}:{vi} → {rc}:{rvv} no existe en la RV 1960')
                    cubiertos.add((rc, rvv))
                for p in pals:
                    total += 1
                    ws = [p] + (p[5] if len(p) == 6 and p[5] else [])
                    for w in ws:
                        w[1] = translit_palabra(w[0], w[2], w[3]) if re.search('[\u05b0-\u05bb]', w[0]) else ''
                        w[0] = re.sub('[\u0591-\u05af\u05bd\u05c0\u05c3-\u05c5]', '', w[0])   # sin acentos ni meteg
                    # lemas para las glosas (la palabra que se lee: qere si hay)
                    lee = p[5] if len(p) == 6 and p[5] else [p]
                    for w in lee:
                        for lp, mp in zip(w[2].split('/'), w[3][1:].split('/')):
                            num = re.sub(r'[^\d]', '', lp.split('+')[0])
                            if num:
                                freq[num] += 1
                                pos[num][('A' if w[3][0] == 'A' else '') + mp[:2]] += 1
                                ejemplo.setdefault(num, f'{cod} {ci}:{vi}')
        for c in range(1, len(RV[cod]) + 1):
            for v in range(1, RV[cod][c - 1] + 1):
                if (c, v) not in cubiertos:
                    problemas.append(f'{cod} RV {c}:{v} sin versículo hebreo')
        # ketiv sin qere encontrado: se quita el hueco
        for vs in caps:
            for pals in vs:
                for p in pals:
                    if len(p) == 6 and p[5] is None:
                        p.pop();
                    if len(p) == 5 and p[4] == 0:
                        p.pop()
        datos = {'l': cod, 'n': NOMBRES[cod], 'c': caps, 'rv': rv}
        with open(os.path.join(SALIDA, cod + '.json'), 'w', encoding='utf8') as fh:
            json.dump(datos, fh, ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(TRABAJO, 'lemas.tsv'), 'w', encoding='utf8') as fh:
        fh.write('strong\tveces\tclase\tejemplo\n')
        for num, c in freq.most_common():
            fh.write(f'{num}\t{c}\t{",".join(k for k, _ in pos[num].most_common(3))}\t{ejemplo[num]}\n')
    print('palabras', total, 'lemas', len(freq))
    print('\n'.join(problemas[:80]), f'\n({len(problemas)} avisos de versificación)')

if __name__ == '__main__':
    main()
