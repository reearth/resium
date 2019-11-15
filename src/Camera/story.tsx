import React, { useState } from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import CameraFlyTo from "../CameraFlyTo";
import Camera from "./Camera";

storiesOf("Camera", module)
  .add("Basic", () => (
    <Viewer full>
      <Camera
        onMoveEnd={action("onMoveEnd")}
        onMoveStart={action("onMoveStart")}
        onChange={action("onChange")}
      />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
  ))
  .add("Once", () => {
    const [once, setOnce] = useState(true);
    return (
      <Viewer full>
        <button
          style={{ position: "absolute", top: "0", left: "0" }}
          onClick={() => setOnce(o => !o)}>
          Once: {once.toString()}
        </button>
        <CameraFlyTo
          duration={5}
          destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          once={once}
        />
      </Viewer>
    );
  });
