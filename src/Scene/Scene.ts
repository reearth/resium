import { Scene as CesiumScene, SceneMode } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

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
Scene can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type SceneCesiumProps = PickCesiumProps<CesiumScene, typeof cesiumProps>;

export type SceneCesiumEvents = {
  onMorphComplete?: () => void;
  onMorphStart?: () => void;
  onPostRender?: () => void;
  onPreRender?: () => void;
  onPreUpdate?: () => void;
  onPostUpdate?: () => void;
  onRenderError?: () => void;
  onTerrainProviderChange?: () => void;
};

export type SceneOtherProps = {
  children?: ReactNode;
  mode?: SceneMode;
  /** If this prop is set and when `mode` prop is changed, the scene morphs with this duration (seconds). */
  morphDuration?: number;
};

export type SceneProps = SceneCesiumProps & SceneCesiumEvents & SceneOtherProps;

const cesiumProps = [
  "backgroundColor",
  "completeMorphOnUserInput",
  "debugCommandFilter",
  "debugShowCommands",
  "debugShowDepthFrustum",
  "debugShowFramesPerSecond",
  "debugShowFrustumPlanes",
  "debugShowFrustums",
  "eyeSeparation",
  "farToNearRatio",
  "focalLength",
  "fog",
  "gamma",
  "globe",
  "highDynamicRange",
  "invertClassification",
  "invertClassificationColor",
  "light",
  "logarithmicDepthBuffer",
  "logarithmicDepthFarToNearRatio",
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
  "postProcessStages",
  "msaaSamples",
  "splitPosition",
  "debugCommandFilter",
  "verticalExaggeration",
  "verticalExaggerationRelativeHeight",
  "atmosphere",
] as const;

export const cesiumEventProps = {
  onMorphComplete: "morphComplete",
  onMorphStart: "morphStart",
  onPostRender: "postRender",
  onPreRender: "preRender",
  onPreUpdate: "preUpdate",
  onPostUpdate: "postUpdate",
  onRenderError: "renderError",
  onTerrainProviderChange: "terrainProviderChanged",
} as const;

export const otherProps = ["mode", "morphDuration"] as const;

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
  otherProps,
  setCesiumPropsAfterCreate: true,
});

export default Scene;
