import { expect, test } from "vitest";

import { isPromise } from "./util";

test("isPromise", () => {
  expect(isPromise({})).toBeFalsy();
  expect(isPromise(Promise.resolve(undefined))).toBeTruthy();
});
