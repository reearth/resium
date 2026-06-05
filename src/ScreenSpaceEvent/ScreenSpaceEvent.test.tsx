import { render } from "@testing-library/react";
import { KeyboardEventModifier, ScreenSpaceEventType } from "cesium";
import { expect, it, vi } from "vitest";

import { CesiumContext } from "../core/context";

import ScreenSpaceEvent from "./ScreenSpaceEvent";

function mountWith({
  action,
  modifier,
}: {
  action: () => void;
  modifier?: KeyboardEventModifier | KeyboardEventModifier[];
}) {
  const setInputAction = vi.fn();
  const removeInputAction = vi.fn();
  const isDestroyed = vi.fn().mockReturnValue(false);
  const screenSpaceEventHandler = { setInputAction, removeInputAction, isDestroyed } as any;
  const utils = render(
    <CesiumContext.Provider value={{ screenSpaceEventHandler } as any}>
      <ScreenSpaceEvent
        action={action}
        modifier={modifier}
        type={ScreenSpaceEventType.LEFT_CLICK}
      />
    </CesiumContext.Provider>,
  );
  return { ...utils, setInputAction, removeInputAction, screenSpaceEventHandler };
}

it("forwards a single KeyboardEventModifier verbatim to setInputAction", () => {
  const action = vi.fn();
  const { setInputAction } = mountWith({ action, modifier: KeyboardEventModifier.ALT });

  expect(setInputAction).toHaveBeenCalledTimes(1);
  expect(setInputAction).toHaveBeenCalledWith(
    action,
    ScreenSpaceEventType.LEFT_CLICK,
    KeyboardEventModifier.ALT,
  );
});

it("forwards a KeyboardEventModifier[] verbatim to setInputAction (chord)", () => {
  const action = vi.fn();
  const chord = [KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT];
  const { setInputAction } = mountWith({ action, modifier: chord });

  expect(setInputAction).toHaveBeenCalledTimes(1);
  expect(setInputAction).toHaveBeenCalledWith(action, ScreenSpaceEventType.LEFT_CLICK, chord);
});

it("does not re-call setInputAction when a content-equal array is passed on re-render", () => {
  const action = vi.fn();
  const setInputAction = vi.fn();
  const removeInputAction = vi.fn();
  const isDestroyed = vi.fn().mockReturnValue(false);
  const screenSpaceEventHandler = { setInputAction, removeInputAction, isDestroyed } as any;
  const ctx = { screenSpaceEventHandler } as any;

  const { rerender } = render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceEvent
        action={action}
        modifier={[KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT]}
        type={ScreenSpaceEventType.LEFT_CLICK}
      />
    </CesiumContext.Provider>,
  );

  // Same content, different reference.
  rerender(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceEvent
        action={action}
        modifier={[KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT]}
        type={ScreenSpaceEventType.LEFT_CLICK}
      />
    </CesiumContext.Provider>,
  );

  expect(setInputAction).toHaveBeenCalledTimes(1);
  expect(removeInputAction).not.toHaveBeenCalled();
});
