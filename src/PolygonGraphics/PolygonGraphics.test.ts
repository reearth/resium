import { expectType, TypeEqual } from "ts-expect";
import { PolygonGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PolygonGraphicsProps, cesiumEventProps } from "./PolygonGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PolygonGraphics, PolygonGraphics.ConstructorOptions>,
  keyof PolygonGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
