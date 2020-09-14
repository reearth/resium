import React from "react";
import { Cartesian3 } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer, { ViewerProps } from "./Viewer";
import Entity from "../Entity";
import { events } from "../core/storybook";

export default {
  title: "Viewer",
  component: Viewer,
} as Meta;

export const Basic: Story<ViewerProps> = args => <Viewer {...args} full />;

export const Events: Story<ViewerProps> = args => (
  <Viewer {...args} full {...events}>
    <Entity
      name="test"
      description="test!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      point={{ pixelSize: 10 }}
    />
  </Viewer>
);
