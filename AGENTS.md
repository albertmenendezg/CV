# AGENTS.md

## Project

Personal CV as a React SPA (Vite + TypeScript + Tailwind CSS). Generates bilingual PDFs (EN/ES) via Puppeteer.

## Commands

```bash
npm install              # install deps (--legacy-peer-deps if peer conflicts)
npm run dev              # dev server (localhost:5173)
npm run build            # production build to /dist
```

## PDF Generation

```bash
node scripts/generate-pdf.js              # generates both EN and ES PDFs → /output/
node scripts/generate-pdf.js en out.pdf   # single language
node scripts/generate-pdf.js es out.pdf   # single language
```

Requires `puppeteer` and `serve` installed (not in base devDeps; installed in CI or manually).

## i18n

- Translations: `src/i18n/en.json`, `src/i18n/es.json`
- Language resolved in order: `?lang=` URL param → `VITE_LANG` env var → `'en'` default
- All component text uses `useTranslation()` hook from `react-i18next`
- `src/utils/format-date.ts` uses i18n for month names (not a React component, uses `(i18n as any).t()` cast to avoid TS typing issue)

## CI/CD (GitHub Actions)

Push to `master` → builds React app → generates both PDFs → uploads to AWS S3 → invalidates CloudFront.

## Gotchas

- `react-i18next@17` peer-declares `typescript@^5`. Use `--legacy-peer-deps` for installs.
- `output/` directory is gitignored and generated locally; not versioned.
- Tailwind v4: config lives in `src/index.css` via `@theme`, not in `tailwind.config.js`. Custom colors: `primary` (#374151), `secondary` (#1e293b).
- Environment variables use `VITE_` prefix (not `REACT_APP_`).
- `index.html` is in project root (Vite convention), not in `public/`.

## Structure

```
index.html               # Vite entry point (root, not public/)
vite.config.ts           # Vite + React + Tailwind v4 config
src/
  App.tsx                # Layout: sidebar (contact, languages, skills) + main (header, experience, education)
  components/            # Header, Experience, Education, Languages, Skills
  i18n/                  # en.json, es.json translation files
  i18n.ts                # i18next config
  utils/format-date.ts   # Date formatting with locale support
scripts/
  generate-pdf.js        # Puppeteer PDF generation
```
