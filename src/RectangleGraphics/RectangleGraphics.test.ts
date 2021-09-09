import { expectType, TypeEqual } from "ts-expect";
import { RectangleGraphics } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { RectangleGraphicsProps, cesiumEventProps } from "./RectangleGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  RectangleGraphics,
  keyof RectangleGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
