import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ScreenSpaceCameraController from "./ScreenSpaceCameraController";

storiesOf("ScreenSpaceCameraController", module).add("Basic", () => (
  <Viewer full>
    <ScreenSpaceCameraController enableZoom={false} />
  </Viewer>
));
