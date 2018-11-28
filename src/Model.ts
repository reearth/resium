import Cesium from "cesium";

import createCesiumElement from "./core/CesiumComponent";

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
  colorBlendMode?: any; // Cesium.ColorBlendMode;
  colorBlendAmount?: number;
  silhouetteColor?: Cesium.Color;
  silhouetteSize?: number;
  clippingPlanes?: any; // Cesium.ClippingPlaneCollection;
  dequantizeInShader?: boolean;
  imageBasedLightingFactor?: Cesium.Cartesian2;
  lightColor?: Cesium.Cartesian3;
}

export interface ModelCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  gltf?: object | ArrayBuffer | Uint8Array;
  incrementallyLoadTextures?: boolean;
  url?: Cesium.Resource | string;
}

export interface ModelProps extends ModelCesiumProps, ModelCesiumReadonlyProps {
  onReady?: (model: Cesium.Model) => void;
}

export interface ModelContext {
  primitiveCollection: Cesium.PrimitiveCollection;
}

const cesiumProps: Array<keyof ModelCesiumProps> = [
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
];

const cesiumReadonlyProps: Array<keyof ModelCesiumReadonlyProps> = [
  "allowPicking",
  "asynchronous",
  "gltf",
  "incrementallyLoadTextures",
  "url",
];

const Model = createCesiumElement<Cesium.Model, ModelProps, ModelContext>({
  name: "Model",
  create(cprops, props) {
    // Workaround: basePath?: Cesium.Resource | string;
    const model = props.url
      ? Cesium.Model.fromGltf(cprops as any)
      : new Cesium.Model(cprops as any);

    if (props.onReady) {
      model.readyPromise.then(props.onReady);
    }

    return model;
  },
  mount(element, context) {
    context.primitiveCollection.add(element);
  },
  unmount(element, context) {
    context.primitiveCollection.remove(element);
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default Model;
