import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import FaqAccordion from '@/components/FaqAccordion';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
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
    desc: 'Unlimited support from people who already know your setup, with proactive monitoring that heads off problems before they cost you time.',
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
    items: ['Microsoft 365', 'Google Workspace', 'Operational Apps', 'SharePoint & Teams'],
  }),
  cat({
    id: 'connectivity',
    num: '04',
    icon: 'smartphone',
    kicker: 'BYOD, handled properly',
    title: 'Device & Identity Management',
    dur: '28s',
    anchors: ['mdm', 'byod'],
    desc: 'Every device, account and level of access set up and managed properly — including a secure approach to freelancers using their own devices, so your team can work flexibly without compromising security.',
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
  { icon: 'trending-up', title: 'Scalable at every stage', desc: 'From five desks to fifty — the setup grows with the agency, not against it.' },
  { icon: 'users', title: 'Empowered teams, not just managed devices', desc: 'Training and plain-language guidance so your people get more capable over time.' },
];
const whyPoints = whyPointDefs.map((p, i) => ({ ...p, delay: (i % 3) * 90 }));

/* Full base-package inclusions, shown in the "What's Included" section. */
const baseIncludes = [
  'Password manager (2FA-enabled)',
  'Email security — SPF / DKIM / DMARC management',
  'MFA management & enforcement',
  'Daily cloud backups — mail, files, calendar & collaboration data (Microsoft 365 or Google Workspace)',
  'Centralised email signature management',
  'Managed WiFi (subject to site survey)',
  'Wired network / office ethernet (subject to site survey)',
  'Network monitoring & alerting — switches, routers & access points, no separate tooling cost',
  'New starter setup — no charge',
  'Leaver / offboarding — no charge',
  'Cloud admin & user creation, day-to-day (M365 or Google Workspace) — no charge',
  'Ad-hoc documentation — security notes, network diagrams, compliance pro-formas — no charge',
  'Standard support response: 2 hours, 9–5 weekdays',
];

/* Priced extras that sit outside the base package. */
const addOns = [
  { name: 'Managed 24/7 EDR', desc: 'Behavioural threat hunting, active response and a dedicated SOC — antivirus included.', price: '£7.76', unit: '/ user / month' },
  { name: 'Managed phishing simulation & SAT', desc: 'Ongoing simulated phishing and security awareness training for your whole team.', price: '£2.50', unit: '/ user / month' },
  { name: 'Cyber Essentials Basic + Plus', desc: 'Full certification support and assessment to get you badged and keep you compliant.' },
  { name: 'Connectivity', desc: 'Dedicated business connectivity and failover options, designed around your office and how it works.' },
  { name: 'Wi-Fi', desc: 'Office Wi-Fi installation, upgrades and coverage improvements for a reliable connection throughout your space.' },
  { name: 'VoIP', desc: 'Business phone systems that keep your team connected wherever they are working.' },
  { name: 'SIMs', desc: 'Business mobile SIMs and data plans, managed alongside the rest of your setup.' },
  { name: 'IT Asset Management', desc: 'A clear record of your technology, who has it and where it is in its lifecycle.' },
  { name: 'Repairs', desc: 'Practical support for device repairs and replacements when something needs attention.' },
  { name: 'Training Sessions', desc: 'Focused sessions that help your team use their tools confidently and securely.' },
];

const eyebrow = 'at-eyebrow';

export default function ITServicesPage() {
  // Managed IT & Helpdesk is the lead card; the rest sit in a two-column grid.
  const [managed, ...otherCats] = categories;

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <style>{`#it-hero-photo { width: 100% !important; height: 100% !important; display: block !important; }`}</style>

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

      {/* 2. TECHNOLOGY PARTNERS — moved to the top, directly above the testimonial */}
      <section style={{ borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', background: 'var(--surface-subtle)', padding: '30px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 40 }}>
          <span style={{ flex: 'none', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Technology Partners</span>
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)', maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 48, width: 'max-content', animation: 'at-marquee 32s linear infinite' }}>
              {partnerLogos.concat(partnerLogos).map((logo, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={`${logo.name}-${i}`} src={logo.src} alt={logo.name} data-hover="opacity: 1; filter: grayscale(0)" style={{ height: 24, width: 'auto', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.5, transition: 'opacity 200ms ease, filter 200ms ease' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROOF */}
      <section style={{ background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
          <figure style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch', gap: 56 }}>
            <div data-reveal data-reveal-from="left" data-reveal-scale aria-label="Charlotte Laing video testimonial" style={{ minHeight: 340, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--at-cyprus)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise-light)', animation: 'at-pulse 1.8s ease-in-out 900ms 2' }}><Icon name="play" size={26} /></span>
            </div>
            <div data-reveal data-reveal-from="right" data-reveal-delay={100} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 22 }}>
              <Icon name="quote" size={32} color="var(--at-turquoise)" style={{ opacity: 0.65 }} />
              <blockquote style={{ margin: 0, fontSize: 25, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'balance' }}>&ldquo;Working with AgencyTech has taken a huge amount of pressure off our leadership team and given us real peace of mind around our cybersecurity standards. The support is fast and proactive, issues get solved before they become problems.&rdquo;</blockquote>
              <figcaption style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Charlotte Laing</strong> · The Content Emporium</figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* 4. SERVICES — lead card + two-column grid */}
      <section id="services" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640, marginBottom: 44 }}>
            <span className={eyebrow}>What We Do</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Everything Your Agency Runs On, Today and Tomorrow</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>One partner across the whole stack — from the helpdesk your team calls to the broadband your studio runs on. Five areas, each with everything included.</p>
          </div>

          {/* Lead card — Managed IT & Helpdesk, spanning both columns, with the
              response & priority levels absorbed into the right-hand panel. */}
          <div id={managed.id} data-reveal style={{ position: 'relative', scrollMarginTop: 100, background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr' }}>
            {managed.anchors.map((a) => (
              <span key={a} id={a} style={{ position: 'absolute', top: 60 }} />
            ))}
            {/* LEFT — overview + includes */}
            <div style={{ padding: '36px 36px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={managed.icon} size={22} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{managed.kicker}</span>
                  <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.01em', fontWeight: 700, color: 'var(--text-heading)' }}>{managed.title}</h3>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>{managed.desc}</p>
              <div style={{ marginTop: 2 }}>
                <span style={{ display: 'block', marginBottom: 10, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Includes</span>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px 18px', margin: 0, padding: 0, listStyle: 'none' }}>
                  {managed.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 13, lineHeight: 1.45, color: 'var(--text-muted)' }}>
                      <span aria-hidden="true" style={{ width: 5, height: 5, flex: 'none', marginTop: 6, borderRadius: '50%', background: 'var(--at-turquoise)' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* RIGHT — response & priority levels */}
            <div style={{ padding: '34px 32px', background: 'var(--surface-subtle)', borderLeft: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Response &amp; priority levels</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span data-countup={8} style={{ fontSize: 46, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--at-turquoise)' }}>8</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>min avg response</span>
                </div>
                <span style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>Across all tickets — a named account manager, not a ticket queue.</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {slaTiers.map((t) => (
                  <div key={t.label} style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '11px 0', borderTop: '1px solid var(--border-default)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{t.label}</span>
                      <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{t.response}</span>
                    </div>
                    <span style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--text-muted)' }}>{t.example}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 11.5, color: 'var(--at-faint)' }}>Target response times by priority — published per client in the SOW.</p>
            </div>
          </div>

          {/* The remaining four areas, two per row. */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
            {otherCats.map((c, i) => (
              <div key={c.id} id={c.id} data-reveal data-reveal-delay={i * 80} style={{ position: 'relative', scrollMarginTop: 100, background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '30px 30px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {c.anchors.map((a) => (
                  <span key={a} id={a} style={{ position: 'absolute', top: 60 }} />
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={c.icon} size={20} /></span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>{c.kicker}</span>
                    <h3 style={{ margin: 0, fontSize: 21, lineHeight: 1.2, letterSpacing: '-0.01em', fontWeight: 700, color: 'var(--text-heading)' }}>{c.title}</h3>
                  </div>
                </div>
                {c.id === 'cloud' ? (
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>Full management of the platforms your agency lives in — Microsoft 365 or Google Workspace tenancies, plus <strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>operational job-management apps like Synergist</strong> that keep projects and time moving.</p>
                ) : (
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{c.desc}</p>
                )}
                <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                  <span style={{ display: 'block', marginBottom: 10, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Includes</span>
                  <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px 18px', margin: 0, padding: 0, listStyle: 'none' }}>
                    {c.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12.5, lineHeight: 1.45, color: 'var(--text-muted)' }}>
                        <span aria-hidden="true" style={{ width: 5, height: 5, flex: 'none', marginTop: 6, borderRadius: '50%', background: 'var(--at-turquoise)' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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

      {/* 7. WHAT'S INCLUDED + PRICING (merged — one source of truth) */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '104px 32px 40px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680, marginBottom: 44 }}>
            <span className={eyebrow}>What&rsquo;s Included</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Exactly What&rsquo;s in the Package</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>One package, one price per team member — no tiers, no per-ticket surprises, no &ldquo;that&rsquo;s extra.&rdquo; Everything below is in the base price, delivered identically whether you run Microsoft 365 or Google Workspace.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 40px' }}>
            {baseIncludes.map((f, i) => (
              <span key={f} data-reveal data-reveal-delay={Math.min(i * 45, 360)} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}><Icon name="check" size={16} style={{ color: 'var(--at-turquoise)', flex: 'none', marginTop: 2 }} />{f}</span>
            ))}
          </div>

          {/* Pricing — folded into the same section so the inclusions appear once. */}
          <div data-reveal style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 28, padding: '28px 34px', background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£60</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)' }}>/ mo</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>per full-time user</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)' }}>£50</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)' }}>/ mo</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>per freelancer</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
              <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 50, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book an Intro Call <BrandArrow variant="light" size={15} /></a>
              <span style={{ fontSize: 13, color: 'var(--at-faint)' }}>Billed monthly. No long lock-ins.</span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '32px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-heading)' }}>Available as Add-ons</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>Optional extras that sit outside the base package — add them when you need them.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {addOns.map((a, i) => (
              <div key={a.name} data-reveal data-reveal-delay={Math.min(i * 60, 360)} style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '24px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{a.name}</span>
                  {a.price && (
                    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4, flex: 'none' }}>
                      <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--at-turquoise)' }}>{a.price}</span>
                      {a.unit && <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>{a.unit}</span>}
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', textWrap: 'pretty' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FROM IT CLIENTS */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '92px 32px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, textAlign: 'center' }}>
            <span className={eyebrow}>From IT Clients</span>
            <blockquote style={{ margin: 0, fontSize: 24, lineHeight: 1.45, fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '-0.01em', textWrap: 'balance' }}>&ldquo;We passed Cyber Essentials first time. Our biggest client noticed before we&rsquo;d even told them.&rdquo;</blockquote>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Managing Director</strong> · PR agency, Bath <span style={{ opacity: 0.6 }}>(placeholder quote)</span></p>
            <Link href={dcHref('IT Case Studies.dc.html')} data-hover="gap: 10px" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 4, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Read more case studies <BrandArrow variant="dark" size={14} /></Link>
          </div>
        </div>
      </section>

      {/* 9. GO DEEPER */}
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
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <BrandArrow variant="dark" size={14} /></span>
            </Link>
            <Link href={dcHref('ITAD.dc.html')} data-reveal data-reveal-delay={90} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="recycle" size={22} /></span>
              <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>IT Recycling</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>IT asset disposal done properly — secure collection, certified data destruction, resale and recycling.</span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <BrandArrow variant="dark" size={14} /></span>
            </Link>
            <Link href={dcHref('IT Case Studies.dc.html')} data-reveal data-reveal-delay={180} data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 250ms ease, transform 250ms ease' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name="file-text" size={22} /></span>
              <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>IT Case Studies</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>Real problems, measured outcomes — what working with us actually looks like for agencies.</span>
              <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--at-turquoise)' }}>Read more <BrandArrow variant="dark" size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Ready to Stop Firefighting?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>A 30-minute call is enough to tell you whether we&rsquo;re the right fit — and you&rsquo;ll leave with something useful either way.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <BrandArrow variant="light" size={15} /></a>
          </div>
        </div>
      </section>

      <FaqAccordion />

      <SiteFooter />
    </div>
  );
}
