import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { GeoJsonDataSource } from "cesium";
import { Suspense } from "react";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import CzmlDataSource from "./CzmlDataSource";

type Story = StoryObj<typeof CzmlDataSource>;

export default {
  title: "CzmlDataSource",
  component: CzmlDataSource,
} as Meta;

const czml = [
  {
    id: "document",
    name: "CZML",
    version: "1.0",
  },
  {
    id: "shape1",
    name: "TOKYO",
    position: {
      cartographicDegrees: [139.77, 35.68, 20000.0],
    },
    ellipse: {
      semiMinorAxis: 50000.0,
      semiMajorAxis: 50000.0,
      height: 20000,
      material: {
        solidColor: {
          color: {
            rgba: [0, 255, 0, 100],
          },
        },
      },
      outline: true,
      outlineColor: {
        rgba: [255, 0, 0, 0],
      },
    },
  },
];

const onLoadAction = action("onLoad");

const onLoad = (g: GeoJsonDataSource) => {
  // You can process the data source here
  g.entities.values[0].name = "TOKYO!";
  onLoadAction(g);
};

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <CzmlDataSource
        {...args}
        data={czml}
        onLoad={onLoad}
        onError={action("onError")}
        {...events}
      />
    </Viewer>
  ),
};

// A real URL is required for the suspense prop to take effect.
// A blob URL keeps this story self-contained (no external network).
const dataUrl = URL.createObjectURL(
  new Blob([JSON.stringify(czml)], { type: "application/json" }),
);

const Loading = () => (
  <div style={{ position: "absolute", top: 8, left: 8, padding: "4px 8px", background: "#000a", color: "#fff" }}>
    Loading…
  </div>
);

export const SuspenseStory: Story = {
  name: "Suspense",
  args: { show: true },
  render: args => (
    <Viewer full>
      <Suspense fallback={<Loading />}>
        <CzmlDataSource
          {...args}
          data={dataUrl}
          suspense
          onError={action("onError")}
          {...events}
        />
      </Suspense>
    </Viewer>
  ),
};
