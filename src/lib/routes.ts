/* Central mapping from the design prototype's ".dc.html" filenames to the
   Next.js route paths used across the site. Shared components and pages import
   ROUTES for internal links so every href stays consistent. */
export const ROUTES = {
  home: '/',
  itServices: '/it-services',
  phishing: '/phishing-simulations',
  itad: '/itad',
  futureproofing: '/futureproofing',
  futureproofingAbout: '/futureproofing/about',
  theReview: '/the-review',
  ongoingWork: '/ongoing-work',
  automations: '/automations',
  bookTheReview: '/book-the-review',
  aiReadinessAudit: '/ai-readiness-audit',
  about: '/about',
  contact: '/contact',
  // Case studies now live on one filterable page; the category query pre-selects
  // a filter without splitting them across separate URLs.
  caseStudies: '/case-studies',
  itCaseStudies: '/case-studies?category=it',
  futureproofingCaseStudies: '/case-studies?category=futureproofing',
  caseStudyPointZeroGroup: '/case-studies/pointzerogroup',
  caseStudySquareEye: '/case-studies/squareeye',
} as const;

/* Filename (without extension, as linked in the prototypes) -> route path. */
const DC_TO_ROUTE: Record<string, string> = {
  'Home': ROUTES.home,
  'IT Services': ROUTES.itServices,
  'IT Case Studies': ROUTES.itCaseStudies,
  'Phishing Simulations': ROUTES.phishing,
  'ITAD': ROUTES.itad,
  'Futureproofing': ROUTES.futureproofing,
  'Futureproofing About': ROUTES.futureproofingAbout,
  'Futureproofing Case Studies': ROUTES.futureproofingCaseStudies,
  'The Review': ROUTES.theReview,
  'Ongoing Work': ROUTES.ongoingWork,
  'Automations': ROUTES.automations,
  'Book The Review': ROUTES.bookTheReview,
  'AI Readiness Audit': ROUTES.aiReadinessAudit,
  'About Us': ROUTES.about,
  'Contact': ROUTES.contact,
  'Get in Touch': ROUTES.contact,
  'Case Studies': ROUTES.caseStudies,
  'Case Study PointZeroGroup': ROUTES.caseStudyPointZeroGroup,
  'Case Study SquareEye': ROUTES.caseStudySquareEye,
};

/* Convert a prototype href ("The Review.dc.html#foo", "#contact", "#") into a
   real route path, preserving any hash fragment. */
export function dcHref(href: string): string {
  if (!href || href === '#') return '#';
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return href;
  const [file, hash] = href.split('#');
  const name = file.replace(/\.dc\.html$/i, '').trim();
  const route = DC_TO_ROUTE[name];
  if (!route) return href;
  return hash ? `${route}#${hash}` : route;
}
