import type { Billboard } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { BillboardProps, BillboardOtherProps } from "./Billboard";

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
