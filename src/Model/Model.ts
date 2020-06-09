import {
  Model as CesiumModel,
  ModelMesh,
  Primitive,
  ModelNode,
  Cartesian3,
  ClippingPlaneCollection,
  Cartesian2,
  Color,
  DistanceDisplayCondition,
  Matrix4,
  Resource,
  ShadowMode,
  Scene,
  Credit,
  PrimitiveCollection,
} from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

export interface ModelCesiumProps {
  basePath?: Resource | string;
  show?: boolean;
  modelMatrix?: Matrix4;
  scale?: number;
  minimumPixelSize?: number;
  maximumScale?: number;
  id?: any;
  clampAnimations?: boolean;
  shadows?: ShadowMode;
  debugShowBoundingVolume?: boolean;
  debugWireframe?: boolean;
  scene?: Scene;
  distanceDisplayCondition?: DistanceDisplayCondition;
  color?: Color;
  // @type ColorBlendMode
  colorBlendMode?: any;
  colorBlendAmount?: number;
  silhouetteColor?: Color;
  silhouetteSize?: number;
  clippingPlanes?: ClippingPlaneCollection;
  dequantizeInShader?: boolean;
  imageBasedLightingFactor?: Cartesian2;
  lightColor?: Cartesian3;
  luminanceAtZenith?: number;
  sphericalHarmonicCoefficients?: Cartesian3[];
  specularEnvironmentMaps?: string;
}

export interface ModelCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  gltf?: object | ArrayBuffer | Uint8Array;
  incrementallyLoadTextures?: boolean;
  url?: Resource | string;
  credit?: Credit | string;
}

export interface ModelProps
  extends ModelCesiumProps,
    ModelCesiumReadonlyProps,
    EventProps<{
      id?: string;
      mesh: ModelMesh;
      node: ModelNode;
      primitive: Primitive;
    }> {
  // Calls when the model is completely loaded.
  onReady?: (model: CesiumModel) => void;
}

const cesiumProps: (keyof ModelCesiumProps)[] = [
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
];

const cesiumReadonlyProps: (keyof ModelCesiumReadonlyProps)[] = [
  "allowPicking",
  "asynchronous",
  "gltf",
  "incrementallyLoadTextures",
  "url",
  "credit",
];

const Model = createCesiumComponent<
  CesiumModel,
  ModelProps,
  {
    primitiveCollection?: PrimitiveCollection;
  }
>({
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
