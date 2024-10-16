import { Meta, StoryObj } from "@storybook/react";
import { ArcGisMapServerImageryProvider, IonImageryProvider, IonWorldImageryStyle } from "cesium";
import { StrictMode } from "react";

import Viewer from "../Viewer";

import ImageryLayer from "./ImageryLayer";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "ImageryLayer",
  component: ImageryLayer,
} as Meta;

export const Basic: Story = {
  argTypes: {
    tile: { options: ["arcgis", "cesium"], control: { type: "select" } },
  } as any,
  render: ({ tile, ...args }: any) => (
    <Viewer full>
      <ImageryLayer
        {...args}
        imageryProvider={
          tile === "arcgis"
            ? ArcGisMapServerImageryProvider.fromUrl(
                "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
              )
            : IonImageryProvider.fromAssetId(IonWorldImageryStyle.AERIAL)
        }
      />
      <ImageryLayer alpha={0.5} imageryProvider={IonImageryProvider.fromAssetId(3812, {})} />
    </Viewer>
  ),
};

export const Strict: Story = {
  argTypes: {
    tile: { options: ["arcgis", "cesium"], control: { type: "select" } },
  } as any,
  render: ({ tile, ...args }: any) => (
    <StrictMode>
      <Viewer full>
        <ImageryLayer
          {...args}
          imageryProvider={
            tile === "arcgis"
              ? ArcGisMapServerImageryProvider.fromUrl(
                  "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
                )
              : IonImageryProvider.fromAssetId(IonWorldImageryStyle.AERIAL)
          }
        />
        <ImageryLayer alpha={0.5} imageryProvider={IonImageryProvider.fromAssetId(3812, {})} />
      </Viewer>
    </StrictMode>
  ),
};
