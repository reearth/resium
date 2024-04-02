import { Meta, StoryObj } from "@storybook/react";
import { Ellipsoid, Math as CesiumMath } from "cesium";

import Viewer from "../Viewer";

import Moon from "./Moon";

type Story = StoryObj<typeof Moon>;

export default {
  title: "Moon",
  component: Moon,
} as Meta;

export const Basic: Story = {
  args: {
    show: true,
  },
  render: args => {
    const radius = 10;
    return (
      <Viewer full>
        <Moon
          {...args}
          ellipsoid={
            new Ellipsoid(
              CesiumMath.LUNAR_RADIUS * radius,
              CesiumMath.LUNAR_RADIUS * radius,
              CesiumMath.LUNAR_RADIUS * radius,
            )
          }
        />
      </Viewer>
    );
  },
};
