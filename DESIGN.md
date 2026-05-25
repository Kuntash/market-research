<design_plan>
1. Python RNG Execution
```py
prompt_char_count = 318
hero_layout = "Cinematic Center"; font_stack = "Outfit"
component_arsenal = ["Inline Typography Images", "Horizontal Accordions", "Infinite Marquee"]; gsap_paradigms = ["Card Stacking", "Scroll Pinning"]
```
2. AIDA Check
Navigation is a floating command-bar shell. Attention is a cinematic landing hero. Interest is handled by a dense bento grid plus accordion slices. Desire is handled by pinned story sections and stacked signal cards. Action ends in a high-contrast CTA band and a minimal footer.
3. Hero Math Verification
Use `max-w-6xl` for the H1 container with a target size around `clamp(3.5rem, 6vw, 6.5rem)` so the headline stays within 2 to 3 lines on desktop. No stamp icons, no raw market stats, and no spammy pill tags under the hero.
4. Bento Density Verification
Primary marketing bento uses a 12-column grid with `grid-flow-dense` and four cards sized `4x2`, `3x1`, `5x1`, and `8x1 + 4x1` across two rows. Row 1 fills `4 + 3 + 5 = 12`; row 2 fills `8 + 4 = 12`; zero dead cells.
5. Label Sweep & Button Check
Do not use labels such as "SECTION 01", "QUESTION 05", or "ABOUT US". Primary buttons sit on dark surfaces with light text; secondary buttons sit on light or glass surfaces with dark text.
</design_plan>

# Market Research Design System

## Product Positioning

This product should feel like a calm, expensive research terminal for thoughtful retail investors, not a hyperactive trading dashboard. The emotional target is "I can think clearly here." The visual blend is:

- Linear's precision and restrained hierarchy
- Notion's spaciousness and readability
- A financial product's trust and signal density
- A modern AI product's responsiveness and layered motion

The interface should make market research feel editorial, composed, and current. Every screen should communicate that the system is continuously scanning the internet, summarizing relevance, and helping users decide what deserves attention.

## Design Direction

### Core Mood

- Quiet confidence over loud finance aesthetics
- Deep surfaces, subtle glow, soft edges, controlled contrast
- Editorial typography with wide line lengths, never cramped
- Motion used to reveal structure and focus, not decoration

### Visual Language

- Use dark neutral foundations with cool mineral greens and warm paper highlights
- Prefer blurred radial washes, faint grid textures, and low-contrast separators over hard boxes
- Cards should feel laminated and premium: tinted glass, soft borders, restrained shadows
- Avoid meme-finance tropes: neon candlestick overload, bright red/green everywhere, fake trading urgency

### Brand Metaphor

The product is a signal observatory. The user is not "watching prices"; they are scanning for meaning. This metaphor should influence naming, icon choice, motion, and layout rhythm.

## Palette

Use semantic tokens rather than raw hex in implementation.

### Core Tokens

- `bg.canvas`: `#07111A`
- `bg.elevated`: `#0D1824`
- `bg.panel`: `#112131`
- `bg.inverse`: `#F4EFE6`
- `fg.primary`: `#F5F7FA`
- `fg.secondary`: `#A8B6C5`
- `fg.muted`: `#6F8091`
- `line.soft`: `rgba(201, 216, 231, 0.12)`
- `line.strong`: `rgba(201, 216, 231, 0.22)`

### Accent Tokens

- `accent.signal`: `#6EE7C8`
- `accent.signal-deep`: `#1EA885`
- `accent.paper-gold`: `#D6B98A`
- `accent.alert`: `#FF8A65`
- `accent.info`: `#7CC7FF`

### Surface Recipes

- Hero background: deep navy canvas plus radial wash from top center using `accent.signal` at 10 to 14 percent opacity
- Glass panel: `rgba(17, 33, 49, 0.68)` with `backdrop-blur-xl` and `line.soft`
- Warm editorial panel: `bg.inverse` with dark text for report excerpts, pricing, or onboarding moments

### Usage Rules

- Reserve red and green for status deltas and alert urgency only
- Use `accent.signal` as the system's intelligence color
- Use `accent.paper-gold` for premium editorial emphasis, not CTA primaries

## Typography

Deterministic font selection from the skill is `Outfit`.

### Font Stack

- Primary sans: `Outfit`
- Secondary serif accent for occasional editorial quote or report pullout: `Instrument Serif` or `Ivar Text` if available in Stitch
- Monospace for symbols, timestamps, and relevance scores: `JetBrains Mono`

### Typographic Rules

- Headlines must be wide and short. Never let hero or section headlines wrap into 5 or 6 narrow lines.
- Use sentence case, not all caps labels.
- Replace tiny eyebrow labels with direct, high-value headings.
- Keep body copy readable and measured. Aim for 60 to 75 characters per line in dense research views.

### Suggested Scale

- `display`: `clamp(3.5rem, 6vw, 6.5rem)` / `0.94`
- `h1`: `clamp(2.75rem, 4.5vw, 4.75rem)` / `0.98`
- `h2`: `clamp(2rem, 3vw, 3rem)` / `1.02`
- `h3`: `1.25rem` to `1.5rem` / `1.15`
- `body-lg`: `1.125rem` / `1.7`
- `body`: `0.98rem` to `1rem` / `1.65`
- `meta`: `0.82rem` / `1.4`

## Motion Direction

Primary motion paradigms selected by the skill:

- Card Stacking
- Scroll Pinning

### Motion Principles

- Motion should reveal research depth and importance
- Fast interactions, slow scene transitions
- Hover states should feel physical: slight lift, image scale, specular glow
- Scroll sections should feel like chapters in a thesis, not a landing page carousel

### Motion Patterns

- Landing page feature proof section: pinned left narrative with scrolling right-side research artifacts
- Alert intelligence section: stacked cards that overlap upward as the user scrolls
- Dashboard cards: subtle hover scale, chart fade-in, shimmering border pass on live modules
- Command/search entry: soft expansion and blur, not bounce

## Layout System

### Global Shell

- Wrap all pages in `main` with `overflow-x-hidden w-full max-w-full`
- App shell uses a left rail on desktop and a floating bottom utility bar on mobile
- Max content width for dashboard and workspace screens: `max-w-[1440px]`
- Max content width for editorial/report reading: `max-w-5xl`

### Spacing

- Large section rhythm for marketing: `py-32 md:py-40 xl:py-48`
- Product screen sections: `py-10 md:py-14`
- Card padding: `p-5 md:p-6`
- Gutter: `gap-4 md:gap-6`

### Border Radius

- Large panels: `rounded-[28px]`
- Standard cards: `rounded-2xl`
- Pills and segmented controls: `rounded-full`

### Grid Rules

- Marketing bento grids must use `grid-flow-dense`
- Product dashboards should use a 12-column grid on desktop, 6-column on tablet, 1-column on mobile
- Avoid more than 5 cards per cluster unless the content is strongly hierarchical

## Screen Inventory

The product should launch with seven primary screens.

### 1. Landing Page

Purpose: explain the product quickly, establish taste, and convert visitors into trial users.

Layout:

- Floating glass navigation pill
- Cinematic centered hero
- Dense bento proof section
- Pinned storytelling section for how signal detection works
- Stacked testimonial or use-case cards
- Large CTA band and spare footer

Key components:

- Hero with inline typography image embedded in the H1
- Two CTA buttons only
- Infinite marquee for source ecosystem: SEC filings, earnings calls, X, Reddit, news, analyst notes, blogs
- Horizontal accordions for use-case exploration

### 2. Auth / Onboarding

Purpose: move a user from curiosity to a configured watchlist in under three minutes.

Layout:

- Split layout on desktop, single-column card stack on mobile
- Left side contains concise product promise and credibility cues
- Right side contains account creation and broker/data-source setup steps

Key components:

- Minimal stepper with large targets
- Watchlist seed selector
- Alert preference matrix
- First-report preview card

### 3. Dashboard

Purpose: show what changed today and where the user should spend attention first.

Layout:

- Left rail navigation
- Top command bar with search, date scope, and alert filters
- 12-column grid with dense modules

Key components:

- Priority signals stack
- Portfolio or watchlist pulse row
- News velocity chart
- Recent report updates
- Alert inbox summary

### 4. Stock Research Workspace

Purpose: become the main working screen for a single stock.

Layout:

- Three-zone layout
- Left: symbol context and quick actions
- Center: research report body
- Right: live signals, mentions, and timeline filters

Key components:

- Editable AI report blocks
- Thesis / risks / catalysts / valuation tabs
- Citation chips with source preview
- Timeline scrubber
- "Ask follow-up" command input

### 5. Alert Feed

Purpose: help users separate meaningful developments from noise.

Layout:

- Feed-first screen with a sticky filter rail
- Modular cards grouped by significance and recency

Key components:

- Severity filter chips
- AI-generated why-it-matters summary
- Mention source cards
- Save to report action
- Dismiss / snooze / escalate actions

### 6. Watchlists & Coverage

Purpose: manage symbols, themes, sectors, and custom monitoring scopes.

Layout:

- Master-detail arrangement
- Left panel for lists and themes
- Right panel for coverage depth and alert configuration

Key components:

- Watchlist cards with health indicators
- Coverage configuration slider or segmented density control
- Source inclusion matrix
- Alert threshold editor

### 7. Pricing / Upgrade

Purpose: sell confidence, breadth, and continuous monitoring without feeling salesy.

Layout:

- Warm light-theme contrast section within the dark product world
- Editorial plan comparison with one clear recommended tier

Key components:

- Plan cards with usage emphasis
- Example report excerpt
- Coverage and alert limits comparison
- Concierge or pro-research CTA

## Per-Screen Component Patterns

### Landing Page Patterns

- Hero must use `max-w-6xl` heading width and remain visually centered
- Use one inline micro-image inside the headline to break rigidity
- Bento should contain exactly four tiles with dense occupancy
- Use horizontal accordions for "research before you invest", "stay updated automatically", and "act only on meaningful signals"

### Onboarding Patterns

- One primary card surface, one secondary context surface
- Keep forms short and progressive
- Use quiet assurance text instead of compliance-heavy walls
- Show a live report preview after watchlist selection

### Dashboard Patterns

- Each module needs a clear answer to one question: what changed, why it matters, what to do next
- Use more typography than charts unless a chart is truly decision-relevant
- Largest card should always be the signal stack or daily brief
- Small modules should never become noisy stat blocks

### Research Workspace Patterns

- Treat the center report like an AI-assisted editorial document, not a table dump
- Right rail should surface source-backed changes in near real time
- Use tabs for thesis structure, but keep summary visible above the fold
- Citations should open as preview drawers, not full navigations

### Alert Feed Patterns

- Cards sorted by significance first, recency second
- Every card includes a one-sentence significance explanation
- Default state groups multiple low-signal mentions into rollups
- Use stack motion as cards enter and reorder

### Watchlists & Coverage Patterns

- Prefer tiles with meaningful metadata over dense tables
- Show coverage health as a blend of freshness, source depth, and alert sensitivity
- Allow theme watchlists such as "AI Infra" or "Indian Fintech" next to individual stocks

### Pricing Patterns

- Use warm contrast to break the dark rhythm and make the page feel premium
- Keep comparison focused on time saved, signal quality, and coverage depth
- End with one large CTA and low-friction FAQ

## Stitch-Compatible Layout Notes

Use the following structure when generating screens in Stitch.

### Global Notes

- Prefer semantic section names such as `hero`, `signal-grid`, `report-body`, `alert-rail`, `cta-band`
- Define tokens first: color, radius, shadow, spacing, typography
- Keep component names short and reusable
- Favor content blocks with explicit purpose instead of generic "feature card" language

### Recommended Section Schema

- `nav/floating-shell`
- `hero/cinematic-center`
- `grid/dense-bento-4`
- `story/pinned-scroll`
- `feed/stacked-signals`
- `workspace/report-three-column`
- `pricing/editorial-contrast`
- `footer/minimal-links`

### Component Naming

- `SignalCard`
- `CoverageTile`
- `SourceChip`
- `ReportBlock`
- `TimelineRail`
- `AlertStack`
- `CommandBar`
- `UseCaseAccordion`

### Responsive Intent

- Mobile should preserve premium feel, not collapse into generic cards
- On mobile, convert left rail into bottom utility navigation
- Preserve report readability with strong type scale and sticky section jumping
- Collapse 3-column workspace into stacked report, signals, then actions

## Implementation Notes For TanStack + Tailwind + shadcn

- Replace the current default Inter setup with Outfit as the primary app font
- Keep shadcn components structurally simple, then reskin them with custom tokens and larger radii
- Build motion with GSAP only where it adds narrative value: landing page, alert stack, pinned explainer sections
- Use TanStack Router transitions to preserve continuity between dashboard, research workspace, and alert feed

## Non-Negotiables

- No cramped heroes
- No loud finance gradients
- No purple bias
- No generic "AI SaaS" icon clouds
- No empty cells in bento layouts
- No more than two primary CTAs in any hero
- No dense table-first experience on the core user journey

## One-Sentence Creative Direction

Build a cinematic research observatory for everyday investors: dark, precise, editorial, and alive with quiet motion.
