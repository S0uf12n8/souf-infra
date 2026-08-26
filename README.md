# souf-infra

Personal portfolio — CS student building toward DevOps/DevSecOps. Terminal/infra aesthetic: the site presents itself as a system you're SSH'd into, not a resume page.

**Live:** TODO — add Vercel URL once deployed
**Repo:** github.com/S0uf12n8/souf-infra

## Stack

- [Astro](https://astro.build) — static output, component-based, near-zero client JS
- Plain CSS with custom-property tokens (no utility framework)
- Vanilla JS for the interactive bits (typewriter, uptime counter, project pop-out, custom cursor)
- [Formspree](https://formspree.io) — contact form backend (free tier, no server code)
- Deployed on [Vercel](https://vercel.com)

## Sections

| Section | What it is |
|---|---|
| **Hero** | Boot-sequence terminal (`ssh souf@infra` → `whoami` → `status`), typewriter effect |
| **System** | About/bio as a system-status readout, not a prose bio |
| **Lab** | Project cards pulled from `src/data/projects.ts`; click to expand a terminal-styled detail panel |
| **Stack** | Skills as a `systemctl`-style status table (Tool / Category / Status), not an icon grid |
| **Comms** | Contact form (Formspree), GitHub, LinkedIn |

## Design system

Colors, type scale, and layout tokens live in `src/styles/tokens.css`. Two-tone accent system: desaturated amber (`--accent`) as dominant, cold slate-blue (`--accent-2`) as recessive — deliberately not the generic acid-green-on-black terminal look.

Signature elements:
- Live uptime counter in the nav, ticking since page load
- Ambient scrolling log stream behind the page content (respects `prefers-reduced-motion`)
- Custom blinking block cursor site-wide

## Project structure

```
/src
  /components   — Nav, Hero, SystemStatus, ProjectCard, LabGrid, StackGrid, Comms, Footer
  /layouts      — Base.astro
  /pages        — index.astro
  /styles       — tokens.css, global.css
  /data         — projects.ts (typed project data — edit here to add/update projects)
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Deployment

Auto-deploys on push to `main` via Vercel (zero-config Astro detection). No manual build step needed on your end.

## Adding a project

Edit `src/data/projects.ts` — add an entry with `name`, `description`, `stack[]`, `status`, and `url`. The Lab grid and detail pop-out both read from this file; no component changes needed for new entries.

## TODO

- [ ] CVBuilder entry — pull real description/stack from the repo, currently placeholder
- [ ] LinkedIn URL
- [ ] Formspree endpoint (currently placeholder form action)
- [ ] "Infra Lab" project card — add once there's an actual working artifact (Docker/k3s/CI-CD sandbox), not before

## License

TODO — add if you want this public under a specific license (MIT is the standard default for a portfolio repo if you don't have a strong preference).
