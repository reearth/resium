/* eslint-disable @typescript-eslint/no-namespace */
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import "@testing-library/jest-dom/vitest";

// Vitest on GitHub Actions requires TransformStream to run tests with Cesium
import "web-streams-polyfill/polyfill";

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}
