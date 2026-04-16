import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Transforms } from "cesium";

import BufferPointCollection from "../BufferPointCollection";
import Viewer from "../Viewer";

import BufferPoint from "./BufferPoint";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

type Story = StoryObj<typeof BufferPoint>;

export default {
  title: "BufferPoint",
  component: BufferPoint,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <BufferPointCollection
        primitiveCountMax={4}
        modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}
      >
        <BufferPoint {...args} position={new Cartesian3(0, 0, 0)} />
        <BufferPoint {...args} position={new Cartesian3(1000000, 0, 0)} />
        <BufferPoint {...args} position={new Cartesian3(0, 1000000, 0)} />
        <BufferPoint {...args} position={new Cartesian3(0, 0, 1000000)} />
      </BufferPointCollection>
    </Viewer>
  ),
};
