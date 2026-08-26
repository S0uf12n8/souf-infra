# AGENTS.md — Souf Portfolio Build Spec

This file is the single source of truth for the coding agent (opencode). Read it fully before writing code. Don't invent scope beyond what's here — this is a static portfolio, not a product.

## 0. What this project actually is

A personal portfolio for a CS student targeting **DevOps/DevSecOps**, not a space/mechatronics engineer and not a generic full-stack dev landing page. Two references were given:

- **projectmaria.net** — terminal/hacker aesthetic, system-status framing, monospace UI chrome, "Lab" section for projects, blunt personality-driven copy. This is the visual direction to steal.
- **hamza-ait-addi.vercel.app** — clean, professional, French, dark/light toggle, standard sections (about/projects/skills/contact). This is the *content discipline* to steal: clear stack tags per project, real repo links, no filler.

**Decision: take site 1's visual language, replace every space/mechatronics metaphor with an infrastructure/systems metaphor.** This isn't a stretch reskin — the terminal-hacker aesthetic is more literally on-brand for a DevOps portfolio than it ever was for the original mechatronics one. Don't half-commit to it; go fully into the sysadmin/terminal bit or drop it, a diluted version looks worse than either extreme.

Known honest risk: this aesthetic is a known genre now (dozens of "hacker portfolio" clones exist). What will make it not-generic is that the content is real and specific (actual repos, actual sync-conflict design decisions, actual coursework constraints) instead of generic "passionate developer" copy. The agent should prioritize writing accurate, specific copy over decorative flourishes.

## 1. Tech stack — decided, don't relitigate

- **Astro** (static output, zero client JS by default, component-based for project cards). Reasons over vanilla HTML: repeated project-card markup benefits from componentization, and Astro ships almost no JS runtime unlike React/Next, which matters for a static portfolio with no interactivity needs.
- Plain CSS (custom properties for the theme tokens below). No Tailwind — for a small, tightly art-directed site with ~5 sections, a utility framework adds a build step for no real gain.
- Minimal vanilla JS only for: typewriter/boot-sequence effect on hero, terminal-tab switching if used, smooth-scroll nav. No framework state needed.
- Deploy: **Vercel** (free tier, same as reference #2, zero-config with Astro) or GitHub Pages if you want to keep everything inside the GitHub profile. Pick Vercel — custom domain support is easier later.
- Fonts: `JetBrains Mono` for all UI chrome, labels, nav, code/terminal text (loaded via Google Fonts or self-hosted woff2). `Inter` for body paragraphs longer than ~2 sentences (the "About" bio block) — pure monospace body text hurts readability at paragraph length, this is a deliberate deviation from reference #1.

## 2. Visual system

```css
--bg:        #0b0e14;   /* near-black, slight blue */
--surface:   #11161d;   /* card/panel bg */
--surface-2: #171d26;   /* hover/elevated */
--border:    #22293380;
--text:      #d8dee9;
--text-dim:  #838fa1;
--accent:    #39ff88;   /* terminal green — primary */
--accent-2:  #5eead4;   /* cyan — secondary, links */
--warn:      #f5b942;   /* amber — "in progress" / status badges */
--danger:    #ff5f5f;   /* red — rarely used, e.g. "deprecated" tag */
```

- Terminal window chrome (three dots, fake title bar) around key blocks: hero, about, contact — not around every single card, that's visual noise.
- Section headers use the `// LABEL` comment-style prefix from reference #1 (e.g. `// LAB — PROJECTS`), rendered in `--accent-2`, uppercase, monospace, letter-spacing ~0.05em.
- Subtle scanline or CRT-flicker background texture is optional — skip unless it can be done with pure CSS at near-zero perf cost. Don't add a JS canvas effect for this.
- Status badges on project cards (`ACTIVE`, `STABLE`, `IN PROGRESS`, `PRIVATE`) styled like container/CI status pills — small, rounded, colored dot + label.

## 3. Site map (single-page, anchor-nav sections)

1. **Hero** — terminal boot sequence
2. **System** — about/bio, framed as a `whoami` / system-status block
3. **Lab** — featured projects grid
4. **Stack** — skills/tools, framed as an inventory, not a decorative icon-soup
5. **Comms** — contact/socials

No blog, no gallery/pics section (that was specific to reference #1's YouTube content — Souf has no equivalent content stream, don't force one in).

## 4. Section-by-section content

### 4.1 Hero

Boot-sequence typewriter effect, then static state. Example copy (agent should refine tone, not the facts):

```
$ ssh souf@infra
Connecting...
Authenticated as S0uf12n8
> whoami
Souf — CS student, ex-Systems & Network technician, building toward DevOps/DevSecOps.
> status
Final-year Licence GI · Faculty of Taroudant, Morocco
[ View Lab ]  [ Contact ]
```

Nav bar (fixed, minimal): `System · Lab · Stack · Comms` — matches reference #1's nav pattern (`Init · System · Lab · Comms`), dropped `Pics` since there's no content-creator angle here.

### 4.2 System (about)

Framed as a status readout, not a prose bio wall:

```
>System_Status: Active
>Base: Taroudant, Morocco
>Background: Bac+2 DTS Systems & Network (ISTA Taroudant) → Systems & Network technician
 at DEWEB Technology, Casablanca (intern → full-time) → Licence GI, final year
>Current_Focus: [ Docker, Docker Compose, Kubernetes (k3s), CI/CD (GitHub Actions),
 Prometheus/Grafana observability ]
>Target: DevOps / DevSecOps engineer
>Next: Master's abroad (France/Italy) — Autumn 2027
```

One short paragraph below in `Inter` (not monospace) for the part that needs to actually read as a sentence — the "why," 2–3 sentences max, no filler like "passionate about technology."

### 4.3 Lab (projects) — real content, do not fabricate details

Pull from this exact list. Where a field says `TODO`, leave a clearly marked placeholder — do not invent a description, a link, or a metric.

| Project | Description | Stack | Status | Link |
|---|---|---|---|---|
| **ACOMED** | Offline-first healthcare audit platform built for a Moroccan Ministry of Health use case. Souf owns mobile dev and the offline-sync layer: delta sync via `updated_at` timestamps, last-write-wins conflict resolution. 3-person team, protected `main` branch, biweekly demo cadence. | React Native, SQLite, Node.js, PostgreSQL | `PRIVATE` — repo not public yet | TODO (no link until published) |
| **rpg-combat-cpp** | C++ RPG combat engine, OOP coursework project. Souf built the repo structure, Makefile, branching strategy, and work-order docs the rest of the team worked against — worth stating plainly, it's as much a "got a team project under control" story as a combat-engine one. | C++ | `PUBLIC` | github.com/S0uf12n8/rpg-combat-cpp |
| **CVBuilder** | TODO — pull actual description/stack from the repo before writing final copy. Don't guess at what it does. | TODO | `PUBLIC` | github.com/S0uf12n8/CVBuilder |
| **Infra Lab** (optional 4th card) | Personal DevOps sandbox: containerizing services with Docker/Compose, deploying to k3s on Oracle Cloud free tier, GitHub Actions pipelines, Prometheus/Grafana monitoring. Only add this card once at least one piece is actually working and demoable — an empty "in progress" card with no artifact is worse than not having the card. | Docker, k3s, GitHub Actions, Prometheus, Grafana | `IN PROGRESS` | TODO |

Card layout: name, one-line description, stack as small tags, status pill, link (or "private" state with no dead link). Reference #2's discipline of clear stack tags per project is worth copying exactly here.

### 4.4 Stack (skills)

Group by category, not a flat icon wall:

```
Languages:      C++ · Python · SQL · JavaScript/TypeScript
Infra & DevOps:  Docker · Docker Compose · k3s · GitHub Actions · Prometheus · Grafana
Systems:        Linux administration, networking (from DTS/DEWEB background)
Currently learning: [ whatever is actually true at write time — don't pad the list ]
```

### 4.5 Comms (contact)

```
GitHub   → github.com/S0uf12n8
Email    → TODO
LinkedIn → TODO (only include if a profile actually exists)
```

Don't add Discord/socials that don't exist just to fill the section — an empty slot looks worse than a short one.

## 5. File structure

```
/src
  /components
    Nav.astro
    Hero.astro
    SystemStatus.astro
    ProjectCard.astro
    LabGrid.astro
    StackGrid.astro
    Comms.astro
    Footer.astro
  /layouts
    Base.astro
  /pages
    index.astro
  /styles
    tokens.css       (the CSS custom properties above)
    global.css
  /data
    projects.ts       (the project table above, as typed data — NOT hardcoded in components)
/public
  /fonts
  favicon, og-image
astro.config.mjs
```

Keep `projects.ts` as actual structured data (array of objects with `name, description, stack[], status, url`). This means adding a project later is a data edit, not a markup edit — worth the small extra setup cost.

## 6. Explicit don'ts

- Don't add a blog/CMS — no content plan exists for one, it'll sit empty.
- Don't add light-mode toggle unless asked — reference #1 doesn't have one either, and it doubles the CSS surface for a single-user-maintained site.
- Don't fabricate metrics, testimonials, or project details not listed above. TODO markers stay TODO until Souf supplies the real info.
- Don't pull in a UI kit (shadcn, DaisyUI, etc.) — the whole point of the aesthetic is that it's hand-built and specific, not templated.
- Don't over-animate. One typewriter effect on hero, simple fade/slide-in on scroll for cards, nothing more. A DevOps-themed site that's slow to load undercuts the premise.

## 7. Performance bar

Static Astro output should hit Lighthouse ~95+ with near-zero effort — if it doesn't, check for unoptimized images or an unnecessary JS bundle before anything else. This is a single page with no dynamic data; there's no excuse for it being slow.
