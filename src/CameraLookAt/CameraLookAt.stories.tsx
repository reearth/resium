import { StoryObj, Meta } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Viewer from "../Viewer";

import CameraLookAt from "./CameraLookAt";

type Story = StoryObj<typeof CameraLookAt>;

export default {
  title: "CameraLookAt",
  component: CameraLookAt,
} as Meta;

export const Basic: Story = {
  args: {
    target: Cartesian3.fromDegrees(-123.0744619, 44.0503706, 50),
    offset: new Cartesian3(30, 30, -10),
  },
  render: args => (
    <Viewer full>
      <CameraLookAt {...args} />
    </Viewer>
  ),
};
