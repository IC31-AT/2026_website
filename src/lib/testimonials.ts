import { ROUTES } from './routes';

/* Shared client testimonials — rendered by <TestimonialsCarousel> on the
   homepage and the case-studies page so both stay in sync. Logos live in
   /public/assets/client-logos. The `tag` is the IT Support / Futureproofing
   label shown bottom-left of each card; `caseStudyHref` (when the client has a
   published case study) adds a "Read the case study" link bottom-right. */
export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  company: string;
  logo?: string;
  tag: string;
  caseStudyHref?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'AgencyTech has taken real pressure off our leadership team and given us genuine peace of mind on cybersecurity. Support is fast and proactive — issues get solved before they become problems — and their integrated approach has us using AI confidently across the team.',
    name: 'Charlotte Laing', title: 'CEO', company: 'The Content Emporium',
    logo: '/assets/client-logos/content-emporium.png', tag: 'IT Support & FPP',
  },
  {
    quote: 'Within two and a half weeks they’d mapped every tool we used and handed us a sequenced 12-month plan we could actually act on. For the first time, we have real clarity on where the business is and what needs to happen next.',
    name: 'Mark Beavan', title: 'Managing Director', company: 'PointZeroGroup',
    logo: '/assets/client-logos/brand-point-zero.png', tag: 'Futureproofing',
    caseStudyHref: ROUTES.caseStudyPointZeroGroup,
  },
  {
    quote: 'A lot of what we talked about made sense — we knew we should be doing these things, but we hadn’t been joining it up or thinking about a proper implementation plan. Having a definite roadmap, with outside accountability, is exactly what we needed.',
    name: 'Katharine Horsman', title: 'Sales and Marketing Director', company: 'SquareEye',
    logo: '/assets/client-logos/squareeye.webp', tag: 'Futureproofing', caseStudyHref: ROUTES.caseStudySquareEye,
  },
  {
    quote: 'AgencyTech handled upgrades and ongoing support across our IT fleet — quick, well-priced and convenient, with clear recommendations on issues that could have cost us dearly. Professional, communicative and attentive throughout.',
    name: 'Adam Nor', title: 'IT Manager', company: 'Synergy Group',
    logo: '/assets/client-logos/synergy-group.png', tag: 'IT Support',
  },
  {
    quote: 'A reliable, professional partner throughout — responsive, flexible, and able to handle complex needs at scale. We’d confidently recommend them to other institutions or businesses.',
    name: 'Van Pham', title: 'IT Technician', company: 'University of Southampton',
    logo: '/assets/client-logos/university-of-southampton.png', tag: 'IT Support',
  },
  {
    quote: 'Casey and the AgencyTech team have been great to work with and have filled a gap in our service, providing support to personally owned devices of our staff and students. We look forward to continuing to work with them.',
    name: 'Joanna Dainton', title: 'Head of Circular Economy', company: 'UWE Bristol',
    logo: '/assets/client-logos/uwe-bristol.webp', tag: 'IT Support',
    caseStudyHref: ROUTES.caseStudyUwe,
  },
  {
    quote: 'AgencyTech delivers fantastic customer service for students and staff. Servicing electrical devices reduces costs for students who don’t have to buy new, and contributes to UoB’s circular economy goals.',
    name: 'Richard Abraham', title: 'IT Engagement Manager', company: 'University of Bristol',
    logo: '/assets/client-logos/university-of-bristol.png', tag: 'IT Support',
  },
  {
    quote: 'AgencyTech feel like an extension of our team — they’ve strengthened our Microsoft 365 security, supported us through licensing changes, and cleaned up legacy accounts to reduce risk. The client portal and clear guidance give us confidence everything is managed properly.',
    name: 'Geeta Rowland', title: '', company: 'The Harbour',
    logo: '/assets/client-logos/the-harbour.png', tag: 'IT Support',
  },
  {
    quote: 'This tech agency provides five-star service. I wholeheartedly endorse their excellent service.',
    name: 'Cllr Asher Craig', title: 'Ex Deputy Mayor & CEO', company: 'Pathway Fund',
    logo: '/assets/client-logos/pathway-fund.webp', tag: 'IT Support',
  },
  {
    quote: 'AgencyTech’s asset-collection solution aligns with Six’s sustainability and B-Corp values — cyber-secure asset handling that reduces landfill and supports community reuse.',
    name: 'Dan Pritchard', title: 'Head of Production', company: 'Six Agency',
    logo: '/assets/client-logos/six-agency.png', tag: 'IT Support',
    caseStudyHref: ROUTES.caseStudySix,
  },
];
