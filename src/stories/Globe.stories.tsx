import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Globe from "../Globe";

export default () => {
  storiesOf("Globe", module).add("default", () => (
    <Viewer full>
      <Globe
        enableLighting
        onImageryLayersUpdate={action("onImageryLayersUpdate")}
        onTerrainProviderChange={action("onTerrainProviderChange")}
        onTileLoad={action("onTileLoad")}
      />
    </Viewer>
  ));
};
