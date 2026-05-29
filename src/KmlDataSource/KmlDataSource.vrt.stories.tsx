import { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

import VrtViewer from "../__vrt__/VrtViewer";

import KmlDataSource from "./KmlDataSource";

/**
 * Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the
 * test runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`.
 */
const meta: Meta = {
  title: "VRT/KmlDataSource",
  tags: ["vrt"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"><Document>
  <Placemark><name>A</name><Point><coordinates>-100,40,0</coordinates></Point></Placemark>
  <Placemark><name>B</name><Point><coordinates>-90,35,0</coordinates></Point></Placemark>
</Document></kml>`;

// The suspense story exercises the opt-in Suspense data-loading path: `data` is
// a URL (a blob URL keeps it offline/deterministic), so the data source is
// fetched during render behind a <Suspense> boundary. The deterministic viewer
// only flips `__VRT_READY__` after tiles load and the scene settles, by which
// point the suspended data has resolved and rendered, so the screenshot shows
// the loaded state — a regression here (suspense path broken) renders nothing.
const dataUrl = URL.createObjectURL(
  new Blob([kml], { type: "application/vnd.google-earth.kml+xml" }),
);

export const SuspenseStory: Story = {
  name: "Suspense",
  render: () => (
    <VrtViewer>
      <Suspense fallback={null}>
        <KmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
  ),
};
