import { Meta, StoryObj } from "@storybook/react";
import type { BufferPointCollection as CesiumBufferPointCollection } from "cesium";
import { BlendOption, BufferPointMaterial, Cartesian3, Color } from "cesium";
import { useEffect, useRef } from "react";

import BufferPoint from "../BufferPoint";
import CameraFlyTo from "../CameraFlyTo";
import type { CesiumComponentRef } from "../core";
import Viewer from "../Viewer";

import BufferPointCollection from "./BufferPointCollection";

type Story = StoryObj<typeof BufferPointCollection>;

export default {
  title: "BufferPointCollection",
  component: BufferPointCollection,
} as Meta;

const positions = Array.from({ length: 50 }, (_, i) => {
  const angle = (i / 50) * 2 * Math.PI;
  return Cartesian3.fromDegrees(-95.0 + 0.3 * Math.cos(angle), 40.0 + 0.3 * Math.sin(angle));
});

const opaqueMaterial = new BufferPointMaterial({ color: Color.CYAN, size: 12 });

export const Opaque: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPointCollection primitiveCountMax={positions.length}>
        {positions.map((position, i) => (
          <BufferPoint key={i} position={position} material={opaqueMaterial} />
        ))}
      </BufferPointCollection>
    </Viewer>
  ),
};

// Buffer collections support only OPAQUE and TRANSLUCENT; Cesium rejects
// OPAQUE_AND_TRANSLUCENT.
const blendOptionLabels = {
  [BlendOption.OPAQUE]: "OPAQUE",
  [BlendOption.TRANSLUCENT]: "TRANSLUCENT",
};

/**
 * Translucent variant — demonstrates the `blendOption` prop. Since Cesium 1.146 it
 * can be changed on a live collection: flip the control between OPAQUE and
 * TRANSLUCENT and the same collection re-blends without being re-created.
 * `blendOption` alone is invisible without an alpha-aware material; the
 * `BufferPointMaterial` here sets `color.alpha < 1` and `outlineColor.alpha < 1`
 * to actually produce translucent points.
 */
export const Translucent: Story = {
  args: { blendOption: BlendOption.TRANSLUCENT },
  argTypes: {
    blendOption: {
      control: { type: "select", labels: blendOptionLabels },
      options: [BlendOption.OPAQUE, BlendOption.TRANSLUCENT],
    },
  },
  render: ({ blendOption }) => {
    const translucentMaterial = new BufferPointMaterial({
      color: Color.RED.withAlpha(0.35),
      outlineColor: Color.YELLOW.withAlpha(0.6),
      outlineWidth: 2,
      size: 16,
    });
    return (
      <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPointCollection
          primitiveCountMax={positions.length}
          blendOption={blendOption}>
          {positions.map((position, i) => (
            <BufferPoint key={i} position={position} material={translucentMaterial} />
          ))}
        </BufferPointCollection>
      </Viewer>
    );
  },
};

const rippleCount = 500;
const rippleMaterial = new BufferPointMaterial({ color: Color.LIME, size: 6 });
const rippleStart = Array.from({ length: rippleCount }, (_, i) => {
  const angle = (i / rippleCount) * 2 * Math.PI;
  return Cartesian3.fromDegrees(-95.0 + 0.4 * Math.cos(angle), 40.0 + 0.4 * Math.sin(angle));
});

const RipplingPoints = () => {
  const ref = useRef<CesiumComponentRef<CesiumBufferPointCollection>>(null);

  useEffect(() => {
    // One reusable buffer: x, y, z per point. The collection's default
    // positionDatatype is DOUBLE, so it must be a Float64Array.
    const positions = new Float64Array(rippleCount * 3);
    const scratch = new Cartesian3();
    let frame = 0;
    const tick = (time: number) => {
      const collection = ref.current?.cesiumElement;
      // Children are added asynchronously; only write once they all exist,
      // since setPositions rejects a range past the current primitiveCount.
      if (collection && !collection.isDestroyed() && collection.primitiveCount === rippleCount) {
        for (let i = 0; i < rippleCount; i++) {
          const angle = (i / rippleCount) * 2 * Math.PI;
          const radius = 0.4 + 0.05 * Math.sin(angle * 8 + time / 300);
          Cartesian3.fromDegrees(
            -95.0 + radius * Math.cos(angle),
            40.0 + radius * Math.sin(angle),
            0,
            undefined,
            scratch,
          );
          positions[i * 3] = scratch.x;
          positions[i * 3 + 1] = scratch.y;
          positions[i * 3 + 2] = scratch.z;
        }
        collection.setPositions(positions, 0, rippleCount);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <BufferPointCollection ref={ref} primitiveCountMax={rippleCount}>
      {rippleStart.map((position, i) => (
        <BufferPoint key={i} position={position} material={rippleMaterial} />
      ))}
    </BufferPointCollection>
  );
};

/**
 * `setPositions` (Cesium 1.146+) rewrites the positions of a whole range of
 * primitives in one call — far cheaper than updating each `BufferPoint`'s
 * `position` prop when animating many points. It is an imperative method, so
 * reach it through the collection's ref: here a ring of 500 points ripples
 * every frame from a single reused `Float64Array`. The same method exists on
 * `BufferPolylineCollection` and `BufferPolygonCollection` (pass every vertex
 * of the targeted primitives).
 */
export const AnimatedPositions: Story = {
  render: () => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <RipplingPoints />
    </Viewer>
  ),
};
