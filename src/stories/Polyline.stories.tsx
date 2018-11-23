import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Polyline from "../Polyline";
import PolylineCollection from "../PolylineCollection";
import CameraFlyTo from "../CameraFlyTo";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const positions = [
  new Cartesian3(-75, 35, 0),
  new Cartesian3(-125, 35, 0),
  new Cartesian3(-125, 135, 0),
];
export default () => {
  storiesOf("Polyline", module)
    .add("default", () => (
      <Viewer full>
        <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <Polyline positions={positions} width={10} />
        </PolylineCollection>
        <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
      </Viewer>
    ))
    .add("Events", () => (
      <Viewer full>
        <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <Polyline
            positions={positions}
            width={10}
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
        </PolylineCollection>
        <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
      </Viewer>
    ));
};
