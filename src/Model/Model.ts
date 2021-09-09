import { Model as CesiumModel, ModelMesh, Primitive, ModelNode } from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  ConstructorOptions,
  Merge,
} from "../core";

type Target = Merge<
  Merge<CesiumModel, ConstructorOptions<typeof CesiumModel>>,
  Parameters<typeof CesiumModel["fromGltf"]>[0]
>;

export type ModelCesiumProps = PickCesiumProps<CesiumModel, typeof cesiumProps>;

export type ModelCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ModalOtherProps = {
  /** Calls when the model is completely loaded. */
  onReady?: (model: CesiumModel) => void;
};

export type ModelProps = ModelCesiumProps &
  ModelCesiumReadonlyProps &
  EventProps<{
    id?: string;
    mesh: ModelMesh;
    node: ModelNode;
    primitive: Primitive;
  }> &
  ModalOtherProps;

const cesiumProps = [
  "basePath",
  "clampAnimations",
  "clippingPlanes",
  "color",
  "colorBlendAmount",
  "colorBlendMode",
  "debugShowBoundingVolume",
  "debugWireframe",
  "distanceDisplayCondition",
  "id",
  "imageBasedLightingFactor",
  "lightColor",
  "maximumScale",
  "minimumPixelSize",
  "modelMatrix",
  "scale",
  "shadows",
  "show",
  "silhouetteColor",
  "silhouetteSize",
  "luminanceAtZenith",
  "sphericalHarmonicCoefficients",
  "specularEnvironmentMaps",
  "backFaceCulling",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "credit",
  "dequantizeInShader",
  "gltf",
  "heightReference",
  "incrementallyLoadTextures",
  "scene",
  "url",
] as const;

const Model = createCesiumComponent<CesiumModel, ModelProps>({
  name: "Model",
  create(context, { url, scene, ...props }) {
    if (!context.scene || !context.primitiveCollection) return;
    const element = url
      ? CesiumModel.fromGltf({ ...props, url })
      : new CesiumModel({ ...props, scene: scene || context.scene });
    if (props.onReady) {
      element.readyPromise.then(props.onReady);
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
  useCommonEvent: true,
});

export default Model;
