/* ==========================================================
   Interlineal griego–español (NT) · página auxiliar del recurso nº 91 (desde la v2.57)
   Datos: datos/{libro}.json (herramientas/interlineal_griego_datos.py) y lexico.js (interlineal_griego_lexico.py).
   La glosa de cada palabra se arma aquí con la glosa del lema (lexico.js), su morfología (Nestle 1904,
   códigos de Robinson) y las palabras vecinas:
   · el artículo toma el género del sustantivo español que acompaña (ἡ ἀγάπη → «el amor»);
   · el genitivo lleva «de» y el dativo «a» cuando no hay una preposición delante (τοῦ θεοῦ → «del Dios»),
     solo en la primera palabra de cada grupo (artículo, adjetivo y sustantivo que concuerdan);
   · los sustantivos y adjetivos van en plural cuando el griego lo está; los pronombres, según caso y número;
   · la preposición toma el sentido que le da el caso (διά + genitivo «por medio de», + acusativo «por causa de»).
   Los verbos quedan en infinitivo: la forma verbal se explica en la morfología y en la ficha.
   ========================================================== */
(() => {
  'use strict';
  const LEX = window.LEXICO_G;
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = n => Number(n).toLocaleString('es');
  const LIBROS = [['mt', 'Mateo'], ['mr', 'Marcos'], ['lc', 'Lucas'], ['jn', 'Juan'], ['hch', 'Hechos'], ['ro', 'Romanos'], ['1co', '1 Corintios'], ['2co', '2 Corintios'], ['ga', 'Gálatas'], ['ef', 'Efesios'], ['fil', 'Filipenses'], ['col', 'Colosenses'], ['1ts', '1 Tesalonicenses'], ['2ts', '2 Tesalonicenses'], ['1ti', '1 Timoteo'], ['2ti', '2 Timoteo'], ['tit', 'Tito'], ['flm', 'Filemón'], ['he', 'Hebreos'], ['stg', 'Santiago'], ['1p', '1 Pedro'], ['2p', '2 Pedro'], ['1jn', '1 Juan'], ['2jn', '2 Juan'], ['3jn', '3 Juan'], ['jud', 'Judas'], ['ap', 'Apocalipsis']];
  const NOMBRE = Object.fromEntries(LIBROS);
  const CAPS = { mt: 28, mr: 16, lc: 24, jn: 21, hch: 28, ro: 16, '1co': 16, '2co': 13, ga: 6, ef: 6, fil: 4, col: 4, '1ts': 5, '2ts': 3, '1ti': 6, '2ti': 4, tit: 3, flm: 1, he: 13, stg: 5, '1p': 5, '2p': 3, '1jn': 5, '2jn': 1, '3jn': 1, jud: 1, ap: 22 };
  const DLBAN = '../../../de-la-biblia-a-nosotros/';   // ficha de De la Biblia a nosotros (el # pasa a la ruta)

  /* Notas sobre pasajes en que la Reina-Valera traduce otro texto griego (ruta IV del recurso) */
  const NOTAS = {
    'jn/1/18': 'Donde la Reina-Valera dice «el unigénito Hijo», Nestle 1904 lee μονογενὴς Θεός, «Dios unigénito», como los papiros más antiguos. Las dos lecturas presentan a Cristo como el único que da a conocer al Padre; la de Nestle, además, lo llama Dios.',
    'mt/6/13': 'La Reina-Valera termina con «porque tuyo es el reino, y el poder, y la gloria, por todos los siglos. Amén», que traen muchos manuscritos tardíos y el Textus Receptus. Nestle 1904 sigue a los manuscritos más antiguos, que no la tienen.',
    'jn/5/3': 'Nestle 1904 pone entre paréntesis el final del versículo 3 y el versículo 4 (el ángel que agitaba el agua), porque faltan en los manuscritos más antiguos.',
    'jn/5/4': 'Nestle 1904 pone este versículo entre paréntesis, porque falta en los manuscritos más antiguos.',
    'lc/9/55': 'La Reina-Valera agrega «diciendo: Vosotros no sabéis de qué espíritu sois», y el versículo 56 trae «porque el Hijo del Hombre no ha venido para perder las almas de los hombres, sino para salvarlas». Esas palabras están en el Textus Receptus y no en Nestle 1904.',
    'ro/8/1': 'La Reina-Valera agrega «los que no andan conforme a la carne, sino conforme al Espíritu», que en los manuscritos más antiguos aparece solo en el versículo 4.',
    '1ti/3/16': 'Donde la Reina-Valera dice «Dios fue manifestado», Nestle 1904 lee ὅς, «el cual fue manifestado». Las dos lecturas hablan de Cristo; la diferencia está en una sola letra de los manuscritos.',
    '1jn/5/7': 'La Reina-Valera dice «tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno», la llamada «coma joánica». Esas palabras no están en Nestle 1904 ni en ningún manuscrito griego anterior al siglo X. La Trinidad se enseña en muchos otros pasajes.',
    '1jn/5/8': 'La Reina-Valera agrega «y tres son los que dan testimonio en la tierra». Ver la nota del versículo 7.',
    'mr/1/2': 'Nestle 1904 dice «en el profeta Isaías»; la Reina-Valera, con el Textus Receptus, «en los profetas». Marcos cita a Malaquías e Isaías y nombra al más conocido.',
    'ap/22/19': 'Donde la Reina-Valera dice «del libro de la vida», Nestle 1904 lee «del árbol de la vida», como los manuscritos griegos más antiguos.'
  };
  const DISC = {
    1: 'Marcos 16:9-20 falta en los dos manuscritos completos más antiguos (Sinaítico y Vaticano), y Nestle 1904 lo imprime entre corchetes dobles. Lo traen la gran mayoría de los manuscritos y lo citan escritores del siglo II. Ninguna doctrina depende solo de este pasaje.',
    2: 'Juan 7:53–8:11 (la mujer sorprendida en adulterio) falta en los manuscritos más antiguos, y Nestle 1904 lo imprime entre paréntesis. Muchos estudiosos lo consideran un relato auténtico de la vida de Jesús que se conservó aparte.'
  };

  /* ---------------------------------------------------------------- morfología (Robinson) */
  const CASO = { N: 'nominativo', G: 'genitivo', D: 'dativo', A: 'acusativo', V: 'vocativo' };
  const CASO_C = { N: 'nom.', G: 'gen.', D: 'dat.', A: 'ac.', V: 'voc.' };
  const NUMG = { S: 'singular', P: 'plural' };
  const GENG = { M: 'masculino', F: 'femenino', N: 'neutro' };
  const TIEMPO = { P: 'presente', I: 'imperfecto', F: 'futuro', A: 'aoristo', R: 'perfecto', L: 'pluscuamperfecto' };
  const TIEMPO_C = { P: 'pres.', I: 'imperf.', F: 'fut.', A: 'aor.', R: 'perf.', L: 'plusc.' };
  const VOZ = { A: 'activa', M: 'media', P: 'pasiva', E: 'media o pasiva', D: 'media (deponente)', O: 'pasiva (deponente)', N: 'media o pasiva (deponente)', Q: 'activa', X: '' };
  const VOZ_C = { A: 'act.', M: 'med.', P: 'pas.', E: 'med./pas.', D: 'med.', O: 'pas.', N: 'med./pas.', Q: 'act.', X: '' };
  const MODO = { I: 'indicativo', S: 'subjuntivo', O: 'optativo', M: 'imperativo', N: 'infinitivo', P: 'participio', R: 'participio imperativo' };
  const MODO_C = { I: 'ind.', S: 'subj.', O: 'opt.', M: 'imper.', N: 'inf.', P: 'part.', R: 'part.' };
  const ASPECTO = {
    P: 'El presente mira la acción en curso o como algo habitual.',
    I: 'El imperfecto mira una acción en curso en el pasado: «hacía», «estaba haciendo».',
    F: 'El futuro anuncia lo que va a ocurrir.',
    A: 'El aoristo mira la acción como un todo, sin detenerse en su duración; en indicativo suele narrar el pasado. No significa por sí solo «una vez y para siempre».',
    R: 'El perfecto mira una acción terminada cuyo resultado sigue vigente: γέγραπται, «escrito está».',
    L: 'El pluscuamperfecto mira una acción terminada antes de otro momento del pasado, con su resultado.'
  };
  const CLASE = { N: 'sustantivo', A: 'adjetivo', T: 'artículo', P: 'pronombre personal', D: 'pronombre demostrativo', R: 'pronombre relativo', I: 'pronombre interrogativo', X: 'pronombre indefinido', F: 'pronombre reflexivo', S: 'adjetivo posesivo', C: 'pronombre recíproco', K: 'pronombre correlativo', Q: 'pronombre correlativo o interrogativo', V: 'verbo', ADV: 'adverbio', CONJ: 'conjunción', PREP: 'preposición', PRT: 'partícula', COND: 'conjunción condicional', INJ: 'interjección', HEB: 'palabra hebrea transliterada', ARAM: 'palabra aramea transliterada' };
  const CLASE_C = { N: 'sust.', A: 'adj.', T: 'art.', P: 'pron.', D: 'dem.', R: 'rel.', I: 'interr.', X: 'indef.', F: 'refl.', S: 'pos.', C: 'recíp.', K: 'correl.', Q: 'correl.', ADV: 'adv.', CONJ: 'conj.', PREP: 'prep.', PRT: 'part.', COND: 'conj.', INJ: 'interj.', HEB: 'hebr.', ARAM: 'aram.' };
  const NOMINAL = new Set('NATPDRIXFSCKQ');

  // Un código de Robinson → { pos, caso, num, gen, pers, tiempo, voz, modo, suf, segunda }
  function morfo(code) {
    const p = code.split('-');
    const r = { pos: p[0], code };
    if (p[0] === 'V') {
      let t = p[1];
      if (t[0] === '2') { r.segunda = true; t = t.slice(1); }
      r.tiempo = t[0]; r.voz = t[1]; r.modo = t[2];
      const resto = p[2] || '';
      if (/^[123][SP]$/.test(resto)) { r.pers = resto[0]; r.num = resto[1]; }
      else if (/^[NGDAV][SP][MFN]$/.test(resto)) { r.caso = resto[0]; r.num = resto[1]; r.gen = resto[2]; }
      return r;
    }
    if (p[0] === 'N' && p[1] === 'PRI') { r.indecl = true; return r; }
    if (NOMINAL.has(p[0]) && /^(NUI|LI|OI|PRI)$/.test(p[1] || '')) { r.indecl = true; return r; }   // números y letras indeclinables
    if (NOMINAL.has(p[0]) && p[1]) {
      let s = p[1];
      if (/^[123]/.test(s)) { r.pers = s[0]; s = s.slice(1); }
      if (p[0] === 'S' && /^[SP]/.test(s) && s.length === 4) { r.posee = s[0]; s = s.slice(1); }
      if (/^[NGDAV]/.test(s)) { r.caso = s[0]; r.num = s[1]; r.gen = s[2]; }
      r.suf = p[2];
    } else r.suf = p[1];
    return r;
  }
  const esNominal = m => NOMINAL.has(m.pos) || (m.pos === 'V' && m.modo === 'P' || m.pos === 'V' && m.modo === 'R');
  function describir(m) {
    const o = [];
    if (m.pos === 'V') {
      o.push('verbo');
      if (m.tiempo) o.push((m.segunda ? 'segundo ' : '') + TIEMPO[m.tiempo]);
      if (VOZ[m.voz]) o.push('voz ' + VOZ[m.voz]);
      if (m.modo) o.push(MODO[m.modo]);
      if (m.pers) o.push(m.pers + '.ª persona');
      if (m.caso) o.push(CASO[m.caso]);
      if (m.num) o.push(NUMG[m.num]);
      if (m.gen) o.push(GENG[m.gen]);
      return o.join(', ');
    }
    o.push(CLASE[m.pos] || m.pos);
    if (m.indecl) o.push('indeclinable');
    if (m.pers) o.push(m.pers + '.ª persona');
    if (m.caso) o.push(CASO[m.caso]);
    if (m.num) o.push(NUMG[m.num]);
    if (m.gen) o.push(GENG[m.gen]);
    if (m.suf === 'C') o.push('comparativo');
    if (m.suf === 'S') o.push('superlativo');
    if (m.suf === 'K') o.push('con crasis (dos palabras unidas)');
    if (m.suf === 'I') o.push('interrogativo');
    if (m.suf === 'N') o.push('negativo');
    return o.join(', ');
  }
  function corta(m) {
    if (m.pos === 'V') return [TIEMPO_C[m.tiempo], VOZ_C[m.voz], MODO_C[m.modo], m.pers ? m.pers + (m.num === 'P' ? 'p' : 's') : '', m.caso ? CASO_C[m.caso] + ' ' + (m.num === 'P' ? 'pl.' : 'sg.') + ' ' + (m.gen || '').toLowerCase() : ''].filter(Boolean).join(' ');
    const cnj = m.caso ? [CASO_C[m.caso], m.num === 'P' ? 'pl.' : 'sg.', (m.gen || '').toLowerCase()].join(' ') : '';
    return [CLASE_C[m.pos] || '', m.indecl ? 'indecl.' : '', m.pers ? m.pers + '.ª' : '', cnj, m.suf === 'C' ? 'comp.' : m.suf === 'S' ? 'superl.' : ''].filter(Boolean).join(' ');
  }

  /* ---------------------------------------------------------------- español: género, plural */
  const EL_FEM = new Set(['ala', 'alma', 'agua', 'águila', 'arca', 'hacha', 'hambre', 'arpa', 'ave', 'asta', 'área', 'ancla', 'aguja']);
  const TILDE = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
  const LLANA_ES = { joven: 'jóvenes', imagen: 'imágenes', origen: 'orígenes', virgen: 'vírgenes', margen: 'márgenes', orden: 'órdenes', crimen: 'crímenes', examen: 'exámenes', volumen: 'volúmenes', germen: 'gérmenes', carácter: 'caracteres' };
  function plural(w) {
    if (!w) return w;
    const low = w.toLowerCase();
    if (LLANA_ES[low]) return LLANA_ES[low];
    if (/[sx]$/.test(w)) return /[áéíóú]s$/.test(w) ? w.replace(/([áéíóú])s$/, (m, v) => TILDE[v] + 'ses') : w;
    if (/[aeoáéó]$/.test(w)) return w + 's';
    if (/[iuíú]$/.test(w)) return w + 'es';
    if (/z$/.test(w)) return w.slice(0, -1) + 'ces';
    if (/[áéíóú]n$/.test(w)) return w.replace(/([áéíóú])n$/, (m, v) => TILDE[v] + 'nes');
    if (/[áéíóú][lr]$/.test(w)) return w.replace(/([áéíóú])([lr])$/, (m, v, c) => TILDE[v] + c + 'es');
    return w + 'es';
  }
  function femenino(w) {
    if (/o$/.test(w)) return w.slice(0, -1) + 'a';
    if (/(or|ón|án|ín)$/.test(w)) return w.replace(/[óáí]n$/, m => TILDE[m[0]] + 'n') + 'a';
    if (/és$/.test(w)) return w.slice(0, -2) + 'esa';
    return w;
  }
  function partir(g) {
    const m = /^(el|la|los|las|lo) (.+)$/.exec(g);
    if (!m) return { art: '', base: g };
    return { art: m[1], fem: m[1] === 'la' || m[1] === 'las' || (m[1] === 'el' && EL_FEM.has(m[2].split(' ')[0].toLowerCase())), pl: m[1] === 'los' || m[1] === 'las', base: m[2] };
  }
  // la primera palabra (y las que la siguen hasta «de», «que»… quedan igual): «el hijo pródigo» → «hijos pródigos» no; solo la primera
  function primeraPal(base, f) { const i = base.indexOf(' '); return i < 0 ? f(base) : f(base.slice(0, i)) + base.slice(i); }
  const mayus = s => /^[A-ZÁÉÍÓÚÑ¡¿]/.test(s);

  /* ---------------------------------------------------------------- tablas de palabras de función */
  const PREP_CASO = {
    'διά': { G: 'por medio de', A: 'por causa de' }, 'κατά': { G: 'contra', A: 'según' }, 'μετά': { G: 'con', A: 'después de' },
    'ἐπί': { G: 'sobre', D: 'sobre', A: 'sobre' }, 'παρά': { G: 'de parte de', D: 'junto a', A: 'junto a' }, 'περί': { G: 'acerca de', A: 'alrededor de' },
    'ὑπό': { G: 'por', A: 'debajo de' }, 'ὑπέρ': { G: 'por', A: 'más allá de' }, 'πρός': { G: 'para', D: 'junto a', A: 'a' }
  };
  const PERS_PRON = {   // [nominativo, tras preposición, acusativo sin preposición]
    '1S': ['yo', 'mí', 'me'], '1P': ['nosotros', 'nosotros', 'nos'], '2S': ['tú', 'ti', 'te'], '2P': ['vosotros', 'vosotros', 'os']
  };
  const AUTOS = { M: ['él', 'ellos', 'lo', 'los'], F: ['ella', 'ellas', 'la', 'las'], N: ['él', 'ellos', 'lo', 'los'] };   // el neutro griego se dice en masculino
  const DEMOS = {
    'οὗτος': { MS: 'este', FS: 'esta', NS: 'esto', MP: 'estos', FP: 'estas', NP: 'estas cosas' },
    'ἐκεῖνος': { MS: 'aquel', FS: 'aquella', NS: 'aquello', MP: 'aquellos', FP: 'aquellas', NP: 'aquellas cosas' }
  };
  // Sustantivos que Nestle escribe con mayúscula cuando nombran a Dios o a Cristo (ὁ Λόγος, τὸ Πνεῦμα τὸ Ἅγιον)
  const MAYUS = { 'λόγος': 'el Verbo', 'πνεῦμα': 'el Espíritu', 'υἱός': 'el Hijo', 'πατήρ': 'el Padre', 'ἅγιος': 'Santo', 'θεός': 'Dios', 'κύριος': 'el Señor' };
  // Verbos cuyo sentido cambia en la voz media
  const MEDIA = { 'ἄρχω': 'comenzar', 'ἀπόλλυμι': 'perecer', 'πείθω': 'confiar', 'φαίνω': 'aparecer', 'παύω': 'cesar', 'ἐγείρω': 'levantarse', 'ἐνδύω': 'vestirse' };
  // Postpositivos: van en segundo lugar y no cortan un grupo nominal (τῇ γὰρ χάριτι)
  const POSPOS = new Set(['γάρ', 'δέ', 'οὖν', 'μέν', 'τέ', 'γέ', 'δή']);
  const SIN_FLEXION = /^(sin|de|del|con|que|muy|más|a|al|en|para|por|como|según|cuán|tan|¿)\b/;
  function pluralFrase(t) {
    const i = t.search(/ (de|del|que|a|al|en|para|por|con|sin) /);
    const ini = i < 0 ? t : t.slice(0, i), fin = i < 0 ? '' : t.slice(i);
    return ini.split(' ').map(w => /^(el|la|lo|y|o)$/.test(w) ? w : plural(w)).join(' ') + fin;
  }
  function femeninoFrase(t) {
    const i = t.search(/ (de|del|que|a|al|en|para|por|con|sin) /);
    const ini = i < 0 ? t : t.slice(0, i), fin = i < 0 ? '' : t.slice(i);
    return ini.split(' ').map(femenino).join(' ') + fin;
  }
  const REFL = { '1': ['mí mismo', 'nosotros mismos'], '2': ['ti mismo', 'vosotros mismos'], '3': ['sí mismo', 'sí mismos'] };

  /* ---------------------------------------------------------------- glosas de un versículo */
  // ws = [[griego, transliteración, n.º de lema, morfología], …] → [glosa]
  function glosarVerso(ws) {
    const M = ws.map(w => morfo(w[3]));
    const L = ws.map(w => (LEX[w[2]] || ['', '?'])[0]);
    const G = ws.map((w, i) => {
      const g = (LEX[w[2]] || ['', '?'])[1], lem = L[i];
      if (MAYUS[lem] && /^[Α-ΩἈ-ᾯῈ-ῼ]/.test(w[0].replace(/^[([—]+/, ''))) return MAYUS[lem];
      if (MEDIA[lem] && 'MDENO'.includes(M[i].voz || '-')) return MEDIA[lem];
      if (lem === 'οὐδείς' || lem === 'μηδείς') {
        // con un sustantivo que concuerda, «ninguno» (Οὐδὲν… κατάκριμα, «ninguna condenación»); solo y neutro, «nada»
        const con = ws.some((x, j) => (j === i - 1 || (j > i && j <= i + 3)) && M[j].pos === 'N' && M[j].caso === M[i].caso && M[j].num === M[i].num && M[j].gen === M[i].gen);
        if (con) return 'ninguno';
        if (M[i].gen === 'N') return 'nada';
      }
      if (lem === 'πᾶς' && M[i].gen === 'N' && M[i].num === 'P' && !(M[i - 1] && M[i - 1].pos === 'T') && !ws.some((x, j) => j !== i && M[j].pos === 'N' && M[j].caso === M[i].caso && M[j].num === 'P' && M[j].gen === 'N')) return '=todas las cosas';
      return g;
    });
    const n = ws.length;
    // la palabra anterior que cuenta para el grupo: salta los pospositivos (γάρ, δέ…) y los nombres indeclinables
    const ant = i => { let j = i - 1; while (j >= 0 && (POSPOS.has(L[j]) || M[j].indecl)) j--; return j; };
    const concuerdan = (a, b) => a && b && a.caso && a.caso === b.caso && a.num === b.num && (a.gen === b.gen || !a.gen || !b.gen);
    // 1. grupos preposicionales: qué palabras rige cada preposición
    const regida = new Array(n).fill(false), casoPrep = {};
    for (let i = 0; i < n; i++) {
      if (M[i].pos !== 'PREP') continue;
      let caso = null, nucleo = false;
      let nuc = null;
      for (let j = i + 1; j < n; j++) {
        const m = M[j];
        if (POSPOS.has(L[j])) continue;
        // «en espíritu y en verdad»: καί seguido de otra palabra en el mismo caso sigue regida por la preposición
        if (L[j] === 'καί' && nucleo && M[j + 1] && M[j + 1].caso === caso && 'NA'.includes(M[j + 1].pos)) { nuc = null; continue; }
        if (!esNominal(m) && !(m.pos === 'N' && m.indecl)) break;
        if (m.indecl) { regida[j] = true; if (!caso) caso = '?'; nucleo = true; continue; }
        if (!caso) caso = m.caso;
        if (m.caso !== caso) break;
        // tras el núcleo, un artículo que abre otro sustantivo, o una palabra que no concuerda, es otro grupo («del Dios»)
        if (nucleo && (m.pos === 'T' || (nuc && !concuerdan(nuc, m)))) break;
        regida[j] = true;
        if ('NPRFDX'.includes(m.pos)) { nucleo = true; nuc = nuc || m; }
      }
      casoPrep[i] = caso;
    }
    // 2. dónde empieza un grupo nominal en genitivo o dativo (lleva «de» o «a»)
    const marca = new Array(n).fill('');
    for (let i = 0; i < n; i++) {
      const m = M[i];
      if (regida[i] || !esNominal(m) || !(m.caso === 'G' || m.caso === 'D')) continue;
      if (m.pos === 'C' || m.pos === 'F') continue;     // «unos a otros», «sí mismo»: ya llevan su forma
      const prev = M[ant(i)];
      let empieza;
      if (m.pos === 'T') {
        // artículo: abre grupo salvo que repita el de un sustantivo y siga un adjetivo (τῷ πνεύματι τῷ ἁγίῳ)
        const sig = M[i + 1];
        const atributivo = prev && prev.pos === 'N' && concuerdan(prev, m) && sig && (sig.pos === 'A' || (sig.pos === 'V' && sig.modo === 'P'));
        empieza = !atributivo && !(prev && prev.pos === 'T' && M[i - 1] === prev);
      } else if (m.pos === 'P' && m.pers || (m.pos === 'P' && !(prev && prev.pos === 'T'))) {
        empieza = true;                                   // pronombre personal: siempre su propio grupo
      } else {
        empieza = !(prev && esNominal(prev) && concuerdan(prev, m) && !(prev.pos === 'P'));
      }
      if (empieza) marca[i] = m.caso === 'G' ? 'de' : 'a';
    }
    // 3. género español del sustantivo que acompaña a un artículo o adjetivo
    function generoEsp(i) {
      for (const j of [i + 1, i + 2, i + 3, i - 1, i - 2, i + 4]) {
        if (j < 0 || j >= n || j === i) continue;
        const m = M[j];
        if (m.pos === 'N' && concuerdan(m, M[i])) {
          const g = G[j].replace(/^=/, '');
          if (mayus(g)) return M[i].gen === 'F' ? 'f' : 'm';
          const pt = partir(g);
          return pt.art ? (pt.fem ? 'f' : 'm') : (M[i].gen === 'F' ? 'f' : 'm');
        }
        if (j > i && m.pos === 'V' && m.modo === 'N' && M[i].pos === 'T') return 'inf';
        if (j === i + 1 && m.pos === 'N' && m.indecl && M[i].pos === 'T') return M[i].gen === 'F' ? 'f' : 'm';
      }
      return null;
    }
    const out = [];
    for (let i = 0; i < n; i++) {
      const m = M[i];
      let g = G[i];
      const inv = g.startsWith('=');
      if (inv) g = g.slice(1);
      let s;
      const pl = m.num === 'P';
      if (m.pos === 'T') {
        const ge = generoEsp(i);
        if (ge === 'inf') s = 'el';
        else if (ge) s = pl ? (ge === 'f' ? 'las' : 'los') : (ge === 'f' ? 'la' : 'el');
        else if (m.gen === 'N') s = pl ? 'las' : 'lo';
        else s = pl ? (m.gen === 'F' ? 'las' : 'los') : (m.gen === 'F' ? 'la' : 'el');
        if (ge === 'f' && !pl && EL_FEM.has(((G[i + 1] || '').replace(/^=?(la|el) /, '')).split(' ')[0])) s = 'el';
      } else if (m.pos === 'N') {
        const pt = partir(g);
        s = pt.base;
        if (!inv && pl && !pt.pl && pt.art && !mayus(s)) s = pluralFrase(s);
        if (!pt.art && !inv && pl && !mayus(s) && /^[a-záéíóúñ]+$/.test(s)) s = plural(s);   // gentilicios usados como sustantivo
      } else if (m.pos === 'A' || m.pos === 'S' || (m.pos === 'K' || m.pos === 'Q')) {
        const pt = partir(g);
        s = pt.base;
        if (!inv && !mayus(s) && !pt.art && !SIN_FLEXION.test(s) && s !== 'nada') {
          const ge = generoEsp(i) || (m.gen === 'F' ? 'f' : 'm');
          if (ge === 'f') s = femeninoFrase(s);
          if (pl) s = pluralFrase(s);
          if (m.suf === 'C' && !/^(mayor|menor|mejor|peor|más|superior|inferior)/.test(s)) s = 'más ' + s;
          if (m.suf === 'S' && !/(ísim[oa]s?|^mínim|^primer|^últim|^máxim)/.test(s)) s = 'muy ' + s;
        } else if (!inv && pl && pt.art && !pt.pl) s = pluralFrase(s);
      } else if (m.pos === 'P' && m.pers) {
        const t = PERS_PRON[m.pers + m.num] || [g, g, g];
        s = (m.caso === 'N' || m.caso === 'V') ? t[0] : (regida[i] || m.caso !== 'A') ? t[1] : t[2];
        if (m.suf === 'K') { s = { N: 'y yo', G: 'y de mí', D: 'y a mí', A: 'y a mí' }[m.caso] || g; marca[i] = ''; }
      } else if (m.pos === 'P') {                         // αὐτός
        const prev = M[i - 1];
        if (prev && prev.pos === 'T' && concuerdan(prev, m)) s = (m.gen === 'F' ? 'misma' : 'mismo') + (pl ? 's' : '');
        else {
          const t = AUTOS[m.gen || 'M'];
          s = (m.caso === 'A' && !regida[i]) ? t[pl ? 3 : 2] : t[pl ? 1 : 0];
        }
      } else if (m.pos === 'D' && DEMOS[L[i]]) {
        const ge = generoEsp(i);
        s = DEMOS[L[i]][(ge === 'f' ? 'F' : ge === 'm' ? 'M' : (m.gen || 'M')) + (m.num || 'S')];
      } else if (m.pos === 'R') {
        const cual = (m.gen === 'F' ? (pl ? 'las' : 'la') : m.gen === 'N' && !pl ? 'lo' : (pl ? 'los' : 'el')) + ' ' + (pl ? 'cuales' : 'cual');
        s = (L[i] === 'ὅς' && (m.caso === 'N' || m.caso === 'A') && !regida[i]) ? 'que' : L[i] === 'ὅς' ? cual : g;
        if (L[i] === 'ὅστις' && pl && g === 'quien') s = 'quienes';
      } else if (m.pos === 'I') {
        s = m.gen === 'N' && !pl ? '¿qué?' : pl ? '¿quiénes?' : '¿quién?';
        if (m.caso === 'G' && !regida[i]) s = '¿de ' + s.slice(1);
        if (m.caso === 'D' && !regida[i]) s = '¿a ' + s.slice(1);
        marca[i] = '';
      } else if (m.pos === 'X') {
        s = m.gen === 'N' ? (pl ? 'algunas cosas' : 'algo') : pl ? 'algunos' : 'alguien';
      } else if (m.pos === 'F') {
        const t = REFL[m.pers || '3'];
        s = t[pl ? 1 : 0];
        if (m.pers === '3' && m.gen === 'F' && !pl) s = 'sí misma';
        if (m.caso === 'G' && !regida[i]) s = 'de ' + s;
        if (m.caso === 'D' && !regida[i]) s = 'a ' + s;
      } else if (m.pos === 'PREP') {
        const c = casoPrep[i];
        s = (PREP_CASO[L[i]] && PREP_CASO[L[i]][c]) || g;
      } else if (m.pos === 'V') {
        s = g;
      } else s = g;
      if (m.pos === 'D' && !DEMOS[L[i]] && !inv && pl && !mayus(s)) s = pluralFrase(s);
      if (marca[i]) s = marca[i] + ' ' + s;
      out.push(limpiar(s));
    }
    // ajustes con la preposición: «con mí» → «conmigo»
    for (let i = 0; i < n - 1; i++) {
      if (M[i].pos === 'PREP' && out[i] === 'con' && (out[i + 1] === 'mí' || out[i + 1] === 'ti')) { out[i + 1] = out[i + 1] === 'mí' ? '(conmigo)' : '(contigo)'; }
    }
    return out;
  }
  function limpiar(t) {
    return t.replace(/\s+/g, ' ').trim().replace(/\bde el\b/g, 'del').replace(/\ba el\b/g, 'al');
  }

  /* ---------------------------------------------------------------- estado y carga */
  const cache = {};
  let libro = 'mt', cap = 1, datos = null, foco = null;
  const opciones = { tr: true, es: true, mo: false, rv: true };
  function cargarLibro(cod) {
    if (!cache[cod]) cache[cod] = fetch(`datos/${cod}.json`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
    return cache[cod];
  }
  function pintarSelects() {
    $('libro').innerHTML = LIBROS.map(([c, nm]) => `<option value="${c}">${nm}</option>`).join('');
    $('libro').value = libro;
    $('cap').innerHTML = Array.from({ length: CAPS[libro] }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');
    $('cap').value = String(cap);
  }
  // referencias de la RV 1960 que corresponden a un versículo de Nestle 1904
  function rvRefs(ci, vi) {
    const k = (datos.rv || {})[`${ci}:${vi}`];
    if (!k) return [[ci, vi]];
    const [c, vv] = k.split(':');
    const [a, z] = vv.split('-').map(Number);
    const out = [];
    for (let v = a; v <= (z || a); v++) out.push([+c, v]);
    return out;
  }

  async function mostrar(cod, c, v) {
    libro = cod; cap = c; foco = v || null;
    pintarSelects();
    $('titulo').textContent = `${NOMBRE[cod]} ${c}`;
    $('texto').innerHTML = '<p class="cargando">Cargando el texto griego…</p>';
    try {
      datos = await cargarLibro(cod);
    } catch (e) {
      $('texto').innerHTML = '<p class="cargando">No se pudo cargar el texto. Revisa la conexión y vuelve a intentarlo.</p>';
      return;
    }
    if (libro !== cod || cap !== c) return;
    const vs = datos.c[c - 1] || [];
    let h = '';
    vs.forEach((ps, i) => {
      h += verso(c, i + 1, ps);
      if (cod === 'mr' && c === 16 && i + 1 === 8 && datos.fc) h += finalBreve();
    });
    $('texto').innerHTML = h;
    $('prev').disabled = cod === 'mt' && c === 1;
    $('next').disabled = cod === 'ap' && c === CAPS.ap;
    textoRV();
    try { history.replaceState(null, '', `#${cod}/${c}${v ? '/' + v : ''}`); } catch (e) { /* sin historial */ }
    if (v) {
      const el = document.getElementById(`v${v}`);
      if (el) { el.classList.add('foco'); el.scrollIntoView({ block: 'center' }); }
    } else window.scrollTo(0, 0);
  }

  function palabrasHTML(ps, ci, vi) {
    const gl = glosarVerso(ps);
    return ps.map((p, wi) => {
      const mo = corta(morfo(p[3]));
      return `<button type="button" class="pal" data-w="${ci}.${vi}.${wi}">` +
        `<span class="gr" lang="grc">${esc(p[0])}</span>` +
        `<span class="tr">${esc(p[1])}</span>` +
        `<span class="es">${esc(gl[wi])}</span>` +
        `<span class="mo">${esc(mo)}</span></button>`;
    }).join('');
  }
  function notaHTML(t, enlace) {
    return `<p class="nota">${esc(t)}${enlace ? ` <a href="${DLBAN}#nuevo/7" target="_top">Ver «Pasajes discutidos»</a>` : ''}</p>`;
  }
  function verso(ci, vi, ps) {
    const refs = ps === null || ps === 0 ? [[ci, vi]] : rvRefs(ci, vi);
    const rv = `<div class="rv" data-rv="${refs.map(r => r.join(':')).join(',')}" data-h="${ci}:${vi}"><span class="nota-num"></span> <span class="rvtxt"></span></div>`;
    let pre = '';
    const d = datos.disc && datos.disc[`${ci}:${vi}`];
    if (d && !(datos.disc[`${ci}:${vi - 1}`] === d || (ci > 1 && vi === 1 && datos.disc[`${ci - 1}:${(datos.c[ci - 2] || []).length}`] === d))) pre = notaHTML(DISC[d], true);
    const nota = NOTAS[`${libro}/${ci}/${vi}`];
    if (ps === null) {
      return `<section class="vers falta" id="v${vi}" aria-label="Versículo ${vi}"><div class="linea"><a class="n" href="#${libro}/${ci}/${vi}">${vi}</a>` +
        `<p class="sin-gr">Este versículo no está en el texto griego de Nestle 1904. La Reina-Valera lo traduce del Textus Receptus, que lo incluye; los manuscritos más antiguos no lo traen. <a href="${DLBAN}#nuevo/7" target="_top">Ver «Pasajes discutidos»</a></p></div>${nota ? notaHTML(nota, false) : ''}${rv}</section>`;
    }
    if (ps === 0) {
      return `<section class="vers falta" id="v${vi}" aria-label="Versículo ${vi}"><div class="linea"><a class="n" href="#${libro}/${ci}/${vi}">${vi}</a>` +
        `<p class="sin-gr">Nestle 1904 numera de otra manera: el texto de este versículo de la Reina-Valera está en el griego del versículo ${vi - 1}.</p></div>${rv}</section>`;
    }
    return `${pre}<section class="vers" id="v${vi}" aria-label="Versículo ${vi}">` +
      `<div class="linea"><a class="n" href="#${libro}/${ci}/${vi}">${vi}</a>${palabrasHTML(ps, ci, vi)}</div>` +
      (nota ? notaHTML(nota, true) : '') + rv + '</section>';
  }
  function finalBreve() {
    return `<section class="vers breve" id="breve" aria-label="Final breve de Marcos">${notaHTML('Final breve. Algunos manuscritos traen, después del versículo 8, estas dos frases; Nestle 1904 las imprime entre corchetes dobles. La Reina-Valera no las incluye.', false)}` +
      `<div class="linea"><span class="n">—</span>${palabrasHTML(datos.fc, 16, 99)}</div></section>`;
  }

  async function textoRV() {
    if (!window.Citas) return;
    const ver = Citas.version();
    const otra = (datos && datos.rvv && datos.rvv[ver]) || {};
    const conv = k => otra[k] || k;
    const pedidos = {};
    const els = [...document.querySelectorAll('.rv[data-rv]')];
    els.forEach(el => el.dataset.rv.split(',').forEach(k => { const c = +conv(k).split(':')[0]; pedidos[c] = pedidos[c] || Citas.capitulo(ver, libro, c); }));
    const caps = {};
    await Promise.all(Object.entries(pedidos).map(async ([c, pr]) => { caps[c] = await pr; }));
    const versiones = await Citas.versiones();
    const abrev = (versiones.find(x => x.id === ver) || {}).abrev || '';
    els.forEach(el => {
      const ks = el.dataset.rv.split(',').map(conv);
      const txt = ks.map(k => { const [c, v] = k.split(':').map(Number); return caps[c] && caps[c][v - 1]; });
      const vistos = ks.map(k => k.split(':')[1]);
      const igual = ks.length === 1 && ks[0] === el.dataset.h;
      el.querySelector('.nota-num').textContent = igual ? '' : `En la ${abrev}: ${NOMBRE[libro]} ${ks[0].split(':')[0]}:${vistos.length > 1 ? vistos[0] + '-' + vistos[vistos.length - 1] : vistos[0]}.`;
      el.querySelector('.rvtxt').innerHTML = txt.some(Boolean) ? `<b>${esc(abrev)}</b> ${esc(txt.filter(Boolean).join(' '))}` : '<i>Este versículo no está en el texto español del sitio.</i>';
    });
    const v = versiones.find(x => x.id === ver);
    $('credito-rv').textContent = v ? v.credito : '';
  }

  /* ---------------------------------------------------------------- ficha de una palabra */
  function ficha(btn) {
    const [ci, vi, wi] = btn.dataset.w.split('.').map(Number);
    const ps = vi === 99 ? datos.fc : datos.c[ci - 1][vi - 1];
    const p = ps[wi];
    const m = morfo(p[3]);
    const L = LEX[p[2]] || ['?', '?', '', 0, 0, 0];
    const gl = glosarVerso(ps)[wi];
    let h = `<p class="f-ref">${esc(NOMBRE[libro])} ${ci}:${vi === 99 ? 'final breve' : vi} · palabra ${wi + 1}</p>`;
    h += `<p class="f-gr gr" lang="grc">${esc(p[0])}</p>`;
    h += `<p class="f-tr"><span>${esc(p[1])}</span> · <b>${esc(gl)}</b></p>`;
    // Significado: los sentidos del vocabulario cuando la palabra está en él; si no, la glosa del lema
    const base = L[1].replace(/^=/, '');
    const propio = /^[A-ZÁÉÍÓÚÑ]/.test(base) && /^[Α-ΩἈ-ᾯῈ-ῼ]/.test(L[0]);
    const sentido = L[6] || base;
    h += `<div class="f-sig"><span>Significado</span><p>${esc(sentido)}${propio && !L[6] ? ' <small>(nombre propio)</small>' : ''}</p>` +
      (gl.replace(/^(de|a|del|al) /, '') !== base.replace(/^(el|la|los|las|lo) /, '') ? `<small>En este versículo la glosa es «${esc(gl)}», según su forma.</small>` : '') + '</div>';
    h += '<table class="f-tab"><tbody>';
    h += `<tr><th>Forma</th><td>${esc(describir(m))}</td></tr>`;
    h += `<tr><th>Lema</th><td><span class="gr" lang="grc">${esc(L[0])}</span> <i>${esc(L[2])}</i>${L[4] ? ' · Strong G' + L[4] : ''}<br><small>Aparece ${fmt(L[3])} ${L[3] === 1 ? 'vez' : 'veces'} en el Nuevo Testamento${L[5] ? ' · está en el <a href="../../gramatica-griega/vocabulario/" target="_top">vocabulario de 1.124 palabras</a>' : ''}</small></td></tr>`;
    if (m.pos === 'V' && ASPECTO[m.tiempo]) h += `<tr><th>El tiempo</th><td>${esc(ASPECTO[m.tiempo])}${m.modo === 'P' ? ' El participio funciona como adjetivo o como sustantivo, y su tiempo es relativo al del verbo principal.' : ''}</td></tr>`;
    if (m.caso === 'G' || m.caso === 'D') h += `<tr><th>El caso</th><td>${m.caso === 'G' ? 'El genitivo indica pertenencia, origen o tema: por eso la glosa del grupo lleva «de».' : 'El dativo indica a quién o para quién, y a veces con qué o en qué: por eso la glosa del grupo lleva «a».'} Detrás de una preposición, el caso lo marca la preposición.</td></tr>`;
    h += '</tbody></table>';
    $('ficha-cuerpo').innerHTML = h;
    document.querySelectorAll('.pal.sel').forEach(x => x.classList.remove('sel'));
    btn.classList.add('sel');
    $('ficha').hidden = false;
    $('ficha-cerrar').focus({ preventScroll: true });
  }

  /* ---------------------------------------------------------------- eventos */
  function aplicarOpciones() {
    const t = $('texto');
    t.classList.toggle('sin-tr', !opciones.tr);
    t.classList.toggle('sin-es', !opciones.es);
    t.classList.toggle('con-mo', opciones.mo);
    t.classList.toggle('sin-rv', !opciones.rv);
    $('o-ver').hidden = !opciones.rv;
  }
  async function pintarVersiones() {
    if (!window.Citas) { $('o-ver').remove(); return; }
    const vs = await Citas.versiones();
    $('o-ver').innerHTML = vs.map(v => `<option value="${esc(v.id)}">${esc(v.abrev)}</option>`).join('');
    $('o-ver').value = Citas.version();
  }
  function iniciar() {
    pintarSelects();
    $('libro').addEventListener('change', e => mostrar(e.target.value, 1));
    $('cap').addEventListener('change', e => mostrar(libro, +e.target.value));
    $('prev').addEventListener('click', () => {
      if (cap > 1) mostrar(libro, cap - 1);
      else { const i = LIBROS.findIndex(x => x[0] === libro); if (i > 0) mostrar(LIBROS[i - 1][0], CAPS[LIBROS[i - 1][0]]); }
    });
    $('next').addEventListener('click', () => {
      if (cap < CAPS[libro]) mostrar(libro, cap + 1);
      else { const i = LIBROS.findIndex(x => x[0] === libro); if (i < LIBROS.length - 1) mostrar(LIBROS[i + 1][0], 1); }
    });
    [['o-tr', 'tr'], ['o-es', 'es'], ['o-mo', 'mo'], ['o-rv', 'rv']].forEach(([id, k]) => {
      $(id).checked = opciones[k];
      $(id).addEventListener('change', e => { opciones[k] = e.target.checked; aplicarOpciones(); });
    });
    aplicarOpciones();
    pintarVersiones();
    $('o-ver').addEventListener('change', e => Citas.cambiarVersion(e.target.value));
    $('texto').addEventListener('click', e => {
      const b = e.target.closest('.pal');
      if (b) ficha(b);
    });
    $('ficha-cerrar').addEventListener('click', () => { $('ficha').hidden = true; document.querySelectorAll('.pal.sel').forEach(x => x.classList.remove('sel')); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('ficha').hidden) $('ficha-cerrar').click(); });
    window.addEventListener('citas:version', () => { if ($('o-ver').value !== Citas.version()) $('o-ver').value = Citas.version(); textoRV(); });
    window.addEventListener('hashchange', desdeHash);
    // Restaurar vista (visor-bridge.js): cierra la ficha de la palabra y vuelve al comienzo del capítulo
    window.fypReset = () => { $('ficha-cerrar').click(); window.scrollTo(0, 0); };
    desdeHash();
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  }
  function desdeHash() {
    const m = /^#?([0-9a-z]+)\/(\d+)(?:\/(\d+))?$/.exec(decodeURIComponent(location.hash));
    if (m && NOMBRE[m[1]] && +m[2] >= 1 && +m[2] <= CAPS[m[1]]) {
      if (m[1] === libro && +m[2] === cap && datos && datos.l === libro && document.querySelector('.vers')) {
        const el = m[3] && document.getElementById('v' + m[3]);
        document.querySelectorAll('.vers.foco').forEach(x => x.classList.remove('foco'));
        if (el) { el.classList.add('foco'); el.scrollIntoView({ block: 'center' }); }
        return;
      }
      mostrar(m[1], +m[2], m[3] ? +m[3] : null);
    } else if (!datos) mostrar('mt', 1);
  }
  window.InterlinealG = { glosarVerso, morfo, describir, corta };   // para revisar desde la consola y para interlineal_griego_citas.py
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
