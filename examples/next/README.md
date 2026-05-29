# Resium + Next.js (App Router) example

A minimal [Resium](https://github.com/reearth/resium) + [Cesium](https://cesium.com/) app on the Next.js App Router.

## How it works

- `postinstall` links Cesium's built assets into `public/cesium` (via `symlink-dir`).
- `app/Cesium.js` is a Client Component that imports the widgets CSS and sets `window.CESIUM_BASE_URL = "/cesium"` so Cesium finds those assets.
- `app/page.js` loads it with `next/dynamic` and `{ ssr: false }`, because Cesium only runs in the browser.

This is bundler-agnostic — it works with both Turbopack (the Next.js default) and webpack.

## Getting Started

```bash
yarn install   # runs postinstall to link public/cesium
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).
