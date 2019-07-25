import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import SkyAtmosphere from "./SkyAtmosphere";

storiesOf("SkyAtmosphere", module).add("Basic", () => (
  <Viewer full>
    <SkyAtmosphere hueShift={1} saturationShift={1} />
  </Viewer>
));
