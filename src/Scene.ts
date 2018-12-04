import Cesium, { Scene as CesiumScene, SceneMode } from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface SceneCesiumProps {
  backgroundColor?: Cesium.Color;
  completeMorphOnUserInput?: boolean;
  debugCommandFilter?: (command: any) => boolean;
  debugShowCommands?: boolean;
  debugShowDepthFrustum?: number;
  debugShowFramesPerSecond?: boolean;
  debugShowFrustumPlanes?: boolean;
  debugShowFrustums?: boolean;
  eyeSeparation?: number;
  farToNearRatio?: number;
  focalLength?: number;
  fog?: Cesium.Fog;
  fxaa?: boolean;
  globe?: Cesium.Globe;
  highDynamicRange?: boolean;
  imagerySplitPosition?: number;
  invertClassification?: boolean;
  invertClassificationColor?: Cesium.Color;
  logarithmicDepthBuffer?: number;
  logarithmicDepthFarToNearRatio?: number;
  mapMode2D?: boolean;
  maximumRenderTimeChange?: number;
  minimumDisableDepthTestDistance?: number;
  mode?: Cesium.SceneMode;
  moon?: Cesium.Moon;
  morphTime?: number;
  nearToFarDistance2D?: number;
  pickTranslucentDepth?: boolean;
  requestRenderMode?: boolean;
  rethrowRenderErrors?: boolean;
  shadowMap?: Cesium.ShadowMap;
  skyAtmosphere?: Cesium.SkyAtmosphere;
  skyBox?: Cesium.SkyBox;
  sun?: Cesium.Sun;
  sunBloom?: boolean;
  terrainExaggeration?: number;
  terrainProvider?: Cesium.TerrainProvider;
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
  morph?: number;
}

const cesiumProps: Array<keyof SceneCesiumProps> = [
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
  "fxaa",
  "globe",
  "highDynamicRange",
  "imagerySplitPosition",
  "invertClassification",
  "invertClassificationColor",
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
  "sun",
  "sunBloom",
  "terrainExaggeration",
  "terrainProvider",
  "useDepthPicking",
  "useWebVR",
];

const cesiumEventProps: EventkeyMap<CesiumScene, keyof SceneCesiumEvents> = {
  morphComplete: "onMorphComplete",
  morphStart: "onMorphStart",
  postRender: "onPostRender",
  preRender: "onPreRender",
  preUpdate: "onPreUpdate",
  renderError: "onRenderError",
  terrainProviderChanged: "onTerrainProviderChange",
};

export interface SceneContext {
  scene: CesiumScene;
}

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

const Scene = createCesiumComponent<CesiumScene, SceneProps, SceneContext>({
  name: "Scene",
  create(cprops, props, context) {
    const scene = context.scene;
    if (props.mode) {
      morph(scene, props.mode, props.morph);
    }
    return scene;
  },
  update(scene, props, prevProps) {
    if (props.mode !== prevProps.mode && props.mode) {
      morph(scene, props.mode, props.morph);
    }
  },
  // provide(element) {
  //   return {
  //     scene: element,
  //     camera: element.camera,
  //   };
  // },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Scene;
