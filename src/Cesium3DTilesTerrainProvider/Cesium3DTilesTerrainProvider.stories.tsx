import { Meta, StoryObj } from "@storybook/react";
import {
  Cesium3DTilesTerrainProvider as CesiumCesium3DTilesTerrainProvider,
  IonResource,
  TerrainProvider,
} from "cesium";

import Viewer from "../Viewer";
import Globe from "../Globe";

type Story = StoryObj<typeof Globe>;

export default {
  title: "Cesium3DTilesTerrainProvider",
  component: Globe,
} as Meta;

export const Basic: Story = {
  render: () => (
    <Viewer full>
      <Globe
        terrainProvider={
          CesiumCesium3DTilesTerrainProvider.fromUrl(
            IonResource.fromAssetId(3956),
          ) as Promise<TerrainProvider>
        }
      />
    </Viewer>
  ),
};

export const WithVertexNormals: Story = {
  render: () => (
    <Viewer full>
      <Globe
        terrainProvider={
          CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
            requestVertexNormals: true,
          }) as Promise<TerrainProvider>
        }
      />
    </Viewer>
  ),
};

export const GTOPO30: Story = {
  render: () => (
    <Viewer full>
      <Globe
        terrainProvider={
          CesiumCesium3DTilesTerrainProvider.fromIonAssetId(2732686, {
            requestVertexNormals: true,
          }) as Promise<TerrainProvider>
        }
      />
    </Viewer>
  ),
};

export const WithWaterMask: Story = {
  render: () => (
    <Viewer full>
      <Globe
        terrainProvider={
          CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
            requestVertexNormals: true,
            requestWaterMask: true,
          }) as Promise<TerrainProvider>
        }
      />
    </Viewer>
  ),
};
