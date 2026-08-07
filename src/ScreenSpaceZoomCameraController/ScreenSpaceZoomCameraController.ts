import type { ScreenSpaceEventType, ScreenSpaceInputBindings } from "cesium";
import { ScreenSpaceZoomCameraController as CesiumScreenSpaceZoomCameraController } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent, registerController, unregisterController } from "../core";

/*
@summary
`ScreenSpaceZoomCameraController` zooms the camera towards a picked world position via
scroll or drag. It is one of the alternative camera controllers added in Cesium 1.144,
built on the composable `Controller` framework, and pairs with the pan and tilt/orbit
controllers to make up a complete asset inspection camera.

Cesium's built-in camera controller keeps handling input unless it is turned off, so
mount [ScreenSpaceCameraController](/components/ScreenSpaceCameraController) with
`enableInputs={false}` alongside this component.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
The controller is registered with the scene's `ControllerHost`.
*/

export type ScreenSpaceZoomCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceZoomCameraController,
  typeof cesiumProps
>;

export type ScreenSpaceZoomCameraControllerCesiumReadonlyProps = {
  /**
   * Mouse button and optional keyboard modifier combinations that zoom by dragging.
   * Bindings are attached once when the controller is registered, so changing this
   * prop re-creates the controller rather than mutating it in place.
   */
  dragInputs?: ScreenSpaceInputBindings.InputBinding[];
  /**
   * Screen space event types that zoom by scrolling (for example
   * `ScreenSpaceEventType.WHEEL`). Attached once at registration, so changing this
   * prop re-creates the controller.
   */
  scrollInputs?: ScreenSpaceEventType[];
};

export type ScreenSpaceZoomCameraControllerOtherProps = {
  /**
   * Precedence relative to other registered controllers. `0` applies before every
   * other controller; omitting it makes this controller the highest priority.
   * Changing this prop re-registers the controller.
   */
  priority?: number;
};

export type ScreenSpaceZoomCameraControllerProps = ScreenSpaceZoomCameraControllerCesiumProps &
  ScreenSpaceZoomCameraControllerCesiumReadonlyProps &
  ScreenSpaceZoomCameraControllerOtherProps;

const cesiumProps = [
  "dampingEnabled",
  "enabled",
  "inertiaEnabled",
  "inertialDecay",
  "maximumZoomDistance",
  "maximumZoomVelocity",
  "pickWorldPosition",
  "usePointerPosition",
  "zoomAnimationDuration",
  "zoomDistanceRatio",
  "zoomSensitivity",
] as const;

const cesiumReadonlyProps = ["dragInputs", "scrollInputs", "priority"] as const;

const ScreenSpaceZoomCameraController = createCesiumComponent<
  CesiumScreenSpaceZoomCameraController,
  ScreenSpaceZoomCameraControllerProps
>({
  name: "ScreenSpaceZoomCameraController",
  create(context, props) {
    const element = new CesiumScreenSpaceZoomCameraController({
      dragInputs: props.dragInputs,
      scrollInputs: props.scrollInputs,
    });
    if (!registerController(context, element, props.priority)) return;
    return element;
  },
  destroy(element, context) {
    unregisterController(context, element);
  },
  cesiumProps,
  cesiumReadonlyProps,
  setCesiumPropsAfterCreate: true,
});

export default ScreenSpaceZoomCameraController;
