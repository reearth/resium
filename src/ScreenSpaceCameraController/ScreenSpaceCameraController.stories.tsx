import React from "react";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import ScreenSpaceCameraController, {
  ScreenSpaceCameraControllerProps,
} from "./ScreenSpaceCameraController";

export default {
  title: "ScreenSpaceCameraController",
  component: ScreenSpaceCameraController,
} as Meta;

export const Basic: Story<ScreenSpaceCameraControllerProps> = args => (
  <Viewer full>
    <ScreenSpaceCameraController {...args} />
  </Viewer>
);

Basic.args = {
  enableZoom: true,
  enableCollisionDetection: true,
  enableInputs: true,
  enableLook: true,
  enableRotate: true,
  enableTilt: true,
  enableTranslate: true,
};
