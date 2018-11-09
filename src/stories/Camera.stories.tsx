import React from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import CameraFlyTo from "../CameraFlyTo";
import Camera from "../Camera";

export default () => {
  storiesOf("Camera", module).add("default", () => (
    <Viewer full>
      <Camera {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
  ));
};
