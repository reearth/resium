import React from "react";
import { storiesOf } from "@storybook/react";
import Cesium from "cesium";

import Viewer from "../Viewer";
import Moon from "../Moon";

const radius = Cesium.Math.LUNAR_RADIUS * 10;

export default () => {
  storiesOf("Moon", module).add("default", () => (
    <Viewer full>
      <Moon ellipsoid={new Cesium.Ellipsoid(radius, radius, radius)} />
    </Viewer>
  ));
};
