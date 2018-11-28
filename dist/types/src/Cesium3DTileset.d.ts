/// <reference types="react" />
import Cesium from "cesium";
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
    clippingPlanes?: any;
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
    colorBlendMode?: any;
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
export interface Cesium3DTilesetProps extends Cesium3DTilesetCesiumProps, Cesium3DTilesetCesiumReadonlyProps {
    onAllTilesLoad?: () => void;
    onInitialTilesLoad?: () => void;
    onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
    onTileFailed?: () => void;
    onTileLoad?: (tile: any) => void;
    onTileUnload?: () => void;
    onTileVisible?: (tile: any) => void;
    onReady?: (tileset: any) => void;
}
export interface Cesium3DTilesetContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
}
declare const Cesium3DTileset: import("react").ForwardRefExoticComponent<Cesium3DTilesetProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default Cesium3DTileset;
