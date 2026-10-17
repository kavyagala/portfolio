# Personal Portfolio

A single-page portfolio built with **React + Vite** and plain CSS (no UI libraries).
Visual idea: the site reads like a statistics notebook — sections are numbered as figures
(“Fig. 01”), dividers are tiny residual plots, and every project has an original SVG
illustration of its technique (regression, ANOVA box plots, a PCA pixel face).

## Edit your content

Everything you'd want to change lives in **`src/config.js`**:

- `site.name` — your name (navbar, footer, page title)
- `contact.email`, `contact.github`, `contact.linkedin` — empty values are hidden
- `projects[].liveUrl` / `githubUrl` — “View Project” / GitHub links appear only when filled in
- `experience[].period` — optional dates
- `education.specialization` — optional
- `tools` — add tools you actually use; the section stays hidden while empty

Colours and fonts are CSS variables at the top of `src/index.css`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173 — shows a yellow reminder if name/links are missing
npm run build    # production build into dist/
```

## Deploy (free)

**Vercel (easiest):** push this folder to a public GitHub repo → vercel.com → *Add New Project* →
import the repo → keep the defaults (Framework: Vite, Output: `dist`) → Deploy.

**Netlify:** *Add new site → Import from Git* → build command `npm run build`, publish directory `dist`.

**GitHub Pages:** works too — `vite.config.js` uses `base: './'`, so the build runs from any sub-path.

## Project structure

```
src/
  config.js              ← all text & links
  App.jsx                ← page layout
  hooks.js               ← scroll-reveal + active-nav logic
  components/Nav.jsx     ← navbar + mobile menu
  components/Sections.jsx← Hero, About, Projects, Experience, Skills, Contact, Footer
  components/Visuals.jsx ← original SVG illustrations (decorative, not real results)
  index.css              ← design system & styles
```

## Credits

- Fonts: Instrument Serif, Inter Tight, JetBrains Mono — Google Fonts (SIL Open Font License)
- Built with help from an AI coding assistant (Claude); content, choices and final edits are my own.
- All illustrations are original inline SVG; plotted points are generated, not project data.
