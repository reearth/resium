---
title: Installation
---

Install `cesium` and `resium`:

```bash
npm install --save cesium resium
# OR
yarn add cesium resium
```

:::note
**For TypeScript users**: `@types/cesium` is no longer needed because Resium supports Cesium official type definition.
:::

Cesium ships a large set of static assets (web workers, third-party libraries, widget styles, and so on) that must be served alongside your app. How you wire those up depends on your bundler:

- [Vite](#vite) (**🚀 recommended**)
- [Next.js](#nextjs)
- [Webpack](#webpack-reference) (reference)

When you finish set up, you can import Cesium:

```js
import { Cartesian3 } from "cesium";
```

Then advance to [Getting Started](/getting-started).

:::caution
`import Cesium from "cesium";` causes an error, as default is not exported from Cesium. Use `import * as Cesium from "cesium";`.
:::

## Vite

[Vite](https://vitejs.dev/) is the recommended way to use Resium. [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) copies Cesium's static assets and sets `CESIUM_BASE_URL` for you, so there is almost nothing to configure.

See also: [example project](https://github.com/reearth/resium/tree/main/examples/vite)

Create a new Vite project (select the "react" template):

```bash
npm create vite@latest example -- --template react
# OR
yarn create vite example --template react
```

Then install Cesium, Resium, and [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium):

```bash
npm install --save cesium resium
npm install --save-dev vite-plugin-cesium
# OR
yarn add cesium resium
yarn add --dev vite-plugin-cesium
```

Then edit `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
});
```

That's all!

## Next.js

See also: [example project](https://github.com/reearth/resium/tree/main/examples/next) (App Router)

We assume your Next.js project (App Router) already exists. Cesium runs only in the browser, so it has to be loaded client-side with its static assets served from `/public`.

### 1. Copy Cesium's static assets

Cesium loads its built assets (workers, third-party libraries, widget images) at runtime, so they have to be served from `/public`. Add a `postinstall` script that copies them into `public/cesium` on every install, then ignore the copy in git:

```json title="package.json"
{
  "scripts": {
    "postinstall": "node -e \"require('fs').cpSync('node_modules/cesium/Build/Cesium','public/cesium',{recursive:true})\""
  }
}
```

```bash
npm install
# OR
yarn
```

```text title=".gitignore"
/public/cesium
```

:::note
This uses Node's built-in `fs.cpSync`, so it needs no extra dependency and works on every platform. A symlink (e.g. `ln -s`) also works if you prefer not to duplicate the files.
:::

### 2. Create a client-only Cesium component

Make a Client Component, import the widgets CSS directly, and point Cesium at the copied assets via `window.CESIUM_BASE_URL`:

```jsx title="app/Cesium.js"
"use client";

import "cesium/Build/Cesium/Widgets/widgets.css";
import { Viewer } from "resium";

// Cesium loads its workers/assets relative to this URL (copied to /public/cesium above).
window.CESIUM_BASE_URL = "/cesium";

export default function Cesium() {
  return <Viewer full />;
}
```

### 3. Render it with SSR disabled

In the App Router, `dynamic(..., { ssr: false })` is only allowed inside a Client Component, so render it from a client page:

```jsx title="app/page.js"
"use client";

import dynamic from "next/dynamic";

const Cesium = dynamic(() => import("./Cesium"), { ssr: false });

export default function Page() {
  return <Cesium />;
}
```

That's all!

:::note[Why not `next/head` or a `webpack` config?]
`next/head` is a no-op in the App Router, and Next.js 15+/16 use Turbopack by default, which ignores `next.config.js` `webpack` customizations. Importing the CSS directly and setting `window.CESIUM_BASE_URL` at runtime works regardless of the bundler.
:::

### Pages Router (reference)

If you are still on the Pages Router, the same idea applies — import the widgets CSS in `_app`, set `window.CESIUM_BASE_URL` in the client-only component, and disable SSR with `next/dynamic`:

```jsx title="pages/_app.js"
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

```jsx title="components/Cesium.js"
import { Viewer } from "resium";

window.CESIUM_BASE_URL = "/cesium";

export default function Cesium() {
  return <Viewer full />;
}
```

```jsx title="pages/index.js"
import dynamic from "next/dynamic";

const Cesium = dynamic(() => import("../components/Cesium"), { ssr: false });

export default function Home() {
  return <Cesium />;
}
```

## Webpack (reference)

:::note
These raw webpack setups are kept for reference. For new projects we recommend [Vite](#vite) instead.
:::

There are two approaches. Choose one.

### Option A: Copy whole Cesium files and load Cesium in HTML

See also: [example project](https://github.com/reearth/resium/tree/main/examples/webpack)

#### A-1. Install webpack plugins

```bash
npm install --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
# OR
yarn add copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
```

Then, edit your webpack configuration.

#### A-2. Add `cesium` to externals

Cesium will be loaded in HTML. Notify it to webpack.

```js
{
  externals: {
    cesium: "Cesium";
  }
}
```

When cesium is loaded, webpack uses `window.Cesium` instead of loading source files.

#### A-3. Add plugins

- Copy whole Cesium files at build time with copy-webpack-plugin
- Add tags to index.html to load JS and CSS with html-webpack-tags-plugin
- Notify Cesium to its path with webpack define plugin

```js
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    // ...
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/cesium/Build/Cesium",
          to: "cesium",
        },
      ],
    }),
    new HtmlPlugin({
      template: "index.html",
    }),
    new HtmlTagsPlugin({
      append: false,
      tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
  ];
}
```

Note: If `publicPath` in webpack config is changed, `CESIUM_BASE_URL` may have to be changed also.

### Option B: Copy only asset files and bundle Cesium normaly except assets

In this way, imported and used Cesium source codes are bundled to your app's source code with webpack.

See also: [example project](https://github.com/reearth/resium/tree/main/examples/webpack2) and [Cesium official example](https://github.com/AnalyticalGraphicsInc/cesium-webpack-example)

#### B-1. Install webpack plugins and loaders

```bash
npm install --save-dev html-webpack-plugin copy-webpack-plugin css-loader style-loader url-loader
# OR
yarn add --dev html-webpack-plugin copy-webpack-plugin css-loader style-loader url-loader
```

Then, edit your webpack configuration.

#### B-2. Add plugins

- Copy only asset files at build time
- Cesium refers to `CESIUM_BASE_URL` to find asset files

```js
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    new HtmlPlugin({
      template: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        {
          from: "node_modules/cesium/Build/Cesium/ThirdParty",
          to: "ThirdParty",
        },
        { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
        { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },
      ],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(""),
    }),
  ];
}
```

Note: If `publicPath` in webpack config is changed, `CESIUM_BASE_URL` may have to be changed also.

#### B-3. Add loaders and load CSS file in the entry JS

```js
{
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ["url-loader"],
      },
    ];
  }
}
```

#### B-4. Load CSS in your app

Add a link tag in head of your `index.html` to load CSS:

```html
<link rel="stylesheet" href="/Widgets/widgets.css" />
```

Note: if you have changed `CESIUM_BASE_URL`, you may also have to change this.

Tips: Using `html-webpack-tags-plugin` is also OK!

:::caution

[As reported on GitHub issues](https://github.com/CesiumGS/cesium/issues/9212), adding import statement to your entry JS (e.g. index.js) does not work for now:

```js
import "cesium/Build/Cesium/Widgets/widgets.css";
```

:::

## Using `@cesium/engine` and `@cesium/widgets`

The monolithic `cesium` package is just a thin re-export of the modular [`@cesium/engine`](https://www.npmjs.com/package/@cesium/engine) and [`@cesium/widgets`](https://www.npmjs.com/package/@cesium/widgets) packages. Resium imports everything from `"cesium"` and leaves that import external in its build, so you can depend on the modular packages directly by aliasing `"cesium"` to them — no changes to Resium are required.

:::tip[Engine-only setup]
Resium pulls in `@cesium/widgets` **only** for the `<Viewer>` component. The lighter `<CesiumWidget>` root and every other component come from `@cesium/engine`.

So if you use `<CesiumWidget>` instead of `<Viewer>`, you can drop `@cesium/widgets` entirely — install only `@cesium/engine`, omit the `@cesium/widgets` re-export line, and skip the widgets CSS step below. (Just don't import Resium's `<Viewer>` in that setup, or the bundler will try to resolve `@cesium/widgets`.)
:::

### 1. Re-export the modular packages and alias `cesium`

Install the packages and create a small module that re-exports both:

```bash
# with <Viewer>
npm install --save @cesium/engine @cesium/widgets resium
# engine-only (use <CesiumWidget> instead of <Viewer>)
npm install --save @cesium/engine resium
```

```ts title="src/cesium.ts"
export * from "@cesium/engine";
export * from "@cesium/widgets"; // omit this line for an engine-only (no <Viewer>) setup
```

Mirror the alias in `tsconfig.json` so TypeScript resolves `cesium` the same way the bundler does:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "cesium": ["./src/cesium.ts"]
    }
  }
}
```

The bundler-side alias is shown in the full configs below.

### 2. Configure the bundler (alias + assets)

`vite-plugin-cesium` can **not** be used here — it copies from `node_modules/cesium`. With the modular packages the static assets live in different places, so copy them yourself and tell Cesium where they are via `CESIUM_BASE_URL`:

| What | Source (modular packages) |
|--|--|
| Workers | `@cesium/engine/Build/Workers` |
| ThirdParty | `@cesium/engine/Build/ThirdParty` |
| Assets | `@cesium/engine/Source/Assets` |
| Widgets CSS | `@cesium/widgets/Source/widgets.css` |

**Vite** (using [`vite-plugin-static-copy`](https://github.com/sapphi-red/vite-plugin-static-copy)):

```ts title="vite.config.ts"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  define: {
    // where the copied assets are served from
    CESIUM_BASE_URL: JSON.stringify("/cesium"),
  },
  resolve: {
    alias: { cesium: "/src/cesium.ts" },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "node_modules/@cesium/engine/Build/Workers", dest: "cesium" },
        { src: "node_modules/@cesium/engine/Build/ThirdParty", dest: "cesium" },
        { src: "node_modules/@cesium/engine/Source/Assets", dest: "cesium" },
      ],
    }),
  ],
});
```

**webpack** (using `copy-webpack-plugin`):

```js title="webpack.config.js"
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    alias: { cesium: path.resolve(__dirname, "src/cesium.ts") },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/@cesium/engine/Build/Workers", to: "cesium/Workers" },
        { from: "node_modules/@cesium/engine/Build/ThirdParty", to: "cesium/ThirdParty" },
        { from: "node_modules/@cesium/engine/Source/Assets", to: "cesium/Assets" },
      ],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
  ],
};
```

### 3. Load the widgets CSS (only when using `<Viewer>`)

The `<Viewer>` UI needs the widgets stylesheet. Import it once in your app entry (the bundler resolves it from the package):

```ts
import "@cesium/widgets/Source/widgets.css";
```

Skip this step entirely for an engine-only (`<CesiumWidget>`) setup.

:::caution
When you use both packages, keep `@cesium/engine` and `@cesium/widgets` on matching versions — each `cesium` release pins a compatible pair, and mixing mismatched versions can break at runtime.
:::
