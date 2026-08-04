import type { ScreenSpaceInputBindings } from "cesium";
import { ScreenSpaceMapCameraController as CesiumScreenSpaceMapCameraController } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent, registerController, unregisterController } from "../core";

/*
@summary
`ScreenSpaceMapCameraController` pans the camera across the map, keeping the world
position picked at drag start under the pointer. It is one of the alternative camera
controllers added in Cesium 1.144, built on the composable `Controller` framework.

Cesium's built-in camera controller keeps handling input unless it is turned off, so
mount [ScreenSpaceCameraController](/components/ScreenSpaceCameraController) with
`enableInputs={false}` alongside this component.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
The controller is registered with the scene's `ControllerHost`.
*/

export type ScreenSpaceMapCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceMapCameraController,
  typeof cesiumProps
>;

export type ScreenSpaceMapCameraControllerCesiumReadonlyProps = {
  /**
   * Mouse button and optional keyboard modifier combinations that start a pan.
   * Bindings are attached once when the controller is registered, so changing this
   * prop re-creates the controller rather than mutating it in place.
   */
  dragInputs?: ScreenSpaceInputBindings.InputBinding[];
};

export type ScreenSpaceMapCameraControllerOtherProps = {
  /**
   * Precedence relative to other registered controllers. `0` applies before every
   * other controller; omitting it makes this controller the highest priority.
   * Changing this prop re-registers the controller.
   */
  priority?: number;
};

export type ScreenSpaceMapCameraControllerProps = ScreenSpaceMapCameraControllerCesiumProps &
  ScreenSpaceMapCameraControllerCesiumReadonlyProps &
  ScreenSpaceMapCameraControllerOtherProps;

const cesiumProps = [
  "enabled",
  "inertiaEnabled",
  "inertialDecay",
  "maximumMovementRatio",
  "panSpeed",
  "pickWorldPosition",
] as const;

const cesiumReadonlyProps = ["dragInputs", "priority"] as const;

const ScreenSpaceMapCameraController = createCesiumComponent<
  CesiumScreenSpaceMapCameraController,
  ScreenSpaceMapCameraControllerProps
>({
  name: "ScreenSpaceMapCameraController",
  create(context, props) {
    const element = new CesiumScreenSpaceMapCameraController({
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

export default ScreenSpaceMapCameraController;
