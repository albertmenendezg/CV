# Albert Menéndez González CV

Personal CV built with React, TypeScript, Vite, and Tailwind CSS. Generates bilingual PDFs (EN/ES) via Puppeteer.

## Setup

```bash
npm install
npm run dev           # dev server at localhost:5173
npm run build         # production build to /dist
```

## PDF Generation

```bash
node scripts/generate-pdf.js              # generates both EN and ES PDFs
node scripts/generate-pdf.js en out.pdf   # single language
```

## Bilingual Support

Language is resolved in order: `?lang=` URL param → `VITE_LANG` env var → `'en'` default.

Translation files: `src/i18n/en.json`, `src/i18n/es.json`.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- react-i18next
- Puppeteer (PDF generation)
- GitHub Actions CI/CD → AWS S3 + CloudFront

## Structure

```
index.html            # Vite entry point
vite.config.ts        # Vite + React + Tailwind config
src/
  App.tsx             # Layout: sidebar + main content
  components/         # Header, Experience, Education, Languages, Skills
  i18n/               # en.json, es.json translations
  utils/format-date.ts # Locale-aware date formatting
scripts/
  generate-pdf.js     # Puppeteer PDF generation
```

All suggestions will be appreciated.
