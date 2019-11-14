import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Globe from "./Globe";

storiesOf("Globe", module).add("Basic", () => (
  <Viewer full>
    <Globe
      enableLighting
      onImageryLayersUpdate={action("onImageryLayersUpdate")}
      onTerrainProviderChange={action("onTerrainProviderChange")}
    />
  </Viewer>
));
