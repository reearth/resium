import type {
  Cesium3DTileFeature,
  Cesium3DTile,
  Cesium3DTileset as CesiumCesium3DTileset} from "cesium";
import {
  createGooglePhotorealistic3DTileset,
} from "cesium";

import type {
  EventProps,
  PickCesiumProps,
  ConstructorOptions,
  Merge} from "../core";
import {
  createCesiumComponent,
} from "../core";

/*
@summary
`GooglePhotorealistic3DTileset` provides Google Maps Photorealistic 3D Tiles.

This component asynchronously creates a Cesium3DTileset via Cesium's
`createGooglePhotorealistic3DTileset` factory and attaches it to the
PrimitiveCollection of the Viewer or CesiumWidget.

An API key may be required. Set it globally via `Cesium.GoogleMaps.defaultApiKey`,
or pass it through the `apiKey` prop. (It is named `apiKey`, not `key`, because
`key` is a reserved React prop and would never reach the component.)

```jsx
import { useRef } from "react";
import { Viewer as CesiumViewer, GoogleMaps } from "cesium";
import { Viewer, GooglePhotorealistic3DTileset, CesiumComponentRef } from "resium";

GoogleMaps.defaultApiKey = "your_google_api_key";

const App = () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
  return (
    <Viewer full ref={ref}>
      <GooglePhotorealistic3DTileset
        onReady={tileset => {
          ref.current?.cesiumElement?.zoomTo(tileset);
        }}
      />
    </Viewer>
  );
};
```
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type GooglePhotorealistic3DTilesetCesiumProps = PickCesiumProps<
  CesiumCesium3DTileset,
  typeof cesiumProps
>;

export type GooglePhotorealistic3DTilesetCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumCesium3DTileset, ConstructorOptions<typeof CesiumCesium3DTileset>>,
  typeof cesiumReadonlyProps
>;

export type GooglePhotorealistic3DTilesetCesiumEvents = {
  onAllTilesLoad?: () => void;
  onInitialTilesLoad?: () => void;
  onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
  onTileFailed?: (error: any) => void;
  onTileLoad?: (tile: Cesium3DTile) => void;
  onTileUnload?: (tile: Cesium3DTile) => void;
  onTileVisible?: (tile: Cesium3DTile) => void;
};

export type GooglePhotorealistic3DTilesetOtherProps = EventProps<Cesium3DTileFeature> & {
  /** Calls when the tile set is completely loaded. */
  onReady?: (tileset: CesiumCesium3DTileset) => void;
  /** Calls when an error occurs while creating the tile set. */
  onError?: (err: unknown) => void;
  /** The API key to access Google Photorealistic 3D Tiles. If not provided, uses GoogleMaps.defaultApiKey. (Named `apiKey` because `key` is reserved by React.) */
  apiKey?: string;
  /** Whether to use the tiles only with the Google geocoder. */
  onlyUsingWithGoogleGeocoder?: true;
};

export type GooglePhotorealistic3DTilesetProps = GooglePhotorealistic3DTilesetCesiumProps &
  GooglePhotorealistic3DTilesetCesiumReadonlyProps &
  GooglePhotorealistic3DTilesetCesiumEvents &
  GooglePhotorealistic3DTilesetOtherProps;

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

export const otherProps = ["onReady", "onError", "apiKey", "onlyUsingWithGoogleGeocoder"] as const;

const GooglePhotorealistic3DTileset = createCesiumComponent<
  CesiumCesium3DTileset,
  GooglePhotorealistic3DTilesetProps
>({
  name: "GooglePhotorealistic3DTileset",
  async create(context, props) {
    if (!context.primitiveCollection) return;

    const { apiKey, onlyUsingWithGoogleGeocoder } = props;
    const apiOptions: { key?: string; onlyUsingWithGoogleGeocoder?: true } = {};
    if (apiKey !== undefined) {
      apiOptions.key = apiKey;
    }
    if (onlyUsingWithGoogleGeocoder !== undefined) {
      apiOptions.onlyUsingWithGoogleGeocoder = onlyUsingWithGoogleGeocoder;
    }

    let element;
    try {
      element = await createGooglePhotorealistic3DTileset(apiOptions, props);
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

export default GooglePhotorealistic3DTileset;
