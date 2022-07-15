import { expectType, TypeEqual } from "ts-expect";
import { Camera } from "cesium";

import { UnusedCesiumProps } from "../core";
import { CameraProps, cesiumEventProps } from "./Camera";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Camera, CameraProps, typeof cesiumEventProps, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
