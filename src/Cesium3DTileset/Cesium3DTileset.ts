import {
  Cesium3DTileset as CesiumCesium3DTileset,
  Cesium3DTileFeature,
  Cesium3DTile,
  Resource,
} from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  ConstructorOptions,
  Merge,
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
  "skipLevelOfDetail",
  "baseScreenSpaceError",
  "skipScreenSpaceErrorFactor",
  "skipLevels",
  "immediatelyLoadDesiredLevelOfDetail",
  "loadSiblings",
  "clippingPlanes",
  "clippingPolygons",
  "classificationType",
  "ellipsoid",
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
  "vectorClassificationOnly",
  "vectorKeepDecodedPositions",
  "splitDirection",
  "customShader",
  "imageBasedLighting",
  "showCreditsOnScreen",
  "featureIdLabel",
  "instanceFeatureIdLabel",
  "imageBasedLighting",
  "outlineColor",
  "cacheBytes",
  "maximumCacheOverflowBytes",
  "enableCollision",
] as const;

const cesiumReadonlyProps = [
  "showOutline",
  "cullWithChildrenBounds",
  "debugHeatmapTilePropertyName",
  "enableDebugWireframe",
  "environmentMapOptions",
  "modelUpAxis",
  "modelForwardAxis",
  "projectTo2D",
  "enableShowOutline",
  "enablePick",
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

export const otherProps = ["onReady", "onError", "url"] as const;

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
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
  otherProps,
  useCommonEvent: true,
});

export default Cesium3DTileset;
