import { expectType, TypeEqual } from "ts-expect";
import { ScreenSpaceEventHandler } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ScreenSpaceEventHandlerProps } from "./ScreenSpaceEventHandler";

// Unused prop check
type UnusedProps = UnusedCesiumProps<ScreenSpaceEventHandler, keyof ScreenSpaceEventHandlerProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
