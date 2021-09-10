import React from "react";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Sun, { SunProps } from "./Sun";

export default {
  title: "Sun",
  component: Sun,
} as Meta;

export const Basic: Story<SunProps> = args => (
  <Viewer full>
    <Sun {...args} />
  </Viewer>
);

Basic.args = { glowFactor: 2, show: true };
