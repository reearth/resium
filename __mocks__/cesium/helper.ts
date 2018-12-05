import { Event } from "cesium";

const init = (keys: string[]) =>
  keys.reduce(
    (a, b) => ({
      ...a,
      [b]: new Event(),
    }),
    {},
  ) as any;

const mockCesiumElement = (keys: string[] = [], disableConstructor?: boolean) => {
  let dummyObj = init(keys);

  return {
    element: (opts?: any) => {
      if (!disableConstructor && typeof opts !== "undefined") {
        Object.entries(opts).forEach(([k, v]) => {
          dummyObj[k] = v;
        });
      }
      return dummyObj;
    },
    reset: () => {
      dummyObj = init(keys);
    },
  };
};

export default mockCesiumElement;
