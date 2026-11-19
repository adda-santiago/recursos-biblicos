# Transliteración sencilla del griego para hispanohablantes (la de El alfabeto griego y la lectura):
#   j = χ, th = θ, f = φ, ps = ψ, x = ξ, z = ζ, ē = η, ō = ω, y = υ (u en los diptongos αυ, ευ, ηυ, ου),
#   h = espíritu áspero, ng/nk/nx/nj = γ ante γ κ ξ χ, rh = ῥ inicial.
#   Las palabras de más de una sílaba llevan siempre la tilde en la vocal acentuada (ḗ y ṓ si es η u ω);
#   los monosílabos no la llevan. La iota suscrita no se escribe.
# Uso: from griego_tr import tr;  tr('Ἰησοῦς') → 'Iēsús'
import unicodedata

BASE = {'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'ē', 'θ': 'th', 'ι': 'i', 'κ': 'k',
        'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't',
        'υ': 'y', 'φ': 'f', 'χ': 'j', 'ψ': 'ps', 'ω': 'ō'}
VOC = set('αεηιουω')
AGUDO = '́'
ACENTOS = {'́', '̀', '͂'}  # agudo, grave, circunflejo
ASPERO, SUAVE, SUSCRITA, DIERESIS = '̔', '̓', 'ͅ', '̈'


def _letras(palabra):
    """Lista de (letra base en minúscula, mayúscula, áspero, acento, diéresis)."""
    out = []
    for ch in unicodedata.normalize('NFD', palabra):
        if unicodedata.category(ch) == 'Mn':
            if not out:
                continue
            b, may, asp, ac, di = out[-1]
            if ch == ASPERO: asp = True
            elif ch in ACENTOS: ac = True
            elif ch == DIERESIS: di = True
            out[-1] = (b, may, asp, ac, di)
        elif ch.lower() in BASE or ch.lower() == 'ς':
            out.append((ch.lower(), ch != ch.lower(), False, False, False))
        elif ch in '’ʼ᾽\'':
            out.append(("'", False, False, False, False))
    return out


def tr(palabra):
    L = _letras(palabra)
    # unidades: vocales o diptongos (para contar sílabas y poner la h y la tilde)
    unidades, i = [], 0
    while i < len(L):
        b = L[i][0]
        if b in VOC:
            if i + 1 < len(L) and not L[i + 1][4] and (b + L[i + 1][0]) in ('αι', 'ει', 'οι', 'υι', 'αυ', 'ευ', 'ηυ', 'ου'):
                unidades.append(('d', i, i + 1)); i += 2; continue
            unidades.append(('v', i, i)); i += 1; continue
        unidades.append(('c', i, i)); i += 1
    silabas = sum(1 for u in unidades if u[0] != 'c')
    res = []
    for k, (t, a, z) in enumerate(unidades):
        letras = L[a:z + 1]
        asp = any(x[2] for x in letras)
        ac = any(x[3] for x in letras)
        may = letras[0][1]
        if t == 'c':
            b = letras[0][0]
            sig = L[z + 1][0] if z + 1 < len(L) else ''
            if b == "'":
                s = '’'
            elif b == 'γ' and sig in ('γ', 'κ', 'ξ', 'χ'):
                s = 'n'
            elif b == 'ρ' and asp:
                s = 'rh'
            else:
                s = BASE[b]
        else:
            par = ''.join(x[0] for x in letras)
            if t == 'd':
                s = {'αι': 'ai', 'ει': 'ei', 'οι': 'oi', 'υι': 'yi', 'αυ': 'au', 'ευ': 'eu', 'ηυ': 'ēu', 'ου': 'u'}[par]
            else:
                s = BASE[par]
            if ac and silabas > 1:
                # la tilde va en la vocal que la lleva en griego (en el diptongo, la segunda; en ου, la u)
                j = len(s) - 1
                s = s[:j] + unicodedata.normalize('NFC', s[j] + AGUDO)
            if asp:
                s = 'h' + s
        if may:
            s = s[0].upper() + s[1:]
        res.append(s)
    return unicodedata.normalize('NFC', ''.join(res))


if __name__ == '__main__':
    for w in ['Ἰησοῦς', 'Θεός', 'ἀγάπη', 'ζωή', 'λόγος', 'χάρις', 'ψυχή', 'ὥρα', 'υἱός', 'ἄγγελος', 'εὐαγγέλιον',
              'αὐτός', 'οἱ', 'ῥῆμα', 'γῆ', 'φῶς', 'ἐκκλησία', 'Ἰουδαῖος', 'ἀλλ’', 'πνεῦμα', 'μετάνοια', 'ἔγνων']:
        print(w, tr(w))
