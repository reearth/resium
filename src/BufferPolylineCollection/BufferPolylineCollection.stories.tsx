import { Meta, StoryObj } from "@storybook/react";
import { BlendOption, BufferPolylineMaterial, Cartesian3, Color, HeightReference } from "cesium";

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

// The same four positions, lifted 40 km off the ellipsoid. Under the default
// `heightReference` this floats in space; under a clamping value the whole
// collection is draped onto the surface instead, which is what makes the prop's
// effect visible without a terrain provider.
const hp1 = Cartesian3.fromDegrees(-95.4, 39.8, 40_000);
const hp2 = Cartesian3.fromDegrees(-94.6, 40.2, 40_000);
const hp3 = Cartesian3.fromDegrees(-94.6, 39.8, 40_000);
const hp4 = Cartesian3.fromDegrees(-95.4, 40.2, 40_000);
const highPositions = new Float64Array([
  hp1.x, hp1.y, hp1.z,
  hp2.x, hp2.y, hp2.z,
  hp3.x, hp3.y, hp3.z,
  hp4.x, hp4.y, hp4.z,
]);

/**
 * Draping — demonstrates the `heightReference` ctor prop (Cesium 1.145+). The
 * polyline vertices sit 40 km above the ellipsoid, but
 * `HeightReference.CLAMP_TO_GROUND` drapes the collection onto the surface
 * rather than drawing it as geometry of its own, so the lines render on the
 * globe instead of floating above it.
 *
 * Draping is a whole-collection decision fixed at construction time, not a
 * per-primitive one. With a real terrain or 3D Tiles provider mounted,
 * `CLAMP_TO_TERRAIN` / `CLAMP_TO_3D_TILE` target those surfaces specifically;
 * `CLAMP_TO_GROUND` targets both.
 */
export const Draped: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 400_000)} duration={0} />
      <BufferPolylineCollection
        primitiveCountMax={1}
        vertexCountMax={vertexCount}
        heightReference={HeightReference.CLAMP_TO_GROUND}>
        <BufferPolyline
          positions={highPositions}
          material={new BufferPolylineMaterial({ color: Color.ORANGE, width: 5 })}
        />
      </BufferPolylineCollection>
    </Viewer>
  ),
};

/**
 * World-space line width — demonstrates the `widthUnits` ctor prop (Cesium
 * 1.145+). The default `"pixels"` keeps a polyline the same thickness on screen
 * at any zoom; `"meters"` measures the width in world space instead, so the
 * line grows as you zoom in and shrinks as you zoom out.
 *
 * The `width` still lives on the `BufferPolylineMaterial` — `widthUnits` only
 * changes how that number is interpreted, so the 2 000 here reads as 2 km
 * rather than an unusable 2 000 px. Zoom the camera to see the difference
 * against `Opaque`, which uses the pixel default.
 */
export const WidthInMeters: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolylineCollection
        primitiveCountMax={1}
        vertexCountMax={vertexCount}
        widthUnits="meters">
        <BufferPolyline
          positions={positions}
          material={new BufferPolylineMaterial({ color: Color.MAGENTA, width: 2_000 })}
        />
      </BufferPolylineCollection>
    </Viewer>
  ),
};
