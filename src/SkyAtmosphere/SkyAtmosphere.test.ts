import { expectType, TypeEqual } from "ts-expect";
import { SkyAtmosphere } from "cesium";

import { UnusedCesiumProps } from "../core";
import { SkyAtmosphereProps } from "./SkyAtmosphere";

// Unused prop check
type UnusedProps = UnusedCesiumProps<SkyAtmosphere, keyof SkyAtmosphereProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
