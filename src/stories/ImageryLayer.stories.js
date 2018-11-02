import React from "react";
import { ArcGisMapServerImageryProvider, createTileMapServiceImageryProvider } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ImageryLayer from "../ImageryLayer";

export default () => {
  storiesOf("ImageryLayer", module).add("default", () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          new ArcGisMapServerImageryProvider({
            url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
          })
        }
      />
      <ImageryLayer
        alpha={0.5}
        imageryProvider={createTileMapServiceImageryProvider({
          url: "//cesiumjs.org/tilesets/imagery/blackmarble",
          maximumLevel: 8,
          credit: "Black Marble imagery courtesy NASA Earth Observatory",
        })}
      />
    </Viewer>
  ));
};
