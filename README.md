# psantro.github.io

Multilingual personal portfolio built with Angular 22 and prerendered as a
static site for GitHub Pages. There is no runtime backend.

## Requirements

- Node.js 26.13.1 (see `.nvmrc`)
- npm 11

## Development

```sh
npm ci
npm start
```

The development server serves the Angular app at `http://localhost:4200/`.

## Static build

```sh
npm run build
```

Angular prerenders the language landing page and the English and Spanish
portfolio routes. The complete static site is written to
`dist/psantro-portfolio/browser`.

## GitHub Pages deployment

The GitHub Actions workflow builds the site with Node.js 26.13.1 and deploys
the static output to GitHub Pages when changes are pushed to `release/1.2.x`.
In the repository settings, set **Pages > Build and deployment > Source** to
**GitHub Actions**.

The `/` page selects English or Spanish based on the browser language, with
manual language links available if JavaScript is disabled. The `/en/` and
`/es/` routes remain directly accessible.
