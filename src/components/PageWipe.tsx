'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/* Cross-page wipe transition, ported from the design prototype's site-motion.js
   (initPageWipe). A brand wave washes up from the bottom to fully cover the
   screen, the router navigates, then the same wave recedes to reveal the new
   page. The wave's organic crest reuses the tone-stepped layering from
   blobscene (Cyprus body, Turquoise mid, Turquoise-light leading edge) as a
   horizontal band.

   The original was written for multi-page navigation: it did a full
   window.location reload and handed the "reveal" half to the next page load via
   sessionStorage. Next.js navigates client-side with no reload, so this version
   drives the Next router instead — which lets us reuse the *same* wave element
   for both halves, so the exact crest that covered the screen is the one that
   recedes. */

const WIPE_WRAP_ID = 'at-page-wipe';
const WIPE_BAND = 220; // px height of the organic wave band
const WIPE_POINTS = 8; // waviness resolution across the width
const WIPE_JITTER_PX = 24; // organic amplitude, shared across layers (keeps them parallel)
const WIPE_LAYERS = [
  // painted back-to-front: largest reach (leading tip) first
  { depth: 40, color: '#2BBCBA' }, // Turquoise-light — leading edge
  { depth: 110, color: '#069A98' }, // Turquoise — mid
  { depth: 180, color: '#004040' }, // Cyprus — trailing, blends into the body below
];
const WIPE_BODY_COLOR = '#004040';
const WIPE_COVER_MS = 320;
const WIPE_REVEAL_MS = 360;
const WIPE_EASE = 'cubic-bezier(0.22,0.61,0.36,1)';
const WIPE_FONT_WAIT_CAP_MS = 150;

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function wr(n: number) {
  return Math.round(n * 10) / 10;
}

// Open Catmull-Rom -> cubic bezier through a left-to-right run of points.
function wipeSmoothPath(pts: { x: number; y: number }[]) {
  let d = 'M ' + wr(pts[0].x) + ' ' + wr(pts[0].y);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6,
      c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6,
      c2y = p2.y - (p3.y - p1.y) / 6;
    d += ' C ' + wr(c1x) + ' ' + wr(c1y) + ' ' + wr(c2x) + ' ' + wr(c2y) + ' ' + wr(p2.x) + ' ' + wr(p2.y);
  }
  return d;
}

function buildWaveSvg(seed: number) {
  const w = 1000;
  const rng = mulberry32(Math.floor(seed) + 11);
  const offsets: number[] = [];
  for (let k = 0; k < WIPE_POINTS; k++) offsets.push((rng() * 2 - 1) * WIPE_JITTER_PX);
  offsets[0] *= 0.35;
  offsets[WIPE_POINTS - 1] *= 0.35; // settle at the screen edges, no seam glitch

  let paths = '';
  WIPE_LAYERS.forEach((layer) => {
    const pts = [];
    for (let k = 0; k < WIPE_POINTS; k++) {
      pts.push({ x: (k / (WIPE_POINTS - 1)) * w, y: layer.depth + offsets[k] });
    }
    const d = wipeSmoothPath(pts) + ' L ' + w + ' ' + WIPE_BAND + ' L 0 ' + WIPE_BAND + ' Z';
    paths += '<path d="' + d + '" fill="' + layer.color + '"></path>';
  });
  return (
    '<svg viewBox="0 0 ' +
    w +
    ' ' +
    WIPE_BAND +
    '" width="100%" height="' +
    WIPE_BAND +
    '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">' +
    paths +
    '</svg>'
  );
}

function removeExistingWipe(doc: Document) {
  const existing = doc.getElementById(WIPE_WRAP_ID);
  if (existing) existing.remove();
}

// panel: absolute, anchored to the wrap's bottom, taller than the viewport by
// WIPE_BAND so translateY(0%) fully covers and translateY(100%) is fully hidden.
function buildWipeContainer(doc: Document, seed: number, startShown: boolean): HTMLElement {
  removeExistingWipe(doc);
  const wrap = doc.createElement('div');
  wrap.id = WIPE_WRAP_ID;
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:fixed;inset:0;z-index:2147483647;pointer-events:none;overflow:hidden;';

  const panel = doc.createElement('div');
  panel.style.cssText =
    'position:absolute;left:0;right:0;bottom:0;height:calc(100vh + ' +
    WIPE_BAND +
    'px);' +
    'transform:translateY(' +
    (startShown ? '0%' : '100%') +
    ');will-change:transform;';

  const wave = doc.createElement('div');
  wave.style.cssText = 'width:100%;height:' + WIPE_BAND + 'px;';
  wave.innerHTML = buildWaveSvg(seed);

  const body = doc.createElement('div');
  body.style.cssText =
    'position:absolute;left:0;right:0;top:' + WIPE_BAND + 'px;bottom:0;background:' + WIPE_BODY_COLOR + ';';

  panel.appendChild(wave);
  panel.appendChild(body);
  wrap.appendChild(panel);
  (doc.body || doc.documentElement).appendChild(wrap);
  return panel;
}

function waitForPaint(doc: Document, cb: () => void) {
  const fontsReady = (doc.fonts && doc.fonts.ready) || Promise.resolve();
  Promise.race([fontsReady, new Promise((res) => setTimeout(res, WIPE_FONT_WAIT_CAP_MS))])
    .catch(() => {})
    .then(() => requestAnimationFrame(() => requestAnimationFrame(cb)));
}

// The panel currently covering the screen, held between the cover and reveal
// halves so the exact wave crest that came up is the one that goes back down.
let activePanel: HTMLElement | null = null;

function runWipeCover(doc: Document, seed: number, onDone: () => void) {
  const panel = buildWipeContainer(doc, seed, false);
  activePanel = panel;
  if (!panel.animate) {
    onDone();
    return;
  }
  const anim = panel.animate([{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }], {
    duration: WIPE_COVER_MS,
    easing: WIPE_EASE,
    fill: 'forwards',
  });
  anim.finished.then(onDone).catch(onDone);
}

function runWipeReveal(doc: Document, onDone: () => void) {
  const panel = activePanel;
  if (!panel || !panel.animate) {
    removeExistingWipe(doc);
    activePanel = null;
    onDone();
    return;
  }
  // Wait for the freshly navigated page to paint before washing back down, so
  // nothing unstyled ever flashes behind the receding wave.
  waitForPaint(doc, () => {
    const anim = panel.animate([{ transform: 'translateY(0%)' }, { transform: 'translateY(100%)' }], {
      duration: WIPE_REVEAL_MS,
      easing: WIPE_EASE,
      fill: 'forwards',
    });
    const done = () => {
      removeExistingWipe(doc);
      activePanel = null;
      onDone();
    };
    anim.finished.then(done).catch(done);
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

  // Once the new route has rendered, wash the covering wave back down.
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
        activePanel = null;
        busy.current = false;
        pendingReveal.current = false;
      }
    }
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return null;
}
