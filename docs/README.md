# Website

This website is built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

## Structure

- `src/content/docs/` — documentation pages (Markdown / MDX)
  - `*.md` — hand-written guides
  - `components/*.mdx` — **auto-generated** API reference (do not edit by hand)
- `src/assets/` — images referenced from content/config
- `public/` — static files served as-is (favicon, screenshots, and the
  Storybook `examples/` build)
- `astro.config.mjs` — site & Starlight configuration (title, sidebar, etc.)

## Generated API docs

The component reference pages under `src/content/docs/components/` are generated
from the TypeScript source annotations by `scripts/generator`. Regenerate them
from the repository root:

```console
yarn docs:generate
```

Do not edit those files by hand — they are git-ignored and overwritten on every build.

## Local development

Install dependencies (from this `docs/` directory):

```console
yarn install
```

Generate the component docs and start the dev server (from the repository root):

```console
yarn docs:generate
yarn docs
```

## Build

The full documentation site (library build + generated API docs + Storybook
examples + Astro build) is produced from the repository root:

```console
yarn docs:build
```

The static output is written to `docs/dist/` and deployed to GitHub Pages by CI.
