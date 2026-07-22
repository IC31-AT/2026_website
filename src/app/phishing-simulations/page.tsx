import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import { dcHref } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Phishing Simulations',
  description:
    'We send your team realistic phishing emails in a safe, controlled way — then turn every click into training, not blame.',
};

const steps = [
  { n: '01', icon: 'target', title: 'Baseline simulation', desc: 'A realistic campaign lands in your team’s inboxes, unannounced. No consequences — just an honest measure of where you start.', delay: 0 },
  { n: '02', icon: 'mails', title: 'Targeted campaigns', desc: 'Follow-up simulations mirror real threats to agencies — fake client emails, invoice fraud, credential harvesting.', delay: 90 },
  { n: '03', icon: 'graduation-cap', title: 'Training, not blame', desc: 'Anyone who clicks gets short, practical micro-training in the moment it matters most. Nobody gets named and shamed.', delay: 180 },
  { n: '04', icon: 'line-chart', title: 'Reporting you can show', desc: 'Clear quarterly reporting — click rates, report rates, trend lines — fit for your board and your clients’ security questionnaires.', delay: 270 },
];

const eyebrow = 'at-eyebrow';

export default function PhishingSimulationsPage() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <SiteNav active="it" theme="dark" />

      {/* ================ HERO ================ */}
      <section style={{ position: 'relative', background: 'var(--at-cyprus)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/blob-scene-3.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '176px 32px 112px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
              <Link href={dcHref('IT Services.dc.html')} style={{ color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>IT Services</Link> <Icon name="chevron-right" size={13} /> Phishing Simulations
            </span>
            <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>Your Team Will Be Phished. Practise First.</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: 480, textWrap: 'pretty' }}>We send your team realistic phishing emails in a safe, controlled way — then turn every click into training, not blame.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
              <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Run a Baseline Simulation</a>
              <a href="#how" data-hover="background: rgba(255,255,255,0.08); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.28)', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>How It Works</a>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: 430, background: 'var(--at-cyprus-light)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--border-on-dark)' }}>
                <Icon name="mail-warning" size={17} style={{ color: 'var(--at-turquoise-light)' }} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Simulation campaign · live</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: 'var(--at-green)', background: 'rgba(42,187,127,0.15)', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>SAFE</span>
              </div>
              <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '13px 15px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>From: accounts@invoice-portal-secure.net</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>URGENT: Invoice #8841 payment overdue</span>
                  <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)' }}>Please review the attached invoice immediately…</span>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>38</span>
                    <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)' }}>emails delivered</span>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--at-orange)' }}>9</span>
                    <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)' }}>clicked the link</span>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--at-turquoise-light)' }}>12</span>
                    <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)' }}>reported it</span>
                  </div>
                </div>
                <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.4)' }}>Illustrative dashboard mockup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ HOW IT WORKS ================ */}
      <section id="how" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 560, marginBottom: 52 }}>
            <span className={eyebrow}>How It Works</span>
            <h2 style={{ margin: 0, fontSize: 38, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>A Cycle, Not a One-Off Test</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {steps.map((s) => (
              <div key={s.n} data-reveal data-reveal-delay={s.delay} style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '28px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'rgba(6,154,152,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--at-turquoise)' }}><Icon name={s.icon} size={21} /></span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--at-faint)', letterSpacing: '0.04em' }}>{s.n}</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: 'var(--text-heading)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ WHY IT MATTERS ================ */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '100px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className={eyebrow}>Why It Matters</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>The Attack That Doesn’t Need to Hack Anything</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Most breaches don’t start with clever code — they start with one convincing email on a busy afternoon. Agencies are attractive targets: client money moves through your inbox, and deadlines make people click fast. <span style={{ color: 'var(--at-faint)' }}>(Placeholder threat copy — swap in sourced stats.)</span></p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>Filters catch a lot. They will never catch everything. Your team is the last line of defence — so it’s worth knowing, honestly, how they’d do.</p>
          </div>
          <div data-reveal data-reveal-delay={100} style={{ background: 'var(--at-cyprus)', borderRadius: 'var(--radius-md)', padding: '52px 44px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ display: 'flex', alignItems: 'baseline' }}>
              <span data-countup="9" style={{ fontSize: 120, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--at-turquoise-light)' }}>9</span>
              <span style={{ fontSize: 56, lineHeight: 1, fontWeight: 800, color: 'var(--at-turquoise-light)' }}>/10</span>
            </span>
            <span style={{ fontSize: 16.5, fontWeight: 600, color: '#fff' }}>cyber attacks start with a phishing email</span>
            <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>Placeholder stat — replace with a sourced figure before launch.</span>
          </div>
        </div>
      </section>

      {/* ================ CASE STUDY ================ */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '104px 32px 96px' }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            <span className={eyebrow}>Case Study</span>
            <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-heading)' }}>What Changed After the First Campaign</h2>
          </div>
          <div data-reveal data-reveal-delay={80} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', overflow: 'hidden' }}>
            <div style={{ background: 'var(--at-cyprus)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontSize: 84, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through', textDecorationThickness: 5, textDecorationColor: 'var(--at-red)' }}><span data-countup="24">24</span>%</span>
                <Icon name="arrow-right" size={28} style={{ color: 'rgba(255,255,255,0.5)' }} />
                <span style={{ fontSize: 84, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--at-turquoise-light)' }}><span data-countup="3">3</span>%</span>
              </span>
              <span style={{ fontSize: 15.5, fontWeight: 600, color: '#fff', marginTop: 10 }}>click rate, six months apart</span>
              <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.55)' }}>Placeholder metrics — real case study data to follow.</span>
            </div>
            <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>Creative agency · 40 people · Bristol</span>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', textWrap: 'pretty' }}>The baseline campaign landed on a Tuesday morning. Nearly a quarter of the team clicked. Six months of targeted simulations and in-the-moment training later, clicks had all but disappeared — and reports to IT had tripled.</p>
              <Link href={dcHref('IT Case Studies.dc.html')} data-hover="gap: 12px" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none', transition: 'gap 200ms ease' }}>Read the full case study <Icon name="arrow-right" size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================ FINAL CTA ================ */}
      <section id="contact" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Find Out Before an Attacker Does</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>A baseline simulation takes days to set up and tells you exactly where you stand. Most teams are surprised by the result.</p>
            <a href="mailto:hello@agencytech.co.uk" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call <Icon name="arrow-right" size={17} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
