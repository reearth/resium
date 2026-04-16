import { Meta, StoryObj } from "@storybook/react";
import { BufferPointMaterial, Cartesian3, Color, Transforms } from "cesium";

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
        <BufferPoint
          {...args}
          position={new Cartesian3(0, 0, 0)}
          material={new BufferPointMaterial({ color: Color.ORANGE, size: 20 })}
        />
        <BufferPoint
          {...args}
          position={new Cartesian3(1000000, 0, 0)}
          material={new BufferPointMaterial({ color: Color.YELLOW, size: 20 })}
        />
        <BufferPoint
          {...args}
          position={new Cartesian3(0, 1000000, 0)}
          material={new BufferPointMaterial({ color: Color.GREEN, size: 20 })}
        />
        <BufferPoint
          {...args}
          position={new Cartesian3(0, 0, 1000000)}
          material={new BufferPointMaterial({ color: Color.CYAN, size: 20 })}
        />
      </BufferPointCollection>
    </Viewer>
  ),
};
