# Cesium 1.140.0 Maintenance Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade resium to support CesiumJS 1.140.0 by adding six new Buffer* primitive components, a new `WebMapTileServiceImageryProvider` component, a `PathGraphics.relativeTo` prop, and bumping all dependencies including GitHub Actions.

**Architecture:** All new components follow the existing `createCesiumComponent` pattern. Buffer* item components (`BufferPoint`, `BufferPolyline`, `BufferPolygon`) use `otherProps` + a custom `update` function to dispatch Cesium setter methods (`setPosition`, `setPositions`, `setMaterial`, etc.) instead of direct property assignment. Buffer* collection components add their Cesium instances to `ResiumContext` via `provide()` so child item components can call `collection.add()`. The `ResiumContext` type in `src/core/context.ts` must be extended before any Buffer* components are implemented.

**Tech Stack:** TypeScript, React, CesiumJS 1.140.0, Vitest, ts-expect

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Create | `src/BufferPointCollection/BufferPointCollection.ts` | Collection component |
| Create | `src/BufferPointCollection/index.ts` | Re-export |
| Create | `src/BufferPointCollection/BufferPointCollection.test.ts` | Type-check test |
| Create | `src/BufferPoint/BufferPoint.ts` | Item component |
| Create | `src/BufferPoint/index.ts` | Re-export |
| Create | `src/BufferPoint/BufferPoint.test.ts` | Compiled test |
| Create | `src/BufferPolylineCollection/BufferPolylineCollection.ts` | Collection component |
| Create | `src/BufferPolylineCollection/index.ts` | Re-export |
| Create | `src/BufferPolylineCollection/BufferPolylineCollection.test.ts` | Type-check test |
| Create | `src/BufferPolyline/BufferPolyline.ts` | Item component |
| Create | `src/BufferPolyline/index.ts` | Re-export |
| Create | `src/BufferPolyline/BufferPolyline.test.ts` | Compiled test |
| Create | `src/BufferPolygonCollection/BufferPolygonCollection.ts` | Collection component |
| Create | `src/BufferPolygonCollection/index.ts` | Re-export |
| Create | `src/BufferPolygonCollection/BufferPolygonCollection.test.ts` | Type-check test |
| Create | `src/BufferPolygon/BufferPolygon.ts` | Item component |
| Create | `src/BufferPolygon/index.ts` | Re-export |
| Create | `src/BufferPolygon/BufferPolygon.test.ts` | Compiled test |
| Create | `src/WebMapTileServiceImageryProvider/WebMapTileServiceImageryProvider.ts` | New imagery provider component |
| Create | `src/WebMapTileServiceImageryProvider/index.ts` | Re-export |
| Create | `src/WebMapTileServiceImageryProvider/WebMapTileServiceImageryProvider.test.ts` | Type-check test |
| Modify | `src/core/context.ts` | Add `bufferPointCollection`, `bufferPolylineCollection`, `bufferPolygonCollection` keys |
| Modify | `src/PathGraphics/PathGraphics.ts` | Add `relativeTo` to `cesiumProps` |
| Modify | `src/index.ts` | Export all 7 new components + prop types |
| Modify | `package.json` | Bump `cesium` to `1.140.0`, bump all other outdated deps |
| Modify | `.github/workflows/ci.yml` | Bump pinned GitHub Actions versions |
| Modify | `.github/workflows/release.yml` | Bump pinned GitHub Actions versions + SHA |
| Delete | `docs/superpowers/specs/2026-04-15-cesium-1140-maintenance-design.md` | Clean up spec after completion |

---

## Task 1: Create the working branch

- [ ] **Step 1.1: Create and switch to the maintenance branch**

```bash
git checkout -b chore/cesium-1140-maintenance
```

Expected: `Switched to a new branch 'chore/cesium-1140-maintenance'`

---

## Task 2: Bump Cesium and other dependencies

- [ ] **Step 2.1: Update cesium in package.json**

Open `package.json`. Find the `devDependencies` section and change:
```json
"cesium": "1.139.1"
```
to:
```json
"cesium": "1.140.0"
```

- [ ] **Step 2.2: Check for other outdated packages**

```bash
yarn outdated 2>/dev/null || true
```

Review the output. For any package with a wanted version higher than the installed version (excluding `cesium` already bumped), update their versions in `package.json` to the "Wanted" column version. Common candidates: `vite`, `vitest`, `typescript`, `eslint`, `storybook/*` packages.

- [ ] **Step 2.3: Install updated dependencies**

```bash
yarn install
```

Expected: Dependencies installed without error. `yarn.lock` will be updated.

- [ ] **Step 2.4: Verify TypeScript still compiles after Cesium upgrade**

```bash
yarn type
```

Expected: No errors. If there are type errors from the Cesium upgrade, fix them before continuing.

- [ ] **Step 2.5: Commit dependency bump**

```bash
git add package.json yarn.lock
git commit -m "chore: Update packages april 2026"
```

---

## Task 3: Extend ResiumContext for Buffer* collections

The `ResiumContext` type in `src/core/context.ts` must be extended before any Buffer* collection component can provide context to its children.

- [ ] **Step 3.1: Add imports and context keys to context.ts**

Open `src/core/context.ts`. The current imports from `"cesium"` end with `CloudCollection`. Add three new imports:

```typescript
import {
  // ... existing imports ...
  CloudCollection,
  BufferPointCollection,
  BufferPolylineCollection,
  BufferPolygonCollection,
} from "cesium";
```

Then add three new optional keys to the `ResiumContext` type, after the `cloudCollection` line:

```typescript
export type ResiumContext = {
  // ... existing keys ...
  cloudCollection?: CloudCollection;
  bufferPointCollection?: BufferPointCollection;
  bufferPolylineCollection?: BufferPolylineCollection;
  bufferPolygonCollection?: BufferPolygonCollection;
  // ... rest of type ...
};
```

- [ ] **Step 3.2: Verify compilation**

```bash
yarn type
```

Expected: No errors.

- [ ] **Step 3.3: Commit**

```bash
git add src/core/context.ts
git commit -m "feat: add Buffer* collection context keys to ResiumContext"
```

---

## Task 4: BufferPointCollection component

- [ ] **Step 4.1: Write the test first**

Create `src/BufferPointCollection/BufferPointCollection.test.ts`:

```typescript
import { BufferPointCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  BufferPointCollectionOtherProps,
  BufferPointCollectionProps,
} from "./BufferPointCollection";

type UnusedProps = UnusedCesiumProps<
  BufferPointCollection,
  Omit<BufferPointCollectionProps, keyof BufferPointCollectionOtherProps | "primitiveCountMax">,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
```

- [ ] **Step 4.2: Run test to see it fail (missing module)**

```bash
yarn test src/BufferPointCollection/BufferPointCollection.test.ts --run
```

Expected: FAIL — `Cannot find module './BufferPointCollection'`

- [ ] **Step 4.3: Create the component**

Create `src/BufferPointCollection/BufferPointCollection.ts`:

```typescript
import {
  BufferPointCollection as CesiumBufferPointCollection,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPointCollection` is a high-performance collection of buffer point primitives (experimental).
It can have `BufferPoint` components as children.

This is a low-level primitive API for rendering large numbers of points efficiently.
Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A BufferPointCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type BufferPointCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPointCollection,
  typeof cesiumProps
>;

export type BufferPointCollectionConstructorProps = {
  /** The maximum number of points this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
};

export type BufferPointCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPointCollectionProps = BufferPointCollectionCesiumProps &
  BufferPointCollectionConstructorProps &
  BufferPointCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = ["primitiveCountMax"] as const;

const BufferPointCollection = createCesiumComponent<
  CesiumBufferPointCollection,
  BufferPointCollectionProps
>({
  name: "BufferPointCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPointCollection({
      primitiveCountMax: props.primitiveCountMax,
    });
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element) {
    return {
      bufferPointCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default BufferPointCollection;
```

- [ ] **Step 4.4: Create the index file**

Create `src/BufferPointCollection/index.ts`:

```typescript
export { default, type BufferPointCollectionProps } from "./BufferPointCollection";
```

- [ ] **Step 4.5: Run the test to verify it passes**

```bash
yarn test src/BufferPointCollection/BufferPointCollection.test.ts --run
```

Expected: PASS

- [ ] **Step 4.6: Commit**

```bash
git add src/BufferPointCollection/
git commit -m "feat: add BufferPointCollection component (Cesium 1.140.0)"
```

---

## Task 5: BufferPoint component

- [ ] **Step 5.1: Write the test first**

Create `src/BufferPoint/BufferPoint.test.ts`:

```typescript
import { it } from "vitest";

// BufferPoint uses setter methods (setPosition, setMaterial) rather than direct
// property assignment, so UnusedCesiumProps type-checking does not apply here.
// TypeScript compilation of the component itself is the coverage.

it("should be compiled", () => {});
```

- [ ] **Step 5.2: Run test to see it fail (missing module)**

```bash
yarn test src/BufferPoint/BufferPoint.test.ts --run
```

Expected: PASS (the test itself compiles fine; it just needs the file to exist)

- [ ] **Step 5.3: Create the component**

Create `src/BufferPoint/BufferPoint.ts`:

```typescript
import {
  BufferPoint as CesiumBufferPoint,
  Cartesian3,
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPoint` is a single point primitive inside a `BufferPointCollection`.
Use `setPosition` and `setMaterial` semantics are handled via React props.

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPointCollection](/components/BufferPointCollection) component.
*/

export type BufferPointProps = {
  /** The position of the point in world coordinates. */
  position?: Cartesian3;
  /** The material (color, size, outline) for the point. */
  material?: Parameters<CesiumBufferPoint["setMaterial"]>[0];
  /** Whether the point is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
};

const cesiumProps = ["show", "featureId"] as const;

const BufferPoint = createCesiumComponent<CesiumBufferPoint, BufferPointProps>({
  name: "BufferPoint",
  create(context) {
    if (!context.bufferPointCollection) return;
    return context.bufferPointCollection.add({});
  },
  destroy(element, context) {
    if (
      context.bufferPointCollection &&
      !context.bufferPointCollection.isDestroyed()
    ) {
      context.bufferPointCollection.remove(element);
    }
  },
  update(element, props, prevProps) {
    if (props.position !== prevProps.position && props.position !== undefined) {
      element.setPosition(props.position);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["position", "material"],
});

export default BufferPoint;
```

- [ ] **Step 5.4: Create the index file**

Create `src/BufferPoint/index.ts`:

```typescript
export { default, type BufferPointProps } from "./BufferPoint";
```

- [ ] **Step 5.5: Run the test**

```bash
yarn test src/BufferPoint/BufferPoint.test.ts --run
```

Expected: PASS

- [ ] **Step 5.6: Run TypeScript check**

```bash
yarn type
```

Expected: No errors.

- [ ] **Step 5.7: Commit**

```bash
git add src/BufferPoint/
git commit -m "feat: add BufferPoint component (Cesium 1.140.0)"
```

---

## Task 6: BufferPolylineCollection component

- [ ] **Step 6.1: Write the test first**

Create `src/BufferPolylineCollection/BufferPolylineCollection.test.ts`:

```typescript
import { BufferPolylineCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  BufferPolylineCollectionOtherProps,
  BufferPolylineCollectionProps,
} from "./BufferPolylineCollection";

type UnusedProps = UnusedCesiumProps<
  BufferPolylineCollection,
  Omit<
    BufferPolylineCollectionProps,
    keyof BufferPolylineCollectionOtherProps | "primitiveCountMax" | "vertexCountMax"
  >,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
```

- [ ] **Step 6.2: Run test to see it fail**

```bash
yarn test src/BufferPolylineCollection/BufferPolylineCollection.test.ts --run
```

Expected: FAIL — `Cannot find module './BufferPolylineCollection'`

- [ ] **Step 6.3: Create the component**

Create `src/BufferPolylineCollection/BufferPolylineCollection.ts`:

```typescript
import {
  BufferPolylineCollection as CesiumBufferPolylineCollection,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPolylineCollection` is a high-performance collection of buffer polyline primitives (experimental).
It can have `BufferPolyline` components as children.

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
*/

export type BufferPolylineCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPolylineCollection,
  typeof cesiumProps
>;

export type BufferPolylineCollectionConstructorProps = {
  /** The maximum number of polylines this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
  /** The maximum total number of vertices across all polylines. Fixed at creation time. */
  vertexCountMax?: number;
};

export type BufferPolylineCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolylineCollectionProps = BufferPolylineCollectionCesiumProps &
  BufferPolylineCollectionConstructorProps &
  BufferPolylineCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = ["primitiveCountMax", "vertexCountMax"] as const;

const BufferPolylineCollection = createCesiumComponent<
  CesiumBufferPolylineCollection,
  BufferPolylineCollectionProps
>({
  name: "BufferPolylineCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPolylineCollection({
      primitiveCountMax: props.primitiveCountMax,
      vertexCountMax: props.vertexCountMax,
    });
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element) {
    return {
      bufferPolylineCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default BufferPolylineCollection;
```

- [ ] **Step 6.4: Create the index file**

Create `src/BufferPolylineCollection/index.ts`:

```typescript
export { default, type BufferPolylineCollectionProps } from "./BufferPolylineCollection";
```

- [ ] **Step 6.5: Run the test**

```bash
yarn test src/BufferPolylineCollection/BufferPolylineCollection.test.ts --run
```

Expected: PASS

- [ ] **Step 6.6: Commit**

```bash
git add src/BufferPolylineCollection/
git commit -m "feat: add BufferPolylineCollection component (Cesium 1.140.0)"
```

---

## Task 7: BufferPolyline component

- [ ] **Step 7.1: Write the test first**

Create `src/BufferPolyline/BufferPolyline.test.ts`:

```typescript
import { it } from "vitest";

// BufferPolyline uses setter methods (setPositions, setMaterial) rather than direct
// property assignment, so UnusedCesiumProps type-checking does not apply here.

it("should be compiled", () => {});
```

- [ ] **Step 7.2: Create the component**

Create `src/BufferPolyline/BufferPolyline.ts`:

```typescript
import {
  BufferPolyline as CesiumBufferPolyline,
  Cartesian3,
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPolyline` is a single polyline primitive inside a `BufferPolylineCollection`.

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPolylineCollection](/components/BufferPolylineCollection) component.
*/

export type BufferPolylineProps = {
  /** The positions of the polyline vertices in world coordinates. */
  positions?: Cartesian3[];
  /** The material (color, width, outline) for the polyline. */
  material?: Parameters<CesiumBufferPolyline["setMaterial"]>[0];
  /** Whether the polyline is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
};

const cesiumProps = ["show", "featureId"] as const;

const BufferPolyline = createCesiumComponent<CesiumBufferPolyline, BufferPolylineProps>({
  name: "BufferPolyline",
  create(context) {
    if (!context.bufferPolylineCollection) return;
    return context.bufferPolylineCollection.add({});
  },
  destroy(element, context) {
    if (
      context.bufferPolylineCollection &&
      !context.bufferPolylineCollection.isDestroyed()
    ) {
      context.bufferPolylineCollection.remove(element);
    }
  },
  update(element, props, prevProps) {
    if (props.positions !== prevProps.positions && props.positions !== undefined) {
      element.setPositions(props.positions);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["positions", "material"],
});

export default BufferPolyline;
```

- [ ] **Step 7.3: Create the index file**

Create `src/BufferPolyline/index.ts`:

```typescript
export { default, type BufferPolylineProps } from "./BufferPolyline";
```

- [ ] **Step 7.4: Run test and type check**

```bash
yarn test src/BufferPolyline/BufferPolyline.test.ts --run && yarn type
```

Expected: PASS, no type errors.

- [ ] **Step 7.5: Commit**

```bash
git add src/BufferPolyline/
git commit -m "feat: add BufferPolyline component (Cesium 1.140.0)"
```

---

## Task 8: BufferPolygonCollection component

- [ ] **Step 8.1: Write the test first**

Create `src/BufferPolygonCollection/BufferPolygonCollection.test.ts`:

```typescript
import { BufferPolygonCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  BufferPolygonCollectionOtherProps,
  BufferPolygonCollectionProps,
} from "./BufferPolygonCollection";

type ConstructorOnlyProps =
  | "primitiveCountMax"
  | "vertexCountMax"
  | "holeCountMax"
  | "triangleCountMax"
  | "positionDatatype"
  | "allowPicking";

type UnusedProps = UnusedCesiumProps<
  BufferPolygonCollection,
  Omit<
    BufferPolygonCollectionProps,
    keyof BufferPolygonCollectionOtherProps | ConstructorOnlyProps
  >,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
```

- [ ] **Step 8.2: Run test to see it fail**

```bash
yarn test src/BufferPolygonCollection/BufferPolygonCollection.test.ts --run
```

Expected: FAIL — `Cannot find module './BufferPolygonCollection'`

- [ ] **Step 8.3: Create the component**

Create `src/BufferPolygonCollection/BufferPolygonCollection.ts`:

```typescript
import {
  BufferPolygonCollection as CesiumBufferPolygonCollection,
  ComponentDatatype,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPolygonCollection` is a high-performance collection of buffer polygon primitives (experimental).
It can have `BufferPolygon` components as children.

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
*/

export type BufferPolygonCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPolygonCollection,
  typeof cesiumProps
>;

export type BufferPolygonCollectionConstructorProps = {
  /** The maximum number of polygons this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
  /** The maximum total number of vertices. Fixed at creation time. */
  vertexCountMax?: number;
  /** The maximum total number of hole vertices. Fixed at creation time. */
  holeCountMax?: number;
  /** The maximum total number of triangle indices. Fixed at creation time. */
  triangleCountMax?: number;
  /** The component datatype for position coordinates. Defaults to DOUBLE. */
  positionDatatype?: ComponentDatatype;
  /** Whether the collection supports picking. Defaults to true. */
  allowPicking?: boolean;
};

export type BufferPolygonCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolygonCollectionProps = BufferPolygonCollectionCesiumProps &
  BufferPolygonCollectionConstructorProps &
  BufferPolygonCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = [
  "primitiveCountMax",
  "vertexCountMax",
  "holeCountMax",
  "triangleCountMax",
  "positionDatatype",
  "allowPicking",
] as const;

const BufferPolygonCollection = createCesiumComponent<
  CesiumBufferPolygonCollection,
  BufferPolygonCollectionProps
>({
  name: "BufferPolygonCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPolygonCollection({
      primitiveCountMax: props.primitiveCountMax,
      vertexCountMax: props.vertexCountMax,
      holeCountMax: props.holeCountMax,
      triangleCountMax: props.triangleCountMax,
      positionDatatype: props.positionDatatype,
      allowPicking: props.allowPicking,
    });
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element) {
    return {
      bufferPolygonCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default BufferPolygonCollection;
```

- [ ] **Step 8.4: Create the index file**

Create `src/BufferPolygonCollection/index.ts`:

```typescript
export { default, type BufferPolygonCollectionProps } from "./BufferPolygonCollection";
```

- [ ] **Step 8.5: Run the test**

```bash
yarn test src/BufferPolygonCollection/BufferPolygonCollection.test.ts --run
```

Expected: PASS

- [ ] **Step 8.6: Commit**

```bash
git add src/BufferPolygonCollection/
git commit -m "feat: add BufferPolygonCollection component (Cesium 1.140.0)"
```

---

## Task 9: BufferPolygon component

- [ ] **Step 9.1: Write the test first**

Create `src/BufferPolygon/BufferPolygon.test.ts`:

```typescript
import { it } from "vitest";

// BufferPolygon uses setter methods (setPositions, setHoles, setTriangles, setMaterial)
// rather than direct property assignment, so UnusedCesiumProps does not apply here.

it("should be compiled", () => {});
```

- [ ] **Step 9.2: Create the component**

Create `src/BufferPolygon/BufferPolygon.ts`:

```typescript
import {
  BufferPolygon as CesiumBufferPolygon,
  Cartesian3,
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPolygon` is a single polygon primitive inside a `BufferPolygonCollection`.

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPolygonCollection](/components/BufferPolygonCollection) component.
*/

export type BufferPolygonProps = {
  /** The outer ring positions of the polygon in world coordinates. */
  positions?: Cartesian3[];
  /** Arrays of positions for each hole in the polygon. */
  holes?: Cartesian3[][];
  /** Triangle indices for the polygon mesh. */
  triangles?: number[];
  /** The material (color, outline) for the polygon. */
  material?: Parameters<CesiumBufferPolygon["setMaterial"]>[0];
  /** Whether the polygon is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
};

const cesiumProps = ["show", "featureId"] as const;

const BufferPolygon = createCesiumComponent<CesiumBufferPolygon, BufferPolygonProps>({
  name: "BufferPolygon",
  create(context) {
    if (!context.bufferPolygonCollection) return;
    return context.bufferPolygonCollection.add({});
  },
  destroy(element, context) {
    if (
      context.bufferPolygonCollection &&
      !context.bufferPolygonCollection.isDestroyed()
    ) {
      context.bufferPolygonCollection.remove(element);
    }
  },
  update(element, props, prevProps) {
    if (props.positions !== prevProps.positions && props.positions !== undefined) {
      element.setPositions(props.positions);
    }
    if (props.holes !== prevProps.holes && props.holes !== undefined) {
      element.setHoles(props.holes);
    }
    if (props.triangles !== prevProps.triangles && props.triangles !== undefined) {
      element.setTriangles(props.triangles);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["positions", "holes", "triangles", "material"],
});

export default BufferPolygon;
```

- [ ] **Step 9.3: Create the index file**

Create `src/BufferPolygon/index.ts`:

```typescript
export { default, type BufferPolygonProps } from "./BufferPolygon";
```

- [ ] **Step 9.4: Run test and type check**

```bash
yarn test src/BufferPolygon/BufferPolygon.test.ts --run && yarn type
```

Expected: PASS, no type errors.

- [ ] **Step 9.5: Commit**

```bash
git add src/BufferPolygon/
git commit -m "feat: add BufferPolygon component (Cesium 1.140.0)"
```

---

## Task 10: WebMapTileServiceImageryProvider component

`WebMapTileServiceImageryProvider` uses a `fromUrl` static factory method in Cesium 1.104+. Check the Cesium type definitions to confirm the exact constructor options type name before writing the component.

- [ ] **Step 10.1: Verify the Cesium API**

```bash
node -e "const Cesium = require('./node_modules/cesium/index.cjs'); console.log(typeof Cesium.WebMapTileServiceImageryProvider, typeof Cesium.WebMapTileServiceImageryProvider.fromUrl)"
```

Expected: `function function` — confirms both the class and static factory exist.

- [ ] **Step 10.2: Write the test first**

Create `src/WebMapTileServiceImageryProvider/WebMapTileServiceImageryProvider.test.ts`:

```typescript
import { it } from "vitest";

// WebMapTileServiceImageryProvider uses a static factory method (fromUrl),
// so UnusedCesiumProps type-checking does not apply.
// Props are manually defined from the static method signature.

it("should be compiled", () => {});
```

- [ ] **Step 10.3: Create the component**

Create `src/WebMapTileServiceImageryProvider/WebMapTileServiceImageryProvider.ts`:

```typescript
import {
  WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider,
  Credit,
  Ellipsoid,
  Rectangle,
  TilingScheme,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent } from "../core";

/*
@summary
`WebMapTileServiceImageryProvider` provides imagery from a Web Map Tile Service (WMTS) server.

This component loads WMTS imagery asynchronously and is used with the ImageryLayer component.
*/

/*
@scope
Inside [ImageryLayer](/components/ImageryLayer) component.
*/

export type WebMapTileServiceImageryProviderProps = {
  /** The base URL for the WMTS service. */
  url: string;
  /** The layer name to use. */
  layer: string;
  /** The style name to use. */
  style: string;
  /** The MIME type for image format. Defaults to 'image/jpeg'. */
  format?: string;
  /** The identifier of the TileMatrixSet to use for WMTS requests. */
  tileMatrixSetID: string;
  /** The tiling scheme to use. */
  tilingScheme?: TilingScheme;
  /** The rectangle, in radians, covered by the image. */
  rectangle?: Rectangle;
  /** The minimum level-of-detail supported. */
  minimumLevel?: number;
  /** The maximum level-of-detail supported. */
  maximumLevel?: number;
  /** The ellipsoid. */
  ellipsoid?: Ellipsoid;
  /** A credit for the data source, displayed on the canvas. */
  credit?: Credit | string;
  /** Additional parameters to pass to the WMTS server in the GetTile request. */
  parameters?: Record<string, string | number | boolean>;
  /** Whether to allow the server to pick features. Defaults to true. */
  enablePickFeatures?: boolean;
  /** A factory function used to create objects representing a feature layer. */
  getFeatureInfoFormats?: unknown[];
  /** The URL to use for GetFeatureInfo requests. If not specified, the service URL is used. */
  getFeatureInfoUrl?: string;
  /** Additional parameters to include in GetFeatureInfo requests. */
  getFeatureInfoParameters?: Record<string, string | number | boolean>;
  children?: ReactNode;
  /** Called when the imagery provider is successfully created. */
  onReady?: (imageryProvider: CesiumWebMapTileServiceImageryProvider) => void;
};

const WebMapTileServiceImageryProvider =
  createCesiumComponent<CesiumWebMapTileServiceImageryProvider, WebMapTileServiceImageryProviderProps>(
    {
      name: "WebMapTileServiceImageryProvider",
      async create(_context, props) {
        const { onReady, children, ...options } = props;
        const imageryProvider =
          await CesiumWebMapTileServiceImageryProvider.fromUrl(props.url, options as any);
        onReady?.(imageryProvider);
        return imageryProvider;
      },
    },
  );

export default WebMapTileServiceImageryProvider;
```

- [ ] **Step 10.4: Create the index file**

Create `src/WebMapTileServiceImageryProvider/index.ts`:

```typescript
export {
  default,
  type WebMapTileServiceImageryProviderProps,
} from "./WebMapTileServiceImageryProvider";
```

- [ ] **Step 10.5: Run test and type check**

```bash
yarn test src/WebMapTileServiceImageryProvider/WebMapTileServiceImageryProvider.test.ts --run && yarn type
```

Expected: PASS, no type errors. If `fromUrl` does not exist, fall back to the synchronous constructor: `new CesiumWebMapTileServiceImageryProvider(options as any)`.

- [ ] **Step 10.6: Commit**

```bash
git add src/WebMapTileServiceImageryProvider/
git commit -m "feat: add WebMapTileServiceImageryProvider component (Cesium 1.140.0)"
```

---

## Task 11: Add PathGraphics.relativeTo prop

- [ ] **Step 11.1: Add relativeTo to cesiumProps array**

Open `src/PathGraphics/PathGraphics.ts`. Find the `cesiumProps` array:

```typescript
const cesiumProps = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition",
] as const;
```

Change it to:

```typescript
const cesiumProps = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition",
  "relativeTo",
] as const;
```

- [ ] **Step 11.2: Run type check to verify**

```bash
yarn type
```

Expected: No errors. If `relativeTo` doesn't exist on `CesiumPathGraphics` or its `ConstructorOptions`, double check the Cesium 1.140.0 type definitions: `grep -r "relativeTo" node_modules/cesium/Source/DataSources/PathGraphics.js 2>/dev/null || grep -r "relativeTo" node_modules/cesium/index.d.ts | head -5`

- [ ] **Step 11.3: Run tests**

```bash
yarn test src/PathGraphics/ --run
```

Expected: PASS

- [ ] **Step 11.4: Commit**

```bash
git add src/PathGraphics/PathGraphics.ts
git commit -m "feat: add PathGraphics.relativeTo prop (Cesium 1.140.0)"
```

---

## Task 12: Export all new components from src/index.ts

- [ ] **Step 12.1: Add exports to src/index.ts**

Open `src/index.ts`. The exports are alphabetically ordered. Add the following exports in the correct alphabetical positions:

After the `Billboard` exports, add:
```typescript
export { default as BufferPoint, type BufferPointProps } from "./BufferPoint";
export {
  default as BufferPointCollection,
  type BufferPointCollectionProps,
} from "./BufferPointCollection";
export { default as BufferPolygon, type BufferPolygonProps } from "./BufferPolygon";
export {
  default as BufferPolygonCollection,
  type BufferPolygonCollectionProps,
} from "./BufferPolygonCollection";
export { default as BufferPolyline, type BufferPolylineProps } from "./BufferPolyline";
export {
  default as BufferPolylineCollection,
  type BufferPolylineCollectionProps,
} from "./BufferPolylineCollection";
```

After the `Viewer` export (or wherever alphabetical order places it), add:
```typescript
export {
  default as WebMapTileServiceImageryProvider,
  type WebMapTileServiceImageryProviderProps,
} from "./WebMapTileServiceImageryProvider";
```

- [ ] **Step 12.2: Run full type check**

```bash
yarn type
```

Expected: No errors.

- [ ] **Step 12.3: Run full test suite**

```bash
yarn test --run
```

Expected: All tests pass.

- [ ] **Step 12.4: Run build to verify output**

```bash
yarn build
```

Expected: Build succeeds. The postbuild step (`node --input-type=module -e "await import('./dist/resium.js')"`) should also pass.

- [ ] **Step 12.5: Commit**

```bash
git add src/index.ts
git commit -m "feat: export Buffer* and WebMapTileServiceImageryProvider from public API"
```

---

## Task 13: Update GitHub Actions versions

Look up the latest stable release for each action on GitHub before editing. The pattern for each action is `owner/action@vX.Y.Z`.

- [ ] **Step 13.1: Find latest versions**

For each action below, visit its GitHub releases page and note the latest stable tag:
- `actions/checkout` → https://github.com/actions/checkout/releases
- `actions/setup-node` → https://github.com/actions/setup-node/releases
- `actions/cache` → https://github.com/actions/cache/releases
- `actions/upload-artifact` → https://github.com/actions/upload-artifact/releases
- `codecov/codecov-action` → https://github.com/codecov/codecov-action/releases
- `peaceiris/actions-gh-pages` → https://github.com/peaceiris/actions-gh-pages/releases
- `actions/create-github-app-token` → https://github.com/actions/create-github-app-token/releases

- [ ] **Step 13.2: Update .github/workflows/ci.yml**

Open `.github/workflows/ci.yml`. Replace each pinned version with the latest stable version found in Step 13.1. Current pinned versions for reference:

| Action | Current |
|---|---|
| `actions/setup-node` | `v6.3.0` |
| `actions/checkout` | `v6.0.2` |
| `actions/cache` | `v5.0.4` |
| `codecov/codecov-action` | `v5.5.4` |
| `actions/upload-artifact` | `v7.0.0` |
| `peaceiris/actions-gh-pages` | `v4.0.0` |

- [ ] **Step 13.3: Update .github/workflows/release.yml**

Open `.github/workflows/release.yml`. Update the same actions. Additionally, the `actions/checkout` in this file is pinned by SHA:

```yaml
uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2
```

To get the new SHA for the updated version tag, run:
```bash
git ls-remote https://github.com/actions/checkout.git "refs/tags/vX.Y.Z^{}" 2>/dev/null | awk '{print $1}'
```
(Replace `vX.Y.Z` with the new version tag.) Update both the SHA and the comment.

- [ ] **Step 13.4: Commit**

```bash
git add .github/workflows/ci.yml .github/workflows/release.yml
git commit -m "chore: update GitHub Actions to latest versions"
```

---

## Task 14: Final verification

- [ ] **Step 14.1: Run full type check**

```bash
yarn type
```

Expected: Zero errors.

- [ ] **Step 14.2: Run full test suite**

```bash
yarn test --run
```

Expected: All tests pass, zero failures.

- [ ] **Step 14.3: Run build**

```bash
yarn build
```

Expected: Build succeeds including the ESM import postbuild check.

---

## Task 15: Cleanup — delete the spec document

- [ ] **Step 15.1: Delete the spec file**

```bash
git rm docs/superpowers/specs/2026-04-15-cesium-1140-maintenance-design.md
```

- [ ] **Step 15.2: Commit**

```bash
git commit -m "chore: remove implemented spec document"
```

---

## Done

All tasks complete. The branch `chore/cesium-1140-maintenance` is ready for PR review.

**Summary of changes:**
- 6 new Buffer* primitive components (experimental Cesium 1.140.0 APIs)
- 1 new `WebMapTileServiceImageryProvider` component
- `PathGraphics.relativeTo` prop added
- Cesium bumped to 1.140.0, all other deps updated
- GitHub Actions bumped to latest stable versions
