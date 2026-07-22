'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMotion, teardown } from '@/lib/siteMotion';

/* Runs the DOM-driven motion effects after every navigation. Mounted once in
   the root layout; re-initialises on pathname change so reveals/count-ups/etc.
   bind to the newly rendered page. */
export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const id = requestAnimationFrame(() => initMotion(document));
    return () => {
      cancelAnimationFrame(id);
      teardown();
    };
  }, [pathname]);
  return null;
}
