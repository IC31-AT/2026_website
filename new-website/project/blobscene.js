/* AgencyTech blob-scene generator.
   Recreates the Haikei "layered blob" look as pure SVG: a solid background
   with N nested organic wave-shapes anchored in one corner, stepping through
   a tone ramp (dark on the outside -> bright toward the corner).

   window.BlobScene.make(opts) -> SVG markup string
   window.BlobScene.dataUri(opts) -> "data:image/svg+xml,..." (for <img src>)
   window.BlobScene.PALETTES -> named brand tone ramps
*/
(function () {
  // Seeded PRNG so a given seed always yields the same scene.
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Corner -> origin point + the two edge directions pointing INTO the canvas.
  function cornerConfig(corner, w, h) {
    switch (corner) {
      case 'bl': return { O: [0, h], a: [1, 0], b: [0, -1] };
      case 'tl': return { O: [0, 0], a: [1, 0], b: [0, 1] };
      case 'tr': return { O: [w, 0], a: [-1, 0], b: [0, 1] };
      case 'br':
      default:   return { O: [w, h], a: [-1, 0], b: [0, -1] };
    }
  }

  // Catmull-Rom -> cubic bezier through an open list of {x,y} points.
  function smoothPath(pts) {
    let d = 'M ' + r(pts[0].x) + ' ' + r(pts[0].y);
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ' C ' + r(c1x) + ' ' + r(c1y) + ' ' + r(c2x) + ' ' + r(c2y) + ' ' + r(p2.x) + ' ' + r(p2.y);
    }
    return d;
  }
  function r(n) { return Math.round(n * 10) / 10; }

  // Even sample from a colour ramp (0 -> first / darkest, 1 -> last / brightest).
  function sampleRamp(ramp, t) {
    if (ramp.length === 1) return ramp[0];
    const idx = Math.round(t * (ramp.length - 1));
    return ramp[Math.max(0, Math.min(ramp.length - 1, idx))];
  }

  const PALETTES = {
    brandTeal:    { bg: '#004040', ramp: ['#004B4B', '#016B6B', '#038281', '#069A98', '#2BBCBA'] },
    turquoisePop: { bg: '#004040', ramp: ['#016B6B', '#038281', '#069A98', '#2BBCBA', '#7FD8D6'] },
    deep:         { bg: '#002B2B', ramp: ['#003B3B', '#004B4B', '#016B6B', '#069A98'] },
    mono:         { bg: '#004040', ramp: ['#00494A', '#005557', '#026C6C', '#068C8B'] }
  };

  function make(opts) {
    opts = opts || {};
    const w = opts.width || 1600;
    const h = opts.height || 1600;
    const corner = opts.corner || 'br';
    const layers = Math.max(1, opts.layers || 4);
    // AgencyTech spec: waviness caps at 6, jitter stays under 0.03 — keeps
    // scenes calm and on-brand no matter what callers pass in.
    const points = Math.min(6, Math.max(2, opts.points || 6));   // waviness resolution
    const jitter = Math.min(0.03, Math.max(0, opts.jitter == null ? 0.02 : opts.jitter)); // organic amplitude
    const spread = opts.spread == null ? 0.92 : opts.spread; // how far the outer layer reaches
    const seed = opts.seed == null ? 1 : opts.seed;
    const pal = typeof opts.palette === 'string'
      ? (PALETTES[opts.palette] || PALETTES.brandTeal)
      : (opts.palette || PALETTES.brandTeal);

    const rng = mulberry32(Math.floor(seed * 1000) + 7);

    // One shared angular radius profile keeps the layers nested (never crossing).
    // Endpoints eased toward 1 so each contour meets the two edges cleanly.
    const prof = [];
    for (let k = 0; k <= points; k++) {
      prof.push(1 + (rng() * 2 - 1) * jitter);
    }
    const ease = 0.55;
    prof[0] = 1 + (prof[0] - 1) * ease;
    prof[points] = 1 + (prof[points] - 1) * ease;

    const cfg = cornerConfig(corner, w, h);
    const reach = Math.hypot(w, h) * spread;
    const [ox, oy] = cfg.O, [ax, ay] = cfg.a, [bx, by] = cfg.b;

    let paths = '';
    for (let i = 0; i < layers; i++) {
      const layerR = reach * (layers - i) / layers; // outer (i=0) largest
      const pts = [];
      for (let k = 0; k <= points; k++) {
        const th = (k / points) * (Math.PI / 2);
        const rad = layerR * prof[k];
        const dx = Math.cos(th) * ax + Math.sin(th) * bx;
        const dy = Math.cos(th) * ay + Math.sin(th) * by;
        pts.push({ x: ox + rad * dx, y: oy + rad * dy });
      }
      const t = layers === 1 ? 1 : i / (layers - 1); // 0 outer(dark) -> 1 inner(bright)
      const fill = sampleRamp(pal.ramp, t);
      const d = smoothPath(pts) + ' L ' + r(ox) + ' ' + r(oy) + ' Z';
      paths += '<path d="' + d + '" fill="' + fill + '"></path>';
    }

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h +
      '" width="' + w + '" height="' + h + '" preserveAspectRatio="xMidYMid slice">' +
      '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="' + pal.bg + '"></rect>' +
      paths + '</svg>';
  }

  function dataUri(opts) {
    return 'data:image/svg+xml,' + encodeURIComponent(make(opts));
  }

  window.BlobScene = { make: make, dataUri: dataUri, PALETTES: PALETTES };
})();
