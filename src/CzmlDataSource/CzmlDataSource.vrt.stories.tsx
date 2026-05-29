import { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

import VrtViewer from "../__vrt__/VrtViewer";

import CzmlDataSource from "./CzmlDataSource";

/**
 * Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the
 * test runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`.
 */
const meta: Meta = {
  title: "VRT/CzmlDataSource",
  tags: ["vrt"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

const czml = [
  { id: "document", name: "CZML", version: "1.0" },
  {
    id: "point",
    position: { cartographicDegrees: [-100, 40, 0] },
    point: { color: { rgba: [255, 255, 0, 255] }, pixelSize: 20 },
  },
];

// The suspense story exercises the opt-in Suspense data-loading path: `data` is
// a URL (a blob URL keeps it offline/deterministic), so the data source is
// fetched during render behind a <Suspense> boundary. The deterministic viewer
// only flips `__VRT_READY__` after tiles load and the scene settles, by which
// point the suspended data has resolved and rendered, so the screenshot shows
// the loaded state — a regression here (suspense path broken) renders nothing.
const dataUrl = URL.createObjectURL(
  new Blob([JSON.stringify(czml)], { type: "application/json" }),
);

export const SuspenseStory: Story = {
  name: "Suspense",
  render: () => (
    <VrtViewer>
      <Suspense fallback={null}>
        <CzmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
  ),
};
