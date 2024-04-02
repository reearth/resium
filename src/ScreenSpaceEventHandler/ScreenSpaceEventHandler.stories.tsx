import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, KeyboardEventModifier, ScreenSpaceEventType } from "cesium";

import Entity from "../Entity";
import ScreenSpaceEvent from "../ScreenSpaceEvent";
import Viewer from "../Viewer";

import ScreenSpaceEventHandler from "./ScreenSpaceEventHandler";

type Story = StoryObj<typeof ScreenSpaceEventHandler>;

export default {
  title: "ScreenSpaceEventHandler",
  component: ScreenSpaceEventHandler,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent
          action={action("Left Double Click")}
          type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK}
        />
        <ScreenSpaceEvent
          action={action("Shift + Right Click")}
          type={ScreenSpaceEventType.RIGHT_CLICK}
          modifier={KeyboardEventModifier.SHIFT}
        />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
  ),
};

export const DisableClick: Story = {
  render: args => (
    <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity
        name="test"
        description="test!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
      />
    </Viewer>
  ),
};

DisableClick.storyName = "Disable click";
