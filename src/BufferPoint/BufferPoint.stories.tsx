import { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
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

const sites = [
  { name: "Site A", position: p1, color: Color.ORANGE },
  { name: "Site B", position: p2, color: Color.YELLOW },
  { name: "Site C", position: p3, color: Color.GREEN },
  { name: "Site D", position: p4, color: Color.CYAN },
];

/**
 * `pickObject` (Cesium 1.146+) replaces Cesium's default
 * `{ collection, index, primitive }` pick result with your own object. Click a
 * point and the Actions panel logs the picked object — here the site record
 * passed in, so app data comes straight back without an index lookup. The
 * collection needs `allowPicking`, which Cesium leaves off by default.
 */
export const Picking: Story = {
  render: () => (
    <Viewer full onClick={(_, target) => action("picked")(target)}>
      <BufferPointCollection primitiveCountMax={sites.length} allowPicking>
        {sites.map(site => (
          <BufferPoint
            key={site.name}
            position={site.position}
            material={new BufferPointMaterial({ color: site.color, size: 20 })}
            pickObject={site}
          />
        ))}
      </BufferPointCollection>
    </Viewer>
  ),
};
