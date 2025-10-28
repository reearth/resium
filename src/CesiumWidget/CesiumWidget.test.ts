import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  Target,
  CesiumWidgetProps,
  CesiumWidgetOtherProps,
} from "./CesiumWidget";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<CesiumWidgetProps, keyof CesiumWidgetOtherProps>,
  {},
  IgnoredProps
>;
// contextOptions is actually used but UnusedCesiumProps omits contextOptions from CesiumWidget props
// trackedEntityChanged is a readonly event
type IgnoredProps = "contextOptions" | "trackedEntityChanged";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
