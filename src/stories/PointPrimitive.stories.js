import React from "react";
import {
  Cartesian3,
  Color,
  Transforms
} from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import PointPrimitive from "../PointPrimitive";
import PointPrimitiveCollection from "../PointPrimitiveCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default () => {

  storiesOf("PointPrimitive", module)
    .addWithJSX("default", () => (
      <Viewer full>
        <PointPrimitiveCollection
          modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <PointPrimitive
            color={Color.ORANGE}
            position={new Cartesian3(0.0, 0.0, 0.0)} />
          <PointPrimitive
            color={Color.YELLOW}
            position={new Cartesian3(1000000.0, 0.0, 0.0)} />
          <PointPrimitive
            color={Color.GREEN}
            position={new Cartesian3(0.0, 1000000.0, 0.0)} />
          <PointPrimitive
            color={Color.CYAN}
            position={new Cartesian3(0.0, 0.0, 1000000.0)} />
        </PointPrimitiveCollection>
      </Viewer>
    ));

};
