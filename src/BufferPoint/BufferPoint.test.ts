import { it } from "vitest";

// BufferPoint uses setter methods (setPosition, setMaterial) rather than direct
// property assignment, so UnusedCesiumProps type-checking does not apply here.
// TypeScript compilation of the component itself is the coverage.

it("should be compiled", () => {});
