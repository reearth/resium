import { it } from "vitest";

// BufferPolygon uses setter methods (setPositions, setHoles, setTriangles, setMaterial)
// rather than direct property assignment, so UnusedCesiumProps type-checking does not apply.

it("should be compiled", () => {});
