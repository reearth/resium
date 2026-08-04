import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import ScreenSpaceTiltOrbitCameraController from "../ScreenSpaceTiltOrbitCameraController";
import ScreenSpaceZoomCameraController from "../ScreenSpaceZoomCameraController";
import Viewer from "../Viewer";

import HybridScreenSpacePanCameraController from "./HybridScreenSpacePanCameraController";

type Story = StoryObj<typeof HybridScreenSpacePanCameraController>;

export default {
  title: "HybridScreenSpacePanCameraController",
  component: HybridScreenSpacePanCameraController,
} as Meta;

// Drag to pan. Looking mostly down pans across the map; tilt towards the horizon and the
// same drag pans vertically instead. `angleThreshold` is where it switches over.
export const Basic: Story = {
  args: { angleThreshold: CesiumMath.toRadians(45) },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 3000)}
        orientation={{ pitch: CesiumMath.toRadians(-45) }}
        duration={0}
      />
      <HybridScreenSpacePanCameraController {...args} />
    </Viewer>
  ),
};

// The controllers compose: pan, tilt/orbit and zoom can each be registered separately to
// build up a complete asset inspection camera. Mount order sets precedence — each
// controller registered later applies its updates on top of the earlier ones. Pass
// `priority` to override that.
export const CombinedInspectionCamera: Story = {
  args: { angleThreshold: CesiumMath.toRadians(45) },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(139.767, 35.681, 3000)}
        orientation={{ pitch: CesiumMath.toRadians(-45) }}
        duration={0}
      />
      <HybridScreenSpacePanCameraController {...args} />
      <ScreenSpaceTiltOrbitCameraController useDragPosition />
      <ScreenSpaceZoomCameraController usePointerPosition />
    </Viewer>
  ),
};
