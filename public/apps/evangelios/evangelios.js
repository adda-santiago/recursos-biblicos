/* ==========================================================
   Armonía de los evangelios · motor
   Dos tercios: los evangelios en columnas paralelas (texto en pantalla, de la versión elegida).
   Un tercio: comentario con marcadores, símbolos y concordancias.
   Datos: window.ARMONIA (data.js). Texto: Citas.capitulo(versión, libro, capítulo).
   Las frases de rojo, exclusivos y marcas están escritas sobre la RV 1960; en otras versiones,
   si una frase no aparece, se usa una aproximación (desde los dos puntos, o el versículo completo).
   ========================================================== */
(() => {
  'use strict';
  const A = window.ARMONIA;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const EVANG = [
    { id: 'mt', n: 'Mateo', e: '🧔', libro: 'Mateo' },
    { id: 'mr', n: 'Marcos', e: '🦁', libro: 'Marcos' },
    { id: 'lc', n: 'Lucas', e: '🐂', libro: 'Lucas' },
    { id: 'jn', n: 'Juan', e: '🦅', libro: 'Juan' }
  ];
  const ORDEN = A.pasajes.map(p => p.id);
  let actual = 0, filtro = null, tab = null;

  /* ---------- Referencias ---------- */
  // '1:5-25' → [{cap:1, vs:[5..25]}]; '1:57-2:3' admite cruce de capítulo
  function rangos(ref) { return String(ref).split(/[;,]\s*(?=\d+:)/).flatMap(rango); }
  function rango(ref) {
    ref = ref.trim();
    const m = ref.match(/^(\d+):(\d+)-(?:(\d+):)?(\d+)$/);
    if (!m) { const [c, v] = ref.split(':').map(Number); return [{ cap: c, desde: v, hasta: v }]; }
    const c1 = +m[1], v1 = +m[2], c2 = m[3] ? +m[3] : c1, v2 = +m[4];
    if (c1 === c2) return [{ cap: c1, desde: v1, hasta: v2 }];
    return [{ cap: c1, desde: v1, hasta: 999 }, { cap: c2, desde: 1, hasta: v2 }];
  }

  /* ---------- Anotaciones dentro de un versículo ---------- */
  function tramo(txt, desde, hasta, fallback) {
    if (!desde) return [0, txt.length];
    let i = txt.indexOf(desde);
    if (i < 0) {
      if (fallback === 'colon') { const c = txt.indexOf(':'); return c >= 0 ? [c + 1, txt.length] : [0, txt.length]; }
      return [0, txt.length];
    }
    let f = txt.length;
    if (hasta) { const j = txt.indexOf(hasta, i); if (j >= 0) f = j + hasta.length; }
    return [i, f];
  }
  // Tabla común de palabras de Jesús (palabras-jesus.js): 1 = todo; ':' = desde los dos puntos; [tramos exactos]
  function dosPuntos(txt) { const c = txt.indexOf(':'); if (c < 0) return [0, txt.length]; let i = c + 1; while (txt[i] === ' ') i++; return [i, txt.length]; }
  function rojoTabla(txt, clave) {
    const r = (window.PALABRAS_JESUS || {})[clave];
    if (!r) return [];
    if (r === 1) return [[0, txt.length]];
    if (r === ':') return [dosPuntos(txt)];
    const out = []; let desde = 0;
    for (const seg of r) {
      const i = txt.indexOf(seg, desde);
      if (i < 0) return [dosPuntos(txt)];      // otra versión: aproximación
      out.push([i, i + seg.length]); desde = i + seg.length;
    }
    return out;
  }
  function anotar(txt, libro, cv, p) {
    const de = arr => (arr || []).filter(x => x[0] === libro && x[1] === cv);
    const spans = [];
    const propios = de(p.rojo);
    if (propios.length) propios.forEach(x => { const [a, b] = tramo(txt, x[2], x[3], 'colon'); spans.push({ a, b, c: 'jesus' }); });
    else rojoTabla(txt, libro + ' ' + cv).forEach(([a, b]) => spans.push({ a, b, c: 'jesus' }));
    de(p.excl).forEach(x => { const [a, b] = tramo(txt, x[2], x[3]); spans.push({ a, b, c: 'excl' }); });
    const marcas = de(p.marcas).map(x => { const i = txt.indexOf(x[2]); return { pos: i >= 0 ? i + x[2].length : txt.length, l: x[3] }; });
    const cortes = new Set([0, txt.length]);
    spans.forEach(s => { cortes.add(s.a); cortes.add(s.b); });
    marcas.forEach(m => cortes.add(m.pos));
    const pts = [...cortes].sort((x, y) => x - y);
    let html = '';
    for (let k = 0; k < pts.length; k++) {
      const a = pts[k], b = pts[k + 1];
      marcas.filter(m => m.pos === a && a !== 0).forEach(m => { html += `<a class="marca" href="#com-${m.l}" data-l="${m.l}" aria-label="Comentario ${m.l}">${m.l}</a>`; });
      if (b === undefined) break;
      if (b <= a) continue;
      const cls = spans.filter(s => s.a <= a && s.b >= b).map(s => s.c);
      const frag = esc(txt.slice(a, b));
      html += cls.length ? `<span class="${[...new Set(cls)].join(' ')}">${frag}</span>` : frag;
    }
    return html;
  }

  /* ---------- Render ---------- */
  async function columna(ev, p, ver) {
    const partes = rangos(p.refs[ev.id]);
    let html = '';
    for (const [ri, r] of partes.entries()) {
      if (ri > 0) html += '<span class="ar-salto" aria-hidden="true">…</span> ';
      const cap = await Citas.capitulo(ver, ev.id, r.cap) || [];
      const hasta = Math.min(r.hasta, cap.length);
      for (let v = r.desde; v <= hasta; v++) {
        const t = cap[v - 1]; if (!t) continue;
        const multi = new Set(partes.map(x => x.cap)).size > 1;
        html += `<span class="v"><sup class="nv">${multi ? r.cap + ':' : ''}${v}</sup>${anotar(t, ev.id, r.cap + ':' + v, p)}</span> `;
      }
    }
    return html;
  }
  function refTexto(p) {
    return EVANG.filter(e => p.refs[e.id]).map(e => `${e.libro} ${p.refs[e.id]}`).join(' · ');
  }
  async function pintar() {
    const p = A.pasajes[actual];
    $('ar-glosa').hidden = true;
    const sec = A.secciones.find(s => s.id === p.sec);
    $('ar-seccion').textContent = `${A.secciones.indexOf(sec) + 1} · ${sec.n}`;
    $('ar-titulo').textContent = p.t;
    $('ar-refs').textContent = refTexto(p);
    $('ar-pos').textContent = `${actual + 1} de ${ORDEN.length}`;
    $('ar-ant').disabled = actual === 0; $('ar-sig').disabled = actual === ORDEN.length - 1;
    document.title = `${p.t} · Armonía de los evangelios`;
    const evs = EVANG.filter(e => p.refs[e.id]);
    if (!tab || !p.refs[tab]) tab = evs[0].id;
    const ver = Citas.version();
    const cols = $('ar-columnas');
    cols.style.setProperty('--n', evs.length); cols.dataset.n = evs.length;
    const htmls = await Promise.all(evs.map(e => columna(e, p, ver)));
    if (A.pasajes[actual] !== p) return;   // llegó otra selección mientras cargaba
    cols.innerHTML = evs.map((e, i) => `<section class="ar-col" id="col-${e.id}" role="tabpanel" ${e.id !== tab ? 'data-oculta' : ''}>
        <h2><span class="emblema" aria-hidden="true">${e.e}</span>${e.n}<span class="ref">${p.refs[e.id]}</span></h2>
        <p>${htmls[i]}</p></section>`).join('');
    $('ar-tabs').innerHTML = evs.length > 1 ? evs.map(e => `<button type="button" role="tab" data-ev="${e.id}" aria-selected="${e.id === tab}"><span class="emblema" aria-hidden="true">${e.e}</span>${e.n}</button>`).join('') : '';
    aplicarTab();
    // Comentario
    $('ar-sim').innerHTML = (p.sim || []).map(s => `<span title="${esc(A.simbolos[s] || '')}">${s} ${esc(A.simbolos[s] || '')}</span>`).join('');
    $('ar-com').innerHTML = (p.com && p.com.length)
      ? p.com.map(([l, t]) => `<div class="ar-com-item" id="com-${l}"><a class="marca" href="#" data-ir="${l}" aria-label="Ir a la marca ${l} en el texto">${l}</a><p>${esc(t)}</p></div>`).join('')
      : '<p class="ar-com-vacio">Comentario en preparación.</p>';
    pintarDonde(p);
    await pintarEscritura(p, ver);
    if (A.pasajes[actual] !== p) return;
    $('ar-pensar').textContent = p.pensar || '';
    $('ar-pensar-sec').hidden = !p.pensar;
    $('ar-ir').innerHTML = (p.ir || []).map(l => `<a class="ar-ir-btn" href="${esc(l.a)}" target="_top">${esc(l.t)} <span aria-hidden="true">›</span></a>`).join('');
    $('ar-ir-sec').hidden = !(p.ir && p.ir.length);
    glosar();
    $('ar-herr').hidden = evs.length < 2;
    if (coinc && evs.length > 1) resaltarCoincidencias();
    $('ar-conc').textContent = (p.conc || []).join('; ');
    $('ar-conc-sec').hidden = !(p.conc && p.conc.length);
    Citas.procesar($('ar-comentario'));
    const meta = (await Citas.versiones()).find(v => v.id === ver);
    $('ar-credito').textContent = meta ? meta.credito : '';
    $('ar-texto').scrollTop = 0; $('ar-comentario').scrollTop = 0;
    if (window.matchMedia('(max-width: 900px)').matches) window.scrollTo(0, 0);
    marcarLista();
  }
  function aplicarTab() {
    const movil = window.matchMedia('(max-width: 900px)').matches;
    document.querySelectorAll('.ar-col').forEach(c => { c.hidden = movil && c.id !== 'col-' + tab; });
    document.querySelectorAll('#ar-tabs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.ev === tab)));
  }

  /* ---------- Dónde y cuándo ---------- */
  let mapa = null, estadoMapa = null;
  // Mapa ampliado: ocupa casi toda la pantalla; se cierra con el botón, Esc o tocando fuera
  function ampliarMapa(si) {
    const w = $('ar-mapa-wrap'), b = $('ar-mapa-btn');
    if (si === undefined) si = !w.classList.contains('grande');
    if (si === w.classList.contains('grande')) return;
    w.classList.toggle('grande', si);
    document.body.classList.toggle('mapa-grande', si);
    b.textContent = si ? '×' : '⤢';
    b.setAttribute('aria-label', si ? 'Cerrar el mapa ampliado' : 'Ampliar el mapa'); b.title = b.getAttribute('aria-label');
    $('ar-rec').hidden = !si || !window.RutaJesus;
    $('ar-rec-nav').hidden = !si;
    if (mapa && estadoMapa) requestAnimationFrame(() => {
      mapa.ajustar();
      if (si && recorrido) pintarRecorrido(true); else { pintarRecorrido(false); mapa.mostrar(estadoMapa, false); }
    });
  }

  /* ---------- Recorrido de Jesús (solo en el mapa ampliado, como opción) ----------
     Línea punteada desde el bautismo hasta el pasaje actual, por los caminos de la época (caminos.js),
     con un color por etapa y las etapas en paralelo para que no se tapen. Las ciudades muestran su nombre
     y, al tocarlas, los pasajes ocurridos allí hasta este momento. */
  let recorrido = false, capaRec = null, lineasRec = [];
  const ocultas = new Set();
  const COL_ETAPA = { preparacion: '#8a6a3e', judea: '#2a6fb0', galilea: '#2f8f5b', viaje: '#c07a1e', pasion: '#b3261e', resurreccion: '#7a3fa0' };
  const ORDEN_ETAPA = ['preparacion', 'judea', 'galilea', 'viaje', 'pasion', 'resurreccion'];
  const CERCANOS = new Set(['getsemani', 'golgota', 'monte-olivos']);
  const LADO = { jerusalen: 'top', magdala: 'left', emaus: 'left', desierto: 'bottom', 'desierto-judea': 'bottom', efrain: 'left', nain: 'right', sicar: 'right', getsemani: 'right', golgota: 'left', 'monte-olivos': 'bottom' };   // sus nombres solo con mucho acercamiento
  const ETAPA_N = Object.fromEntries((A.etapas || []).map(e => [e.id, e.n]));
  // Desplaza una línea unos píxeles a su derecha (líneas paralelas por etapa)
  function desplazar(latlngs, px) {
    const map = mapa.mapa;
    if (!px) return latlngs;
    const p = latlngs.map(ll => map.latLngToLayerPoint(ll));
    const out = p.map((q, i) => {
      const a = p[Math.max(0, i - 1)], b = p[Math.min(p.length - 1, i + 1)];
      let dx = b.x - a.x, dy = b.y - a.y; const n = Math.hypot(dx, dy) || 1;
      return map.layerPointToLatLng(L.point(q.x - dy / n * px, q.y + dx / n * px));
    });
    return out;
  }
  function recolocar() { lineasRec.forEach(({ capa, pts, off }) => capa.setLatLngs(desplazar(pts, off))); }
  function pintarRecorrido(encuadrar) {
    if (!mapa || !mapa.mapa || !window.RutaJesus) return;
    const map = mapa.mapa;
    if (!capaRec) { capaRec = L.layerGroup().addTo(map); map.on('zoomend', () => { recolocar(); etiquetas(); }); }
    capaRec.clearLayers(); lineasRec = [];
    const grande = $('ar-mapa-wrap').classList.contains('grande');
    const activo = recorrido && grande;
    $('ar-rec-panel').hidden = !activo;
    // barra del pasaje en el mapa ampliado: avanzar sin cerrar el mapa
    $('ar-rec-nav').hidden = !grande;
    $('ar-rec-pasaje').innerHTML = `<span>${actual + 1}</span> ${esc(A.pasajes[actual].t)}`;
    $('ar-rec-ant').disabled = actual === 0; $('ar-rec-sig').disabled = actual === ORDEN.length - 1;
    $('ar-rec-btn').setAttribute('aria-pressed', String(activo));
    $('ar-rec-vacio').hidden = true;
    if (!activo) return;
    if (!RutaJesus.posiciones()[actual]) { $('ar-rec-vacio').hidden = false; return; }
    if (encuadrar && estadoMapa) mapa.mostrar({ view: estadoMapa.view, capas: [], lugares: [], trazos: [] }, false);
    const r = RutaJesus.hasta(actual);
    const usadas = new Set(r.segs.map(x => x.etapa));
    $('ar-rec-etapas').innerHTML = ORDEN_ETAPA.filter(e => usadas.has(e)).map(e =>
      `<li><label><input type="checkbox" data-etapa="${e}" ${ocultas.has(e) ? '' : 'checked'}><i style="border-color:${COL_ETAPA[e]}"></i>${esc(ETAPA_N[e] || e)}</label></li>`).join('');
    $('ar-rec-km').innerHTML = r.actual ? `<b>${r.km.toLocaleString('es')} km</b> recorridos aproximadamente hasta este pasaje` : 'El recorrido comienza en el bautismo de Jesús.';
    const ult = r.segs.length ? r.segs[r.segs.length - 1].i : -1;
    r.segs.forEach(sg => {
      if (ocultas.has(sg.etapa)) return;
      const actualTramo = sg.i === actual || (sg.i === ult && !RutaJesus.posiciones()[actual - 1]);
      const off = (ORDEN_ETAPA.indexOf(sg.etapa) - 2.5) * 3.2;
      const capa = L.polyline(desplazar(sg.pts, off), {
        pane: 'trazos', color: COL_ETAPA[sg.etapa] || '#555', weight: sg.i === actual ? 5 : 3,
        dashArray: sg.tipo === 'barca' ? '1 7' : '8 7', lineCap: 'round', opacity: sg.i === actual ? 1 : 0.8, interactive: false
      }).addTo(capaRec);
      lineasRec.push({ capa, pts: sg.pts, off });
    });
    // ciudades visitadas hasta ahora, con su nombre y sus pasajes
    const vistos = new Set();
    r.paradas.forEach(pd => {
      if (vistos.has(pd.nodo) || !RutaJesus.nombres[pd.nodo]) return;
      vistos.add(pd.nodo);
      const ll = RutaJesus.nodos[pd.nodo], es = pd.nodo === r.actual;
      const mk = L.circleMarker(ll, { pane: 'rotulos', radius: es ? 8 : 5, color: '#fff', weight: 2, fillColor: es ? '#b3261e' : '#3a3f4b', fillOpacity: 1, interactive: true, bubblingMouseEvents: false }).addTo(capaRec);
      const lado = LADO[pd.nodo] || 'right';
      mk.bindTooltip(esc(RutaJesus.nombres[pd.nodo]), { permanent: true, direction: lado, offset: lado === 'right' ? [8, 0] : lado === 'left' ? [-8, 0] : lado === 'top' ? [0, -8] : [0, 8], className: 'ar-rec-lbl' + (CERCANOS.has(pd.nodo) ? ' cercano' : '') + (es ? ' actual' : '') });
      const abrir = ev => { if (ev) L.DomEvent.stop(ev); abrirPasajesLugar(ll, RutaJesus.nombres[pd.nodo], RutaJesus.pasajesEn(pd.nodo, actual), 'hasta aquí'); };
      mk.on('click', abrir);
      // zona de toque más grande que el punto (para el dedo)
      L.circleMarker(ll, { pane: 'rotulos', radius: 16, opacity: 0, fillOpacity: 0, interactive: true, bubblingMouseEvents: false }).on('click', abrir).addTo(capaRec);
      // el nombre de la ciudad también abre sus pasajes (no solo el punto)
      const tt = mk.getTooltip(), el = tt && tt.getElement();
      if (el) {
        el.style.pointerEvents = 'auto'; el.style.cursor = 'pointer';
        el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0'); el.setAttribute('aria-label', 'Pasajes en ' + RutaJesus.nombres[pd.nodo]);
        L.DomEvent.on(el, 'click', abrir);
        L.DomEvent.on(el, 'keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') abrir(ev); });
      }
    });
    map.getPane('rotulos').style.pointerEvents = 'auto';
    etiquetas();
    // al avanzar, si Jesús sale de la vista, el mapa se desplaza para mostrarlo
    if (!encuadrar && r.actual) map.panInside(RutaJesus.nodos[r.actual], { padding: [90, 90] });
    if (encuadrar) {
      const pts = r.segs.flatMap(x => x.pts);
      if (pts.length) map.fitBounds(L.latLngBounds(pts), { padding: [50, 50], maxZoom: 10 });
      else if (r.actual) map.setView(RutaJesus.nodos[r.actual], 9);
    }
  }
  // Ventana con la lista de pasajes de un lugar; al elegir uno, la armonía va a ese pasaje
  function abrirPasajesLugar(ll, nombre, lista, cuando) {
    if (!mapa || !mapa.mapa) return;
    const html = `<div class="ar-rec-pop"><p class="t">${esc(nombre)}</p><p class="s">${lista.length ? `${lista.length} pasaje${lista.length === 1 ? '' : 's'} ${cuando}` : 'Sin pasajes registrados en este lugar'}</p><ol>${lista.map(i => `<li><button type="button" data-i="${i}" ${i === actual ? 'aria-current="true"' : ''}><span>${i + 1}</span>${esc(A.pasajes[i].t)}</button></li>`).join('')}</ol></div>`;
    L.popup({ maxWidth: 300, className: 'ar-rec-popup', autoPan: true, autoPanPaddingTopLeft: L.point(16, window.matchMedia('(max-width: 900px)').matches ? 150 : 110), autoPanPaddingBottomRight: L.point(16, 90) })
      .setLatLng(ll).setContent(html).openOn(mapa.mapa);
  }
  // Lugares del pasaje (sin recorrido): pasajes de toda la armonía en ese lugar
  function tocarLugar(id, ll) {
    const nombre = (window.IMPERIOS_GEO.lugares[id] || [id])[0];
    const lista = A.pasajes.map((p, i) => [p, i]).filter(([p]) => (p.lugar && (p.lugar.lugares || []).includes(id)) || ((A.itinerario || {})[p.id] || []).includes(id)).map(([, i]) => i);
    abrirPasajesLugar(ll, nombre, lista, 'en la armonía');
  }
  function etiquetas() {
    const z = mapa && mapa.mapa ? mapa.mapa.getZoom() : 0;
    document.querySelectorAll('.ar-rec-lbl.cercano').forEach(el => { el.style.display = z >= 10.5 ? '' : 'none'; });
  }
  $('ar-rec-ir').onclick = e => { e.stopPropagation(); const i = ORDEN.indexOf('bautismo'); if (i >= 0) ir(i); };
  $('ar-rec-ant').onclick = e => { e.stopPropagation(); ir(actual - 1); };
  $('ar-rec-sig').onclick = e => { e.stopPropagation(); ir(actual + 1); };
  if (!window.matchMedia('(max-width: 900px)').matches) $('ar-rec-panel').open = true;
  $('ar-rec-btn').onclick = e => { e.stopPropagation(); recorrido = !recorrido; if (recorrido) pintarRecorrido(true); else { pintarRecorrido(false); mapa.mostrar(estadoMapa, false); } };
  $('ar-rec-etapas').addEventListener('change', e => { const c = e.target.closest('[data-etapa]'); if (!c) return; c.checked ? ocultas.delete(c.dataset.etapa) : ocultas.add(c.dataset.etapa); pintarRecorrido(false); });
  document.addEventListener('click', e => {
    const b = e.target.closest('.ar-rec-pop button[data-i]'); if (!b) return;
    e.preventDefault(); if (mapa && mapa.mapa) mapa.mapa.closePopup(); ir(+b.dataset.i);
  });
  function pintarDonde(p) {
    const l = p.lugar, c = p.cuando || {};
    const box = $('ar-mapa');
    box.hidden = !l; $('ar-mapa-btn').hidden = !l;
    if (!l) ampliarMapa(false);
    $('ar-donde-t').textContent = l ? 'Dónde y cuándo' : 'Cuándo';
    if (l && window.MapaImperios && window.L) {
      if (!mapa) mapa = MapaImperios.crear(box, { detalle: window.MAPA_DETALLE, maxZoom: 11, zoomEncuadre: 10, alTocarLugar: tocarLugar });
      mapa.ajustar();
      estadoMapa = { view: A.vistas[l.vista] || A.vistas.israel, capas: [], lugares: l.lugares || [], trazos: l.trazos || [] };
      if (!(recorrido && $('ar-mapa-wrap').classList.contains('grande'))) mapa.mostrar(estadoMapa, false);
      box.setAttribute('aria-label', 'Mapa: ' + (l.lugares || []).map(k => (window.IMPERIOS_GEO.lugares[k] || [k])[0]).join(', '));
    }
    const et = A.etapas.findIndex(e => e.id === c.etapa);
    $('ar-etapas').innerHTML = A.etapas.map((e, i) => `<li class="${i === et ? 'on' : i < et ? 'antes' : ''}" title="${esc(e.n)} (${esc(e.fecha)})"><span>${esc(e.n)}</span></li>`).join('');
    $('ar-vida').hidden = et < 0;
    $('ar-rec-aviso').hidden = !l || !window.RutaJesus || !RutaJesus.posiciones()[actual];
    pintarRecorrido(false);
    $('ar-etapa-txt').innerHTML = et >= 0 ? `<b>${esc(A.etapas[et].n)}</b> · ${esc(c.fecha || A.etapas[et].fecha)}` : esc(c.texto || '');
  }
  window.addEventListener('resize', () => mapa && mapa.ajustar());
  $('ar-mapa-btn').onclick = e => { e.stopPropagation(); ampliarMapa(); };
  $('ar-mapa-wrap').addEventListener('click', e => { if (e.target === $('ar-mapa-wrap') && $('ar-mapa-wrap').classList.contains('grande')) ampliarMapa(false); });

  /* ---------- La Escritura en el pasaje: el texto del Antiguo Testamento, completo ---------- */
  const TIPO = { cumple: 'Profecía cumplida', cita: 'Escritura citada', alude: 'Alusión' };
  async function pintarEscritura(p, ver) {
    const es = p.escritura || [];
    $('ar-escritura-sec').hidden = !es.length;
    const html = await Promise.all(es.map(async e => {
      const [c, vs] = e.cv.split(':'); const [a, b] = vs.split('-').map(Number);
      const cap = await Citas.capitulo(ver, e.libro, +c) || [];
      let t = '';
      for (let v = a; v <= (b || a); v++) if (cap[v - 1]) t += `<sup class="nv">${v}</sup>${esc(cap[v - 1])} `;
      return `<div class="ar-esc ${e.tipo}"><p class="ar-esc-tipo">${TIPO[e.tipo] || ''}</p><p class="ar-esc-ref">${esc(e.nombre)}</p><p class="ar-esc-txt">${t}</p><p class="ar-esc-en">${e.tipo === 'cumple' ? 'Se cumple en' : 'En'} <span class="ar-esc-nt">${esc(e.en)}</span></p></div>`;
    }));
    $('ar-escritura').innerHTML = html.join('');
  }

  /* ---------- Glosario: primera aparición de cada término en cada columna ---------- */
  const LETRA = '[\\p{L}\\p{N}]';
  const GLOS = (A.glosario || []).map((g, i) => ({ i, re: new RegExp(`(?<!${LETRA})(?:${g.f.map(f => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?!${LETRA})`, 'iu') }));
  function glosar() {
    document.querySelectorAll('#ar-columnas .ar-col p').forEach(par => {
      const usados = new Set();
      const walker = document.createTreeWalker(par, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentNode.closest('.marca, .nv, .glosa') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nodos = []; while (walker.nextNode()) nodos.push(walker.currentNode);
      nodos.forEach(nodo => {
        // todas las coincidencias del nodo, de la última a la primera, para poder partir el texto sin perder posiciones
        const hits = [];
        GLOS.forEach(g => { if (usados.has(g.i)) return; const m = nodo.nodeValue.match(g.re); if (m) hits.push({ g, i: m.index, len: m[0].length }); });
        hits.sort((x, y) => x.i - y.i);
        const elegidos = []; let fin = -1;
        hits.forEach(h => { if (h.i >= fin && !usados.has(h.g.i)) { elegidos.push(h); usados.add(h.g.i); fin = h.i + h.len; } });
        elegidos.reverse().forEach(h => {
          const resto = nodo.splitText(h.i); resto.splitText(h.len);
          const b = document.createElement('button'); b.type = 'button'; b.className = 'glosa'; b.dataset.g = h.g.i; b.textContent = resto.nodeValue;
          resto.replaceWith(b);
        });
      });
    });
  }
  function abrirGlosa(btn) {
    const g = A.glosario[+btn.dataset.g], pop = $('ar-glosa');
    $('ar-glosa-t').textContent = g.t; $('ar-glosa-d').textContent = g.d;
    pop.hidden = false;
    const r = btn.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    let x = Math.min(Math.max(8, r.left), innerWidth - w - 8), y = r.bottom + 6;
    if (y + h > innerHeight - 8) y = Math.max(8, r.top - h - 6);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
  }
  $('ar-columnas').addEventListener('click', e => { const b = e.target.closest('.glosa'); if (b) { e.stopPropagation(); abrirGlosa(b); } });
  $('ar-glosa-x').onclick = () => { $('ar-glosa').hidden = true; };
  document.addEventListener('click', e => { if (!$('ar-glosa').hidden && !e.composedPath().includes($('ar-glosa')) && !e.target.closest('.glosa')) $('ar-glosa').hidden = true; });
  ['ar-texto'].forEach(id => $(id).addEventListener('scroll', () => { $('ar-glosa').hidden = true; }));
  $('ar-nota-fechas').textContent = A.notaFechas || '';

  /* ---------- Coincidencias entre los evangelios de un pasaje paralelo ----------
     Compara palabras (sin tildes, en minúsculas, plural simple) y omite las palabras sin peso propio.
     co-todos: la palabra está en todas las columnas; co-algunos: en dos o más, pero no en todas. */
  let coinc = false;
  const VACIAS = new Set(('a al ante bajo con contra de del desde en entre hacia hasta para por segun sin sobre tras ' +
    'el la lo los las un una unos unas y e ni o u que pues mas pero sino si no se le les me te nos os su sus mi mis tu tus ' +
    'este esta esto estos estas ese esa eso esos esas aquel aquella como cuando donde porque cual cuales quien es fue era ' +
    'ser sido son soy eres sea fuese estaba estaban estar ha han habia hay le dijo dijeron decia diciendo respondio luego acontecio entonces aqui alli muy tambien ya asi todo toda todos todas otro otra cosas cosa').split(' '));
  const raizPal = w => { w = w.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); return w.length > 4 && w.endsWith('es') ? w.slice(0, -2) : w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w; };
  const PAL = /\p{L}+/gu;
  function textoCol(col) {
    const c = col.querySelector('p').cloneNode(true);
    c.querySelectorAll('.nv, .marca').forEach(n => n.remove());
    return c.textContent;
  }
  function resaltarCoincidencias() {
    const cols = [...document.querySelectorAll('#ar-columnas .ar-col')];
    if (cols.length < 2) return;
    const sets = cols.map(c => new Set((textoCol(c).match(PAL) || []).map(raizPal).filter(w => w.length > 2 && !VACIAS.has(w))));
    const cuenta = new Map();
    sets.forEach(st => st.forEach(w => cuenta.set(w, (cuenta.get(w) || 0) + 1)));
    cols.forEach(col => {
      const walker = document.createTreeWalker(col.querySelector('p'), NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentNode.closest('.nv, .marca, .co') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nodos = []; while (walker.nextNode()) nodos.push(walker.currentNode);
      nodos.forEach(nodo => {
        const t = nodo.nodeValue; let html = '', i = 0, m, cambio = false;
        PAL.lastIndex = 0;
        while ((m = PAL.exec(t))) {
          const r = raizPal(m[0]), n = cuenta.get(r) || 0;
          if (n >= 2 && r.length > 2 && !VACIAS.has(r)) {
            html += esc(t.slice(i, m.index)) + `<span class="co ${n === cols.length ? 'co-todos' : 'co-algunos'}">${esc(m[0])}</span>`;
            i = m.index + m[0].length; cambio = true;
          }
        }
        if (!cambio) return;
        html += esc(t.slice(i));
        const tmp = document.createElement('span'); tmp.innerHTML = html;
        nodo.replaceWith(...tmp.childNodes);
      });
    });
  }
  function quitarCoincidencias() {
    document.querySelectorAll('#ar-columnas .co').forEach(s => s.replaceWith(document.createTextNode(s.textContent)));
    document.querySelectorAll('#ar-columnas .ar-col p').forEach(p => p.normalize());
  }
  $('ar-coinc').onclick = () => {
    coinc = !coinc;
    $('ar-coinc').setAttribute('aria-pressed', String(coinc));
    $('ar-coinc-ley').hidden = !coinc;
    coinc ? resaltarCoincidencias() : quitarCoincidencias();
  };

  /* ---------- Lista de pasajes y filtro por símbolo ---------- */
  function pintarLista() {
    $('ar-filtros').innerHTML = `<button type="button" data-f="" aria-pressed="${!filtro}">Todos</button>` +
      Object.entries(A.simbolos).filter(([s]) => A.pasajes.some(p => (p.sim || []).includes(s)))
        .map(([s, n]) => `<button type="button" data-f="${s}" title="${esc(n)}" aria-pressed="${filtro === s}">${s} ${esc(n.split(/[,:]/)[0])}</button>`).join('');
    $('ar-lista-cuerpo').innerHTML = A.secciones.map((sec, si) => {
      const ps = A.pasajes.map((p, i) => ({ p, i })).filter(x => x.p.sec === sec.id && (!filtro || (x.p.sim || []).includes(filtro)));
      if (!ps.length && !sec.pendiente) return '';
      return `<p class="ar-lista-sec">${si + 1}. ${esc(sec.n)}${sec.pendiente ? ' <small>(en preparación)</small>' : ''}</p>` +
        ps.map(({ p, i }) => `<a href="#${p.id}" data-i="${i}"><span class="n">${i + 1}</span><span>${esc(p.t)}</span><span class="s" aria-hidden="true">${(p.sim || []).join('')}</span></a>`).join('');
    }).join('');
    marcarLista();
  }
  function marcarLista() { document.querySelectorAll('#ar-lista-cuerpo a').forEach(a => a.setAttribute('aria-current', String(+a.dataset.i === actual))); }
  function abrirLista(abrir) { $('ar-lista').hidden = !abrir; $('ar-lista-btn').setAttribute('aria-expanded', String(abrir)); }

  /* ---------- Navegación ---------- */
  function ir(i, push = true) {
    actual = Math.max(0, Math.min(ORDEN.length - 1, i));
    if (push) history.replaceState(null, '', '#' + ORDEN[actual]);
    pintar();
  }
  $('ar-ant').onclick = () => ir(actual - 1);
  $('ar-sig').onclick = () => ir(actual + 1);
  $('ar-lista-btn').onclick = () => abrirLista($('ar-lista').hidden);
  $('ar-lista').addEventListener('click', e => {
    const f = e.target.closest('[data-f]');
    if (f) { filtro = f.dataset.f || null; pintarLista(); return; }
    const a = e.target.closest('a[data-i]');
    if (a) { e.preventDefault(); abrirLista(false); ir(+a.dataset.i); }
  });
  document.addEventListener('click', e => {
    const dentro = e.composedPath().some(n => n === $('ar-lista') || n === $('ar-lista-btn'));
    if (!$('ar-lista').hidden && !dentro) abrirLista(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { abrirLista(false); $('ar-glosa').hidden = true; ampliarMapa(false); }
    if (e.target.closest('input, select, textarea, #ar-divisor')) return;
    if (e.key === 'ArrowRight') ir(actual + 1);
    if (e.key === 'ArrowLeft') ir(actual - 1);
  });
  $('ar-tabs').addEventListener('click', e => { const b = e.target.closest('[data-ev]'); if (b) { tab = b.dataset.ev; aplicarTab(); } });
  window.addEventListener('resize', aplicarTab);

  // Marcas: del texto al comentario y del comentario al texto
  function resaltar(el) { el.classList.add('on'); setTimeout(() => el.classList.remove('on'), 1800); }
  $('ar-columnas').addEventListener('click', e => {
    const m = e.target.closest('.marca'); if (!m) return;
    e.preventDefault();
    const it = $('com-' + m.dataset.l);
    if (it) { it.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); resaltar(it); }
  });
  $('ar-com').addEventListener('click', e => {
    const m = e.target.closest('[data-ir]'); if (!m) return;
    e.preventDefault();
    const t = document.querySelector(`#ar-columnas .marca[data-l="${m.dataset.ir}"]`);
    if (t) {
      const col = t.closest('.ar-col');
      if (col && col.hidden) { tab = col.id.replace('col-', ''); aplicarTab(); }
      t.scrollIntoView({ behavior: 'smooth', block: 'center' }); resaltar(t);
    }
  });

  // Versión y tema
  Citas.versiones().then(vs => {
    $('ar-version').innerHTML = vs.map(v => `<option value="${v.id}">${esc(v.abrev || v.nombre)}</option>`).join('');
    $('ar-version').value = Citas.version();
  });
  $('ar-version').onchange = e => Citas.cambiarVersion(e.target.value);
  window.addEventListener('citas:version', () => { $('ar-version').value = Citas.version(); pintar(); });
  const raiz = document.documentElement;
  const oscuro = () => raiz.dataset.theme === 'dark' || (!raiz.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  const rotular = () => { $('ar-tema').textContent = oscuro() ? 'Fondo claro' : 'Fondo oscuro'; };
  $('ar-tema').onclick = () => { raiz.dataset.theme = oscuro() ? 'light' : 'dark'; rotular(); };
  rotular();

  window.addEventListener('hashchange', () => { const i = ORDEN.indexOf(location.hash.slice(1)); if (i >= 0 && i !== actual) ir(i, false); });

  // Divisor entre texto y comentario: parte en 2/3; se arrastra entre 40 % y 80 %; doble clic vuelve a 2/3
  const app = $('ar-app'), div = $('ar-divisor');
  const DEF = 66.667, MIN = 40, MAX = 80;
  const fijar = pct => { pct = Math.max(MIN, Math.min(MAX, pct)); app.style.setProperty('--izq', pct + '%'); div.setAttribute('aria-valuenow', Math.round(pct)); };
  fijar(DEF);
  div.addEventListener('pointerdown', e => {
    e.preventDefault(); div.setPointerCapture(e.pointerId); app.classList.add('arrastrando');
    const mover = ev => { const r = app.getBoundingClientRect(); fijar((ev.clientX - r.left) / r.width * 100); };
    const soltar = () => { app.classList.remove('arrastrando'); if (mapa) mapa.ajustar(); div.removeEventListener('pointermove', mover); div.removeEventListener('pointerup', soltar); };
    div.addEventListener('pointermove', mover); div.addEventListener('pointerup', soltar);
  });
  div.addEventListener('dblclick', () => fijar(DEF));
  div.addEventListener('keydown', e => {
    const v = parseFloat(app.style.getPropertyValue('--izq')) || DEF;
    if (e.key === 'ArrowLeft') { fijar(v - 2); e.preventDefault(); e.stopPropagation(); }
    if (e.key === 'ArrowRight') { fijar(v + 2); e.preventDefault(); e.stopPropagation(); }
    if (e.key === 'Home' || e.key === 'Enter') fijar(DEF);
  });

  // Inicio
  const h = location.hash.slice(1);
  pintarLista();
  ir(Math.max(0, ORDEN.indexOf(h)), false);
  window.fypReset = () => ir(0);
})();
