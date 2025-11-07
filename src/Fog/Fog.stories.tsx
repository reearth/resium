import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import Fog from "./Fog";

type Story = StoryObj<typeof Fog>;

export default {
  title: "Fog",
  component: Fog,
} as Meta;

export const Basic: Story = {
  args: { enabled: true },
  render: args => (
    <Viewer full>
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(0, 0, 10000)}
        orientation={{ pitch: CesiumMath.toRadians(0) }}
        duration={0}
      />
      <Fog {...args} />
    </Viewer>
  ),
};
