import React from "react";
import { SceneMode } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Scene, { SceneProps } from "./Scene";

export default {
  title: "Scene",
  component: Scene,
} as Meta;

export const Basic: Story<SceneProps> = args => (
  <Viewer full>
    <Scene {...args} mode={SceneMode.SCENE2D} morphDuration={10} />
  </Viewer>
);
