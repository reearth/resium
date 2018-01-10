import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../viewer";

export default () => {

  storiesOf("Viewer", module)
    .add("default", () => (
      <Viewer full />
    ));

};
