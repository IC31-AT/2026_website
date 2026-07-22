'use client';

import { useEffect, useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import Icon from './Icon';

/* Single-page case-study browser. The filter pills are plain buttons that swap
   the grid in place via React state — no route change, so no PageWipe wave and
   no separate URLs. Contextual links still deep-link a category through the
   ?category= query param (see initialCategory), and the pills stay in sync if
   that param changes under the page.

   Cards intentionally do NOT use data-reveal: the reveal system in siteMotion
   mutates opacity on the DOM directly and runs once per navigation, which would
   leave filtered-in cards stuck hidden. Here the grid is always visible so
   filtering feels instant. */

export type CaseCategory = 'all' | 'it' | 'futureproofing';

export type CaseDef = {
  tag: string; // 'IT Services' | 'Futureproofing'
  metric: string;
  suffix: string;
  label: string;
  client: string;
  title: string;
  summary: string;
  href: string;
  featured?: boolean;
};

const TABS: { key: CaseCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'it', label: 'IT Services' },
  { key: 'futureproofing', label: 'Futureproofing' },
];

function matchesCategory(tag: string, cat: CaseCategory) {
  if (cat === 'all') return true;
  if (cat === 'it') return tag === 'IT Services';
  return tag === 'Futureproofing';
}

export default function CaseStudiesExplorer({
  cases,
  initialCategory = 'all',
}: {
  cases: CaseDef[];
  initialCategory?: CaseCategory;
}) {
  const [active, setActive] = useState<CaseCategory>(initialCategory);
  // Keep in sync if a nav link changes ?category= while already on the page.
  useEffect(() => {
    setActive(initialCategory);
  }, [initialCategory]);

  const visible = cases
    .filter((c) => matchesCategory(c.tag, active))
    // Featured pinned to the top; everything else keeps its authored order.
    .map((c, i) => ({ c, i }))
    .sort((a, b) => Number(!!b.c.featured) - Number(!!a.c.featured) || a.i - b.i)
    .map(({ c }) => c);

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '168px 32px 64px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', maxWidth: 680, textWrap: 'balance' }}>Case Studies</h1>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 540, textWrap: 'pretty' }}>Every engagement starts with an honest look at what wasn&apos;t working. Here&apos;s what happened next — across IT Services and the Futureproofing Program.</p>
          <div role="tablist" aria-label="Filter case studies" style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            {TABS.map((t) => {
              const on = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(t.key)}
                  data-hover={on ? undefined : 'background: var(--surface-subtle)'}
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: 38,
                    padding: '0 18px',
                    borderRadius: 'var(--radius-pill)',
                    border: on ? '1px solid var(--at-cyprus)' : '1px solid var(--border-default)',
                    background: on ? 'var(--at-cyprus)' : '#fff',
                    fontSize: 13.5,
                    fontWeight: on ? 700 : 600,
                    color: on ? '#fff' : 'var(--text-muted)',
                    transition: 'background 150ms ease, color 150ms ease',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {visible.map((c) => (
              <div key={c.title}>
                <CaseStudyCard tag={c.tag} metric={c.metric} metricSuffix={c.suffix} metricLabel={c.label} client={c.client} title={c.title} summary={c.summary} href={c.href} featured={c.featured} />
              </div>
            ))}
            <div style={{ border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '40px 32px', textAlign: 'center', minHeight: 380 }}>
              <Icon name="file-plus-2" size={28} style={{ color: 'var(--at-faint)' }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>Your Project Here?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 240 }}>More case studies are being written up — and the next one could be yours.</span>
              <a href="#contact" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
