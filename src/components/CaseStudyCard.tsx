import Link from 'next/link';
import { dcHref } from '@/lib/routes';

/* Case study teaser card — dark metric header over a white body. Ported from
   the "Case Study Card" design component. Hover lift is handled by the global
   data-hover delegation in siteMotion. */
export default function CaseStudyCard({
  tag = 'IT Services',
  metric = '',
  metricSuffix = '',
  metricLabel = '',
  client = '',
  title = '',
  summary = '',
  href = '#',
  featured = false,
}: {
  tag?: string;
  metric?: string;
  metricSuffix?: string;
  metricLabel?: string;
  client?: string;
  title?: string;
  summary?: string;
  href?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={dcHref(href)}
      data-hover="box-shadow: var(--shadow-md); transform: translateY(-3px)"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        textDecoration: 'none',
        fontFamily: 'var(--font-sans)',
        height: '100%',
        transition: 'box-shadow 250ms ease, transform 250ms ease',
      }}
    >
      <span style={{ position: 'relative', background: 'var(--at-cyprus)', padding: '34px 30px 30px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {featured && (
          <span style={{ position: 'absolute', top: 14, right: 16, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--at-cyprus)', background: 'var(--at-turquoise-light)', padding: '4px 9px', borderRadius: 'var(--radius-pill)' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2Z" /></svg>
            Featured
          </span>
        )}
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{ fontSize: 60, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--at-turquoise-light)' }}>{metric}</span>
          <span style={{ fontSize: 26, lineHeight: 1, fontWeight: 700, color: 'var(--at-turquoise-light)' }}>{metricSuffix}</span>
        </span>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>{metricLabel}</span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '24px 30px 28px', flex: 1 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', border: '1px solid rgba(6,154,152,0.22)', padding: '3px 9px', borderRadius: 'var(--radius-pill)' }}>{tag}</span>
          <span style={{ fontSize: 12, color: 'var(--at-faint)' }}>{client}</span>
        </span>
        <span style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</span>
        <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>{summary}</span>
        <span style={{ marginTop: 'auto', paddingTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 700, color: 'var(--at-turquoise)' }}>
          Read case study
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </span>
      </span>
    </Link>
  );
}
