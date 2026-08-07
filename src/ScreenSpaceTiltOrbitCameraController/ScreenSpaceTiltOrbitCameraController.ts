import type { ScreenSpaceInputBindings } from "cesium";
import { ScreenSpaceTiltOrbitCameraController as CesiumScreenSpaceTiltOrbitCameraController } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent, registerController, unregisterController } from "../core";

/*
@summary
`ScreenSpaceTiltOrbitCameraController` tilts and orbits the camera around a pivot, which
suits inspecting an asset from every side. It is one of the alternative camera controllers
added in Cesium 1.144, built on the composable `Controller` framework.

By default the pivot is the position at the center of the screen; set
`useDragPosition` to orbit around the position under the pointer when the drag starts.

Cesium's built-in camera controller keeps handling input unless it is turned off, so
mount [ScreenSpaceCameraController](/components/ScreenSpaceCameraController) with
`enableInputs={false}` and `enableCollisionDetection={false}` alongside this component.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
The controller is registered with the scene's `ControllerHost`.
*/

export type ScreenSpaceTiltOrbitCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceTiltOrbitCameraController,
  typeof cesiumProps
>;

export type ScreenSpaceTiltOrbitCameraControllerCesiumReadonlyProps = {
  /**
   * Mouse button and optional keyboard modifier combinations that start a tilt or
   * orbit. Bindings are attached once when the controller is registered, so changing
   * this prop re-creates the controller rather than mutating it in place.
   */
  dragInputs?: ScreenSpaceInputBindings.InputBinding[];
};

export type ScreenSpaceTiltOrbitCameraControllerOtherProps = {
  /**
   * Precedence relative to other registered controllers. `0` applies before every
   * other controller; omitting it makes this controller the highest priority.
   * Changing this prop re-registers the controller.
   */
  priority?: number;
};

export type ScreenSpaceTiltOrbitCameraControllerProps =
  ScreenSpaceTiltOrbitCameraControllerCesiumProps &
    ScreenSpaceTiltOrbitCameraControllerCesiumReadonlyProps &
    ScreenSpaceTiltOrbitCameraControllerOtherProps;

const cesiumProps = [
  "dampingEnabled",
  "enabled",
  "maximumMovementRatio",
  "maximumOrbitVelocity",
  "maximumTiltVelocity",
  "orbitAnimationDuration",
  "orbitEnabled",
  "orbitMagnitude",
  "pickWorldPosition",
  "tiltAnimationDuration",
  "tiltEnabled",
  "tiltMagnitude",
  "useDragPosition",
] as const;

const cesiumReadonlyProps = ["dragInputs", "priority"] as const;

const ScreenSpaceTiltOrbitCameraController = createCesiumComponent<
  CesiumScreenSpaceTiltOrbitCameraController,
  ScreenSpaceTiltOrbitCameraControllerProps
>({
  name: "ScreenSpaceTiltOrbitCameraController",
  create(context, props) {
    const element = new CesiumScreenSpaceTiltOrbitCameraController({
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

export default ScreenSpaceTiltOrbitCameraController;
