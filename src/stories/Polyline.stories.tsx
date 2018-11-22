import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Polyline from "../Polyline";
import PolylineCollection from "../PolylineCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const positions = [
  new Cartesian3(0.0, 0.0, 0.0),
  new Cartesian3(1000.0, 0.0, 0.0),
  new Cartesian3(0.0, 500.0, 0.0),
];
export default () => {
  storiesOf("Polyline", module).add("default", () => (
    <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline positions={positions} width={100} />
      </PolylineCollection>
    </Viewer>
  ));
};
