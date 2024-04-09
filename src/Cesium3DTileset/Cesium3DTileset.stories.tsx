import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Viewer as CesiumViewer, Cesium3DTileStyle, IonResource } from "cesium";
import { useMemo, useRef } from "react";

import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Cesium3DTileset from "./Cesium3DTileset";

type Story = StoryObj<typeof Cesium3DTileset>;

export default {
  title: "Cesium3DTileset",
  component: Cesium3DTileset,
} as Meta;

export const Basic: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          {...args}
          url="./tileset/tileset.json"
          onAllTilesLoad={action("onAllTilesLoad")}
          onInitialTilesLoad={action("onInitialTilesLoad")}
          onTileFailed={action("onTileFailed")}
          onTileLoad={action("onTileLoad")}
          onTileUnload={action("onTileUnload")}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
          {...events}
        />
      </Viewer>
    );
  },
};

export const Resource: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>
    );
  },
};

export const Style: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          {...args}
          url="./tileset/tileset.json"
          style={
            new Cesium3DTileStyle({
              color: {
                conditions: [["true", "color('red')"]],
              },
            })
          }
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
        />
      </Viewer>
    );
  },
};
