import { Cesium3DTileset as CesiumCesium3DTileset } from "cesium";
import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`Cesium3DTileset` is a 3D tile set.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

// Workaround
export interface ResiumCesium3DTileset extends Cesium.Cesium3DTileset {
  colorBlendAmount: number | undefined;
  colorBlendMode: any /* Cesium.Cesium3DTileColorBlendMode */ | undefined;
  readyPromise: Promise<ResiumCesium3DTileset>;
  allTilesLoaded?: Cesium.Event<[]>;
  initialTilesLoaded?: Cesium.Event<[]>;
  loadProgress?: Cesium.Event<[number, number]>;
  tileFailed?: Cesium.Event<[]>;
  tileLoad?: Cesium.Event<[ResiumCesium3DTileset]>;
  tileUnload?: Cesium.Event<[]>;
  tileVisible?: Cesium.Event<[ResiumCesium3DTileset]>;
}

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
  // @type Cesium.ClippingPlaneCollection
  clippingPlanes?: any;
  // @type Cesium.ClassificationType
  classificationType?: any;
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
  // @type Cesium.Cesium3DTileColorBlendMode
  colorBlendMode?: any;
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
  onTileLoad?: (tile: ResiumCesium3DTileset /* Cesium.3DTileset */) => void;
  onTileUnload?: () => void;
  onTileVisible?: (tile: ResiumCesium3DTileset /* Cesium.3DTileset */) => void;
}

export interface Cesium3DTilesetProps
  extends Cesium3DTilesetCesiumProps,
    Cesium3DTilesetCesiumReadonlyProps,
    Cesium3DTilesetCesiumEvents {
  // Calls when the tile set is completely loaded.
  onReady?: (tileset: ResiumCesium3DTileset /* Cesium.Cesium3DTileset */) => void;
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

// workaround: any => Cesium.3DTileset
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
    const element = new CesiumCesium3DTileset(props as any) as ResiumCesium3DTileset;
    element.colorBlendAmount = props.colorBlendAmount;
    element.colorBlendMode = props.colorBlendMode;
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
    if (!(element as any).isDestroyed()) {
      (element as any).destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default Cesium3DTileset;
