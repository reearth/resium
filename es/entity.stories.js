import React from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "./viewer";
import Entity from "./entity";

export default (function () {

  storiesOf("Entity").add("default", function () {
    return React.createElement(
      Viewer,
      { full: true },
      React.createElement(Entity, {
        name: "test",
        description: "test",
        position: Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100) })
    );
  });
});