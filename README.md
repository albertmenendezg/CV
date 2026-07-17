# Albert Menéndez González CV

Personal CV built with React, TypeScript, and Tailwind CSS. Generates bilingual PDFs (EN/ES) via Puppeteer.

## Setup

```bash
npm install
npm start          # dev server at localhost:3000
npm run build      # production build
```

## PDF Generation

```bash
node scripts/generate-pdf.js              # generates both EN and ES PDFs
node scripts/generate-pdf.js en out.pdf   # single language
```

## Bilingual Support

Language is resolved in order: `?lang=` URL param → `REACT_APP_LANG` env var → `'en'` default.

Translation files: `src/i18n/en.json`, `src/i18n/es.json`.

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- react-i18next
- Puppeteer (PDF generation)
- GitHub Actions CI/CD → AWS S3 + CloudFront

## Structure

```
src/
  App.tsx              # Layout: sidebar + main content
  components/          # Header, Experience, Education, Languages, Skills
  i18n/                # en.json, es.json translations
  utils/format-date.ts # Locale-aware date formatting
scripts/
  generate-pdf.js      # Puppeteer PDF generation
```

All suggestions will be appreciated.
