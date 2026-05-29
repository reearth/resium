import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Color } from "cesium";
import { Suspense } from "react";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import GeoJsonDataSource from "./GeoJsonDataSource";

type Story = StoryObj<typeof GeoJsonDataSource>;

export default {
  title: "GeoJsonDataSource",
  component: GeoJsonDataSource,
} as Meta;

const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

const onLoadAction = action("onLoad");

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <GeoJsonDataSource
        {...args}
        data={data}
        markerColor={Color.RED}
        onLoad={g => {
          // You can process the data source here
          g.entities.values[0].name = "Coors Field!";
          onLoadAction(g);
        }}
        onError={action("onError")}
        {...events}
      />
    </Viewer>
  ),
};

// A real URL is required for the suspense prop to take effect.
// A blob URL keeps this story self-contained (no external network).
const dataUrl = URL.createObjectURL(
  new Blob([JSON.stringify(data)], { type: "application/json" }),
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
        <GeoJsonDataSource
          {...args}
          data={dataUrl}
          suspense
          markerColor={Color.RED}
          onError={action("onError")}
          {...events}
        />
      </Suspense>
    </Viewer>
  ),
};
