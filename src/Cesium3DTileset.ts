import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`Cesium3DTileset` is a 3D tile set.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface Cesium3DTilesetCesiumProps {
  url: Cesium.Resource | string | Promise<Cesium.Resource> | Promise<string>;
  show?: boolean;
  modelMatrix?: Cesium.Matrix4;
  shadows?: Cesium.ShadowMode;
  maximumScreenSpaceError?: number;
  maximumMemoryUsage?: number;
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
  onTileLoad?: (tile: any /* Cesium.3DTileset */) => void;
  onTileUnload?: () => void;
  onTileVisible?: (tile: any /* Cesium.3DTileset */) => void;
}

export interface Cesium3DTilesetProps
  extends Cesium3DTilesetCesiumProps,
    Cesium3DTilesetCesiumReadonlyProps,
    Cesium3DTilesetCesiumEvents {
  // Calls when the tile set is completely loaded.
  onReady?: (tileset: any /* Cesium.3DTileset */) => void;
}

export interface Cesium3DTilesetContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
}

const cesiumProps: Array<keyof Cesium3DTilesetCesiumProps> = [
  "url",
  "show",
  "modelMatrix",
  "shadows",
  "maximumScreenSpaceError",
  "maximumMemoryUsage",
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

const cesiumReadonlyProps: Array<keyof Cesium3DTilesetCesiumReadonlyProps> = ["pointCloudShading"];

const cesiumEventProps: EventkeyMap<any, keyof Cesium3DTilesetCesiumEvents> = {
  allTilesLoaded: "onAllTilesLoad",
  initialTilesLoaded: "onInitialTilesLoad",
  loadProgress: "onLoadProgress",
  tileFailed: "onTileFailed",
  tileLoad: "onTileLoad",
  tileUnload: "onTileUnload",
  tileVisible: "onTileVisible",
};

// workaround: any => Cesium.3DTileset
const Cesium3DTileset = createCesiumComponent<any, Cesium3DTilesetProps, Cesium3DTilesetContext>({
  name: "Cesium3DTileset",
  create(cprops, props) {
    const c3ts = new (Cesium as any).Cesium3DTileset(cprops);
    c3ts.colorBlendAmount = cprops.colorBlendAmount;
    c3ts.colorBlendMode = cprops.colorBlendMode;
    if (props.onReady) {
      c3ts.readyPromise.then(props.onReady);
    }
    return c3ts;
  },
  mount(element, context) {
    if (context.primitiveCollection) {
      context.primitiveCollection.add(element);
    }
  },
  unmount(element, context) {
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
});

export default Cesium3DTileset;
