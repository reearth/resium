import { createCesiumComponent } from "./component";
import { includes } from "./util";

export interface PostProcessStageCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

const cesiumProps: (keyof PostProcessStageCesiumProps)[] = ["enabled", "selected"];

export const createPostProcessStage = <UniformProps>(opts: {
  name: string;
  props: (keyof UniformProps)[];
  readonlyProps?: (keyof UniformProps)[];
  noMount?: boolean;
  create(
    props: Readonly<UniformProps & PostProcessStageCesiumProps>,
    postProcessStages: Cesium.PostProcessStageCollection,
  ): Cesium.PostProcessStage | Cesium.PostProcessStageComposite;
}) =>
  createCesiumComponent<
    Cesium.PostProcessStage | Cesium.PostProcessStageComposite,
    PostProcessStageCesiumProps & UniformProps & { stages?: any[] },
    {
      scene?: Cesium.Scene;
    }
  >({
    name,
    create(context, props) {
      if (!context.scene) return;
      const element = opts.create(props, context.scene.postProcessStages);
      if (typeof props.enabled === "boolean") {
        element.enabled = props.enabled;
      }
      if (props.selected && "selected" in element) {
        element.selected = props.selected;
      }
      opts.props.forEach(k => {
        if (!includes(opts.readonlyProps, k) && typeof props[k] !== "undefined") {
          element.uniforms[k] = props[k];
        }
      });
      if (!opts.noMount && context.scene && !context.scene.isDestroyed()) {
        // WORKAROUND: add method must be accept Cesium.PostProcessStage | Cesium.PostProcessStageComposite
        context.scene.postProcessStages.add(element as Cesium.PostProcessStage);
      }
      return element;
    },
    destroy(element, context) {
      if (!opts.noMount) {
        if (context.scene && !context.scene.isDestroyed()) {
          context.scene.postProcessStages.remove(element as any); // WORKAROUND
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
        if (!includes(opts.readonlyProps, k) && props[k] !== prevProps[k]) {
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
