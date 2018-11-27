import Cesium from "cesium";

import { createPostProcessStage, createBultinPostProcessStage } from "./core/PostProcessStage";

export const PostProcessStage = createPostProcessStage<{}>({
  name: "PostProcessStage",
  props: [],
  create(props) {
    return new (Cesium as any).PostProcessStage(props);
  },
});

export const BlackAndWhiteStage = createBultinPostProcessStage<{
  gradations?: number;
}>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlackAndWhiteStage();
  },
});

export const BlurStage = createBultinPostProcessStage<{
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

export const BrightnessStage = createBultinPostProcessStage<{
  brightness?: number;
}>({
  name: "BrightnessStage",
  props: ["brightness"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBrightnessStage();
  },
});

export const DepthOfFieldStage = createBultinPostProcessStage<{
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

export const EdgeDetectionStage = createBultinPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createEdgeDetectionStage();
  },
});

export const LensFlareStage = createBultinPostProcessStage<{
  dirtTexture?: any;
  starTexture?: any;
  intensity?: number;
  distortion?: number;
  ghostDispersal?: number;
  haloWidth?: number;
  earthRadius?: Cesium.Ellipsoid;
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

export const NightVisionStage = createBultinPostProcessStage<{
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

export const SilhouetteStage = createBultinPostProcessStage<{
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
