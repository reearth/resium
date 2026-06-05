import { Meta, StoryObj } from "@storybook/react";
import { BlendOption, BufferPolygonMaterial, Cartesian3, Color } from "cesium";

import BufferPolygon from "../BufferPolygon";
import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import BufferPolygonCollection from "./BufferPolygonCollection";

type Story = StoryObj<typeof BufferPolygonCollection>;

export default {
  title: "BufferPolygonCollection",
  component: BufferPolygonCollection,
} as Meta;

// Pack three world-space positions into a flat Float64Array (x, y, z per vertex)
// and provide a triangle index buffer — BufferPolygon needs both to render.
const p1 = Cartesian3.fromDegrees(-95.4, 39.8, 0);
const p2 = Cartesian3.fromDegrees(-94.6, 39.8, 0);
const p3 = Cartesian3.fromDegrees(-95.0, 40.2, 0);
const positions = new Float64Array([p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z]);
const triangles = new Uint32Array([0, 1, 2]);
const vertexCount = positions.length / 3;
const triangleCount = triangles.length;

export const Opaque: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolygonCollection
        primitiveCountMax={1}
        vertexCountMax={vertexCount}
        triangleCountMax={triangleCount}>
        <BufferPolygon
          positions={positions}
          triangles={triangles}
          material={new BufferPolygonMaterial({ color: Color.CYAN })}
        />
      </BufferPolygonCollection>
    </Viewer>
  ),
};

/**
 * Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).
 * `blendOption` alone is invisible without an alpha-aware material; the
 * `BufferPolygonMaterial` here sets `color.alpha < 1` to actually produce
 * a translucent polygon.
 */
export const Translucent: Story = {
  render: () => {
    const translucentMaterial = new BufferPolygonMaterial({
      color: Color.BLUE.withAlpha(0.3),
    });
    return (
      <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPolygonCollection
          primitiveCountMax={1}
          vertexCountMax={vertexCount}
          triangleCountMax={triangleCount}
          blendOption={BlendOption.OPAQUE_AND_TRANSLUCENT}>
          <BufferPolygon
            positions={positions}
            triangles={triangles}
            material={translucentMaterial}
          />
        </BufferPolygonCollection>
      </Viewer>
    );
  },
};
