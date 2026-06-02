import type { Primitive, ModelNode, ColorBlendMode, Resource } from "cesium";
import { Model as CesiumModel } from "cesium";

import type { EventProps, PickCesiumProps, Merge} from "../core";
import { createCesiumComponent, isPromise } from "../core";

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
  url: string | Resource | Promise<Resource>;
};

export type ModelProps = ModelCesiumProps & ModelCesiumReadonlyProps & ModelOtherProps;

const cesiumProps = [
  "backFaceCulling",
  "clampAnimations",
  "clippingPlanes",
  "clippingPolygons",
  "color",
  "colorBlendAmount",
  "colorBlendMode",
  "customShader",
  "debugShowBoundingVolume",
  "debugWireframe",
  "distanceDisplayCondition",
  "edgeDisplayMode",
  "enableVerticalExaggeration",
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
  "pointCloudShading",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "basePath",
  "credit",
  "enableDebugWireframe",
  "gltf",
  "incrementallyLoadTextures",
  "scene",
  "releaseGltfJson",
  "cull",
  "opaquePass",
  "upAxis",
  "forwardAxis",
  "content",
  "enableShowOutline",
  "projectTo2D",
  "classificationType",
  "gltfCallback",
  "enablePick",
  "environmentMapOptions",
] as const;

export const otherProps = ["onReady", "onError", "url"] as const;

const Model = createCesiumComponent<CesiumModel, ModelProps>({
  name: "Model",
  async create(context, { scene, url, colorBlendMode, ...props }) {
    if (!context.scene || !context.primitiveCollection || !url) return;
    const maybePromiseURL = url;

    let resultURL: Exclude<ModelProps["url"], Promise<Resource>>;
    if (isPromise(maybePromiseURL)) {
      resultURL = await maybePromiseURL;
    } else {
      resultURL = maybePromiseURL as typeof resultURL;
    }

    let element;
    try {
      element = await CesiumModel.fromGltfAsync({
        ...props,
        url: resultURL,
        colorBlendMode: colorBlendMode as ColorBlendMode,
        scene: scene || context.scene,
      });
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
      // clippingPlanes/clippingPolygons are user-supplied props. The Cesium setters call
      // ClippingPlane(Polygon)Collection.setOwner, transferring ownership to the Model
      // (sets _owner = this), so Model.destroy()'s `owner === this` guard passes and would
      // destroy the user's collection (@cesium/engine Model.js:2834-2854). The public
      // setters also destroy the previously-owned collection (setOwner: ClippingPlane-
      // Collection.js:671), so we cannot detach via them. Instead null the private fields
      // directly so Cesium leaves the user-owned collections intact. resium never creates
      // these itself, so any present collection came from props.
      (element as { _clippingPlanes?: unknown })._clippingPlanes = undefined;
      (element as { _clippingPolygons?: unknown })._clippingPolygons = undefined;
      element.destroy();
    }
  },
  cesiumEventProps: {
    onReady: "readyEvent",
  },
  cesiumProps,
  cesiumReadonlyProps,
  otherProps,
  useCommonEvent: true,
});

export default Model;
