import { TimeDynamicPointCloud as CesiumTimeDynamicPointCloud } from "cesium";

import type {
  EventkeyMap,
  PickCesiumProps,
  ConstructorOptions,
  Merge,
  EventProps} from "../core";
import {
  createCesiumComponent
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
    // Remember whether clippingPlanes was user-supplied so that on unmount we can
    // detach it before destroy() to avoid destroying the user-owned collection.
    return [element, { userClippingPlanes: !!props.clippingPlanes }];
  },
  destroy(element, context, _wrapperRef, state) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      // Cesium's TimeDynamicPointCloud.destroy() unconditionally destroys its
      // clippingPlanes (@cesium/engine/Source/Scene/TimeDynamicPointCloud.js#L798),
      // and the clippingPlanes setter destroys the previously-owned collection too
      // (ClippingPlaneCollection.setOwner, ClippingPlaneCollection.js#L671).
      // When clippingPlanes was supplied by the user, detach it by nulling the
      // private _clippingPlanes field directly (assigning via the public setter
      // would also destroy it) so element.destroy() won't destroy the
      // user-owned collection (same class of issue as #602).
      if (state?.userClippingPlanes) {
        (element as unknown as { _clippingPlanes?: unknown })._clippingPlanes = undefined;
      }
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
