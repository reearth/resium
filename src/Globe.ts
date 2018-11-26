import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import Cesium from "cesium";

export interface GlobeCesiumProps {
  atmosphereBrightnessShift?: number;
  atmosphereHueShift?: number;
  atmosphereSaturationShift?: number;
  baseColor?: Cesium.Color;
  clippingPlanes?: any; // Cesium.ClippingPlaneCollection
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
  tileLoadProgressEvent?: Cesium.Event;
}

export interface GlobeCesiumReadonlyProps {
  tilesLoaded?: boolean;
}

export interface GlobeCesiumEventProps {
  onImageryLayersUpdate?: () => void;
  onTerrainProviderChange?: (terrainProvider: Cesium.TerrainProvider) => void;
  onTileLoad?: () => void;
}

const cesiumEventProps: EventkeyMap<Cesium.Globe, keyof GlobeCesiumEventProps> = {
  imageryLayersUpdatedEvent: "onImageryLayersUpdate",
  terrainProviderChanged: "onTerrainProviderChange",
  tileLoadedEvent: "onTileLoad",
};

export interface GlobeProps
  extends GlobeCesiumProps,
    GlobeCesiumReadonlyProps,
    GlobeCesiumEventProps {}

export interface GlobeContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof GlobeCesiumProps> = [
  "atmosphereBrightnessShift",
  "atmosphereHueShift",
  "atmosphereSaturationShift",
  "baseColor",
  "clippingPlanes",
  "depthTestAgainstTerrain",
  "ellipsoid",
  "enableLighting",
  "imageryLayers",
  "lightingFadeInDistance",
  "lightingFadeOutDistance",
  "material",
  "maximumScreenSpaceError",
  "nightFadeInDistance",
  "nightFadeOutDistance",
  "oceanNormalMapUrl",
  "shadows",
  "show",
  "showGroundAtmosphere",
  "showWaterEffect",
  "terrainProvider",
  "tileCacheSize",
  "tileLoadProgressEvent",
];
const cesiumReadonlyProps: Array<keyof GlobeCesiumReadonlyProps> = ["tilesLoaded"];

const Globe = createCesiumComponent<Cesium.Globe, GlobeProps, GlobeContext>({
  name: "globe",
  create(cprops, props, context) {
    return context.scene.globe;
  },
  cesiumProps,
  cesiumReadonlyProps,
  setCesiumPropsAfterCreate: true,
});

export default Globe;
