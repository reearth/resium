import { Event } from "cesium";

export type EventFunc = (...args: any[]) => any;

export interface Target {
  [key: string]: Event | unknown;
}

export interface Events {
  [key: string]: EventFunc;
}

export const attachEvents = (target: unknown, events: Events) => {
  Object.entries(events).forEach(([k, v]) => {
    const ev = (target as Target)[k];
    if (ev instanceof Event) {
      ev.addEventListener(v);
    }
  });
};

export const detachEvents = (target: unknown, events: Events) => {
  Object.entries(events).forEach(([k, v]) => {
    const ev = (target as Target)[k];
    if (ev instanceof Event) {
      ev.removeEventListener(v);
    }
  });
};

export const updateEvents = (target: unknown, prevEvents: Events, newEvents: Events) => {
  const pek = Object.keys(prevEvents);
  const nek = Object.keys(newEvents);

  // removed events
  const re = pek.map<[string, EventFunc]>(k => [k, prevEvents[k]]).reduce<Events>((e, [k, v]) => {
    if (nek.indexOf(k) === -1 || v !== newEvents[k]) {
      e[k] = v;
    }
    return e;
  }, {});

  // new events
  const ne = nek.map<[string, EventFunc]>(k => [k, newEvents[k]]).reduce<Events>((e, [k, v]) => {
    if (pek.indexOf(k) === -1 || v !== prevEvents[k]) {
      e[k] = v;
    }
    return e;
  }, {});

  detachEvents(target, re);
  attachEvents(target, ne);
};

export const getEventProps = (eventNames: string[], props: Events) =>
  eventNames.reduce<{ [key: string]: EventFunc }>(
    (a, b) => ({
      ...a,
      [b]: props[`on${b[0].toUpperCase()}${b.slice(1).replace(/Event$/, "")}`],
    }),
    {},
  );
