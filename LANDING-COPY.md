# OmniVeo Landing Page — Full Copy Inventory (Handoff Document)

**Purpose:** Complete inventory of every string of copy on the OmniVeo landing page, in page order, with the file each string lives in. Polish the wording freely — the structure, facts, and constraints below are the guardrails.

---

## 1. Brand & Positioning Context

- **Name:** OmniVeo (always one word, capital O and V)
- **Domain:** omniveo.info
- **Contact:** shannon@omniveo.info (Shannon is the founder who answers email)
- **GitHub:** https://github.com/NewSamBellamy
- **What it is:** An **AI studio** — a small team of designers and engineers building practical AI software for creators, founders, and builders. (Deliberately *not* "AI lab" — too research-y for where the company is now — and *not* "AI agency" — implies paid client work, which they don't do. "Studio" = small team building their own products.)
- **Verified facts (do not contradict):**
  - Three founders: Shannon Long (Murrieta, California), Tobi (Lagos, Nigeria), Maruf (Dhaka, Bangladesh)
  - They met in the 2025 Bolt.new hackathon via Discord; did not win
  - Incorporated August 2025
  - ~1.5 years of building with AI (research, prototypes, first products now in development)
  - Open source foundations are a core principle (core value stays free)
  - Nothing shipped publicly yet; waitlist is the early-access path
- **Copy rules already applied (keep them):**
  - The three-cities / time-zone angle appears **once only**, in the Origin story. Do not re-introduce it elsewhere.
  - Never claim "building in public" — they haven't started that yet. "Building with AI" is the approved phrase for the past 1.5 years.
  - No AI-slop phrasing (no "supercharge," "unleash," "revolutionize," "game-changing," "seamlessly empower," etc.). Plain, confident, concrete.
  - Keep card bodies short: 1–2 sentences.
  - First person plural ("we") for company voice; third person for the origin story's opening.

---

## 2. Browser Tab Title

**File:** `index.html`

- Title: `OmniVeo — AI tools for creators, founders, and builders`

---

## 3. Navbar

**File:** `src/components/landing/Navbar.tsx`

| Element | Copy |
|---|---|
| Wordmark | `OmniVeo` |
| Nav link 1 | `What We Build` |
| Nav link 2 | `Current Stage` |
| Nav link 3 | `Origin` |
| Nav link 4 | `Team` |
| Nav link 5 | `FAQ` |
| GitHub icon (aria-label) | `OmniVeo on GitHub` |
| CTA button | `Join Waitlist` |

*Constraint: nav labels are short by design and also serve as footer links; button label ≤ 2 words.*

---

## 4. Hero

**File:** `src/components/landing/Hero.tsx`

- **H1 headline** (two visual segments; second part renders in italic serif):
  - Part 1: `AI tools for`
  - Part 2 (italic accent): `creators, founders, and builders.`
- **Subheadline:** `We're a small team of designers and engineers building practical AI software — from first sketch to working product.`
- **Primary CTA:** `Join the Waitlist`
- **Secondary CTA:** `Our Story`
- **Waitlist input placeholder:** `Enter your work email...`
- **Waitlist submit button:** `Join Waitlist`
  - Loading state: `Joining...`
- **Micro-copy under input:** `Pre-release. Questions or early ideas? Email shannon@omniveo.info` (the email is a clickable mailto link)
- **Success message (new signup):** `You're on the list. We'll reach out when early builds are ready.`
- **Success message (already signed up):** `You're already on the list — talk soon.`
- **Generic error message:** `Something went wrong. Try again.`

### Studio Interface Canvas (product-style mockup card below hero)

- **Window breadcrumb (mono type):** `omniveo // how we build`
- **Pillar 1:** title `Modular & Lean` — body `Small surface area, composable parts, no heavy dependencies.`
- **Pillar 2:** title `Open Source First` — body `The foundations of what we build stay open and free.`
- **Pillar 3:** title `Community Owned` — body `Shaped by the people who use it, not the other way around.`
- **Canvas footer left (mono):** `omniveo.info`
- **Canvas footer right (mono):** `est. 2025`

*Constraints: pillar titles ≤ 3 words, bodies ≤ 10 words. These three pillars double as brand values.*

---

## 5. Marquee Strip (infinite scrolling ticker)

**File:** `src/components/landing/Highlights.tsx`

Items (uppercase, separated by ✦ glyphs, loop forever):

1. `Learn by building`
2. `Practical over hype`
3. `Open source first`
4. `Community owned`
5. `Creator independence`

*Constraint: 3–4 words each; these echo the four priorities below — keep them aligned if either changes.*

---

## 6. Stats Strip

**File:** `src/components/landing/Highlights.tsx`

| Value (large) | Label (small) |
|---|---|
| `2025` | `The year we got started` |
| `3` | `Founders, three cities` |
| `1.5+` | `Years building with AI` |

*Note: values are display numbers; labels are the free-text part. The "three cities" mention here is the one sanctioned exception to the once-only rule — flag if you change it.*

---

## 7. Audience Split (two cards)

**File:** `src/components/landing/Highlights.tsx`

### Card A — For builders

- **Label (mono eyebrow):** `For builders`
- **Title:** `Real tools, not demos`
- **Body:** `We build the software we need ourselves — practical workflows that cut busywork and help you ship. Join the waitlist to try early builds before anyone else.`
- **CTA button:** `Join the waitlist` (scrolls to waitlist input)

### Card B — For businesses

- **Label (mono eyebrow):** `For businesses`
- **Title:** `Work with us`
- **Body:** `Partnerships, collaborations, or a problem you think we should tackle — write to us directly and a founder will reply.`
- **CTA button:** `Email a founder` (mailto:shannon@omniveo.info)

---

## 8. Priorities (four cards, "What We Build")

**File:** `src/components/landing/Priorities.tsx`

- **Section eyebrow:** `What we are focused on`
- **Section H2** (italic accent on second part):
  - Part 1: `Built for people who`
  - Part 2 (italic): `make things`
- **Section subtitle:** `Four principles anchor everything we ship:`

### Card 01

- **Badge (mono):** `01 / LEARN`
- **Title:** `Lowering the barrier to build`
- **Body:** `Complex systems shouldn't take years to master. We build software that helps people learn by making real things, instead of getting stuck in tutorials.`

### Card 02

- **Badge:** `02 / BUILD`
- **Title:** `Practical workflows over novelty toys`
- **Body:** `No hype bots. We engineer tools that remove friction and repetitive work, so solo founders and creators can ship work they're proud of.`

### Card 03

- **Badge:** `03 / OPEN SOURCE`
- **Title:** `Community first, real value for free`
- **Body:** `The foundations of what we build stay free and open. Open source keeps technology honest, transparent, and available to anyone.`

### Card 04

- **Badge:** `04 / SUSTAINABILITY`
- **Title:** `Supporting creator independence`
- **Body:** `Software should help you earn, not just spend. Our long-term goal is for creators, founders, and builders to make an independent living from their work.`

*Constraints: badge tags (`LEARN`, `BUILD`, `OPEN SOURCE`, `SUSTAINABILITY`) are structural — keep. Card titles ≤ 6 words.*

---

## 9. Current Stage (dark feature card)

**File:** `src/components/landing/CurrentStage.tsx`

- **Eyebrow:** `Where we are`
- **H2** (italic accent): `First products` + `coming soon.`
- **Paragraph 1:** `We don't have anything on the shelf yet. The past year and a half went into research, prototypes, and learning what's actually worth building. Now we're turning that work into our first real products.`
- **Paragraph 2:** `Want to try them early? Join the waitlist — we'll reach out when the first builds are ready.`
- **CTA button:** `Join Waitlist`

---

## 10. Origin Story

**File:** `src/components/landing/Origin.tsx`

- **Section eyebrow:** `How we started`
- **Section H2** (italic accent): `We lost our first hackathon.` + `Then we kept building.`

### Narrative (left column)

- **Lede paragraph (larger type):** `OmniVeo started as three strangers in a hackathon Discord — Shannon in California, Tobi in Lagos, Maruf in Dhaka — testing whether they could build something real under pressure.`
- **Paragraph 2:** `They didn't win. But somewhere in those two weeks, the experiment stopped being about the competition. What started as a prototype for an AI creative tutor turned into a question: what tools would make it dramatically easier for people to create, launch, and earn on their own?`
- **Paragraph 3:** `By August they had their answer, and the company to go with it. For the past year and a half, we've been building with AI — researching, prototyping, and throwing out what didn't work — and we're now opening up what we've made.`

*Note: the city list in the lede is the ONE place the geography appears in prose. If you add it anywhere else, cut it from somewhere.*

### Timeline (right column, three milestones)

**Milestone 1**

- **Date (mono):** `Spring 2025`
- **Title:** `The hackathon`
- **Body:** `Shannon, Tobi, and Maruf met in a Discord during the Bolt.new hackathon and built their first prototype together.`

**Milestone 2**

- **Date:** `Summer 2025`
- **Title:** `The decision to keep going`
- **Body:** `The competition ended; the working rhythm didn't. The team kept building together.`

**Milestone 3**

- **Date:** `August 2025 – Present`
- **Title:** `OmniVeo`
- **Body:** `Officially incorporated. A year and a half of research, prototypes, and building with AI led to the studio's first products.`

---

## 11. Team

**File:** `src/components/landing/Team.tsx`

- **Section eyebrow:** `The team`
- **Section H2** (italic accent): `Small team,` + `wide reach`
- **Section subtitle:** `Three founders who've been building together since 2025.`

### Member 1

- **Name:** `Shannon Long` (monogram avatar: `S`)
- **Role badge (mono):** `Founder`
- **Focus line:** `Product Direction & Operations`
- **Location (with pin icon):** `Murrieta, California`
- **Bio:** `Runs product direction, operations, and community. Believes anyone willing to put in the work can learn to build real things.`

### Member 2

- **Name:** `Tobi` (monogram: `T`)
- **Role badge:** `Co-Founder`
- **Focus line:** `Head of Design`
- **Location:** `Lagos, Nigeria`
- **Bio:** `Owns product design and user experience. Focused on clean, simple interfaces that stay out of your way.`

### Member 3

- **Name:** `Maruf` (monogram: `M`)
- **Role badge:** `Co-Founder`
- **Focus line:** `Lead Engineer`
- **Location:** `Dhaka, Bangladesh`
- **Bio:** `Owns backend architecture and full-stack engineering. Builds reliable systems that turn product ideas into working software.`

*Constraints: names, roles, locations are facts — do not change. Bios: 2 sentences max.*

---

## 12. FAQ (accordion, 6 items)

**File:** `src/components/landing/Faq.tsx`

- **Section eyebrow:** `FAQ`
- **Section H2** (italic accent): `Questions,` + `answered`

1. **Q:** `What is OmniVeo?`
   **A:** `An AI studio — a small team of designers and engineers building practical AI software for creators, founders, and builders.`
2. **Q:** `What are you working on right now?`
   **A:** `Our first products are in development now. The past year and a half went into research and prototypes; that work is becoming real tools, and waitlist members will try them first.`
3. **Q:** `Will it be free?`
   **A:** `The foundations of what we build stay free and open source. That's one of our core principles, not a marketing line.`
4. **Q:** `When will I hear back after joining the waitlist?`
   **A:** `When the first build is ready for feedback. There's nothing to onboard you into today — the waitlist is how you get early access.`
5. **Q:** `I run a business. Can we work together?`
   **A:** `Yes. Partnerships, collaborations, or a problem you think we should tackle — email shannon@omniveo.info and a founder will reply.`
6. **Q:** `Who's behind OmniVeo?`
   **A:** `Shannon, Tobi, and Maruf — three founders who met in a hackathon Discord in 2025 and never stopped building together.`

---

## 13. Footer

**File:** `src/components/landing/Footer.tsx`

- **Wordmark:** `OmniVeo`
- **Description:** `An AI studio building practical tools for people who make things.`
- **Column heading 1 (mono):** `Lab`
  - Links: `What We Build` · `Current Stage` · `Origin` · `Team`
- **Column heading 2 (mono):** `Contact`
  - `shannon@omniveo.info` (mailto)
  - `GitHub` (link, with icon)
  - `Join the waitlist` (scrolls to waitlist input)
- **Giant background wordmark (decorative):** `OmniVeo`
- **Legal row left:** `© 2026 OmniVeo. Open source foundations.`
- **Legal row right (mono):** `omniveo.info`

*Note: the footer's "Lab" column heading predates the studio repositioning — consider `Studio` or `Explore`.*

---

## 14. Server-Side Strings (user-visible)

**File:** `src/convex/waitlist.ts`

- **Validation error (thrown when email is invalid):** `Please enter a valid email address.`

---

## 15. Strings That Must Not Change

- `OmniVeo` (wordmark, everywhere)
- `shannon@omniveo.info`
- `omniveo.info`
- `https://github.com/NewSamBellamy`
- Founder names, roles, and locations (Section 11)
- Dates and facts: Spring 2025, August 2025, 2025, ~1.5 years
- Badge tags: `LEARN`, `BUILD`, `OPEN SOURCE`, `SUSTAINABILITY`

## 16. Open Questions for the Polishing Pass

1. Footer column heading says `Lab` but the site now says "AI studio" (Section 13 note) — rename?
2. Is `Pre-release.` still the right word for the hero micro-copy now that positioning is "studio"?
3. Stats strip: `Founders, three cities` is the only place outside Origin mentioning geography — keep or replace (e.g., `Founders, one team`)?
4. `est. 2025` on the hero canvas vs. `© 2026` in the footer — intentional (founded 2025, current year 2026), but confirm.
5. Any desire to name what the first products actually are, or keep them deliberately vague ("first products")?
