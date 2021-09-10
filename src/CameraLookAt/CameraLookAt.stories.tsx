import React from "react";
import { Cartesian3 } from "cesium";
import { Story, Meta } from "@storybook/react";

import Viewer from "../Viewer";
import CameraLookAt, { CameraLookAtProps } from "./CameraLookAt";

export default {
  title: "CameraLookAt",
  component: CameraLookAt,
} as Meta;

export const Basic: Story<CameraLookAtProps> = args => (
  <Viewer full>
    <CameraLookAt {...args} />
  </Viewer>
);

Basic.args = {
  target: Cartesian3.fromDegrees(-123.0744619, 44.0503706, 50),
  offset: new Cartesian3(30, 30, -10),
};
