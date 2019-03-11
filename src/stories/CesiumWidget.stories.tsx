import React from "react";
import { storiesOf } from "@storybook/react";

import CesiumWidget from "../CesiumWidget";

storiesOf("CesiumWidget", module).add("default", () => <CesiumWidget full />);
