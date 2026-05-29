import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Color, KmlDataSource as CesiumKmlDataSource } from "cesium";
import { Suspense } from "react";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import KmlDataSource from "./KmlDataSource";

type Story = StoryObj<typeof KmlDataSource>;

export default {
  title: "KmlDataSource",
  component: KmlDataSource,
} as Meta;

const kml = `
<?xml version="1.0" encoding="utf-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <Placemark>
    <name>Portland</name>
    <Point>
      <coordinates>-122.681944,45.52,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Rio de Janeiro</name>
    <Point>
      <coordinates>-43.196389,-22.908333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Istanbul</name>
    <Point>
      <coordinates>28.976018,41.01224,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Reykjavik</name>
    <Point>
      <coordinates>-21.933333,64.133333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Simple Polygon</name>
    <Polygon>
      <outerBoundaryIs>
        <LinearRing>
          <coordinates>-122.681944,45.52,0
          -43.196389,-22.908333,0
          28.976018,41.01224,0
          -21.933333,64.133333,0
          -122.681944,45.52,0</coordinates>
        </LinearRing>
      </outerBoundaryIs>
    </Polygon>
  </Placemark>
</Document>
</kml>
`.trim();

const data = new DOMParser().parseFromString(kml, "text/xml");

const onLoadAction = action("onLoad");

const onLoad = (k: CesiumKmlDataSource) => {
  // You can process the data source here
  const p = k.entities.values[4].polygon;
  if (p) {
    p.material = Color.RED as any;
  }
  onLoadAction(k);
};

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <KmlDataSource
        {...args}
        data={data}
        onLoad={onLoad}
        onError={action("onError")}
        {...events}
      />
    </Viewer>
  ),
};

// A real URL is required for the suspense prop to take effect. KML/KMZ is fetched
// as a Blob. A blob URL keeps this story self-contained (no external network).
const dataUrl = URL.createObjectURL(
  new Blob([kml], { type: "application/vnd.google-earth.kml+xml" }),
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
        <KmlDataSource
          {...args}
          data={dataUrl}
          suspense
          onLoad={onLoad}
          onError={action("onError")}
          {...events}
        />
      </Suspense>
    </Viewer>
  ),
};
