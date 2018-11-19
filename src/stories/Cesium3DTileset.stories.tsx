import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Cesium from "cesium";

import Viewer from "../Viewer";
import Cesium3DTileset from "../Cesium3DTileset";

export default () => {
  storiesOf("Cesium3DTileset", module).add("default", () => (
    <Viewer full>
      <Cesium3DTileset
        url={(Cesium as any).IonResource.fromAssetId(5714)}
        onAllTilesLoad={action("onAllTilesLoad")}
        onInitialTilesLoad={action("onInitialTilesLoad")}
        onLoadProgress={action("onLoadProgress")}
        onTileFailed={action("onTileFailed")}
        onTileLoad={action("onTileLoad")}
        onTileUnload={action("onTileUnload")}
        onTileVisible={action("onTileVisible")}
      />
    </Viewer>
  ));
};
