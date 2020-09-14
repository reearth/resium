import React from "react";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import SkyAtmosphere, { SkyAtmosphereProps } from "./SkyAtmosphere";

export default {
  title: "SkyAtmosphere",
  component: SkyAtmosphere,
} as Meta;

export const Basic: Story<SkyAtmosphereProps> = args => (
  <Viewer full>
    <SkyAtmosphere {...args} hueShift={1} saturationShift={1} />
  </Viewer>
);
