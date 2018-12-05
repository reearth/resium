import Cesium from "cesium";

import { createPostProcessStage } from "./core/PostProcessStage";
import createCesiumComponent from "./core/CesiumComponent";

export interface PostProcessStageCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

export interface PostProcessStageCesiumReadonlyProps {
  fragmentShader: string;
  uniforms?: any;
  textureScale?: number;
  forcePowerOfTwo?: boolean;
  sampleMode?: any; // Cesium.PostProcessStageSampleMode
  pixelFormat?: Cesium.PixelFormat;
  pixelDatatype?: any; // Cesium.PixelDatatype;
  clearColor?: Cesium.Color;
  scissorRectangle?: Cesium.BoundingRectangle;
  name?: string;
}

export interface PostProcessStageProps
  extends PostProcessStageCesiumProps,
    PostProcessStageCesiumReadonlyProps {}

export interface PostProcessStageContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof PostProcessStageCesiumProps> = ["enabled", "selected"];

const cesiumReadonlyProps: Array<keyof PostProcessStageCesiumReadonlyProps> = [
  "clearColor",
  "forcePowerOfTwo",
  "fragmentShader",
  "name",
  "pixelDatatype",
  "pixelFormat",
  "sampleMode",
  "scissorRectangle",
  "textureScale",
  "uniforms",
];

export const PostProcessStage = createCesiumComponent<
  any /* PostProcessStage */,
  PostProcessStageProps,
  PostProcessStageContext
>({
  name: "PostProcessStage",
  create(cprops, props, context) {
    const ps = new (Cesium as any).PostProcessStage(cprops);
    if (typeof cprops.enabled === "boolean") {
      ps.enabled = cprops.enabled;
    }
    if (cprops.selected) {
      ps.selected = cprops.selected;
    }
    return ps;
  },
  mount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      (context.scene as any).postProcessStages.add(element);
    }
  },
  unmount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      (context.scene as any).postProcessStages.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export const BlackAndWhiteStage = createPostProcessStage<{
  gradations?: number;
}>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlackAndWhiteStage();
  },
});

export const BlurStage = createPostProcessStage<{
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "BlurStage",
  props: ["delta", "sigma", "stepSize"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlurStage();
  },
});

export const BrightnessStage = createPostProcessStage<{
  brightness?: number;
}>({
  name: "BrightnessStage",
  props: ["brightness"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBrightnessStage();
  },
});

export const DepthOfFieldStage = createPostProcessStage<{
  focalDistance?: number;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "DepthOfFieldStage",
  props: ["delta", "focalDistance", "sigma", "stepSize"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createDepthOfFieldStage();
  },
});

export const EdgeDetectionStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createEdgeDetectionStage();
  },
});

export const LensFlareStage = createPostProcessStage<{
  dirtTexture?: any;
  starTexture?: any;
  intensity?: number;
  distortion?: number;
  ghostDispersal?: number;
  haloWidth?: number;
  earthRadius?: number;
}>({
  name: "LensFlareStage",
  props: [
    "dirtTexture",
    "starTexture",
    "intensity",
    "distortion",
    "ghostDispersal",
    "haloWidth",
    "earthRadius",
  ],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createLensFlareStage();
  },
});

export const NightVisionStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
  stages?: any[]; // Cesium.PostProcessStage[]
}>({
  name: "NightVisionStage",
  props: ["color", "length"],
  readonlyProps: ["stages"],
  create(props) {
    return (Cesium as any).PostProcessStageLibrary.createNightVisionStage(props.stages);
  },
});

export const SilhouetteStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
  stages?: any[]; // Cesium.PostProcessStage[]
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  readonlyProps: ["stages"],
  create(props) {
    return (Cesium as any).PostProcessStageLibrary.createSilhouetteStage(props.stages);
  },
});

export const Fxaa = createPostProcessStage<{}>({
  name: "Bloom",
  create(props, collection) {
    return collection.fxaa;
  },
  props: [],
});

export default PostProcessStage;
