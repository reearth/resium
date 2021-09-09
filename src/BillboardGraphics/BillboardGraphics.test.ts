import { expectType, TypeEqual } from "ts-expect";
import { BillboardGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { BillboardGraphicsProps, cesiumEventProps } from "./BillboardGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<BillboardGraphics, BillboardGraphics.ConstructorOptions>,
  keyof BillboardGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
