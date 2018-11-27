import Cesium from "cesium";

import createCesiumComponent from "./CesiumComponent";

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

export const createPostProcessStage = <UniformProps>(opts: {
  name: string;
  props: Array<keyof UniformProps>;
  create(
    props: Readonly<UniformProps & PostProcessStageProps>,
    postProcessStages: any /* Cesium.PostProcessStageCollection */,
  ): any;
}) =>
  createCesiumComponent<
    any /* Cesium.PostProcessStage */,
    PostProcessStageProps & UniformProps,
    PostProcessStageContext
  >({
    name,
    create(cprops, props, context) {
      const ps = opts.create(cprops, (context.scene as any).postProcessStages);
      if (typeof cprops.enabled === "boolean") {
        ps.enabled = cprops.enabled;
      }
      if (cprops.selected) {
        ps.selected = cprops.selected;
      }
      opts.props.forEach(k => {
        if (typeof props[k] !== "undefined") {
          ps.uniforms[k] = props[k];
        }
      });
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
    update(element, props, prevProps) {
      opts.props.forEach(k => {
        if (props[k] !== prevProps[k]) {
          element.uniforms[k] = props[k];
        }
      });
    },
    cesiumProps,
    cesiumReadonlyProps,
  });

export const createBultinPostProcessStage = <UniformProps>(opts: {
  name: string;
  props: Array<keyof UniformProps>;
  readonlyProps?: Array<keyof UniformProps>;
  create(
    props: Readonly<UniformProps & PostProcessStageCesiumProps>,
    postProcessStages: any /* Cesium.PostProcessStageCollection */,
  ): any;
}) =>
  createCesiumComponent<
    any /* Cesium.PostProcessStage */,
    PostProcessStageCesiumProps & UniformProps & { stages?: any[] },
    PostProcessStageContext
  >({
    name,
    create(cprops, props, context) {
      const ps = opts.create(cprops, (context.scene as any).postProcessStages);
      if (typeof cprops.enabled === "boolean") {
        ps.enabled = cprops.enabled;
      }
      if (cprops.selected) {
        ps.selected = cprops.selected;
      }
      opts.props.forEach(k => {
        if (
          !opts.readonlyProps ||
          (!opts.readonlyProps.includes(k) && typeof props[k] !== "undefined")
        ) {
          ps.uniforms[k] = props[k];
        }
      });
      return ps;
    },
    update(element, props, prevProps) {
      opts.props.forEach(k => {
        if ((!opts.readonlyProps || !opts.readonlyProps.includes(k)) && props[k] !== prevProps[k]) {
          element.uniforms[k] = props[k];
        }
      });
    },
    cesiumProps,
    cesiumReadonlyProps: opts.readonlyProps,
  });
