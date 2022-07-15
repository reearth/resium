import { Meta, Story } from "@storybook/react";
import { Cartesian3, Math as CesiumMath } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import Fog, { FogProps } from "./Fog";

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
