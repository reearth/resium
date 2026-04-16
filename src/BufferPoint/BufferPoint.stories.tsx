import { Meta, StoryObj } from "@storybook/react";
import { BufferPointMaterial, Cartesian3, Color } from "cesium";

import BufferPointCollection from "../BufferPointCollection";
import Viewer from "../Viewer";

import BufferPoint from "./BufferPoint";

// Direct ECEF surface positions — no modelMatrix needed.
const p1 = Cartesian3.fromDegrees(-75.59777, 40.03883);
const p2 = Cartesian3.fromDegrees(-74.5, 40.03883);
const p3 = Cartesian3.fromDegrees(-75.59777, 40.8);
const p4 = Cartesian3.fromDegrees(-74.5, 40.8);

type Story = StoryObj<typeof BufferPoint>;

export default {
  title: "BufferPoint",
  component: BufferPoint,
} as Meta;

export const Basic: Story = {
  render: () => (
    <Viewer full>
      <BufferPointCollection primitiveCountMax={4}>
        <BufferPoint
          show
          position={p1}
          material={new BufferPointMaterial({ color: Color.ORANGE, size: 20 })}
        />
        <BufferPoint
          show
          position={p2}
          material={new BufferPointMaterial({ color: Color.YELLOW, size: 20 })}
        />
        <BufferPoint
          show
          position={p3}
          material={new BufferPointMaterial({ color: Color.GREEN, size: 20 })}
        />
        <BufferPoint
          show
          position={p4}
          material={new BufferPointMaterial({ color: Color.CYAN, size: 20 })}
        />
      </BufferPointCollection>
    </Viewer>
  ),
};
