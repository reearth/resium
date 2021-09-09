import { expectType, TypeEqual } from "ts-expect";
import { LabelGraphics } from "cesium";

import { UnusedCesiumProps, ValueOf, Merge } from "../core";
import { LabelGraphicsProps, cesiumEventProps } from "./LabelGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<LabelGraphics, LabelGraphics.ConstructorOptions>,
  keyof LabelGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
