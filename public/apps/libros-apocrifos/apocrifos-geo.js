/* ==========================================================
   apocrifos-geo.js — Geografía propia de «Los libros apócrifos y pseudoepígrafos»
   Generado por geo/apocrifos.py: NO EDITAR A MANO, editar el script.
   Se carga después de imperios-geo.js y agrega sus lugares y trazos a IMPERIOS_GEO.
   Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega).
   *** Trazos APROXIMADOS e ILUSTRATIVOS. ***
   ========================================================== */
(() => {
  const G = window.IMPERIOS_GEO;
  if (!G) return;
  const X = {"lugares":{"qumran":["Qumrán",31.741,35.459,"right"],"ragues":["Ragues (Media)",35.59,51.44],"h-hipona":["Hipona (393)",36.88,7.75,"left"],"h-wittenberg":["Wittenberg",51.866,12.649],"h-trento":["Trento (1546)",46.07,11.12],"h-basilea":["Basilea (1569)",47.56,7.59,"left"],"h-amsterdam":["Ámsterdam (1602)",52.37,4.9,"left"],"h-el-cairo":["El Cairo (genizá)",30.006,31.231,"left"],"h-aksum":["Aksum (Etiopía)",14.13,38.72],"h-nag-hammadi":["Nag Hammadi (1945)",26.05,32.24],"h-oxirrinco":["Oxirrinco",28.53,30.66,"left"],"h-akhmim":["Ajmim",26.56,31.75,"left"],"h-lyon":["Lyon",45.76,4.84]},"trazos":{"apo-tobias":{"n":"El viaje de Tobías (según el relato)","l":[[36.36,43.15],[35.4,45.5],[34.8,48.52],[35.2,50.3],[35.59,51.44]]}}};
  Object.assign(G.lugares, X.lugares);
  Object.assign(G.trazos, X.trazos);
})();
