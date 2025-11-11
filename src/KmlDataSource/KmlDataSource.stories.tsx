import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Color, KmlDataSource as CesiumKmlDataSource } from "cesium";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import KmlDataSource from "./KmlDataSource";

type Story = StoryObj<typeof KmlDataSource>;

export default {
  title: "KmlDataSource",
  component: KmlDataSource,
} as Meta;

const data = new DOMParser().parseFromString(
  `
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
`.trim(),
  "text/xml",
);

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
