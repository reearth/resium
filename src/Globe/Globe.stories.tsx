import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { CesiumTerrainProvider, EllipsoidTerrainProvider, IonResource } from "cesium";
import { StrictMode } from "react";

import Viewer from "../Viewer";

import Globe from "./Globe";

type Story = StoryObj<typeof Globe>;

export default {
  title: "Globe",
  component: Globe,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <Globe
        {...args}
        terrainProvider={new EllipsoidTerrainProvider()}
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
      />
    </Viewer>
  ),
};

export const Promise: Story = {
  args: { enableLighting: true, isTerrainEnabled: false } as any,
  render: ({ isTerrainEnabled, ...args }: any) => (
    <StrictMode>
      <Viewer full>
        <Globe
          {...args}
          terrainProvider={
            isTerrainEnabled
              ? CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
                  requestVertexNormals: true,
                  requestWaterMask: false,
                })
              : new EllipsoidTerrainProvider()
          }
          onImageryLayersUpdate={action("onImageryLayersUpdate")}
          onTerrainProviderChange={action("onTerrainProviderChange")}
        />
      </Viewer>
    </StrictMode>
  ),
};
