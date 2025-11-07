import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Color, Transforms } from "cesium";

import BillboardCollection from "../BillboardCollection";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Billboard from "./Billboard";

type Story = StoryObj<typeof Billboard>;

export default {
  title: "Billboard",
  component: BillboardCollection,
} as Meta;

export const Basic: Story = {
  args: {
    image: "example.png",
    scale: 0.1,
  },
  render: args => (
    <Viewer full>
      <BillboardCollection
        modelMatrix={Transforms.eastNorthUpToFixedFrame(
          Cartesian3.fromDegrees(-75.59777, 40.03883),
        )}>
        {(
          [
            [Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)],
            [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)],
            [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)],
            [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)],
          ] as const
        ).map((p, i) => (
          <Billboard key={i} id={`billboard-${i}`} {...args} color={p[0]} position={p[1]} />
        ))}
      </BillboardCollection>
    </Viewer>
  ),
};

export const Events: Story = {
  args: {
    image: "example.png",
    scale: 0.1,
  },
  render: args => (
    <Viewer full>
      <BillboardCollection
        modelMatrix={Transforms.eastNorthUpToFixedFrame(
          Cartesian3.fromDegrees(-75.59777, 40.03883),
        )}>
        <Billboard
          {...args}
          color={Color.ORANGE}
          position={new Cartesian3(0.0, 0.0, 0.0)}
          {...events}
        />
      </BillboardCollection>
    </Viewer>
  ),
};
