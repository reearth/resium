import { Event } from "cesium";
import { attachEvents, detachEvents, updateEvents, getEventProps, Events } from "../../core/events";

describe("core/events", () => {
  it("should attach events", () => {
    const events: Events = {
      a: jest.fn(),
    };

    const target = {
      a: new Event(),
      b: new Event(),
      c: new Event(),
    };

    expect(target.a.numberOfListeners).toBe(0);
    expect(target.b.numberOfListeners).toBe(0);
    expect(target.c.numberOfListeners).toBe(0);

    attachEvents(target, events);

    expect(target.a.numberOfListeners).toBe(1);
    expect(target.b.numberOfListeners).toBe(0);
    expect(target.c.numberOfListeners).toBe(0);

    target.a.raiseEvent();
    expect(events.a).toBeCalledTimes(1);
  });

  it("should update events", () => {
    const prevEvents: Events = {
      a: jest.fn(),
      b: () => {
        // dummy
      },
      c: () => {
        // dummy
      },
    };

    const newEvents: Events = {
      a: jest.fn(),
    };

    const eventA = new Event();
    eventA.addEventListener(prevEvents.a);
    const eventB = new Event();
    eventB.addEventListener(prevEvents.b);
    const eventC = new Event();
    eventC.addEventListener(prevEvents.c);

    const target = {
      a: eventA,
      b: eventB,
      c: eventC,
    };

    expect(target.a.numberOfListeners).toBe(1);
    expect(target.b.numberOfListeners).toBe(1);
    expect(target.c.numberOfListeners).toBe(1);

    updateEvents(target, prevEvents, newEvents);

    expect(target.a.numberOfListeners).toBe(1);
    expect(target.b.numberOfListeners).toBe(0);
    expect(target.c.numberOfListeners).toBe(0);

    target.a.raiseEvent();
    expect(prevEvents.a).not.toBeCalled();
    expect(newEvents.a).toBeCalledTimes(1);
  });

  it("should detach events", () => {
    const events: Events = {
      a: jest.fn(),
    };

    const eventA = new Event();
    eventA.addEventListener(events.a);
    const eventB = new Event();

    const target = {
      a: eventA,
      b: eventB,
    };

    expect(target.a.numberOfListeners).toBe(1);
    expect(target.b.numberOfListeners).toBe(0);

    detachEvents(target, events);

    expect(target.a.numberOfListeners).toBe(0);
    expect(target.b.numberOfListeners).toBe(0);

    target.a.raiseEvent();
    expect(events.a).not.toBeCalled();
  });

  it("should return event props", () => {
    const names = ["add", "remove", "loadingEvent"];
    const props: Events = {
      onAdd: () => {
        /* dummy */
      },
      onLoading: () => {
        /* dummy */
      },
      remove: () => {
        /* dummy */
      },
    };

    const result = getEventProps(names, props);

    expect(result).toEqual({ add: props.onAdd, loadingEvent: props.onLoading });
    expect(result.add).toBe(props.onAdd);
    expect(result.loadingEvent).toBe(props.onLoading);
  });
});
