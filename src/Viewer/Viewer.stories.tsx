import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";

import { events } from "../core/storybook";
import Entity from "../Entity";

import Viewer from "./Viewer";

type Story = StoryObj<typeof Viewer>;

export default {
  title: "Viewer",
  component: Viewer,
} as Meta;

export const Basic: Story = {
  render: args => <Viewer {...args} full />,
};

export const Events: Story = {
  render: args => (
    <Viewer {...args} full {...events}>
      <Entity
        name="test"
        description="test!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
      />
    </Viewer>
  ),
};
