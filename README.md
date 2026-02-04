# :globe_with_meridians: psantro.github.io — Personal Website :sparkles:

An interactive, multilingual portfolio website showcasing my resume and the public projects I’ve worked on (and am currently working on). Built as a fully static frontend and hosted on **GitHub Pages**.

- :mag_right: [Project Overview](#mag_right-project-overview)
- :books: [Technologies Used](#books-technologies-used)
  - :blue_book: [Development Tools](#blue_book-development-tools)
  - :closed_book: [Tech Stack](#closed_book-tech-stack)
- :file_folder: [Project Structure](#file_folder-project-structure)
- :rocket: [Deployment](#rocket-deployment)
- :crystal_ball: [Future Improvements](#crystal_ball-future-improvements)

---

## :mag_right: Project Overview

This project serves as my personal online portfolio, designed to give potential employers and collaborators a clear view of my background, skills, and projects.

The site is intentionally **frontend-only**, as it is deployed on GitHub Pages. Despite that constraint, it focuses on clean structure, responsive design, and maintainable code.

Key goals:

- Present my resume in a clear, accessible way
- Showcase personal and professional projects
- Support multiple languages (English and Spanish)
- Keep the stack simple, fast, and easy to maintain

---

## :books: Technologies Used

This project uses common, modern frontend tools you’d expect in everyday web development.

### :blue_book: Development Tools

- **Code Editor:** [Visual Studio Code](https://code.visualstudio.com/) — primary editor for development
- **Version Control:** [Git](https://git-scm.com/) (via VS Code) — source control and collaboration

### :closed_book: Tech Stack

- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) / [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) / [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — core web technologies
- **[Bootstrap](https://getbootstrap.com/)** — responsive layout and UI components
- **[Prettier](https://prettier.io/)** — consistent code formatting

---

## :file_folder: Project Structure

The project follows a **language-in-path architecture**, keeping each locale self-contained while sharing common assets.

- `assets/` — Shared static assets (images, styles, scripts, etc.)
- `en/` — English version of the site
  - `index.html` — Redirects to /en/about.html
  - `about.html` — English "About Me" page
  - `projects.html` — English projects listing
- `es/` — Spanish version of the site
  - `index.html` — Redirects to /es/sobre-mi.html
  - `sobre-mi.html` — Spanish "About Me" page
  - `proyectos.html` — Spanish projects listing
- `index.html` — Redirects to `/en/` or `/es/` based on browser language preference

This structure makes it easy to:

- Add new languages
- Keep translations organized
- Deploy without any backend dependencies

---

## :rocket: Deployment

The site is deployed using **GitHub Pages**, which means:

- No server-side code
- Fast, reliable hosting
- Simple CI-free deployment directly from the repository

---

## :crystal_ball: Future Improvements

Possible next steps for the project:

- Improve accessibility (ARIA roles, contrast, keyboard navigation)
- Consider migrating the project to Static Site Generator (SSG) tools (like [Astro](https://astro.build/) or [Next.js](https://nextjs.org/))
- Enhance animations and transitions
- Automate build steps (minification, linting)

---

Feel free to explore the site or check out the source code. Feedback is always welcome!
