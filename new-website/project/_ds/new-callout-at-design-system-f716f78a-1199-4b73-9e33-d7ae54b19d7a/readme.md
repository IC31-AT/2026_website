# AgencyTech Design System

The living, code-first expression of the **AgencyTech** brand. It packages the
brand's colours, typography, spacing, logos, iconography and reusable UI so that
any agent — or person — can produce on-brand interfaces, decks and documents
without re-deriving the rules each time.

> "Clarity first. Consistency builds trust. Professional, not cold. Less is more."
> — the four principles that govern every AgencyTech design.

---

## 1. Company & product context

**AgencyTech** is a professional, people-first technology business. The brand
voice is polished and credible without being cold. The visual identity is built
around a tight two-colour palette — **Cyprus** (deep teal) and **Turquoise** —
with generous white space and restrained decoration.

The logomark is a **white/dark chevron ("A" / upward arrow) paired with a
turquoise rounded diamond**, reading as forward momentum and precision. One
product asset seen in the source materials is **NinjaSystray** (a system-tray
utility), suggesting AgencyTech ships desktop/utility software alongside client
work.

### Sources provided
- **`uploads/brand_guidelines.pdf`** — "[V1.0] Brand Guidelines" (11 pages). The
  authoritative source for everything below.
- Brand assets (logos, icons, favicon) — copied into `assets/`.
- Brand asset library (not directly accessible to this project, stored for
  reference): AgencyTech Google Drive → *Branding* folder
  `https://drive.google.com/drive/folders/1cvpWKCgb65zfPR5WW8xF_xZVrizN-2G5`
- AI-ready markdown guidelines:
  `https://drive.google.com/file/d/1tLnvWP9dqbboSYQzPdVyEZt2DnEtlTdY/view`

No codebase or Figma file was provided. UI components and kits here are built
from the brand guidelines and asset set — they are a faithful expression of the
brand system, not a recreation of a specific existing product screen.

---

## 2. Content fundamentals — how AgencyTech writes

- **Spelling:** British English (`colour`, `favour`, `capitalised`,
  `organise`). This is a UK brand — keep `-our`/`-ise` spellings.
- **Tone:** professional but warm — *"polished and credible without being cold
  or impersonal."* People-first. Confident, not salesy.
- **Concision:** *"Less is more."* Keep copy tight; cut anything that doesn't
  serve the message. Favour white space over filler.
- **Voice:** first-person plural for the brand ("we", "our brand"), second
  person to address the reader/user ("you"). E.g. *"Our brand only works if
  it's applied consistently."*
- **Casing rules (headings):**
  - H1 & H2 → **Title Case** (major words of 4+ letters capitalised; e.g.
    *"The Catcher in the Rye"*).
  - H3 & H4 → **Sentence case** (e.g. *"The catcher in the rye"*).
- **Eyebrow text:** ALL CAPS, tracked, used sparingly above an H2 to add
  context. Short.
- **Emoji:** not part of the brand — **do not use emoji**. Use Lucide icons
  instead where a glyph is needed.
- **Punctuation:** straightforward, minimal exclamation. Sentences end cleanly.

**Example of the voice:**
> "Every design should communicate its purpose immediately. Avoid unnecessary
> decoration, and let content lead. If an element doesn't serve the message,
> remove it."

---

## 3. Visual foundations

**Colour.** The whole system rests on two colours:
- **Cyprus `#004040`** — the primary dark background / brand ink.
- **Turquoise `#069A98`** — the accent (CTAs, links, active states).
- On dark backgrounds, step up to the lighter variants — **Turquoise-light
  `#2BBCBA`** for accents and **Cyprus-light `#004B4B`** for raised/layered
  surfaces.
- Neutrals: **Grey `#F7FCFD`** (a barely-there tinted off-white surface) and
  **White `#FFFFFF`**.
- **Borders** are `#E6E6E6` — equivalently pure black at 10% opacity.
- A **secondary palette** (Red / Orange / Yellow / Green / Purple), each with a
  light *tint* and dark *shade*, is available for status and data-viz only —
  used sparingly and never as a primary brand colour.

**Typography.** Brand font is **Manrope** throughout (fallbacks, in order:
Montserrat, Inter, Futura). Clear hierarchy: H1 32pt Bold, H2 28pt Bold, H3 24pt
Semibold, H4 20pt Semibold, body 12pt Regular. Eyebrow is 12pt Semibold, tracked
~0.05em, uppercase. Headings run tight tracking; body stays highly legible.

**Spacing & layout.** Generous white space is a defining trait — restraint reads
as premium. 4px-based spacing scale. Fixed content max-widths keep line lengths
readable. Let content lead; don't fill every gap.

**Corner radii.** Deliberately subtle: small elements (buttons, inputs, tags)
use **`rounded-sm` 0.25rem**; larger elements (cards, panels) use **`rounded-md`
0.375rem**. Pills/avatars fully round. No heavy 16px+ radii.

**Cards.** White surface, 1px `#E6E6E6` border, `rounded-md` corners, and a
soft, Cyprus-tinted shadow (never harsh pure-black). Many surfaces rely on the
border alone with no shadow — flat and clean.

**Highlighted sections.** For emphasis (e.g. "next steps", "book a call"): grey
`#F7FCFD` background + standard border + `rounded-md`. Used sparingly.

**Backgrounds.** Bespoke **"blob scene" background graphics** generated with
[Haikei](https://app.haikei.app/): background `#004040`, blobs `#069A98`, 2
colour steps, low complexity. Four ready-made stock scenes ship in `assets/`
(`blob-scene-1…4`, SVG plus PNG for 1–3) — use them full-bleed behind dark
brand panels, hero units and section dividers. Otherwise: flat Cyprus for dark
sections, white or
grey for light. No busy patterns, no photographic textures by default.

**Shadows.** Soft and Cyprus-tinted (`rgba(0,43,43,…)`), never pure black. Three
elevation steps (sm/md/lg) plus a turquoise focus ring.

**Motion.** Calm and professional — short fades and eases (120–320ms,
standard/ease-out curves). **No bounce, no playful overshoot.**

**Interaction states.**
- *Hover:* accent darkens slightly (Turquoise `#069A98` → `#058886`); neutral
  surfaces tint toward grey.
- *Press/active:* darkens further (`#047270`); no scale/shrink gimmicks.
- *Focus:* 3px turquoise focus ring (`rgba(6,154,152,0.45)`).
- *Disabled:* reduced opacity, muted text.

**Transparency & blur.** Used lightly — border-on-dark and muted text use white
at low alpha over Cyprus. Reserve blur for overlays/scrims; not a decorative
motif.

**Imagery vibe.** Cool, clean, teal-leaning. When photography is used it should
feel professional and uncluttered — matching the "clarity first" principle.

---

## 4. Iconography

- **Library: [Lucide](https://lucide.dev/icons/)** — the open-source icon set,
  used across the brand. Always prefer **SVG**; fall back to high-resolution PNG
  only where SVG isn't possible.
- Icons are **styled to the brand palette** — Cyprus/Turquoise on light, white/
  Turquoise-light on dark. Stroke-based, consistent weight.
- In this project Lucide is loaded from CDN (`lucide@latest`) in the components
  and UI kits. No custom icon font or sprite was provided in the source.
- **No emoji.** Do not substitute emoji for icons.
- **Logos & marks** live in `assets/` (see index below) — the chevron+diamond
  logomark, standard & linear wordmarks, badge/circle icon, and favicon, each in
  light and dark variants.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s all tokens.
- `readme.md` — this guide.
- `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — CSS custom properties
- `fonts.css` (Manrope + Montserrat), `colors.css`, `typography.css`,
  `spacing.css` (spacing/radius/shadow/motion), `base.css` (element defaults +
  `.at-eyebrow`, `.at-highlight` helpers).

**`assets/`** — brand marks & backgrounds
- Logos: `logo_standard_{dark,light}.png`, `logo_linear_{dark,light}.png`,
  `full_logo_{dark_bg,white_bg}.png`
- Icons/marks: `icon_{dark,light}.png`, `icon_{dark,light}_badge.png`,
  `icon_{dark_bg,white_bg}.png`, `favicon.png`
- Blob scenes: `blob-scene-1…4.svg` (+ `.png` for 1–3) — stock Haikei backgrounds

**`components/`** — reusable React primitives (see `components/*/` + cards)
- `core/` — Button, IconButton, Badge, Tag, Card, Avatar, Input, Select,
  Checkbox, Radio, Switch, Tabs, Alert, Tooltip, Eyebrow.

**`ui_kits/`** — full-screen product recreations
- `dashboard/` — AgencyTech admin/dashboard surface.

**`guidelines/` & Design System tab** — foundation specimen cards for Type,
Colours, Spacing and Brand.
