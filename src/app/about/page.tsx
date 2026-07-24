import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import FaqAccordion from '@/components/FaqAccordion';
import TeamBios from '@/components/TeamBios';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'AgencyTech is the dedicated technology and growth partner for creative and marketing agencies — proactive IT, practical strategy, and embedded support that keeps you ahead.',
};

const eyebrow = 'at-eyebrow';

/* Our Story — the milestones, oldest first, rendered as a horizontal timeline. */
const milestones = [
  { year: '2017', title: 'Founded', desc: 'Casey starts repairing phones for students at University of Bristol, a venture which grows over the years to become Brisfix.' },
  { year: '2020', title: 'First Major Award', desc: 'Brisfix wins first place in Bristol New Enterprise Competition (Development Stage).' },
  { year: '2022', title: 'Expansion to 4 Locations', desc: 'Now employing over 20 students/graduates, Brisfix rebrands and expands to operate from 4 universities in the South West.' },
  { year: '2024', title: 'Business Services', desc: 'Word began to spread and we soon had enquiries from businesses asking for help. We decided to start offering specific services tailored towards businesses.' },
  { year: '2025', title: 'Featured in the BBC', desc: 'BBC News runs a story on FixMyTek, highlighting our growth and social initiatives, such as repair cafes we help to run.' },
  { year: '2025', title: 'AgencyTech is Born', desc: "After deciding it's time to pivot fully to business services, the FixMyTek team start AgencyTech, committing fully to offering strategic tech partnership." },
];

/* The founding narrative, split into paragraphs. */
const storyParagraphs = [
  'What began as a side-hustle fixing laptops for fellow students quickly grew into a national, award-winning business. We expanded to multiple full-time repair stores, trained over 40 technicians, and repaired more than 10,000 devices.',
  'Before long, our team was drowning in repetitive, manual tasks. Management was spending all day answering minor questions instead of focusing on strategy. We were being blocked by our own success.',
  'We learned first-hand that technology is either a blocker or an enabler, so we mastered the art of making it an enabler. That expertise in cutting through chaos, automating manual work, and building systems that scale is the foundation of everything we do today.',
];

/* Headline stats pulled from the founding story. The three counts animate up
   from 0 on scroll into view (data-countup); the founding year stays static —
   counting a year up from zero reads oddly. */
const stats: { num?: number; suffix?: string; display: string; label: string }[] = [
  { num: 40, suffix: '+', display: '40', label: 'Technicians trained' },
  { num: 10000, suffix: '+', display: '10,000', label: 'Devices repaired' },
  { num: 4, suffix: '', display: '4', label: 'University locations' },
  { display: '2017', label: 'Where it started' },
];

/* Our Approach — four pillars. */
const approachCards = [
  {
    icon: 'compass',
    title: 'We Start With the Business, Not the Tools',
    desc: 'Most AI advice begins with which tool to buy. We begin with whether your data, systems and processes can actually hold the weight of what you’re about to build on them. That’s the difference between AI that compounds and AI that quietly collapses.',
  },
  {
    icon: 'wrench',
    title: 'We’ve Built and Broken This Ourselves',
    desc: 'Before we advised anyone else, we ran and scaled a real operation of our own — trained a team, watched growth outpace our own systems, and had to fix it. We’re not describing a problem we read about.',
  },
  {
    icon: 'package',
    title: 'Everything We Produce Belongs to You',
    desc: 'The Review’s roadmap, tools audit and governance framework are yours outright — whether you continue with us or not. A provider whose value only holds while you keep paying them isn’t a partner, that’s a dependency.',
  },
  {
    icon: 'scale',
    title: 'Scored Against Evidence, Not Claims',
    desc: 'The Review scores your business against what we actually find — not what leadership assumes or hopes is true. It’s built to tell you the truth.',
  },
] as const;

/* Why Choose AgencyTech — comparison against the alternatives. */
const compareCols = ['Specialism', 'Quality', 'Scalability', 'Cost-efficiency'];
const compareRows = [
  {
    provider: 'AgencyTech',
    highlight: true,
    cells: ['Understand how agencies operate', 'Experienced specialists', 'Scales with you by default', 'One partner for all tech services'],
  },
  {
    provider: 'General IT providers',
    cells: ['Don’t understand agency operations', 'Experienced specialists', 'Scales with you', 'Wasted time/costs learning agency needs'],
  },
  {
    provider: 'In-house team',
    cells: ['Will learn how agencies operate', 'Good work if they have the right expertise', 'Expertise limited by headcount', 'Full salary, benefits, and training overhead'],
  },
  {
    provider: 'IT freelancers',
    cells: ['Don’t understand agency operations', 'Can be hit or miss', 'Availability can fluctuate', 'Variable project pricing'],
  },
  {
    provider: 'DIY tools',
    cells: ['Not designed for agencies', 'Support leaves you on your own', 'Setup and maintenance falls on your team', 'Cheap to start, costly mistakes later'],
  },
];

export default function AboutPage() {
  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="about" />

      {/* HERO — copy/layout unchanged; simple fade-in on page load only. */}
      <section style={{ position: 'relative', background: 'var(--at-white)', overflow: 'hidden' }}>
        <div className="at-load-fade" style={{ maxWidth: 860, margin: '0 auto', padding: '176px 32px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <span className={eyebrow}>About Us</span>
          <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>Not Just IT Support, a Tech Partner to Grow Your Business</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 620, textWrap: 'pretty' }}>AgencyTech is the dedicated technology and growth partner for creative and marketing agencies. We give leadership teams peace of mind around their cybersecurity and IT operations, maximise creative output and create confidence in navigating the AI landscape — with proactive IT, practical strategy, and embedded support that keeps you ahead.</p>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section style={{ position: 'relative', background: 'var(--at-white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px 96px' }}>
          <div data-reveal style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <ImageSlot placeholder="Photo — the AgencyTech team in the shop" style={{ width: '100%', minHeight: 460, display: 'block' }} />
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE — pull quote, distinct from body type. Fade + scale-in on
          scroll into view (data-reveal-scale), once. Copy is placeholder. */}
      <section style={{ position: 'relative', background: 'var(--at-white)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px 104px' }}>
          <blockquote data-reveal data-reveal-scale style={{ margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
            <Icon name="quote" size={40} style={{ color: 'var(--at-turquoise)', opacity: 0.9 }} aria-hidden />
            <p style={{ margin: 0, fontSize: 30, lineHeight: 1.4, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.01em', color: 'var(--at-cyprus)', textWrap: 'balance' }}>
              [Founder pull quote — one or two sentences in the founder&rsquo;s own voice. Replace with final copy before launch.]
            </p>
            <footer style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontStyle: 'normal', fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>[Founder name]</span>
              <span style={{ fontStyle: 'normal', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>[Role — e.g. Founder]</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* OUR STORY — horizontal timeline */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', color: 'var(--text-on-dark)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 0 108px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 12, padding: '0 clamp(20px, 5vw, 32px)' }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Our Story</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>From a University Side-Hustle to a Strategic Tech Partner</h2>
          </div>
          <p style={{ margin: '0 0 40px', fontSize: 13, color: 'var(--at-turquoise-light)', padding: '0 clamp(20px, 5vw, 32px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="arrow-left" size={15} /> Scroll to explore <Icon name="arrow-right" size={15} />
          </p>

          <div data-loop-carousel style={{ display: 'flex', gap: 20, padding: '0 clamp(20px, 5vw, 32px) 8px', scrollSnapType: 'x mandatory' }}>
            {milestones.map((m, i) => (
              <div key={i} data-reveal data-reveal-delay={i * 70} style={{ flex: 'none', width: 300, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Year node + connector line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <span style={{ flex: 'none', width: 14, height: 14, borderRadius: '50%', background: 'var(--at-turquoise)', boxShadow: '0 0 0 5px rgba(43,188,186,0.18)' }} />
                  <span style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.16)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingRight: 20 }}>
                  <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--at-turquoise-light)' }}>{m.year}</span>
                  <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.25, fontWeight: 700, color: '#fff' }}>{m.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING NARRATIVE */}
      <section style={{ position: 'relative', background: 'var(--at-white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '104px 32px 96px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 22, position: 'sticky', top: 120 }}>
            <span className={eyebrow}>Where It Started</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>It All Started at the University of Bristol in 2017</h2>
            <div className="at-keep-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 8 }}>
              {stats.map((s) => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--at-turquoise)' }}>
                    {s.num != null ? (
                      <>
                        <span data-countup={s.num}>{s.display}</span>{s.suffix}
                      </>
                    ) : s.display}
                  </span>
                  <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-reveal-delay={90} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {storyParagraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', textWrap: 'pretty' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH — four cards, staggered fade/slide-in on scroll.
          Reuses the card pattern from the IT Services "Why Choose" grid. */}
      <section style={{ position: 'relative', background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 48 }}>
            <span className={eyebrow}>Our Approach</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>How We Work With You</h2>
          </div>
          <div className="at-keep-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {approachCards.map((c, i) => (
              <div key={i} data-reveal data-reveal-delay={i * 100} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={c.icon} size={22} /></span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM — bio accordion cards (multi-open, independent). */}
      <TeamBios />

      {/* WHY CHOOSE — comparison table */}
      <section style={{ position: 'relative', background: 'var(--at-white)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 44 }}>
            <span className={eyebrow}>Compare</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>Why Choose AgencyTech?</h2>
          </div>
          <div data-reveal data-reveal-delay={90} style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
            <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse', fontSize: 13.5 }}>
              <thead>
                <tr>
                  <th style={{ position: 'sticky', left: 0, zIndex: 2, textAlign: 'left', padding: '16px 20px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-default)', width: 200 }}>Provider</th>
                  {compareCols.map((c) => (
                    <th key={c} style={{ textAlign: 'left', padding: '16px 20px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-default)' }}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.provider} style={row.highlight ? { background: 'rgba(43,188,186,0.08)' } : undefined}>
                    <th scope="row" style={{ position: 'sticky', left: 0, zIndex: 1, background: row.highlight ? 'var(--status-info-soft)' : 'var(--at-white)', textAlign: 'left', padding: '18px 20px', fontWeight: 700, color: row.highlight ? 'var(--at-turquoise)' : 'var(--text-heading)', borderBottom: '1px solid var(--border-default)', borderLeft: row.highlight ? '3px solid var(--at-turquoise)' : '3px solid transparent', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.provider}</th>
                    {row.cells.map((cell, i) => (
                      <td key={i} style={{ padding: '18px 20px', lineHeight: 1.5, color: row.highlight ? 'var(--text-heading)' : 'var(--text-muted)', fontWeight: row.highlight ? 600 : 400, borderBottom: '1px solid var(--border-default)', verticalAlign: 'top' }}>
                        {row.highlight ? (
                          <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8 }}>
                            <Icon name="check" size={15} style={{ flex: 'none', marginTop: 2, color: 'var(--at-turquoise)' }} />
                            {cell}
                          </span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position: 'relative', background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>Let&apos;s Build Something That Scales</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 480, textWrap: 'pretty' }}>Whether you need rock-solid IT or a partner to help you navigate what&apos;s next, we&apos;d love to hear from you.</p>
            <Link href={ROUTES.contact} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Get in Touch <BrandArrow variant="light" size={15} /></Link>
          </div>
        </div>
      </section>

      <FaqAccordion />

      <SiteFooter />
    </div>
  );
}
