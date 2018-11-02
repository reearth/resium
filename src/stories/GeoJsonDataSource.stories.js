import React from "react";
import { storiesOf } from "@storybook/react";
import { Color } from "cesium";

import Viewer from "../Viewer";
import GeoJsonDataSource from "../GeoJsonDataSource";

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

export default () => {
  storiesOf("GeoJsonDataSource", module).add("default", () => (
    <Viewer full>
      <GeoJsonDataSource data={data} markerColor={Color.RED} />
    </Viewer>
  ));
};
