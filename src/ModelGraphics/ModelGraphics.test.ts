import { expectType, TypeEqual } from "ts-expect";
import { ModelGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { ModelGraphicsProps, cesiumEventProps } from "./ModelGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<ModelGraphics, ModelGraphics.ConstructorOptions>,
  keyof ModelGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
