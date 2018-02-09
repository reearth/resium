import React from "react";
import { storiesOf } from "@storybook/react";

import CesiumWidget from "../CesiumWidget";

export default () => {
  storiesOf("CesiumWidget", module).addWithJSX("default", () => <CesiumWidget full />);
};
