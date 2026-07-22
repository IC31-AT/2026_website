import { redirect } from 'next/navigation';

/* Case studies now live on a single, filterable /case-studies page. This old
   URL redirects to that page with the IT Services filter pre-selected. */
export default function ItCaseStudiesRedirect() {
  redirect('/case-studies?category=it');
}
