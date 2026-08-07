import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import ScreenSpaceMapCameraController from "./ScreenSpaceMapCameraController";

type Story = StoryObj<typeof ScreenSpaceMapCameraController>;

export default {
  title: "ScreenSpaceMapCameraController",
  component: ScreenSpaceMapCameraController,
} as Meta;

// Drag to pan across the map. The world position picked when the drag starts stays
// under the pointer.
//
// Starts looking straight down, which is the regime this controller is built for —
// panning reads as sliding a map around underneath you.
export const Basic: Story = {
  args: { panSpeed: 1, inertiaEnabled: true, inertialDecay: 0.9 },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 6000)}
        orientation={{ pitch: CesiumMath.toRadians(-90) }}
        duration={0}
      />
      <ScreenSpaceMapCameraController {...args} />
    </Viewer>
  ),
};
