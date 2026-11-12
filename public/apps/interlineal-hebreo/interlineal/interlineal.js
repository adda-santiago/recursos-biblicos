/* ==========================================================
   Interlineal hebreo–español (AT) · página auxiliar del recurso nº 14 (desde la v2.51)
   Datos: datos/{libro}.json (herramientas/interlineal_datos.py) y lexico.js (herramientas/interlineal_lexico.py).
   La glosa de cada palabra se arma aquí, a partir de la glosa del lema (lexico.js) y de su morfología (OSHB):
   prefijos (y, en, a, como, de, que, el/la), número y artículo del sustantivo, concordancia del adjetivo,
   estado constructo («de») y sufijos pronominales (posesivo, objeto o pronombre tras preposición).
   Los verbos quedan en infinitivo: la forma verbal se explica en la morfología y en la ficha.
   ========================================================== */
(() => {
  'use strict';
  const LEX = window.LEXICO;
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = n => Number(n).toLocaleString('es');
  const LIBROS = [['gn', 'Génesis'], ['ex', 'Éxodo'], ['lv', 'Levítico'], ['nm', 'Números'], ['dt', 'Deuteronomio'], ['jos', 'Josué'], ['jue', 'Jueces'], ['rt', 'Rut'], ['1s', '1 Samuel'], ['2s', '2 Samuel'], ['1r', '1 Reyes'], ['2r', '2 Reyes'], ['1cr', '1 Crónicas'], ['2cr', '2 Crónicas'], ['esd', 'Esdras'], ['neh', 'Nehemías'], ['est', 'Ester'], ['job', 'Job'], ['sal', 'Salmos'], ['pr', 'Proverbios'], ['ec', 'Eclesiastés'], ['cnt', 'Cantares'], ['is', 'Isaías'], ['jer', 'Jeremías'], ['lm', 'Lamentaciones'], ['ez', 'Ezequiel'], ['dn', 'Daniel'], ['os', 'Oseas'], ['jl', 'Joel'], ['am', 'Amós'], ['abd', 'Abdías'], ['jon', 'Jonás'], ['mi', 'Miqueas'], ['nah', 'Nahúm'], ['hab', 'Habacuc'], ['sof', 'Sofonías'], ['hag', 'Hageo'], ['zac', 'Zacarías'], ['mal', 'Malaquías']];
  const NOMBRE = Object.fromEntries(LIBROS);
  const CAPS = { gn: 50, ex: 40, lv: 27, nm: 36, dt: 34, jos: 24, jue: 21, rt: 4, '1s': 31, '2s': 24, '1r': 22, '2r': 25, '1cr': 29, '2cr': 36, esd: 10, neh: 13, est: 10, job: 42, sal: 150, pr: 31, ec: 12, cnt: 8, is: 66, jer: 52, lm: 5, ez: 48, dn: 12, os: 14, jl: 4, am: 9, abd: 1, jon: 4, mi: 7, nah: 3, hab: 3, sof: 3, hag: 2, zac: 14, mal: 4 };

  /* ---------------------------------------------------------------- morfología (OSHB) */
  const POS = { A: 'adjetivo', C: 'conjunción', D: 'adverbio', N: 'sustantivo', P: 'pronombre', R: 'preposición', S: 'sufijo', T: 'partícula', V: 'verbo' };
  const TIPO = {
    A: { a: 'adjetivo', c: 'número cardinal', g: 'gentilicio', o: 'número ordinal' },
    N: { c: 'sustantivo', g: 'gentilicio', p: 'nombre propio', x: 'palabra' },
    P: { d: 'pronombre demostrativo', f: 'pronombre indefinido', i: 'pronombre interrogativo', p: 'pronombre personal', r: 'pronombre relativo' },
    S: { d: 'he direccional («hacia»)', h: 'he paragógica (sin traducción)', n: 'nun paragógica (sin traducción)', p: 'sufijo pronominal' },
    T: { a: 'partícula afirmativa', d: 'artículo', e: 'partícula exhortativa', i: 'partícula interrogativa', j: 'interjección', m: 'partícula demostrativa', n: 'negación', o: 'marca del complemento directo', r: 'partícula relativa' }
  };
  const TEMA_H = { q: 'qal', N: 'nifal', p: 'piel', P: 'pual', h: 'hifil', H: 'hofal', t: 'hitpael', o: 'polel', O: 'polal', r: 'hitpolel', m: 'poel', M: 'poal', k: 'palel', K: 'pulal', Q: 'qal pasivo', l: 'pilpel', L: 'polpal', f: 'hitpalpel', D: 'nitpael', j: 'pealal', i: 'pilel', u: 'hotpaal', c: 'tifil', v: 'histafel', w: 'nitpalel', y: 'nitpoel', z: 'hitpoel' };
  const TEMA_A = { q: 'peal', Q: 'peil', u: 'hitpeel', N: 'nifal', p: 'pael', P: 'itpaal', M: 'hitpaal', a: 'afel', h: 'hafel', s: 'safel', e: 'shafel', H: 'hofal', i: 'itpeel', t: 'hishtafel', v: 'ishtafel', w: 'hitafel', o: 'polel', z: 'itpoel', r: 'hitpolel', f: 'hitpalpel', b: 'hefal', c: 'tifel', m: 'poel', l: 'shafel' };
  const FORMA = { p: 'perfecto (qatal)', q: 'perfecto con waw (weqatal)', i: 'imperfecto (yiqtol)', w: 'imperfecto con waw (wayyiqtol)', h: 'cohortativo', j: 'yusivo', v: 'imperativo', r: 'participio activo', s: 'participio pasivo', a: 'infinitivo absoluto', c: 'infinitivo constructo' };
  const FORMA_C = { p: 'perf.', q: 'weqatal', i: 'imperf.', w: 'wayyiqtol', h: 'cohort.', j: 'yus.', v: 'imper.', r: 'part. act.', s: 'part. pas.', a: 'inf. abs.', c: 'inf. cons.' };
  const PERS = { 1: '1.ª', 2: '2.ª', 3: '3.ª' };
  const GEN = { m: 'masculino', f: 'femenino', b: 'masculino o femenino', c: 'común' };
  const NUM = { s: 'singular', p: 'plural', d: 'dual' };
  const EST = { a: 'absoluto', c: 'constructo', d: 'determinado' };

  // Un segmento de morfología → { pos, tipo, tema, forma, persona, genero, numero, estado }
  function segmento(code, aram) {
    const pos = code[0];
    const r = { pos, code };
    let i = 1;
    if (pos === 'V') {
      r.tema = code[1]; r.forma = code[2]; i = 3;
      if ('rs'.includes(r.forma)) { r.genero = code[i++]; r.numero = code[i++]; r.estado = code[i++]; }
      else if (!'ac'.includes(r.forma)) { r.persona = code[i++]; r.genero = code[i++]; r.numero = code[i++]; }
      r.aram = aram;
    } else if (pos === 'N' || pos === 'A') {
      r.tipo = code[1]; r.genero = code[2]; r.numero = code[3]; r.estado = code[4];
    } else if (pos === 'P' || pos === 'S') {
      r.tipo = code[1]; r.persona = code[2]; r.genero = code[3]; r.numero = code[4];
      if (pos === 'P' && r.tipo !== 'p') { r.genero = code[2]; r.numero = code[3]; r.persona = null; }
    } else if (pos === 'R' || pos === 'T') {
      r.tipo = code[1];
    }
    Object.keys(r).forEach(k => { if (r[k] === undefined || r[k] === 'x') delete r[k]; });
    return r;
  }
  function describir(s) {
    const p = [];
    if (s.pos === 'V') {
      p.push('verbo ' + ((s.aram ? TEMA_A : TEMA_H)[s.tema] || s.tema));
      p.push(FORMA[s.forma] || s.forma);
      if (s.persona) p.push(PERS[s.persona] + ' persona');
      if (s.genero) p.push(GEN[s.genero]);
      if (s.numero) p.push(NUM[s.numero]);
      if (s.estado) p.push('estado ' + EST[s.estado]);
    } else if (s.pos === 'R') {
      p.push(s.tipo === 'd' ? 'preposición con artículo' : 'preposición');
    } else if (s.pos === 'S') {
      p.push(TIPO.S[s.tipo] || 'sufijo');
      if (s.tipo === 'p') { if (s.persona) p.push(PERS[s.persona] + ' persona'); if (s.genero) p.push(GEN[s.genero]); if (s.numero) p.push(NUM[s.numero]); }
    } else if (TIPO[s.pos]) {
      p.push(TIPO[s.pos][s.tipo] || POS[s.pos]);
      if (s.persona) p.push(PERS[s.persona] + ' persona');
      if (s.genero) p.push(GEN[s.genero]);
      if (s.numero) p.push(NUM[s.numero]);
      if (s.estado) p.push('estado ' + EST[s.estado]);
    } else p.push(POS[s.pos] || s.pos);
    return p.join(', ');
  }
  const PGN = s => (s.persona || '') + (s.genero || '') + (s.numero || '');
  function corta(s) {
    if (s.pos === 'V') return [((s.aram ? TEMA_A : TEMA_H)[s.tema] || s.tema), FORMA_C[s.forma], PGN(s)].filter(Boolean).join(' ');
    if (s.pos === 'N') return [s.tipo === 'p' ? 'n. pr.' : s.tipo === 'g' ? 'gent.' : 'sust.', (s.genero || '') + (s.numero || ''), s.estado === 'c' ? 'cons.' : s.estado === 'd' ? 'det.' : ''].filter(Boolean).join(' ');
    if (s.pos === 'A') return [s.tipo === 'c' ? 'núm.' : s.tipo === 'o' ? 'ord.' : 'adj.', (s.genero || '') + (s.numero || ''), s.estado === 'c' ? 'cons.' : ''].filter(Boolean).join(' ');
    if (s.pos === 'S') return s.tipo === 'p' ? 'suf. ' + PGN(s) : s.tipo === 'd' ? 'dir.' : '';
    if (s.pos === 'R') return 'prep.';
    if (s.pos === 'C') return 'conj.';
    if (s.pos === 'D') return 'adv.';
    if (s.pos === 'P') return 'pron.' + (s.persona ? ' ' + PGN(s) : '');
    if (s.pos === 'T') return s.tipo === 'd' ? 'art.' : s.tipo === 'o' ? 'obj.' : s.tipo === 'n' ? 'neg.' : s.tipo === 'i' ? 'interr.' : 'part.';
    return '';
  }

  /* ---------------------------------------------------------------- español: género, plural, artículo */
  const EL_FEM = new Set(['ala', 'alma', 'agua', 'águila', 'arca', 'hacha', 'hambre', 'arpa', 'ave', 'asta', 'área', 'ancla', 'haya']);
  const TILDE = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
  const LLANA_ES = { joven: 'jóvenes', imagen: 'imágenes', origen: 'orígenes', virgen: 'vírgenes', margen: 'márgenes', orden: 'órdenes', crimen: 'crímenes', examen: 'exámenes', volumen: 'volúmenes', germen: 'gérmenes', resumen: 'resúmenes', carácter: 'caracteres' };
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
  // «el pozo» → { art:'el', fem:false, pl:false, base:'pozo' }
  function partir(g) {
    const m = /^(el|la|los|las|lo) (.+)$/.exec(g);
    if (!m) return { art: '', base: g };
    return { art: m[1], fem: m[1] === 'la' || m[1] === 'las' || (m[1] === 'el' && EL_FEM.has(m[2].split(' ')[0].toLowerCase())), pl: m[1] === 'los' || m[1] === 'las', base: m[2] };
  }
  const artDe = (fem, pl) => pl ? (fem ? 'las' : 'los') : (fem ? 'la' : 'el');
  function primeraPal(base, f) { const i = base.indexOf(' '); return i < 0 ? f(base) : f(base.slice(0, i)) + base.slice(i); }

  /* pronombres para sufijos */
  const POSES = { '1s': ['mi', 'mis'], '2s': ['tu', 'tus'], '3ms': ['su', 'sus'], '3fs': ['su', 'sus'], '3s': ['su', 'sus'] };
  function posesivo(pgn, fem, pl) {
    const p = pgn.replace(/[cb]/, '');
    if (p.startsWith('1') && pgn.endsWith('p')) return (pl ? (fem ? 'nuestras' : 'nuestros') : (fem ? 'nuestra' : 'nuestro'));
    if (p.startsWith('2') && pgn.endsWith('p')) return (pl ? (fem ? 'vuestras' : 'vuestros') : (fem ? 'vuestra' : 'vuestro'));
    const k = p.startsWith('1') ? '1s' : p.startsWith('2') ? '2s' : '3s';
    return POSES[k][pl ? 1 : 0];
  }
  const DE_QUIEN = { '3ms': 'de él', '3fs': 'de ella', '3mp': 'de ellos', '3fp': 'de ellas', '3cp': 'de ellos' };
  const OBJ = { '1cs': 'me', '1bs': 'me', '2ms': 'te', '2fs': 'te', '3ms': 'lo', '3fs': 'la', '1cp': 'nos', '2mp': 'os', '2fp': 'os', '3mp': 'los', '3fp': 'las', '3cp': 'los' };
  const TRAS_PREP = { '1cs': 'mí', '1bs': 'mí', '2ms': 'ti', '2fs': 'ti', '3ms': 'él', '3fs': 'ella', '1cp': 'nosotros', '2mp': 'vosotros', '2fp': 'vosotras', '3mp': 'ellos', '3fp': 'ellas', '3cp': 'ellos' };
  const SUJ = { '1cs': 'yo', '1bs': 'yo', '2ms': 'tú', '2fs': 'tú', '3ms': 'él', '3fs': 'ella', '1cp': 'nosotros', '2mp': 'vosotros', '2fp': 'vosotras', '3mp': 'ellos', '3fp': 'ellas', '3cp': 'ellos' };

  const PREFIJO = { c: 'y', b: 'en', l: 'a', k: 'como', m: 'de', s: 'que', i: '¿' };
  const num = l => (l.match(/\d+/) || [''])[0];

  /* ---------------------------------------------------------------- glosa de una palabra */
  // w = [hebreo, translit, lema, morfología]; devuelve { glosa, segs:[{lema, seg, glosaLema}] }
  function analizar(w) {
    const aram = w[3][0] === 'A';
    const segs = w[3].slice(1).split('/').map(c => segmento(c, aram));
    const lemas = w[2].split('/');
    const partes = [];
    let li = 0;
    segs.forEach(s => {
      if (s.pos === 'S') partes.push({ s });
      else partes.push({ s, lema: lemas[li++] || '' });
    });
    return partes;
  }

  function glosar(w) {
    const partes = analizar(w);
    const pre = [];       // prefijos en español
    let det = false;      // lleva artículo
    let prepArt = null;   // preposición que se contrae con el artículo
    let interr = false;
    let nucleo = null, suf = null, dir = false;
    partes.forEach(p => {
      if (p.s.pos === 'S') { if (p.s.tipo === 'p') suf = p.s; if (p.s.tipo === 'd') dir = true; return; }
      if (!nucleo && /^[a-z]$/.test(p.lema)) {        // prefijo de una letra
        if (p.lema === 'd') { det = true; return; }
        if (p.lema === 'i') { interr = true; return; }
        if (p.s.pos === 'R' && p.s.tipo === 'd') { det = true; prepArt = p.lema; return; }
        pre.push(PREFIJO[p.lema] || p.lema);
        return;
      }
      if (!nucleo) nucleo = p;
    });
    // un prefijo solo, sin palabra principal (לוֹ, בָּהּ, מִמֶּנּוּ…): la preposición es el núcleo
    if (!nucleo) {
      const ult = pre.pop() || (prepArt ? PREFIJO[prepArt] : '');
      let g = ult;
      if (suf) g = prepPron(ult, PGN(suf));
      return limpiar([...pre, g].join(' '), interr);
    }
    const n = num(nucleo.lema);
    const L = LEX[n];
    let g = L ? L[0] : '?';
    if (n === '3966' && suf) g = 'la fuerza';                         // מְאֹדֶךָ «tu fuerza»
    if (n === '3651' && pre[pre.length - 1] === 'a') { pre.pop(); g = 'por tanto'; }   // לָכֵן
    if (n === '6440' && pre[pre.length - 1] === 'a') {                // לִפְנֵי «delante de»
      pre.pop();
      return limpiar([...pre, suf ? 'delante de ' + (TRAS_PREP[PGN(suf)] || '') : 'delante de'].join(' '), interr);
    }
    const AQUEL = { '1931': s => s.genero === 'f' ? 'aquella' : 'aquel', '1992': () => 'aquellos', '1994': () => 'aquellos', '2007': () => 'aquellas' };
    const s = nucleo.s;
    const inv = g.startsWith('=');
    if (inv) g = g.slice(1);
    let out;
    if (s.pos === 'N' || (s.pos === 'A' && !/^[A-ZÁÉÍÓÚ]/.test(g))) {
      const pt = partir(g);
      let base = pt.base;
      const hebPl = s.numero === 'p' || s.numero === 'd';
      let pl = pt.pl, fem = pt.fem;
      if (s.pos === 'A' && !pt.art) {
        // adjetivo: concuerda con el género y el número hebreos
        fem = s.genero === 'f';
        if (!inv && fem) base = primeraPal(base, femenino);
        if (!inv && hebPl) { base = primeraPal(base, plural); pl = true; }
      } else if (!inv && hebPl && !pt.pl && pt.art && s.tipo !== 'p') {
        base = primeraPal(base, plural); pl = true;
      }
      if (suf && s.pos === 'N' && s.tipo !== 'p') {
        const pgn = PGN(suf);
        out = (n === '3605' ? 'todo ' + (DE_QUIEN[pgn] ? 'él' : TRAS_PREP[pgn] || '') : posesivo(pgn, fem, pl) + ' ' + base);
        if (DE_QUIEN[pgn] && n !== '3605') out += ' (' + DE_QUIEN[pgn] + ')';
      } else if (det || s.estado === 'd') {
        if (inv && pt.art) out = g;
        else if (inv || pt.art === 'lo') out = (pt.art === 'lo' ? 'lo ' : 'el ') + base;
        else if (!pt.art && s.pos === 'A') out = artDe(fem, pl) + ' ' + base;
        else out = (fem && !pl && EL_FEM.has(base.split(' ')[0].toLowerCase()) ? 'el' : artDe(fem, pl)) + ' ' + base;
      } else {
        out = pt.art === 'lo' ? g : base;
      }
      if (s.estado === 'c' && !suf && n !== '3605') out += ' de';
    } else if (s.pos === 'V') {
      out = g;
      if (suf) out = enclitico(g, PGN(suf));
      const last = pre[pre.length - 1];
      if (s.forma === 'c' && last === 'a') pre[pre.length - 1] = 'para';
      if (s.forma === 'c' && last === 'en') pre[pre.length - 1] = 'al';
      if (s.forma === 'c' && last === 'como') pre[pre.length - 1] = 'cuando';
    } else if (s.pos === 'R') {
      out = suf ? prepPron(g, PGN(suf)) : g;
      if (det && !suf) out += ' el';
    } else if (n === '853') {
      out = suf ? 'a ' + TRAS_PREP[PGN(suf)] : g;
    } else if (s.pos === 'P' && (det || s.estado === 'd')) {
      out = AQUEL[n] ? AQUEL[n](s) : g;                                 // הַהוּא «aquel», הַזֶּה «este»
    } else {
      out = g;
      if (suf) out += ' (' + (SUJ[PGN(suf)] || '') + ')';
      if (det && s.pos !== 'T' && s.pos !== 'P') out = 'el ' + out;
    }
    if (dir) { out = 'hacia ' + out; if (pre[pre.length - 1] === 'a') pre.pop(); }
    // contracción de la preposición con el artículo
    if (prepArt) {
      const p = PREFIJO[prepArt];
      if (/^el /.test(out) && (p === 'a' || p === 'de')) out = (p === 'a' ? 'al ' : 'del ') + out.slice(3);
      else out = p + ' ' + (/^(el|la|los|las|lo) /.test(out) || !det ? out : 'el ' + out);
    }
    return limpiar([...pre, out].join(' '), interr);
  }
  function prepPron(p, pgn) {
    const pr = TRAS_PREP[pgn] || '';
    if (p === 'con' && pr === 'mí') return 'conmigo';
    if (p === 'con' && pr === 'ti') return 'contigo';
    if (p === 'de' && pr === 'mí') return 'de mí';
    return (p ? p + ' ' : '') + pr;
  }
  function enclitico(g, pgn) {
    const o = OBJ[pgn];
    if (!o) return g;
    const i = g.indexOf(' ');
    const v = i < 0 ? g : g.slice(0, i), resto = i < 0 ? '' : g.slice(i);
    if (/se$/.test(v)) return g + ' a ' + (TRAS_PREP[pgn] || '');
    if (!/(ar|er|ir|ír)$/.test(v)) return g + ' (' + (TRAS_PREP[pgn] || '') + ')';
    return v + o + resto;
  }
  function limpiar(t, interr) {
    t = t.replace(/\s+/g, ' ').replace(/^y y /, 'y ').trim();
    t = t.replace(/\bde el\b/g, 'del').replace(/\ba el\b/g, 'al');
    return interr ? '¿' + t + '?' : t;
  }

  /* ---------------------------------------------------------------- estado y carga */
  const cache = {};
  let libro = 'gn', cap = 1, datos = null, foco = null;
  const opciones = { tr: true, es: true, mo: false, rv: true };
  function cargarLibro(cod) {
    if (!cache[cod]) cache[cod] = fetch(`datos/${cod}.json`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
    return cache[cod];
  }

  function pintarSelects() {
    $('libro').innerHTML = LIBROS.map(([c, n]) => `<option value="${c}">${n}</option>`).join('');
    $('libro').value = libro;
    $('cap').innerHTML = Array.from({ length: CAPS[libro] }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');
    $('cap').value = String(cap);
  }

  function rvRef(ci, vi) {
    const k = datos.rv[`${ci}:${vi}`];
    if (k === 't') return { titulo: true };
    if (!k) return { cap: ci, vers: vi, igual: true };
    const [c, v] = k.split(':').map(Number);
    return { cap: c, vers: v, igual: false };
  }

  async function mostrar(cod, c, v) {
    libro = cod; cap = c; foco = v || null;
    pintarSelects();
    $('titulo').textContent = `${NOMBRE[cod]} ${c}`;
    $('texto').innerHTML = '<p class="cargando">Cargando el texto hebreo…</p>';
    try {
      datos = await cargarLibro(cod);
    } catch (e) {
      $('texto').innerHTML = '<p class="cargando">No se pudo cargar el texto. Revisa la conexión y vuelve a intentarlo.</p>';
      return;
    }
    if (libro !== cod || cap !== c) return;
    const vs = datos.c[c - 1] || [];
    $('texto').innerHTML = vs.map((ps, i) => verso(c, i + 1, ps)).join('');
    $('prev').disabled = cod === 'gn' && c === 1;
    $('next').disabled = cod === 'mal' && c === CAPS.mal;
    textoRV(c, vs.length);
    try { history.replaceState(null, '', `#${cod}/${c}${v ? '/' + v : ''}`); } catch (e) { /* sin historial */ }
    if (v) {
      const el = document.getElementById(`v${v}`);
      if (el) { el.classList.add('foco'); el.scrollIntoView({ block: 'center' }); }
    } else window.scrollTo(0, 0);
  }

  function palabraHTML(p, ci, vi, wi, prev) {
    const qere = p.length === 6 && p[5] && p[5].length ? p[5] : null;
    const lee = qere ? qere[0] : p;
    // nombre compuesto escrito en dos palabras (עִמָּנוּ אֵל): la glosa va en la primera
    const sigue = prev && /\+$/.test(prev[2].split('/').pop()) && num(prev[2].split('/').pop()) === num(p[2].split('/').pop());
    const glosa = sigue ? '(sigue el nombre)' : qere ? qere.map(glosar).join(' ') : glosar(p);
    const tr = qere ? qere.map(q => q[1]).join(' ') : p[1];
    const morfo = analizar(lee).map(x => corta(x.s)).filter(Boolean).join(' + ');
    const he = p[0] ? p[0].replace(/\//g, '') : '[' + qere.map(q => q[0].replace(/\//g, '')).join(' ') + ']';
    return `<button type="button" class="pal${qere ? ' kq' : ''}" data-w="${ci}.${vi}.${wi}">` +
      `<span class="he" lang="he">${esc(he)}${p[4] === 1 ? '־' : ''}${qere ? '<sup class="q" aria-label="ketiv">°</sup>' : ''}</span>` +
      `<span class="tr" lang="he-Latn">${esc(tr)}</span>` +
      `<span class="es">${esc(glosa)}</span>` +
      `<span class="mo">${esc(morfo)}</span></button>`;
  }
  function verso(ci, vi, ps) {
    const r = rvRef(ci, vi);
    const nota = r.titulo ? 'En la Reina-Valera, el título del salmo va sin número, antes del versículo 1.' : '';
    return `<section class="vers" id="v${vi}" aria-label="Versículo ${vi}">` +
      `<div class="linea" dir="rtl"><a class="n" href="#${libro}/${ci}/${vi}" dir="ltr">${vi}</a>${ps.map((p, wi) => palabraHTML(p, ci, vi, wi, ps[wi - 1])).join('')}</div>` +
      `<div class="rv" data-rv="${r.titulo ? '' : r.cap + ':' + r.vers}" data-h="${ci}:${vi}"><span class="nota-num">${esc(nota)}</span> <span class="rvtxt"></span></div></section>`;
  }

  async function textoRV(ci, n) {
    if (!window.Citas) return;
    const ver = Citas.version();
    // Numeración de la versión elegida: "rv" lleva del hebreo a la RV 1960 y "rvv", de la RV 1960 a las otras
    const otra = (datos && datos.rvv && datos.rvv[ver]) || {};
    const ref = el => { const k = el.dataset.rv; return k && (otra[k] || k); };
    const pedidos = {};
    document.querySelectorAll('.rv[data-rv]').forEach(el => {
      const k = ref(el); if (!k) return;
      const c = +k.split(':')[0];
      pedidos[c] = pedidos[c] || Citas.capitulo(ver, libro, c);
    });
    const caps = {};
    await Promise.all(Object.entries(pedidos).map(async ([c, pr]) => { caps[c] = await pr; }));
    const versiones = await Citas.versiones();
    const abrev = (versiones.find(x => x.id === ver) || {}).abrev || '';
    document.querySelectorAll('.rv[data-rv]').forEach(el => {
      const k = ref(el); if (!k) return;
      const [c, v] = k.split(':').map(Number);
      const t = caps[c] && caps[c][v - 1];
      el.querySelector('.nota-num').textContent = k === el.dataset.h ? '' : `En la ${abrev} es ${NOMBRE[libro]} ${c}:${v}.`;
      el.querySelector('.rvtxt').innerHTML = t ? `<b>${esc(abrev)}</b> ${esc(t)}` : '<i>Este versículo no está en el texto español del sitio.</i>';
    });
    const v = versiones.find(x => x.id === ver);
    $('credito-rv').textContent = v ? v.credito : '';
  }

  /* ---------------------------------------------------------------- ficha de una palabra */
  function ficha(btn) {
    const [ci, vi, wi] = btn.dataset.w.split('.').map(Number);
    const p = datos.c[ci - 1][vi - 1][wi];
    const qere = p.length === 6 && p[5] && p[5].length ? p[5] : null;
    const lecturas = qere || [p];
    let h = `<p class="f-ref">${esc(NOMBRE[libro])} ${ci}:${vi} · palabra ${wi + 1}</p>`;
    h += `<p class="f-he he" lang="he">${esc(p[0] ? p[0].replace(/\//g, '') : '[' + qere.map(q => q[0].replace(/\//g, '')).join(' ') + ']')}</p>`;
    if (qere && !p[0]) h += `<p class="f-kq">Esta palabra no está escrita en el códice, pero los masoretas indicaron leerla (<i>qere</i> sin <i>ketiv</i>). Por eso va entre corchetes.</p>`;
    else if (qere) h += `<p class="f-kq">Se escribe <span class="he" lang="he">${esc(p[0])}</span> (<i>ketiv</i>, lo escrito) y se lee <span class="he" lang="he">${esc(qere.map(q => q[0].replace(/\//g, '')).join(' '))}</span> (<i>qere</i>, lo que se lee), según la nota de los masoretas. La transliteración y la glosa siguen al qere.</p>`;
    lecturas.forEach(w => {
      h += `<p class="f-tr"><span>${esc(w[1])}</span> · <b>${esc(glosar(w))}</b></p>`;
      h += '<table class="f-tab"><tbody>';
      const hes = w[0].split('/');
      let k = 0;
      analizar(w).forEach(x => {
        const parte = hes[k++] || '';
        let lema = '';
        if (x.lema) {
          const n = num(x.lema);
          const L = n && LEX[n];
          lema = L ? `<span class="he" lang="he">${esc(L[1])}</span> <i>${esc(L[2])}</i> «${esc(L[0].replace(/^=/, ''))}» · Strong H${n}<br><small>Aparece ${fmt(L[3])} ${L[3] === 1 ? 'vez' : 'veces'} en el Antiguo Testamento${L[4] ? ' · está en el <a href="../../gramatica-hebrea/vocabulario/" target="_top">vocabulario de 751 palabras</a>' : ''}</small>`
            : esc({ b: 'בְּ «en»', c: 'וְ «y»', d: 'הַ «el, la»', k: 'כְּ «como»', l: 'לְ «a, para»', m: 'מִן «de, desde»', s: 'שֶׁ «que»', i: 'הֲ «¿…?»' }[x.lema] || x.lema);
        }
        h += `<tr><td class="he" lang="he">${esc(parte)}</td><td>${esc(describir(x.s))}${lema ? '<br>' + lema : ''}</td></tr>`;
      });
      h += '</tbody></table>';
    });
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
  // Versión del texto en español: la misma preferencia del dispositivo que la cabecera del sitio y la burbuja de citas
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
    window.addEventListener('citas:version', () => { if ($('o-ver').value !== Citas.version()) $('o-ver').value = Citas.version(); textoRV(cap); });
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
    } else if (!datos) mostrar('gn', 1);
  }
  window.Interlineal = { glosar, analizar, describir };   // para revisar desde la consola
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
