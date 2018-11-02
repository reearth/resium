import React from "react";
import { KeyboardEventModifier, ScreenSpaceEventType } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import ScreenSpaceEvent from "../ScreenSpaceEvent";
import ScreenSpaceEventHandler from "../ScreenSpaceEventHandler";

export default () => {
  storiesOf("ScreenSpaceEventHandler", module).add("default", () => (
    <Viewer full>
      <ScreenSpaceEventHandler>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent
          action={action("Shift + Right Click")}
          type={ScreenSpaceEventType.RIGHT_CLICK}
          modifier={KeyboardEventModifier.SHIFT}
        />
      </ScreenSpaceEventHandler>
    </Viewer>
  ));
};
