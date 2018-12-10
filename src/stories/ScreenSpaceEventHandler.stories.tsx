import React from "react";
import { KeyboardEventModifier, ScreenSpaceEventType, Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Entity from "../Entity";
import ScreenSpaceEvent from "../ScreenSpaceEvent";
import ScreenSpaceEventHandler from "../ScreenSpaceEventHandler";

export default () => {
  storiesOf("ScreenSpaceEventHandler", module)
    .add("default", () => (
      <Viewer full>
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
          <ScreenSpaceEvent
            action={action("Right Click")}
            type={ScreenSpaceEventType.RIGHT_CLICK}
          />
          <ScreenSpaceEvent
            action={action("Left Double Click")}
            type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK}
          />
          <ScreenSpaceEvent
            action={action("Shift + Right Click")}
            type={ScreenSpaceEventType.RIGHT_CLICK}
            modifier={KeyboardEventModifier.SHIFT}
          />
        </ScreenSpaceEventHandler>
      </Viewer>
    ))
    .add("Disable click", () => (
      <Viewer full>
        <ScreenSpaceEventHandler useDefault>
          <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
        </ScreenSpaceEventHandler>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
        />
      </Viewer>
    ));
};
