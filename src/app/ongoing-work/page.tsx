import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { ROUTES, dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Ongoing Work',
  description:
    'Two ways to actually build what the Review found — Strategic Advisory or Managed Implementation, both drawn directly from your roadmap.',
};

const built = [
  { icon: 'database', title: 'Knowledge Base Infrastructure', desc: 'A secure, single source of truth your whole team can trust.', delay: 0 },
  { icon: 'library', title: 'Prompt Library', desc: 'Reusable, tested prompts so good AI use isn’t reinvented each time.', delay: 90 },
  { icon: 'workflow', title: 'Discovering & Building Automations', desc: 'The repetitive work, found and taken off your team’s plate.', delay: 180 },
  { icon: 'settings-2', title: 'Reworking Processes Around AI', desc: 'Not bolting AI onto old habits — reshaping how the work flows.', delay: 0 },
  { icon: 'graduation-cap', title: 'Teaching Teams', desc: 'Hands-on training so people can actually use what’s built.', delay: 90 },
  { icon: 'package', title: 'Developing Resources', desc: 'The guides, templates and guardrails that keep it all running.', delay: 180 },
];

const eyebrow = 'at-eyebrow';

export default function OngoingWorkPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="fp" theme="light" />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '176px 32px 88px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>
            <span style={{ width: 7, height: 7, background: 'var(--at-turquoise)', borderRadius: 2, transform: 'rotate(45deg)' }} />
            Phase 2 · Ongoing Work
          </span>
          <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Two Ways to Actually Build What the Review Found</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 560, textWrap: 'pretty' }}>Pick the one that matches how hands-on you want to be. Both draw directly on your roadmap — nothing starts from a blank page.</p>
        </div>
      </section>

      {/* FORK DIAGRAM */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '20px 32px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div data-reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: 'var(--at-cyprus)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '13px 24px', fontSize: 15, fontWeight: 700 }}>
            <Icon name="file-check" size={18} style={{ color: 'var(--at-turquoise-light)' }} />
            Fresh from The Review — your roadmap in hand
          </div>
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ width: 320, maxWidth: '80%', height: 56 }}>
            <path d="M50 0 C50 34, 22 24, 22 60" fill="none" stroke="#069A98" strokeWidth="1.5" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
            <path d="M50 0 C50 34, 78 24, 78 60" fill="none" stroke="#069A98" strokeWidth="1.5" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </section>

      {/* TWO PATHS */}
      <section id="paths" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'stretch' }}>
          {/* Path A */}
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '38px 34px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>
                <Icon name="compass" size={15} />Path A
              </span>
              <h2 style={{ margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 700, color: 'var(--text-heading)' }}>Strategic Advisory</h2>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>You build, we steer. One structured session a month with AgencyTech as your external AI lead — keeping the roadmap moving and the decisions sound.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '16px 0', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
              <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£800</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)' }}>+ VAT / month</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'var(--text-body)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />One structured session a month
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'var(--text-body)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />AgencyTech as your external AI lead
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'var(--text-body)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />Lower cost, keeps momentum
              </span>
            </div>
            <span style={{ marginTop: 'auto', fontSize: 13, fontWeight: 600, color: 'var(--at-faint)' }}>Best when you have the hands, just not the compass.</span>
          </div>

          {/* Path B */}
          <div data-reveal data-reveal-delay={120} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20, background: 'var(--at-cyprus)', border: '1px solid var(--at-cyprus)', borderRadius: 'var(--radius-md)', padding: '38px 34px', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/blob-scene-3.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>
                <Icon name="wrench" size={15} />Path B
              </span>
              <h2 style={{ margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 700, color: '#fff' }}>Managed Implementation</h2>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>We build it. AgencyTech does the hands-on work — knowledge base, automations, process changes and training — against your roadmap.</p>
            </div>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 4, padding: '16px 0', borderTop: '1px solid var(--border-on-dark)', borderBottom: '1px solid var(--border-on-dark)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 22, lineHeight: 1, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>From</span>
                <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>£800</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.72)' }}>+ VAT / month</span>
              </div>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Scaled to the work — priced against your roadmap</span>
            </div>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.9)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise-light)', flex: 'none', marginTop: 2 }} />We do the building, securely
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.9)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise-light)', flex: 'none', marginTop: 2 }} />Transparent, scalable pricing
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.9)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--at-turquoise-light)', flex: 'none', marginTop: 2 }} />Drawn straight from your roadmap
              </span>
            </div>
            <span style={{ position: 'relative', marginTop: 'auto', fontSize: 13, fontWeight: 600, color: 'var(--at-turquoise-light)' }}>Best when you’d rather it just got built.</span>
          </div>
        </div>
      </section>

      {/* WHAT GETS BUILT */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 32px 100px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620, marginBottom: 48 }}>
            <span className={eyebrow}>What Gets Built</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>The Work, in Practice</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Whichever path you pick, this is the kind of thing that gets made — sequenced from your roadmap, not a menu picked at random.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {built.map((b) => (
              <div key={b.title} data-reveal data-reveal-delay={b.delay} style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}>
                  <Icon name={b.icon} size={20} />
                </span>
                <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700, color: 'var(--text-heading)' }}>{b.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE SNIPPET */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span className={eyebrow}>What Got Built</span>
          <p style={{ margin: 0, fontSize: 23, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>For a 60+ person design and marketing agency we ran a governed AI rollout end to end — an AI-ready shared drive, custom-trained GPTs for roles across the business, a company-wide training seminar and 1:1 follow-up — and the team reported around four hours a week saved per person.</p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--at-faint)' }}>
            <Icon name="check" size={13} style={{ color: 'var(--at-turquoise)' }} />Design &amp; marketing agency · 60+ staff · 2025
          </span>
          <Link href={dcHref('Futureproofing Case Studies.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>See the case studies <BrandArrow variant="dark" size={15} /></Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Not Sure Which Path Fits?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Most conversations start there. We’ll talk it through against your roadmap and point you at the one that actually suits how you work.</p>
            <Link href={ROUTES.bookTheReview} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Talk through which path fits <BrandArrow variant="light" size={15} /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
