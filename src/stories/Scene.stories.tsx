import React from "react";
import { SceneMode } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Scene from "../Scene";

export default () => {
  storiesOf("Scene", module).add("default", () => (
    <Viewer full>
      <Scene mode={SceneMode.SCENE2D} morphDuration={10} />
    </Viewer>
  ));
};
