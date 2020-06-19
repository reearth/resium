import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  ValueOf,
} from "../core";
import { Globe as CesiumGlobe, TerrainProvider } from "cesium";

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
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type GlobeCesiumProps = PickCesiumProps<CesiumGlobe, typeof cesiumProps>;

export type GlobeCesiumEvents = {
  onImageryLayersUpdate?: () => void;
  onTerrainProviderChange?: (terrainProvider: TerrainProvider) => void;
  onTileLoadProgress?: (currentLoadQueueLength: number) => void;
};

const cesiumEventProps = {
  onImageryLayersUpdate: "imageryLayersUpdatedEvent",
  onTerrainProviderChange: "terrainProviderChanged",
  onTileLoadProgress: "tileLoadProgressEvent",
} as const;

export type GlobeProps = GlobeCesiumProps & GlobeCesiumEvents;

const cesiumProps = [
  "atmosphereBrightnessShift",
  "atmosphereHueShift",
  "atmosphereSaturationShift",
  "backFaceCulling",
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
] as const;

const Globe = createCesiumComponent<CesiumGlobe, GlobeProps>({
  name: "Globe",
  create: context => context.scene?.globe,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Globe;

// Unused prop check
type IgnoredProps = "ellipsoid" | "imageryLayers";
type UnusedProps = UnusedCesiumProps<
  CesiumGlobe,
  keyof GlobeProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
