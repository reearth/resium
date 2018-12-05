import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import PointPrimitive from "../PointPrimitive";
import PointPrimitiveCollection from "../PointPrimitiveCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default () => {
  storiesOf("PointPrimitive", module)
    .add("default", () => (
      <Viewer full>
        <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <PointPrimitive color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} />
          <PointPrimitive color={Color.YELLOW} position={new Cartesian3(1000000.0, 0.0, 0.0)} />
          <PointPrimitive color={Color.GREEN} position={new Cartesian3(0.0, 1000000.0, 0.0)} />
          <PointPrimitive color={Color.CYAN} position={new Cartesian3(0.0, 0.0, 1000000.0)} />
        </PointPrimitiveCollection>
      </Viewer>
    ))
    .add("Events", () => (
      <Viewer full>
        <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <PointPrimitive
            color={Color.ORANGE}
            position={new Cartesian3(0.0, 0.0, 0.0)}
            onClick={action("onClick")}
            onDoubleClick={action("onDoubleClick")}
            onMouseDown={action("onMouseDown")}
            onMouseUp={action("onMouseUp")}
            onMiddleClick={action("onMiddleClick")}
            onMiddleDown={action("onMiddleDown")}
            onMiddleUp={action("onMiddleUp")}
            onMouseMove={action("onMouseMove")}
            onPinchEnd={action("onPinchEnd")}
            onPinchMove={action("onPinchMove")}
            onPinchStart={action("onPinchStart")}
            onRightClick={action("onRightClick")}
            onRightDown={action("onRightDown")}
            onRightUp={action("onRightUp")}
            onWheel={action("onWheel")}
            onMouseEnter={action("onMouseEnter")}
            onMouseLeave={action("onMouseLeave")}
          />
        </PointPrimitiveCollection>
      </Viewer>
    ));
};
