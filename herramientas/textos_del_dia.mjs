#!/usr/bin/env node
/*
 * Textos bíblicos del día (DIRECTRICES §14 y §20).
 *
 * Recorre las estaciones de todas las rutas de estudio publicadas, toma los versículos de su
 * campo `ref` y deja como candidatos los que se pueden leer solos: un pasaje de 1 a 3 versículos
 * que empieza y termina una oración, de largo razonable, que no es una lista de nombres ni una
 * genealogía. Cada texto enlaza la primera estación del sitio que lo estudia.
 *
 * Uso:  node herramientas/textos_del_dia.mjs           (se corre antes de cada ZIP, §25)
 *
 * Archivos (herramientas/textos-del-dia/):
 *   orden.txt    orden de los textos en el ciclo. Los textos nuevos se agregan al final, así un
 *                recurso nuevo no cambia el texto de los días ya asignados. No se edita a mano
 *                salvo para reordenar.
 *   excluir.txt  textos revisados que no sirven solos («Génesis 5:3  # genealogía»). Se edita a mano.
 *   nuevos.txt   lo que esta pasada agregó, para revisarlo (se reescribe cada vez).
 *
 * Salida: public/textos-del-dia/indice.json ({ total, bloque }) y public/textos-del-dia/{n}.json,
 * bloques de 50 textos con el español en cada versión del sitio, el hebreo (AT, con la
 * correspondencia de numeración del interlineal) y la estación donde se estudia.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR = path.join(RAIZ, 'herramientas', 'textos-del-dia');
const SALIDA = path.join(RAIZ, 'public', 'textos-del-dia');
const BLOQUE = 50;

// ---------- Libros (desde citas.js) ----------
const citas = fs.readFileSync(path.join(RAIZ, 'public/apps/assets/js/citas.js'), 'utf8');
const i0 = citas.indexOf('const LIBROS = ['), i1 = citas.indexOf('];', i0);
const LIBROS = vm.runInNewContext(citas.slice(i0 + 15, i1 + 1));
const FORMA = {}, NOMBRE = {}, ORDEN_LIBRO = {};
LIBROS.forEach(([id, n, formas], i) => { NOMBRE[id] = n; ORDEN_LIBRO[id] = i; formas.forEach((f) => { FORMA[f] = id; }); });
const AT = new Set(LIBROS.slice(0, 39).map(([id]) => id));

// ---------- Biblia del sitio ----------
const versiones = JSON.parse(fs.readFileSync(path.join(RAIZ, 'public/biblia/versiones.json'), 'utf8'));
const capCache = new Map();
function capitulo(ver, libro, cap) {
  const k = `${ver}/${libro}/${cap}`;
  if (!capCache.has(k)) {
    const f = path.join(RAIZ, 'public/biblia', ver, libro, `${cap}.json`);
    let d = null;
    if (fs.existsSync(f)) { const j = JSON.parse(fs.readFileSync(f, 'utf8')); d = Array.isArray(j) ? j : null; }
    capCache.set(k, d);
  }
  return capCache.get(k);
}
const hebCache = new Map();
function hebreo(libro, cap, v1, v2) {
  if (!hebCache.has(libro)) {
    const f = path.join(RAIZ, 'public/apps/interlineal-hebreo/interlineal/datos', `${libro}.json`);
    let d = null;
    if (fs.existsSync(f)) {
      d = JSON.parse(fs.readFileSync(f, 'utf8'));
      // rv: numeración hebrea → RV 1960 donde difieren; se invierte para buscar desde la RV
      d.inv = {}; d.cambia = new Set(Object.keys(d.rv ?? {}));
      for (const [he, rv] of Object.entries(d.rv ?? {})) if (/^\d+:\d+$/.test(rv)) d.inv[rv] = he;
    }
    hebCache.set(libro, d);
  }
  const d = hebCache.get(libro);
  if (!d) return null;
  const partes = [];
  for (let v = v1; v <= v2; v++) {
    const rv = `${cap}:${v}`;
    const he = d.inv[rv] ?? (d.cambia.has(rv) ? null : rv);
    if (!he) return null;
    const [c, vv] = he.split(':').map(Number);
    const palabras = d.c?.[c - 1]?.[vv - 1];
    if (!palabras) return null;
    partes.push(palabras.map((p) => String(p[0]).replace(/\//g, '')).join(' ').replace(/־ /g, '־'));
  }
  return partes.join(' ');
}

// ---------- Recursos publicados con ruta de estudio ----------
const recursos = [];
for (const f of fs.readdirSync(path.join(RAIZ, 'src/content/recursos'))) {
  const t = fs.readFileSync(path.join(RAIZ, 'src/content/recursos', f), 'utf8');
  if (/^publicado:\s*false/m.test(t)) continue;
  const ruta = (t.match(/\n  ruta: (.+)/) || [])[1]?.trim();
  const orden = Number((t.match(/\norden:\s*(\d+)/) || [])[1] ?? 999);
  const titulo = (t.match(/\ntitulo:\s*['"]?(.+?)['"]?\s*\n/) || [])[1];
  if (!ruta) continue;
  const p = path.join(RAIZ, 'public/apps', ruta.split('/')[0], 'data.js');
  if (!fs.existsSync(p)) continue;
  const w = {};
  try { vm.runInNewContext(fs.readFileSync(p, 'utf8'), { window: w, self: w, console: { log() {}, warn() {} } }); } catch { continue; }
  if (!w.RUTA_DATA?.rutas) continue;
  recursos.push({ slug: f.replace(/\.md$/, ''), titulo, orden, rutas: w.RUTA_DATA.rutas.filter((r) => !r.pendiente) });
}
recursos.sort((a, b) => a.orden - b.orden || a.slug.localeCompare(b.slug));

// ---------- Referencias de las estaciones ----------
// «Hechos 1:8; 2:4, 9-11; Lucas 3:21-22» → [{ libro, cap, v1, v2 }]
function tramos(ref) {
  const res = [];
  let libro = null;
  for (const trozo of String(ref ?? '').split(';')) {
    let s = trozo.trim();
    const m = s.match(/^((?:[123]\s)?[A-ZÁÉÍÓÚ][a-záéíóúñ]+(?:\s(?:de\s)?(?:los\s)?[A-ZÁÉÍÓÚ][a-záéíóúñ]+)?)\s+(?=\d)/);
    if (m) {
      const id = FORMA[m[1]] ?? FORMA[m[1].split(' ').slice(0, m[1].match(/^\d/) ? 2 : 1).join(' ')];
      if (!id) { libro = null; continue; }
      libro = id; s = s.slice(m[0].length);
    } else if (!/^\d/.test(s)) { libro = null; continue; }
    if (!libro) continue;
    const mc = s.match(/^(\d+):(.+)$/);
    if (!mc) continue; // capítulo completo o rango de capítulos
    const cap = Number(mc[1]);
    for (const seg of mc[2].split(',')) {
      const ms = seg.trim().match(/^(\d+)(?:\s*[-–]\s*(\d+))?(?:\s*[a-z])?$/);
      if (!ms) continue; // cruza capítulos u otro formato
      const v1 = Number(ms[1]), v2 = ms[2] ? Number(ms[2]) : v1;
      if (v2 >= v1) res.push({ libro, cap, v1, v2 });
    }
  }
  return res;
}

// ---------- ¿Se lee solo? ----------
const FIN = /[.!?»”]$/;
const TEMA = /\b(Dios|Jehová|Señor|Cristo|Jesús|Jesucristo|Espíritu|Altísimo|Padre|Hijo del Hombre|Verbo|Cordero|fe|gracia|amor|am[aóé]\w*|salv\w*|pecad\w*|reino|vida|verdad|palabra|justicia|justo|misericordia|paz|gozo|esperanza|sant\w*|or[aó]\w*|oración|evangelio|iglesia|cre[eíy]\w*|perd[oó]n\w*|gloria|bendi\w*|pacto|promesa|resurrec\w*|alma|corazón|temor|confía\w*|redención|redim\w*|cruz|sangre|eterno|eternidad|cielos?|profet\w*|ley|mandamiento\w*|adora\w*|alaba\w*|sabiduría|luz|pastor)\b/i;
const TEMA_FUERTE = /\b(Dios|Jehová|Señor|Cristo|Jesús|Espíritu)\b/;
const NOMBRES_DIVINOS = new Set(['Dios', 'Jehová', 'Señor', 'Espíritu', 'Santo', 'Cristo', 'Jesús', 'Jesucristo', 'Padre', 'Hijo', 'Altísimo', 'Omnipotente', 'Todopoderoso', 'Cordero', 'Rey', 'Verbo', 'Hijo', 'Señor.', 'Dios.', 'Él', 'Yo', 'Tú']);
function seLeeSolo(libro, cap, v1, v2) {
  const c = capitulo('rv1960', libro, cap);
  if (!c) return null;
  const vs = c.slice(v1 - 1, v2);
  if (vs.length !== v2 - v1 + 1 || vs.some((x) => !x)) return null;
  const texto = vs.join(' ').trim();
  if (texto.length < 35 || texto.length > 420) return null;
  // Empieza una oración: mayúscula (o signo de apertura) y el versículo anterior cierra la suya
  if (!/^[¿¡«“A-ZÁÉÍÓÚÑ]/.test(texto)) return null;
  const prev = v1 > 1 ? String(c[v1 - 2] ?? '').trim() : '';
  if (prev && !/[.!?:»”]$/.test(prev)) return null;
  if (!FIN.test(texto)) return null;
  // Sin genealogías ni listas de nombres
  if (/\bengendró\b|\bhijos de\b.*\bhijos de\b|\bfueron sus días\b/.test(texto)) return null;
  const palabras = texto.split(/\s+/).slice(1);
  const nombres = palabras.filter((p) => /^[A-ZÁÉÍÓÚÑ]/.test(p) && !NOMBRES_DIVINOS.has(p.replace(/[.,;:!?»”]+$/, '')));
  if (nombres.length / Math.max(palabras.length, 1) > 0.18 || nombres.length > 6) return null;
  // Un texto del día habla de Dios, de su obra o de la vida de fe: se descartan los pasajes solo
  // narrativos o de datos (fechas, cifras, viajes, cargos) que no nombran nada de eso
  if (!TEMA.test(texto)) return null;
  if (/\b(año|mes|día) (primero|segundo|tercero|cuarto|quinto|sexto|séptimo|octavo|noveno|décimo|\w+avo)\b|\bciento\b|\bmil\b|\bcodos\b|\bsiclos\b/i.test(texto) && !TEMA_FUERTE.test(texto)) return null;
  return texto;
}

// Desde un tramo, el primer pasaje de 1 a 3 versículos que se lee solo
function pasajeDe(t) {
  for (let largo = 1; largo <= 3; largo++) {
    const v2 = t.v1 + largo - 1;
    if (v2 > t.v2 && largo > 1) break;
    if (seLeeSolo(t.libro, t.cap, t.v1, v2)) return { ...t, v2 };
  }
  return null;
}

const clave = (p) => `${NOMBRE[p.libro]} ${p.cap}:${p.v1}${p.v2 > p.v1 ? `-${p.v2}` : ''}`;
const inicio = (p) => `${p.libro} ${p.cap}:${p.v1}`;

// ---------- Candidatos: cada versículo de cada estación ----------
const candidatos = new Map(); // inicio → { pasaje, estudio }
for (const r of recursos) {
  for (const ruta of r.rutas) {
    (ruta.estaciones ?? []).forEach((e, i) => {
      const lista = tramos(e.ref);
      lista.forEach((t, pos) => {
        // Se toma el comienzo de cada pasaje citado. Si el mismo texto aparece en varias estaciones,
        // enlaza la que lo cita primero en su referencia (donde es el pasaje central), y entre esas,
        // la del recurso que va antes en el catálogo
        const p = pasajeDe(t);
        if (!p) return;
        const previo = candidatos.get(inicio(p));
        if (previo && previo.pos <= pos) return;
        candidatos.set(inicio(p), { p, pos, estudio: { a: `${r.slug}/#${ruta.id}/${i + 1}`, recurso: r.titulo, estacion: e.n } });
      });
    });
  }
}

// ---------- Textos agregados a mano (incluir.txt: «Éxodo 3:14 | dios-y-la-trinidad/#nombres/2») ----------
// Para pasajes que el filtro descarta pero sirven solos. El enlace es a la estación que lo estudia.
const FORMA_LARGA = Object.fromEntries(Object.entries(NOMBRE).map(([id, n]) => [n, id]));
for (const linea of (fs.existsSync(path.join(DIR, 'incluir.txt')) ? fs.readFileSync(path.join(DIR, 'incluir.txt'), 'utf8') : '').split('\n')) {
  const l = linea.replace(/#(?!\w+\/)[^|]*$/, '').trim();
  const m = l.match(/^((?:[123]\s)?[^\d|]+?)\s+(\d+):(\d+)(?:-(\d+))?\s*\|\s*([a-z0-9-]+)\/#([\w-]+)\/(\d+)/);
  if (!m) continue;
  const libro = FORMA_LARGA[m[1]] ?? FORMA[m[1]];
  const rec = recursos.find((r) => r.slug === m[5]);
  const ruta = rec?.rutas.find((r) => r.id === m[6]);
  const est = ruta?.estaciones?.[Number(m[7]) - 1];
  if (!libro || !est) { console.warn(`incluir.txt: no se reconoce «${l}»`); continue; }
  const p = { libro, cap: Number(m[2]), v1: Number(m[3]), v2: Number(m[4] ?? m[3]) };
  candidatos.set(inicio(p), { p, pos: -1, estudio: { a: `${m[5]}/#${m[6]}/${m[7]}`, recurso: rec.titulo, estacion: est.n } });
}

// ---------- Exclusiones y orden estable ----------
const leer = (f) => fs.existsSync(path.join(DIR, f))
  ? fs.readFileSync(path.join(DIR, f), 'utf8').split('\n').map((l) => l.replace(/#.*/, '').trim()).filter(Boolean) : [];
const excluir = new Set(leer('excluir.txt'));
const porClave = new Map([...candidatos.values()].map((c) => [clave(c.p), c]));
const validos = new Map([...porClave].filter(([k]) => !excluir.has(k)));
const ordenPrevio = leer('orden.txt').filter((k) => validos.has(k));
const yaEsta = new Set(ordenPrevio);

// Nuevos: barajados con semilla fija y alternando Antiguo y Nuevo Testamento, sin repetir libro seguido
let semilla = 20261117;
const azar = () => { semilla = (semilla * 1664525 + 1013904223) % 4294967296; return semilla / 4294967296; };
const barajar = (xs) => { for (let i = xs.length - 1; i > 0; i--) { const j = Math.floor(azar() * (i + 1)); [xs[i], xs[j]] = [xs[j], xs[i]]; } return xs; };
const nuevos = [...validos.keys()].filter((k) => !yaEsta.has(k)).sort((a, b) => {
  const pa = validos.get(a).p, pb = validos.get(b).p;
  return ORDEN_LIBRO[pa.libro] - ORDEN_LIBRO[pb.libro] || pa.cap - pb.cap || pa.v1 - pb.v1;
});
const at = barajar(nuevos.filter((k) => AT.has(validos.get(k).p.libro)));
const nt = barajar(nuevos.filter((k) => !AT.has(validos.get(k).p.libro)));
const intercalados = [];
let ultimo = ordenPrevio.length ? validos.get(ordenPrevio[ordenPrevio.length - 1]).p.libro : null;
let turnoAT = ultimo ? !AT.has(ultimo) : true;
while (at.length || nt.length) {
  const fila = (turnoAT && at.length) || !nt.length ? at : nt;
  let j = fila.findIndex((k) => validos.get(k).p.libro !== ultimo);
  if (j < 0) j = 0;
  const [k] = fila.splice(j, 1);
  intercalados.push(k); ultimo = validos.get(k).p.libro; turnoAT = !turnoAT;
}
const orden = [...ordenPrevio, ...intercalados];

// ---------- Escribir ----------
fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, 'orden.txt'),
  '# Orden de los textos del día (generado por herramientas/textos_del_dia.mjs; los nuevos se agregan al final)\n' + orden.join('\n') + '\n');
fs.writeFileSync(path.join(DIR, 'nuevos.txt'),
  `# Textos agregados en la última pasada (${intercalados.length}). Revisarlos: los que no se entienden solos van a excluir.txt\n` +
  intercalados.map((k) => { const c = validos.get(k); return `${k}\t${seLeeSolo(c.p.libro, c.p.cap, c.p.v1, c.p.v2)}\t[${c.estudio.a}]`; }).join('\n') + '\n');
if (!fs.existsSync(path.join(DIR, 'excluir.txt'))) fs.writeFileSync(path.join(DIR, 'excluir.txt'), '# Textos que no se leen solos (una referencia por línea, como en orden.txt; # comentario)\n');

fs.rmSync(SALIDA, { recursive: true, force: true });
fs.mkdirSync(SALIDA, { recursive: true });
const textos = orden.map((k) => {
  const { p, estudio } = validos.get(k);
  const es = {};
  for (const v of versiones) {
    const c = capitulo(v.id, p.libro, p.cap);
    const vs = c?.slice(p.v1 - 1, p.v2);
    if (vs && vs.length === p.v2 - p.v1 + 1 && vs.every(Boolean)) es[v.id] = vs.join(' ');
  }
  return { ref: k, libro: p.libro, cap: p.cap, v: p.v1, es, he: AT.has(p.libro) ? hebreo(p.libro, p.cap, p.v1, p.v2) : null, estudio };
});
for (let b = 0; b * BLOQUE < textos.length; b++) {
  fs.writeFileSync(path.join(SALIDA, `${b}.json`), JSON.stringify(textos.slice(b * BLOQUE, (b + 1) * BLOQUE)));
}
fs.writeFileSync(path.join(SALIDA, 'indice.json'), JSON.stringify({ total: textos.length, bloque: BLOQUE }));

const porRecurso = {};
for (const k of orden) { const s = validos.get(k).estudio.a.split('/')[0]; porRecurso[s] = (porRecurso[s] ?? 0) + 1; }
console.log(`Textos del día: ${textos.length} (${intercalados.length} nuevos, ${excluir.size} excluidos), de ${recursos.length} recursos.`);
console.log(`Sin hebreo en el AT: ${textos.filter((t) => AT.has(t.libro) && !t.he).length}.`);
console.log(Object.entries(porRecurso).sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s} ${n}`).join(' · '));
