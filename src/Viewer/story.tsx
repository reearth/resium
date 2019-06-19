import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "./Viewer";

storiesOf("Viewer", module).add("Basic", () => <Viewer full />);
