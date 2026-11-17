/*
 * Datos que la portada lee de las apps al armar el sitio (solo en el build, nunca en el navegador):
 * - cuántas rutas y estaciones tiene cada ruta de estudio (data.js → window.RUTA_DATA),
 * - el texto del día que corresponde a la fecha del build (public/textos-del-dia, §14).
 * Así las cifras de la portada salen siempre de los recursos publicados y no se escriben a mano.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
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

function capitulo(version: string, libro: string, cap: number): (string | null)[] | null {
  const archivo = path.join(BIBLIA, version, libro, `${cap}.json`);
  if (!fs.existsSync(archivo)) return null;
  const d = JSON.parse(fs.readFileSync(archivo, 'utf8'));
  return Array.isArray(d) ? d : null;
}

// ---------------- Texto del día (generado por herramientas/textos_del_dia.mjs) ----------------
export interface TextoDia {
  ref: string; libro: string; cap: number; v: number;
  es: Record<string, string>; he: string | null;
  estudio: { a: string; recurso: string; estacion: string }; // a: «slug/#ruta/n», relativo a la base del sitio
}

/** El texto del día número n (días desde 1970) y cuántos textos hay, o null si la lista no existe. */
export function textoDelDia(n: number): { texto: TextoDia; total: number; bloque: number } | null {
  const dir = path.join(process.cwd(), 'public', 'textos-del-dia');
  const f = path.join(dir, 'indice.json');
  if (!fs.existsSync(f)) return null;
  const { total, bloque } = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (!total) return null;
  const i = n % total;
  const textos = JSON.parse(fs.readFileSync(path.join(dir, `${Math.floor(i / bloque)}.json`), 'utf8'));
  return { texto: textos[i % bloque], total, bloque };
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
