import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import {
  CesiumTerrainProvider,
  EllipsoidTerrainProvider,
  IonResource,
  Viewer as CesiumViewer,
} from "cesium";
import { StrictMode, useEffect, useRef } from "react";

import { CesiumComponentRef } from "../core";
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

export const PromiseStrict: Story = {
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

const DynamicComp = ({ isTerrainEnabled, ...args }: any) => {
  const viewerRef = useRef<CesiumComponentRef<CesiumViewer> | null>(null);
  useEffect(() => {
    const run = async () => {
      if (!viewerRef.current?.cesiumElement) {
        return;
      }

      viewerRef.current.cesiumElement.terrainProvider = isTerrainEnabled
        ? await CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
            requestVertexNormals: true,
            requestWaterMask: false,
          })
        : new EllipsoidTerrainProvider();
    };
    run();
  }, [viewerRef, isTerrainEnabled]);

  return (
    <Viewer full ref={viewerRef}>
      <Globe
        {...args}
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
      />
    </Viewer>
  );
};
export const Dynamic: Story = {
  args: { enableLighting: true, isTerrainEnabled: false } as any,
  render: ({ ...args }: any) => <DynamicComp {...args} />,
};

const DynamicStrictComp = ({ isTerrainEnabled, ...args }: any) => {
  const viewerRef = useRef<CesiumComponentRef<CesiumViewer> | null>(null);
  useEffect(() => {
    const run = () => {
      // TODO: Remove this setTimeout in  strict mode.
      setTimeout(async () => {
        if (!viewerRef.current?.cesiumElement) {
          return;
        }

        viewerRef.current.cesiumElement.terrainProvider = isTerrainEnabled
          ? await CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
              requestVertexNormals: true,
              requestWaterMask: false,
            })
          : new EllipsoidTerrainProvider();
      }, 1);
    };
    run();
  }, [viewerRef, isTerrainEnabled]);

  return (
    <Viewer full ref={viewerRef}>
      <Globe
        {...args}
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
      />
    </Viewer>
  );
};
export const DynamicStrict: Story = {
  args: { enableLighting: true, isTerrainEnabled: false } as any,
  render: ({ ...args }: any) => <DynamicStrictComp {...args} />,
};
