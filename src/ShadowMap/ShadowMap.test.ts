import { expectType, TypeEqual } from "ts-expect";
import { ShadowMap } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ShadowMapProps } from "./ShadowMap";

// Unused prop check
type UnusedProps = UnusedCesiumProps<ShadowMap, keyof ShadowMapProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
