/* Helpers for referencing media assets.

   Photography is committed under /public/assets and referenced directly
   (e.g. "/assets/photos/home-hero.jpg"). Video is hosted in a public Supabase
   Storage bucket and referenced via its public CDN URL — build that URL with
   `storageUrl`, passing the "<bucket>/<path>" within the project.

   Example: storageUrl('media/testimonials/charlotte-laing.mp4') */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export function storageUrl(bucketPath: string): string {
  if (!SUPABASE_URL) {
    // Surfaces a misconfigured env at call time rather than silently 404ing.
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set — cannot build a storage URL.');
  }
  const clean = bucketPath.replace(/^\/+/, '');
  return `${SUPABASE_URL}/storage/v1/object/public/${clean}`;
}
