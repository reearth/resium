import { expectType, TypeEqual } from "ts-expect";
import { CesiumWidget } from "cesium";

import { UnusedCesiumProps } from "../core";
import { CesiumWidgetProps } from "./CesiumWidget";

// Unused prop check
type UnusedProps = UnusedCesiumProps<CesiumWidget, keyof CesiumWidgetProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
