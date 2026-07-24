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

/* Public URL for a site photo in the `media` bucket.

   Pass a path relative to the photo root, e.g. photoUrl('heros/home.jpg').
   Objects are currently nested under an extra `media/` folder inside the
   `media` bucket, so the effective key is `media/media/<path>`. If that inner
   folder is ever removed, set MEDIA_INNER to '' — the only place this needs
   changing. */
const MEDIA_BUCKET = 'media';
const MEDIA_INNER = 'media/';

export function photoUrl(path: string): string {
  return storageUrl(`${MEDIA_BUCKET}/${MEDIA_INNER}${path.replace(/^\/+/, '')}`);
}
