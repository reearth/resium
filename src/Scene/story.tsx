import React from "react";
import { SceneMode } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Scene from "./Scene";

storiesOf("Scene", module).add("Basic", () => (
  <Viewer full>
    <Scene mode={SceneMode.SCENE2D} morphDuration={10} />
  </Viewer>
));
