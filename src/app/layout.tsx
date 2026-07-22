import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteMotion from '@/components/SiteMotion';
import PageWipe from '@/components/PageWipe';

export const metadata: Metadata = {
  title: {
    default: 'AgencyTech — The strategic tech partner for creative agencies',
    template: '%s · AgencyTech',
  },
  description:
    'AgencyTech keeps creative agencies running today and ready for tomorrow — managed IT, security, and a structured Futureproofing Program for AI readiness.',
  icons: { icon: '/assets/favicon.png' },
  metadataBase: new URL('https://agencytech.co.uk'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <SiteMotion />
        <PageWipe />
      </body>
    </html>
  );
}
