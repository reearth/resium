import { Meta, StoryObj } from "@storybook/react";

import Viewer from "../Viewer";

import ScreenSpaceCameraController from "./ScreenSpaceCameraController";

type Story = StoryObj<typeof ScreenSpaceCameraController>;

export default {
  title: "ScreenSpaceCameraController",
  component: ScreenSpaceCameraController,
} as Meta;

export const Basic: Story = {
  args: {
    enableZoom: true,
    enableCollisionDetection: true,
    enableInputs: true,
    enableLook: true,
    enableRotate: true,
    enableTilt: true,
    enableTranslate: true,
  },
  render: args => (
    <Viewer full>
      <ScreenSpaceCameraController {...args} />
    </Viewer>
  ),
};
