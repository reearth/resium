import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";

export default () => {

  storiesOf("Viewer", module)
    .addWithJSX("default", () => (
      <Viewer full />
    ));

};
