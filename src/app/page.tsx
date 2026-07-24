import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import FaqAccordion from '@/components/FaqAccordion';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import IntroOverlay from '@/components/IntroOverlay';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { testimonials } from '@/lib/testimonials';
import { dcHref } from '@/lib/routes';
import { photoUrl } from '@/lib/media';

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

/* Results — split into two clearly-divided rows: IT numbers and Futureproofing
   numbers. Every figure counts up on scroll (reuses the data-countup pattern;
   reduced-motion + formatting handled in siteMotion.ts).
   Sources: 8 min = live IT SLA average. 24%->3% = phishing click rate over six
   months of simulations (illustrative — see phishing-simulations page). 460 hrs
   = "Early Stage" reclaimed per person/year (10 hrs/wk x 46 working weeks) — the
   lowest band of the mini-assessment, which has the most to gain. 4 hrs/wk =
   AI-training rollout case study. */
type StatTile =
  | { num: number; prefix?: string; suffix?: string; unit?: string; label: string; caption?: string }
  | { from: number; to: number; unit?: string; label: string; illustrative?: boolean };

const itResults: StatTile[] = [
  { num: 8, unit: 'min', label: 'Average response time to tickets' },
  { from: 24, to: 3, unit: '%', label: 'Phishing click-through rate after six months of simulations', illustrative: true },
];

const fppResults: StatTile[] = [
  { num: 460, unit: 'hrs / person / year', label: 'Time reclaimed after the Program, for agencies at the Early Stage of AI readiness', caption: '≈ 10 hours a week' },
  { num: 4, unit: 'hrs / person / week', label: 'Saved after an AI training session' },
];

const resultGroups: { label: string; href: string; items: StatTile[] }[] = [
  { label: 'IT Managed Services', href: dcHref('IT Services.dc.html'), items: itResults },
  { label: 'The Futureproofing Program', href: dcHref('Futureproofing.dc.html'), items: fppResults },
];

const eyebrow = 'at-eyebrow';

export default function HomePage() {
  return (
    <div className="at-home-page" style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="home" theme="light" />

      {/* 1. HERO */}
      <section className="at-snap-scene at-hero" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div className="at-hero-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(128px, 22vw, 168px) clamp(20px, 5vw, 32px) clamp(56px, 10vw, 96px)', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 72, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <span className={eyebrow}>The Strategic Tech Partner for Creative Agencies</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(34px, 8.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Running Today. Ready for Tomorrow.</h1>
            <p style={{ margin: 0, fontSize: 'clamp(16px, 4.4vw, 18px)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 480, textWrap: 'pretty' }}>We manage the IT that shouldn&apos;t be a distraction — and prepare your agency for the AI-driven shift that&apos;s already underway.</p>
            <div className="at-hero-cta" style={{ display: 'flex', gap: 14, marginTop: 6 }}>
              <Link href={dcHref('IT Services.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, lineHeight: 1.2, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Explore IT Services</Link>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="background: var(--at-cyprus-light); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '0 28px', background: 'var(--at-cyprus)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, lineHeight: 1.2, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Explore Futureproofing</Link>
            </div>
          </div>
          <div className="at-hero-media" style={{ position: 'relative', height: '100%', minHeight: 460 }}>
            <div data-parallax="0.12" style={{ willChange: 'transform', height: '100%' }}>
              <ImageSlot src={photoUrl('heros/home.jpg')} alt="The AgencyTech team at work" priority sizes="(max-width: 900px) 100vw, 560px" placeholder="Team photo — real people, real office" radius={6} style={{ width: '100%', height: '100%', display: 'block' }} />
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
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', position: 'relative', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
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
      <section id="services" className="at-snap-scene" style={{ background: '#fff' }}>
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
              <Link href={dcHref('IT Services.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore IT Services <BrandArrow variant="dark" size={15} /></Link>
            </div>
            {/* Card 2 — The Futureproofing Program */}
            <div data-reveal data-reveal-delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 36px' }}>
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="brain-circuit" size={24} /></span>
              <h3 style={{ margin: 0, fontSize: 23, lineHeight: 1.2, fontWeight: 700, color: 'var(--text-heading)' }}>The Futureproofing Program</h3>
              <p style={{ margin: 0, flex: 1, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>A structured, research-backed way to find your footing on AI — starting with a scored Review of where you stand, and a costed plan to get there.</p>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore Futureproofing <BrandArrow variant="dark" size={15} /></Link>
            </div>
          </div>
          <p data-reveal data-reveal-delay={200} style={{ margin: '48px auto 0', maxWidth: 760, textAlign: 'center', fontSize: 17, lineHeight: 1.7, color: 'var(--text-muted)', textWrap: 'pretty' }}>
            AI only works on solid ground — and IT decisions only make sense when someone understands where you&apos;re headed, not just where you stand today. Most providers only ever see one half of that picture. We run both, so neither side is ever guessing about the other.
          </p>
        </div>
      </section>

      {/* 4. TESTIMONIALS — one carousel of client cards */}
      <section className="at-home-testimonials at-snap-scene" style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <TestimonialsCarousel items={testimonials} heading="What Agencies Say" cardBg="var(--surface-card)" theme="dark" />
        </div>
      </section>

      {/* 5. RESULTS — count-up stats. Reuses the existing data-countup pattern
          (reduced-motion + formatting handled in siteMotion.ts). */}
      <section className="at-results-section at-snap-scene" style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, maxWidth: 640, margin: '0 auto 52px' }}>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>The Numbers Behind It</h2>
          </div>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {resultGroups.map((group, gi) => (
              <div key={group.label} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 22, paddingTop: gi > 0 ? 40 : 0, borderTop: gi > 0 ? '1px solid var(--border-default)' : 'none' }}>
                <h3 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(24px, 2.6vw, 30px)', lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)' }}>{group.label}</h3>
                <div className="at-results-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                  {group.items.map((r, i) => (
                    <div key={i} data-reveal data-reveal-delay={i * 90} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '32px 30px', background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', minHeight: 168 }}>
                      {'from' in r ? (
                        <span style={{ display: 'inline-flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, fontSize: 'clamp(40px, 5.6vw, 60px)', lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em' }}>
                          <span style={{ color: 'var(--at-faint)', textDecoration: 'line-through', textDecorationThickness: 3 }}><span data-countup={r.from}>{r.from}</span>{r.unit}</span>
                          <Icon name="arrow-right" size={22} style={{ flex: 'none', color: 'var(--text-muted)', alignSelf: 'center' }} />
                          <span style={{ color: 'var(--at-turquoise)' }}><span data-countup={r.to}>{r.to}</span>{r.unit}</span>
                        </span>
                      ) : (
                        <span style={{ fontSize: 'clamp(44px, 6.4vw, 66px)', lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise)' }}>
                          {r.prefix}<span data-countup={r.num}>{r.num}</span>{r.suffix}
                          {r.unit && <span style={{ fontSize: '0.32em', fontWeight: 700, color: 'var(--text-heading)', marginLeft: 8 }}>{r.unit}</span>}
                        </span>
                      )}
                      {'caption' in r && r.caption && (
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--at-turquoise)' }}>{r.caption}</span>
                      )}
                      <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 'auto', textWrap: 'pretty' }}>{r.label}</span>
                      {'illustrative' in r && r.illustrative && (
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Illustrative</span>
                      )}
                    </div>
                  ))}
                  <Link href={group.href} data-hover="border-color: var(--at-turquoise); background: rgba(6,154,152,0.06)" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '32px 24px', minHeight: 168, background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', color: 'var(--at-turquoise)', fontSize: 16, fontWeight: 700, textAlign: 'center', textDecoration: 'none', transition: 'border-color 200ms ease, background 200ms ease' }}>
                    Find Out More <BrandArrow variant="dark" size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section id="contact" className="at-snap-scene" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '108px 32px 116px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Not Sure Which You Need?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Most conversations start exactly there. Thirty minutes, no pitch — just a clear steer on what would actually help.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Let&apos;s Talk <BrandArrow variant="light" size={15} /></a>
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
