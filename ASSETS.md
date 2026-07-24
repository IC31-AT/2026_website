# Image assets checklist

All images live in the Supabase `media` bucket. Paths below are relative to that
bucket (i.e. the full public path is `media/<folder>/<file>`). Served optimised
via next/image (Supabase host is whitelisted in `next.config.mjs`).

Cropped `object-fit: cover`, so aspect just needs to be close — orientation hint
is what matters. Export sensible JPGs (~1600px wide heroes, ~600px headshots, q~80).

26 images total.

## Checklist (alphabetical)

- [ ] `media/avatars/casey.jpg` — Book-a-call bar avatar · square ~300px
- [ ] `media/case-studies/ai-rollout.jpg` — company-wide AI rollout (anon. agency) · blurred bg behind stats
- [ ] `media/case-studies/cybersecurity-overhaul.jpg` — 50-person creative agency, Bristol (anon.) · blurred bg behind stats
- [ ] `media/case-studies/ecommerce-automation.jpg` — reseller of modern & vintage shirts (267 hrs/mo automated) · blurred bg behind stats
- [ ] `media/case-studies/hardship-device-scheme.jpg` — university student hardship device scheme · blurred bg behind stats
- [ ] `media/case-studies/live-database.jpg` — 60-person agency, self-maintaining database (anon.) · blurred bg behind stats
- [ ] `media/case-studies/microsoft-365-security.jpg` — a growing charity (safeguarding data) · blurred bg behind stats
- [ ] `media/case-studies/pointzerogroup.jpg` — PointZeroGroup (3 merged agencies) · blurred bg behind stats
- [ ] `media/case-studies/six-agency.jpg` — Six Agency (ITAD, MacBooks/displays) · blurred bg behind stats
- [ ] `media/case-studies/squareeye.jpg` — SquareEye (web design, legal sector) · blurred bg behind stats
- [ ] `media/case-studies/technical-overhaul.jpg` — fast-growing device repair company · blurred bg behind stats
- [ ] `media/clients/mark-pzg.jpg` — Mark, Point Zero Group (FP → About quote panel) · portrait
- [ ] `media/fpp-cards/card-1.jpg` — FPP scroll animation (review)
- [ ] `media/fpp-cards/card-2.jpg` — FPP scroll animation (review)
- [ ] `media/fpp-cards/card-3.jpg` — FPP scroll animation (implementation)
- [ ] `media/fpp-cards/card-4.jpg` — FPP scroll animation (implementation)
- [ ] `media/fpp-cards/card-5.jpg` — FPP scroll animation (training)
- [ ] `media/fpp-cards/card-6.jpg` — FPP scroll animation (training)
- [ ] `media/heros/about-team.jpg` — About page team banner · wide ~2000×900
- [ ] `media/heros/futureproofing.jpg` — Futureproofing hero · landscape-ish
- [ ] `media/heros/home.jpg` — Home hero · portrait-ish
- [ ] `media/heros/it-services.jpg` — IT Services hero · portrait-ish
- [ ] `media/heros/itad.jpg` — ITAD hero · landscape-ish
- [ ] `media/team/ben.jpg` — team headshot · 4:3 ~600px
- [ ] `media/team/casey.jpg` — team headshot · 4:3 ~600px
- [ ] `media/team/ishaan.jpg` — team headshot · 4:3 ~600px

## Video (not in Supabase)

- Testimonial → Cloudflare Stream. Send the Stream video ID and it gets wired into `VideoEmbed`.
