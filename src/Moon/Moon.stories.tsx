import React from "react";
import { Meta, Story } from "@storybook/react";
import { Ellipsoid, Math as CesiumMath } from "cesium";

import Viewer from "../Viewer";
import Moon, { MoonProps } from "./Moon";

export default {
  title: "Moon",
  component: Moon,
} as Meta;

export const Basic: Story<MoonProps & { radius: number }> = args => (
  <Viewer full>
    <Moon
      {...args}
      ellipsoid={
        new Ellipsoid(
          CesiumMath.LUNAR_RADIUS * args.radius,
          CesiumMath.LUNAR_RADIUS * args.radius,
          CesiumMath.LUNAR_RADIUS * args.radius,
        )
      }
    />
  </Viewer>
);

Basic.args = {
  show: true,
  radius: 10,
};
