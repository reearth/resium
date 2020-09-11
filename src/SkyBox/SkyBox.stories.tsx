import React from "react";
import { Color } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Scene from "../Scene";
import SkyBox, { SkyBoxProps } from "./SkyBox";

export default {
  title: "SkyBox",
  component: SkyBox,
} as Meta;

export const Basic: Story<SkyBoxProps> = args => (
  <Viewer full>
    <Scene backgroundColor={Color.CORNFLOWERBLUE} />
    <SkyBox {...args} />
  </Viewer>
);

Basic.args = { show: true };
