import React from "react";
import { ArcGisMapServerImageryProvider, IonImageryProvider } from "cesium";
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
      <ImageryLayer alpha={0.5} imageryProvider={new IonImageryProvider({ assetId: 3812 })} />
    </Viewer>
  ));
};
