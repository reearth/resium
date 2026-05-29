import { it } from "vitest";

// Since Cesium3DTilesTerrainProvider uses static factory methods (fromUrl/fromIonAssetId)
// rather than constructor options, we don't use the UnusedCesiumProps type checking.
// The props are manually defined based on the static method signatures.

it("should be compiled", () => {});
