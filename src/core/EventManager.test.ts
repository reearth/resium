import { ScreenSpaceEventType } from "cesium";
import { describe, expect, it } from "vitest";

import EventManager from "./EventManager";

describe("core/EventManager", () => {
  const element = "element";
  const fn = () => () => {};

  it("should attach and dettach event", () => {
    const em = new EventManager();
    const sseh = em.getScreenSpaceEventHandler();

    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
    expect(sseh.getInputAction(ScreenSpaceEventType.MOUSE_MOVE)).toBe(undefined);

    em.on(element, "onClick", fn());
    em.on(element, "onMouseEnter", fn());
    em.commit();

    expect(typeof sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe("function");
    expect(typeof sseh.getInputAction(ScreenSpaceEventType.MOUSE_MOVE)).toBe("function");

    em.off(element, "onClick");
    em.off(element, "onMouseEnter");
    em.commit();

    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
    expect(sseh.getInputAction(ScreenSpaceEventType.MOUSE_MOVE)).toBe(undefined);
  });

  it("should update events", () => {
    const em = new EventManager();
    const sseh = em.getScreenSpaceEventHandler();

    em.setEvents(element, { onClick: fn() });
    expect(typeof sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe("function");
    em.setEvents(element, { onClick: undefined });
    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
  });

  it("should clear events", () => {
    const em = new EventManager();
    const sseh = em.getScreenSpaceEventHandler();

    em.setEvents(element, { onClick: fn() });
    expect(typeof sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe("function");
    em.clearEvents(element);
    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
  });

  it("should destroy", () => {
    const em = new EventManager();
    const sseh = em.getScreenSpaceEventHandler();

    expect(em.isDestroyed()).toBe(false);
    expect(sseh.isDestroyed()).toBe(false);

    em.destroy();

    expect(em.isDestroyed()).toBe(true);
    expect(sseh.isDestroyed()).toBe(true);
  });
});
