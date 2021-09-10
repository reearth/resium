import { Meta, Story } from "@storybook/react";
import React, { Cartesian3, Color, Transforms } from "cesium";

import { events } from "../core/storybook";
import Viewer from "../Viewer";
import Billboard, { BillboardProps } from "./Billboard";
import BillboardCollection from "../BillboardCollection";

export default {
  title: "Billboard",
  component: BillboardCollection,
} as Meta;

const Template: Story<BillboardProps> = args => (
  <Viewer full>
    <BillboardCollection
      modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
      {(
        [
          [Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)],
          [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)],
          [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)],
          [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)],
        ] as const
      ).map((p, i) => (
        <Billboard key={i} {...args} color={p[0]} position={p[1]} />
      ))}
    </BillboardCollection>
  </Viewer>
);

export const Basic = Template.bind({});

Basic.args = {
  image: "example.png",
  scale: 0.1,
};

export const Events: Story<BillboardProps> = args => (
  <Viewer full>
    <BillboardCollection
      modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
      <Billboard
        {...args}
        color={Color.ORANGE}
        position={new Cartesian3(0.0, 0.0, 0.0)}
        {...events}
      />
    </BillboardCollection>
  </Viewer>
);

Events.args = {
  image: "example.png",
  scale: 0.1,
};
