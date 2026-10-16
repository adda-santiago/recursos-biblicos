/* ==========================================================
   Armonía de los evangelios · recorrido de Jesús
   Calcula el camino de Jesús desde el bautismo hasta un pasaje, siguiendo la red de caminos.js
   (camino más corto entre cada par de puntos). Devuelve tramos con su etapa, para dibujarlos.
   ========================================================== */
window.RutaJesus = (() => {
  const C = window.CAMINOS, A = window.ARMONIA;
  const R = 6371;
  const rad = x => x * Math.PI / 180;
  const dist = (p, q) => { const dl = rad(q[0] - p[0]), dn = rad(q[1] - p[1]); const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(p[0])) * Math.cos(rad(q[0])) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
  const largo = pts => pts.slice(1).reduce((s, p, i) => s + dist(pts[i], p), 0);
  // grafo: cada arista con su trazado completo y su largo
  const adj = {};
  C.aristas.forEach(([a, b, mid, tipo]) => {
    const pts = [C.nodos[a], ...(mid || []), C.nodos[b]], km = largo(pts);
    (adj[a] = adj[a] || []).push({ to: b, pts, km, tipo });
    (adj[b] = adj[b] || []).push({ to: a, pts: pts.slice().reverse(), km, tipo });
  });
  const cache = {};
  function camino(a, b) {
    if (a === b) return { pts: [C.nodos[a]], km: 0, tramos: [] };
    const k = a + '>' + b; if (cache[k]) return cache[k];
    const d = { [a]: 0 }, prev = {}, hecho = new Set();
    for (;;) {
      let u = null, best = Infinity;
      for (const n in d) if (!hecho.has(n) && d[n] < best) { best = d[n]; u = n; }
      if (u === null || u === b) break;
      hecho.add(u);
      for (const e of adj[u] || []) {
        const nd = d[u] + e.km * (e.tipo === 'barca' ? 0.8 : 1);
        if (nd < (d[e.to] ?? Infinity)) { d[e.to] = nd; prev[e.to] = { from: u, e }; }
      }
    }
    const tramos = []; let n = b;
    while (prev[n]) { tramos.unshift(prev[n].e); n = prev[n].from; }
    const res = { tramos, km: tramos.reduce((s, e) => s + e.km, 0) };
    return (cache[k] = res);
  }
  // Suavizado de Chaikin: corta las esquinas manteniendo los extremos (curvas en vez de quiebres)
  function suavizar(pts, n = 3) {
    for (let k = 0; k < n; k++) {
      if (pts.length < 3) return pts;
      const out = [pts[0]];
      for (let i = 0; i < pts.length - 1; i++) {
        const [a, b] = [pts[i], pts[i + 1]];
        out.push([a[0] * .75 + b[0] * .25, a[1] * .75 + b[1] * .25], [a[0] * .25 + b[0] * .75, a[1] * .25 + b[1] * .75]);
      }
      out.push(pts[pts.length - 1]); pts = out;
    }
    return pts;
  }
  // Posición de Jesús al terminar cada pasaje (null antes del bautismo)
  let _pos = null;
  function posiciones() {
    if (_pos) return _pos;
    let pos = null; _pos = A.pasajes.map(p => { const l = (A.itinerario || {})[p.id]; if (l) pos = l[l.length - 1]; return pos; });
    return _pos;
  }
  // Pasajes ocurridos en un lugar, hasta el índice dado: aquellos en que Jesús pasa por el lugar o permanece en él
  function pasajesEn(nodo, hastaIdx) {
    const ps = posiciones(), out = [];
    for (let i = 0; i <= hastaIdx; i++) {
      const l = (A.itinerario || {})[A.pasajes[i].id];
      if ((l && l.includes(nodo)) || (!l && ps[i] === nodo)) out.push(i);
    }
    return out;
  }
  // recorrido completo hasta el pasaje de índice «hasta» (inclusive)
  function hasta(idx) {
    const segs = []; let pos = null, km = 0, paradas = [];
    A.pasajes.slice(0, idx + 1).forEach((p, i) => {
      const lista = (A.itinerario || {})[p.id]; if (!lista) return;
      const etapa = (p.cuando && p.cuando.etapa) || 'preparacion';
      lista.forEach(n => {
        if (pos && pos !== n) {
          const c = camino(pos, n);
          // un tramo por cada viaje entre dos paradas: los caminos se unen y se suavizan; los cruces en barca van aparte
          let acc = [], tipo = null;
          const cerrar = () => { if (acc.length > 1) segs.push({ pts: suavizar(acc), etapa, tipo, i }); acc = []; };
          c.tramos.forEach(e => {
            if (tipo && e.tipo !== tipo) cerrar();
            tipo = e.tipo; acc = acc.length ? acc.concat(e.pts.slice(1)) : e.pts.slice();
          });
          cerrar();
          km += c.km;
        }
        if (!pos || pos !== n) paradas.push({ nodo: n, i, etapa });
        pos = n;
      });
    });
    return { segs, km: Math.round(km), actual: pos, paradas };
  }
  return { hasta, camino, posiciones, pasajesEn, nodos: C.nodos, nombres: C.nombres || {} };
})();
