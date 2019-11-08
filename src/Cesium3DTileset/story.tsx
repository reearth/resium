import React from "react";
import { IonResource } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Cesium3DTileset from "./Cesium3DTileset";

storiesOf("Cesium3DTileset", module).add("Basic", () => {
  let viewer: Cesium.Viewer | undefined;
  const onReady = (tileset: any) => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };
  return (
    <Viewer
      full
      ref={e => {
        if (e !== null && e.cesiumElement) {
          viewer = e.cesiumElement;
        } else {
          viewer = undefined;
        }
      }}>
      <Cesium3DTileset
        url={IonResource.fromAssetId(5714)}
        onAllTilesLoad={action("onAllTilesLoad")}
        onInitialTilesLoad={action("onInitialTilesLoad")}
        onTileFailed={action("onTileFailed")}
        onTileLoad={action("onTileLoad")}
        onTileUnload={action("onTileUnload")}
        onReady={onReady}
      />
    </Viewer>
  );
});
