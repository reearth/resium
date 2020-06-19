import { Model as CesiumModel, ModelMesh, Primitive, ModelNode, Resource } from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  ConstructorOptions,
  Merge,
} from "../core";

export type ModelCesiumProps = PickCesiumProps<
  Merge<CesiumModel, ConstructorOptions<typeof CesiumModel>>,
  typeof cesiumProps
>;

export type ModelCesiumReadonlyProps = PickCesiumProps<CesiumModel, typeof cesiumReadonlyProps>;

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
  "dequantizeInShader",
  "distanceDisplayCondition",
  "id",
  "imageBasedLightingFactor",
  "lightColor",
  "maximumScale",
  "minimumPixelSize",
  "modelMatrix",
  "scale",
  "scene",
  "shadows",
  "show",
  "silhouetteColor",
  "silhouetteSize",
  "luminanceAtZenith",
  "sphericalHarmonicCoefficients",
  "specularEnvironmentMaps",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "gltf",
  "incrementallyLoadTextures",
  "url",
  "credit",
] as const;

const Model = createCesiumComponent<CesiumModel, ModelProps>({
  name: "Model",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = props.url
      ? CesiumModel.fromGltf(props as ModelProps & { url: string | Resource })
      : new CesiumModel(props);
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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumModel, ConstructorOptions<typeof CesiumModel>>,
  keyof ModelProps
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
