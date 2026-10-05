import { Meta, StoryObj } from "@storybook/react";
import { BlendOption, BufferPolygonMaterial, Cartesian3, Color, HeightReference } from "cesium";

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

// The same triangle, but with its vertices lifted 40 km off the ellipsoid. Under
// the default `heightReference` this floats in space; under a clamping value the
// whole collection is draped onto the surface instead, which is what makes the
// prop's effect visible without a terrain provider.
const hp1 = Cartesian3.fromDegrees(-95.4, 39.8, 40_000);
const hp2 = Cartesian3.fromDegrees(-94.6, 39.8, 40_000);
const hp3 = Cartesian3.fromDegrees(-95.0, 40.2, 40_000);
const highPositions = new Float64Array([
  hp1.x, hp1.y, hp1.z,
  hp2.x, hp2.y, hp2.z,
  hp3.x, hp3.y, hp3.z,
]);

/**
 * Draping — demonstrates the `heightReference` ctor prop (Cesium 1.145+). The
 * polygon's vertices sit 40 km above the ellipsoid, but
 * `HeightReference.CLAMP_TO_GROUND` drapes the collection onto the surface
 * rather than drawing it as geometry of its own, so it renders flat on the
 * globe instead of floating.
 *
 * Draping is a whole-collection decision fixed at construction time, not a
 * per-primitive one. With a real terrain or 3D Tiles provider mounted,
 * `CLAMP_TO_TERRAIN` / `CLAMP_TO_3D_TILE` target those surfaces specifically;
 * `CLAMP_TO_GROUND` targets both. Compare against `Opaque` (no draping, but
 * vertices already at height 0) to see the wrapper prop taking effect.
 */
export const Draped: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 400_000)} duration={0} />
      <BufferPolygonCollection
        primitiveCountMax={1}
        vertexCountMax={vertexCount}
        triangleCountMax={triangleCount}
        heightReference={HeightReference.CLAMP_TO_GROUND}>
        <BufferPolygon
          positions={highPositions}
          triangles={triangles}
          material={new BufferPolygonMaterial({ color: Color.ORANGE })}
        />
      </BufferPolygonCollection>
    </Viewer>
  ),
};
