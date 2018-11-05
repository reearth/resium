import {
  attachEvents,
  detachEvents,
  updateEvents,
  getEventProps,
  Events,
} from "../../utils/events";

describe("utils/events", () => {
  class EventMock {
    public events: Set<(...args: any[]) => void>;

    constructor(events?: Array<(...args: any[]) => void>) {
      this.events = new Set(events);
    }

    public addEventListener(e: (...args: any[]) => void) {
      this.events.add(e);
    }

    public removeEventListener(e: (...args: any[]) => void) {
      this.events.delete(e);
    }
  }

  it("should attach events", () => {
    const events: Events = {
      a: () => {
        /* dummy */
      },
    };

    const target = {
      a: new EventMock(),
      b: new EventMock(),
      c: new EventMock(),
    };

    expect(target.a.events.size).toBe(0);
    expect(target.b.events.size).toBe(0);
    expect(target.c.events.size).toBe(0);

    attachEvents(target, events);

    expect(target.a.events.size).toBe(1);
    expect(target.b.events.size).toBe(0);
    expect(target.c.events.size).toBe(0);
    expect(target.a.events.values().next().value).toBe(events.a);
  });

  it("should update events", () => {
    const prevEvents: Events = {
      a: () => {
        /* dummy */
      },
      b: () => {
        /* dummy */
      },
      c: () => {
        /* dummy */
      },
    };

    const newEvents: Events = {
      a: () => {
        /* dummy */
      },
    };

    const target = {
      a: new EventMock([prevEvents.a]),
      b: new EventMock([prevEvents.b]),
      c: new EventMock([prevEvents.c]),
    };

    expect(target.a.events.size).toBe(1);
    expect(target.b.events.size).toBe(1);
    expect(target.c.events.size).toBe(1);
    expect(target.a.events.values().next().value).toBe(prevEvents.a);
    expect(target.b.events.values().next().value).toBe(prevEvents.b);

    updateEvents(target, prevEvents, newEvents);

    expect(target.a.events.size).toBe(1);
    expect(target.b.events.size).toBe(0);
    expect(target.c.events.size).toBe(0);
    expect(target.a.events.values().next().value).toBe(newEvents.a);
  });

  it("should detach events", () => {
    const events: Events = {
      a: () => {
        /* dummy */
      },
    };

    const target = {
      a: new EventMock([events.a]),
      b: new EventMock(),
    };

    expect(target.a.events.size).toBe(1);
    expect(target.b.events.size).toBe(0);

    detachEvents(target, events);

    expect(target.a.events.size).toBe(0);
    expect(target.b.events.size).toBe(0);
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
