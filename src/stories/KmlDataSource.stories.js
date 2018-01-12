import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import KmlDataSource from "../KmlDataSource";

export default () => {
  const data = new DOMParser().parseFromString(`
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
  `.trim(), "text/xml");

  storiesOf("KmlDataSource", module)
    .add("default", () => (
      <Viewer full>
        <KmlDataSource data={data} />
      </Viewer>
    ));

};
