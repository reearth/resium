import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Color } from "cesium";

import Entity from "../Entity";
import GeoJsonDataSource from "../GeoJsonDataSource";
import PointGraphics from "../PointGraphics";

import VrtViewer from "./VrtViewer";

/**
 * Stories here are tagged `vrt` and rendered deterministically so the test
 * runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`.
 */
const meta: Meta = {
  title: "VRT",
  tags: ["vrt"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: [-100, 40] },
    },
    {
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: [-120, 35] },
    },
  ],
} as const;

export const Entities: Story = {
  render: () => (
    <VrtViewer>
      <Entity position={Cartesian3.fromDegrees(-100, 40)}>
        <PointGraphics pixelSize={20} color={Color.RED} />
      </Entity>
    </VrtViewer>
  ),
};

export const GeoJson: Story = {
  render: () => (
    <VrtViewer>
      <GeoJsonDataSource data={geojson} markerColor={Color.BLUE} />
    </VrtViewer>
  ),
};
