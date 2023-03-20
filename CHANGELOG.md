# Changelog

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
