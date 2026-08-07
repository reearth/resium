# Changelog

## 1.25.0 - 2026-08-07

### feat

- Support Cesium 1.144 — five new composable camera controllers (`HybridScreenSpacePan`, `ScreenSpaceElevator`, `ScreenSpaceMap`, `ScreenSpaceTiltOrbit`, `ScreenSpaceZoom`) plus a `Controller` context wired into `Viewer.addController` / `Scene.controllerHost`. Bundled with monthly dev-dep refresh and Astro 7.1 docs bump ([#802](https://github.com/reearth/resium/pull/802)) [`992ce8`](https://github.com/reearth/resium/commit/992ce8)

### fix

- Ensure readonly prop updates propagate on every rerender, not just the first — closes a latent recreation-loop bug in `useCesiumComponent`. Community contribution — thanks @squeakyrino! ([#796](https://github.com/reearth/resium/pull/796)) [`95a3a7`](https://github.com/reearth/resium/commit/95a3a7)

### ci

- Correct VRT checkout for fork PRs so external contributions run against the right code and reg-suit finds the right baseline ([#803](https://github.com/reearth/resium/pull/803)) [`5ed468`](https://github.com/reearth/resium/commit/5ed468)

## 1.24.0 - 2026-07-09

### feat

- Support Cesium 1.143 — new `PathGraphics.materialMode` prop (`WHOLE` | `PORTIONS`) for per-segment path materials. Bundled with monthly dev-dep refresh, Astro 6→7 docs bump, and CI action bumps (`actions/checkout` v7, `codecov` v7) ([#797](https://github.com/reearth/resium/pull/797)) [`d1df46`](https://github.com/reearth/resium/commit/d1df46)

### chore

- Migrate package manager from Yarn to npm ([#791](https://github.com/reearth/resium/pull/791)) [`733400`](https://github.com/reearth/resium/commit/733400)

## 1.23.0 - 2026-06-05

> **Heads up — `boundingVolume` is now world-space.** Cesium 1.142 changed the semantic of `boundingVolume` on `BufferPointCollection` / `BufferPolylineCollection` / `BufferPolygonCollection` from local/model space to **world space**. Resium now exposes `boundingVolume` as a constructor prop, so consumers passing a precomputed bounding volume must recompute it in world coordinates. See the [v1.23 migration guide](https://resium.reearth.io/migration/) for details.

### feat

- Support Cesium 1.142 — vector tiles (`MVTDataProvider`), GeoJSON primitives (`GeoJsonPrimitive`), `edgeDisplayMode`, `blendOption`, multi-key modifier on `ScreenSpaceEvent` ([#787](https://github.com/reearth/resium/pull/787)) [`0a50be`](https://github.com/reearth/resium/commit/0a50be)
- Add `GooglePhotorealistic3DTileset` component ([#781](https://github.com/reearth/resium/pull/781)) [`7e4f3e`](https://github.com/reearth/resium/commit/7e4f3e)

### fix

- Ownership/destroy bugs (clippingPlanes/clippingPolygons, composite stages) + onSelectedEntityChange type ([#782](https://github.com/reearth/resium/pull/782)) [`2a5eee`](https://github.com/reearth/resium/commit/2a5eee)
- Resolve real bugs (Globe terrain, StrictMode events, tileset url, Polyline material, Clock timeline) ([#780](https://github.com/reearth/resium/pull/780)) [`5be3dd`](https://github.com/reearth/resium/commit/5be3dd)

### docs

- Migrate documentation site from Docusaurus to Astro Starlight ([#784](https://github.com/reearth/resium/pull/784)) [`b3b80f`](https://github.com/reearth/resium/commit/b3b80f)
- Clarify cesiumElement ref timing, useCesium scope, and tileset zoom ([#779](https://github.com/reearth/resium/pull/779)) [`f869c5`](https://github.com/reearth/resium/commit/f869c5)
- Wrap Viewer/CesiumWidget @example JSX in code fences ([#783](https://github.com/reearth/resium/pull/783)) [`31fa9b`](https://github.com/reearth/resium/commit/31fa9b)
- Fix broken README image links after docs migration [`5fb4a5`](https://github.com/reearth/resium/commit/5fb4a5)

### chore

- Add Backstage catalog-info.yaml ([#786](https://github.com/reearth/resium/pull/786)) [`395147`](https://github.com/reearth/resium/commit/395147)

### ci

- Cap pinned VRT baselines with protectedRetentionCount [`198f3a`](https://github.com/reearth/resium/commit/198f3a)
- Pin main VRT snapshots and cap PR snapshots at 10 [`42ecfa`](https://github.com/reearth/resium/commit/42ecfa)

## 1.22.0 - 2026-05-29

### core

#### fix

- Recreate children with the new context when a parent is recreated ([#775](https://github.com/reearth/resium/pull/775)) [`287977`](https://github.com/reearth/resium/commit/287977)

### deps

#### chore

- Update dev&#x2F;build dependencies (supersedes [#754](https://github.com/reearth/resium/pull/754)) ([#777](https://github.com/reearth/resium/pull/777)) [`f21161`](https://github.com/reearth/resium/commit/f21161)
- Upgrade ESLint to 10 + eslint-config-reearth 0.4.0 ([#776](https://github.com/reearth/resium/pull/776)) [`deef7c`](https://github.com/reearth/resium/commit/deef7c)

### vrt

#### feat

- Migrate VRT to reg-suit with GitHub Releases backend [`651727`](https://github.com/reearth/resium/commit/651727)

#### fix

- Check out PR head branch so reg-keygen can detect the branch [`22286e`](https://github.com/reearth/resium/commit/22286e)
- Include hidden files when uploading reg-suit report [`9b13bd`](https://github.com/reearth/resium/commit/9b13bd)

### 

#### chore

- Update dependency node to v24 ([#770](https://github.com/reearth/resium/pull/770)) [`faa5cf`](https://github.com/reearth/resium/commit/faa5cf)

#### ci

- Checkout before setup-node so node-version-file can be read [`fbf5a9`](https://github.com/reearth/resium/commit/fbf5a9)
- Auto-tag releases on PR merge and pin Node via .node-version [`6cb48d`](https://github.com/reearth/resium/commit/6cb48d)

#### docs

- Point screenshot&#x2F;usage image URLs at main [`49ef0e`](https://github.com/reearth/resium/commit/49ef0e)
- Remove donation&#x2F;sponsorship content and disable GitHub Sponsors [`4ff4cd`](https://github.com/reearth/resium/commit/4ff4cd)
- Fix broken CI badge and logo URLs (master-&gt;main, ci workflow) [`2eeabd`](https://github.com/reearth/resium/commit/2eeabd)

#### feat

- Add opt-in React Suspense support to data sources ([#773](https://github.com/reearth/resium/pull/773)) [`cfd8c3`](https://github.com/reearth/resium/commit/cfd8c3)
- Add Storybook visual regression testing (VRT) ([#774](https://github.com/reearth/resium/pull/774)) [`118a50`](https://github.com/reearth/resium/commit/118a50)

## 1.21.1 - 2026-05-13

### chore

- Upgrade Cesium to 1.141.0 ([#769](https://github.com/reearth/resium/pull/769)) [`6b3559`](https://github.com/reearth/resium/commit/6b3559)
- Bump dev deps, harden CI, add Trusted-Publishing release workflow ([#768](https://github.com/reearth/resium/pull/768)) [`a57d3b`](https://github.com/reearth/resium/commit/a57d3b)

#### Note

- Cesium upgraded to 1.141. As a side effect, modelMatrix on BufferPointCollection / BufferPolygonCollection / BufferPolylineCollection is now applied at construction only — reactive updates after mount no longer propagate (Cesium 1.141 made the underlying property readonly). To animate, hold a ref and mutate the Matrix4 in place via Matrix4.clone(next, ref.current.modelMatrix).

- Node engines: Cesium 1.141 raised its own minimum Node version to 22. Resium itself continues to support Node ≥20.19, but if you upgrade your cesium dependency to 1.141, you'll see an engines warning during install until you move to Node 22. Pin cesium to 1.140 if you need to stay on Node 20.

## 1.21.0 - 2026-04-20

### chore

- Address post-merge review feedback on Cesium 1.140.0 PR ([#766](https://github.com/reearth/resium/pull/766)) [`14a54f`](https://github.com/reearth/resium/commit/14a54f)
- Upgrade Cesium to 1.140.0 and add new components ([#763](https://github.com/reearth/resium/pull/763)) [`396403`](https://github.com/reearth/resium/commit/396403)

## 1.20.1 - 2026-04-08

### fix

- Externalize react&#x2F;jsx-runtime to prevent require() in ESM output ([#758](https://github.com/reearth/resium/pull/758)) [`cdc805`](https://github.com/reearth/resium/commit/cdc805)

## 1.20.0 - 2026-03-18

### chore

- Update packages march 2026 ([#747](https://github.com/reearth/resium/pull/747)) [`7ec5cc`](https://github.com/reearth/resium/commit/7ec5cc)

### feature

- Panorama from Cesium 1.139 ([#749](https://github.com/reearth/resium/pull/749)) [`4a9fa4`](https://github.com/reearth/resium/commit/4a9fa4)

## 1.19.4 - 2026-02-18

### chore

- Update Packages Feb 2026 ([#743](https://github.com/reearth/resium/pull/743)) [`fce026`](https://github.com/reearth/resium/commit/fce026)
  - Upgrade Storybook ecosystem to 10.2.8
  - Upgrade React/React DOM to 19.2.4
  - Upgrade Cesium to 1.138.0
  - Upgrade jsdom to 28.1.0
  - Upgrade Vitest to 4.0.18

## 1.19.3 - 2026-01-22

### chore

- Update dependencies to the latest ([#739](https://github.com/reearth/resium/pull/739)) [`211ab7`](https://github.com/reearth/resium/commit/211ab7)
- Copy Cesium files to Storybook output directory [`ef0898`](https://github.com/reearth/resium/commit/ef0898)

### fix

- Use absolute path for Cesium base URL in Storybook [`8a0d9c`](https://github.com/reearth/resium/commit/8a0d9c)

## 1.19.2 - 2025-12-04

### chore

- Upgrade Cesium to 1.135 and Other outdated packages ([#728](https://github.com/reearth/resium/pull/728)) [`806bd8`](https://github.com/reearth/resium/commit/806bd8)
- Upgrade React to 19.2.1 to address critical security vulnerability in React 19.0.0

### fix

- Fix docs build ([#729](https://github.com/reearth/resium/pull/729)) [`c45c60`](https://github.com/reearth/resium/commit/c45c60)

## 1.19.1 - 2025-11-14

### bugfix

- Fix Bing Maps Network Request Issue ([#724](https://github.com/reearth/resium/pull/724)) [`a6ea92`](https://github.com/reearth/resium/commit/a6ea92)
- Chore&#x2F;fix lint warnings ([#722](https://github.com/reearth/resium/pull/722)) [`889c9a`](https://github.com/reearth/resium/commit/889c9a)

## 1.19.0 - 2025-11-07

- Upgrade Cesium from 1.116.0 to 1.134.1 ([#714](https://github.com/reearth/resium/pull/714)) [`c73f86`](https://github.com/reearth/resium/commit/c73f86)

## v1.18.4 - 2024-10-28

- Upgrade to React 19 ([#710](https://github.com/reearth/resium/pull/710)) [`269067`](https://github.com/reearth/resium/commit/269067)
  - Update React and React-DOM to 19.0.0
  - Update @types/react to 19.0.0
  - Upgrade Storybook to 8.6.14 for React 19 support
  - Fix useRef type strictness for React 19
  - Update forwardRef type signatures
  - Migrate Storybook config to ES modules
- Refactor import statements to use .mts extensions ([#711](https://github.com/reearth/resium/pull/711)) [`39cba1`](https://github.com/reearth/resium/commit/39cba1)
- Update yarn build command to fix CI errors ([#712](https://github.com/reearth/resium/pull/712)) [`6d1880`](https://github.com/reearth/resium/commit/6d1880)

## v1.16.1 - 2022/03/20

- Use automatic JSX Runtime in Vite
- Fix typo in docs ([#502](https://github.com/reearth/resium/pull/582), [#588](https://github.com/reearth/resium/pull/588))
- Add index prop to ImageryLayer component
- Add id prop to Billboard and Label component
- Rename and fix useCesium context type
- Update depndencies

## v1.16.0 - 2022/12/14

- Support Cesium v1.100
- Add `onUpdate` event to root components
- Update dependencies

## v1.15.1 - 2022/08/31

- Fix models are not created correctly ([#559](https://github.com/reearth/resium/issues/559))
- Update dependencies

## v1.15.0 - 2022/06/25

- Support Cesium v1.95 features
- Support React v18
- When an unknown property is passed to a component, it used to be ignored, but has been changed to set the property to the Cesium object
- Fix ParticleSystem not destroyed expectedly ([#535](https://github.com/reearth/resium/issues/535))
- Use Vite as a build tool

## v1.14.3 - 2021/10/18

- Fix EntityDescription is not displayed on the first time entity selection ([#518](https://github.com/reearth/resium/pull/518))
- Upgrade dependencies

## v1.14.2 - 2021/09/10

- Decrepate EntityStaticDescription component - use EntityDescription component or description prop of Entity component instead

## v1.14.1 - 2021/09/10

- Fix react-dom/server.browser import error

## v1.14.0 - 2021/09/10

## Features

- Support properties that are available with Cesium v1.85
- Add CameraLookAt, CumlusCloud, and CloudCollection component
- Add event props (onClick, onMouseEnter, onMouseLeave, ...etc) to KMLDataSource, CzmlDataSource, GeoJsonDataSource, and CustomDataSource
- Event handlers no longer receive entities and primitives directly ([See more](https://resium.reearth.io/migration#event-handlers-no-longer-receive-an-entity-and-primitive-directly))

### Bug Fixes

- Complete ScreenSpaceEventHandler action type [#485](https://github.com/reearth/resium/pull/485)
- Properties not correctly updated
- Cesium3DTileset style prop does not work ([#477](https://github.com/reearth/resium/pull/477))

## Documentation

- Use Docusaurus
- Change documentation URL
- Update installation, getting started and guide page
- Update and add examples

### Chore

- Update dependencies
- Use microbundle for a JavaScript bundler
- Refactor type tests

## v1.13.1 - 2020/09/30

### Bug Fixes

- Resium does not work in create-react-app env ([#438](https://github.com/reearth/resium/pull/438))
- `EntityDescription` component does not render description in infobox ([#436](https://github.com/reearth/resium/pull/436))

### Chore

- Update dependencies

## v1.13.0 - 2020/09/15

### New Features

- `ClassificationPrimitive` component ([#429](https://github.com/reearth/resium/pull/429))

### Bug Fixes

- `PointGraphics` component does not display a point correctly
- `GroundPolylinePrimitive` component is not exported ([#423](https://github.com/reearth/resium/pull/423))

### Chore

- Upgrade storybook to v6
- Update example project: use react-refresh instead of react-hot-loader
- Fix typo in documentation ([#421](https://github.com/reearth/resium/pull/421))
- Change `useCesium` hook type
- Change type parameters of `createCesiumComponent` function
- Change `containerProps` type in options of `createCesiumComponent` function

## v1.12.0 - 2020/07/03

### BREAKING CHANGES

- Resium uses Cesium's official type definitions since v1.70. `@types/cesium` is no longer needed.
- Resium's components properties now support all the properties supported by Cesium by following Cesium's type definitions.
- All properties type except Cesium event props follow Cesium's type definitions.

### Bug Fixes

- Mouse event on primitives ([#324](https://github.com/reearth/resium/pull/324))
- CameraFlyXXX component: `onComplete` event is not called
- Upgrade deps

## v1.12.0-beta.2 - 2020/06/22

## v1.12.0-beta.1 - 2020/06/20

Note: some breaking changes are included

## v1.11.0 - 2020/02/17

- Add props:
  - **Globe**: `backFaceCulling` prop
  - **Scene**: `light` prop
- Fix
  - types
  - error on destroying camera operators ([#248](https://github.com/reearth/resium/issues/248))
  - prevent reset when contents hot reloaded ([#232](https://github.com/reearth/resium/issues/232))
- Upgrade deps

## v1.10.1 - 2020/01/18

- fix: error on destorying model ([#189](https://github.com/reearth/resium/issues/189))
- build: fix rollup config
- Introduce Renovate

## v1.10.0 - 2019/12/03

- change: `EntityDescription` is reimplemented with React Portal (enable to use any event or dynamic state in children)
- add: `EntityStaticDescription` component that behaves like a conventional EntityDescription component
- Upgrade deps

## v1.9.1 - 2019/11/20

- Fix: expose cesiumElement in ref correctly when component is mounted

## v1.9.0 - 2019/11/18

- **Breaking Changes**:
  - Drop support for React <= v16.7
  - Internal code is implemented with React Hooks
  - Some exported types are changed (TypeScript)
- Add API:
  - `useCesium` hooks
  - `ShadowMap` component
- Add props:
  - **Viewer, CesiumWidget**: `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseUp`, `onMiddleClick`, `onMiddleDown`, `onMiddleUp`, `onMouseMove`, `onPinchEnd`, `onPinchMove`, `onPinchStart`, `onRightClick`, `onRightDown`, `onRightUp`, `onWheel`, `onMouseEnter`, `onMouseLeave`
  - **Cesium3DTileset, Model**: `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseUp`, `onMiddleClick`, `onMiddleDown`, `onMiddleUp`, `onMouseMove`, `onPinchEnd`, `onPinchMove`, `onPinchStart`, `onRightClick`, `onRightDown`, `onRightUp`, `onMouseEnter`, `onMouseLeave`
  - **CameraFlyHome, CameraFlyTo, CameraFlyToBoundingSphere**: `once`
- Rename props:
  - **CameraFlyHome, CameraFlyTo, CameraFlyToBoundingSphere**: `cancelCameraFlight` -> `cancelFlightOnUnmount`
- Remove props:
  - **Globe**: `onTileLoad` (because its event is removed from Cesium's Globe object)
  - **Entity, Primitive, GroundPrimitive, Label, Polyline, PointPrimitive, Billboard**: `onWheel` (because it did not work well from the beginning)
- Others:
  - Reorgranize PostProcessStage/Composite components
  - Fix some bugs
  - Upgrade deps

## v1.8.1 - 2019/11/11

- fix
  - Support Cesium v1.63 ([#126](https://github.com/reearth/resium/issues/126))
  - typo: startPosition of CesiumMovementEvent ([#122](https://github.com/reearth/resium/issues/122))

## v1.8.0 - 2019/10/10

- add
  - **EllipsoidGraphics**: `innerRadii`, `maximumClock`, `maximumCone`, `minimumClock`, `minimumCone` properties
  - **KmlDataSource**, **GeoJsonDataSource**, **CzmlDataSource**, **Model**: `credit` property
  - **Cesium3DTileset**: `cullRequestsWhileMoving`, `cullRequestsWhileMovingMultiplier`, `preloadWhenHidden`, `preloadFlightDestinations`, `preferLeaves`, `progressiveResolutionHeightFraction`, `foveatedScreenSpaceError`, `foveatedConeSize`, `foveatedMinimumScreenSpaceErrorRelaxation`, `foveatedInterpolationCallback`, `foveatedTimeDelay` properties
  - **Viewer**, **CesiumWidget**: `useBrowserRecommendedResolution` property
- doc
  - Optimize some assets
  - Add example links to each component page
- chore
  - Upgrade deps

## v1.7.0 - 2019/08/07

- add
  - `SkyBox` component ([#109](https://github.com/reearth/resium/issues/109))
- fix
  - expose `GroundPrimitive` and `GroundPrimitiveCollection` ([#110](https://github.com/reearth/resium/issues/110))
  - typo: SkyAtmosphereContext
- chore
  - upgrade deps

## v1.6.0 - 2019/07/25

- add
  - `SkyAtmosphere` component
- change
  - export types in core: e.g. `CesiumInsideComponentType` ([#103](https://github.com/reearth/resium/issues/103))
- fix
  - make `url` prop of `Cesium3DTileset` component read only
  - fix Billboard, PointPrimitive, Polyline components cannot be update ([#99](https://github.com/reearth/resium/issues/99), [#101](https://github.com/reearth/resium/issues/101))
- doc
  - update installation guide
  - add and update webpack config to example
- chore: upgrade deps

## v1.5.0 - 2019/07/05

- fix
  - cannot update properties of Label component ([#92](https://github.com/reearth/resium/issues/92))
  - fix component names
- remove: terrainExaggeration property from Scene component
- refactor: change folder structure ([#87](https://github.com/reearth/resium/pull/87) by [@imvan32](https://github.com/imvan32))
- chore: upgrade deps

## v1.4.1 - 2019/03/26

- fix: typo ([#74](https://github.com/reearth/resium/pull/74))
- fix: dependencies

## v1.4.0 - 2019/03/25

- change: type of CesiumComponent's ref and CesiumComponent.getCesiumEventMap
- fix: remove console.log
- chore: upgrade dependencies

## v1.3.1 - 2019/03/15

- Fix error on unmount ([#70](https://github.com/reearth/resium/pull/70))

## v1.3.0 - 2019/03/11

- Add
  - `GroundPrimitive` and `GroundPrimitiveCollection` component ([#67](https://github.com/reearth/resium/pull/67))
- Doc
  - [Example page](https://resium.reearth.io/examples/) is available! ([#65](https://github.com/reearth/resium/pull/65))
  - Add link of [craco-cesium](https://github.com/reearth/craco-cesium) in installation page
  - Show source code in storybook ([#66](https://github.com/reearth/resium/pull/66))
- Chore
  - Export cesium context ([#62](https://github.com/reearth/resium/pull/62))
  - Introduce typescript-eslint instead of tslint ([#63](https://github.com/reearth/resium/pull/63))
  - Upgrade dependencies

## v1.2.1 - 2019/01/22

- fix: unexpected rendering ([#46](https://github.com/reearth/resium/issues/46))

## v1.2.0 - 2019/01/15

- Change
  - **Viewer**: Enable to disable default imagery provider ([#50](https://github.com/reearth/resium/issues/50))
- Decrepated
  - **Globe**: `ellipsoid`, `imageryLayers` (because they are unchangeable)
- Upgrade dependencies
- Update documentation

## v1.1.1 - 2019/01/10

- fix: GeoJsonDataSource describe error ([#48](https://github.com/reearth/resium/issues/48))

## v1.1.0 - 2019/01/07

- New properties for Cesium v1.53
  - **Scene**, **Cesium3DTileset**, **Model**: `specularEnvironmentMaps`, `sphericalHarmonicCoefficients`
  - **Cesium3DTileset**, **Model**: `luminanceAtZenith`
- Upgrade dependencies
- Update documentation

## v1.0.0 - 2018/12/20

### Breaking Changes

- Resium has been fully reimplemented in TypeScript.
- New React component life cycle and context API from v16.3 is supported.
- React v16.2 or lower is no longer supported.
- PropType (`prop-type` module) is no longer used.
- **Entity:** children is no longer rendered as description. Use `EntityDescription` component insted.
- **Kml/GeoJson/CzmlDataSource:** `url` and `czml` props have been integrated to `data` prop.
- Some props have been renamed.
  - **Entity:** `onSelectedEntityChanged` => `onSelectedEntityChange`, `onTrackedEntityChanged` => `onTrackedEntityChange`
  - **Scene:** `morph` => `morphDuration`
  - **Camera, Kml/GeoJson/Czml/CustomDataSource:** `onChanged` => `onChange`
  - **Viewer:** `selectedEntityChanged` => `selectedEntityChange`, `onTrackedEntityChanged` => `onTrackedEntityChange`
- Some Cesium props have been become read only.
  - **CesiumWidget:** `clock`, `imageryProvider`, `terrainProvider`, `skyBox`, `skyAtmosphere`, `sceneMode`, `scene3DOnly`, `orderIndependentTranslucency`, `mapMode2D`, `mapProjection`, `globe`, `showRenderLoopErrors`, `contextOptions`, `creditContainer`, `creditViewport`, `terrainExaggeration`, `shadows`, `terrainShadows`, `requestRenderMode`, `maximumRenderTimeChange`
  - **Primitive:** `allowPicking`
  - **Entity:** `id`
- Some props have been decrepated.
  - All: `onMount`, `onUpdate`, `onUnmount`
  - **GeoJsonDataSource:** `onProgress`, `clock`
  - **CzmlDataSource:** `onProgress`, `query`, `clock`
  - **KmlDataSource:** `onProgress`, `proxy`, `query`, `clock`
  - **Camera:** `view`, `viewBoundingSphere`
  - **Scene:** `canvas`, `mapProjection`

### Features

- New components
  - Billboard
  - BillboardCollection
  - BoxGraphics
  - Cesium3DTileset
  - Clock
  - CorriderGraphics
  - CylinderGraphics
  - EllipseGraphics
  - EllipsoidGraphics
  - EntityDescription
  - Fog
  - Globe
  - ImageryLayerCollection
  - Label
  - LabelCollection
  - LabelGraphics
  - Model
  - ModelGraphics
  - Moon
  - ParticleSystem
  - PathGraphics
  - PlaneGraphics
  - PointGraphics
  - PolygonGraphics
  - Polyline
  - PolylineCollection
  - PolylineGraphics
  - PolylineVolumeGraphics
  - PostProcessStage
  - PostProcessStageComposite
  - RectangleGraphics
  - Sun
  - TimeDynamicPointColud
- New properties
  - **Viewer:** `allowDataSourcesToSuspendAnimation`, `clockTrackedDataSource`, `resolutionScale`
  - **CesiumWidget:** `resolutionScale`
  - **Entity:** `selected`, `tracked`
  - **Primitive:** `allowPicking`, `vertexCacheOptimize`
  - **KmlDataSource:** `ellipsoid`
  - **ImargeryLayer:** `cutoutRectangle`
  - **Scene:** `onPreUpdate`, `requestRenderMode`, `maximumRenderTimeChange`, `logarithmicDepthBuffer`, `logarithmicDepthFarToNearRatio`
  - **Entity, Billboard, Label, PointPrimtive, Polyline, Primitive:** `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseUp`, `onMiddleClick`, `onMiddleDown`, `onMiddleUp`, `onMouseMove`, `onPinchEnd`, `onPinchMove`, `onPinchStart`, `onRightClick`, `onRightDown`, `onRightUp`, `onWheel`, `onMouseEnter`, `onMouseLeave`

### Chore

- Add unit tests with Jest instead of Karma
- Upgrade dependencies

## v1.0.0-rc.3 - 2018/12/18

## v1.0.0-rc.2 - 2018/12/04

## v1.0.0-rc.1 - 2018/12/04

## v1.0.0-beta.2 - 2018/12/03

## v1.0.0-beta.1 - 2018/11/28

## v0.2.2 - 2018/10/23

### New features

- **Viewer:** `requestRenderMode`, `maximumRenderTimeChange` prop

### Chore

- Upgrade dependencies
- Update documantation and example
- Update linter config

## v0.2.1 - 2018/02/26

### Chore

- Fix rollup config

## v0.2.0 - 2018/02/10

### Breaking changes

- **Camera:** remove `continueCameraFlight` prop and add `cancelCameraFlight` prop instead.

### New features

- **Entity:** JSX Children of Entity components are rendered as description
- **Camera:** `view` and `viewBoundingSphere` prop

### Fixes

- Fix import: `react-dom/server.browser`
- Fix error when viewer initialization is failed.

### Chore

- Introduce Prettier
- Refactor

## v0.1.0 - 2018/01/13

- First release