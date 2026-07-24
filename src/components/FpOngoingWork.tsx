import Link from 'next/link';
import Icon from './Icon';
import BrandArrow from './BrandArrow';
import { ROUTES } from '@/lib/routes';

/* P2 for the Futureproofing hub page — "Two Ways to Actually Build What the
   Review Found", the What-Gets-Built grid, an anonymised proof snippet, a soft
   "which path" closer, and the end-of-page pricing summary table. Dark-themed to
   sit on the page's Cyprus background.

   Working section label: "Ongoing Work" (anchor id="ongoing-work"). The final
   name for this Phase 2 section is still undecided — placeholder, not final copy. */

const built = [
  { icon: 'database', title: 'Knowledge Base Infrastructure', desc: 'A secure, single source of truth your whole team can trust.' },
  { icon: 'library', title: 'Prompt Library', desc: 'Reusable, tested prompts so good AI use isn’t reinvented each time.' },
  { icon: 'workflow', title: 'Discovering & Building Automations', desc: 'The repetitive work, found and taken off your team’s plate.' },
  { icon: 'settings-2', title: 'Reworking Processes Around AI', desc: 'Not bolting AI onto old habits — reshaping how the work flows.' },
  { icon: 'graduation-cap', title: 'Teaching Teams', desc: 'Hands-on training so people can actually use what’s built.' },
  { icon: 'package', title: 'Developing Resources', desc: 'The guides, templates and guardrails that keep it all running.' },
].map((b, i) => ({ ...b, delay: (i % 3) * 90 }));

const pricingRows = [
  { stage: 'The Review', phase: 'Phase 1', price: 'From £2,500', note: 'Fixed price, typically 4–5 weeks' },
  { stage: 'Strategic Advisory', phase: 'Phase 2 · Path A', price: '£800 +VAT / month', note: 'One structured session a month' },
  { stage: 'Managed Implementation', phase: 'Phase 2 · Path B', price: 'From £800 +VAT / month', note: 'Priced in 10-hour blocks (£800 +VAT each), minimum two blocks; scales with the agreed pace toward your roadmap’s goal' },
];

const eyebrow = 'at-eyebrow';
const anchorOffset = 'var(--fp-anchor-offset, 170px)';
const cardBullet = (light: boolean, text: string) => (
  <span key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, color: light ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.82)' }}>
    <Icon name="check" size={15} style={{ color: 'var(--at-turquoise-light)', flex: 'none', marginTop: 2 }} />{text}
  </span>
);

export default function FpOngoingWork() {
  return (
    <>
      {/* P2 — TWO WAYS (working label "Ongoing Work") */}
      <section id="ongoing-work" style={{ position: 'relative', zIndex: 1, background: 'transparent', scrollMarginTop: anchorOffset }}>
        <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', padding: '104px 32px 0' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 680, marginBottom: 36 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Phase 2 · Ongoing Work</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff', textWrap: 'balance' }}>Two Ways to Actually Build What the Review Found</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', textWrap: 'pretty' }}>Pick the one that matches how hands-on you want to be. Both draw directly on your roadmap — nothing starts from a blank page. Both are also scoped to the goals the roadmap sets, not an open-ended arrangement.</p>
          </div>

          {/* Bridge line + fork */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div data-reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '13px 24px', fontSize: 15, fontWeight: 700 }}>
              <Icon name="file-check" size={18} style={{ color: 'var(--at-turquoise-light)' }} />
              Fresh from The Review — your roadmap in hand
            </div>
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ width: 320, maxWidth: '80%', height: 56 }} aria-hidden="true">
              <path d="M50 0 C50 34, 22 24, 22 60" fill="none" stroke="#2BBCBA" strokeWidth="1.5" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
              <path d="M50 0 C50 34, 78 24, 78 60" fill="none" stroke="#2BBCBA" strokeWidth="1.5" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          {/* Two paths */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'stretch', paddingBottom: 8 }}>
            {/* Path A */}
            <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '38px 34px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}><Icon name="compass" size={15} />Path A</span>
                <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 700, color: '#fff' }}>Strategic Advisory</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', textWrap: 'pretty' }}>You build, we steer. One structured session a month with AgencyTech as your external AI lead — keeping the roadmap moving and the decisions sound.</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', textWrap: 'pretty' }}>Best suited to two kinds of clients: those who want expert guidance without the cost of full delivery, and those already well-resourced internally (say, an in-house developer) who need a steer to avoid costly wrong turns — the kind of guidance that can save weeks of work heading down the wrong path.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '16px 0', borderTop: '1px solid var(--border-on-dark)', borderBottom: '1px solid var(--border-on-dark)' }}>
                <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>£800</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.72)' }}>+ VAT / month</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['One structured session a month', 'AgencyTech as your external AI lead', 'Available between sessions for problem-solving'].map((t) => cardBullet(false, t))}
              </div>
              <span style={{ marginTop: 'auto', paddingTop: 4, fontSize: 13.5, fontWeight: 600, color: 'var(--at-turquoise-light)' }}>Best when you have the hands, just not the compass.</span>
            </div>

            {/* Path B */}
            <div data-reveal data-reveal-delay={120} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--at-cyprus)', border: '1px solid var(--at-turquoise)', boxShadow: 'var(--shadow-lg)', borderRadius: 'var(--radius-md)', padding: '38px 34px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}><Icon name="wrench" size={15} />Path B</span>
                <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 700, color: '#fff' }}>Managed Implementation</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', textWrap: 'pretty' }}>We build it — alongside your team, not instead of them. Every piece of work is scoped to your roadmap, checked in on regularly, and handed over with training so your team can actually run it, not just inherit it.</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)', textWrap: 'pretty' }}>This is a partnership, not a subscription for its own sake — it’s scoped to your goals and ends when they’re met. Because AgencyTech does the hands-on technical work, what takes your team ten hours might take us one — freeing your people to spend time on the work that actually makes the business money.</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)', textWrap: 'pretty' }}>It also means nothing gets lost between the Review and what follows — AgencyTech already knows your business: its goals, its people, its systems. If things change, the plan can be revisited without starting from scratch.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '16px 0', borderTop: '1px solid var(--border-on-dark)', borderBottom: '1px solid var(--border-on-dark)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>£800</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.72)' }}>+ VAT / 10-hr block</span>
                </div>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.62)' }}>Minimum two blocks (£1,600 +VAT). Blocks per month are set by the pace needed to hit your roadmap’s goal — scoped to the work, not a flat monthly subscription.</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Built and trained with your team, not handed over cold', 'Scaled to your roadmap’s pace, not a flat retainer', 'AgencyTech does the technical legwork so your team doesn’t have to'].map((t) => cardBullet(true, t))}
              </div>
              <span style={{ marginTop: 'auto', paddingTop: 4, fontSize: 13.5, fontWeight: 600, color: 'var(--at-turquoise-light)' }}>Best when you’d rather it just got built — properly, and with you.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GETS BUILT */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '100px 32px 40px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 48 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>What Gets Built</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>The Work, in Practice</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', textWrap: 'pretty' }}>Whichever path you pick, this is the kind of thing that gets made — sequenced from your roadmap, not a menu picked at random.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {built.map((b) => (
              <div key={b.title} data-reveal data-reveal-delay={b.delay} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={b.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700, color: '#fff' }}>{b.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.68)', textWrap: 'pretty' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOT BUILT — anonymised proof snippet */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '80px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span data-reveal className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>What Got Built</span>
          <p data-reveal style={{ margin: 0, fontSize: 23, lineHeight: 1.45, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', textWrap: 'pretty' }}>For a 60+ person design and marketing agency we ran a governed AI rollout end to end — an AI-ready shared drive, custom-trained GPTs for roles across the business, a company-wide training seminar and 1:1 follow-up — and the team reported around four hours a week saved per person.</p>
          <span data-reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <Icon name="check" size={13} style={{ color: 'var(--at-turquoise-light)' }} />Design &amp; marketing agency · 60+ staff · 2025
          </span>
          <Link data-reveal href={ROUTES.futureproofingCaseStudies} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise-light)', textDecoration: 'none', transition: 'gap 200ms ease' }}>See the case studies <BrandArrow variant="light" size={15} /></Link>
        </div>
      </section>

      {/* NOT SURE WHICH PATH — soft closer */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div data-reveal style={{ position: 'relative', maxWidth: 720, margin: '0 auto', padding: '0 32px 96px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
          <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>Not Sure Which Path Fits?</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 480, textWrap: 'pretty' }}>Most conversations start there. We’ll talk it through against your roadmap and point you at the one that actually suits how you work.</p>
          <Link href={ROUTES.contact} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise-light)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Talk it through <BrandArrow variant="light" size={15} /></Link>
        </div>
      </section>

      {/* PRICING SUMMARY */}
      <section id="pricing" style={{ position: 'relative', zIndex: 1, background: 'transparent', scrollMarginTop: anchorOffset }}>
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto', padding: '40px 32px 104px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 40 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Pricing</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>Pricing at a Glance</h2>
          </div>
          <div data-reveal style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="at-keep-grid" style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
                <thead>
                  <tr style={{ background: 'var(--surface-subtle)', borderBottom: '2px solid var(--border-default)' }}>
                    <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Stage</th>
                    <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)', whiteSpace: 'nowrap' }}>Price</th>
                    <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((r, i) => (
                    <tr key={r.stage} style={{ borderBottom: i < pricingRows.length - 1 ? '1px solid var(--border-default)' : 'none' }}>
                      <td style={{ padding: '20px 24px', verticalAlign: 'top' }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{r.stage}</div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--at-turquoise)', marginTop: 3 }}>{r.phase}</div>
                      </td>
                      <td style={{ padding: '20px 24px', verticalAlign: 'top', fontSize: 15.5, fontWeight: 700, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{r.price}</td>
                      <td style={{ padding: '20px 24px', verticalAlign: 'top', fontSize: 14, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
