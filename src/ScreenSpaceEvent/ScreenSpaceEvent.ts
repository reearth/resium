import { ScreenSpaceEventType, KeyboardEventModifier, Cartesian2 } from "cesium";
import { useEffect, FC } from "react";

import { useCesium } from "../core";

// @noCesiumElement

/*
@summary
`ScreenSpaceEvent` is an event callback for mouse or touch interactions.

See also: [ScreenSpaceEventHandler#setInputAction](https://cesium.com/docs/cesiumjs-ref-doc/ScreenSpaceEventHandler.html?classFilter=screenspa#setInputAction)
*/

/*
@scope
Only inside [ScreenSpaceEventHandler](/components/ScreenSpaceEventHandler).
*/

export type ScreenSpaceEventProps = {
  /** If empty, the event will be removed even if there is the default event. */
  action?: (
    e: { position: Cartesian2 } | { startPosition: Cartesian2; endPosition: Cartesian2 },
  ) => void;
  modifier?: KeyboardEventModifier;
  type: ScreenSpaceEventType;
};

const ScreenSpaceEvent: FC<ScreenSpaceEventProps> = ({ action, modifier, type }) => {
  const ctx = useCesium();

  useEffect(() => {
    if (!ctx.screenSpaceEventHandler || ctx.screenSpaceEventHandler.isDestroyed()) return;
    if (action) {
      ctx.screenSpaceEventHandler.setInputAction(action as () => void, type, modifier);
      return () => {
        if (!ctx.screenSpaceEventHandler || ctx.screenSpaceEventHandler.isDestroyed()) return;
        ctx.screenSpaceEventHandler.removeInputAction(type, modifier);
      };
    } else {
      ctx.screenSpaceEventHandler.removeInputAction(type, modifier);
    }
    return undefined;
  }, [action, ctx.screenSpaceEventHandler, modifier, type]);

  return null;
};

export default ScreenSpaceEvent;
