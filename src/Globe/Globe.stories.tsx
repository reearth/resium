import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Globe, { GlobeProps } from "./Globe";

export default {
  title: "Globe",
  component: Globe,
} as Meta;

export const Basic: Story<GlobeProps> = args => (
  <Viewer full>
    <Globe
      {...args}
      onImageryLayersUpdate={action("onImageryLayersUpdate")}
      onTerrainProviderChange={action("onTerrainProviderChange")}
    />
  </Viewer>
);

Basic.args = { enableLighting: true };
