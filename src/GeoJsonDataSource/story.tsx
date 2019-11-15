import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Color } from "cesium";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import GeoJsonDataSource from "./GeoJsonDataSource";

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

storiesOf("GeoJsonDataSource", module)
  .add("Basic", () => (
    <Viewer full>
      <GeoJsonDataSource
        data={data}
        markerColor={Color.RED}
        onLoad={g => {
          // You can process the data source here
          g.entities.values[0].name = "Coors Field!";
          onLoadAction(g);
        }}
        onError={action("onError")}
      />
    </Viewer>
  ))
  .add("Show", () => {
    const [show, setShow] = useState(true);
    return (
      <Viewer full>
        <button
          style={{ position: "absolute", top: "0", left: "0" }}
          onClick={() => setShow(s => !s)}>
          Toggle
        </button>
        <GeoJsonDataSource data={data} markerColor={Color.RED} show={show} />
      </Viewer>
    );
  });
