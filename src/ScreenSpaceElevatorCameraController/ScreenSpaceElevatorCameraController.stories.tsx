import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import ScreenSpaceElevatorCameraController from "./ScreenSpaceElevatorCameraController";

type Story = StoryObj<typeof ScreenSpaceElevatorCameraController>;

export default {
  title: "ScreenSpaceElevatorCameraController",
  component: ScreenSpaceElevatorCameraController,
} as Meta;

// Drag to move the camera vertically, as if riding an elevator.
//
// Starts low and looking towards the horizon, which is where riding up and down is
// legible. From a near-nadir view the same drag barely changes what you see, so this
// story deliberately uses a shallow pitch rather than the overhead one the map
// controller's story uses.
export const Basic: Story = {
  args: { panSpeed: 10, inertiaEnabled: true },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 1200)}
        orientation={{ pitch: CesiumMath.toRadians(-12) }}
        duration={0}
      />
      <ScreenSpaceElevatorCameraController {...args} />
    </Viewer>
  ),
};
