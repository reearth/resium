import { Meta, StoryObj } from "@storybook/react";
import { ArcGisMapServerImageryProvider, IonImageryProvider } from "cesium";

import Viewer from "../Viewer";

import ImageryLayer from "./ImageryLayer";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "ImageryLayer",
  component: ImageryLayer,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <ImageryLayer
        {...args}
        imageryProvider={ArcGisMapServerImageryProvider.fromUrl(
          "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
        )}
      />
      <ImageryLayer alpha={0.5} imageryProvider={IonImageryProvider.fromAssetId(3812, {})} />
    </Viewer>
  ),
};
