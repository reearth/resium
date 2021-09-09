import { expectType, TypeEqual } from "ts-expect";
import { Scene } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { SceneProps, cesiumEventProps } from "./Scene";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Scene, keyof SceneProps | ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = "postProcessStages";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
