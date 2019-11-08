import createCesiumComponent, { EventkeyMap } from "../core/CesiumComponent";

/*
@summary
`Globe` can operate the globe of the scene.
All properties are applied to single globe of the scene.

**Note**: Following code is not recommended as occur extra rendering steps:

```
<Viewer>
  <Scene>
    <Globe>
      <Camera>
        <Entity />
      </Camera>
    </Globe>
  </Scene>
</Viewer>
```

`Globe` component's role is just changing fields of `Viewer#scene#globe`, so following code is recommended.

```
<Viewer>
  <Scene />
  <Globe />
  <Camera />
  <Entity />
</Viewer>
```

For details, refer to "Component location" chapter in [Guide](/guide).
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

const cesiumProps: (keyof GlobeCesiumProps)[] = [
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
  name: "Globe",
  create(cprops, props, context) {
    return context.scene.globe;
  },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Globe;
