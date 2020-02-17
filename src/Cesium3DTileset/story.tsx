import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CesiumComponentRef } from "../core/component";
import Viewer from "../Viewer";
import Cesium3DTileset from "./Cesium3DTileset";

storiesOf("Cesium3DTileset", module).add("Basic", () => {
  const ref = useRef<CesiumComponentRef<Cesium.Viewer>>(null);
  return (
    <Viewer full ref={ref}>
      <Cesium3DTileset
        url="./tileset/tileset.json"
        onAllTilesLoad={action("onAllTilesLoad")}
        onInitialTilesLoad={action("onInitialTilesLoad")}
        onTileFailed={action("onTileFailed")}
        onTileLoad={action("onTileLoad")}
        onTileUnload={action("onTileUnload")}
        onReady={tileset => {
          ref.current?.cesiumElement?.zoomTo(tileset as any); // WORKAROUND
        }}
        onClick={action("onClick")}
      />
    </Viewer>
  );
});
