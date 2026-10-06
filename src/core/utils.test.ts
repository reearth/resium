import { expect, test, vi } from "vitest";

import { destroyPrimitiveCollectionChild, isPromise } from "./util";

test("isPromise", () => {
  expect(isPromise({})).toBeFalsy();
  expect(isPromise(Promise.resolve(undefined))).toBeTruthy();
});

test("destroyPrimitiveCollectionChild removes from the collection and destroys the element", () => {
  const element = { isDestroyed: vi.fn(() => false), destroy: vi.fn() };
  const primitiveCollection = { isDestroyed: vi.fn(() => false), remove: vi.fn() };

  destroyPrimitiveCollectionChild(element, { primitiveCollection });

  expect(primitiveCollection.remove).toHaveBeenCalledWith(element);
  expect(element.destroy).toHaveBeenCalled();
});

test("destroyPrimitiveCollectionChild skips remove when the collection is already destroyed", () => {
  const element = { isDestroyed: vi.fn(() => false), destroy: vi.fn() };
  const primitiveCollection = { isDestroyed: vi.fn(() => true), remove: vi.fn() };

  destroyPrimitiveCollectionChild(element, { primitiveCollection });

  expect(primitiveCollection.remove).not.toHaveBeenCalled();
  expect(element.destroy).toHaveBeenCalled();
});

test("destroyPrimitiveCollectionChild skips destroy when the element is already destroyed", () => {
  const element = { isDestroyed: vi.fn(() => true), destroy: vi.fn() };
  const primitiveCollection = { isDestroyed: vi.fn(() => false), remove: vi.fn() };

  destroyPrimitiveCollectionChild(element, { primitiveCollection });

  expect(primitiveCollection.remove).toHaveBeenCalledWith(element);
  expect(element.destroy).not.toHaveBeenCalled();
});

test("destroyPrimitiveCollectionChild is a no-op guard when there is no primitiveCollection", () => {
  const element = { isDestroyed: vi.fn(() => false), destroy: vi.fn() };

  expect(() => destroyPrimitiveCollectionChild(element, {})).not.toThrow();
  expect(element.destroy).toHaveBeenCalled();
});
