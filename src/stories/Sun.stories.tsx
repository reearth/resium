import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Sun from "../Sun";

storiesOf("Sun", module).add("default", () => (
  <Viewer full>
    <Sun glowFactor={2.0} />
  </Viewer>
));
