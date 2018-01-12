import React from "react";
import { KeyboardEventModifier, ScreenSpaceEventType } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ScreenSpaceEvent from "../ScreenSpaceEvent";
import ScreenSpaceEventHandler from "../ScreenSpaceEventHandler";

export default () => {

  storiesOf("ScreenSpaceEventHandler", module)
    .addWithJSX("default", () => (
      <Viewer full>
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent
            action={(...args) => console.log("1", ...args)}
            type={ScreenSpaceEventType.LEFT_CLICK} />
          <ScreenSpaceEvent
            action={(...args) => console.log("2", ...args)}
            type={ScreenSpaceEventType.RIGHT_CLICK}
            modifier={KeyboardEventModifier.SHIFT} />
        </ScreenSpaceEventHandler>
      </Viewer>
    ));

};
