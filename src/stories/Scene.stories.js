import React from "react";
import { SceneMode } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Scene from "../Scene";

export default () => {

  storiesOf("Scene", module)
    .addWithJSX("default", () => (
      <Viewer full>
        <Scene mode={SceneMode.SCENE2D} />
      </Viewer>
    ));

};
