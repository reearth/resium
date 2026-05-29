import { Meta, StoryObj } from "@storybook/react";
import { BufferPolygonMaterial, Cartesian3, Color } from "cesium";

import BufferPolygonCollection from "../BufferPolygonCollection";
import Viewer from "../Viewer";

import BufferPolygon from "./BufferPolygon";

// Triangle polygon: three vertices packed as flat Float64Array (x, y, z per vertex)
const p1 = Cartesian3.fromDegrees(-75.59777, 40.03883, 0);
const p2 = Cartesian3.fromDegrees(-74.5, 40.03883, 0);
const p3 = Cartesian3.fromDegrees(-75.0, 40.5, 0);
const positions = new Float64Array([p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z]);
// One triangle: indices into positions array
const triangles = new Uint32Array([0, 1, 2]);

type Story = StoryObj<typeof BufferPolygon>;

export default {
  title: "BufferPolygon",
  component: BufferPolygon,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <BufferPolygonCollection
        primitiveCountMax={1}
        vertexCountMax={3}
        triangleCountMax={3}
      >
        <BufferPolygon
          {...args}
          positions={positions}
          triangles={triangles}
          material={new BufferPolygonMaterial({ color: Color.CYAN })}
        />
      </BufferPolygonCollection>
    </Viewer>
  ),
};
