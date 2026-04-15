# Resium Maintenance Release — Cesium 1.140.0 Support

**Date:** 2026-04-15
**Target version:** resium v1.21.0
**Cesium upgrade:** 1.139.1 → 1.140.0

## Branch

All work is done on a new branch created before any file changes:

```
git checkout -b chore/cesium-1140-maintenance
```

## Overview

Maintenance release to support CesiumJS 1.140.0. Covers six new React components wrapping the Buffer* primitive collection APIs, prop additions to two existing components, and dependency/CI action upgrades.

---

## 1. New Components — Buffer* Primitive Collections

### 1.1 Background

Cesium 1.140.0 introduces three new experimental high-performance vector primitive collection classes:

- `BufferPointCollection` / `BufferPoint`
- `BufferPolylineCollection` / `BufferPolyline`
- `BufferPolygonCollection` / `BufferPolygon`

These use a flyweight pattern: collections manage fixed-capacity ArrayBuffer storage, and item instances are views into that buffer. Items expose setter methods (`setPosition()`, `setPositions()`, `setMaterial()`, etc.) rather than direct property assignment.

### 1.2 Approach

Follow the existing resium declarative pattern (Option A). All six components use `createCesiumComponent`. Setter calls are handled internally inside the `update` function, keeping the public API consistent with the rest of resium.

### 1.3 Component Specifications

#### `BufferPointCollection`

**Directory:** `src/BufferPointCollection/`
**Files:** `BufferPointCollection.ts`, `index.ts`, `BufferPointCollection.stories.tsx`, `BufferPointCollection.test.ts`

**Scope:** Inside `<Viewer>` or `<CesiumWidget>`. Mounted via `context.primitiveCollection.add()`.

**Props:**

| Prop | Type | Kind | Notes |
|---|---|---|---|
| `primitiveCountMax` | `number` | constructor-only | Max number of points; fixed at creation |
| `show` | `boolean` | mutable | Visibility of the entire collection |
| `debugShowBoundingVolume` | `boolean` | mutable | Debug helper |

**Context provided to children:** `bufferPointCollection`

**Lifecycle:**
- `create`: `new CesiumBufferPointCollection({...})` → `context.primitiveCollection.add(element)`
- `destroy`: `context.primitiveCollection.remove(element)` → `element.destroy()`

---

#### `BufferPoint`

**Directory:** `src/BufferPoint/`
**Files:** `BufferPoint.ts`, `index.ts`, `BufferPoint.test.ts`

**Scope:** Only inside `<BufferPointCollection>`.

**Props:**

| Prop | Type | Kind | Cesium API |
|---|---|---|---|
| `position` | `Cartesian3` | mutable | `element.setPosition(value)` |
| `material` | `BufferPointMaterial` | mutable | `element.setMaterial(value)` |
| `show` | `boolean` | mutable | `element.show = value` |
| `featureId` | `number` | mutable | `element.featureId = value` |

**Lifecycle:**
- `create`: `context.bufferPointCollection.add({})`
- `destroy`: `context.bufferPointCollection.remove(element)`
- `update`: maps changed props to setter calls or direct assignment

---

#### `BufferPolylineCollection`

**Directory:** `src/BufferPolylineCollection/`
**Files:** `BufferPolylineCollection.ts`, `index.ts`, `BufferPolylineCollection.stories.tsx`, `BufferPolylineCollection.test.ts`

**Scope:** Inside `<Viewer>` or `<CesiumWidget>`.

**Props:**

| Prop | Type | Kind | Notes |
|---|---|---|---|
| `primitiveCountMax` | `number` | constructor-only | Max number of polylines |
| `vertexCountMax` | `number` | constructor-only | Max total vertices across all polylines |
| `show` | `boolean` | mutable | |
| `debugShowBoundingVolume` | `boolean` | mutable | |

**Context provided to children:** `bufferPolylineCollection`

**Lifecycle:** Same pattern as `BufferPointCollection`.

---

#### `BufferPolyline`

**Directory:** `src/BufferPolyline/`
**Files:** `BufferPolyline.ts`, `index.ts`, `BufferPolyline.test.ts`

**Scope:** Only inside `<BufferPolylineCollection>`.

**Props:**

| Prop | Type | Kind | Cesium API |
|---|---|---|---|
| `positions` | `Cartesian3[]` | mutable | `element.setPositions(value)` |
| `material` | `BufferPolylineMaterial` | mutable | `element.setMaterial(value)` |
| `show` | `boolean` | mutable | `element.show = value` |
| `featureId` | `number` | mutable | `element.featureId = value` |

**Lifecycle:** Same pattern as `BufferPoint`.

---

#### `BufferPolygonCollection`

**Directory:** `src/BufferPolygonCollection/`
**Files:** `BufferPolygonCollection.ts`, `index.ts`, `BufferPolygonCollection.stories.tsx`, `BufferPolygonCollection.test.ts`

**Scope:** Inside `<Viewer>` or `<CesiumWidget>`.

**Props:**

| Prop | Type | Kind | Notes |
|---|---|---|---|
| `primitiveCountMax` | `number` | constructor-only | Max number of polygons |
| `vertexCountMax` | `number` | constructor-only | Max total vertices |
| `holeCountMax` | `number` | constructor-only | Max total hole vertices |
| `triangleCountMax` | `number` | constructor-only | Max total triangle indices |
| `positionDatatype` | `ComponentDatatype` | constructor-only | Coordinate precision |
| `allowPicking` | `boolean` | constructor-only | Enable scene picking |
| `show` | `boolean` | mutable | |
| `debugShowBoundingVolume` | `boolean` | mutable | |

**Context provided to children:** `bufferPolygonCollection`

**Lifecycle:** Same pattern as `BufferPointCollection`.

---

#### `BufferPolygon`

**Directory:** `src/BufferPolygon/`
**Files:** `BufferPolygon.ts`, `index.ts`, `BufferPolygon.test.ts`

**Scope:** Only inside `<BufferPolygonCollection>`.

**Props:**

| Prop | Type | Kind | Cesium API |
|---|---|---|---|
| `positions` | `Cartesian3[]` | mutable | `element.setPositions(value)` |
| `holes` | `Cartesian3[][]` | mutable | `element.setHoles(value)` |
| `triangles` | `number[]` | mutable | `element.setTriangles(value)` |
| `material` | `BufferPolygonMaterial` | mutable | `element.setMaterial(value)` |
| `show` | `boolean` | mutable | `element.show = value` |
| `featureId` | `number` | mutable | `element.featureId = value` |

**Lifecycle:** Same pattern as `BufferPoint`.

---

### 1.4 Exports

All six components and their prop types are added to `src/index.ts`.

---

## 2. Existing Component Updates & New Imagery Provider

### 2.1 `PathGraphics`

**File:** `src/PathGraphics/PathGraphics.ts`

Add `relativeTo` to the `cesiumProps` array. This is a mutable property — no constructor changes required.

### 2.2 `WebMapTileServiceImageryProvider` (new component)

**Directory:** `src/WebMapTileServiceImageryProvider/`
**Files:** `WebMapTileServiceImageryProvider.ts`, `index.ts`, `WebMapTileServiceImageryProvider.stories.tsx`, `WebMapTileServiceImageryProvider.test.ts`

`WebMapTileServiceImageryProvider` does not currently exist in resium (only `Google2DImageryProvider` is wrapped). This release creates it, including the new Cesium 1.140.0 props at launch.

**Scope:** Passed as the `imageryProvider` prop on `<ImageryLayer>`, following the same pattern as `Google2DImageryProvider`.

**Props (Cesium 1.140.0 baseline):**

| Prop | Kind |
|---|---|
| `url` | constructor-only → `cesiumReadonlyProps` |
| `layer` | constructor-only → `cesiumReadonlyProps` |
| `style` | constructor-only → `cesiumReadonlyProps` |
| `format` | constructor-only → `cesiumReadonlyProps` |
| `tileMatrixSetID` | constructor-only → `cesiumReadonlyProps` |
| `getFeatureInfoFormats` | constructor-only → `cesiumReadonlyProps` |
| `getFeatureInfoUrl` | constructor-only → `cesiumReadonlyProps` |
| `getFeatureInfoParameters` | constructor-only → `cesiumReadonlyProps` |
| `enablePickFeatures` | mutable → `cesiumProps` |

Export added to `src/index.ts`.

---

## 3. Dependency & CI Updates

### 3.1 `package.json`

- Bump `cesium` dev dependency: `1.139.1` → `1.140.0`
- Audit all other dependencies and bump outdated packages to their latest stable versions
- Commit with message following existing pattern: `chore: Update packages april 2026`

### 3.2 GitHub Actions — `ci.yml` and `release.yml`

Check and bump the following pinned actions to their latest stable versions:

| Action | Current version |
|---|---|
| `actions/checkout` | `v6.0.2` |
| `actions/setup-node` | `v6.3.0` |
| `actions/cache` | `v5.0.4` |
| `actions/upload-artifact` | `v7.0.0` |
| `codecov/codecov-action` | `v5.5.4` |
| `peaceiris/actions-gh-pages` | `v4.0.0` |
| `actions/create-github-app-token` | `v3.0.0` |

Note: `release.yml` pins `actions/checkout` by commit SHA (`de0fac2e4500dabe0009e67214ff5f5447ce83dd`) — update the SHA alongside the version tag.

---

## 4. Testing Strategy

- **Collection components** (`BufferPointCollection`, `BufferPolylineCollection`, `BufferPolygonCollection`): unit tests covering mount/unmount lifecycle and prop mutation, matching depth of existing collection tests (e.g., `PointPrimitiveCollection.test.ts`)
- **Item components** (`BufferPoint`, `BufferPolyline`, `BufferPolygon`): unit tests covering create-via-collection-add, setter dispatch on prop change, and remove-on-unmount
- **Existing components**: no new tests required for the prop additions; TypeScript type-checking covers correctness

---

## 5. Changelog Entry (for CHANGELOG.md)

```
### Features
- Add BufferPointCollection and BufferPoint components (Cesium 1.140.0)
- Add BufferPolylineCollection and BufferPolyline components (Cesium 1.140.0)
- Add BufferPolygonCollection and BufferPolygon components (Cesium 1.140.0)
- Add PathGraphics.relativeTo prop (Cesium 1.140.0)
- Add WebMapTileServiceImageryProvider component with enablePickFeatures, getFeatureInfoFormats, getFeatureInfoUrl, getFeatureInfoParameters support (Cesium 1.140.0)

### Maintenance
- Upgrade Cesium to 1.140.0
- Update package dependencies (April 2026)
- Update GitHub Actions to latest versions
```
