import type { EquirectangularPanorama } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
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
