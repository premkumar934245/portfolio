# Prem Kumar S Portfolio

A single-page React + Vite portfolio for Prem Kumar S. Content is centralized in `src/data.js` for easy editing.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

- **Vercel:** import the repository, keep the framework preset as Vite, and use `npm run build` with output directory `dist`.
- **Netlify:** set build command to `npm run build` and publish directory to `dist`.

Replace `public/resume_final.pdf` with the final resume PDF before deploying. To wire the form, replace the placeholder Formspree action in `src/main.jsx` or connect the submit handler to EmailJS credentials stored in environment variables.
