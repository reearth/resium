import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Cartesian3, Color, Transforms } from "cesium";

import Viewer from "../Viewer";
import Billboard, { BillboardProps } from "./Billboard";
import BillboardCollection from "../BillboardCollection";
import exampleImage from "assets/example.png";
import { actions } from "@storybook/addon-actions";

export default {
  title: "Billboard",
  component: BillboardCollection,
} as Meta;

const Template: Story<BillboardProps> = args => (
  <Viewer full>
    <BillboardCollection
      modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
      {([
        [Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)],
        [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)],
        [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)],
        [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)],
      ] as const).map((p, i) => (
        <Billboard key={i} {...args} color={p[0]} position={p[1]} />
      ))}
    </BillboardCollection>
  </Viewer>
);

export const Basic = Template.bind({});
Basic.args = {
  image: exampleImage,
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
  image: exampleImage,
  scale: 0.1,
};

const events = actions(
  "onClick",
  "onDoubleClick",
  "onMouseDown",
  "onMouseUp",
  "onMiddleClick",
  "onMiddleDown",
  "onMiddleUp",
  "onMouseMove",
  "onPinchEnd",
  "onPinchMove",
  "onPinchStart",
  "onRightClick",
  "onRightDown",
  "onRightUp",
  "onMouseEnter",
  "onMouseLeave",
);
