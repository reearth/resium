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
export const Basic: Story = {
  args: { panSpeed: 1, inertiaEnabled: true },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 3000)}
        orientation={{ pitch: CesiumMath.toRadians(-45) }}
        duration={0}
      />
      <ScreenSpaceElevatorCameraController {...args} />
    </Viewer>
  ),
};
