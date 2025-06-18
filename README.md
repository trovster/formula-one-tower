# F1 Timing Tower

A recreation of the Forumla 1 information graphic that appears on TV, built using basic web technologies.

Built using [Astro](https://astro.build).

## Project Structure

```text
/
├── public/
│   └── fonts/
├── src/
│   └── assets/
│   └── components/
│   └── data/
│   └── layouts/
│   └── pages/
│       └── index.astro
└── package.json
```

## Deployment

The project is automatically deployed on GitHub Pages, when pushing to the `main` branch.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
