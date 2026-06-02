import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import GeoJsonPrimitive from "./GeoJsonPrimitive";

type Story = StoryObj<typeof GeoJsonPrimitive>;

export default {
  title: "GeoJsonPrimitive",
  component: GeoJsonPrimitive,
} as Meta;

const inlineGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-95.0, 40.0] },
      properties: { id: "p1" },
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
      properties: { id: "l1" },
    },
  ],
};

export const Inline: Story = {
  render: args => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 1_000_000)} duration={0} />
      <GeoJsonPrimitive
        {...args}
        data={inlineGeoJson}
        onReady={action("onReady")}
        onError={action("onError")}
      />
    </Viewer>
  ),
};

export const FromUrl: Story = {
  render: args => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 5_000_000)} duration={0} />
      <GeoJsonPrimitive
        {...args}
        url="https://raw.githubusercontent.com/CesiumGS/cesium/main/Apps/SampleData/sampleGeoJson.json"
        onReady={action("onReady")}
        onError={action("onError")}
      />
    </Viewer>
  ),
};
