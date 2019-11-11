import React from "react";
import { storiesOf } from "@storybook/react";
import { Ellipsoid } from "cesium";

import Viewer from "../Viewer";
import Moon from "./Moon";

const radius = Cesium.Math.LUNAR_RADIUS * 10;

storiesOf("Moon", module).add("Basic", () => (
  <Viewer full>
    <Moon ellipsoid={new Ellipsoid(radius, radius, radius)} />
  </Viewer>
));
