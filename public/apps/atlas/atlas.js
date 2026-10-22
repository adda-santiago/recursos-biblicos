/* ==========================================================
   atlas.js — Atlas bíblico (DIRECTRICES §20, Atlas bíblico)
   Mapa de consulta: buscar un lugar o un libro, filtrar por época y tipo,
   y abrir la ficha del lugar con lo que ocurrió ahí y dónde aprender más.
   Datos: lugares.js (a mano) y recursos.js (generado por herramientas/atlas_recursos.mjs).
   Enlace directo a un lugar: #id (p. ej. #jerusalen).
   ========================================================== */
(() => {
  'use strict';
  const LUGARES = window.ATLAS_LUGARES || [];
  const R = window.ATLAS_RECURSOS || { recursos: {}, enlaces: {}, epocas: {}, extras: [], recorridos: [] };
  const RAIZ = window.ATLAS_RAIZ || '../../';   // raíz del sitio, relativa a esta app
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const root = document.documentElement, app = $('atlas');

  const EPOCAS = [
    ['creacion', 'Creación y primeros patriarcas'], ['patriarcas', 'Patriarcas'], ['exodo', 'Éxodo y desierto'],
    ['jueces', 'Conquista y jueces'], ['monarquia-unida', 'Monarquía unida'], ['monarquia-dividida', 'Monarquía dividida'],
    ['exilio', 'Exilio babilónico'], ['retorno', 'Retorno y período persa'], ['intertestamentario', 'Período intertestamentario'],
    ['vida-de-jesus', 'Vida de Jesús'], ['iglesia-primitiva', 'Iglesia primitiva'], ['ultimos-tiempos', 'Los últimos tiempos'],
  ];
  const EP = Object.fromEntries(EPOCAS);
  // Imperio que domina la región en cada época (capas de imperios-geo.js)
  const IMPERIO = {
    patriarcas: ['egipto-1900'], exodo: ['egipto-1450'], jueces: ['egipto-1274', 'hititas-1300'], 'monarquia-unida': ['asiria-1000'],
    'monarquia-dividida': ['asiria-730'], exilio: ['babilonia-570'], retorno: ['persia-500'], intertestamentario: ['seleucidas-200'],
    'vida-de-jesus': ['roma-14'], 'iglesia-primitiva': ['roma-14'],
  };
  const TIPOS = [
    ['ciudad', 'Ciudad'], ['historia', 'Evento histórico'], ['batalla', 'Batalla'], ['milagro', 'Milagro'],
    ['predicacion', 'Predicación'], ['profecia', 'Revelación y profecía'], ['pacto', 'Pacto y culto'], ['otros', 'Otros lugares de los recursos'],
  ];
  const TIPO = Object.fromEntries(TIPOS);
  const VISTA = [[29.2, 31.2], [36.6, 39.6]];

  /* ---------- Lugares: los del atlas y los que aportan los recursos ---------- */
  const lugares = [
    ...LUGARES.map(l => ({ ...l, extra: false })),
    ...(R.extras || []).map(x => ({ ...x, extra: true, eventos: [] })),
  ].map(l => {
    const eps = new Set();
    l.eventos.forEach(e => e.ep.forEach(x => eps.add(x)));
    (R.epocas[l.id] || []).forEach(x => eps.add(x));
    const libros = new Set(l.eventos.flatMap(e => e.li || []));
    return { ...l, eps, libros, claves: [l.n, ...(l.alias || [])].map(norm), enlaces: R.enlaces[l.id] || [] };
  });
  const porId = Object.fromEntries(lugares.map(l => [l.id, l]));
  const LIBROS = [...new Set(lugares.flatMap(l => [...l.libros]))];

  /* ---------- Tema ---------- */
  const btnTema = $('at-tema');
  function tema(oscuro) { root.dataset.theme = oscuro ? 'dark' : 'light'; btnTema.textContent = oscuro ? 'Fondo claro' : 'Fondo oscuro'; }
  tema(window.matchMedia('(prefers-color-scheme: dark)').matches);
  btnTema.addEventListener('click', () => tema(root.dataset.theme !== 'dark'));

  /* ---------- Mapa ---------- */
  const mi = MapaImperios.crear($('at-mapa'), { detalle: window.MAPA_DETALLE, maxZoom: 12, zoomEncuadre: 9 });
  const map = mi.mapa;
  if (!map) return;
  map.createPane('lugares').style.zIndex = 460;
  map.createPane('etiquetas').style.zIndex = 470;
  map.createPane('fondo').style.zIndex = 300;   // relieve o satélite: sobre el mapa propio, bajo los imperios

  /* ---------- Tipo de mapa ----------
     Mapa: base vectorial propia (sin conexión externa), por defecto.
     Físico: Esri World Physical (relieve, vegetación y desierto; sin calles). Detalle propio hasta zoom 8.
     Satélite: Esri World Imagery.
     Acuarela: Stamen Watercolor (Stadia Maps). Requiere cuenta en Stadia con el dominio del sitio autorizado.
     Atlas: Thunderforest Atlas. Requiere clave de Thunderforest.
     Acuarela y Atlas aparecen solo cuando MAPAS_CUENTAS los activa (abajo).
     Si un servidor no responde, se usan las teselas de la NASA alojadas en el sitio
     (relieve/, zoom 3 a 7, región del Mediterráneo a Persia). */
  const MAPAS_CUENTAS = Object.assign({
    stadia: false,        // true cuando el dominio del sitio esté autorizado en Stadia Maps (sin clave en el código)
    thunderforest: '',    // clave de Thunderforest; vacía = no se ofrece «Atlas»
  }, window.ATLAS_CUENTAS || {});
  const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/';
  const ESTILOS = {
    mapa: { n: 'Mapa', d: 'El mapa del sitio' },
    fisico: { n: 'Físico', d: 'Relieve, vegetación y desierto', url: ESRI + 'World_Physical_Map/MapServer/tile/{z}/{y}/{x}', max: 8,
      attr: 'Mapa físico: Esri, US National Park Service' },
    satelite: { n: 'Satélite', d: 'El terreno como se ve hoy', url: ESRI + 'World_Imagery/MapServer/tile/{z}/{y}/{x}', max: 18,
      attr: 'Imágenes: Esri, Maxar, Earthstar Geographics' },
    acuarela: { n: 'Acuarela', d: 'Pintado a mano, sin nombres', url: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', max: 16,
      attr: '© Stadia Maps, © Stamen Design, © OpenStreetMap', activo: !!MAPAS_CUENTAS.stadia },
    atlas: { n: 'Atlas', d: 'Relieve con caminos y nombres', url: 'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=' + MAPAS_CUENTAS.thunderforest, max: 18,
      attr: 'Mapas © Thunderforest, datos © OpenStreetMap', activo: !!MAPAS_CUENTAS.thunderforest },
  };
  Object.keys(ESTILOS).forEach(k => { if (ESTILOS[k].activo === false) delete ESTILOS[k]; });
  const LOCAL = { url: (window.ATLAS_RELIEVE || 'relieve/') + '{z}/{x}/{y}.jpg', max: 7, attr: 'Relieve: NASA Earth Observatory (Blue Marble)' };
  const CLAVE_ESTILO = 'fyp:v1:atlas-estilo';
  let fondo = null, estilo = 'mapa';
  const aviso = document.createElement('p');
  aviso.className = 'at-aviso'; aviso.hidden = true; aviso.setAttribute('role', 'status');
  app.appendChild(aviso);
  const VACIO = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  function capaLocal() {
    // Demos sin servidor: window.ATLAS_RELIEVE_EMBEBIDO = { 'z/x/y': 'data:image/jpeg;base64,…' }
    const EMB = window.ATLAS_RELIEVE_EMBEBIDO;
    const Capa = EMB ? L.TileLayer.extend({ getTileUrl: c => EMB[`${c.z}/${c.x}/${c.y}`] || VACIO }) : L.TileLayer;
    return new Capa(LOCAL.url, { pane: 'fondo', minZoom: 3, maxNativeZoom: LOCAL.max, maxZoom: 12, attribution: LOCAL.attr,
      bounds: [[5, -15], [56, 75]], errorTileUrl: VACIO });
  }
  const btnEstilo = L.DomUtil.create('button', 'at-estilo-btn');
  const menuEstilo = L.DomUtil.create('ul', 'at-estilo-menu');
  function ponerEstilo(id, guardar) {
    if (!ESTILOS[id]) id = 'mapa';
    if (fondo) { map.removeLayer(fondo); fondo = null; }
    estilo = id; aviso.hidden = true;
    Object.keys(ESTILOS).concat('local').forEach(k => app.classList.remove('est-' + k));
    app.classList.toggle('est-imagen', id !== 'mapa');
    btnEstilo.innerHTML = `<span class="at-oculto">Tipo de mapa: </span>${ESTILOS[id].n}`;
    menuEstilo.querySelectorAll('[data-e]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.e === id)));
    if (guardar) { try { localStorage.setItem(CLAVE_ESTILO, id); } catch (e) { /* sin almacenamiento */ } }
    if (id === 'mapa') return;
    const E = ESTILOS[id];
    app.classList.add('est-' + id);
    let cargadas = 0, fallas = 0;
    fondo = L.tileLayer(E.url, { pane: 'fondo', maxNativeZoom: E.max, maxZoom: 12, attribution: E.attr, subdomains: 'abc' })
      .on('tileload', () => { cargadas++; })
      .on('tileerror', () => {
        if (++fallas < 3 || cargadas || estilo !== id) return;
        // El servidor no responde: teselas propias de la NASA
        map.removeLayer(fondo);
        fondo = capaLocal().addTo(map);
        app.classList.add('est-local');
        aviso.textContent = `No se pudo cargar el mapa «${E.n}». Se muestra el relieve de la NASA incluido en el sitio, con menos detalle de cerca.`;
        aviso.hidden = false;
        setTimeout(() => { aviso.hidden = true; }, 7000);
      })
      .addTo(map);
  }
  // Control: botón con el tipo actual y menú desplegable
  const selEstilo = L.DomUtil.create('div', 'at-estilos');
  btnEstilo.type = 'button';
  btnEstilo.setAttribute('aria-haspopup', 'true'); btnEstilo.setAttribute('aria-expanded', 'false'); btnEstilo.setAttribute('aria-controls', 'at-estilo-menu');
  menuEstilo.id = 'at-estilo-menu'; menuEstilo.hidden = true; menuEstilo.setAttribute('role', 'menu'); menuEstilo.setAttribute('aria-label', 'Tipo de mapa');
  menuEstilo.innerHTML = Object.entries(ESTILOS).map(([id, e]) =>
    `<li role="none"><button type="button" role="menuitemradio" data-e="${id}" aria-checked="false"><i class="at-mini est-mini-${id}"></i><span><b>${e.n}</b><small>${e.d}</small></span></button></li>`).join('');
  selEstilo.append(menuEstilo, btnEstilo);
  const abrirMenu = si => { menuEstilo.hidden = !si; btnEstilo.setAttribute('aria-expanded', String(si)); if (si) menuEstilo.querySelector('[aria-checked="true"]')?.focus(); };
  L.DomEvent.disableClickPropagation(selEstilo); L.DomEvent.disableScrollPropagation(selEstilo);
  btnEstilo.addEventListener('click', () => abrirMenu(menuEstilo.hidden));
  menuEstilo.addEventListener('click', e => { const b = e.target.closest('[data-e]'); if (b) { ponerEstilo(b.dataset.e, true); abrirMenu(false); btnEstilo.focus(); } });
  menuEstilo.addEventListener('keydown', e => {
    const bs = [...menuEstilo.querySelectorAll('[data-e]')], i = bs.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); bs[(i + (e.key === 'ArrowDown' ? 1 : bs.length - 1)) % bs.length].focus(); }
    if (e.key === 'Escape') { e.stopPropagation(); abrirMenu(false); btnEstilo.focus(); }
  });
  document.addEventListener('click', e => { if (!e.target.closest('.at-estilos')) abrirMenu(false); });
  const CtlEstilo = L.Control.extend({ options: { position: 'bottomright' }, onAdd: () => selEstilo });
  new CtlEstilo().addTo(map);
  let inicial = 'mapa';
  try { inicial = localStorage.getItem(CLAVE_ESTILO) || 'mapa'; } catch (e) { /* sin almacenamiento */ }
  ponerEstilo(inicial, false);

  const estado = { epoca: '', tipos: new Set(TIPOS.map(t => t[0])), libro: '', imperio: true, sel: null };

  // Tipo con que se pinta un lugar: el de su primer evento visible
  const eventosVisibles = l => l.eventos.filter(e => (!estado.epoca || e.ep.includes(estado.epoca)) && (!estado.libro || (e.li || []).includes(estado.libro)));
  function tipoDe(l) {
    if (l.extra) return 'otros';
    const ev = eventosVisibles(l).find(e => estado.tipos.has(e.ty)) || l.eventos.find(e => estado.tipos.has(e.ty)) || l.eventos[0];
    return ev ? ev.ty : 'otros';
  }
  function visible(l) {
    if (estado.libro && !l.libros.has(estado.libro)) return false;
    if (estado.epoca && !l.eps.has(estado.epoca)) return false;
    if (l.extra) return estado.tipos.has('otros');
    const evs = l.eventos.filter(e => (!estado.libro || (e.li || []).includes(estado.libro)));
    return evs.some(e => estado.tipos.has(e.ty));
  }

  lugares.forEach(l => {
    l.m = L.circleMarker([l.lat, l.lng], { pane: 'lugares', radius: l.extra ? 4.5 : 7, className: 'at-pt', bubblingMouseEvents: false });
    l.m.bindTooltip(esc(l.n), { pane: 'etiquetas', permanent: true, direction: 'right', offset: [8, 0], className: 'at-lbl' + (l.extra ? ' extra' : '') });
    l.m.on('click', () => abrir(l.id, false));
    // Al pasar el cursor, el nombre se muestra aunque esté tapado
    l.m.on('mouseover', () => l.m.getTooltip()?.getElement()?.classList.add('hover'));
    l.m.on('mouseout', () => l.m.getTooltip()?.getElement()?.classList.remove('hover'));
    l.prio = l.extra ? l.enlaces.length : 1000 + l.eventos.length * 60 + l.enlaces.length;
  });
  const capa = L.layerGroup().addTo(map);

  /* Nombres: siempre visibles, salvo los que chocan con uno más importante.
     Prioridad: el lugar abierto, luego los del atlas (más eventos y enlaces primero), luego los grises. */
  let visibles = [];
  function ordenarEtiquetas() {
    const cajas = [];
    const choca = r => cajas.some(c => r.left < c.right + 3 && r.right > c.left - 3 && r.top < c.bottom + 1 && r.bottom > c.top - 1);
    // Los puntos de los lugares más importantes también cuentan como obstáculo
    visibles.slice().sort((a, b) => (b.id === estado.sel) - (a.id === estado.sel) || b.prio - a.prio).forEach(l => {
      const el = l.m.getTooltip()?.getElement();
      if (!el) return;
      const r = el.getBoundingClientRect();
      const tapar = l.id !== estado.sel && choca(r);
      el.classList.toggle('tapado', tapar);
      if (!tapar) cajas.push(r);
      const p = l.m.getElement()?.getBoundingClientRect();
      if (p && !l.extra) cajas.push(p);
    });
  }
  map.on('zoomend', ordenarEtiquetas);
  window.addEventListener('resize', () => setTimeout(ordenarEtiquetas, 150));

  function pintar(encuadrar) {
    capa.clearLayers();
    const vis = lugares.filter(visible);
    visibles = vis;
    vis.forEach(l => {
      const t = tipoDe(l);
      capa.addLayer(l.m);
      const el = l.m.getElement();
      if (el) el.setAttribute('class', `leaflet-interactive at-pt t-${t}${l.extra ? ' extra' : ''}${estado.sel === l.id ? ' sel' : ''}`);
      const tt = l.m.getTooltip() && l.m.getTooltip().getElement();
      if (tt) tt.classList.toggle('sel', estado.sel === l.id);
    });
    // Imperio de la época
    const capas = estado.imperio && estado.epoca ? (IMPERIO[estado.epoca] || []) : [];
    mi.mostrar({ capas });
    requestAnimationFrame(ordenarEtiquetas);
    if (encuadrar) {
      const b = vis.length && (estado.epoca || estado.libro) ? L.latLngBounds(vis.map(l => [l.lat, l.lng])) : L.latLngBounds(VISTA);
      map.flyToBounds(b, { maxZoom: 9, duration: .8, ...margenes() });
    }
    const n = vis.filter(l => !l.extra).length, x = vis.length - n;
    $('at-cuenta').textContent = `${n} ${n === 1 ? 'lugar' : 'lugares'} del atlas${x ? ` y ${x} de otros recursos` : ''}`;
    pintarActivos();
    pintarTipos();
  }
  // Márgenes para encuadrar sin quedar bajo la barra ni la ficha
  function margenes() {
    const abierta = !$('at-ficha').hidden, w = window.innerWidth, h = window.innerHeight;
    return w > 760
      ? { paddingTopLeft: [Math.min(400, w * .4), 30], paddingBottomRight: [abierta ? Math.min(420, w * .4) : 30, 30] }
      : { paddingTopLeft: [16, 150], paddingBottomRight: [16, abierta ? h * .64 : 16] };
  }

  /* ---------- Época ---------- */
  const selEpoca = $('at-epoca');
  selEpoca.innerHTML = '<option value="">Todas las épocas</option>' + EPOCAS
    .filter(([id]) => lugares.some(l => l.eps.has(id)))
    .map(([id, n]) => `<option value="${id}">${esc(n)}</option>`).join('');
  selEpoca.addEventListener('change', () => { estado.epoca = selEpoca.value; pintar(true); refrescarFicha(); });

  /* ---------- Tipos ---------- */
  const panelTipos = $('at-tipos'), btnTipos = $('at-tipos-btn');
  btnTipos.addEventListener('click', () => { panelTipos.hidden = !panelTipos.hidden; btnTipos.setAttribute('aria-expanded', String(!panelTipos.hidden)); });
  function pintarTipos() {
    const cuenta = t => lugares.filter(l => (!estado.epoca || l.eps.has(estado.epoca)) && (!estado.libro || l.libros.has(estado.libro)) &&
      (t === 'otros' ? l.extra : l.eventos.some(e => e.ty === t && (!estado.epoca || e.ep.includes(estado.epoca) || R.epocas[l.id]?.includes(estado.epoca))))).length;
    $('at-tipos-lista').innerHTML = TIPOS.map(([id, n]) =>
      `<button type="button" class="at-tipo" data-t="${id}" aria-pressed="${estado.tipos.has(id)}"><i class="at-sw t-${id}"></i>${esc(n)}<em>${cuenta(id)}</em></button>`).join('');
    const off = TIPOS.length - estado.tipos.size;
    btnTipos.textContent = off ? `Tipos (${estado.tipos.size} de ${TIPOS.length})` : 'Tipos';
  }
  $('at-tipos-lista').addEventListener('click', e => {
    const b = e.target.closest('.at-tipo'); if (!b) return;
    const t = b.dataset.t;
    if (estado.tipos.has(t)) estado.tipos.delete(t); else estado.tipos.add(t);
    pintar(false);
  });
  $('at-imperio').addEventListener('change', e => { estado.imperio = e.target.checked; pintar(false); });

  /* ---------- Filtros activos (libro) ---------- */
  function pintarActivos() {
    const cont = $('at-activos');
    cont.innerHTML = estado.libro ? `<button type="button" data-q="libro">Libro: ${esc(estado.libro)} ✕</button>` : '';
    cont.hidden = !estado.libro;
  }
  $('at-activos').addEventListener('click', e => { if (e.target.closest('[data-q="libro"]')) { estado.libro = ''; pintar(true); } });

  /* ---------- Búsqueda ---------- */
  const q = $('at-q'), lista = $('at-res');
  let opciones = [], activa = -1;
  function buscar() {
    const t = norm(q.value);
    if (t.length < 2) { cerrarRes(); return; }
    const libros = LIBROS.filter(b => norm(b).startsWith(t) || (t.length > 3 && norm(b).includes(t)))
      .map(b => ({ libro: b, n: lugares.filter(l => l.libros.has(b)).length }));
    const puntos = lugares.map(l => {
      let p = 0, s = '';
      l.claves.forEach((c, i) => {
        const v = c.startsWith(t) ? 3 : c.split(/[\s(-]+/).some(w => w.startsWith(t)) ? 2 : c.includes(t) ? 1 : 0;
        if (v > p) { p = v; s = i ? `${l.alias[i - 1]}, en ${l.n}` : ''; }
      });
      if (!p) { const ev = l.eventos.find(e => norm(e.t).includes(t)); if (ev) { p = .5; s = ev.t; } }
      return { l, p: p + (l.extra ? 0 : .2), s };
    }).filter(x => x.p > .3).sort((a, b) => b.p - a.p || a.l.n.localeCompare(b.l.n, 'es')).slice(0, 8);
    opciones = [...libros.map(b => ({ tipo: 'libro', ...b })), ...puntos.map(x => ({ tipo: 'lugar', ...x }))];
    lista.innerHTML = opciones.length ? opciones.map((o, i) => o.tipo === 'libro'
      ? `<li role="option" id="op-${i}" class="libro" data-i="${i}"><span class="n">Lugares de ${esc(o.libro)}</span><span class="s">${o.n}</span></li>`
      : `<li role="option" id="op-${i}" data-i="${i}"><i class="at-sw t-${tipoDe(o.l)}"></i><span class="n">${esc(o.l.n)}</span><span class="s">${esc(o.s || (o.l.extra ? 'En los recursos' : ''))}</span></li>`).join('')
      : '<li class="vacio">Sin resultados. Prueba con otro nombre o con un libro.</li>';
    activa = -1;
    lista.hidden = false; q.setAttribute('aria-expanded', 'true');
  }
  function cerrarRes() { lista.hidden = true; q.setAttribute('aria-expanded', 'false'); q.removeAttribute('aria-activedescendant'); }
  function elegir(i) {
    const o = opciones[i]; if (!o) return;
    cerrarRes();
    if (o.tipo === 'libro') { estado.libro = o.libro; q.value = ''; pintar(true); }
    else { q.value = o.l.n; abrir(o.l.id, true); }
    q.blur();
  }
  q.addEventListener('input', buscar);
  q.addEventListener('focus', () => { if (q.value.trim().length >= 2) buscar(); });
  q.addEventListener('keydown', e => {
    if (lista.hidden) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      activa = Math.max(0, Math.min(opciones.length - 1, activa + (e.key === 'ArrowDown' ? 1 : -1)));
      lista.querySelectorAll('li').forEach((li, i) => li.setAttribute('aria-selected', String(i === activa)));
      q.setAttribute('aria-activedescendant', 'op-' + activa);
    } else if (e.key === 'Enter') { e.preventDefault(); elegir(activa < 0 ? 0 : activa); }
    else if (e.key === 'Escape') cerrarRes();
  });
  lista.addEventListener('click', e => { const li = e.target.closest('[data-i]'); if (li) elegir(+li.dataset.i); });
  document.addEventListener('click', e => { if (!e.target.closest('.at-buscar')) cerrarRes(); });

  /* ---------- Ficha del lugar ---------- */
  const ficha = $('at-ficha'), cuerpo = $('at-ficha-cuerpo');
  const MAX = 3;
  // Agrupa por recurso; con una época elegida, primero lo de esa época (índice en EPOCAS_GEN del generador)
  const EPOCAS_GEN = EPOCAS.slice(0, 11).map(e => e[0]);
  function grupos(l) {
    const g = new Map(), ep = EPOCAS_GEN.indexOf(estado.epoca);
    l.enlaces.forEach(([slug, ancla, t, ruta, fuerte, eps]) => {
      if (!g.has(slug)) g.set(slug, { slug, fuertes: 0, enEpoca: 0, items: [] });
      const en = ep >= 0 && (eps || []).includes(ep) ? 1 : 0;
      const x = g.get(slug); x.items.push({ ancla, t, ruta, fuerte, en }); x.fuertes += fuerte; x.enEpoca += en;
    });
    const gs = [...g.values()];
    gs.forEach(x => x.items.sort((a, b) => b.en - a.en || b.fuerte - a.fuerte));
    return gs.sort((a, b) => (b.enEpoca > 0) - (a.enEpoca > 0) || (b.fuertes > 0) - (a.fuertes > 0) || b.enEpoca - a.enEpoca || b.fuertes - a.fuertes || b.items.length - a.items.length);
  }
  const enlace = (slug, ancla) => RAIZ + slug + '/' + (ancla || '');
  function htmlFicha(l) {
    const evs = l.eventos.slice().sort((a, b) => (estado.epoca ? (b.ep.includes(estado.epoca) - a.ep.includes(estado.epoca)) : 0));
    const eps = EPOCAS.filter(([id]) => l.eventos.some(e => e.ep.includes(id))).map(e => e[1]);
    const enEpoca = estado.epoca ? evs.filter(e => e.ep.includes(estado.epoca)).length : 0;
    const principales = estado.epoca ? Math.max(1, enEpoca) : Math.min(evs.length, 3);
    const gs = grupos(l);
    const total = l.enlaces.length;
    return `
      <div>
        <p class="at-ojo">${l.extra ? 'Lugar mencionado en los recursos' : esc(eps.join(' · '))}</p>
        <h2 id="at-ficha-n">${esc(l.n)}</h2>
        ${l.alias && l.alias.length ? `<p class="at-alias">También: ${esc(l.alias.join(', '))}</p>` : ''}
      </div>
      ${evs.length ? `<ul class="at-eventos">${evs.map((e, i) => `
        <li class="at-ev${estado.epoca && !e.ep.includes(estado.epoca) ? ' fuera' : ''}"${i >= principales ? ' hidden' : ''}>
          <div class="at-ev-meta"><i class="at-sw t-${e.ty}"></i>${esc(TIPO[e.ty] || '')} · ${esc(e.ep.map(x => EP[x]).join(', '))}</div>
          <h3>${esc(e.t)}</h3>
          <p>${esc(e.d)}</p>
          <p class="at-ref">${esc(e.r)}</p>
        </li>`).join('')}</ul>${evs.length > principales ? `<button type="button" class="at-mas-ev" aria-expanded="false">${evs.length - principales === 1 ? 'Ver un evento más' : `Ver ${evs.length - principales} eventos más`}</button>` : ''}` : ''}
      <section class="at-mas no-citas">
        <h3>Para aprender más</h3>
        ${total ? `<p>${total === 1 ? 'Una estación' : `${total} estaciones`} en ${gs.length === 1 ? 'un recurso' : `${gs.length} recursos`} del sitio.</p>
          ${gs.map(g => {
            const r = R.recursos[g.slug] || { t: g.slug };
            const items = g.items.map((it, i) => `<li${i >= MAX ? ' hidden' : ''}><a href="${esc(enlace(g.slug, it.ancla))}" target="_top">
              <span class="e">${esc(it.t)}</span>${it.ruta ? `<span class="r">${esc(it.ruta)}</span>` : ''}</a></li>`).join('');
            return `<div class="at-rc"><div class="at-rc-cab"><a href="${esc(enlace(g.slug, ''))}" target="_top">${esc(r.t)}</a>
              <span>${g.items.length === 1 ? '1 estación' : g.items.length + ' estaciones'}</span></div>
              ${g.items.length === 1 && !g.items[0].ancla ? '' : `<ul>${items}</ul>`}
              ${g.items.length > MAX ? `<button type="button" class="ver" aria-expanded="false">Ver las ${g.items.length}</button>` : ''}</div>`;
          }).join('')}`
          : '<p class="at-sin">Todavía no hay recursos del sitio sobre este lugar. A medida que se publiquen, aparecerán aquí.</p>'}
      </section>
      <div class="at-pie no-citas">
        <a href="https://www.google.com/maps/search/?api=1&amp;query=${l.lat},${l.lng}" target="_blank" rel="noopener noreferrer">Ver dónde queda hoy (Google Maps)</a>
        ${l.extra ? '' : '<span>Ubicaciones aproximadas; algunas son tradicionales.</span><span>Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.</span>'}
      </div>`;
  }
  cuerpo.addEventListener('click', e => {
    const m = e.target.closest('.at-mas-ev');
    if (m) { cuerpo.querySelectorAll('.at-ev[hidden]').forEach(li => { li.hidden = false; }); m.remove(); return; }
    const b = e.target.closest('.ver'); if (!b) return;
    const abierto = b.getAttribute('aria-expanded') === 'true';
    b.closest('.at-rc').querySelectorAll('li').forEach((li, i) => { li.hidden = !abierto ? false : i >= MAX; });
    b.setAttribute('aria-expanded', String(!abierto));
    b.textContent = abierto ? `Ver las ${b.closest('.at-rc').querySelectorAll('li').length}` : 'Ver menos';
  });

  function abrir(id, volar) {
    const l = porId[id]; if (!l) return;
    estado.sel = id;
    if (!visible(l)) { estado.epoca = ''; selEpoca.value = ''; estado.libro = ''; estado.tipos.add(l.extra ? 'otros' : tipoDe(l)); }
    cuerpo.innerHTML = htmlFicha(l);
    cuerpo.scrollTop = 0;
    ficha.hidden = false; app.classList.add('ficha-abierta');
    $('at-rec').hidden = true; $('at-rec-btn').setAttribute('aria-expanded', 'false');
    pintar(false);
    if (volar) {
      const movil = window.innerWidth <= 760;
      const caja = window.MAPA_DETALLE && L.latLngBounds(window.MAPA_DETALLE.caja);
      const z = Math.max(map.getZoom(), caja && caja.contains([l.lat, l.lng]) ? 9 : 7);
      const p = map.project([l.lat, l.lng], z).add(movil ? [0, window.innerHeight * .28] : [Math.min(200, window.innerWidth * .18), 0]);
      map.flyTo(map.unproject(p, z), z, { duration: .8 });
    }
    try { history.replaceState(null, '', '#' + id); } catch (err) { /* sin historial */ }
  }
  function cerrar() {
    ficha.hidden = true; app.classList.remove('ficha-abierta'); estado.sel = null; pintar(false);
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) { /* sin historial */ }
  }
  function refrescarFicha() { if (estado.sel && !ficha.hidden) { cuerpo.innerHTML = htmlFicha(porId[estado.sel]); } }
  $('at-cerrar').addEventListener('click', cerrar);
  map.on('click', () => { if (!ficha.hidden) cerrar(); panelTipos.hidden = true; btnTipos.setAttribute('aria-expanded', 'false'); });

  /* ---------- Recorridos ---------- */
  const rec = $('at-rec'), btnRec = $('at-rec-btn');
  const grp = [...new Set(R.recorridos.map(r => r.g))];
  $('at-rec-lista').innerHTML = grp.map(g => `<h3>${esc(g)}</h3><ul>${R.recorridos.filter(r => r.g === g).map(r => r.a
    ? `<li><a href="${esc(RAIZ + r.a)}" target="_top"><span class="t">${esc(r.t)}</span><span class="x">Abrir ›</span><span class="d">${esc(r.d)}</span></a></li>`
    : `<li class="pend"><div><span class="t">${esc(r.t)}</span><span class="x">En preparación</span><span class="d">${esc(r.d)}</span></div></li>`).join('')}</ul>`).join('');
  function abrirRec(si) { rec.hidden = !si; btnRec.setAttribute('aria-expanded', String(si)); if (si) $('at-rec-cerrar').focus(); }
  btnRec.addEventListener('click', () => abrirRec(rec.hidden));
  $('at-rec-cerrar').addEventListener('click', () => { abrirRec(false); btnRec.focus(); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!rec.hidden) { abrirRec(false); btnRec.focus(); } else if (!ficha.hidden) cerrar();
  });

  /* ---------- Inicio ---------- */
  window.fypReset = () => {
    estado.epoca = ''; selEpoca.value = ''; estado.libro = ''; estado.tipos = new Set(TIPOS.map(t => t[0]));
    abrirRec(false); ficha.hidden = true; app.classList.remove('ficha-abierta'); estado.sel = null; q.value = '';
    pintar(true);
  };
  map.fitBounds(VISTA, { animate: false });
  pintar(false);
  const h = decodeURIComponent(location.hash.slice(1));
  if (porId[h]) abrir(h, true);
})();
