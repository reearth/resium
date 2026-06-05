import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import VrtViewer from "../__vrt__/VrtViewer";

import GeoJsonPrimitive from "./GeoJsonPrimitive";

type Story = StoryObj<typeof GeoJsonPrimitive>;

const inlineGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-95.0, 40.0] },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-96.0, 39.5],
          [-94.0, 40.5],
        ],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-95.6, 39.8],
            [-94.4, 39.8],
            [-94.4, 40.2],
            [-95.6, 40.2],
            [-95.6, 39.8],
          ],
        ],
      },
      properties: {},
    },
  ],
};

export default {
  title: "VRT/GeoJsonPrimitive",
  component: GeoJsonPrimitive,
  tags: ["vrt"],
} as Meta;

export const Default: Story = {
  render: () => (
    <VrtViewer>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 1_500_000)} duration={0} />
      <GeoJsonPrimitive data={inlineGeoJson} />
    </VrtViewer>
  ),
};
