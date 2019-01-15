import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import Cesium from "cesium";

/*
@summary
`Globe` can operate the globe of the scene.
All properties are applied to single globe of the scene.
*/

/*
@scope
Globe is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface GlobeCesiumProps {
  atmosphereBrightnessShift?: number;
  atmosphereHueShift?: number;
  atmosphereSaturationShift?: number;
  baseColor?: Cesium.Color;
  // @type Cesium.ClippingPlaneCollection
  clippingPlanes?: any;
  depthTestAgainstTerrain?: boolean;
  enableLighting?: boolean;
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

export interface GlobeCesiumEvents {
  onImageryLayersUpdate?: () => void;
  onTerrainProviderChange?: (terrainProvider: Cesium.TerrainProvider) => void;
  onTileLoad?: () => void;
  onTileLoadProgress?: (currentLoadQueueLength: number) => void;
}

const cesiumEventProps: EventkeyMap<Cesium.Globe, keyof GlobeCesiumEvents> = {
  imageryLayersUpdatedEvent: "onImageryLayersUpdate",
  terrainProviderChanged: "onTerrainProviderChange",
  tileLoadedEvent: "onTileLoad",
  tileLoadProgressEvent: "onTileLoadProgress",
};

export interface GlobeProps extends GlobeCesiumProps, GlobeCesiumEvents {}

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
  "enableLighting",
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
];

const Globe = createCesiumComponent<Cesium.Globe, GlobeProps, GlobeContext>({
  name: "globe",
  create(cprops, props, context) {
    return context.scene.globe;
  },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Globe;
