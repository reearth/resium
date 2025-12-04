import { Meta, StoryObj } from "@storybook/react";
import {
  Google2DImageryProvider as CesiumGoogle2DImageryProvider,
  ImageryProvider,
} from "cesium";

import Viewer from "../Viewer";
import ImageryLayer from "../ImageryLayer";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "Google2DImageryProvider",
  component: ImageryLayer,
} as Meta;

export const Satellite: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          CesiumGoogle2DImageryProvider.fromUrl({
            mapType: "satellite",
          }) as Promise<ImageryProvider>
        }
      />
    </Viewer>
  ),
};

export const Terrain: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          CesiumGoogle2DImageryProvider.fromUrl({
            mapType: "terrain",
          }) as Promise<ImageryProvider>
        }
      />
    </Viewer>
  ),
};

export const Roadmap: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          CesiumGoogle2DImageryProvider.fromUrl({
            mapType: "roadmap",
          }) as Promise<ImageryProvider>
        }
      />
    </Viewer>
  ),
};

export const RoadmapOverlayWithCustomStyles: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          CesiumGoogle2DImageryProvider.fromUrl({
            overlayLayerType: "layerRoadmap",
            styles: [
              {
                stylers: [{ hue: "#00ffe6" }, { saturation: -20 }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ lightness: 100 }, { visibility: "simplified" }],
              },
            ],
          }) as Promise<ImageryProvider>
        }
      />
    </Viewer>
  ),
};

export const FromCesiumIon: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          CesiumGoogle2DImageryProvider.fromIonAssetId({
            assetId: "3830184",
          }) as Promise<ImageryProvider>
        }
      />
    </Viewer>
  ),
};
