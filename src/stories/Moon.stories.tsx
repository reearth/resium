import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Moon from "../Moon";

export default () => {
  storiesOf("Moon", module).add("default", () => (
    <Viewer full>
      <Moon />
    </Viewer>
  ));
};
