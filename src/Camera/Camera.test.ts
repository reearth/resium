import { expectType, TypeEqual } from "ts-expect";
import { Camera } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { CameraProps, cesiumEventProps } from "./Camera";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Camera, keyof CameraProps | ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
