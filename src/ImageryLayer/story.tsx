import React from "react";
import { ArcGisMapServerImageryProvider, IonImageryProvider, ImageryProvider } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ImageryLayer from "./ImageryLayer";

storiesOf("ImageryLayer", module).add("Basic", () => (
  <Viewer full>
    <ImageryLayer
      imageryProvider={
        (new ArcGisMapServerImageryProvider({
          url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
        }) as unknown) as ImageryProvider
      }
    />
    <ImageryLayer
      alpha={0.5}
      imageryProvider={(new IonImageryProvider({ assetId: 3812 }) as unknown) as ImageryProvider}
    />
  </Viewer>
));
