import { Label } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { LabelOtherProps, LabelProps } from "./Label";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Label,
  Omit<LabelProps, keyof LabelOtherProps | "id">,
  {},
  IgnoredProps
>;
type IgnoredProps = "totalScale" | "id"; // id is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
