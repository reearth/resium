import { attachEvents, detachEvents, updateEvents, getEventProps } from "../../utils/events";

describe("utils/events", () => {

  class EventMock {

    constructor(events = []) {
      this.events = new Set(events);
    }

    addEventListener(e) {
      this.events.add(e);
    }

    removeEventListener(e) {
      this.events.delete(e);
    }

  }

  it("should attach events", () => {
    const events = {
      a: () => { /* dummy */ },
      b: 1 // not a function
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
    const prevEvents = {
      a: () => { /* dummy */ },
      b: () => { /* dummy */ },
      c: () => { /* dummy */ },
    };

    const newEvents = {
      a: () => { /* dummy */ },
      b: 1 // not a function
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
    const events = {
      a: () => { /* dummy */ }
    };

    const target = {
      a: new EventMock([events.a]),
      b: new EventMock()
    };

    expect(target.a.events.size).toBe(1);
    expect(target.b.events.size).toBe(0);

    detachEvents(target, events);

    expect(target.a.events.size).toBe(0);
    expect(target.b.events.size).toBe(0);
  });

  it("should return event props", () => {
    const names = ["add", "remove", "loadingEvent"];
    const props = {
      onAdd: () => { /* dummy */ },
      onLoading: () => { /* dummy */ },
      remove: () => { /* dummy */ }
    };

    const result = getEventProps(names, props);

    // eslint-disable-next-line react/destructuring-assignment
    expect(result).toEqual({ add: props.onAdd, loadingEvent: props.onLoading });
    // eslint-disable-next-line react/destructuring-assignment
    expect(result.add).toBe(props.onAdd);
    // eslint-disable-next-line react/destructuring-assignment
    expect(result.loadingEvent).toBe(props.onLoading);
  });

});
