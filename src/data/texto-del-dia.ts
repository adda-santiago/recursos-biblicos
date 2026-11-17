/*
 * Texto bíblico del día (portada, DIRECTRICES §14).
 * Cada día se muestra un texto de esta lista, en orden, según la fecha del visitante.
 * - libro: código de public/biblia y de citas.js; cap y vv: capítulo y versículos (inicio y fin).
 * - hebreo: true si la numeración hebrea coincide con la de la RV 1960; el texto hebreo se copia
 *   del interlineal del sitio (Códice de Leningrado) al armar la página. Joel 2:28 es 3:1 en la
 *   Biblia hebrea, por eso va sin hebreo.
 * - estudio: estación del sitio donde se estudia el pasaje (slug del recurso, ruta y número).
 *   El título de la estación se lee del data.js del recurso al armar la página; si una estación
 *   cambia de lugar, se corrige aquí (el build avisa si no la encuentra).
 * El texto en español se copia de public/biblia en las tres versiones y la portada muestra la
 * que eligió el visitante. Agregar o quitar textos no requiere tocar nada más.
 */
export interface TextoDelDia {
  libro: string; cap: number; vv: [number, number];
  hebreo?: boolean;
  estudio: { slug: string; ruta: string; n: number };
}

const t = (libro: string, cap: number, v1: number, v2: number, slug: string, ruta: string, n: number, hebreo = false): TextoDelDia =>
  ({ libro, cap, vv: [v1, v2], hebreo, estudio: { slug, ruta, n } });

export const TEXTOS_DEL_DIA: TextoDelDia[] = [
  t('gn', 1, 1, 1, 'creacion-y-origenes', 'creador', 1, true),
  t('jn', 1, 1, 1, 'dios-y-la-trinidad', 'trinidad', 5),
  t('gn', 1, 27, 27, 'creacion-y-origenes', 'dias', 5, true),
  t('ro', 5, 8, 8, 'ser-humano-y-pecado', 'redencion', 1),
  t('gn', 12, 2, 3, 'pactos-y-dispensaciones', 'pactos', 3, true),
  t('ga', 2, 20, 20, 'persona-y-obra-de-cristo', 'viene', 3),
  t('gn', 15, 6, 6, 'pactos-y-dispensaciones', 'pactos', 4, true),
  t('ef', 2, 8, 9, 'introduccion-nuevo-testamento', 'pablo', 7),
  t('ex', 3, 14, 14, 'dios-y-la-trinidad', 'nombres', 2, true),
  t('jn', 14, 6, 6, 'persona-y-obra-de-cristo', 'persona', 2),
  t('dt', 6, 4, 5, 'alfabeto-hebreo', 'taller', 2, true),
  t('mt', 28, 19, 20, 'dios-y-la-trinidad', 'trinidad', 3),
  t('sal', 23, 1, 2, 'alfabeto-hebreo', 'taller', 4, true),
  t('jn', 1, 14, 14, 'persona-y-obra-de-cristo', 'persona', 5),
  t('sal', 119, 105, 105, 'de-la-biblia-a-nosotros', 'traducciones', 3, true),
  t('2ti', 3, 16, 17, 'palabra-de-dios', 'inspiracion', 3),
  t('is', 53, 5, 5, 'gramatica-hebrea', 'taller', 5, true),
  t('jn', 3, 16, 16, 'persona-y-obra-de-cristo', 'cruz', 7),
  t('jer', 31, 33, 33, 'pactos-y-dispensaciones', 'pactos', 10, true),
  t('he', 4, 12, 12, 'palabra-de-dios', 'autoridad', 6),
  t('ez', 36, 26, 27, 'espiritu-santo', 'salvacion', 2, true),
  t('2co', 5, 17, 17, 'ser-humano-y-pecado', 'redencion', 3),
  t('dn', 2, 44, 44, 'daniel', 'introduccion', 10, true),
  t('lc', 4, 18, 19, 'espiritu-santo', 'jesus', 2),
  t('jl', 2, 28, 29, 'espiritu-santo', 'at', 5),
  t('hch', 1, 8, 8, 'espiritu-santo', 'bautismo', 1),
  t('hab', 2, 4, 4, 'persona-y-obra-de-cristo', 'cruz', 5, true),
  t('hch', 2, 38, 39, 'espiritu-santo', 'bautismo', 7),
  t('fil', 2, 5, 7, 'persona-y-obra-de-cristo', 'encarnacion', 3),
  t('1co', 15, 3, 4, 'introduccion-nuevo-testamento', 'evangelios', 1),
  t('col', 1, 16, 16, 'creacion-y-origenes', 'creador', 3),
  t('he', 11, 3, 3, 'creacion-y-origenes', 'creador', 2),
  t('1p', 2, 9, 9, 'sacerdocio', 'cristo', 5),
  t('1jn', 1, 9, 9, 'ser-humano-y-pecado', 'caida', 4),
  t('ap', 21, 4, 4, 'apocalipsis', 'comentario', 27),
  t('ap', 22, 20, 20, 'apocalipsis', 'vida', 3),
];

// Nombre de cada libro (códigos de citas.js) para escribir la referencia
export const NOMBRE_LIBRO: Record<string, string> = {
  gn: 'Génesis', ex: 'Éxodo', dt: 'Deuteronomio', sal: 'Salmos', is: 'Isaías', jer: 'Jeremías', ez: 'Ezequiel',
  dn: 'Daniel', jl: 'Joel', hab: 'Habacuc', mt: 'Mateo', lc: 'Lucas', jn: 'Juan', hch: 'Hechos', ro: 'Romanos',
  '1co': '1 Corintios', '2co': '2 Corintios', ga: 'Gálatas', ef: 'Efesios', fil: 'Filipenses', col: 'Colosenses',
  '2ti': '2 Timoteo', he: 'Hebreos', '1p': '1 Pedro', '1jn': '1 Juan', ap: 'Apocalipsis',
};
