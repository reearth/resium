import { ScreenSpaceEventType } from "cesium";

import EventManager from "../../core/EventManager";

describe("core/EventManager", () => {
  const element = "element";
  // tslint:disable-next-line:no-empty
  const fn = () => () => {};

  it("should attach and dettach event", () => {
    const em: EventManager = new (EventManager as any)();
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
    const em: EventManager = new (EventManager as any)();
    const sseh = em.getScreenSpaceEventHandler();

    em.setEvents(element, { onClick: fn() });
    expect(typeof sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe("function");
    em.setEvents(element, { onClick: undefined });
    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
  });

  it("should clear events", () => {
    const em: EventManager = new (EventManager as any)();
    const sseh = em.getScreenSpaceEventHandler();

    em.setEvents(element, { onClick: fn() });
    expect(typeof sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe("function");
    em.clearEvents(element);
    expect(sseh.getInputAction(ScreenSpaceEventType.LEFT_CLICK)).toBe(undefined);
  });

  it("should destroy", () => {
    const em: EventManager = new (EventManager as any)();
    const sseh = em.getScreenSpaceEventHandler();

    expect(em.isDestroyed()).toBe(false);
    expect(sseh.isDestroyed()).toBe(false);

    em.destroy();

    expect(em.isDestroyed()).toBe(true);
    expect(sseh.isDestroyed()).toBe(true);
  });
});
