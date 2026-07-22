'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/* Cross-page wipe transition, ported from the design prototype's site-motion.js
   (corner-blob variant). Two organic brand blobs grow from the bottom-left and
   top-right corners on top of a solid Cyprus field until the viewport is fully
   covered, the router navigates, then both blobs shrink back into their corners
   to reveal the new page. Colours step through the same Cyprus → Turquoise tone
   ramp used by blobscene.

   The original was written for multi-page navigation: it did a full
   window.location reload and handed the "reveal" half to the next page load via
   sessionStorage. Next.js navigates client-side with no reload, so this version
   drives the Next router instead — which lets us reuse the *same* blob elements
   for both halves, so the exact blobs that covered the screen are the ones that
   recede. */

const WRAP_ID = 'at-page-wipe';
const R0 = 470; // outer blob radius in its own 1000x1000 local box
const JITTER = 0.24; // big organic lobes, not fine waviness
const POINTS = 7; // fewer points -> chunkier "blob" silhouette
const COVER_MS = 560;
const REVEAL_MS = 600;
const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';
const ROT_MID = 6; // deg, subtle drift while covered
const FONT_WAIT_CAP_MS = 150;
const COLLAPSED = 0.03; // scale of a blob folded into its corner

// Cyprus → Turquoise tone ramp (matches blobscene's brandTeal ramp).
const RAMP = ['#004040', '#016B6B', '#038281', '#069A98', '#2BBCBA'];

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function r(n: number) {
  return Math.round(n * 10) / 10;
}

// Closed Catmull-Rom loop through a ring of points (wraps around, no open ends).
function smoothClosedPath(pts: { x: number; y: number }[]) {
  const n = pts.length;
  let d = 'M ' + r(pts[0].x) + ' ' + r(pts[0].y);
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6,
      c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6,
      c2y = p2.y - (p3.y - p1.y) / 6;
    d += ' C ' + r(c1x) + ' ' + r(c1y) + ' ' + r(c2x) + ' ' + r(c2y) + ' ' + r(p2.x) + ' ' + r(p2.y);
  }
  return d + ' Z';
}

type Layer = { r: number; color: string };

// Two nested closed blobs (a corner's own tone-stepped silhouette).
function buildBlobSvg(seed: number, layers: Layer[]) {
  const size = 1000,
    cx = 500,
    cy = 500;
  const rng = mulberry32(Math.floor(seed) + 7);
  const prof: number[] = [];
  for (let k = 0; k < POINTS; k++) prof.push(1 + (rng() * 2 - 1) * JITTER);

  let paths = '';
  layers.forEach((layer) => {
    const pts = [];
    for (let k = 0; k < POINTS; k++) {
      const th = (k / POINTS) * Math.PI * 2;
      const rad = layer.r * prof[k];
      pts.push({ x: cx + Math.cos(th) * rad, y: cy + Math.sin(th) * rad });
    }
    paths += '<path d="' + smoothClosedPath(pts) + '" fill="' + layer.color + '"></path>';
  });
  return (
    '<svg viewBox="0 0 ' +
    size +
    ' ' +
    size +
    '" width="' +
    size +
    '" height="' +
    size +
    '" xmlns="http://www.w3.org/2000/svg" style="display:block;">' +
    paths +
    '</svg>'
  );
}

// Minimum guaranteed radius across all angles (worst-case dent), used so each
// blob fully covers its half of the viewport no matter how it's rotated.
function minGuaranteedRadius() {
  return R0 * (1 - JITTER);
}

function finalScaleFor(x: number, y: number) {
  const w = window.innerWidth,
    h = window.innerHeight;
  const corners = [
    [0, 0],
    [w, 0],
    [0, h],
    [w, h],
  ];
  let maxD = 0;
  corners.forEach(([cx, cy]) => {
    const d = Math.hypot(cx - x, cy - y);
    if (d > maxD) maxD = d;
  });
  return (maxD * 0.4) / minGuaranteedRadius();
}

function removeExistingWipe(doc: Document) {
  const existing = doc.getElementById(WRAP_ID);
  if (existing) existing.remove();
}

function makeBlobEl(doc: Document, x: number, y: number, seed: number, layers: Layer[], scale: number, rotate: number) {
  const el = doc.createElement('div');
  el.style.cssText =
    'position:fixed;left:' +
    x +
    'px;top:' +
    y +
    'px;width:1000px;height:1000px;' +
    'transform:translate(-50%,-50%) scale(' +
    scale +
    ') rotate(' +
    rotate +
    'deg);transform-origin:center center;will-change:transform;';
  el.innerHTML = buildBlobSvg(seed, layers);
  return el;
}

type WipePair = {
  bg: HTMLElement;
  bl: HTMLElement;
  tr: HTMLElement;
  blFull: number;
  trFull: number;
};

// scaleFrac: 0 = collapsed into the corner, 1 = fully covering the viewport.
function buildContainer(doc: Document, seed: number, scaleFrac: number, rot: number): WipePair {
  removeExistingWipe(doc);
  const w = window.innerWidth,
    h = window.innerHeight;
  const blFull = finalScaleFor(0, h),
    trFull = finalScaleFor(w, 0);
  const blScale = COLLAPSED + (blFull - COLLAPSED) * scaleFrac;
  const trScale = COLLAPSED + (trFull - COLLAPSED) * scaleFrac;

  const wrap = doc.createElement('div');
  wrap.id = WRAP_ID;
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:fixed;inset:0;z-index:2147483647;pointer-events:none;overflow:hidden;';

  // Solid Cyprus field: appears instantly so the viewport is fully covered the
  // moment the wipe starts (guarantees coverage regardless of how far apart the
  // two corner blobs are), while the blobs add organic colour blooms on top.
  const bg = doc.createElement('div');
  bg.style.cssText = 'position:absolute;inset:0;background:' + RAMP[0] + ';opacity:1;';
  wrap.appendChild(bg);

  const bl = makeBlobEl(
    doc,
    0,
    h,
    seed,
    [
      { r: R0, color: RAMP[0] },
      { r: R0 * 0.6, color: RAMP[2] },
    ],
    blScale,
    rot
  );
  const tr = makeBlobEl(
    doc,
    w,
    0,
    seed + 1,
    [
      { r: R0, color: RAMP[4] },
      { r: R0 * 0.6, color: RAMP[3] },
    ],
    trScale,
    -rot
  );

  wrap.appendChild(bl);
  wrap.appendChild(tr);
  (doc.body || doc.documentElement).appendChild(wrap);

  return { bg, bl, tr, blFull, trFull };
}

function waitForPaint(doc: Document, cb: () => void) {
  const fontsReady = (doc.fonts && doc.fonts.ready) || Promise.resolve();
  Promise.race([fontsReady, new Promise((res) => setTimeout(res, FONT_WAIT_CAP_MS))])
    .catch(() => {})
    .then(() => requestAnimationFrame(() => requestAnimationFrame(cb)));
}

function animatePair(
  pair: WipePair,
  fromRot: number,
  toRot: number,
  fromFrac: number,
  toFrac: number,
  duration: number,
  onDone: () => void,
  fadeBg?: [number, number]
) {
  if (!pair.bl.animate || !pair.tr.animate) {
    onDone();
    return;
  }
  const blFrom = COLLAPSED + (pair.blFull - COLLAPSED) * fromFrac,
    blTo = COLLAPSED + (pair.blFull - COLLAPSED) * toFrac;
  const trFrom = COLLAPSED + (pair.trFull - COLLAPSED) * fromFrac,
    trTo = COLLAPSED + (pair.trFull - COLLAPSED) * toFrac;
  const a1 = pair.bl.animate(
    [
      { transform: 'translate(-50%,-50%) scale(' + blFrom + ') rotate(' + fromRot + 'deg)' },
      { transform: 'translate(-50%,-50%) scale(' + blTo + ') rotate(' + toRot + 'deg)' },
    ],
    { duration, easing: EASE, fill: 'forwards' }
  );
  const a2 = pair.tr.animate(
    [
      { transform: 'translate(-50%,-50%) scale(' + trFrom + ') rotate(' + -fromRot + 'deg)' },
      { transform: 'translate(-50%,-50%) scale(' + trTo + ') rotate(' + -toRot + 'deg)' },
    ],
    { duration, easing: EASE, fill: 'forwards' }
  );
  const anims = [a1.finished, a2.finished];
  if (fadeBg && pair.bg.animate) {
    const a3 = pair.bg.animate([{ opacity: fadeBg[0] }, { opacity: fadeBg[1] }], {
      duration,
      easing: 'linear',
      fill: 'forwards',
    });
    anims.push(a3.finished);
  } else if (fadeBg) {
    pair.bg.style.opacity = String(fadeBg[1]);
  }
  Promise.all(anims).then(onDone).catch(onDone);
}

// The pair currently covering the screen, held between the cover and reveal
// halves so the exact blobs that grew in are the ones that fold back out.
let activePair: WipePair | null = null;

function runWipeCover(doc: Document, seed: number, onDone: () => void) {
  const pair = buildContainer(doc, seed, 0, 0);
  activePair = pair;
  animatePair(pair, 0, ROT_MID, 0, 1, COVER_MS, onDone);
}

function runWipeReveal(doc: Document, onDone: () => void) {
  const pair = activePair;
  if (!pair) {
    removeExistingWipe(doc);
    onDone();
    return;
  }
  // Wait for the freshly navigated page to paint before folding the blobs back
  // into their corners, so nothing unstyled ever flashes behind them.
  waitForPaint(doc, () => {
    animatePair(
      pair,
      ROT_MID,
      0,
      1,
      0,
      REVEAL_MS,
      () => {
        removeExistingWipe(doc);
        activePair = null;
        onDone();
      },
      [1, 0]
    );
  });
}

function isPlainLeftClick(e: MouseEvent) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

// Match an internal, same-origin link that should trigger a wipe. Skips
// downloads, new-tab/target links, opt-outs (data-no-wipe), and same-page
// (hash / identical path) navigations, which shouldn't wipe.
function matchInternalWipeLink(a: Element | null): URL | null {
  if (!a || !(a instanceof HTMLAnchorElement)) return null;
  if (a.hasAttribute('download') || a.hasAttribute('data-no-wipe')) return null;
  const target = a.getAttribute('target');
  if (target && target !== '_self') return null;
  const href = a.getAttribute('href') || '';
  if (!href || href.startsWith('#')) return null;
  let url: URL;
  try {
    url = new URL(href, document.baseURI);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;
  // Same path (with or without a hash) — let the browser/router handle it.
  if (url.pathname === window.location.pathname) return null;
  return url;
}

export default function PageWipe() {
  const router = useRouter();
  const pathname = usePathname();
  const pendingReveal = useRef(false);
  const busy = useRef(false);

  useEffect(() => {
    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    function onClick(e: MouseEvent) {
      if (busy.current || e.defaultPrevented || !isPlainLeftClick(e)) return;
      const target = e.target as Element | null;
      const a = target && target.closest ? target.closest('a[href]') : null;
      const url = matchInternalWipeLink(a);
      if (!url) return;

      const dest = url.pathname + url.search + url.hash;
      e.preventDefault();
      if (reduce) {
        router.push(dest);
        return;
      }

      busy.current = true;
      const seed = Math.floor(Math.random() * 100000);
      runWipeCover(document, seed, () => {
        pendingReveal.current = true;
        router.push(dest);
      });
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  // Once the new route has rendered, fold the covering blobs back out.
  useEffect(() => {
    if (!pendingReveal.current) return;
    pendingReveal.current = false;
    runWipeReveal(document, () => {
      busy.current = false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // A stale overlay should never be left covering the page (e.g. bfcache).
  useEffect(() => {
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) {
        removeExistingWipe(document);
        activePair = null;
        busy.current = false;
        pendingReveal.current = false;
      }
    }
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return null;
}
