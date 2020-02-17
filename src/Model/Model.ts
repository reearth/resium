import { Model as CesiumModel } from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

export interface ModelCesiumProps {
  basePath?: Cesium.Resource | string;
  show?: boolean;
  modelMatrix?: Cesium.Matrix4;
  scale?: number;
  minimumPixelSize?: number;
  maximumScale?: number;
  id?: any;
  clampAnimations?: boolean;
  shadows?: Cesium.ShadowMode;
  debugShowBoundingVolume?: boolean;
  debugWireframe?: boolean;
  scene?: Cesium.Scene;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  color?: Cesium.Color;
  // @type Cesium.ColorBlendMode
  colorBlendMode?: any;
  colorBlendAmount?: number;
  silhouetteColor?: Cesium.Color;
  silhouetteSize?: number;
  clippingPlanes?: Cesium.ClippingPlaneCollection;
  dequantizeInShader?: boolean;
  imageBasedLightingFactor?: Cesium.Cartesian2;
  lightColor?: Cesium.Cartesian3;
  luminanceAtZenith?: number;
  sphericalHarmonicCoefficients?: Cesium.Cartesian3[];
  specularEnvironmentMaps?: string;
}

export interface ModelCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  gltf?: object | ArrayBuffer | Uint8Array;
  incrementallyLoadTextures?: boolean;
  url?: Cesium.Resource | string;
  credit?: Cesium.Credit | string;
}

export interface ModelProps
  extends ModelCesiumProps,
    ModelCesiumReadonlyProps,
    EventProps<{
      id?: string;
      mesh: Cesium.ModelMesh;
      node: Cesium.ModelNode;
      primitive: Cesium.Primitive;
    }> {
  // Calls when the model is completely loaded.
  onReady?: (model: Cesium.Model) => void;
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
  Cesium.Model,
  ModelProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
  }
>({
  name: "Model",
  create(context, props) {
    if (!context.primitiveCollection) return;

    // WORKAROUND: url and basePath field types are wrong
    const element = props.url ? CesiumModel.fromGltf(props as any) : new CesiumModel(props as any);

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
