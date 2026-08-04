import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import ScreenSpaceTiltOrbitCameraController from "./ScreenSpaceTiltOrbitCameraController";

type Story = StoryObj<typeof ScreenSpaceTiltOrbitCameraController>;

export default {
  title: "ScreenSpaceTiltOrbitCameraController",
  component: ScreenSpaceTiltOrbitCameraController,
} as Meta;

// Drag with the right mouse button to tilt and orbit. `useDragPosition` pivots around
// the position under the pointer instead of the center of the screen.
export const Basic: Story = {
  args: { tiltEnabled: true, orbitEnabled: true, useDragPosition: true, dampingEnabled: true },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 3000)}
        orientation={{ pitch: CesiumMath.toRadians(-45) }}
        duration={0}
      />
      <ScreenSpaceTiltOrbitCameraController {...args} />
    </Viewer>
  ),
};
