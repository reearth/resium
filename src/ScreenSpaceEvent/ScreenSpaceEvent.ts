import type { ScreenSpaceEventType, KeyboardEventModifier, Cartesian2 } from "cesium";
import type { FC } from "react";
import { useEffect, useMemo } from "react";

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
  /**
   * Keyboard modifier(s) that must be held for the action to fire.
   *
   * - Single value (`KeyboardEventModifier.ALT`): action fires when only that modifier is held.
   * - Array (`[ALT, SHIFT]`): chord — action fires only when all listed modifiers are held simultaneously.
   *
   * Multi-key chords require Cesium 1.142+. Content-equal but reference-fresh arrays do not retrigger the underlying `setInputAction` call.
   */
  modifier?: KeyboardEventModifier | KeyboardEventModifier[];
  type: ScreenSpaceEventType;
};

const ScreenSpaceEvent: FC<ScreenSpaceEventProps> = ({ action, modifier, type }) => {
  const ctx = useCesium();

  // Stable identity for the modifier dep: numeric-sort + comma-join. Without
  // this, `modifier={[ALT, SHIFT]}` thrashes setInputAction on every render
  // because the array reference is fresh each time.
  const modifierKey = useMemo(
    () =>
      Array.isArray(modifier)
        ? [...modifier].sort((a, b) => a - b).join(",")
        : modifier ?? "",
    [modifier],
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, ctx.screenSpaceEventHandler, modifierKey, type]);

  return null;
};

export default ScreenSpaceEvent;
