import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ImageSlot from '@/components/ImageSlot';
import Icon from '@/components/Icon';
import BrandArrow from '@/components/BrandArrow';
import { photoUrl } from '@/lib/media';
import ReviewToTrainingReveal from '@/components/ReviewToTrainingReveal';
import HowItRunsWalkthrough from '@/components/HowItRunsWalkthrough';
import TierScoreReveal from '@/components/TierScoreReveal';
import FpAnchorNav from '@/components/FpAnchorNav';
import FpOngoingWork from '@/components/FpOngoingWork';
import { dataUri } from '@/lib/blobscene';
import { dcHref } from '@/lib/routes';

/* One continuous background graphic for the whole page — a single brand blob
   scene (Cyprus base, nested corner contours flowing down the right edge),
   sized tall so it spans the full page. Replaces the four separate cropped
   scenes that previously left visible seams between sections. */
const pageBlob = dataUri({ width: 1400, height: 4200, corner: 'tr', layers: 5, points: 6, jitter: 0.02, palette: 'brandTeal', seed: 11 });

export const metadata: Metadata = {
  title: 'About the Futureproofing Program',
  description:
    'The Futureproofing Program starts with a fixed-price audit — The Review — that scores where your agency stands today and hands you a prioritised 12-month roadmap.',
};

const eyebrow = 'at-eyebrow';

export default function FutureproofingAboutPage() {
  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', color: 'var(--text-on-dark)', background: 'var(--at-cyprus)' }}>
      {/* Single, page-spanning background graphic (see pageBlob above). Sits
          behind all content; transparent sections let it show through as one
          continuous scene, opaque sections (reveal, white CTA, footer) cover it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pageBlob} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top right', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />
      {/* Keep the very top solid dark green — masks the light turquoise blob
          contours behind the hero, then fades to let the scene show through below. */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 640, background: 'linear-gradient(180deg, var(--at-cyprus) 0%, var(--at-cyprus) 14%, transparent 100%)', pointerEvents: 'none', zIndex: 0 }} />

      <SiteNav active="fp" theme="dark" />

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', padding: '176px 32px 84px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <span className={eyebrow} style={{ color: 'var(--at-turquoise-light)' }}>About the Program</span>
          <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.06, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', textWrap: 'balance' }}>A Clear Read on Where You Stand — and a Path to Where You’re Going</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 560, textWrap: 'pretty' }}>The Futureproofing Program starts with a fixed-price audit — The Review — that scores where your agency stands today and hands you a prioritised 12-month roadmap. From there, act on it yourselves or bring us in to build it with you.</p>
        </div>
      </section>

      {/* CLIENT PHOTO + QUOTE */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '88px 32px 96px' }}>
          <div data-reveal style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--at-cyprus)', minHeight: 420 }}>
            <ImageSlot src={photoUrl('clients/mark-pzg.png')} alt="Mark, Point Zero Group" sizes="(max-width: 900px) 100vw, 400px" placeholder="Photo — Mark, Point Zero Group" style={{ width: '100%', height: '100%', minHeight: 320, display: 'block' }} />
            <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center', background: '#fff' }}>
              <Icon name="quote" size={36} style={{ color: 'var(--at-turquoise)', opacity: 0.8 }} />
              <blockquote style={{ margin: 0, fontSize: 26, lineHeight: 1.45, fontWeight: 600, color: 'var(--at-cyprus)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>“Within two and a half weeks they’d spoken to the whole team, mapped every tool we used, and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.”</blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--at-cyprus)' }}>Mark Beavan</span>
                <span style={{ fontSize: 13.5, color: 'var(--at-turquoise)' }}>Managing Director · PointZeroGroup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ANCHOR NAV — inline here, sticks under the site navbar on scroll */}
      <FpAnchorNav />

      {/* HOW THE PROGRAM WORKS — review > implementation > training animation */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <ReviewToTrainingReveal />
      </section>

      {/* HOW IT RUNS (P1 — "Review" anchor) — scroll-driven walkthrough, one large
          step at a time, closing on the "yours to keep" beat.
          No overflow:hidden here — it would create a scroll container and break
          the component's internal position:sticky pin. */}
      <section id="review" style={{ position: 'relative', zIndex: 1, background: 'transparent', scrollMarginTop: 'var(--fp-anchor-offset, 170px)' }}>
        <HowItRunsWalkthrough />
      </section>

      {/* HOW WE SCORE IT — scroll-driven five-slide reveal building the tier ladder.
          No overflow:hidden here (see note above — it breaks position:sticky). */}
      <section style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <TierScoreReveal />
      </section>

      {/* P2 "Ongoing Work" + What Gets Built + proof + pricing summary */}
      <FpOngoingWork />

      {/* FINAL CTA */}
      <section id="contact" style={{ position: 'relative', zIndex: 1, background: '#fff', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 108px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--at-cyprus)', textWrap: 'balance' }}>See Where You Land</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--at-muted)', maxWidth: 460, textWrap: 'pretty' }}>The Review is where the model meets your business — a clear, honest picture of exactly which stage you’re at.</p>
            <Link href={dcHref('Book The Review.dc.html')} data-hover="background: var(--accent-hover); transform: scale(1.02)" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', marginTop: 6, transition: 'background 200ms ease, transform 200ms ease' }}>Book The Review <BrandArrow variant="light" size={15} /></Link>
          </div>
        </div>
      </section>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SiteFooter />
      </div>
    </div>
  );
}
