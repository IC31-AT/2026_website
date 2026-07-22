'use client';

import { useState } from 'react';

/* Shared FAQ accordion — used at the foot of the Home, IT Services and About
   pages. Single-open behaviour; each row animates height via the grid-rows
   0fr→1fr trick so it stays smooth without measuring. */

type Faq = { q: string; a: string };

const DEFAULT_FAQS: Faq[] = [
  {
    q: 'What makes AgencyTech different from other IT providers?',
    a: 'We combine technical expertise with real business experience. We’ve run complex operations ourselves, so we understand both the technology and the human side of keeping a creative or marketing agency running smoothly.',
  },
  {
    q: 'Do you only work with creative agencies, or other businesses too?',
    a: 'We work exclusively with creative and marketing agencies. It’s our specialism, and it means we understand your workflows, tools, and pressures better than a generalist IT provider ever could.',
  },
  {
    q: 'Can you help us set up or migrate to new tools?',
    a: 'Yes, our project team can audit your current systems, recommend the best-fit tools, and handle migrations or integrations. If you already have clear requirements, we can work on the implementation.',
  },
  {
    q: 'We already have IT support — how do you work alongside or replace them?',
    a: 'We’re flexible. Some clients use us to supplement their existing IT support, while others fully outsource to us. Either way, we integrate smoothly with your team and processes.',
  },
  {
    q: 'What size of company do you usually work with?',
    a: 'We work with creative and marketing agencies of 15–150 people. That’s the sweet spot where IT and security needs get serious, but a full in-house team doesn’t yet make sense.',
  },
  {
    q: 'How does your pricing work, and what’s the setup fee for?',
    a: 'Pricing is simple: a flat monthly rate per user, with a lower rate for freelancers. There’s no charge for onboarding, migrations, or getting your systems secure and consistent from day one. If you have a one-off project, that will be scoped and priced separately.',
  },
  {
    q: 'Do you provide onsite support, or is everything remote?',
    a: 'Most support is remote for speed and efficiency, but we can provide onsite visits when needed, especially for local clients in Bristol and the South West.',
  },
  {
    q: 'Can you train our team on using new tools or AI?',
    a: 'Yes. We run workshops and tailored training sessions so your staff feel confident using new systems, from cybersecurity awareness to AI workflows.',
  },
];

export default function FaqAccordion({
  items = DEFAULT_FAQS,
  eyebrow = 'FAQ',
  heading = 'Frequently Asked Questions',
}: {
  items?: Faq[];
  eyebrow?: string;
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: '#fff', borderTop: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '104px 32px 112px' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 48 }}>
          <span className="at-eyebrow">{eyebrow}</span>
          <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)', textWrap: 'balance' }}>{heading}</h2>
        </div>

        <div data-reveal style={{ borderTop: '1px solid var(--border-default)' }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--border-default)' }}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-hover="color: var(--at-turquoise)"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                    width: '100%', padding: '24px 4px', background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', textAlign: 'left', color: 'var(--text-heading)',
                    fontSize: 18, fontWeight: 700, lineHeight: 1.35, transition: 'color 200ms ease',
                  }}
                >
                  <span>{item.q}</span>
                  <svg
                    width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flex: 'none', color: 'var(--at-turquoise)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 300ms ease' }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 300ms ease' }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ margin: 0, padding: '0 4px 26px', maxWidth: 680, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
