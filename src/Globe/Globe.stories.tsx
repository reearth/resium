import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { CesiumTerrainProvider, IonResource } from "cesium";

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
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
      />
    </Viewer>
  ),
};

export const Prmise: Story = {
  args: { enableLighting: true },
  render: args => (
    <Viewer full>
      <Globe
        {...args}
        terrainProvider={CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
          requestVertexNormals: true,
          requestWaterMask: false,
        })}
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
      />
    </Viewer>
  ),
};
