import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { Viewer as CesiumViewer, Cesium3DTileStyle } from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Cesium3DTileset, { Cesium3DTilesetProps } from "./Cesium3DTileset";

export default {
  title: "Cesium3DTileset",
  component: Cesium3DTileset,
} as Meta;

export const Basic: Story<Cesium3DTilesetProps> = args => {
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
};

export const Style: Story<Cesium3DTilesetProps> = args => {
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
};
