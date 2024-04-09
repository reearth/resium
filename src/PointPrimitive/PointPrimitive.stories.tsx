import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Color, Transforms } from "cesium";

import { events } from "../core/storybook";
import PointPrimitiveCollection from "../PointPrimitiveCollection";
import Viewer from "../Viewer";

import PointPrimitive from "./PointPrimitive";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

type Story = StoryObj<typeof PointPrimitive>;

export default {
  title: "PointPrimitive",
  component: PointPrimitive,
} as Meta;

export const Basic: Story = {
  render: args => (
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
        <PointPrimitive
          {...args}
          color={Color.CYAN}
          position={new Cartesian3(0.0, 0.0, 1000000.0)}
        />
      </PointPrimitiveCollection>
    </Viewer>
  ),
};

export const Events: Story = {
  render: args => (
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
  ),
};
