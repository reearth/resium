import React from "react";
import { ArcGisMapServerImageryProvider, IonImageryProvider } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import ImageryLayer, { ImageryLayerProps } from "./ImageryLayer";

export default {
  title: "ImageryLayer",
  component: ImageryLayer,
} as Meta;

export const Basic: Story<ImageryLayerProps> = args => (
  <Viewer full>
    <ImageryLayer
      {...args}
      imageryProvider={
        new ArcGisMapServerImageryProvider({
          url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
        })
      }
    />
    <ImageryLayer alpha={0.5} imageryProvider={new IonImageryProvider({ assetId: 3812 })} />
  </Viewer>
);
