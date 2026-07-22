/* AgencyTech site motion — scroll reveals, count-ups, parallax, testimonial
   crossfade, pinned stack-scroll, sticky categories, loop carousel, branded
   cursor, and hover-style delegation.

   Ported from the design prototype's site-motion.js. All effects mutate the DOM
   directly (no React state) so ambient animations never restart. initMotion()
   is re-run on every client-side navigation; every listener it adds is bound to
   an AbortController signal so teardown() cleans them all up. The branded cursor
   is installed once for the whole session (guarded), independent of navigation. */

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

let controller: AbortController | null = null;
let intervals: ReturnType<typeof setInterval>[] = [];

export function initMotion(root: Document | HTMLElement = document): void {
  teardown();
  controller = new AbortController();
  const signal = controller.signal;

  initReveals(root, signal);
  initCountUps(root, signal);
  initParallax(root, signal);
  initTestimonials(root, signal);
  initStackScroll(root, signal);
  initStickyCategories(root, signal);
  initLoopCarousel(root, signal);
  initHoverDelegation(signal);
  // Custom branded cursor removed — using the native cursor site-wide.
}

export function teardown(): void {
  if (controller) controller.abort();
  controller = null;
  intervals.forEach(clearInterval);
  intervals = [];
}

/* Manually-scrolled carousel that feels infinite. */
function initLoopCarousel(root: Document | HTMLElement, signal: AbortSignal) {
  root.querySelectorAll<HTMLElement>('[data-loop-carousel]').forEach((el) => {
    // The carousel may lay out horizontally (default) or vertically (e.g. the
    // "More From Our Clients" cards on mobile). Pick the scroll axis from the
    // current flex direction so the infinite-loop maths works either way.
    const vertical = getComputedStyle(el).flexDirection === 'column';
    const size = () => (vertical ? el.scrollHeight : el.scrollWidth);
    const client = () => (vertical ? el.clientHeight : el.clientWidth);
    const pos = () => (vertical ? el.scrollTop : el.scrollLeft);
    const setPos = (v: number) => { if (vertical) el.scrollTop = v; else el.scrollLeft = v; };
    const half = () => size() / 2;
    const max = () => size() - client();
    const h = half();
    if (!h) return;
    setPos(h / 2);
    el.addEventListener('scroll', () => {
      const hw = half();
      if (!hw) return;
      if (pos() < 4) setPos(pos() + hw);
      else if (pos() > max() - 4) setPos(pos() - hw);
    }, { passive: true, signal });
  });
}

/* Fade + slide-up on enter, once. Stagger via data-reveal-delay (ms). */
function initReveals(root: Document | HTMLElement, signal: AbortSignal) {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;
  let pending: HTMLElement[] = [];
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return; // already visible — never hide
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    pending.push(el);
  });
  if (!pending.length) return;

  function reveal(el: HTMLElement) {
    const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
    el.style.transition = 'opacity 650ms ' + EASE + ' ' + delay + 'ms, transform 650ms ' + EASE + ' ' + delay + 'ms';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
  function check() {
    if (!pending.length) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.88 || r.bottom < vh) { reveal(el); return false; }
      return true;
    });
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; check(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true, signal });
  window.addEventListener('resize', onScroll, { passive: true, signal });
  check();
}

/* Count 0 -> data-countup when scrolled into view. ~1.1s ease-out. */
function initCountUps(root: Document | HTMLElement, signal: AbortSignal) {
  let pending = Array.from(root.querySelectorAll<HTMLElement>('[data-countup]'));
  if (!pending.length) return;
  function check() {
    if (!pending.length) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * 0.92) { runCount(el); return false; }
      return true;
    });
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; check(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true, signal });
  check();
}

function runCount(el: HTMLElement) {
  const target = parseFloat(el.getAttribute('data-countup') || '0');
  const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
  const dur = 1100;
  const t0 = performance.now();
  function tick(now: number) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(tick);
}

/* Hero photo parallax — moves at ~0.3x scroll speed. Subtle. */
function initParallax(root: Document | HTMLElement, signal: AbortSignal) {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!els.length) return;
  let ticking = false;
  function update() {
    ticking = false;
    const y = window.scrollY;
    if (y > window.innerHeight * 1.5) return;
    els.forEach((el) => {
      const f = parseFloat(el.getAttribute('data-parallax') || '0.3');
      el.style.transform = 'translateY(' + (y * f).toFixed(1) + 'px)';
    });
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true, signal });
}

/* Testimonial crossfade: [data-quotes] with [data-quote] children; [data-quote-dot] dots. */
function initTestimonials(root: Document | HTMLElement, signal: AbortSignal) {
  root.querySelectorAll<HTMLElement>('[data-quotes]').forEach((wrap) => {
    const quotes = Array.from(wrap.querySelectorAll<HTMLElement>('[data-quote]'));
    const dots = Array.from(wrap.querySelectorAll<HTMLElement>('[data-quote-dot]'));
    if (quotes.length < 2) return;
    let i = 0;
    let timer: ReturnType<typeof setInterval>;
    function show(n: number) {
      i = (n + quotes.length) % quotes.length;
      quotes.forEach((q, k) => {
        q.style.transition = 'opacity 500ms ease';
        q.style.opacity = k === i ? '1' : '0';
        q.style.pointerEvents = k === i ? 'auto' : 'none';
      });
      dots.forEach((d, k) => {
        d.style.background = k === i ? 'var(--accent, #069A98)' : 'rgba(0,64,64,0.18)';
      });
    }
    function arm() { clearInterval(timer); timer = setInterval(() => show(i + 1), 6500); intervals.push(timer); }
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); arm(); }, { signal }));
    show(0); arm();
  });
}

/* Pinned stacked-scroll testimonials. */
function initStackScroll(root: Document | HTMLElement, signal: AbortSignal) {
  root.querySelectorAll<HTMLElement>('[data-stack]').forEach((section) => {
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-tcard]'));
    const n = cards.length;
    if (!n) return;
    const PER = 0.58;
    cards.forEach((c) => {
      c.style.transition = 'opacity 480ms cubic-bezier(0.16,1,0.3,1), transform 480ms cubic-bezier(0.16,1,0.3,1)';
      c.style.willChange = 'opacity, transform';
    });
    function sizeSection() {
      section.style.height = (window.innerHeight * (1 + (n - 1) * PER)) + 'px';
    }
    let current = -1;
    function setCard(idx: number) {
      if (idx === current) return;
      current = idx;
      cards.forEach((el, i) => {
        const active = i === idx;
        el.style.opacity = active ? '1' : '0';
        el.style.transform = active ? 'translateY(0)' : 'translateY(' + (i < idx ? -46 : 46) + 'px)';
        el.style.pointerEvents = active ? 'auto' : 'none';
        el.style.zIndex = active ? '3' : '1';
      });
    }
    function update() {
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      const span = section.offsetHeight - vh;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
      setCard(Math.round(p * (n - 1)));
    }
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; update(); });
    }
    sizeSection();
    update();
    window.addEventListener('scroll', onScroll, { passive: true, signal });
    window.addEventListener('resize', () => { sizeSection(); update(); }, { passive: true, signal });
  });
}

/* Sticky-panel categories (Ford-style). */
function initStickyCategories(root: Document | HTMLElement, signal: AbortSignal) {
  root.querySelectorAll<HTMLElement>('[data-sticky-cats]').forEach((wrap) => {
    const visuals = Array.from(wrap.querySelectorAll<HTMLElement>('[data-cat-visual]'));
    const blocks = Array.from(wrap.querySelectorAll<HTMLElement>('[data-cat-block]'));
    if (!visuals.length || !blocks.length) return;
    visuals.forEach((v) => { v.style.transition = 'opacity 450ms ease, transform 450ms ease'; });
    let active = -1;
    function setActive(i: number) {
      if (i === active) return;
      active = i;
      visuals.forEach((v, k) => {
        v.style.opacity = k === i ? '1' : '0';
        v.style.transform = k === i ? 'scale(1)' : 'scale(0.97)';
        v.style.pointerEvents = k === i ? 'auto' : 'none';
      });
      blocks.forEach((b, k) => {
        b.style.transition = 'opacity 350ms ease';
        b.style.opacity = k === i ? '1' : '0.4';
      });
    }
    function update() {
      const line = window.innerHeight * 0.42;
      let idx = 0;
      blocks.forEach((b, k) => {
        const r = b.getBoundingClientRect();
        if (r.top <= line) idx = k;
      });
      setActive(idx);
    }
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; update(); });
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true, signal });
    window.addEventListener('resize', onScroll, { passive: true, signal });
  });
}

/* Delegated hover styling — replaces the prototype's style-hover attribute.
   Elements carry data-hover="prop: value; prop: value"; the declarations are
   applied on pointer-enter and reverted on leave. The element's own transition
   (set in its base style) animates the change. */
function initHoverDelegation(signal: AbortSignal) {
  const parse = (css: string): [string, string][] =>
    css.split(';').map((d) => d.trim()).filter(Boolean).map((d) => {
      const i = d.indexOf(':');
      return [d.slice(0, i).trim(), d.slice(i + 1).trim()] as [string, string];
    });

  document.addEventListener('pointerover', (e) => {
    const t = (e.target as HTMLElement | null)?.closest?.('[data-hover]') as HTMLElement | null;
    if (!t || t.dataset.hoverOn === '1') return;
    t.dataset.hoverOn = '1';
    const prev: Record<string, string> = {};
    parse(t.getAttribute('data-hover') || '').forEach(([prop, val]) => {
      prev[prop] = t.style.getPropertyValue(prop);
      t.style.setProperty(prop, val);
    });
    (t as unknown as { __hoverPrev?: Record<string, string> }).__hoverPrev = prev;
  }, { signal });

  document.addEventListener('pointerout', (e) => {
    const t = (e.target as HTMLElement | null)?.closest?.('[data-hover]') as HTMLElement | null;
    if (!t || t.dataset.hoverOn !== '1') return;
    const related = e.relatedTarget as Node | null;
    if (related && t.contains(related)) return; // still inside
    t.dataset.hoverOn = '';
    const prev = (t as unknown as { __hoverPrev?: Record<string, string> }).__hoverPrev || {};
    Object.keys(prev).forEach((prop) => {
      if (prev[prop]) t.style.setProperty(prop, prev[prop]);
      else t.style.removeProperty(prop);
    });
  }, { signal });
}

/* Branded custom cursor — a filled "blob". Installed once per session.
   Currently disabled (see initMotion) but kept for reference / easy re-enable. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function initCursor() {
  const w = window as unknown as { __atCursor?: boolean };
  if (w.__atCursor) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  w.__atCursor = true;

  const style = document.createElement('style');
  style.textContent = '*{cursor:none !important;}';
  document.head.appendChild(style);

  const DISCS = [
    { size: 22, color: '#004040', hoverOnly: false },
    { size: 17, color: '#016B6B', hoverOnly: true },
    { size: 12, color: '#069A98', hoverOnly: true },
    { size: 7, color: '#2BBCBA', hoverOnly: false },
  ];

  const pos = document.createElement('div');
  pos.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:2147483647;opacity:0;transition:opacity 180ms ease;will-change:transform;';
  const scaler = document.createElement('div');
  scaler.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;transform:scale(1);transition:transform 200ms cubic-bezier(0.16,1,0.3,1);';
  DISCS.forEach((d) => {
    const el = document.createElement('div') as HTMLElement & { _hoverOnly?: boolean };
    el.style.cssText = 'position:absolute;left:' + (-d.size / 2) + 'px;top:' + (-d.size / 2) + 'px;width:' + d.size + 'px;height:' + d.size + 'px;background:' + d.color + ';border-radius:50%;' + (d.hoverOnly ? 'opacity:0;transition:opacity 200ms ease;' : '');
    el._hoverOnly = d.hoverOnly;
    scaler.appendChild(el);
  });
  pos.appendChild(scaler);
  document.body.appendChild(pos);

  let visible = false;
  let hover = false;
  let outT: ReturnType<typeof setTimeout>;
  const CLICKABLE = 'a,button,[role=button],input,select,textarea,label,summary,[data-cursor],[data-quote-dot]';

  function applyHover() {
    scaler.style.transform = hover ? 'scale(1.5)' : 'scale(1)';
    Array.prototype.forEach.call(scaler.children, (el: HTMLElement & { _hoverOnly?: boolean }) => {
      if (el._hoverOnly) el.style.opacity = hover ? '1' : '0';
    });
  }

  window.addEventListener('mousemove', (e) => {
    pos.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    if (!visible) { visible = true; pos.style.opacity = '1'; }
  }, { passive: true });
  window.addEventListener('mouseout', (e) => {
    if (!(e as MouseEvent).relatedTarget) { visible = false; pos.style.opacity = '0'; }
  });
  document.addEventListener('mouseover', (e) => {
    const hit = (e.target as HTMLElement | null)?.closest?.(CLICKABLE);
    if (hit) { clearTimeout(outT); if (!hover) { hover = true; applyHover(); } }
  });
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement | null;
    const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
    const hit = target?.closest?.(CLICKABLE);
    if (hit && !(related && related.closest && related.closest(CLICKABLE))) {
      clearTimeout(outT);
      outT = setTimeout(() => { hover = false; applyHover(); }, 150);
    }
  });
}
