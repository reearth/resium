/// <reference types="react" />
import Cesium from "cesium";
export interface GlobeCesiumProps {
    atmosphereBrightnessShift?: number;
    atmosphereHueShift?: number;
    atmosphereSaturationShift?: number;
    baseColor?: Cesium.Color;
    clippingPlanes?: any;
    depthTestAgainstTerrain?: boolean;
    ellipsoid?: Cesium.Ellipsoid;
    enableLighting?: boolean;
    imageryLayers?: Cesium.ImageryLayerCollection;
    lightingFadeInDistance?: number;
    lightingFadeOutDistance?: number;
    material?: Cesium.Material;
    maximumScreenSpaceError?: number;
    nightFadeInDistance?: number;
    nightFadeOutDistance?: number;
    oceanNormalMapUrl?: string;
    shadows?: Cesium.ShadowMode;
    show?: boolean;
    showGroundAtmosphere?: boolean;
    showWaterEffect?: boolean;
    terrainProvider?: Cesium.TerrainProvider;
    tileCacheSize?: number;
}
export interface GlobeCesiumEventProps {
    onImageryLayersUpdate?: () => void;
    onTerrainProviderChange?: (terrainProvider: Cesium.TerrainProvider) => void;
    onTileLoad?: () => void;
    onTileLoadProgress?: (currentLoadQueueLength: number) => void;
}
export interface GlobeProps extends GlobeCesiumProps, GlobeCesiumEventProps {
}
export interface GlobeContext {
    scene: Cesium.Scene;
}
declare const Globe: import("react").ForwardRefExoticComponent<GlobeProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Globe>>>;
export default Globe;
