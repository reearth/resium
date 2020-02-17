import { Cesium3DTileset as CesiumCesium3DTileset } from "cesium";
import { createCesiumComponent, EventkeyMap } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`Cesium3DTileset` is a 3D tile set.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

// WORKAROUND: tileUnload event is missing in Cesium3DTileset type
type ResiumCesium3DTileset = Cesium.Cesium3DTileset & {
  tileUnload?: Cesium.Event<[]>;
};

export interface Cesium3DTilesetCesiumProps {
  show?: boolean;
  modelMatrix?: Cesium.Matrix4;
  shadows?: Cesium.ShadowMode;
  maximumScreenSpaceError?: number;
  maximumMemoryUsage?: number;
  cullRequestsWhileMoving?: boolean;
  cullRequestsWhileMovingMultiplier?: number;
  preloadWhenHidden?: boolean;
  preloadFlightDestinations?: boolean;
  preferLeaves?: boolean;
  progressiveResolutionHeightFraction?: number;
  foveatedScreenSpaceError?: boolean;
  foveatedConeSize?: number;
  foveatedMinimumScreenSpaceErrorRelaxation?: number;
  foveatedInterpolationCallback?: (p: number, q: number, time: number) => void;
  foveatedTimeDelay?: boolean;
  cullWithChildrenBounds?: boolean;
  dynamicScreenSpaceError?: boolean;
  dynamicScreenSpaceErrorDensity?: number;
  dynamicScreenSpaceErrorFactor?: number;
  dynamicScreenSpaceErrorHeightFalloff?: number;
  skipLevelOfDetail?: boolean;
  baseScreenSpaceError?: number;
  skipScreenSpaceErrorFactor?: number;
  skipLevels?: number;
  immediatelyLoadDesiredLevelOfDetail?: boolean;
  loadSiblings?: boolean;
  clippingPlanes?: Cesium.ClippingPlaneCollection;
  classificationType?: Cesium.ClassificationType;
  ellipsoid?: Cesium.Ellipsoid;
  imageBasedLightingFactor?: Cesium.Cartesian2;
  lightColor?: Cesium.Cartesian3;
  debugFreezeFrame?: boolean;
  debugColorizeTiles?: boolean;
  debugWireframe?: boolean;
  debugShowBoundingVolume?: boolean;
  debugShowContentBoundingVolume?: boolean;
  debugShowViewerRequestVolume?: boolean;
  debugShowGeometricError?: boolean;
  debugShowRenderingStatistics?: boolean;
  debugShowMemoryUsage?: boolean;
  debugShowUrl?: boolean;
  colorBlendAmount?: number;
  colorBlendMode?: Cesium.Cesium3DTileColorBlendMode;
  luminanceAtZenith?: number;
  sphericalHarmonicCoefficients?: Cesium.Cartesian3[];
  specularEnvironmentMaps?: string;
}

export interface Cesium3DTilesetCesiumReadonlyProps {
  url: Cesium.Resource | string | Promise<Cesium.Resource> | Promise<string>;
  pointCloudShading?: {
    attenuation?: boolean;
    geometricErrorScale?: number;
    maximumAttenuation?: number;
    baseResolution?: number;
    eyeDomeLighting?: boolean;
    eyeDomeLightingStrength?: number;
    eyeDomeLightingRadius?: number;
  };
}

export interface Cesium3DTilesetCesiumEvents {
  onAllTilesLoad?: () => void;
  onInitialTilesLoad?: () => void;
  onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
  onTileFailed?: () => void;
  onTileLoad?: (tile: Cesium.Cesium3DTileset) => void;
  onTileUnload?: () => void;
  onTileVisible?: (tile: Cesium.Cesium3DTileset) => void;
}

export interface Cesium3DTilesetProps
  extends Cesium3DTilesetCesiumProps,
    Cesium3DTilesetCesiumReadonlyProps,
    Cesium3DTilesetCesiumEvents,
    EventProps<Cesium.Cesium3DTileFeature> {
  // Calls when the tile set is completely loaded.
  onReady?: (tileset: Cesium.Cesium3DTileset) => void;
}

const cesiumProps: (keyof Cesium3DTilesetCesiumProps)[] = [
  "show",
  "modelMatrix",
  "shadows",
  "maximumScreenSpaceError",
  "maximumMemoryUsage",
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
  "cullWithChildrenBounds",
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
  "classificationType",
  "ellipsoid",
  "imageBasedLightingFactor",
  "lightColor",
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
  "colorBlendAmount",
  "colorBlendMode",
  "luminanceAtZenith",
  "sphericalHarmonicCoefficients",
  "specularEnvironmentMaps",
];

const cesiumReadonlyProps: (keyof Cesium3DTilesetCesiumReadonlyProps)[] = [
  "url",
  "pointCloudShading",
];

const cesiumEventProps: EventkeyMap<ResiumCesium3DTileset, Cesium3DTilesetCesiumEvents> = {
  onAllTilesLoad: "allTilesLoaded",
  onInitialTilesLoad: "initialTilesLoaded",
  onLoadProgress: "loadProgress",
  onTileFailed: "tileFailed",
  onTileLoad: "tileLoad",
  onTileUnload: "tileUnload",
  onTileVisible: "tileVisible",
};

const Cesium3DTileset = createCesiumComponent<
  ResiumCesium3DTileset,
  Cesium3DTilesetProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
  }
>({
  name: "Cesium3DTileset",
  create(context, props) {
    if (!context.primitiveCollection) return;
    // WORKAROUND: foveatedInterpolationCallback is missing in constructor argument
    const element = new CesiumCesium3DTileset(props as any) as ResiumCesium3DTileset;
    if (props.colorBlendAmount) {
      element.colorBlendAmount = props.colorBlendAmount;
    }
    if (props.colorBlendMode) {
      element.colorBlendMode = props.colorBlendMode;
    }
    if (props.onReady) {
      element.readyPromise.then(props.onReady);
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
  useCommonEvent: true,
});

export default Cesium3DTileset;
