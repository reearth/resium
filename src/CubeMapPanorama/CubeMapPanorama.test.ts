import type { CubeMapPanorama } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { CubeMapPanoramaConstructorProps, CubeMapPanoramaProps } from "./CubeMapPanorama";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CubeMapPanorama,
  Omit<CubeMapPanoramaProps, keyof CubeMapPanoramaConstructorProps>,
  {},
  IgnoredProps
>;
// sources is typed as `any` in Cesium, which causes TypeScript to misclassify it
// as a function type and exclude it from CesiumPureProps — ignore it in this check
type IgnoredProps = "sources";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
