import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import FaqAccordion from '@/components/FaqAccordion';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import IntroOverlay from '@/components/IntroOverlay';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { testimonials } from '@/lib/testimonials';
import { dcHref } from '@/lib/routes';

const logos = [
  { name: 'Bristol Creative Industries', src: '/assets/partner-logos/bristol-creative-industries.png' },
  { name: 'Business West', src: '/assets/partner-logos/businesswest.webp' },
  { name: 'Claude Partner Network', src: '/assets/partner-logos/claude-partner-network.webp' },
  { name: 'NinjaOne', src: '/assets/partner-logos/ninjaone.png' },
  { name: 'Apple', src: '/assets/partner-logos/apple-business.png' },
  { name: 'Google', src: '/assets/partner-logos/google.png' },
  { name: 'Microsoft', src: '/assets/partner-logos/microsoft.png' },
  { name: 'Bitwarden', src: '/assets/partner-logos/bitwarden.png' },
  { name: 'Bitdefender', src: '/assets/partner-logos/bitdefender.svg' },
  { name: 'Huntress', src: '/assets/partner-logos/huntress.png' },
  { name: 'Dell', src: '/assets/partner-logos/dell.png' },
  { name: 'HP', src: '/assets/partner-logos/hp.png' },
];
const marqueeLogos = logos.concat(logos);

const newsCards = [
  { delay: 0, icon: 'brain-circuit', tag: 'Futureproofing', date: 'June 2026', title: 'AI Readiness Is a Leadership Question, Not a Technical One', excerpt: 'Why most adoption efforts stall on strategy and culture long before the technology gets a say.' },
  { delay: 90, icon: 'shield-alert', tag: 'IT Services', date: 'May 2026', title: 'The Phishing Email Your Team Will Click (and How to Fix That)', excerpt: 'What simulated phishing campaigns reveal about agencies — and what changes after the first one.' },
  { delay: 180, icon: 'laptop', tag: 'IT Services', date: 'May 2026', title: 'What Happens to Your Old Laptops? ITAD, Explained', excerpt: 'Secure disposal is a compliance issue hiding in your cupboard. Here is how to handle it properly.' },
];

/* Results — the "<30 min" figure is real, live copy (count-up on scroll). The
   other three are real aggregates from the scoring model, left visibly bracketed
   until confirmed — no invented numbers. Swap `value` for `{ num, prefix, suffix,
   unit }` (like the first) once a figure is signed off and it'll count up too. */
const results: (
  | { num: number; prefix?: string; suffix?: string; unit?: string; label: string }
  | { value: string; label: string }
)[] = [
  { prefix: '<', num: 30, unit: 'min', label: 'Average response time when something breaks' },
  { value: '[X hrs/week]', label: 'Average time reclaimed, Futureproofing clients' },
  { value: '[X/10 → X/10]', label: 'Average score movement in the first 12 months' },
  { value: '[X%]', label: 'Clients who continue from the Review into Phase 2' },
];

const eyebrow = 'at-eyebrow';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="home" theme="light" />

      {/* 1. HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div className="at-hero-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(128px, 22vw, 168px) clamp(20px, 5vw, 32px) clamp(56px, 10vw, 96px)', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 72, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <span className={eyebrow}>The Strategic Tech Partner for Creative Agencies</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(34px, 8.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Running Today. Ready for Tomorrow.</h1>
            <p style={{ margin: 0, fontSize: 'clamp(16px, 4.4vw, 18px)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 480, textWrap: 'pretty' }}>We manage the IT that shouldn&apos;t be a distraction — and prepare your agency for the AI-driven shift that&apos;s already underway.</p>
            <div className="at-hero-cta" style={{ display: 'flex', gap: 14, marginTop: 6 }}>
              <Link href={dcHref('IT Services.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Explore IT Services</Link>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="background: var(--at-cyprus-light); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--at-cyprus)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Explore Futureproofing</Link>
            </div>
          </div>
          <div className="at-hero-media" style={{ position: 'relative', height: '100%', minHeight: 460 }}>
            <div data-parallax="0.12" style={{ willChange: 'transform', height: '100%' }}>
              <ImageSlot placeholder="Team photo — real people, real office" radius={6} style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
            <div className="at-hero-badge at-hero-badge-l" style={{ position: 'absolute', left: -36, bottom: 44, animation: 'at-float 5s ease-in-out infinite', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 210 }}>
              <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="shield-check" size={18} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Systems secure</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>All 48 devices protected</span>
              </span>
            </div>
            <div className="at-hero-badge at-hero-badge-r" style={{ position: 'absolute', right: -28, top: 38, animation: 'at-float 6s ease-in-out 1.2s infinite', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 200 }}>
              <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="activity" size={18} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Network monitoring</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Live · no issues found</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER / TRUST BANNER */}
      <section style={{ borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', background: '#fff', padding: '26px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 40 }}>
          <span style={{ flex: 'none', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Trusted By & Partnered With</span>
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
            <div data-hover="animation-play-state: paused" style={{ display: 'flex', gap: 56, width: 'max-content', animation: 'at-marquee 45s linear infinite' }}>
              {marqueeLogos.map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`${logo.name}-${i}`} src={logo.src} alt={logo.name} data-hover="opacity: 1; filter: grayscale(0)" style={{ flex: 'none', height: 22, width: 'auto', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.5, transition: 'opacity 200ms ease, filter 200ms ease' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE — two standalone services, one partner. Replaces the old
          separate Futureproofing Services + IT Services outcome blocks. */}
      <section id="services" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 32px 112px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, maxWidth: 680, margin: '0 auto 52px' }}>
            <span className={eyebrow}>What We Do</span>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Two Services. One Partner.</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>Take one or take both — each stands entirely on its own. But because we run both, we do each one better than a partner who only ever does one.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'stretch' }}>
            {/* Card 1 — IT Managed Services */}
            <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 36px' }}>
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="server" size={24} /></span>
              <h3 style={{ margin: 0, fontSize: 23, lineHeight: 1.2, fontWeight: 700, color: 'var(--text-heading)' }}>IT Managed Services</h3>
              <p style={{ margin: 0, flex: 1, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Proactive, reliable and secure IT management — helpdesk, cybersecurity, cloud, devices and everything between — so your team stays focused on client work, not firefighting.</p>
              <Link href={dcHref('IT Services.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore IT Services <Icon name="arrow-right" size={17} /></Link>
            </div>
            {/* Card 2 — The Futureproofing Program */}
            <div data-reveal data-reveal-delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 36px' }}>
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="brain-circuit" size={24} /></span>
              <h3 style={{ margin: 0, fontSize: 23, lineHeight: 1.2, fontWeight: 700, color: 'var(--text-heading)' }}>The Futureproofing Program</h3>
              <p style={{ margin: 0, flex: 1, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>A structured, research-backed way to find your footing on AI — starting with a scored Review of where you stand, and a costed plan to get there.</p>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore Futureproofing <Icon name="arrow-right" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS — one carousel of client cards */}
      <section style={{ background: 'var(--at-grey)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <TestimonialsCarousel items={testimonials} eyebrow="What Agencies Say" cardBg="var(--surface-card)" />
        </div>
      </section>

      {/* 6. WHY BOTH, TOGETHER */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1040, margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, marginBottom: 44 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Why Both, Together</span>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', maxWidth: 640, textWrap: 'balance' }}>One Partner for Where You Are and Where You&apos;re Headed</h2>
          </div>
          <div data-reveal data-reveal-delay={80} style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 720, margin: '0 auto 60px' }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', textWrap: 'pretty' }}>AI only works on solid ground. Every dimension of AI readiness — your data, your systems, your security — depends on IT that&apos;s actually holding up underneath it. And IT decisions only make sense when someone understands where you&apos;re headed, not just where you stand today.</p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', textWrap: 'pretty' }}>Most providers only ever see one half of that picture. We built AgencyTech to run both — because treating them as separate conversations is exactly how good AI budget ends up spent on tools sitting on infrastructure nobody&apos;s actually secured.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'stretch' }}>
            <div data-reveal style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '32px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="server" size={21} /></span>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#fff' }}>Where you are — solid IT</h3>
            </div>
            <div data-reveal data-reveal-delay={150} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', gap: 10 }}>
              <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--at-turquoise)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 0 0 10px rgba(6,154,152,0.18)' }}><Icon name="arrow-left-right" size={24} /></span>
            </div>
            <div data-reveal data-reveal-delay={100} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '32px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="compass" size={21} /></span>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#fff' }}>Where you&apos;re headed — AI readiness</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6b. RESULTS — count-up stats. Reuses the existing data-countup pattern
          (reduced-motion + formatting handled in siteMotion.ts). */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, maxWidth: 640, margin: '0 auto 52px' }}>
            <span className={eyebrow}>Results</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>The Numbers Behind It</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {results.map((r, i) => {
              const isCount = 'num' in r;
              return (
                <div key={i} data-reveal data-reveal-delay={i * 90} style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '32px 26px', background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', minHeight: 168 }}>
                  <span style={{ fontSize: 'clamp(34px, 4.4vw, 52px)', lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise)', textWrap: 'balance' }}>
                    {isCount ? (
                      <>
                        {r.prefix}<span data-countup={r.num}>{r.num}</span>{r.suffix}
                        {r.unit && <span style={{ fontSize: '0.42em', fontWeight: 700, color: 'var(--text-heading)', marginLeft: 6 }}>{r.unit}</span>}
                      </>
                    ) : r.value}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 'auto', textWrap: 'pretty' }}>{r.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. NEWS TEASER */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 44 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className={eyebrow}>News</span>
              <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Learn Something Before You Need Us</h2>
            </div>
            <a href="#" style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', marginBottom: 6, transition: 'gap 200ms ease' }} data-hover="gap: 12px">All articles <Icon name="arrow-right" size={16} /></a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {newsCards.map((card) => (
              <a key={card.title} data-reveal data-reveal-delay={card.delay} href="#" style={{ display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)">
                <span style={{ height: 160, background: 'linear-gradient(135deg, var(--at-cyprus) 0%, var(--at-cyprus-light) 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={card.icon} size={34} /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 24 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{card.tag}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 700, color: 'var(--text-heading)' }}>{card.title}</span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>{card.excerpt}</span>
                  <span style={{ fontSize: 12, color: 'var(--at-faint)', marginTop: 4 }}>{card.date} · placeholder article</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '108px 32px 116px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Not Sure Which You Need?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Most conversations start exactly there. Thirty minutes, no pitch — just a clear steer on what would actually help.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Let&apos;s Talk <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <FaqAccordion />

      <SiteFooter />

      {/* Homepage-only intro overlay. Plays once per session, then removes itself. */}
      <IntroOverlay frequency="session" />
    </div>
  );
}
