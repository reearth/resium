/* eslint-disable @typescript-eslint/no-namespace */
import matchers, { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);
