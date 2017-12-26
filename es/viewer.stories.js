import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "./viewer";

export default (function () {

  storiesOf("Viewer").add("default", function () {
    return React.createElement(Viewer, { full: true });
  });
});