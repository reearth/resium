import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import ScreenSpaceZoomCameraController from "./ScreenSpaceZoomCameraController";

type Story = StoryObj<typeof ScreenSpaceZoomCameraController>;

export default {
  title: "ScreenSpaceZoomCameraController",
  component: ScreenSpaceZoomCameraController,
} as Meta;

// Scroll to zoom towards the position under the pointer.
export const Basic: Story = {
  args: { zoomSensitivity: 1, usePointerPosition: true, inertiaEnabled: true },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 3000)}
        orientation={{ pitch: CesiumMath.toRadians(-45) }}
        duration={0}
      />
      <ScreenSpaceZoomCameraController {...args} />
    </Viewer>
  ),
};
