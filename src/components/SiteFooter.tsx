import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

const linkStyle = { fontSize: 13, color: 'var(--text-on-dark-muted)', textDecoration: 'none' } as const;
const hover = 'color: #fff';

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)', marginBottom: 6 }}>{title}</div>
      {children}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--at-cyprus)', color: 'var(--text-on-dark)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.1fr 1fr 0.8fr 0.8fr 0.8fr', gap: 40, paddingBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingRight: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo_linear_dark.png" alt="AgencyTech" style={{ height: 40, width: 'auto', alignSelf: 'flex-start' }} />
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 260 }}>The strategic tech partner for creative agencies — running today, ready for tomorrow.</p>
            <a href="#" data-hover={hover} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" /></svg>
              LinkedIn
            </a>
          </div>

          <Col title="IT Services">
            <Link href={`${ROUTES.itServices}#managed-it`} data-hover={hover} style={linkStyle}>Managed IT</Link>
            <Link href={`${ROUTES.itServices}#microsoft-365`} data-hover={hover} style={linkStyle}>Microsoft 365</Link>
            <Link href={`${ROUTES.itServices}#google-workspace`} data-hover={hover} style={linkStyle}>Google Workspace</Link>
            <Link href={`${ROUTES.itServices}#operational-apps`} data-hover={hover} style={linkStyle}>Operational Apps</Link>
            <Link href={`${ROUTES.itServices}#voip`} data-hover={hover} style={linkStyle}>VOIP</Link>
            <Link href={`${ROUTES.itServices}#wifi`} data-hover={hover} style={linkStyle}>WiFi</Link>
            <Link href={`${ROUTES.itServices}#connectivity`} data-hover={hover} style={linkStyle}>Connectivity &amp; Broadband</Link>
            <Link href={`${ROUTES.itServices}#cyber-essentials`} data-hover={hover} style={linkStyle}>Cyber Essentials Certification</Link>
            <Link href={ROUTES.phishing} data-hover={hover} style={linkStyle}>Phishing Simulations</Link>
            <Link href={ROUTES.itad} data-hover={hover} style={linkStyle}>ITAD</Link>
          </Col>

          <Col title="Futureproofing Program">
            <Link href={ROUTES.futureproofing} data-hover={hover} style={linkStyle}>Overview</Link>
            <Link href={ROUTES.futureproofingAbout} data-hover={hover} style={linkStyle}>About</Link>
            <Link href={ROUTES.theReview} data-hover={hover} style={linkStyle}>The Review</Link>
            <Link href={ROUTES.ongoingWork} data-hover={hover} style={linkStyle}>Ongoing Work</Link>
            <Link href={ROUTES.automations} data-hover={hover} style={linkStyle}>Automations</Link>
            <Link href={ROUTES.futureproofingCaseStudies} data-hover={hover} style={linkStyle}>Case Studies</Link>
          </Col>

          <Col title="Company">
            <a href="#" data-hover={hover} style={linkStyle}>About</a>
            <Link href={ROUTES.caseStudies} data-hover={hover} style={linkStyle}>Case Studies</Link>
            <a href="#" data-hover={hover} style={linkStyle}>News</a>
            <a href="#contact" data-hover={hover} style={linkStyle}>Contact</a>
          </Col>

          <Col title="Locations">
            <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>Bristol</span>
            <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>Bath</span>
            <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>Somerset</span>
            <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>Gloucester</span>
          </Col>

          <Col title="Legal">
            <a href="#" data-hover={hover} style={linkStyle}>Privacy Policy</a>
            <a href="#" data-hover={hover} style={linkStyle}>Terms &amp; Conditions</a>
            <a href="#" data-hover={hover} style={linkStyle}>Cookie Policy</a>
          </Col>
        </div>

        <div style={{ borderTop: '1px solid var(--border-on-dark)', padding: '22px 0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.55)' }}>© 2026 AgencyTech. Registered in England &amp; Wales.</span>
          <a href="mailto:hello@agencytech.co.uk" data-hover={hover} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--at-turquoise-light)', textDecoration: 'none' }}>hello@agencytech.co.uk</a>
        </div>
      </div>
    </footer>
  );
}
