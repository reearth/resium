import { actions } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";
import { StrictMode } from "react";

import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import Camera from "./Camera";

type Story = StoryObj<typeof Camera>;

export default {
  title: "Camera",
  component: Camera,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
  ),
};

export const Strict: Story = {
  render: args => (
    <StrictMode>
      <Viewer full>
        <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
        <CameraFlyTo
          duration={5}
          destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        />
      </Viewer>
    </StrictMode>
  ),
};
