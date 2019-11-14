import React from "react";
import { storiesOf } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Viewer from "../Viewer";
import Entity from "../Entity";
import { Bloom } from ".";
import model from "assets/Cesium_Air.glb";

storiesOf("PostProcessStageComposite", module).add("Bloom", () => (
  <Viewer full>
    <Bloom />
    <Entity
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      model={{ uri: model }}
      tracked
    />
  </Viewer>
));
