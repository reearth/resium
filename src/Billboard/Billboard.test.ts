import { Billboard } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { BillboardProps, BillboardOtherProps } from "./Billboard";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Billboard,
  Omit<BillboardProps, keyof BillboardOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "ready" | "id"; // id is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
