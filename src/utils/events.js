export const attachEvents = (target, events) => {
  Object.entries(events).forEach(([k, v]) => {
    if (typeof v !== "function") return;
    target[k].addEventListener(v);
  });
};

export const detachEvents = (target, events) => {
  Object.entries(events).forEach(([k, v]) => {
    if (typeof v !== "function") return;
    target[k].removeEventListener(v);
  });
};

export const updateEvents = (target, prevEvents, newEvents) => {
  const pek = Object.keys(prevEvents);
  const nek = Object.keys(newEvents);

  // removed events
  const re = pek.map(k => [k, prevEvents[k]]).reduce((e, [k, v]) => {
    if (nek.indexOf(k) === -1 || v !== newEvents[k] || typeof v !== "function") {
      e[k] = v;
    }
    return e;
  }, {});

  // new events
  const ne = nek.map(k => [k, newEvents[k]]).reduce((e, [k, v]) => {
    if ((pek.indexOf(k) === -1 || v !== prevEvents[k]) && typeof v === "function") {
      e[k] = v;
    }
    return e;
  }, {});

  detachEvents(target, re);
  attachEvents(target, ne);
};

// eslint-disable-next-line react/destructuring-assignment
export const getEventProps = (eventNames, props) => eventNames.reduce((a, b) => {
  const pn = `on${b[0].toUpperCase()}${b.slice(1).replace(/Event$/, "")}`;
  // eslint-disable-next-line react/destructuring-assignment
  return typeof props[pn] === "function" ? {
    ...a,
    // eslint-disable-next-line react/destructuring-assignment
    [b]: props[pn]
  } : a;
}, {});
