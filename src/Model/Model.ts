import { Model as CesiumModel, Primitive, ModelNode, ColorBlendMode } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps, Merge } from "../core";

export type Target = Merge<CesiumModel, Parameters<(typeof CesiumModel)["fromGltfAsync"]>[0]>;

export type ModelCesiumProps = PickCesiumProps<CesiumModel, typeof cesiumProps>;

export type ModelCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ModelOtherProps = EventProps<{
  id?: string;
  node: ModelNode;
  primitive: Primitive;
}> & {
  /** Calls when the model is completely loaded. */
  onReady?: (model: CesiumModel) => void;
  onError?: (err: unknown) => void;
};

export type ModelProps = ModelCesiumProps & ModelCesiumReadonlyProps & ModelOtherProps;

const cesiumProps = [
  "backFaceCulling",
  "clampAnimations",
  "clippingPlanes",
  "color",
  "colorBlendAmount",
  "colorBlendMode",
  "customShader",
  "debugShowBoundingVolume",
  "debugWireframe",
  "distanceDisplayCondition",
  "featureIdLabel",
  "heightReference",
  "id",
  "imageBasedLighting",
  "instanceFeatureIdLabel",
  "lightColor",
  "maximumScale",
  "minimumPixelSize",
  "modelMatrix",
  "outlineColor",
  "scale",
  "shadows",
  "show",
  "showCreditsOnScreen",
  "showOutline",
  "silhouetteColor",
  "silhouetteSize",
  "splitDirection",
  "style",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "basePath",
  "credit",
  "enableDebugWireframe",
  "gltf",
  "heightReference",
  "incrementallyLoadTextures",
  "scene",
  "url",
  "releaseGltfJson",
  "cull",
  "opaquePass",
  "upAxis",
  "forwardAxis",
  "content",
  "scene",
  "enableShowOutline",
  "projectTo2D",
  "classificationType",
  "errorEvent",
  "readyEvent",
  "texturesReadyEvent",
  "gltfCallback",
] as const;

export const otherProps = ["onReady", "onError"] as const;

const Model = createCesiumComponent<CesiumModel, ModelProps>({
  name: "Model",
  async create(context, { scene, url, colorBlendMode, ...props }) {
    if (!context.scene || !context.primitiveCollection || !url) return;
    let element;
    try {
      element = await CesiumModel.fromGltfAsync({
        ...props,
        url,
        colorBlendMode: colorBlendMode as ColorBlendMode,
        scene: scene || context.scene,
      });
      props.onReady?.(element);
    } catch (e) {
      props.onError?.(e);
      return;
    }

    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  otherProps,
  useCommonEvent: true,
});

export default Model;
