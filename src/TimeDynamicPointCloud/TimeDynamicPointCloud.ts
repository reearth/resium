import {
  TimeDynamicPointCloud as CesiumTimeDynamicPointCloud,
  ClippingPlaneCollection,
  Clock,
  TimeIntervalCollection,
  Matrix4,
  ShadowMode,
  Cesium3DTileStyle,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  clock?: Clock;
  intervals: TimeIntervalCollection;
  show?: boolean;
  modelMatrix?: Matrix4;
  shadows?: ShadowMode;
  maximumMemoryUsage?: number;
  style?: Cesium3DTileStyle;
  clippingPlanes?: ClippingPlaneCollection;
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
  onFrameChange?: (pointCloud: any /* TimeDynamicPointCloud */) => void;
}

export interface TimeDynamicPointCloudProps
  extends TimeDynamicPointCloudCesiumProps,
    TimeDynamicPointCloudCesiumReadonlyProps,
    TimeDynamicPointCloudCesiumEvents {
  // Calls when the point cloud is completely loaded.
  onReady?: (pointCloud: any /* TimeDynamicPointCloud */) => void;
}

const cesiumProps: (keyof TimeDynamicPointCloudCesiumProps)[] = [
  "clippingPlanes",
  "clock",
  "intervals",
  "maximumMemoryUsage",
  "modelMatrix",
  "shadows",
  "show",
  "style",
];

const cesiumReadonlyProps: (keyof TimeDynamicPointCloudCesiumReadonlyProps)[] = ["shading"];

// TimeDynamicPointCloud
const cesiumEventProps: EventkeyMap<
  CesiumTimeDynamicPointCloud,
  TimeDynamicPointCloudCesiumEvents
> = {
  onFrameChange: "frameChanged",
};

const TimeDynamicPointCloud = createCesiumComponent<
  CesiumTimeDynamicPointCloud,
  TimeDynamicPointCloudProps
>({
  name: "TimeDynamicPointCloud",
  create(context, props) {
    if (!context.cesiumWidget || !context.primitiveCollection) return;
    const element = new CesiumTimeDynamicPointCloud({
      ...props,
      clock: props.clock ?? context.cesiumWidget?.clock,
    });
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
  cesiumEventProps,
});

export default TimeDynamicPointCloud;
