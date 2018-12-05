import React from "react";
import { storiesOf } from "@storybook/react";
import { Color } from "cesium";

import Viewer from "../Viewer";
import GeoJsonDataSource from "../GeoJsonDataSource";
import { action } from "@storybook/addon-actions";

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

const onLoad = (g: Cesium.GeoJsonDataSource) => {
  // You can process the data source here
  g.entities.values[0].name = "Coors Field!";
  onLoadAction(g);
};

export default () => {
  storiesOf("GeoJsonDataSource", module).add("default", () => (
    <Viewer full>
      <GeoJsonDataSource
        data={data}
        markerColor={Color.RED}
        onLoad={onLoad}
        onError={action("onError")}
      />
    </Viewer>
  ));
};
