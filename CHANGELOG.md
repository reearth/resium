# Changelog

## v1.2.0 - 2019/01/15

- Change
  - **Viewer**: Enable to disable default imagery provider ([#50](https://github.com/darwin-education/resium/issues/50))
- Decrepated
  - **Globe**: `ellipsoid`, `imageryLayers` (because they are unchangeable)
- Upgrade dependencies
- Update documentation

## v1.1.1 - 2019/01/10

- fix: GeoJsonDataSource describe error ([#48](https://github.com/darwin-education/resium/issues/48))

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
