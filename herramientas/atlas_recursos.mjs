// atlas_recursos.mjs — Genera public/apps/atlas/recursos.js (DIRECTRICES §20, Atlas bíblico)
//
// Para cada lugar del atlas reúne las estaciones del sitio donde se puede aprender más de él:
//   · rutas de estudio (data.js con window.RUTA_DATA): lugares de sus mapas y estaciones cuyo título nombra el lugar;
//   · la armonía de los evangelios (lugares de cada pasaje);
//   · los recursos 3D y legados, a mano (MANUAL, abajo).
// Además agrega como «otros lugares» los de imperios-geo.js que usan los recursos y no están en lugares.js,
// y deduce las épocas de cada lugar a partir de la fecha de las estaciones.
//
// Uso (desde la raíz del repositorio):  node herramientas/atlas_recursos.mjs
// Se corre cada vez que se publica o cambia un recurso, antes de empaquetar.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const APPS = path.join(RAIZ, 'public/apps');
const FICHAS = path.join(RAIZ, 'src/content/recursos');
const SALIDA = path.join(APPS, 'atlas/recursos.js');

// --- Recursos sin rutas de estudio (3D y legados): lugar del atlas → recurso ---
const MANUAL = {
  'templo-herodes': { lugares: ['jerusalen'], t: 'Modelo 3D del monte del templo' },
  'templo-salomon': { lugares: ['jerusalen'], t: 'Modelo 3D del templo' },
  'tabernaculo': { lugares: ['monte-sinai', 'silo'], t: 'Modelo 3D del tabernáculo' },
  'sumo-sacerdote': { lugares: ['monte-sinai'], t: 'Modelo 3D de las vestiduras' },
};

// --- Recursos de mapas del plan de publicación (botón «Recorridos» del atlas) ---
// slug: el de la ficha cuando se publique; mientras no exista o esté oculta, aparece «En preparación».
// ancla: ruta o pasaje que abre (opcional).
const RECORRIDOS = [
  { g: 'Antiguo Testamento', t: 'La tierra de Israel', slug: 'tierra-de-israel', d: 'Regiones, relieve, caminos y fronteras de la tierra prometida.' },
  { g: 'Antiguo Testamento', t: 'Los patriarcas', slug: 'patriarcas', d: 'De Ur a Canaán y a Egipto: Abraham, Isaac, Jacob y José.' },
  { g: 'Antiguo Testamento', t: 'El Éxodo y el desierto', slug: 'exodo-desierto', d: 'De Egipto al Sinaí y a las llanuras de Moab.' },
  { g: 'Antiguo Testamento', t: 'La conquista y las doce tribus', slug: 'conquista-tribus', d: 'Las campañas de Josué y el reparto de la tierra.' },
  { g: 'Antiguo Testamento', t: 'La vida de David', slug: 'vida-de-david', d: 'De Belén a Jerusalén: pastor, fugitivo y rey.' },
  { g: 'Antiguo Testamento', t: 'Jerusalén a través de la historia', slug: 'jerusalen-historia', d: 'La ciudad de David, de Ezequías, de Nehemías y de Herodes.' },
  { g: 'Antiguo Testamento', t: 'Los imperios en la historia bíblica', slug: 'imperios-historia', d: 'Egipto, Asiria, Babilonia, Persia, Grecia y Roma en el mapa.' },
  { g: 'Antiguo Testamento', t: 'El exilio y los retornos', slug: 'exilio', d: 'Las deportaciones a Asiria y Babilonia, y los regresos bajo Persia.' },
  { g: 'Nuevo Testamento', t: 'El recorrido de Jesús', slug: 'evangelios', d: 'En la armonía de los evangelios: mapa ampliado, opción «Recorrido de Jesús».' },
  { g: 'Nuevo Testamento', t: 'La expansión de la iglesia', slug: 'hechos', ancla: '#expansion/1', d: 'De Jerusalén a Roma, según Hechos.' },
  { g: 'Nuevo Testamento', t: 'Los viajes de Pablo', slug: 'viajes-pablo', d: 'Los tres viajes misioneros, el viaje a Roma y después de Hechos.' },
  { g: 'Nuevo Testamento', t: 'Las siete iglesias de Asia', slug: 'apocalipsis', ancla: '#iglesias/1', d: 'Las ciudades de Apocalipsis 2 y 3.' },
  { g: 'Nuevo Testamento', t: 'La expansión del cristianismo', slug: 'expansion-cristianismo', d: 'El evangelio después del Nuevo Testamento, siglo por siglo.' },
];

// --- Épocas por año (cronología bíblica del sitio: éxodo hacia 1446 a.C.) ---
const EPOCAS = [
  ['creacion', -99999, -2092], ['patriarcas', -2091, -1447], ['exodo', -1446, -1407], ['jueces', -1406, -1051],
  ['monarquia-unida', -1050, -931], ['monarquia-dividida', -930, -587], ['exilio', -586, -539], ['retorno', -538, -401],
  ['intertestamentario', -400, -6], ['vida-de-jesus', -5, 33], ['iglesia-primitiva', 34, 100],
];
// Una estación que abarca más de tres épocas (un panorama) no fija la época de sus lugares
const epocasDe = f => {
  if (f === undefined || f === null) return [];
  const [a, b] = Array.isArray(f) ? f : [f, f];
  const eps = EPOCAS.filter(([, d, h]) => a <= h && b >= d).map(e => e[0]);
  return eps.length > 3 ? [] : eps;
};

// --- Utilidades ---
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const cargar = (archivo, nombre) => {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(archivo, 'utf8'), ctx);
  return ctx.window[nombre];
};
function frontmatter(texto) {
  const m = texto.match(/^---\n([\s\S]*?)\n---/);
  const o = {};
  if (!m) return o;
  let padre = null;
  for (const linea of m[1].split('\n')) {
    const r = linea.match(/^(\s*)([\w-]+):\s*(.*)$/);
    if (!r) continue;
    const [, sang, k, v] = r;
    const val = v.replace(/^['"]|['"]$/g, '');
    if (!sang) { padre = k; o[k] = val; } else if (padre) { if (typeof o[padre] !== 'object') o[padre] = {}; o[padre][k] = val; }
  }
  return o;
}

// --- Datos de entrada ---
const LUGARES = cargar(path.join(APPS, 'atlas/lugares.js'), 'ATLAS_LUGARES');
const GEO = cargar(path.join(APPS, 'assets/js/imperios-geo.js'), 'IMPERIOS_GEO').lugares;
const REGION = id => /^r-/.test(id) || ['desierto-judea', 'montana-judea', 'decapolis', 'perea', 'tiro-sidon', 'medos', 'hispania', 'iliria', 'rio-egipto'].includes(id);

// Fichas publicadas: carpeta de la app → { slug, titulo }
const fichas = {};
for (const f of fs.readdirSync(FICHAS).filter(f => f.endsWith('.md'))) {
  const fm = frontmatter(fs.readFileSync(path.join(FICHAS, f), 'utf8'));
  if (fm.publicado === 'false') continue;
  const slug = f.replace(/\.md$/, '');
  const app = fm.visor && fm.visor.ruta;
  if (app) fichas[app] = { slug, t: fm.titulo };
  fichas['slug:' + slug] = { slug, t: fm.titulo };
}

// Índice geo → lugar del atlas; lugares extra desde geo
const porGeo = {};
LUGARES.forEach(l => (l.geo || []).forEach(g => { porGeo[g] = l.id; }));
const extra = {};
const lugarDeGeo = g => {
  if (porGeo[g]) return porGeo[g];
  if (REGION(g) || !GEO[g]) return null;
  if (!extra[g]) { const [n, lat, lng] = GEO[g]; extra[g] = { id: g, n: n.replace(/\s*\(aprox\.\)|\s*\(trad\.\)|\s*\(¿\?\)/g, ''), lat, lng, ep: new Set() }; }
  return g;
};
// Nombres para reconocer el lugar en el título de una estación
const nombres = l => [l.n, ...(l.alias || [])].map(n => norm(n.replace(/\s*\(.*\)/, ''))).filter(n => n.length > 2);
const nombraLugar = (titulo, l) => { const t = ' ' + norm(titulo).replace(/[^a-zñ0-9]+/g, ' ') + ' '; return nombres(l).some(n => t.includes(' ' + n.replace(/[^a-zñ0-9]+/g, ' ') + ' ')); };

const enlaces = {};             // lugar → [[slug, ancla, título, ruta, fuerte]]
const epocas = {};              // lugar → Set
const recursos = {};            // slug → { t }
const agregar = (lugar, slug, ancla, t, ruta, fuerte, eps) => {
  if (!lugar) return;
  const lista = enlaces[lugar] || (enlaces[lugar] = []);
  const previo = lista.find(e => e[0] === slug && e[1] === ancla);
  const idx = eps.map(e => EPOCAS.findIndex(x => x[0] === e)).filter(i => i >= 0);
  if (previo) { previo[4] = previo[4] || (fuerte ? 1 : 0); } else lista.push([slug, ancla, t, ruta, fuerte ? 1 : 0, idx]);
  const s = epocas[lugar] || (epocas[lugar] = new Set());
  eps.forEach(e => s.add(e));
};

// --- Rutas de estudio ---
for (const app of fs.readdirSync(APPS)) {
  const dataJs = path.join(APPS, app, 'data.js');
  if (app === 'atlas' || !fichas[app] || !fs.existsSync(dataJs)) continue;
  const D = cargar(dataJs, 'RUTA_DATA');
  if (!D || !D.rutas) continue;
  const { slug, t } = fichas[app];
  let usado = false;
  for (const r of D.rutas) {
    if (r.pendiente) continue;
    (r.estaciones || []).forEach((e, i) => {
      const ancla = `#${r.id}/${i + 1}`;
      const eps = epocasDe(e.fecha);
      const geoIds = new Set();
      (e.visual || []).forEach(v => {
        if (v.tipo !== 'mapa') return;
        (v.pasos ? v.pasos.map(p => p.estado) : [v.estado]).forEach(s => (s && s.lugares || []).forEach(id => geoIds.add(id)));
      });
      const tocados = new Set();
      geoIds.forEach(g => { const l = lugarDeGeo(g); if (l) tocados.add(l); });
      // Título que nombra un lugar (también sin mapa)
      LUGARES.forEach(l => { if (nombraLugar(e.n, l)) tocados.add(l.id); });
      tocados.forEach(l => {
        const ld = LUGARES.find(x => x.id === l) || extra[l];
        agregar(l, slug, ancla, e.n, r.n, nombraLugar(e.n, ld), eps);
        usado = true;
      });
    });
  }
  if (usado) recursos[slug] = { t };
}

// --- Armonía de los evangelios ---
if (fichas.evangelios) {
  const A = cargar(path.join(APPS, 'evangelios/data.js'), 'ARMONIA');
  const { slug, t } = fichas.evangelios;
  const secciones = Object.fromEntries((A.secciones || []).map(s => [s.id, s.n]));
  A.pasajes.forEach(p => {
    (p.lugar && p.lugar.lugares || []).forEach(g => {
      const l = lugarDeGeo(g);
      if (!l) return;
      const ld = LUGARES.find(x => x.id === l) || extra[l];
      agregar(l, slug, '#' + p.id, p.t, secciones[p.sec] || '', nombraLugar(p.t, ld), ['vida-de-jesus']);
    });
  });
  recursos[slug] = { t };
}

// --- Recursos 3D y legados ---
for (const [app, m] of Object.entries(MANUAL)) {
  if (!fichas[app]) continue;
  const { slug, t } = fichas[app];
  m.lugares.forEach(l => agregar(l, slug, '', m.t, '', 1, []));
  recursos[slug] = { t };
}

// --- Orden: primero las estaciones que nombran el lugar; luego por recurso y orden de aparición ---
for (const l of Object.keys(enlaces)) {
  enlaces[l] = enlaces[l].map((e, i) => [e, i]).sort((a, b) => (b[0][4] - a[0][4]) || (a[1] - b[1])).map(x => x[0]);
}

// Lugares extra: solo los que tienen al menos un enlace
const extras = Object.values(extra).filter(x => enlaces[x.id]).map(x => ({ id: x.id, n: x.n, lat: +x.lat.toFixed(4), lng: +x.lng.toFixed(4) }));
const recorridos = RECORRIDOS.map(r => {
  const f = fichas['slug:' + r.slug];
  return { g: r.g, t: r.t, d: r.d, a: f ? r.slug + '/' + (r.ancla || '') : null };
});

const hoy = new Date().toISOString().slice(0, 10);
const salida = {
  generado: hoy,
  recursos,
  enlaces,
  epocas: Object.fromEntries(Object.entries(epocas).filter(([, s]) => s.size).map(([k, s]) => [k, [...s]])),
  extras,
  recorridos,
};
const js = `/* recursos.js — GENERADO por herramientas/atlas_recursos.mjs el ${hoy}. No editar a mano.
   enlaces: lugar → [slug, ancla, título de la estación, ruta, 1 si la estación nombra el lugar, índices de época (0 = creación … 10 = iglesia primitiva)]
   epocas: épocas deducidas de las fechas de las estaciones. extras: lugares de otros recursos que no están en lugares.js. */
window.ATLAS_RECURSOS = ${JSON.stringify(salida)};
`;
fs.writeFileSync(SALIDA, js);
const total = Object.values(enlaces).reduce((n, l) => n + l.length, 0);
console.log(`recursos.js: ${Object.keys(recursos).length} recursos, ${Object.keys(enlaces).length} lugares con enlaces (${total} enlaces), ${extras.length} lugares extra.`);
const sin = LUGARES.filter(l => !enlaces[l.id]).map(l => l.n);
if (sin.length) console.log('Lugares del atlas sin recursos todavía:', sin.join(', '));
