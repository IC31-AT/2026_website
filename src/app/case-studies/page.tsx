import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CaseStudyCard from '@/components/CaseStudyCard';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    "Every engagement starts with an honest look at what wasn't working. Here's what happened next — across IT Services and the Futureproofing Program.",
};

const caseDefs = [
  { tag: 'Futureproofing', metric: '2.5', suffix: 'wks', label: 'kickoff to a board-ready 12-month roadmap', client: 'PointZeroGroup · employer comms group', title: 'Understanding What Held PointZeroGroup Back', summary: 'A Phase 1 Futureproofing Audit across three merged agencies — benchmarked on the UWE framework — delivered a sequenced 12-month roadmap in two and a half weeks.', href: 'Case Study PointZeroGroup.dc.html' },
  { tag: 'IT Services', metric: '7', suffix: 'min', label: 'average ticket response time', client: 'Creative agency · 50 people, Bristol', title: 'A Phased Cybersecurity Overhaul', summary: 'Enforced 2FA, phishing simulations, company-wide device protection and a central password manager — plus training that made it stick.', href: '#' },
  { tag: 'Futureproofing', metric: '86', suffix: '%', label: 'of the team already using AI, actively', client: 'SquareEye · legal-sector web agency', title: 'Cutting Through the Noise, Getting Aligned', summary: 'Already ahead on AI but uncoordinated. A four-week audit joined it up — one managed platform, a clear information architecture, and a shared roadmap.', href: 'Case Study SquareEye.dc.html' },
  { tag: 'IT Services', metric: '56', suffix: '%', label: 'Microsoft Secure Score improvement', client: 'Charity · safeguarding data', title: 'A Microsoft 365 Tenant, Secured Properly', summary: 'MFA enforced across every account, dormant and improperly offboarded users cleaned out, and licensing right-sized for non-profit compliance.', href: '#' },
  { tag: 'Futureproofing', metric: '4', suffix: 'hrs/wk', label: 'reclaimed per person, company-wide', client: 'Design & marketing agency · 60+ staff', title: 'AI, From Experimentation to Capability', summary: 'A governed, company-wide ChatGPT rollout — training, custom GPTs and AI-ready file structure — turning random individual use into a repeatable team capability.', href: '#' },
  { tag: 'IT Services', metric: '0', suffix: '', label: 'components sent to landfill', client: 'Six Agency · B-Corp, creative', title: 'An ITAD Clear-Out Aligned to B-Corp Values', summary: 'On-site audit, certified data wipes and a resale rebate — retired Apple kit turned back into capital and studio space, with nothing sent to landfill.', href: '#' },
  { tag: 'Futureproofing', metric: '16', suffix: 'hrs/wk', label: 'of manual data entry removed', client: 'Content agency · 60+ staff', title: 'A Live Database That Maintains Itself', summary: 'Custom automation scraping 1,400+ listings across 32 sources into one accurate, always-current database the whole team relies on.', href: '#' },
  { tag: 'Futureproofing', metric: '34', suffix: '%', label: 'increase in average monthly leads', client: 'Device repair company', title: 'A Technical Overhaul Built to Scale', summary: 'A new website, an AI-driven leads funnel with automated booking, and an internal knowledge base — with 2.5 hours reclaimed per person each week.', href: '#' },
  { tag: 'IT Services', metric: 'Top 50', suffix: '', label: 'UK university — new student service', client: 'Major UK university', title: 'A Hardship Device Scheme, Built End-to-End', summary: 'Launched and validated a service they couldn’t resource in-house — a co-designed framework now being embedded in a new manufacturer tender.', href: '#' },
  { tag: 'Futureproofing', metric: '£48k', suffix: '+', label: 'labour cost saved per year', client: 'Shopify sports-jersey reseller', title: '267 Hours a Month, Automated Away', summary: 'A human-in-the-loop pipeline that ingests, tags, renames, writes copy and drafts listings — scaling output without scaling headcount.', href: '#' },
];

const cases = caseDefs.map((c, i) => ({ ...c, delay: (i % 3) * 90 }));

const moreQuotesDefs = [
  { tag: 'IT Support', delay: 0, hasLogo: true, logoPlaceholder: 'Logo — Synergy Group', quote: "We've used AgencyTech for upgrades and ongoing support with our IT fleet. Their service was quick, well priced and very convenient, offering us a full range of options and their key recommendations, for issues that could have caused great expense. The team was professional, communicative and attentive. We're looking forward to working with them in the future.", name: 'Adam Nor', role: 'IT Manager · Synergy Group' },
  { tag: 'IT Support & FPP', delay: 90, hasLogo: false, logoPlaceholder: '', quote: 'Working with AgencyTech has taken a huge amount of pressure off our leadership team and given us real peace of mind around our cybersecurity standards. The support is fast and proactive, issues get solved before they become problems, and the integrated approach to technology and AI has helped us strengthen our operations, bring structure to how we use our tools, automate admin, and start using AI confidently across the team.', name: 'Charlotte Laing', role: 'CEO · The Content Emporium' },
  { tag: 'IT Support', delay: 180, hasLogo: true, logoPlaceholder: 'Logo — UWE Bristol', quote: 'Casey and the AgencyTech team have been great to work with and have filled a gap in our service, providing support to personally owned devices of our staff and students. We look forward to continue working with them in the future.', name: 'Joanna Dainton', role: 'Head of Circular Economy · UWE Bristol' },
  { tag: 'IT Support', delay: 0, hasLogo: true, logoPlaceholder: 'Logo — University of Bristol', quote: 'AgencyTech delivers fantastic customer service for students and staff. Servicing electrical devices reduces costs for students who don’t have to buy new, as well as contributing to UoB’s circular economy goals.', name: 'Richard Abraham', role: 'IT Engagement Manager · University of Bristol' },
  { tag: 'IT Support', delay: 90, hasLogo: false, logoPlaceholder: '', quote: 'This tech agency provides five-star service. I wholeheartedly endorse their excellent service.', name: 'Cllr Asher Craig', role: 'Ex Deputy Mayor · CEO, Pathway Fund' },
  { tag: 'IT Support', delay: 180, hasLogo: false, logoPlaceholder: '', quote: 'AgencyTech have been a reliable and professional partner throughout our work together. We’ve found them responsive, flexible, and able to handle complex needs at scale, and we’d confidently recommend them to other institutions or businesses.', name: 'Van Pham', role: 'IT Technician · University of Southampton' },
];

const moreQuotesLoop = moreQuotesDefs.concat(moreQuotesDefs);

const eyebrow = 'at-eyebrow';

export default function CaseStudiesPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="case-studies" theme="light" />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--at-grey) 0%, #ffffff 100%)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '168px 32px 64px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className={eyebrow}>Case Studies</span>
          <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 800, color: 'var(--text-heading)', maxWidth: 680, textWrap: 'balance' }}>Real Work, Real Outcomes</h1>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 540, textWrap: 'pretty' }}>Every engagement starts with an honest look at what wasn't working. Here's what happened next — across IT Services and the Futureproofing Program.</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', background: 'var(--at-cyprus)', fontSize: 13.5, fontWeight: 700, color: '#fff' }}>All</span>
            <Link href={dcHref('IT Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}>IT Services</Link>
            <Link href={dcHref('Futureproofing Case Studies.dc.html')} data-hover="background: var(--surface-subtle)" style={{ display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: '#fff', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'background 150ms ease' }}>Futureproofing</Link>
          </div>
        </div>
      </section>

      {/* GRID — all case studies */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {cases.map((c) => (
              <div key={c.title} data-reveal data-reveal-delay={c.delay}>
                <CaseStudyCard tag={c.tag} metric={c.metric} metricSuffix={c.suffix} metricLabel={c.label} client={c.client} title={c.title} summary={c.summary} href={c.href} />
              </div>
            ))}
            <div data-reveal style={{ border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '40px 32px', textAlign: 'center', minHeight: 380 }}>
              <Icon name="file-plus-2" size={28} style={{ color: 'var(--at-faint)' }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>Your Project Here?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 240 }}>More case studies are being written up — and the next one could be yours.</span>
              <a href="#contact" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* MORE CLIENT QUOTES */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 104px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 48 }}>
            <span className={eyebrow}>More From Our Clients</span>
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>Trusted Across Agencies, Charities and Universities</h2>
          </div>
          <div data-loop-carousel style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 10, margin: '0 -32px', paddingLeft: 32, paddingRight: 32 }}>
            {moreQuotesLoop.map((mq, i) => (
              <div key={`${mq.name}-${i}`} style={{ flex: 'none', width: 'calc((100% - 60px) / 4)', display: 'flex', flexDirection: 'column', gap: 16, background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '28px 26px' }}>
                <span style={{ alignSelf: 'flex-start', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>{mq.tag}</span>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', textWrap: 'pretty', flex: 1 }}>&quot;{mq.quote}&quot;</p>
                {mq.hasLogo && (
                  <ImageSlot placeholder={mq.logoPlaceholder} style={{ width: '100%', height: 32, display: 'block' }} />
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

      {/* FINAL CTA */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Want Results Like These?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>Every one of these started with a short call and an honest look at what wasn't working.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
