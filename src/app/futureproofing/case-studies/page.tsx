import { redirect } from 'next/navigation';

/* Case studies now live on a single, filterable /case-studies page. This old
   URL redirects to that page with the Futureproofing filter pre-selected. */
export default function FutureproofingCaseStudiesRedirect() {
  redirect('/case-studies?category=futureproofing');
}
