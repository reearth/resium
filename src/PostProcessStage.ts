import Cesium from "cesium";

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
  scene?: Cesium.Scene;
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

const PostProcessStage = createCesiumComponent<
  any /* Cesium.PostProcessStage */,
  PostProcessStageProps,
  PostProcessStageContext
>({
  name: "PostProcessStage",
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

export default PostProcessStage;
