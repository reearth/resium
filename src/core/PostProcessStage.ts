import Cesium from "cesium";

import createCesiumComponent from "./CesiumComponent";

export interface PostProcessStageCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

export interface PostProcessStageContext {
  scene: Cesium.Scene;
}

export interface PostProcessStage {
  enabled: boolean;
  uniforms: any;
  isDestroyed(): boolean;
  destroy(): void;
}

const cesiumProps: Array<keyof PostProcessStageCesiumProps> = ["enabled", "selected"];

export const createPostProcessStage = <UniformProps, E extends PostProcessStage = any>(opts: {
  name: string;
  props: Array<keyof UniformProps>;
  readonlyProps?: Array<keyof UniformProps>;
  noMount?: boolean;
  create(
    props: Readonly<UniformProps & PostProcessStageCesiumProps>,
    postProcessStages: any /* Cesium.PostProcessStageCollection */,
  ): any;
}) =>
  createCesiumComponent<
    E,
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
          (!opts.readonlyProps || !opts.readonlyProps.includes(k)) &&
          typeof props[k] !== "undefined"
        ) {
          ps.uniforms[k] = props[k];
        }
      });
      return ps;
    },
    mount(element, context) {
      if (!opts.noMount && context.scene && !context.scene.isDestroyed()) {
        (context.scene as any).postProcessStages.add(element);
      }
    },
    unmount(element, context) {
      if (!opts.noMount) {
        if (context.scene && !context.scene.isDestroyed()) {
          (context.scene as any).postProcessStages.remove(element);
        }
        if (!element.isDestroyed()) {
          element.destroy();
        }
      } else {
        element.enabled = false;
      }
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
    defaultProps: {
      enabled: true,
    } as any,
  });

export default createPostProcessStage;
