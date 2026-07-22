/* AgencyTech blob-scene generator — recreates the Haikei "layered blob" look as
   pure SVG: a solid background with N nested organic wave-shapes anchored in one
   corner, stepping through a tone ramp. Ported from the prototype's blobscene.js. */

type Corner = 'bl' | 'tl' | 'tr' | 'br';
type Palette = { bg: string; ramp: string[] };

function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cornerConfig(corner: Corner, w: number, h: number) {
  switch (corner) {
    case 'bl': return { O: [0, h], a: [1, 0], b: [0, -1] };
    case 'tl': return { O: [0, 0], a: [1, 0], b: [0, 1] };
    case 'tr': return { O: [w, 0], a: [-1, 0], b: [0, 1] };
    case 'br':
    default: return { O: [w, h], a: [-1, 0], b: [0, -1] };
  }
}

function r(n: number) { return Math.round(n * 10) / 10; }

function smoothPath(pts: { x: number; y: number }[]) {
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

function sampleRamp(ramp: string[], t: number) {
  if (ramp.length === 1) return ramp[0];
  const idx = Math.round(t * (ramp.length - 1));
  return ramp[Math.max(0, Math.min(ramp.length - 1, idx))];
}

export const PALETTES: Record<string, Palette> = {
  brandTeal: { bg: '#004040', ramp: ['#004B4B', '#016B6B', '#038281', '#069A98', '#2BBCBA'] },
  turquoisePop: { bg: '#004040', ramp: ['#016B6B', '#038281', '#069A98', '#2BBCBA', '#7FD8D6'] },
  deep: { bg: '#002B2B', ramp: ['#003B3B', '#004B4B', '#016B6B', '#069A98'] },
  mono: { bg: '#004040', ramp: ['#00494A', '#005557', '#026C6C', '#068C8B'] },
};

export type BlobOpts = {
  width?: number;
  height?: number;
  corner?: Corner;
  layers?: number;
  points?: number;
  jitter?: number;
  spread?: number;
  seed?: number;
  palette?: string | Palette;
};

export function make(opts: BlobOpts = {}) {
  const w = opts.width || 1600;
  const h = opts.height || 1600;
  const corner = opts.corner || 'br';
  const layers = Math.max(1, opts.layers || 4);
  const points = Math.min(6, Math.max(2, opts.points || 6));
  const jitter = Math.min(0.03, Math.max(0, opts.jitter == null ? 0.02 : opts.jitter));
  const spread = opts.spread == null ? 0.92 : opts.spread;
  const seed = opts.seed == null ? 1 : opts.seed;
  const pal: Palette = typeof opts.palette === 'string'
    ? (PALETTES[opts.palette] || PALETTES.brandTeal)
    : (opts.palette || PALETTES.brandTeal);

  const rng = mulberry32(Math.floor(seed * 1000) + 7);

  const prof: number[] = [];
  for (let k = 0; k <= points; k++) prof.push(1 + (rng() * 2 - 1) * jitter);
  const ease = 0.55;
  prof[0] = 1 + (prof[0] - 1) * ease;
  prof[points] = 1 + (prof[points] - 1) * ease;

  const cfg = cornerConfig(corner, w, h);
  const reach = Math.hypot(w, h) * spread;
  const [ox, oy] = cfg.O;
  const [ax, ay] = cfg.a;
  const [bx, by] = cfg.b;

  let paths = '';
  for (let i = 0; i < layers; i++) {
    const layerR = reach * (layers - i) / layers;
    const pts: { x: number; y: number }[] = [];
    for (let k = 0; k <= points; k++) {
      const th = (k / points) * (Math.PI / 2);
      const rad = layerR * prof[k];
      const dx = Math.cos(th) * ax + Math.sin(th) * bx;
      const dy = Math.cos(th) * ay + Math.sin(th) * by;
      pts.push({ x: ox + rad * dx, y: oy + rad * dy });
    }
    const t = layers === 1 ? 1 : i / (layers - 1);
    const fill = sampleRamp(pal.ramp, t);
    const d = smoothPath(pts) + ' L ' + r(ox) + ' ' + r(oy) + ' Z';
    paths += '<path d="' + d + '" fill="' + fill + '"></path>';
  }

  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h +
    '" width="' + w + '" height="' + h + '" preserveAspectRatio="xMidYMid slice">' +
    '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="' + pal.bg + '"></rect>' +
    paths + '</svg>';
}

export function dataUri(opts: BlobOpts = {}) {
  return 'data:image/svg+xml,' + encodeURIComponent(make(opts));
}
