import React from "react";
import { Cartesian3, Math as CesiumMath } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Fog, { FogProps } from "./Fog";
import CameraFlyTo from "../CameraFlyTo";

export default {
  title: "Fog",
  component: Fog,
} as Meta;

export const Basic: Story<FogProps> = args => (
  <Viewer full>
    <CameraFlyTo
      destination={Cartesian3.fromDegrees(0, 0, 10000)}
      orientation={{ pitch: CesiumMath.toRadians(0) }}
      duration={0}
    />
    <Fog {...args} />
  </Viewer>
);

Basic.args = { enabled: true };
