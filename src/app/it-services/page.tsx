import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'IT Services',
  description:
    'We deliver proactive, reliable and secure IT management, so your team can stay focused and productive.',
};

const partnerLogos = [
  { name: 'NinjaOne', src: '/assets/partner-logos/ninjaone.png' },
  { name: 'Apple', src: '/assets/partner-logos/apple-business.png' },
  { name: 'Microsoft', src: '/assets/partner-logos/microsoft.png' },
  { name: 'Google', src: '/assets/partner-logos/google.png' },
  { name: 'Bitdefender', src: '/assets/partner-logos/bitdefender.svg' },
  { name: 'Huntress', src: '/assets/partner-logos/huntress.png' },
  { name: 'Bitwarden', src: '/assets/partner-logos/bitwarden.png' },
];

const slaTiers = [
  { label: 'P1 — Critical', response: '15–30 min', example: 'Full outage or security incident' },
  { label: 'P2 — High', response: '1 hr', example: 'A user blocked from core work' },
  { label: 'P3 — Medium', response: '4 business hrs', example: 'Non-blocking, workaround available' },
  { label: 'P4 — Low', response: '1 business day', example: 'Cosmetic or feature request' },
];

function cat(c: {
  id: string;
  num: string;
  icon: string;
  kicker: string;
  title: string;
  dur: string;
  anchors: string[];
  desc: string;
  items: string[];
}) {
  return { ...c, marquee: c.items.concat(c.items) };
}

const categories = [
  cat({
    id: 'managed-it',
    num: '01',
    icon: 'headset',
    kicker: 'Always-on support',
    title: 'Managed IT & Helpdesk',
    dur: '26s',
    anchors: ['managed-it-anchor'],
    desc: 'Unlimited support from people who already know your setup — a target response under 30 minutes on critical issues, proactive monitoring that heads off problems, and one named account manager rather than a ticket queue.',
    items: ['IT Helpdesk', 'Proactive Monitoring', 'Maintenance', 'Device & User Management', 'Onboarding & Offboarding'],
  }),
  cat({
    id: 'cybersecurity',
    num: '02',
    icon: 'shield-check',
    kicker: 'Built in, not bolted on',
    title: 'Cybersecurity & Compliance',
    dur: '30s',
    anchors: ['cyber-essentials'],
    desc: 'Security and compliance are part of how everything is set up from day one — endpoint protection, password & credential management, phishing simulations to train your team, and Cyber Essentials certification kept current year on year.',
    items: ['Endpoint Protection', 'Cyber Essentials', 'Phishing Simulations', 'Password Management', 'Backup & Recovery'],
  }),
  cat({
    id: 'cloud',
    num: '03',
    icon: 'cloud',
    kicker: 'The tools you work in',
    title: 'Cloud & Productivity',
    dur: '24s',
    anchors: ['microsoft-365', 'google-workspace', 'operational-apps'],
    desc: 'Full management of the platforms your agency lives in — Microsoft 365 or Google Workspace tenancies, plus the operational job-management apps like Synergist that keep projects and time moving.',
    items: ['Microsoft 365', 'Google Workspace', 'Operational Apps', 'Synergist', 'SharePoint & Teams'],
  }),
  cat({
    id: 'connectivity',
    num: '04',
    icon: 'smartphone',
    kicker: 'BYOD, handled properly',
    title: 'Device & Identity Management',
    dur: '28s',
    anchors: ['mdm', 'byod'],
    desc: 'Enrolment and management for every device via NinjaOne and Apple Business Manager, with BYOD freelancers handled through Apple User Enrolment or conditional access — never a “trust the freelancer” policy.',
    items: ['MDM Enrolment', 'Apple Business Manager', 'BYOD (User Enrolment)', 'Conditional Access', 'Identity Management'],
  }),
  cat({
    id: 'lifecycle',
    num: '05',
    icon: 'recycle',
    kicker: 'From first day to last',
    title: 'Lifecycle & Upskilling',
    dur: '25s',
    anchors: [],
    desc: 'The full life of your kit and your people — procurement and asset tracking, practical training that makes teams more capable, and secure IT recycling that disposes of retired hardware with a certificate to prove it.',
    items: ['Training & Upskilling', 'IT Recycling', 'Asset Tracking', 'Procurement'],
  }),
];

const whyPointDefs = [
  { icon: 'radar', title: 'Proactive, not just reactive', desc: 'Monitoring and maintenance that prevents issues rather than billing for them.' },
  { icon: 'lock', title: 'Security & compliance built-in', desc: 'Not an add-on or an upsell — part of how everything is set up from day one.' },
  { icon: 'trending-up', title: 'Scalable at every stage', desc: 'From five desks to fifty — the setup grows with the agency, not against it.' },
  { icon: 'users', title: 'Empowered teams, not just managed devices', desc: 'Training and plain-language guidance so your people get more capable over time.' },
  { icon: 'user-check', title: 'One point of contact', desc: 'A named account manager who knows your business — never a ticket queue lottery.' },
];
const whyPoints = whyPointDefs.map((p, i) => ({ ...p, delay: (i % 3) * 90 }));

const pricingFeatures = [
  'Unlimited helpdesk support',
  'Full Microsoft 365 / Google Workspace management',
  'Endpoint protection & backup',
  'Password & credential management',
  'Unlimited onboarding & offboarding',
  'MDM & BYOD management',
  'Dedicated account manager',
  'Quarterly business reviews',
];

const eyebrow = 'at-eyebrow';

export default function ITServicesPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <style>{`
        [data-cat-visual] { opacity: 0; }
        [data-cat-visual]:first-child { opacity: 1; }
        #it-hero-photo { width: 100% !important; height: 100% !important; display: block !important; }
      `}</style>

      <SiteNav active="it" theme="light" />

      {/* 1. HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '168px 32px 100px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 72, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span className={eyebrow}>IT Management for Agencies</span>
            <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Stop Firefighting Your IT. Start Futureproofing It.</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 480, textWrap: 'pretty' }}>We deliver proactive, reliable and secure IT management, so your team can stay focused and productive.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
              <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book an Intro Call</a>
              <a href="#services" data-hover="background: var(--surface-subtle); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'transparent', color: 'var(--text-heading)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>See What&rsquo;s Included</a>
            </div>
          </div>
          <div style={{ position: 'relative', height: '100%' }}>
            <div id="it-hero-photo" data-parallax="0.12" style={{ willChange: 'transform', height: '100%' }}>
              <ImageSlot placeholder="Team collaborating in the office" radius={6} style={{ width: '100%', height: '100%', minHeight: 470, display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', left: -36, top: 42, animation: 'at-float 5s ease-in-out infinite', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '13px 17px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 200 }}>
              <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="shield-check" size={17} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Systems secure</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Endpoint protection active</span>
              </span>
            </div>
            <div style={{ position: 'absolute', right: -28, top: 180, animation: 'at-float 6s ease-in-out 1.4s infinite', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '13px 17px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 210 }}>
              <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="activity" size={17} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Network monitoring</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Live · no issues found</span>
              </span>
            </div>
            <div style={{ position: 'absolute', left: 24, bottom: -22, animation: 'at-float 5.5s ease-in-out 0.7s infinite', background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '13px 17px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 210 }}>
              <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name="cloud-upload" size={17} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Cloud backup status</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Last backup 14 min ago</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES & SOFTWARE RANGE — sticky panels + marquees */}
      <section id="services" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 8px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
            <span className={eyebrow}>What We Do</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Everything Your Agency Runs On, Today and Tomorrow</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>One partner across the whole stack — from the helpdesk your team calls to the broadband your studio runs on. Five areas, each with everything included.</p>
          </div>
        </div>
        <div data-sticky-cats style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 72 }}>
          {/* LEFT — sticky visual panels */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'sticky', top: 108, height: 520 }}>
              {categories.map((c) => (
                <div key={c.id} data-cat-visual style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--at-cyprus)' }}>
                  <span style={{ position: 'absolute', right: -60, bottom: -80, fontSize: 340, lineHeight: 1, fontWeight: 800, color: 'rgba(43,188,186,0.08)' }}>{c.num}</span>
                  <div style={{ position: 'relative', height: '100%', padding: 32, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={c.icon} size={30} /></span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>{c.kicker}</span>
                      <span style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.15, color: '#fff' }}>{c.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT — scrolling category blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            {categories.map((c) => (
              <div key={c.id} data-cat-block id={c.id} style={{ minHeight: '46vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '30px 0', scrollMarginTop: 100, position: 'relative' }}>
                {c.anchors.map((a) => (
                  <span key={a} id={a} style={{ position: 'absolute', top: 60 }} />
                ))}
                <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', color: 'var(--at-faint)' }}>{c.num}</span>
                <h3 style={{ margin: 0, fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.01em', fontWeight: 700, color: 'var(--text-heading)' }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>{c.desc}</p>
                <div style={{ overflow: 'hidden', position: 'relative', marginTop: 6, maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
                  <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: `at-marquee ${c.dur} linear infinite` }}>
                    {c.marquee.map((item, i) => (
                      <span key={i} style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', background: 'var(--surface-subtle)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>
                        <span style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--at-turquoise)', transform: 'rotate(45deg)' }} />{item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY PARTNERS */}
      <section style={{ marginTop: 64, borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', background: 'var(--surface-subtle)', padding: '30px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ flex: 'none', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Technology Partners</span>
          {partnerLogos.map((logo) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={logo.name} src={logo.src} alt={logo.name} data-hover="opacity: 1; filter: grayscale(0)" style={{ height: 24, width: 'auto', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.5, transition: 'opacity 200ms ease, filter 200ms ease' }} />
          ))}
        </div>
      </section>

      {/* 4. SLA / RESPONSE TIME STAT */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '128px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span className={eyebrow}>When Something Breaks</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 10 }}>
              <span style={{ fontSize: 96, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise)' }}>&lt;</span>
              <span data-countup={30} style={{ fontSize: 176, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--at-turquoise)' }}>30</span>
              <span style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, color: 'var(--text-heading)', marginLeft: 10 }}>minutes</span>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 440, textWrap: 'balance' }}>Target response time for critical issues — a named account manager, not a ticket queue.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 48, width: '100%', maxWidth: 760 }}>
              {slaTiers.map((t) => (
                <div key={t.label} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '20px 16px', background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{t.label}</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-heading)' }}>{t.response}</span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.4, color: 'var(--text-muted)' }}>{t.example}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '16px 0 0', fontSize: 12.5, color: 'var(--at-faint)' }}>Target response times by priority — published per client in the SOW.</p>
          </div>
        </div>
      </section>

      {/* 5. AREAS COVERED */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: 'var(--text-muted)' }}><Icon name="map-pin" size={15} style={{ color: 'var(--at-turquoise)' }} /> On-site and remote across</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Bristol</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--at-faint)' }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Bath</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--at-faint)' }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Somerset</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--at-faint)' }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Gloucester</span>
          <span style={{ fontSize: 12.5, color: 'var(--at-faint)' }}>+ surrounding areas</span>
        </div>
      </section>

      {/* 6. WHY CHOOSE AGENCYTECH */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-2.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '112px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 52 }}>
            <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>Why Choose AgencyTech</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: '#fff' }}>Built Around How Agencies Actually Work</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {whyPoints.map((p) => (
              <div key={p.title} data-reveal data-reveal-delay={p.delay} style={{ background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'rgba(43,188,186,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)' }}><Icon name={p.icon} size={20} /></span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: '#fff' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', textWrap: 'pretty' }}>{p.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay={180} style={{ border: '1px dashed var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, fontWeight: 600, color: 'var(--at-turquoise-light)', textWrap: 'pretty' }}>And because we run the Futureproofing Program too, every IT decision is made knowing where your agency is headed.</p>
              <Link href={dcHref('Futureproofing.dc.html')} data-hover="color: var(--at-turquoise-light)" style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>About Futureproofing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LINK-OUT CARDS */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 44 }}>
            <span className={eyebrow}>Go Deeper</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Three Places to Look Next</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            <Link href={dcHref('Phishing Simulations.dc.html')} data-reveal data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="fish" size={22} /></span>
              <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>Phishing Simulations</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>The service with our strongest case-study results. See how a simulated attack changes a team.</span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <Icon name="arrow-right" size={16} /></span>
            </Link>
            <Link href={dcHref('ITAD.dc.html')} data-reveal data-reveal-delay={90} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="recycle" size={22} /></span>
              <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>ITAD</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>IT asset disposal done properly — secure collection, certified data destruction, resale and recycling.</span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <Icon name="arrow-right" size={16} /></span>
            </Link>
            <Link href={dcHref('IT Case Studies.dc.html')} data-reveal data-reveal-delay={180} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="file-text" size={22} /></span>
              <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>IT Case Studies</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>Real problems, measured outcomes — what working with us actually looks like for agencies.</span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <Icon name="arrow-right" size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (IT) */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '92px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
            <span className={eyebrow}>From IT Clients</span>
            <div data-quotes style={{ position: 'relative', width: '100%', minHeight: 200, marginTop: 12 }}>
              <figure data-quote style={{ position: 'absolute', inset: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, opacity: 1 }}>
                <blockquote style={{ margin: 0, fontSize: 24, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'balance' }}>&ldquo;Working with AgencyTech has taken a huge amount of pressure off our leadership team and given us real peace of mind around our cybersecurity standards. The support is fast and proactive, issues get solved before they become problems.&rdquo;</blockquote>
                <figcaption style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Charlotte Laing</strong> · Founder & Director, The Content Emporium</figcaption>
              </figure>
              <figure data-quote style={{ position: 'absolute', inset: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, opacity: 0, pointerEvents: 'none' }}>
                <blockquote style={{ margin: 0, fontSize: 24, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'balance' }}>&ldquo;We passed Cyber Essentials first time. Our biggest client noticed before we&rsquo;d even told them.&rdquo;</blockquote>
                <figcaption style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Managing Director</strong> · PR agency, Bath <span style={{ opacity: 0.6 }}>(placeholder quote)</span></figcaption>
              </figure>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: -14, display: 'flex', justifyContent: 'center', gap: 8 }}>
                <button data-quote-dot aria-label="Quote 1" style={{ width: 9, height: 9, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: 'var(--accent)' }} />
                <button data-quote-dot aria-label="Quote 2" style={{ width: 9, height: 9, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: 'rgba(0,64,64,0.18)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '104px 32px 96px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className={eyebrow}>Pricing</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>One Package. Everything Included.</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>No tiers, no per-ticket surprises, no &ldquo;that&rsquo;s extra.&rdquo; One price per team member, covering everything an agency needs from its IT partner.</p>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--at-faint)' }}>Billed monthly. No long lock-ins.</p>
          </div>
          <div data-reveal data-reveal-delay={100} style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '40px 38px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 56, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£60</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-muted)' }}>/ team member / month</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
              {pricingFeatures.map((f) => (
                <span key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5, lineHeight: 1.45, color: 'var(--text-body)' }}><Icon name="check" size={15} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />{f}</span>
              ))}
            </div>
            <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 50, background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book an Intro Call</a>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Ready to Stop Firefighting?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>A 30-minute call is enough to tell you whether we&rsquo;re the right fit — and you&rsquo;ll leave with something useful either way.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
