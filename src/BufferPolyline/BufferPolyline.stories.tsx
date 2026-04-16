import { Meta, StoryObj } from "@storybook/react";
import { BufferPolylineMaterial, Cartesian3, Color } from "cesium";

import BufferPolylineCollection from "../BufferPolylineCollection";
import Viewer from "../Viewer";

import BufferPolyline from "./BufferPolyline";

// Pack two world-space positions into a flat Float64Array (x, y, z per vertex)
const p1 = Cartesian3.fromDegrees(-75.59777, 40.03883, 0);
const p2 = Cartesian3.fromDegrees(-74.0, 40.5, 0);
const positions = new Float64Array([p1.x, p1.y, p1.z, p2.x, p2.y, p2.z]);

type Story = StoryObj<typeof BufferPolyline>;

export default {
  title: "BufferPolyline",
  component: BufferPolyline,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={2}>
        <BufferPolyline
          {...args}
          positions={positions}
          material={new BufferPolylineMaterial({ color: Color.YELLOW, width: 5 })}
        />
      </BufferPolylineCollection>
    </Viewer>
  ),
};
