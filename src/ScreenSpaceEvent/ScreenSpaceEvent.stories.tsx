import { Meta, StoryObj } from "@storybook/react";
import { KeyboardEventModifier, ScreenSpaceEventType } from "cesium";
import { useState } from "react";

import ScreenSpaceEventHandler from "../ScreenSpaceEventHandler";
import Viewer from "../Viewer";

import ScreenSpaceEvent from "./ScreenSpaceEvent";

type Story = StoryObj<typeof ScreenSpaceEvent>;

export default {
  title: "ScreenSpaceEvent",
  component: ScreenSpaceEvent,
} as Meta;

/**
 * Demonstrates plain, single-modifier, and chord-modifier bindings on the same
 * event type. Click the viewer to see which combination fired in the overlay.
 * Chord modifiers (`[ALT, SHIFT]`) require Cesium 1.142+.
 */
export const Chord: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [log, setLog] = useState<string[]>([]);
    const append = (line: string) => setLog(prev => [...prev.slice(-5), line]);
    return (
      <Viewer full>
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent
            action={() => append("LEFT_CLICK")}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
          <ScreenSpaceEvent
            action={() => append("LEFT_CLICK + ALT")}
            modifier={KeyboardEventModifier.ALT}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
          <ScreenSpaceEvent
            action={() => append("LEFT_CLICK + ALT + SHIFT")}
            modifier={[KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT]}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
        </ScreenSpaceEventHandler>
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            padding: 12,
            background: "rgba(0,0,0,0.75)",
            color: "white",
            fontFamily: "monospace",
            fontSize: 12,
            borderRadius: 4,
            pointerEvents: "none",
            minWidth: 240,
          }}>
          <div>Click anywhere on the globe:</div>
          {log.length === 0 ? <div>· no events yet</div> : log.map((l, i) => <div key={i}>· {l}</div>)}
        </div>
      </Viewer>
    );
  },
};
