/* ==========================================================
   mundo-geo.js — Geografía propia de «El mundo judío en tiempos de Jesús»
   Generado por geo/mundo_judio.py: NO EDITAR A MANO, editar el script.
   Se carga después de imperios-geo.js y de ../tierra-de-israel/tierra-geo.js.
   *** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***
   ========================================================== */
(() => {
  const G = window.IMPERIOS_GEO;
  if (!G) return;
  const X = {"polys":{},"capas":{"mj-agripa":{"n":"Reino de Agripa I","periodo":"41–44 d.C.","color":"#8a5a44","polys":["h-herodes"],"rot":[32.1,35.25]},"mj-provincia":{"n":"Provincia de Judea","periodo":"procuradores, 44–66 d.C.","color":"#9e2b25","polys":["h-herodes"],"rot":[31.8,35.1]},"mj-galilea-67":{"n":"Galilea","periodo":"la guerra, 67 d.C.","color":"#2f8a8a","polys":["nt-galilea"],"rot":[32.88,35.33]}},"lugares":{"seforis":["Séforis",32.753,35.279,"left"],"herodion":["Herodión",31.666,35.241,"right"],"monte-gerizim":["Monte Gerizim",32.2,35.27,"right"],"gamla":["Gamla",32.903,35.74,"right"],"jotapata":["Jotapata",32.84,35.274,"left"],"yavne":["Yavne (Jamnia)",31.877,34.739,"left"],"antipatris":["Antípatris",32.105,34.93,"left"]},"trazos":{"mj-vespasiano-67":{"n":"Vespasiano en Galilea (67 d.C.)","l":[[32.92,35.08],[32.753,35.279],[32.84,35.274],[32.79,35.535],[32.825,35.515],[32.903,35.74]]},"mj-vespasiano-68":{"n":"Vespasiano rodea Jerusalén (68 d.C.)","l":[[32.5,34.9],[32.105,34.93],[31.95,34.89],[31.84,34.99],[31.87,35.44]]},"mj-tito-70":{"n":"Tito sitia Jerusalén (70 d.C.)","l":[[32.5,34.9],[32.28,35.2],[32.05,35.29],[31.778,35.235]]},"mj-silva-73":{"n":"La caída de Masada (73 o 74 d.C.)","l":[[31.778,35.235],[31.666,35.241],[31.32,35.35]]}}};
  ['polys', 'capas', 'lugares', 'trazos'].forEach(k => Object.assign(G[k], X[k]));
  window.MUNDO_ROTULOS = [["Mar Mediterráneo", 32.3, 34.25, "mar"], ["Mar Muerto", 31.42, 35.47, "mar"], ["Jordán", 32.25, 35.6, "rio"], ["Mar de Galilea", 32.82, 35.66, "mar"], ["Golfo de Áqaba", 28.9, 34.75, "mar"], ["Mar Rojo", 27.8, 34.6, "mar"], ["Nilo", 30.4, 31.0, "rio"], ["Éufrates", 35.2, 39.9, "rio"]];
})();
