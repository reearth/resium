import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import { createPostProcessStage } from "./core/PostProcessStage";

export interface PostProcessStageCompositeCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

export interface PostProcessStageCompositeCesiumReadonlyProps {
  stages: any[]; // Cesium.PostProcessStage
  inputPreviousStageTexture?: boolean;
  name?: string;
  uniforms?: any;
}

export interface PostProcessStageCompositeProps
  extends PostProcessStageCompositeCesiumProps,
    PostProcessStageCompositeCesiumReadonlyProps {}

export interface PostProcessStageCompositeContext {
  scene?: Cesium.Scene;
}

const cesiumProps: Array<keyof PostProcessStageCompositeCesiumProps> = ["enabled", "selected"];

const cesiumReadonlyProps: Array<keyof PostProcessStageCompositeCesiumReadonlyProps> = [
  "inputPreviousStageTexture",
  "name",
  "stages",
  "uniforms",
];

export const PostProcessStageComposite = createCesiumComponent<
  any /* Cesium.PostProcessStageComposite */,
  PostProcessStageCompositeProps,
  PostProcessStageCompositeContext
>({
  name: "PostProcessStageComposite",
  create(cprops) {
    const ps = new (Cesium as any).PostProcessStageComposite(cprops);
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

export const AmbientOcclusion = createPostProcessStage<{
  intensity?: number;
  bias?: number;
  lengthCap?: number;
  stepSize?: number;
  frustumLength?: number;
  ambientOcclusionOnly?: boolean;
  delta?: number;
  sigma?: number;
}>({
  name: "AmbientOcclusion",
  create(props, collection) {
    return collection.ambientOcclusion;
  },
  props: [
    "ambientOcclusionOnly",
    "bias",
    "delta",
    "frustumLength",
    "intensity",
    "lengthCap",
    "sigma",
    "stepSize",
  ],
  noMount: true,
});

export const Bloom = createPostProcessStage<{
  contrast?: number;
  brightness?: number;
  glowOnly?: boolean;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "Bloom",
  create(props, collection) {
    return collection.bloom;
  },
  props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
  noMount: true,
});

export default PostProcessStageComposite;
