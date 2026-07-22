'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { ROUTES } from '@/lib/routes';

type Active = 'home' | 'it' | 'fp' | 'case-studies' | 'about' | 'news' | '';

const itAnchorLinks = [
  { label: 'Managed IT', href: `${ROUTES.itServices}#managed-it` },
  { label: 'Microsoft 365', href: `${ROUTES.itServices}#microsoft-365` },
  { label: 'Google Workspace', href: `${ROUTES.itServices}#google-workspace` },
  { label: 'Operational Apps', href: `${ROUTES.itServices}#operational-apps` },
  { label: 'VOIP', href: `${ROUTES.itServices}#voip` },
  { label: 'WiFi', href: `${ROUTES.itServices}#wifi` },
  { label: 'Connectivity & Broadband', href: `${ROUTES.itServices}#connectivity` },
  { label: 'Cyber Essentials Certification', href: `${ROUTES.itServices}#cyber-essentials` },
];
const itServiceLinks = [
  { label: 'Managed IT', sub: 'Proactive, fully managed support', href: `${ROUTES.itServices}#managed-it` },
  { label: 'Phishing Simulations', sub: 'Test and train your team', href: ROUTES.phishing },
  { label: 'IT Recycling', sub: 'Secure IT asset disposal', href: ROUTES.itad },
];
const fpAboutLinks = [
  { label: 'About', sub: 'The Futureproofing Program', href: ROUTES.futureproofingAbout },
  { label: 'Case Studies', sub: 'Futureproofing in practice', href: ROUTES.futureproofingCaseStudies },
];
const fpServiceLinks = [
  { label: 'The Review', sub: 'Phase 1 — where you stand', href: ROUTES.theReview },
  { label: 'Ongoing Work', sub: 'Phase 2 — advisory & delivery', href: ROUTES.ongoingWork },
  { label: 'Automations', sub: 'Bespoke, one-off builds', href: ROUTES.automations },
];

export default function SiteNav({ active = '', theme = 'light' }: { active?: Active; theme?: 'light' | 'dark' }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | 'it' | 'fp'>(null);
  const closeT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = theme === 'dark' && !scrolled;
  const base = dark ? 'rgba(255,255,255,0.88)' : 'var(--text-heading)';
  const col = (key: Active) => (active === key ? 'var(--at-turquoise)' : base);

  const open = (m: 'it' | 'fp') => { clearTimeout(closeT.current); setOpenMenu(m); };
  const closeMenus = () => { clearTimeout(closeT.current); closeT.current = setTimeout(() => setOpenMenu(null), 120); };

  const navLinkStyle = (color: string) => ({
    padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontWeight: 600,
    textDecoration: 'none', color, transition: 'color 200ms ease',
  } as const);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'background 350ms ease, box-shadow 350ms ease', fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 76, display: 'flex', alignItems: 'center', gap: 40 }}>
        <Link href={ROUTES.home} data-cursor style={{ display: 'flex', alignItems: 'center', flex: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dark ? '/assets/logo_linear_dark.png' : '/assets/logo_linear_light.png'} alt="AgencyTech" style={{ height: 24, display: 'block' }} />
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, justifyContent: 'flex-end' }}>
          <Link href={ROUTES.home} data-hover="color: var(--at-turquoise)" style={navLinkStyle(col('home'))}>Home</Link>

          <div style={{ position: 'relative' }} onMouseEnter={() => open('it')} onMouseLeave={closeMenus}>
            <Link href={ROUTES.itServices} data-hover="color: var(--at-turquoise)" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...navLinkStyle(col('it')) }}>
              IT Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}><path d="m6 9 6 6 6-6" /></svg>
            </Link>
            {openMenu === 'it' && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 10 }}>
                <div style={{ width: 600, background: 'var(--at-white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div className="at-eyebrow" style={{ padding: '6px 10px', fontSize: 11 }}>What We Cover</div>
                    {itAnchorLinks.map((l) => (
                      <Link key={l.label} href={l.href} data-cursor data-hover="background: var(--surface-subtle); color: var(--at-turquoise)" style={{ display: 'block', padding: '7px 10px', borderRadius: 'var(--radius-sm)', fontSize: 13.5, fontWeight: 500, color: 'var(--text-body)', textDecoration: 'none', transition: 'background 150ms ease, color 150ms ease' }}>{l.label}</Link>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderLeft: '1px solid var(--border-default)', paddingLeft: 28 }}>
                    <div className="at-eyebrow" style={{ padding: '6px 10px', fontSize: 11 }}>Services</div>
                    {itServiceLinks.map((l) => (
                      <Link key={l.label} href={l.href} data-cursor data-hover="background: var(--surface-subtle)" style={{ display: 'block', padding: '9px 10px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 150ms ease' }}>
                        <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: 'var(--text-heading)' }}>{l.label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{l.sub}</span>
                      </Link>
                    ))}
                    <Link href={ROUTES.itServices} data-cursor style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 10px', marginTop: 2, fontSize: 12.5, fontWeight: 700, color: 'var(--at-turquoise)', textDecoration: 'none' }}>
                      All services
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                    <Link href={ROUTES.itCaseStudies} data-cursor data-hover="background: var(--at-cyprus-light)" style={{ display: 'block', marginTop: 14, padding: 16, borderRadius: 'var(--radius-sm)', background: 'var(--at-cyprus)', textDecoration: 'none', transition: 'background 200ms ease' }}>
                      <span style={{ display: 'block', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--at-turquoise-light)' }}>Case Studies</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 13, fontWeight: 600, color: '#fff' }}>
                        Results for agencies like yours
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ position: 'relative' }} onMouseEnter={() => open('fp')} onMouseLeave={closeMenus}>
            <Link href={ROUTES.futureproofingAbout} data-hover="color: var(--at-turquoise)" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...navLinkStyle(col('fp')) }}>
              Futureproofing Program
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}><path d="m6 9 6 6 6-6" /></svg>
            </Link>
            {openMenu === 'fp' && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 10 }}>
                <div style={{ width: 460, background: 'var(--at-white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div className="at-eyebrow" style={{ padding: '6px 10px', fontSize: 11 }}>The Program</div>
                    {fpAboutLinks.map((l) => (
                      <Link key={l.label} href={l.href} data-cursor data-hover="background: var(--surface-subtle)" style={{ display: 'block', padding: '9px 10px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 150ms ease' }}>
                        <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: 'var(--text-heading)' }}>{l.label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{l.sub}</span>
                      </Link>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderLeft: '1px solid var(--border-default)', paddingLeft: 28 }}>
                    <div className="at-eyebrow" style={{ padding: '6px 10px', fontSize: 11 }}>Services</div>
                    {fpServiceLinks.map((l) => (
                      <Link key={l.label} href={l.href} data-cursor data-hover="background: var(--surface-subtle)" style={{ display: 'block', padding: '9px 10px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'background 150ms ease' }}>
                        <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: 'var(--text-heading)' }}>{l.label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{l.sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href={ROUTES.caseStudies} data-hover="color: var(--at-turquoise)" style={navLinkStyle(col('case-studies'))}>Case Studies</Link>
          <a href="#" data-hover="color: var(--at-turquoise)" style={navLinkStyle(col('about'))}>About</a>
          <a href="#" data-hover="color: var(--at-turquoise)" style={navLinkStyle(col('news'))}>News</a>
        </nav>
        <a href="#contact" data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 22px', height: 44, background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}>Book a Call</a>
      </div>
      <Link href={ROUTES.aiReadinessAudit} data-cursor data-hover="opacity: 0.92" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 40, background: 'linear-gradient(90deg, var(--at-cyprus) 0%, var(--at-turquoise) 100%)', color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'opacity 150ms ease' }}>
        <Icon name="sparkles" size={14} />
        Free AI Readiness Mini-Audit — see exactly where you stand, in 5 minutes
        <Icon name="arrow-right" size={14} />
      </Link>
    </div>
  );
}
