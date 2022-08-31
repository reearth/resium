/* eslint-disable @typescript-eslint/no-namespace */
import matchers, { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// Vitest on GitHub Actions requires TransformStream to run tests with Cesium
import "web-streams-polyfill/es2018";

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);
