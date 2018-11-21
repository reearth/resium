import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Billboard from "../Billboard";
import BillboardCollection from "../BillboardCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default () => {
  storiesOf("Billboard", module).add("default", () => (
    <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Billboard
          color={Color.ORANGE}
          position={new Cartesian3(0.0, 0.0, 0.0)}
          image="assets/example.jpg"
        />
        <Billboard
          color={Color.YELLOW}
          position={new Cartesian3(1000000.0, 0.0, 0.0)}
          image="assets/example.jpg"
        />
        <Billboard
          color={Color.GREEN}
          position={new Cartesian3(0.0, 1000000.0, 0.0)}
          image="../assets/example.jpg"
        />
        <Billboard
          color={Color.CYAN}
          position={new Cartesian3(0.0, 0.0, 1000000.0)}
          image="assets/example.jpg"
        />
      </BillboardCollection>
    </Viewer>
  ));
};
