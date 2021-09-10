import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import PointPrimitive, { PointPrimitiveProps } from "./PointPrimitive";
import PointPrimitiveCollection from "../PointPrimitiveCollection";
import { events } from "../core/storybook";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default {
  title: "PointPrimitive",
  component: PointPrimitive,
} as Meta;

export const Basic: Story<PointPrimitiveProps> = args => (
  <Viewer full>
    <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
      <PointPrimitive {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} />
      <PointPrimitive
        {...args}
        color={Color.YELLOW}
        position={new Cartesian3(1000000.0, 0.0, 0.0)}
      />
      <PointPrimitive
        {...args}
        color={Color.GREEN}
        position={new Cartesian3(0.0, 1000000.0, 0.0)}
      />
      <PointPrimitive {...args} color={Color.CYAN} position={new Cartesian3(0.0, 0.0, 1000000.0)} />
    </PointPrimitiveCollection>
  </Viewer>
);

export const Events: Story<PointPrimitiveProps> = args => (
  <Viewer full>
    <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
      <PointPrimitive
        {...args}
        color={Color.ORANGE}
        position={new Cartesian3(0.0, 0.0, 0.0)}
        {...events}
      />
    </PointPrimitiveCollection>
  </Viewer>
);
