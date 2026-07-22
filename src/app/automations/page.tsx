import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Automations',
  description:
    'A half-day session that gets your management team aligned on what’s actually worth automating first — before anyone commits to building anything.',
};

const items = [
  { icon: 'layout-grid', title: 'Live Prioritisation', desc: 'We work through a full board of deliverables and opportunities with your management team, live.', delay: 0 },
  { icon: 'git-branch', title: 'Priority Workflows per Function', desc: 'What’s realistic for each part of the business — not just what’s on a wishlist.', delay: 90 },
  { icon: 'list-checks', title: 'A Shared Now / Next / Later', desc: 'One agreed view the whole team builds together and actually owns.', delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function AutomationsPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="fp" theme="light" />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '176px 32px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>
            <span style={{ width: 7, height: 7, background: 'var(--at-turquoise)', borderRadius: 2, transform: 'rotate(45deg)' }} />
            Start Light · The Activation Workshop
          </span>
          <h1 style={{ margin: 0, fontSize: 50, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Not Ready for the Full Engagement? Start With Half a Day.</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 560, textWrap: 'pretty' }}>A half-day session that gets your management team aligned on what’s actually worth automating first — before anyone commits to building anything.</p>
        </div>
      </section>

      {/* HALF-DAY, ONE OUTCOME */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 32px 96px' }}>
          <div data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'center', background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 44px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
              <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--at-cyprus)', color: 'var(--at-turquoise-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="clock" size={24} /></span>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-heading)' }}>Half a day</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>One room, your management team</span>
            </div>
            <span style={{ color: 'var(--at-faint)' }}><Icon name="arrow-right" size={24} /></span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
              <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--at-turquoise)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="list-checks" size={24} /></span>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-heading)' }}>One outcome</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>An agreed Now / Next / Later view</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '100px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620, marginBottom: 44 }}>
            <span className={eyebrow}>What Happens in the Room</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Prioritise Together, Leave With a Plan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {items.map((it) => (
              <div key={it.title} data-reveal data-reveal-delay={it.delay} style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={it.icon} size={21} /></span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>{it.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING + CTA */}
      <section id="contact" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-muted)' }}>~</span>
              <span style={{ fontSize: 56, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£800</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-muted)' }}>+ VAT</span>
            </div>
            <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>Half-day session, plus a follow-up report.</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 34, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Get the Room Aligned</h2>
            <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 4, transition: 'background 200ms ease, transform 200ms ease' }}>Enquire About a Workshop <Icon name="arrow-right" size={17} /></Link>
            <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8, marginTop: 8, fontSize: 12, lineHeight: 1.5, color: 'var(--at-faint)', maxWidth: 460, textAlign: 'left' }}><Icon name="info" size={13} style={{ flex: 'none', marginTop: 2 }} />Working draft: this page describes the Activation Workshop format. If Automations should cover a broader menu of one-off projects, this scope is still to be confirmed.</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
