import { Meta, StoryObj } from "@storybook/react";
import { SceneMode } from "cesium";

import Viewer from "../Viewer";

import Scene from "./Scene";

type Story = StoryObj<typeof Scene>;

export default {
  title: "Scene",
  component: Scene,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <Scene {...args} mode={SceneMode.SCENE2D} morphDuration={10} />
    </Viewer>
  ),
};
