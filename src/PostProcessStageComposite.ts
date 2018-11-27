import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

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

const PostProcessStageComposite = createCesiumComponent<
  any /* Cesium.PostProcessStageComposite */,
  PostProcessStageCompositeProps,
  PostProcessStageCompositeContext
>({
  name: "PostProcessStageComposite",
  create(cprops) {
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

export default PostProcessStageComposite;
