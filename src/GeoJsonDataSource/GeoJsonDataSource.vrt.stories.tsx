import { Meta, StoryObj } from "@storybook/react";
import { Color } from "cesium";
import { Suspense } from "react";

import VrtViewer from "../__vrt__/VrtViewer";

import GeoJsonDataSource from "./GeoJsonDataSource";

/**
 * Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the
 * test runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`.
 */
const meta: Meta = {
  title: "VRT/GeoJsonDataSource",
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

export const GeoJson: Story = {
  render: () => (
    <VrtViewer>
      <GeoJsonDataSource data={geojson} markerColor={Color.BLUE} />
    </VrtViewer>
  ),
};

// The suspense story exercises the opt-in Suspense data-loading path: `data` is
// a URL (a blob URL keeps it offline/deterministic), so the data source is
// fetched during render behind a <Suspense> boundary. The deterministic viewer
// only flips `__VRT_READY__` after tiles load and the scene settles, by which
// point the suspended data has resolved and rendered, so the screenshot shows
// the loaded state — a regression here (suspense path broken) renders nothing.
const dataUrl = URL.createObjectURL(
  new Blob([JSON.stringify(geojson)], { type: "application/json" }),
);

export const SuspenseStory: Story = {
  name: "Suspense",
  render: () => (
    <VrtViewer>
      <Suspense fallback={null}>
        <GeoJsonDataSource data={dataUrl} suspense markerColor={Color.LIME} />
      </Suspense>
    </VrtViewer>
  ),
};
