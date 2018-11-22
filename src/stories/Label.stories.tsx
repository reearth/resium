import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Label from "../Label";
import LabelCollection from "../LabelCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default () => {
  storiesOf("Label", module).add("default", () => (
    <Viewer full>
      <LabelCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Label fillColor={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} text="Cesium" />
        <Label
          fillColor={Color.YELLOW}
          position={new Cartesian3(1000000.0, 0.0, 0.0)}
          text="resium"
        />
        <Label fillColor={Color.GREEN} position={new Cartesian3(0.0, 1000000.0, 0.0)} text="Hi!" />
        <Label fillColor={Color.CYAN} position={new Cartesian3(0.0, 0.0, 1000000.0)} text="LGTM" />
      </LabelCollection>
    </Viewer>
  ));
};
