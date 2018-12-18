import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`TimeDynamicPointCloud` is a point cloud with dynamic changes with time.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A TimeDynamicPointCloud object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface TimeDynamicPointCloudCesiumProps {
  clock?: Cesium.Clock;
  intervals: Cesium.TimeIntervalCollection;
  show?: boolean;
  modelMatrix?: Cesium.Matrix4;
  shadows?: Cesium.ShadowMode;
  maximumMemoryUsage?: number;
  style?: any /* Cesium.Cesium3DTileStyle */;
  clippingPlanes?: any /* Cesium.ClippingPlaneCollection */;
}

export interface TimeDynamicPointCloudCesiumReadonlyProps {
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

export interface TimeDynamicPointCloudCesiumEvents {
  onFrameChange?: (pointCloud: any /* Cesium.TimeDynamicPointCloud */) => void;
}

export interface TimeDynamicPointCloudProps
  extends TimeDynamicPointCloudCesiumProps,
    TimeDynamicPointCloudCesiumReadonlyProps,
    TimeDynamicPointCloudCesiumEvents {
  // Calls when the point cloud is completely loaded.
  onReady?: (pointCloud: any /* Cesium.TimeDynamicPointCloud */) => void;
}

export interface TimeDynamicPointCloudContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
  cesiumWidget?: Cesium.CesiumWidget;
}

const cesiumProps: Array<keyof TimeDynamicPointCloudCesiumProps> = [
  "clippingPlanes",
  "clock",
  "intervals",
  "maximumMemoryUsage",
  "modelMatrix",
  "shadows",
  "show",
  "style",
];

const cesiumReadonlyProps: Array<keyof TimeDynamicPointCloudCesiumReadonlyProps> = ["shading"];

const cesiumEventProps: EventkeyMap<any, keyof TimeDynamicPointCloudCesiumEvents> = {
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
