import mockCesiumElement from "./helper";

export default mockCesiumElement(
  {
    setInputAction: jest.fn(),
    removeInputAction: jest.fn(),
    destroy: jest.fn(),
  },
  true,
);
