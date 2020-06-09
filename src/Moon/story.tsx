import React from "react";
import { storiesOf } from "@storybook/react";
import { Ellipsoid, Math as CesiumMath } from "cesium";

import Viewer from "../Viewer";
import Moon from "./Moon";

const radius = CesiumMath.LUNAR_RADIUS * 10;

storiesOf("Moon", module).add("Basic", () => (
  <Viewer full>
    <Moon ellipsoid={new Ellipsoid(radius, radius, radius)} />
  </Viewer>
));
