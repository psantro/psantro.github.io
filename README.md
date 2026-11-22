# psantro.github.io

A bilingual portfolio built with Angular 22, Angular's compile-time i18n
pipeline, and static prerendering for GitHub Pages. The deployed site has no
runtime backend.

## Requirements

- Node.js 26.13.1 (see `.nvmrc`)
- npm 11

## Development

```sh
npm ci
npm start
```

The Angular development server serves the English source locale at
`http://localhost:4200/`.

## Localization

English is the source locale and Spanish translations are maintained in
`src/locale/messages.es.xlf`. Mark application messages with Angular's
`$localize` syntax, then refresh the source catalog with:

```sh
npm run extract-i18n
```

Translate new source messages into the Spanish catalog before building.

## Static build

```sh
npm run build
```

Angular creates independent prerendered English (`/en/`) and Spanish (`/es/`)
sites. A small static language chooser is written to `/` for browser-language
selection, with working language links when JavaScript is disabled. The
complete deployment artifact is `dist/psantro-portfolio/browser`.

Static site files live in `public/`; images and résumés are grouped under
`public/assets/`. Angular copies them into each localized output directory,
so page references use paths relative to that locale's base URL.

The visual theme uses the supplied floral-white, dust-grey, charcoal, and
paprika palette. Space Grotesk and IBM Plex Mono are loaded from Google Fonts,
with system fallbacks. Project previews use 16:9 carousel headers; add slides
to a project's `images` array in `portfolio-content.ts` to enable navigation.
Each project currently has one supplied screenshot, so its carousel controls
remain disabled until more screenshots are added.

## GitHub Pages deployment

The GitHub Actions workflow builds the site with Node.js 26.13.1 and deploys
the static output when changes are pushed to `release/1.2.x`. In repository
settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.
