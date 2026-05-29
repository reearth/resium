import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Color } from "cesium";

import VrtViewer from "../__vrt__/VrtViewer";
import PointGraphics from "../PointGraphics";

import Entity from "./Entity";

/**
 * Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the
 * test runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`.
 */
const meta: Meta = {
  title: "VRT/Entity",
  tags: ["vrt"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Entities: Story = {
  render: () => (
    <VrtViewer>
      <Entity position={Cartesian3.fromDegrees(-100, 40)}>
        <PointGraphics pixelSize={20} color={Color.RED} />
      </Entity>
    </VrtViewer>
  ),
};
