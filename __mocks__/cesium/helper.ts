const mockCesiumElement = (obj: any = {}, disableConstructor?: boolean) => (opts?: any) => {
  if (!disableConstructor && typeof opts !== "undefined") {
    Object.entries(opts).forEach(([k, v]) => {
      obj[k] = v;
    });
  }
  return obj;
};

export default mockCesiumElement;
