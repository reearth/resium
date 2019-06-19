import React from "react";
import { storiesOf } from "@storybook/react";

import CesiumWidget from "./CesiumWidget";

storiesOf("CesiumWidget", module).add("Basic", () => <CesiumWidget full />);
