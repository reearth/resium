import { HybridScreenSpacePanCameraController as CesiumHybridScreenSpacePanCameraController } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent, registerController, unregisterController } from "../core";

/*
@summary
`HybridScreenSpacePanCameraController` combines map panning and elevator panning, and
switches between them based on how far the camera is looking from nadir. Looking mostly
down pans across the map; looking towards the horizon pans vertically. It is one of the
alternative camera controllers added in Cesium 1.144, built on the composable
`Controller` framework.

Use `angleThreshold` to move the switch-over point. The two controllers it delegates to
are reachable as `elevatorController` and `mapController` on the Cesium instance, via a
ref, if you need to tune them individually.

Cesium's built-in camera controller keeps handling input unless it is turned off, so
mount [ScreenSpaceCameraController](/components/ScreenSpaceCameraController) with
`enableInputs={false}` and `enableCollisionDetection={false}` alongside this component.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
The controller is registered with the scene's `ControllerHost`.
*/

export type HybridScreenSpacePanCameraControllerCesiumProps = PickCesiumProps<
  CesiumHybridScreenSpacePanCameraController,
  typeof cesiumProps
>;

export type HybridScreenSpacePanCameraControllerOtherProps = {
  /**
   * Precedence relative to other registered controllers. `0` applies before every
   * other controller; omitting it makes this controller the highest priority.
   * Changing this prop re-registers the controller.
   */
  priority?: number;
};

export type HybridScreenSpacePanCameraControllerProps =
  HybridScreenSpacePanCameraControllerCesiumProps &
    HybridScreenSpacePanCameraControllerOtherProps;

const cesiumProps = ["angleThreshold", "enabled"] as const;

const cesiumReadonlyProps = ["priority"] as const;

const HybridScreenSpacePanCameraController = createCesiumComponent<
  CesiumHybridScreenSpacePanCameraController,
  HybridScreenSpacePanCameraControllerProps
>({
  name: "HybridScreenSpacePanCameraController",
  create(context, props) {
    const element = new CesiumHybridScreenSpacePanCameraController();
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

export default HybridScreenSpacePanCameraController;
