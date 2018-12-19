# Changelog

## v1.0.0 - Unreleased

### Breaking Changes

- Resium has been fully reimplemented in TypeScript.
- New React component life cycle and context API from v16.3 is supported.
- React v16.2 or lower is no longer supported.
- PropType (`prop-type` module) is no longer used.
- **Entity:** children is no longer rendered as description. Use `EntityDescription` component insted.
- **Kml/GeoJson/CzmlDataSource:** `url` and `czml` props have been integrated to `data` prop.
- Some props have been renamed.
  - **Entity:** `onSelectedEntityChanged` => `onSelectedEntityChange`
  - **Entity:** `onTrackedEntityChanged` => `onTrackedEntityChange`
  - **Scene:** `morph` => `morphDuration`
  - **Camera**: `onChanged` => `onChange`
- Some Cesium props have been become read only.
  - **CesiumWidget**
- Some props have been decrepated.
  - **All components:** `onMount`, `onUpdate` and `onUnmount`
  - **GeoJsonDataSource:** `onProgress`
  - **CzmlDataSource:** `onProgress`
  - **KmlDataSource:** `onProgress` and `query`
  - **Camera**: `view` and `viewBoundingSphere`

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
  - ImageryLayer
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
  - Entity: `selected`, `tracked`

### Chore

- Reimplement unit tests with Jest instead of Karma
- Upgrade dependencies

## v1.0.0-rc.3 - 2018/12/18

## v1.0.0-rc.2 - 2018/12/04

## v1.0.0-rc.1 - 2018/12/04

## v1.0.0-beta.2 - 2018/12/03

## v1.0.0-beta.1 - 2018/11/28

## v0.2.2 - 2018/10/23

### New features

- New properties
  - **Viewer**: `requestRenderMode`, `maximumRenderTimeChange`

### Chore

- Upgrade dependencies
- Update documantation and example
- Update linter config

## v0.2.1 - 2018/02/26

### Chore
- Fix rollup config

## v0.2.0 - 2018/02/10

### Breaking changes

- **Camera**: remove `continueCameraFlight` prop and add `cancelCameraFlight` prop instead.

### New features

- **Entity**: JSX Children of Entity components are rendered as description
- New properties
  - **Camera**: `view` and `viewBoundingSphere`

### Fixes

- Fix import: `react-dom/server.browser`
- Fix error when viewer initialization is failed.

### Chore

- Introduce Prettier
- Refactor

## v0.1.0 - 2018/01/13

- First release
