import { Globe as CesiumGlobe, TerrainProvider } from "cesium";

import { createCesiumComponent, isPromise, PickCesiumProps } from "../core";

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
Globe can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type GlobeCesiumProps = PickCesiumProps<CesiumGlobe, typeof cesiumProps>;

export type GlobeCesiumEvents = {
  onImageryLayersUpdate?: () => void;
  onTerrainProviderChange?: (terrainProvider: TerrainProvider) => void;
  onTileLoadProgress?: (currentLoadQueueLength: number) => void;
};

export const cesiumEventProps = {
  onImageryLayersUpdate: "imageryLayersUpdatedEvent",
  onTerrainProviderChange: "terrainProviderChanged",
  onTileLoadProgress: "tileLoadProgressEvent",
} as const;

export type GlobeOtherProps = {
  terrainProvider?: TerrainProvider | Promise<TerrainProvider>;
};

export type GlobeProps = GlobeCesiumProps & GlobeCesiumEvents & GlobeOtherProps;

const cesiumProps = [
  "atmosphereBrightnessShift",
  "atmosphereHueShift",
  "atmosphereSaturationShift",
  "backFaceCulling",
  "baseColor",
  "clippingPlanes",
  "clippingPolygons",
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
  "tileCacheSize",
  "loadingDescendantLimit",
  "preloadAncestors",
  "preloadSiblings",
  "fillHighlightColor",
  "dynamicAtmosphereLighting",
  "dynamicAtmosphereLightingFromSun",
  "showSkirts",
  "cartographicLimitRectangle",
  "translucency",
  "undergroundColor",
  "undergroundColorAlphaByDistance",
  "lambertDiffuseMultiplier",
  "atmosphereLightIntensity",
  "atmosphereRayleighCoefficient",
  "atmosphereMieCoefficient",
  "atmosphereRayleighScaleHeight",
  "atmosphereMieScaleHeight",
  "atmosphereMieAnisotropy",
  "vertexShadowDarkness",
] as const;

const otherProps = ["terrainProvider"] as const;

const Globe = createCesiumComponent<CesiumGlobe, GlobeProps>({
  name: "Globe",
  create: context => context.scene?.globe,
  update: async (elm, props) => {
    const maybePromiseTerrainProvider = props.terrainProvider;
    let resultTerrainProvider: TerrainProvider;
    if (isPromise(maybePromiseTerrainProvider)) {
      resultTerrainProvider = await maybePromiseTerrainProvider;
    } else {
      resultTerrainProvider = maybePromiseTerrainProvider as TerrainProvider;
    }
    elm.terrainProvider = resultTerrainProvider;
  },
  cesiumProps,
  cesiumEventProps,
  otherProps,
  setCesiumPropsAfterCreate: true,
});

export default Globe;
