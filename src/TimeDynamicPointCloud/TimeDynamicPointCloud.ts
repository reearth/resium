import { TimeDynamicPointCloud as CesiumTimeDynamicPointCloud } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  ConstructorOptions,
  Merge,
  ValueOf,
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

export type TimeDynamicPointCloudCesiumProps = PickCesiumProps<
  Merge<CesiumTimeDynamicPointCloud, ConstructorOptions<typeof CesiumTimeDynamicPointCloud>>,
  typeof cesiumProps,
  "intervals"
>;

export type TimeDynamicPointCloudCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumTimeDynamicPointCloud, ConstructorOptions<typeof CesiumTimeDynamicPointCloud>>,
  typeof cesiumReadonlyProps
>;

export type TimeDynamicPointCloudCesiumEvents = {
  onFrameChange?: (pointCloud: CesiumTimeDynamicPointCloud) => void;
};

export type TimeDynamicPointCloudOtherProps = {
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
    if (!context.cesiumWidget || !context.primitiveCollection || !context.cesiumWidget?.clock)
      return;
    const element = new CesiumTimeDynamicPointCloud({
      ...props,
      clock: props.clock ?? context.cesiumWidget.clock,
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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumTimeDynamicPointCloud,
  keyof TimeDynamicPointCloudProps | ValueOf<typeof cesiumEventProps>
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
