import { EquirectangularPanorama } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  EquirectangularPanoramaConstructorProps,
  EquirectangularPanoramaProps,
} from "./EquirectangularPanorama";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  EquirectangularPanorama,
  Omit<EquirectangularPanoramaProps, keyof EquirectangularPanoramaConstructorProps>,
  {},
  never
>;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
