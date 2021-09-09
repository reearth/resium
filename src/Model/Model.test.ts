import { expectType, TypeEqual } from "ts-expect";
import { Model } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ModelProps } from "./Model";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Model, keyof ModelProps>;
type IgnoredProps = "activeAnimations";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
