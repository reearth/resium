import { Meta, StoryObj } from "@storybook/react";
import { Color } from "cesium";

import Scene from "../Scene";
import Viewer from "../Viewer";

import SkyBox from "./SkyBox";

type Story = StoryObj<typeof SkyBox>;

export default {
  title: "SkyBox",
  component: SkyBox,
} as Meta;

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <Scene backgroundColor={Color.CORNFLOWERBLUE} />
      <SkyBox {...args} />
    </Viewer>
  ),
};
