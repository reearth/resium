import type { Label } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { LabelOtherProps, LabelProps } from "./Label";

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
