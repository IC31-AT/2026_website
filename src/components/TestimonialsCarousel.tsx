'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import type { Testimonial } from '@/lib/testimonials';

/* Testimonials as a 2-row grid that scrolls left/right: a 2×2 block of cards
   is always in view and you page through the rest with the arrows or a swipe.
   Cards never collapse into a tall vertical column of text. Used on the
   homepage and case-studies page so both share one layout. */
export default function TestimonialsCarousel({
  items,
  eyebrow,
  heading,
  cardBg = 'var(--surface-card)',
}: {
  items: Testimonial[];
  eyebrow: string;
  heading?: string;
  cardBg?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [overflowing, setOverflowing] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setOverflowing(max > 4);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync, { passive: true });
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  const arrowStyle = (enabled: boolean): React.CSSProperties => ({
    width: 44, height: 44, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '50%', border: '1px solid var(--border-strong)', background: cardBg,
    color: 'var(--text-heading)', cursor: enabled ? 'pointer' : 'default', opacity: enabled ? 1 : 0.35,
    transition: 'background 200ms ease, opacity 200ms ease', padding: 0,
  });

  return (
    <>
      <div className="at-tstc-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560 }}>
          <span className="at-eyebrow">{eyebrow}</span>
          {heading && (
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>{heading}</h2>
          )}
        </div>
        {overflowing && (
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" aria-label="Previous testimonials" onClick={() => page(-1)} disabled={!canPrev}
              data-hover={canPrev ? 'background: var(--surface-subtle)' : undefined} style={arrowStyle(canPrev)}>
              <Icon name="arrow-left" size={18} />
            </button>
            <button type="button" aria-label="Next testimonials" onClick={() => page(1)} disabled={!canNext}
              data-hover={canNext ? 'background: var(--surface-subtle)' : undefined} style={arrowStyle(canNext)}>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        )}
      </div>

      <div ref={trackRef} className="at-tstc-track">
        {items.map((t) => (
          <article key={t.name} className="at-tstc-card" style={{ display: 'flex', flexDirection: 'column', gap: 22, background: cardBg, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '30px 34px' }}>
            <div className="at-tstc-main" style={{ display: 'flex', gap: 26, flex: 1 }}>
              {/* PERSON — left */}
              <div className="at-tstc-person" style={{ flex: '0 0 152px', display: 'flex', flexDirection: 'column', gap: 3, borderRight: '1px solid var(--border-default)', paddingRight: 24 }}>
                {t.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.logo} alt={t.company} style={{ height: 28, width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left', alignSelf: 'flex-start', marginBottom: 12 }} />
                ) : (
                  <Icon name="quote" size={26} color="var(--at-turquoise)" style={{ opacity: 0.45, marginBottom: 12 }} />
                )}
                <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>{t.name}</span>
                {t.title && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{t.title}</span>}
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--at-turquoise)' }}>{t.company}</span>
              </div>
              {/* QUOTE — right */}
              <blockquote className="at-tstc-body" style={{ margin: 0, alignSelf: 'center', fontSize: 15, lineHeight: 1.62, fontWeight: 500, color: 'var(--text-body)', textWrap: 'pretty' }}>{t.quote}</blockquote>
            </div>
            {/* FOOTER — tag bottom-left, case-study link bottom-right */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>{t.tag}</span>
              {t.caseStudyHref && (
                <Link href={t.caseStudyHref} data-hover="gap: 9px" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>
                  Read the case study <Icon name="arrow-right" size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
