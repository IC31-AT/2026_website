'use client';

import { useState } from 'react';
import ImageSlot from './ImageSlot';
import { photoUrl } from '@/lib/media';

/* Meet the Team — a grid of member cards. Photo, name, role and a one-line
   personality snapshot are always visible; "Read Bio" expands the full bio
   inline. Multi-open by design: expanding one card never collapses another
   (each is independent). Height animates via the same grid-rows 0fr->1fr trick
   used by <FaqAccordion>, so it stays smooth without measuring. Card reveals
   use data-reveal (reduced-motion handled globally).

   Bios contain bracketed placeholders — real names, roles and copy are filled
   in before launch. */

type Member = {
  name: string;
  role: string;
  snapshot: string;
  bio: string;
  photo: string;
};

const TEAM: Member[] = [
  {
    name: 'Ishaan',
    role: '[Role / title]',
    snapshot: '[One-line personality snapshot]',
    bio: '[Full bio — a short paragraph on background, what they do at AgencyTech, and something human. Replace before launch.]',
    photo: photoUrl('team/ishaan.jpg'),
  },
  {
    name: 'Casey',
    role: '[Role / title]',
    snapshot: '[One-line personality snapshot]',
    bio: '[Full bio — a short paragraph on background, what they do at AgencyTech, and something human. Replace before launch.]',
    photo: photoUrl('team/casey.jpg'),
  },
  {
    name: 'Ben',
    role: '[Role / title]',
    snapshot: '[One-line personality snapshot]',
    bio: '[Full bio — a short paragraph on background, what they do at AgencyTech, and something human. Replace before launch.]',
    photo: photoUrl('team/ben.jpg'),
  },
];

export default function TeamBios() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <section style={{ background: 'var(--at-white)', borderTop: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '104px 32px 96px' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 48 }}>
          <span className="at-eyebrow">Meet the Team</span>
          <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>The People Behind AgencyTech</h2>
        </div>

        <div className="at-keep-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24, alignItems: 'start' }}>
          {TEAM.map((m, i) => {
            const isOpen = !!open[i];
            const panelId = `team-bio-${i}`;
            const btnId = `team-btn-${i}`;
            return (
              <div
                key={i}
                data-reveal
                data-reveal-delay={i * 90}
                style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                <ImageSlot src={m.photo} alt={m.name} placeholder={`Photo — ${m.name}`} sizes="(max-width: 900px) 100vw, 340px" radius={0} style={{ width: '100%', aspectRatio: '4 / 3', minHeight: 0, borderRadius: 0, border: 'none', borderBottom: '1px solid var(--border-default)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '20px 20px 4px' }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--text-heading)' }}>{m.name}</h3>
                  <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{m.role}</span>
                  <p style={{ margin: '4px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{m.snapshot}</p>
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 320ms cubic-bezier(0.16,1,0.3,1)' }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ margin: 0, padding: '12px 20px 4px', fontSize: 14, lineHeight: 1.65, color: 'var(--text-body)', textWrap: 'pretty' }}>{m.bio}</p>
                  </div>
                </div>

                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen((prev) => ({ ...prev, [i]: !prev[i] }))}
                  data-hover="color: var(--accent-hover)"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, margin: '10px 20px 20px', padding: 0, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)', transition: 'color 200ms ease', alignSelf: 'flex-start' }}
                >
                  {isOpen ? 'Hide Bio' : 'Read Bio'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 300ms ease' }}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
