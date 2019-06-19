import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Fog from "./Fog";

storiesOf("Fog", module)
  .add("Basic", () => (
    <Viewer full>
      <Fog />
    </Viewer>
  ))
  .add("disabled", () => (
    <Viewer full>
      <Fog enabled={false} />
    </Viewer>
  ));
