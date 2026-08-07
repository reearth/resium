import type { ScreenSpaceInputBindings } from "cesium";
import { ScreenSpaceElevatorCameraController as CesiumScreenSpaceElevatorCameraController } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent, registerController, unregisterController } from "../core";

/*
@summary
`ScreenSpaceElevatorCameraController` pans the camera vertically, as if riding an
elevator, which suits inspecting the facade of a building or another tall asset. It is
one of the alternative camera controllers added in Cesium 1.144, built on the composable
`Controller` framework.

Cesium's built-in camera controller keeps handling input unless it is turned off, so
mount [ScreenSpaceCameraController](/components/ScreenSpaceCameraController) with
`enableInputs={false}` alongside this component. Vertical panning also moves the camera
towards geometry, so `enableCollisionDetection={false}` is usually wanted too.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
The controller is registered with the scene's `ControllerHost`.
*/

export type ScreenSpaceElevatorCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceElevatorCameraController,
  typeof cesiumProps
>;

export type ScreenSpaceElevatorCameraControllerCesiumReadonlyProps = {
  /**
   * Mouse button and optional keyboard modifier combinations that start a vertical pan.
   * Bindings are attached once when the controller is registered, so changing this
   * prop re-creates the controller rather than mutating it in place.
   */
  dragInputs?: ScreenSpaceInputBindings.InputBinding[];
};

export type ScreenSpaceElevatorCameraControllerOtherProps = {
  /**
   * Precedence relative to other registered controllers. `0` applies before every
   * other controller; omitting it makes this controller the highest priority.
   * Changing this prop re-registers the controller.
   */
  priority?: number;
};

export type ScreenSpaceElevatorCameraControllerProps =
  ScreenSpaceElevatorCameraControllerCesiumProps &
    ScreenSpaceElevatorCameraControllerCesiumReadonlyProps &
    ScreenSpaceElevatorCameraControllerOtherProps;

const cesiumProps = [
  "enabled",
  "inertiaEnabled",
  "inertialDecay",
  "maximumMovementRatio",
  "panSpeed",
  "pickWorldPosition",
] as const;

const cesiumReadonlyProps = ["dragInputs", "priority"] as const;

const ScreenSpaceElevatorCameraController = createCesiumComponent<
  CesiumScreenSpaceElevatorCameraController,
  ScreenSpaceElevatorCameraControllerProps
>({
  name: "ScreenSpaceElevatorCameraController",
  create(context, props) {
    const element = new CesiumScreenSpaceElevatorCameraController({
      dragInputs: props.dragInputs,
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

export default ScreenSpaceElevatorCameraController;
