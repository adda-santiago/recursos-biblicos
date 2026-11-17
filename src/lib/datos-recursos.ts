/*
 * Datos que la portada lee de las apps al armar el sitio (solo en el build, nunca en el navegador):
 * - cuántas rutas y estaciones tiene cada ruta de estudio (data.js → window.RUTA_DATA),
 * - el título de una estación (para el texto del día),
 * - el texto del día en español (public/biblia) y en hebreo (datos del interlineal).
 * Así las cifras de la portada salen siempre de los recursos publicados y no se escriben a mano.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import type { TextoDelDia } from '../data/texto-del-dia';
import { FORMA_CODIGO, NOMBRE_CODIGO } from '../data/libros-citas';

const APPS = path.join(process.cwd(), 'public', 'apps');
const BIBLIA = path.join(process.cwd(), 'public', 'biblia');

const cache = new Map<string, any>();

/** Ejecuta el data.js de una app y devuelve su objeto global (RUTA_DATA, ARMONIA…), o null. */
function datosApp(carpeta: string): Record<string, any> | null {
  if (cache.has(carpeta)) return cache.get(carpeta);
  let res: Record<string, any> | null = null;
  const archivo = path.join(APPS, carpeta, 'data.js');
  if (fs.existsSync(archivo)) {
    const ventana: Record<string, any> = {};
    try {
      vm.runInNewContext(fs.readFileSync(archivo, 'utf8'), { window: ventana, self: ventana, console: { log() {}, warn() {} } }, { timeout: 2000 });
      res = ventana;
    } catch { res = null; }
  }
  cache.set(carpeta, res);
  return res;
}

export interface Estadisticas { rutas?: number; estaciones?: number; pasajes?: number }

/** Rutas y estaciones de una ruta de estudio, o pasajes de la armonía. `visorRuta` es visor.ruta de la ficha. */
export function estadisticas(visorRuta?: string): Estadisticas | null {
  if (!visorRuta || /^https?:/.test(visorRuta)) return null;
  const d = datosApp(visorRuta.split('/')[0]);
  if (!d) return null;
  if (d.RUTA_DATA?.rutas) {
    const rutas = d.RUTA_DATA.rutas.filter((r: any) => (r.estaciones ?? []).length > 0);
    return { rutas: rutas.length, estaciones: rutas.reduce((s: number, r: any) => s + r.estaciones.length, 0) };
  }
  const pasajes = d.ARMONIA?.pasajes;
  if (Array.isArray(pasajes)) return { pasajes: pasajes.length };
  return null;
}

/** Título de la estación n (desde 1) de la ruta `ruta` de la app `carpeta`. */
export function tituloEstacion(carpeta: string, ruta: string, n: number): string | null {
  const r = datosApp(carpeta)?.RUTA_DATA?.rutas?.find((x: any) => x.id === ruta);
  return r?.estaciones?.[n - 1]?.n ?? null;
}

function capitulo(version: string, libro: string, cap: number): (string | null)[] | null {
  const archivo = path.join(BIBLIA, version, libro, `${cap}.json`);
  if (!fs.existsSync(archivo)) return null;
  const d = JSON.parse(fs.readFileSync(archivo, 'utf8'));
  return Array.isArray(d) ? d : null;
}

const interlineal = new Map<string, any>();
function hebreo(libro: string, cap: number, v1: number, v2: number): string | null {
  if (!interlineal.has(libro)) {
    const archivo = path.join(APPS, 'interlineal-hebreo', 'interlineal', 'datos', `${libro}.json`);
    interlineal.set(libro, fs.existsSync(archivo) ? JSON.parse(fs.readFileSync(archivo, 'utf8')) : null);
  }
  const versos = interlineal.get(libro)?.c?.[cap - 1];
  if (!versos) return null;
  const partes: string[] = [];
  for (let v = v1; v <= v2; v++) {
    const palabras = versos[v - 1];
    if (!palabras) return null;
    // La barra separa los morfemas en los datos del interlineal; el maqaf une palabras sin espacio
    partes.push(palabras.map((p: any[]) => String(p[0]).replace(/\//g, '')).join(' ').replace(/־ /g, '־'));
  }
  return partes.join(' ');
}

export interface TextoArmado {
  ref: string;               // «Génesis 1:1» (numeración de la RV 1960)
  libro: string; cap: number; v: number;
  es: Record<string, string>; // versión → texto
  he: string | null;
  estudio: { url: string; recurso: string; estacion: string };
}

/** Arma los textos del día con el texto de cada versión y la estación donde se estudian. */
export function armarTextos(
  lista: TextoDelDia[], versiones: { id: string }[], nombres: Record<string, string>,
  recursos: Map<string, { titulo: string; url: string; carpeta: string }>,
): TextoArmado[] {
  const res: TextoArmado[] = [];
  for (const t of lista) {
    const [v1, v2] = t.vv;
    const es: Record<string, string> = {};
    for (const { id } of versiones) {
      const c = capitulo(id, t.libro, t.cap);
      const vs = c?.slice(v1 - 1, v2).filter(Boolean) as string[] | undefined;
      if (vs?.length === v2 - v1 + 1) es[id] = vs.join(' ');
    }
    const rec = recursos.get(t.estudio.slug);
    const estacion = rec ? tituloEstacion(rec.carpeta, t.estudio.ruta, t.estudio.n) : null;
    if (!es.rv1960 || !rec || !estacion) {
      console.warn(`[texto del día] se omite ${t.libro} ${t.cap}:${v1}: ${!es.rv1960 ? 'sin texto' : !rec ? 'recurso no publicado' : 'estación no encontrada'}`);
      continue;
    }
    res.push({
      ref: `${nombres[t.libro]} ${t.cap}:${v1}${v2 > v1 ? `-${v2}` : ''}`,
      libro: t.libro, cap: t.cap, v: v1,
      es,
      he: t.hebreo ? hebreo(t.libro, t.cap, v1, v2) : null,
      estudio: { url: `${rec.url}#${t.estudio.ruta}/${t.estudio.n}`, recurso: rec.titulo, estacion },
    });
  }
  return res;
}

// ---------------- Ficha del recurso (DIRECTRICES §15) ----------------

export interface RutaFicha {
  id: string; n: string; num: string; nombre: string; info: string; grupo: string;
  desde: number; hasta: number; estaciones: { n: string; ref: string }[];
}

/** Rutas activas de una ruta de estudio, con la numeración de sus estaciones en todo el recurso. */
export function rutasDe(visorRuta?: string): RutaFicha[] {
  if (!visorRuta) return [];
  const rutas = datosApp(visorRuta.split('/')[0])?.RUTA_DATA?.rutas ?? [];
  let n = 0;
  return rutas.filter((r: any) => !r.pendiente && (r.estaciones ?? []).length).map((r: any) => {
    // «III. Cómo leer Génesis 1» → número «III» y nombre «Cómo leer Génesis 1»
    const m = String(r.n).match(/^([IVXLC]+)\.\s+(.*)$/);
    const desde = n + 1; n += r.estaciones.length;
    return { id: r.id, n: r.n, num: m ? m[1] : '', nombre: m ? m[2] : r.n, info: r.info ?? '', grupo: r.grupo ?? '',
      desde, hasta: n, estaciones: r.estaciones.map((e: any) => ({ n: e.n, ref: e.ref ?? '' })) };
  });
}

export interface PosturaFicha { titulo: string; a: { n: string; t: string }; b: { n: string; t: string }; c?: string; ruta: string; i: number; estacion: string }

/** Bloques `posturas` de todas las estaciones, con la estación donde están. */
export function posturasDe(visorRuta?: string): PosturaFicha[] {
  if (!visorRuta) return [];
  const rutas = datosApp(visorRuta.split('/')[0])?.RUTA_DATA?.rutas ?? [];
  const res: PosturaFicha[] = [];
  for (const r of rutas) {
    if (r.pendiente) continue;
    (r.estaciones ?? []).forEach((e: any, i: number) => (e.texto ?? []).forEach((t: any) => {
      if (t && t.posturas) res.push({ ...t.posturas, ruta: r.id, i: i + 1, estacion: e.n });
    }));
  }
  return res;
}

/** Otros recursos del sitio que las estaciones enlazan con un botón `ir` (../../slug/), sin repetir. */
export function enlacesDe(visorRuta?: string): string[] {
  if (!visorRuta) return [];
  const rutas = datosApp(visorRuta.split('/')[0])?.RUTA_DATA?.rutas ?? [];
  const vistos = new Set<string>();
  for (const r of rutas) for (const e of r.estaciones ?? []) for (const t of e.texto ?? []) {
    const m = t && t.ir && String(t.ir.a).match(/^\.\.\/\.\.\/([a-z0-9-]+)\//);
    if (m) vistos.add(m[1]);
  }
  return [...vistos];
}

/** Primer pasaje de una referencia («Génesis 1:1-3; Juan 1:1») con su texto en la RV 1960 (hasta dos versículos). */
export function pasaje(ref: string): { ref: string; texto: string; corto: boolean } | null {
  const m = ref.match(/^\s*((?:[123]\s)?[A-ZÁÉÍÓÚ][a-záéíóúñ]+)\s+(\d+):(\d+)(?:\s?[-–]\s?(\d+))?(?![\d:])/);
  if (!m) return null;
  const codigo = FORMA_CODIGO[m[1]];
  if (!codigo) return null;
  const cap = +m[2], v1 = +m[3], v2 = m[4] ? +m[4] : v1;
  const c = capitulo('rv1960', codigo, cap);
  if (!c) return null;
  const fin = Math.min(v2, v1 + 1);
  const vs = c.slice(v1 - 1, fin).filter(Boolean) as string[];
  if (!vs.length) return null;
  return { ref: `${NOMBRE_CODIGO[codigo]} ${cap}:${v1}${fin > v1 ? `-${fin}` : ''}`, texto: vs.join(' '), corto: fin < v2 };
}
