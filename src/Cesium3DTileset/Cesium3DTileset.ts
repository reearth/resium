import type {
  Cesium3DTileFeature,
  Cesium3DTile,
  Resource} from "cesium";
import {
  Cesium3DTileset as CesiumCesium3DTileset
} from "cesium";

import type {
  EventProps,
  PickCesiumProps,
  ConstructorOptions,
  Merge} from "../core";
import {
  createCesiumComponent,
  isPromise,
} from "../core";

/*
@summary
`Cesium3DTileset` is a 3D tile set.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

/*
@example
A `Cesium3DTileset` is loaded asynchronously, so it has no bounding sphere yet during the first render. To fly/zoom the camera to the tileset once it is completely loaded, use the `onReady` callback, which receives the loaded `Cesium3DTileset`:

```tsx
import { useRef } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Viewer, Cesium3DTileset, CesiumComponentRef } from "resium";

const ExampleComponent = () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  return (
    <Viewer full ref={ref}>
      <Cesium3DTileset
        url="./tileset/tileset.json"
        onReady={tileset => {
          ref.current?.cesiumElement?.zoomTo(tileset);
        }}
      />
    </Viewer>
  );
};
```

:::note

The deprecated `Cesium3DTileset.readyPromise` has been removed from CesiumJS, so it no longer resolves. Use the `onReady` prop instead.

:::
*/

export type Cesium3DTilesetCesiumProps = PickCesiumProps<CesiumCesium3DTileset, typeof cesiumProps>;

export type Cesium3DTilesetCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumCesium3DTileset, ConstructorOptions<typeof CesiumCesium3DTileset>>,
  typeof cesiumReadonlyProps
>;

export type Cesium3DTilesetCesiumEvents = {
  onAllTilesLoad?: () => void;
  onInitialTilesLoad?: () => void;
  onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
  onTileFailed?: (error: any) => void;
  onTileLoad?: (tile: Cesium3DTile) => void;
  onTileUnload?: (tile: Cesium3DTile) => void;
  onTileVisible?: (tile: Cesium3DTile) => void;
};

export type Cesium3DTilesetOtherProps = EventProps<Cesium3DTileFeature> & {
  /** Calls when the tile set is completely loaded. */
  onReady?: (tileset: CesiumCesium3DTileset) => void;
  onError?: (err: unknown) => void;
  url: string | Resource | Promise<Resource>;
};

export type Cesium3DTilesetProps = Cesium3DTilesetCesiumProps &
  Cesium3DTilesetCesiumReadonlyProps &
  Cesium3DTilesetCesiumEvents &
  Cesium3DTilesetOtherProps;

const cesiumProps = [
  "show",
  "modelMatrix",
  "shadows",
  "maximumScreenSpaceError",
  "cullRequestsWhileMoving",
  "cullRequestsWhileMovingMultiplier",
  "preloadWhenHidden",
  "preloadFlightDestinations",
  "preferLeaves",
  "progressiveResolutionHeightFraction",
  "foveatedScreenSpaceError",
  "foveatedConeSize",
  "foveatedMinimumScreenSpaceErrorRelaxation",
  "foveatedInterpolationCallback",
  "foveatedTimeDelay",
  "dynamicScreenSpaceError",
  "dynamicScreenSpaceErrorDensity",
  "dynamicScreenSpaceErrorFactor",
  "dynamicScreenSpaceErrorHeightFalloff",
  "edgeDisplayMode",
  "skipLevelOfDetail",
  "baseScreenSpaceError",
  "skipScreenSpaceErrorFactor",
  "skipLevels",
  "immediatelyLoadDesiredLevelOfDetail",
  "loadSiblings",
  "clippingPlanes",
  "clippingPolygons",
  "lightColor",
  "colorBlendAmount",
  "colorBlendMode",
  "debugFreezeFrame",
  "debugColorizeTiles",
  "debugWireframe",
  "debugShowBoundingVolume",
  "debugShowContentBoundingVolume",
  "debugShowViewerRequestVolume",
  "debugShowGeometricError",
  "debugShowRenderingStatistics",
  "debugShowMemoryUsage",
  "debugShowUrl",
  "style",
  "backFaceCulling",
  "showOutline",
  "vectorClassificationOnly",
  "vectorKeepDecodedPositions",
  "splitDirection",
  "customShader",
  "imageBasedLighting",
  "showCreditsOnScreen",
  "featureIdLabel",
  "instanceFeatureIdLabel",
  "outlineColor",
  "cacheBytes",
  "maximumCacheOverflowBytes",
  "enableCollision",
] as const;

const cesiumReadonlyProps = [
  "asynchronouslyLoadImagery",
  "classificationType",
  "cullWithChildrenBounds",
  "debugHeatmapTilePropertyName",
  "ellipsoid",
  "enableDebugWireframe",
  "heightReference",
  "modelUpAxis",
  "modelForwardAxis",
  "projectTo2D",
  "enableShowOutline",
  "enablePick",
  "environmentMapOptions",
  "scene",
] as const;

export const cesiumEventProps = {
  onAllTilesLoad: "allTilesLoaded",
  onInitialTilesLoad: "initialTilesLoaded",
  onLoadProgress: "loadProgress",
  onTileFailed: "tileFailed",
  onTileLoad: "tileLoad",
  onTileUnload: "tileUnload",
  onTileVisible: "tileVisible",
} as const;

export const otherProps = ["onReady", "onError"] as const;

// `url` is consumed directly inside `create()` (it is not a real Cesium property),
// but it is treated as a read-only prop so that changing it at runtime makes the
// core destroy and recreate the tileset (re-running `fromUrl`). It is kept out of
// the `Cesium3DTilesetCesiumReadonlyProps` type because it does not exist on the
// Cesium class.
const cesiumReadonlyPropsWithUrl = [...cesiumReadonlyProps, "url"] as const;

/**
 * `clippingPlanes` and `clippingPolygons` are user-supplied props. Cesium's
 * `Cesium3DTileset.destroy()` unconditionally destroys these collections, and
 * assigning them via the public setter would also destroy them (the setter
 * calls `ClippingPlaneCollection.setOwner`, which destroys the previously owned
 * collection). Cesium only populates the private `_clippingPlanes` /
 * `_clippingPolygons` references when the user passed a collection (it creates
 * no internal defaults), so we detach them by nulling the private references
 * directly before `destroy()`, leaving the destroy cascade with nothing to
 * destroy. This prevents resium from destroying Cesium objects it received as
 * props (same class of bug as #602), which would break reuse under React
 * StrictMode.
 *
 * See @cesium/engine Cesium3DTileset.js (constructor ~L823-839, destroy
 * ~L3615-3617) and ClippingPlaneCollection.setOwner (~L661-683).
 */
export const detachUserOwnedClipping = (element: CesiumCesium3DTileset): void => {
  const e = element as unknown as {
    _clippingPlanes?: unknown;
    _clippingPolygons?: unknown;
  };
  e._clippingPlanes = undefined;
  e._clippingPolygons = undefined;
};

const Cesium3DTileset = createCesiumComponent<CesiumCesium3DTileset, Cesium3DTilesetProps>({
  name: "Cesium3DTileset",
  async create(context, props) {
    if (!context.primitiveCollection) return;

    const maybePromiseURL = props.url;

    let resultURL: Exclude<Cesium3DTilesetProps["url"], Promise<Resource>>;
    if (isPromise(maybePromiseURL)) {
      resultURL = await maybePromiseURL;
    } else {
      resultURL = maybePromiseURL as typeof resultURL;
    }

    let element;
    try {
      element = await CesiumCesium3DTileset.fromUrl(resultURL, props);
      props.onReady?.(element);
    } catch (e) {
      props.onError?.(e);
      return;
    }

    if (props.colorBlendAmount) {
      element.colorBlendAmount = props.colorBlendAmount;
    }
    if (props.colorBlendMode) {
      element.colorBlendMode = props.colorBlendMode;
    }
    if (props.style) {
      element.style = props.style;
    }
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      detachUserOwnedClipping(element);
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps: cesiumReadonlyPropsWithUrl,
  cesiumEventProps,
  otherProps,
  useCommonEvent: true,
});

export default Cesium3DTileset;
