import { Meta, StoryObj } from "@storybook/react";
import { BlendOption, BufferPolylineMaterial, Cartesian3, Color } from "cesium";

import BufferPolyline from "../BufferPolyline";
import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import BufferPolylineCollection from "./BufferPolylineCollection";

type Story = StoryObj<typeof BufferPolylineCollection>;

export default {
  title: "BufferPolylineCollection",
  component: BufferPolylineCollection,
} as Meta;

// Pack four world-space positions into a flat Float64Array (x, y, z per vertex).
const p1 = Cartesian3.fromDegrees(-95.4, 39.8);
const p2 = Cartesian3.fromDegrees(-94.6, 40.2);
const p3 = Cartesian3.fromDegrees(-94.6, 39.8);
const p4 = Cartesian3.fromDegrees(-95.4, 40.2);
const positions = new Float64Array([
  p1.x, p1.y, p1.z,
  p2.x, p2.y, p2.z,
  p3.x, p3.y, p3.z,
  p4.x, p4.y, p4.z,
]);
const vertexCount = positions.length / 3;

const opaqueMaterial = new BufferPolylineMaterial({ color: Color.CYAN, width: 5 });

export const Opaque: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount}>
        <BufferPolyline positions={positions} material={opaqueMaterial} />
      </BufferPolylineCollection>
    </Viewer>
  ),
};

/**
 * Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).
 * `blendOption` alone is invisible without an alpha-aware material; the
 * `BufferPolylineMaterial` here sets `color.alpha < 1` to actually produce
 * a translucent polyline.
 */
export const Translucent: Story = {
  render: () => {
    const translucentMaterial = new BufferPolylineMaterial({
      color: Color.RED.withAlpha(0.4),
      width: 6,
    });
    return (
      <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPolylineCollection
          primitiveCountMax={1}
          vertexCountMax={vertexCount}
          blendOption={BlendOption.OPAQUE_AND_TRANSLUCENT}>
          <BufferPolyline positions={positions} material={translucentMaterial} />
        </BufferPolylineCollection>
      </Viewer>
    );
  },
};
