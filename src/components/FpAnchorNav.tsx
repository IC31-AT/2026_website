'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

/* Futureproofing page section nav. Sits inline below the testimonial and
   becomes sticky once scrolled past, pinning directly under the fixed site
   navbar (whose height it measures at runtime). It also publishes a
   --fp-anchor-offset CSS variable so in-page anchor targets can set an equal
   scroll-margin-top and land clear of both bars.

   NOTE: "Ongoing Work" is a working label for the Phase 2 section — the final
   name is still undecided. */
type Item = { id?: string; label: string; href: string; external?: boolean };

const ITEMS: Item[] = [
  { id: 'review', label: 'Review', href: '#review' },
  { id: 'ongoing-work', label: 'Ongoing Work', href: '#ongoing-work' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: ROUTES.futureproofingCaseStudies, external: true },
  // FAQ anchor intentionally held back until FAQ content exists (Round 2).
];

const SPY_IDS = ITEMS.filter((i) => i.id).map((i) => i.id as string);

export default function FpAnchorNav() {
  const barRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(116);
  const [active, setActive] = useState('');

  // Measure the fixed site navbar (+ its audit bar) and expose the combined
  // header/anchor-bar height as a scroll-margin offset for the targets.
  useEffect(() => {
    const measure = () => {
      // On mobile the site nav collapses to a floating burger that takes no
      // layout space above the content, so the bar pins to the very top of the
      // screen (top: 0) and sits behind the burger. On desktop it pins beneath
      // the fixed navbar, whose height we measure at runtime.
      const mobile = window.matchMedia('(max-width: 900px)').matches;
      const audit = document.querySelector('.at-audit-bar');
      const header = (audit?.parentElement as HTMLElement | null);
      const hh = mobile ? 0 : (header ? Math.round(header.getBoundingClientRect().height) : 116);
      const bh = barRef.current ? Math.round(barRef.current.getBoundingClientRect().height) : 52;
      setHeaderH(hh);
      document.documentElement.style.setProperty('--fp-anchor-offset', `${hh + bh + 8}px`);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Scrollspy: highlight the in-page section whose top has passed the pin line.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const line = headerH + 90;
      let cur = '';
      for (const id of SPY_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      }
      setActive(cur);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerH]);

  return (
    <div
      ref={barRef}
      className="at-fp-anchor"
      style={{
        position: 'sticky', top: headerH, zIndex: 500,
        background: 'rgba(2,42,42,0.86)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--border-on-dark)', borderBottom: '1px solid var(--border-on-dark)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 32px)' }}>
        <nav aria-label="Section navigation" style={{ display: 'flex', gap: 6, alignItems: 'center', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {ITEMS.map((item) => {
            const isActive = !item.external && item.id === active;
            const common: React.CSSProperties = {
              display: 'inline-flex', alignItems: 'center', gap: 7, flex: 'none', whiteSpace: 'nowrap',
              padding: '15px 16px', fontSize: 14, fontWeight: 700, textDecoration: 'none',
              color: isActive ? '#fff' : 'rgba(255,255,255,0.62)',
              borderBottom: `2px solid ${isActive ? 'var(--at-turquoise)' : 'transparent'}`,
              transition: 'color 200ms ease, border-color 200ms ease',
            };
            if (item.external) {
              return (
                <Link key={item.label} href={item.href} data-hover="color: #fff" style={common}>
                  {item.label}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
                </Link>
              );
            }
            return (
              <a key={item.label} href={item.href} data-hover="color: #fff" style={common}>{item.label}</a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
