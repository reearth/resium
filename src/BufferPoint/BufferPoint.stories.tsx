import { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { BufferPointMaterial, Cartesian3, Color } from "cesium";
import { useState } from "react";

import BufferPointCollection from "../BufferPointCollection";
import CameraFlyTo from "../CameraFlyTo";
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

type Site = { name: string; position: Cartesian3; color: Color };

const sites: Site[] = [
  { name: "Site A", position: p1, color: Color.ORANGE },
  { name: "Site B", position: p2, color: Color.YELLOW },
  { name: "Site C", position: p3, color: Color.GREEN },
  { name: "Site D", position: p4, color: Color.CYAN },
];
// Wrap each record under `id`: Viewer's own click handler reads
// `picked.id ?? picked.primitive.id`, so a pick object needs one of the two.
const sitePickObjects = sites.map(site => ({ id: site }));
// Stable material instances, so a re-render only calls setMaterial on the
// point whose selection actually changed.
const siteMaterials = sites.map(site => ({
  normal: new BufferPointMaterial({ color: site.color, size: 20 }),
  selected: new BufferPointMaterial({
    color: site.color,
    size: 30,
    outlineColor: Color.WHITE,
    outlineWidth: 3,
  }),
}));

const PickingDemo = () => {
  const [picked, setPicked] = useState<Site>();
  return (
    <Viewer
      full
      onClick={(_, target) => {
        const site = (target as { id?: unknown } | undefined)?.id;
        setPicked(sites.find(s => s === site));
        action("picked")(target);
      }}>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-75.05, 40.42, 300_000)} duration={0} />
      <BufferPointCollection primitiveCountMax={sites.length} allowPicking>
        {sites.map((site, i) => (
          <BufferPoint
            key={site.name}
            position={site.position}
            material={picked === site ? siteMaterials[i].selected : siteMaterials[i].normal}
            pickObject={sitePickObjects[i]}
          />
        ))}
      </BufferPointCollection>
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          padding: "4px 8px",
          background: "#000a",
          color: "#fff",
        }}>
        {picked ? `Picked: ${picked.name}` : "Click a point"}
      </div>
    </Viewer>
  );
};

/**
 * `pickObject` (Cesium 1.146+) replaces Cesium's default
 * `{ collection, index, primitive }` pick result with your own object. Click a
 * point: the site record comes straight back from `scene.pick` — no index
 * lookup — and the story names it top-left and enlarges the picked point. The
 * Actions panel logs the raw pick object too. The collection needs
 * `allowPicking`, which Cesium leaves off by default. Inside a `Viewer`, keep
 * your data under an `id` property — Viewer's built-in click handler expects
 * the pick object to have an `id` or a `primitive`.
 */
export const Picking: Story = {
  render: () => <PickingDemo />,
};
