import { TimeDynamicPointCloud as CesiumTimeDynamicPointCloud } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  ConstructorOptions,
  Merge,
  EventProps,
} from "../core";

/*
@summary
`TimeDynamicPointCloud` is a point cloud with dynamic changes with time.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A TimeDynamicPointCloud object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type Target = Merge<
  CesiumTimeDynamicPointCloud,
  ConstructorOptions<typeof CesiumTimeDynamicPointCloud>
>;

export type TimeDynamicPointCloudCesiumProps = PickCesiumProps<
  Target,
  typeof cesiumProps,
  "intervals"
>;

export type TimeDynamicPointCloudCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
>;

export type TimeDynamicPointCloudCesiumEvents = {
  onFrameChange?: (pointCloud: CesiumTimeDynamicPointCloud) => void;
};

export type TimeDynamicPointCloudOtherProps = EventProps<{
  primitive?: CesiumTimeDynamicPointCloud;
}> & {
  /** Calls when the point cloud is completely loaded. */
  onReady?: (pointCloud: CesiumTimeDynamicPointCloud) => void;
};

export type TimeDynamicPointCloudProps = TimeDynamicPointCloudCesiumProps &
  TimeDynamicPointCloudCesiumReadonlyProps &
  TimeDynamicPointCloudCesiumEvents &
  TimeDynamicPointCloudOtherProps;

const cesiumProps = [
  "clippingPlanes",
  "maximumMemoryUsage",
  "modelMatrix",
  "shadows",
  "show",
  "style",
  "intervals",
] as const;

const cesiumReadonlyProps = ["clock", "shading"] as const;

export const otherProps = ["onReady"] as const;

// TimeDynamicPointCloud
export const cesiumEventProps: EventkeyMap<
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
    if (!context.cesiumWidget || !context.primitiveCollection || !context.cesiumWidget?.clock)
      return;
    const element = new CesiumTimeDynamicPointCloud({
      ...props,
      clock: props.clock ?? context.cesiumWidget.clock,
    });
    if (props.onReady) {
      const handleFrameChanged = () => {
        props.onReady?.(element);
        element.frameChanged.removeEventListener(handleFrameChanged);
      };
      element.frameChanged.addEventListener(handleFrameChanged);
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
  otherProps,
  useCommonEvent: true,
});

export default TimeDynamicPointCloud;
