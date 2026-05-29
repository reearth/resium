import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Viewer as CesiumViewer } from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import GooglePhotorealistic3DTileset from "./GooglePhotorealistic3DTileset";

type Story = StoryObj<typeof GooglePhotorealistic3DTileset>;

export default {
  title: "GooglePhotorealistic3DTileset",
  component: GooglePhotorealistic3DTileset,
} as Meta;

// An API key may be required to load Google Photorealistic 3D Tiles.
// Set it globally via `Cesium.GoogleMaps.defaultApiKey` or pass the `key` prop.
export const Basic: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <GooglePhotorealistic3DTileset
          {...args}
          onAllTilesLoad={action("onAllTilesLoad")}
          onInitialTilesLoad={action("onInitialTilesLoad")}
          onTileFailed={action("onTileFailed")}
          onTileLoad={action("onTileLoad")}
          onTileUnload={action("onTileUnload")}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
          onError={action("onError")}
          {...events}
        />
      </Viewer>
    );
  },
};
