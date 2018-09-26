import React from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import CameraFlyTo from "../CameraFlyTo";
import Camera from "../Camera";

export default () => {
  storiesOf("Camera", module).addWithJSX("default", () => (
    <Viewer full>
      <Camera
        onMoveEnd={e => console.log("end", e)}
        onMoveStart={e => console.log("start", e)}
        onChanged={e => console.log("changed", e)}
      />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
  ));
};
