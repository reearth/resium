import { Meta, StoryObj } from "@storybook/react";
import { BlendOption, BufferPointMaterial, Cartesian3, Color } from "cesium";

import BufferPoint from "../BufferPoint";
import CameraFlyTo from "../CameraFlyTo";
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
