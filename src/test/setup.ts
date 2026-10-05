import "@testing-library/jest-dom/vitest";

// Vitest on GitHub Actions requires TransformStream to run tests with Cesium
import "web-streams-polyfill/polyfill";
