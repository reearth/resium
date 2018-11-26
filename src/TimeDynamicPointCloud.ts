import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface TimeDynamicPointCloudCesiunProps {
  clock?: Cesium.Clock;
  intervals: Cesium.TimeIntervalCollection;
  show?: boolean;
  modelMatrix?: Cesium.Matrix4;
  shadows?: Cesium.ShadowMode;
  maximumMemoryUsage?: number;
  style?: any /* Cesium.Cesium3DTileStyle */;
  clippingPlanes?: any /* Cesium.ClippingPlaneCollection */;
}

export interface TimeDynamicPointCloudCesiunReadonlyProps {
  shading?: {
    attenuation?: boolean;
    geometricErrorScale?: number;
    maximumAttenuation?: number;
    baseResolution?: number;
    eyeDomeLighting?: boolean;
    eyeDomeLightingStrength?: number;
    eyeDomeLightingRadius?: number;
  };
}

export interface TimeDynamicPointCloudProps
  extends TimeDynamicPointCloudCesiunProps,
    TimeDynamicPointCloudCesiunReadonlyProps {
  onReady?: (pointCloud: any /* Cesium.TimeDynamicPointCloud */) => void;
  onFrameChange?: (pointCloud: any /* Cesium.TimeDynamicPointCloud */) => void;
}

export interface TimeDynamicPointCloudContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
  cesiumWidget?: Cesium.CesiumWidget;
}

const cesiumProps: Array<keyof TimeDynamicPointCloudCesiunProps> = [
  "clippingPlanes",
  "clock",
  "intervals",
  "maximumMemoryUsage",
  "modelMatrix",
  "shadows",
  "show",
  "style",
];

const cesiumReadonlyProps: Array<keyof TimeDynamicPointCloudCesiunReadonlyProps> = ["shading"];

const cesiumEventProps: EventkeyMap<any, keyof TimeDynamicPointCloudProps> = {
  frameChanged: "onFrameChange",
};

const TimeDynamicPointCloud = createCesiumComponent<
  any /* Cesium.TimeDynamicPointCloud */,
  TimeDynamicPointCloudProps,
  TimeDynamicPointCloudContext
>({
  name: "TimeDynamicPointCloud",
  create(cprops, props, context) {
    const tdpc = new (Cesium as any).TimeDynamicPointCloud({
      ...cprops,
      clock: cprops.clock || (context.cesiumWidget && context.cesiumWidget.clock),
    });
    if (props.onReady) {
      console.log("ready", tdpc);
      tdpc.readyPromise.then(props.onReady);
    }
    return tdpc;
  },
  mount(element, context) {
    if (context.primitiveCollection) {
      context.primitiveCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default TimeDynamicPointCloud;
