/* ==========================================================
   humano-geo.js — Geografía propia de «El ser humano y el pecado»
   Generado por geo/humano.py: NO EDITAR A MANO, editar el script.
   Se carga después de imperios-geo.js y agrega sus lugares a IMPERIOS_GEO.
   Lugares posteriores a la Biblia (prefijo h-): el atlas bíblico no los agrega.
   ========================================================== */
(() => {
  const G = window.IMPERIOS_GEO;
  if (!G) return;
  const X = {"lugares": {"h-roma": ["Roma", 41.9, 12.5], "h-hipona": ["Hipona", 36.88, 7.75, "left"], "h-cartago": ["Cartago (418)", 36.85, 10.32, "right"], "h-dioospolis": ["Dióspolis (Lida, 415)", 31.95, 34.89, "left"], "h-efeso": ["Éfeso (431)", 37.94, 27.34, "left"], "h-orange": ["Orange (529)", 44.138, 4.809, "left"], "h-wittenberg": ["Wittenberg", 51.87, 12.65], "h-ginebra": ["Ginebra", 46.2, 6.14, "left"], "h-leiden": ["Leiden", 52.16, 4.49, "left"], "h-dort": ["Dort (1618-1619)", 51.81, 4.67, "bottom"], "h-londres": ["Londres", 51.507, -0.128, "left"]}, "trazos": {}};
  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });
  Object.assign(G.trazos, X.trazos);
})();
