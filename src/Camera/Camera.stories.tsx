import React from "react";
import { Cartesian3 } from "cesium";
import { Story, Meta } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import CameraFlyTo from "../CameraFlyTo";
import Camera, { CameraProps } from "./Camera";

export default {
  title: "Camera",
  component: Camera,
} as Meta;

export const Basic: Story<CameraProps> = args => (
  <Viewer full>
    <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
    <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
  </Viewer>
);
