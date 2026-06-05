import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  MVTDataProviderCesiumReadonlyProps,
  MVTDataProviderOtherProps,
  MVTDataProviderProps,
  MVTDataProviderShape,
} from "./MVTDataProvider";

// Unused prop check. First type argument is the *augmented* MVTDataProviderShape
// (declared in MVTDataProvider.ts) — Cesium's raw `MVTDataProvider` d.ts only
// exposes a static `fromUrl` with no instance members, so the augmentation is
// what the wrapper actually instantiates and exposes.
type UnusedProps = UnusedCesiumProps<
  MVTDataProviderShape,
  Omit<
    MVTDataProviderProps,
    keyof MVTDataProviderOtherProps | keyof MVTDataProviderCesiumReadonlyProps
  >,
  {},
  IgnoredProps
>;
// `tileset` is a read-only getter consumers reach via ref / `getTileset(provider)`,
// not via a wrapper prop. The other augmented members (`update`, `isDestroyed`,
// `destroy`) are functions and are filtered automatically by UnusedCesiumProps.
type IgnoredProps = "tileset";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
