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


const regex = /^on([A-Z])/;

// eslint-disable-next-line react/destructuring-assignment
export const getEventProps = (eventNames, props) => Object.keys(props).reduce((a, b) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (!regex.test(b) || typeof props[b] !== "function") {
    return a;
  }
  const en = b.replace(regex, (m, p) => p.toLowerCase());
  if (eventNames.indexOf(en) >= 0) {
    a[en] = props[b];
  }
  return a;
}, {});
