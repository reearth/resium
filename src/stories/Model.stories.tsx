import Cesium from "cesium";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Model from "../Model";
import CameraFlyTo from "../CameraFlyTo";

import glb from "./assets/Cesium_Air.glb";

const origin = Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 200000.0);
const cameraDest = Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 210000);
const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(origin);

export default () => {
  storiesOf("Model", module).add("default", () => (
    <Viewer full>
      <CameraFlyTo destination={cameraDest} duration={0} />
      <Model
        url={glb}
        modelMatrix={modelMatrix}
        minimumPixelSize={128}
        maximumScale={20000}
        onReady={action("onReady")}
      />
    </Viewer>
  ));
};
