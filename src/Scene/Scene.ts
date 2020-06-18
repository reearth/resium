import {
  Scene as CesiumScene,
  SceneMode,
  SkyBox,
  Sun,
  TerrainProvider,
  Cartesian3,
  SkyAtmosphere,
  ShadowMap,
  Moon,
  Light,
  Color,
  Globe,
  Fog,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`Scene` can operate the scene of the Viewer or CesiumWidget.
All properties are applied to single scene of them.

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

`Scene` component's role is just changing fields of `Viewer#scene`, so following code is recommended.

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
Scene is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface SceneCesiumProps {
  backgroundColor?: Color;
  completeMorphOnUserInput?: boolean;
  debugCommandFilter?: (command: any) => boolean;
  debugShowCommands?: boolean;
  debugShowDepthFrustum?: number;
  debugShowFramesPerSecond?: boolean;
  debugShowFrustumPlanes?: boolean;
  debugShowFrustums?: boolean;
  debugShowGlobeDepth?: boolean;
  eyeSeparation?: number;
  farToNearRatio?: number;
  focalLength?: number;
  fog?: Fog;
  fxaa?: boolean;
  globe?: Globe;
  highDynamicRange?: boolean;
  imagerySplitPosition?: number;
  invertClassification?: boolean;
  invertClassificationColor?: Color;
  light?: Light;
  logarithmicDepthBuffer?: number;
  logarithmicDepthFarToNearRatio?: number;
  mapMode2D?: boolean;
  maximumRenderTimeChange?: number;
  minimumDisableDepthTestDistance?: number;
  mode?: SceneMode;
  moon?: Moon;
  morphTime?: number;
  nearToFarDistance2D?: number;
  pickTranslucentDepth?: boolean;
  requestRenderMode?: boolean;
  rethrowRenderErrors?: boolean;
  shadowMap?: ShadowMap;
  skyAtmosphere?: SkyAtmosphere;
  skyBox?: SkyBox;
  specularEnvironmentMaps?: string;
  sphericalHarmonicCoefficients?: Cartesian3[];
  sun?: Sun;
  sunBloom?: boolean;
  terrainProvider?: TerrainProvider;
  useDepthPicking?: boolean;
  useWebVR?: boolean;
}

export interface SceneCesiumEvents {
  onMorphComplete?: () => void;
  onMorphStart?: () => void;
  onPostRender?: () => void;
  onPreRender?: () => void;
  onPreUpdate?: () => void;
  onRenderError?: () => void;
  onTerrainProviderChange?: () => void;
}

export interface SceneProps extends SceneCesiumProps, SceneCesiumEvents {
  children?: React.ReactNode;
  // If this prop is set and when `mode` prop is changed, the scene morphs with this duration (seconds).
  morphDuration?: number;
}

const cesiumProps: (keyof SceneCesiumProps)[] = [
  "backgroundColor",
  "completeMorphOnUserInput",
  "debugCommandFilter",
  "debugShowCommands",
  "debugShowDepthFrustum",
  "debugShowFramesPerSecond",
  "debugShowFrustumPlanes",
  "debugShowFrustums",
  "debugShowGlobeDepth",
  "eyeSeparation",
  "farToNearRatio",
  "focalLength",
  "fog",
  "fxaa",
  "globe",
  "highDynamicRange",
  "imagerySplitPosition",
  "invertClassification",
  "invertClassificationColor",
  "light",
  "logarithmicDepthBuffer",
  "logarithmicDepthFarToNearRatio",
  "mapMode2D",
  "maximumRenderTimeChange",
  "minimumDisableDepthTestDistance",
  // "mode", // enable morph with animation
  "moon",
  "morphTime",
  "nearToFarDistance2D",
  "pickTranslucentDepth",
  "requestRenderMode",
  "rethrowRenderErrors",
  "shadowMap",
  "skyAtmosphere",
  "skyBox",
  "specularEnvironmentMaps",
  "sphericalHarmonicCoefficients",
  "sun",
  "sunBloom",
  "terrainProvider",
  "useDepthPicking",
  "useWebVR",
];

const cesiumEventProps: EventkeyMap<CesiumScene, SceneCesiumEvents> = {
  onMorphComplete: "morphComplete",
  onMorphStart: "morphStart",
  onPostRender: "postRender",
  onPreRender: "preRender",
  onPreUpdate: "preUpdate",
  onRenderError: "renderError",
  onTerrainProviderChange: "terrainProviderChanged",
};

const morph = (scene: CesiumScene, mode: SceneMode, morphTime?: number) => {
  switch (mode) {
    case SceneMode.SCENE2D:
      scene.morphTo2D(morphTime);
      break;

    case SceneMode.COLUMBUS_VIEW:
      scene.morphToColumbusView(morphTime);
      break;

    case SceneMode.SCENE3D:
      scene.morphTo3D(morphTime);
      break;
  }
};

const Scene = createCesiumComponent<CesiumScene, SceneProps>({
  name: "Scene",
  create(context, props) {
    if (context.scene && props.mode) {
      morph(context.scene, props.mode, props.morphDuration);
    }
    return context.scene;
  },
  update(scene, props, prevProps) {
    if (props.mode !== prevProps.mode && props.mode) {
      morph(scene, props.mode, props.morphDuration);
    }
  },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Scene;
