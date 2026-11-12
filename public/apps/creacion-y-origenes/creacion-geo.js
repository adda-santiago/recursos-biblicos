/* ==========================================================
   creacion-geo.js — Geografía propia de «La creación y los orígenes»
   Generado por geo/creacion.py: NO EDITAR A MANO, editar el script.
   Se carga después de imperios-geo.js y agrega sus lugares y trazos a IMPERIOS_GEO.
   *** Ubicaciones APROXIMADAS: el Edén y varios pueblos de Génesis 10 son hipótesis. ***
   ========================================================== */
(() => {
  const G = window.IMPERIOS_GEO;
  if (!G) return;
  const X = {"lugares": {"r-eden-sur": ["Edén: hipótesis del sur", 30.45, 47.95, "bottom"], "r-eden-norte": ["Edén: hipótesis del norte", 38.75, 42.6, "top"], "eridu": ["Eridu", 30.816, 45.996, "left"], "acad": ["Acad (aprox.)", 33.1, 44.1, "left"], "monte-ararat": ["Monte Ararat", 39.702, 44.299, "top"], "r-urartu": ["Ararat (Urartu)", 38.9, 43.2, "left"], "javan": ["Javán (Jonia)", 38.4, 27.3, "left"], "quitim": ["Quitim (Chipre)", 35.05, 33.2, "bottom"], "canaan": ["Canaán", 31.9, 34.95, "left"], "het": ["Het (hititas)", 40.02, 34.62, "bottom"], "seba": ["Seba (Sabá)", 15.43, 45.33], "lud": ["Lud (Lidia)", 38.6, 29.0, "bottom"], "aram": ["Aram (Siria)", 34.9, 37.6]}, "trazos": {"cr-tare": {"n": "De Ur a Harán (Gn 11:31)", "l": [[30.963, 46.103], [31.32, 45.64], [32.0, 45.0], [32.536, 44.421], [33.06, 44.25], [33.9, 42.4], [34.45, 41.0], [35.33, 40.15], [35.95, 39.03], [36.4, 38.95], [36.865, 39.031]]}}};
  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });
  Object.assign(G.trazos, X.trazos);
})();
