import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import FaqAccordion from '@/components/FaqAccordion';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import IntroOverlay from '@/components/IntroOverlay';
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

const moreQuotes = [
  {
    tag: 'IT Support', delay: 0, hasLogo: true, slotId: 'home-mq-synergy', logoPlaceholder: 'Logo — Synergy Group',
    quote: "We've used AgencyTech for upgrades and ongoing support with our IT fleet. Their service was quick, well priced and very convenient, offering us a full range of options and their key recommendations, for issues that could have caused great expense. The team was professional, communicative and attentive. We're looking forward to working with them in the future.",
    name: 'Adam Nor', role: 'IT Manager · Synergy Group',
  },
  {
    tag: 'IT Support & FPP', delay: 90, hasLogo: false, slotId: '',
    quote: 'Working with AgencyTech has taken a huge amount of pressure off our leadership team and given us real peace of mind around our cybersecurity standards. The support is fast and proactive, issues get solved before they become problems, and the integrated approach to technology and AI has helped us strengthen our operations, bring structure to how we use our tools, automate admin, and start using AI confidently across the team.',
    name: 'Charlotte Laing', role: 'CEO · The Content Emporium',
  },
  {
    tag: 'IT Support', delay: 180, hasLogo: true, slotId: 'home-mq-uwe', logoPlaceholder: 'Logo — UWE Bristol',
    quote: 'Casey and the AgencyTech team have been great to work with and have filled a gap in our service, providing support to personally owned devices of our staff and students. We look forward to continue working with them in the future.',
    name: 'Joanna Dainton', role: 'Head of Circular Economy · UWE Bristol',
  },
  {
    tag: 'Futureproofing', delay: 0, hasLogo: false, slotId: '',
    quote: 'Within two and a half weeks they’d spoken to the whole team, mapped every tool we used, and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.',
    name: 'Mark Beavan', role: 'Managing Director · PointZeroGroup',
  },
  {
    tag: 'IT Support', delay: 0, hasLogo: true, slotId: 'home-mq-bristol', logoPlaceholder: 'Logo — University of Bristol',
    quote: 'AgencyTech delivers fantastic customer service for students and staff. Servicing electrical devices reduces costs for students who don’t have to buy new, as well as contributing to UoB’s circular economy goals.',
    name: 'Richard Abraham', role: 'IT Engagement Manager · University of Bristol',
  },
  {
    tag: 'IT Support', delay: 90, hasLogo: false, slotId: '',
    quote: 'This tech agency provides five-star service. I wholeheartedly endorse their excellent service.',
    name: 'Cllr Asher Craig', role: 'Ex Deputy Mayor · CEO, Pathway Fund',
  },
  {
    tag: 'IT Support', delay: 180, hasLogo: false, slotId: '',
    quote: 'AgencyTech have been a reliable and professional partner throughout our work together. We’ve found them responsive, flexible, and able to handle complex needs at scale, and we’d confidently recommend them to other institutions or businesses.',
    name: 'Van Pham', role: 'IT Technician · University of Southampton',
  },
];
const moreQuotesLoop = moreQuotes.concat(moreQuotes);

const testimonials = [
  {
    quote: 'AgencyTech has taken real pressure off our leadership team and given us genuine peace of mind on cybersecurity. Support is fast and proactive — issues get solved before they become problems — and their integrated approach has us using AI confidently across the team.',
    name: 'Charlotte Laing', title: 'Founder & Director', company: 'The Content Emporium',
  },
  {
    quote: 'Within two and a half weeks they’d mapped every tool we used and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.',
    name: 'Mark Beavan', title: 'Managing Director', company: 'PointZeroGroup',
  },
  {
    quote: 'AgencyTech handled upgrades and ongoing support across our IT fleet — quick, well-priced and convenient, with clear recommendations on issues that could have cost us dearly. Professional, communicative and attentive throughout.',
    name: 'Adam Nor', title: 'IT Manager', company: 'Synergy Group',
  },
  {
    quote: 'A reliable, professional partner throughout — responsive, flexible, and able to handle complex needs at scale. We’d confidently recommend them to other institutions or businesses.',
    name: 'Van Pham', title: 'IT Technician', company: 'University of Southampton',
  },
];

const newsCards = [
  { delay: 0, icon: 'brain-circuit', tag: 'Futureproofing', date: 'June 2026', title: 'AI Readiness Is a Leadership Question, Not a Technical One', excerpt: 'Why most adoption efforts stall on strategy and culture long before the technology gets a say.' },
  { delay: 90, icon: 'shield-alert', tag: 'IT Services', date: 'May 2026', title: 'The Phishing Email Your Team Will Click (and How to Fix That)', excerpt: 'What simulated phishing campaigns reveal about agencies — and what changes after the first one.' },
  { delay: 180, icon: 'laptop', tag: 'IT Services', date: 'May 2026', title: 'What Happens to Your Old Laptops? ITAD, Explained', excerpt: 'Secure disposal is a compliance issue hiding in your cupboard. Here is how to handle it properly.' },
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

      {/* 3. OUTCOMES — FUTUREPROOFING */}
      <section id="futureproofing" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 32px 96px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className={eyebrow}>Futureproofing Services</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Ready for a future of AI</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Everyone&apos;s talking about AI, and doing nothing feels increasingly like a decision. AI readiness isn&apos;t a technical question — it&apos;s a leadership one. The Futureproofing Program gives your agency a structured, research-backed way to find its footing, starting with The Review.</p>
            <div>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore Futureproofing Services <Icon name="arrow-right" size={17} /></Link>
            </div>
          </div>
          <div data-reveal data-reveal-delay={100} style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '56px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ fontSize: 92, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise)' }}>Clarity.</span>
            <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-heading)' }}>A plan the whole leadership team is aligned on</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>&quot;For the first time, we have real clarity on where the business is and what needs to happen next&quot; — Mark Beavan, PointZeroGroup.</span>
          </div>
        </div>
      </section>

      {/* 4. OUTCOMES — IT SERVICES */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px 112px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div data-reveal style={{ background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', padding: '56px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, order: 1 }}>
            <span style={{ fontSize: 128, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--at-turquoise-light)' }}>&lt;<span data-countup={30}>30</span></span>
            <span style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>minutes — target response time</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>When something breaks mid-project, you&apos;re talking to a person in minutes — not raising a ticket into the void.</span>
          </div>
          <div data-reveal data-reveal-delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 20, order: 2 }}>
            <span className={eyebrow}>IT Services</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Keeping the foundations secure</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Proactive, reliable and secure IT management for agencies — helpdesk, cybersecurity, cloud, devices and everything between — so your team stays focused on client work, not firefighting.</p>
            <div>
              <Link href={dcHref('IT Services.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Explore IT Services <Icon name="arrow-right" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS — 2×2 card grid */}
      <section style={{ background: 'var(--at-grey)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <span className={eyebrow} style={{ display: 'block', color: 'var(--text-muted)', marginBottom: 48 }}>What Agencies Say</span>
          <div className="at-tst-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {testimonials.map((t) => (
              <article key={t.name} className="at-tst-card" data-reveal style={{ display: 'flex', gap: 28, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '34px 36px' }}>
                {/* PERSON — far left */}
                <div className="at-tst-person" style={{ flex: '0 0 158px', display: 'flex', flexDirection: 'column', gap: 3, borderRight: '1px solid var(--border-default)', paddingRight: 26 }}>
                  <Icon name="quote" size={26} color="var(--at-turquoise)" style={{ opacity: 0.45, marginBottom: 10 }} />
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>{t.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{t.title}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--at-turquoise)' }}>{t.company}</span>
                </div>
                {/* QUOTE — far right */}
                <blockquote className="at-tst-body" style={{ margin: 0, alignSelf: 'center', fontSize: 15.5, lineHeight: 1.65, fontWeight: 500, color: 'var(--text-body)', textWrap: 'pretty' }}>{t.quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. MORE CLIENT QUOTES */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 48 }}>
            <span className={eyebrow}>More From Our Clients</span>
          </div>
          <div data-loop-carousel className="at-mq-carousel" style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 10, margin: '0 -32px', paddingLeft: 32, paddingRight: 32, scrollbarWidth: 'none' }}>
            {moreQuotesLoop.map((mq, i) => (
              <div key={`${mq.name}-${i}`} className="at-mq-card" style={{ flex: 'none', width: 'calc((100% - 60px) / 4)', display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '28px 26px' }}>
                <span style={{ alignSelf: 'flex-start', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>{mq.tag}</span>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', textWrap: 'pretty', flex: 1 }}>&quot;{mq.quote}&quot;</p>
                {mq.hasLogo && (
                  <ImageSlot placeholder={mq.logoPlaceholder} radius={0} style={{ width: '100%', height: 32, display: 'block' }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, paddingTop: 4, borderTop: '1px solid var(--border-default)' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-heading)', marginTop: 10 }}>{mq.name}</span>
                  <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{mq.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY BOTH, TOGETHER */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1040, margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, marginBottom: 64 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Why Both, Together</span>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', maxWidth: 640, textWrap: 'balance' }}>One Partner for Where You Are and Where You&apos;re Headed</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'stretch' }}>
            <div data-reveal style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="server" size={21} /></span>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, color: '#fff' }}>Readiness needs solid IT</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>Every dimension of AI readiness — data, systems, security, workflows — depends on IT that&apos;s actually solid underneath it.</p>
            </div>
            <div data-reveal data-reveal-delay={150} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', gap: 10 }}>
              <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--at-turquoise)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 0 0 10px rgba(6,154,152,0.18)' }}><Icon name="arrow-left-right" size={24} /></span>
            </div>
            <div data-reveal data-reveal-delay={100} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="compass" size={21} /></span>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, color: '#fff' }}>IT needs to know the destination</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', textWrap: 'pretty' }}>Every IT decision we make is informed by understanding where your agency is headed — not just where it stands today.</p>
            </div>
          </div>
          <p data-reveal data-reveal-delay={200} style={{ margin: '56px auto 0', maxWidth: 620, textAlign: 'center', fontSize: 18, lineHeight: 1.6, fontWeight: 600, color: 'var(--at-turquoise-light)', textWrap: 'balance' }}>Doing both means we look after each one better than a specialist doing only one ever could.</p>
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
