'use client';

import { useEffect, useRef, useState } from 'react';
import { dataUri } from '@/lib/blobscene';

/* Brand intro overlay — icon drops in, lockup slides, wordmark wipes on, corner
   blobs spread, then the panel wipes up and removes itself. Ported from the
   "AgencyTech Intro Overlay" prototype. frequency: how often it shows. */
export default function IntroOverlay({ frequency = 'session' }: { frequency?: 'session' | 'always' | 'once' }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLImageElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const [bgs, setBgs] = useState<{ tr: string; bl: string }>({ tr: '', bl: '' });

  useEffect(() => {
    const alreadySeen = () => {
      try {
        if (frequency === 'always') return false;
        const store = frequency === 'once' ? window.localStorage : window.sessionStorage;
        return store.getItem('at_intro_seen') === '1';
      } catch { return false; }
    };
    const markSeen = () => {
      try {
        if (frequency === 'always') return;
        const store = frequency === 'once' ? window.localStorage : window.sessionStorage;
        store.setItem('at_intro_seen', '1');
      } catch { /* ignore */ }
    };
    const hideRoot = () => { if (rootRef.current) rootRef.current.style.display = 'none'; };

    if (alreadySeen()) { hideRoot(); return; }
    markSeen();

    const ramp = ['#004B4B', '#016B6B', '#038281', '#069A98', '#2BBCBA'];
    const base = 1 + Math.floor(Math.random() * 200);
    const gen = (corner: 'tr' | 'bl', seed: number) => 'url("' + dataUri({
      width: 900, height: 900, corner, layers: 5, points: 6,
      jitter: 0.02, spread: 0.66, palette: { bg: 'transparent', ramp }, seed,
    }) + '")';
    setBgs({ tr: gen('tr', base), bl: gen('bl', base + 17) });

    const anims: Animation[] = [];
    let t: ReturnType<typeof setTimeout>;
    const safety = setTimeout(hideRoot, 6000);

    const play = async () => {
      const mark = markRef.current, word = wordRef.current, lockup = lockupRef.current, overlay = overlayRef.current;
      if (!mark || !word || !lockup || !overlay) return;
      const EO = 'cubic-bezier(0.22,0.61,0.36,1)';
      const push = (a: Animation) => { anims.push(a); return a; };
      try { if (document.fonts) await document.fonts.ready; } catch { /* ignore */ }
      if (!markRef.current) return;

      overlay.style.transform = 'translateY(0)';
      overlay.querySelectorAll<HTMLElement>('[data-blob]').forEach((el) => { el.style.opacity = '0'; });

      const cs = getComputedStyle(lockup);
      const gap = parseFloat(cs.columnGap || cs.gap) || 24;
      const wordW = word.getBoundingClientRect().width;
      const shift = (gap + wordW) / 2;

      push(mark.animate(
        [{ opacity: 0, transform: 'translateY(-58px) scale(.86)' }, { opacity: 1, transform: 'translateY(0px) scale(1)' }],
        { duration: 460, delay: 120, easing: EO, fill: 'both' }));
      push(lockup.animate(
        [{ transform: `translateX(${shift}px)` }, { transform: 'translateX(0px)' }],
        { duration: 480, delay: 600, easing: EO, fill: 'both' }));
      push(word.animate(
        [{ clipPath: 'inset(-0.35em 100% -0.35em 0)' }, { clipPath: 'inset(-0.35em 0% -0.35em 0)' }],
        { duration: 500, delay: 640, easing: EO, fill: 'both' }));
      push(word.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, delay: 640, easing: 'ease-out', fill: 'both' }));

      const from: Record<string, [number, number]> = { tr: [28, -28], bl: [-28, 28] };
      overlay.querySelectorAll<HTMLElement>('[data-blob]').forEach((el, i) => {
        const o = from[el.getAttribute('data-corner') || ''] || [0, 0];
        push(el.animate(
          [{ opacity: 0, transform: `translate(${o[0]}%,${o[1]}%) scale(.72)` }, { opacity: 1, transform: 'translate(0%,0%) scale(1)' }],
          { duration: 760, delay: 600 + i * 110, easing: EO, fill: 'both' }));
      });

      const up = push(overlay.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-106%)' }],
        { duration: 660, delay: 1820, easing: 'cubic-bezier(0.76,0,0.24,1)', fill: 'forwards' }));
      up.finished.then(hideRoot).catch(() => {});
    };

    t = setTimeout(play, 60);
    return () => {
      clearTimeout(t);
      clearTimeout(safety);
      anims.forEach((a) => { try { a.cancel(); } catch { /* ignore */ } });
    };
  }, [frequency]);

  return (
    <div ref={rootRef} style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', fontFamily: "'Manrope','Montserrat',system-ui,sans-serif" }}>
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: '#004040', overflow: 'hidden', pointerEvents: 'auto' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div data-blob data-corner="tr" style={{ position: 'absolute', top: 0, right: 0, width: 'min(37vw,378px)', height: 'min(37vw,378px)', opacity: 0, willChange: 'transform,opacity', backgroundImage: bgs.tr, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }} />
          <div data-blob data-corner="bl" style={{ position: 'absolute', bottom: 0, left: 0, width: 'min(61vw,630px)', height: 'min(61vw,630px)', opacity: 0, willChange: 'transform,opacity', backgroundImage: bgs.bl, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '52%', transform: 'translate(-50%,-50%)', zIndex: 3 }}>
          <div ref={lockupRef} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,2.2vw,28px)', transform: 'translateX(0px)', padding: '0 16px', maxWidth: '100vw', boxSizing: 'border-box' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={markRef} data-mark src="/assets/mark-white.png" alt="" style={{ height: 'clamp(42px,8.4vw,100px)', width: 'auto', display: 'block', flex: 'none' }} />
            <div ref={wordRef} data-word style={{ fontWeight: 800, fontSize: 'clamp(30px,6.6vw,82px)', lineHeight: 1, letterSpacing: '-0.025em', whiteSpace: 'nowrap', clipPath: 'inset(-0.35em 0% -0.35em 0)' }}>
              <span style={{ color: '#FFFFFF' }}>Agency</span><span style={{ color: '#2BBCBA' }}>Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
