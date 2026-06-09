---
title: Contribution
---

Your contribution welcome!

## Reporting bugs

If you find bugs ascribed to resium, please open a issue in [GitHub issues](https://github.com/reearth/resium/issues).

## When you have a question

Post your question to [GitHub issues](https://github.com/reearth/resium/issues).

Note: Please do not email the author if at all possible.

## Suggesting new features or new components

Please open a issue in [GitHub issues](https://github.com/reearth/resium/issues).

## Start hacking

Resium requires an editor supporting TypeScript and ESLint.

1. Fork [resium repository](https://github.com/reearth/resium).
2. Clone a new repository made with forking.
3. Install modules with `npm install` command.
4. Let's develop!
5. Commit and push your changes.
6. Make a new [pull request](https://github.com/reearth/resium/pulls) in resium repository.

- To run test: `npm test`
- To start storybook: `npm run storybook`
- To build: `npm run build`

## Visual regression testing (VRT)

Resium has an opt-in VRT pipeline that screenshots Cesium-backed Storybook stories and compares them against baselines to catch unintended rendering changes.

It renders deterministically on the CPU (Chromium + SwiftShader software rendering) so screenshots are byte-stable: stories use Cesium's bundled offline imagery (Natural Earth II), a fixed clock and camera, and disabled antialiasing/atmosphere/sun. Only stories tagged `vrt` are captured.

### Running locally

```bash
npx playwright install chromium      # first time only
npm run storybook:build:vrt          # build Storybook
npm run vrt:update                   # create local baselines
npm run vrt                          # compare against them
```

Note: local (macOS) renders will not match CI (Linux) pixel-for-pixel. Local runs are for a quick visual check; CI is the source of truth.

### How baselines are stored

Baselines live on an orphan branch `vrt-baselines` (not in the main tree). The CI workflow (`.github/workflows/vrt.yml`) restores them on every PR, compares, and uploads diff images as artifacts on failure. Baselines must be generated in CI, never committed from a local machine.

### Updating baselines after an intentional visual change

When you intentionally change how something renders, the VRT check will fail with a diff. To accept the new look:

1. Push your change; let the VRT check run.
2. Download the `vrt-diffs` artifact from the failed run and confirm the diff is the change you expect (no accidental regressions).
3. Regenerate baselines in CI: **Actions → vrt → Run workflow**, pick your branch, and enable **update**. (Or `gh workflow run vrt.yml --ref <branch> -f update=true`.) This re-renders in CI and republishes `vrt-baselines`.
4. Re-run the PR's VRT check (`gh run rerun <run-id> --failed`); it should now pass.
5. Merge. Optionally re-run the update on `main` afterwards so the baselines reflect the merged state.

`vrt-baselines` is shared across all PRs, so update it right before merge to avoid showing false diffs on other open PRs.

### Adding a new VRT story

Colocate VRT stories with the component as `src/<Component>/<Component>.vrt.stories.tsx`, wrap the content in `VrtViewer` (the deterministic viewer, imported from `src/__vrt__/`), and tag the story (or its meta) with `vrt`.

## Adding new properties to a component

It is very easy to add a new typical property to a Cesium component. Your PR welcome!

For example, let's add a new property `test` added to Viewer class in Cesium, to `<Viewer>` component. Open and edit `src/Viewer.tsx`.

If `test` is a variable property:

```ts
const cesiumProps = [
  // ...
  "test", // <== Add a new property name
] as const;
```

All is done!

If `test` is a read only property:

```ts
const cesiumReadonlyProps = [
  // ...
  "test", // <== Add a new property name
];
```

If `test` is an event property:

**Note**: Follow React's convention for the event name. For example:

- `tickEvent` => `onTick`
- `progress` => `onProgress`

```ts
export type ViewerEventProps = {
  // ...
  onTest?: () => void; // <=== Add a new property type
};
```

and

```ts
export const cesiumEventProps: EventKeyMap<Viewer, ViewerProps> = {
  onTest: "test", // <== Add a new property name mapping
};
```

## Adding unit tests for components

Unit tests for core are mostly well, but for components are lack. Your PR welcome!

### 1. Add stubs

Resium uses Jest as a test runner and assertion library. But Cesium cannot be loaded in Jest, because it deeply depends on Web APIs (WebWorker, WebGL and so on). That's why creating stubs for Cesium is required.

Stubs are located in `__mocks__` directory. For details, refer to existing stubs.

### 2. Add unit tests

Unit tests are located in `src/tests` directory. For details, refer to existing tests: `src/tests/Entity.test.tsx`. It uses enzyme.

Please write test code to test as follows:

- Test if the component can mount properly.
- Test if the component can update properties properly.
- Test if the component can unmount properly.
