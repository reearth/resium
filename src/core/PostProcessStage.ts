import {
  PostProcessStageCollection,
  PostProcessStage,
  PostProcessStageComposite,
  Scene,
} from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps } from "./component";
import { includes, AssertNever } from "./util";

export type PostProcessStageCesiumProps = PickCesiumProps<PostProcessStage, typeof cesiumProps>;

const cesiumProps = ["enabled", "selected"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<PostProcessStage, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

export const createPostProcessStage = <UniformProps>(opts: {
  name: string;
  props: (keyof UniformProps)[];
  readonlyProps?: (keyof UniformProps)[];
  noMount?: boolean;
  create(
    props: Readonly<UniformProps & PostProcessStageCesiumProps>,
    postProcessStages: PostProcessStageCollection,
  ): PostProcessStage | PostProcessStageComposite;
}) =>
  createCesiumComponent<
    PostProcessStage | PostProcessStageComposite,
    PostProcessStageCesiumProps & UniformProps & { stages?: any[] },
    {
      scene?: Scene;
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
        context.scene.postProcessStages.add(element);
      }
      return element;
    },
    destroy(element, context) {
      if (!opts.noMount) {
        if (context.scene && !context.scene.isDestroyed()) {
          context.scene.postProcessStages.remove(element);
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
