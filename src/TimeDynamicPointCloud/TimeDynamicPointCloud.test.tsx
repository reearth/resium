import { render, waitFor } from "@testing-library/react";
import type { TimeDynamicPointCloud as CesiumTimeDynamicPointCloud } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { UnusedCesiumProps } from "../core";
import { Provider } from "../core";

import type TimeDynamicPointCloudComponent from "./TimeDynamicPointCloud";
import type {
  TimeDynamicPointCloudOtherProps,
  TimeDynamicPointCloudProps,
} from "./TimeDynamicPointCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CesiumTimeDynamicPointCloud,
  Omit<TimeDynamicPointCloudProps, keyof TimeDynamicPointCloudOtherProps>
>;
expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});

// Mimic Cesium's TimeDynamicPointCloud destroy semantics: destroy() unconditionally
// destroys _clippingPlanes (@cesium/engine/Source/Scene/TimeDynamicPointCloud.js#L798).
// The fake class is declared inside the factory because vi.mock is hoisted.
vi.mock("cesium", async () => {
  const actual = await vi.importActual<Record<string, unknown>>("cesium");
  class FakeTimeDynamicPointCloud {
    _clippingPlanes: { destroy: () => void } | undefined;
    destroyed = false;
    frameChanged = { addEventListener: vi.fn(), removeEventListener: vi.fn() };
    constructor(options: { clippingPlanes?: { destroy: () => void } }) {
      this._clippingPlanes = options.clippingPlanes;
    }
    isDestroyed() {
      return this.destroyed;
    }
    destroy() {
      this._clippingPlanes = this._clippingPlanes && (this._clippingPlanes.destroy() as undefined);
      this.destroyed = true;
    }
  }
  return { ...actual, TimeDynamicPointCloud: FakeTimeDynamicPointCloud };
});

describe("TimeDynamicPointCloud", () => {
  let TimeDynamicPointCloud: typeof TimeDynamicPointCloudComponent;

  beforeEach(async () => {
    console.warn = vi.fn();
    TimeDynamicPointCloud = (await import("./TimeDynamicPointCloud")).default;
  });

  const makeContext = () => {
    const primitiveCollection = {
      add: vi.fn(),
      remove: vi.fn(),
      isDestroyed: () => false,
    };
    const cesiumWidget = { clock: {} };
    return { primitiveCollection, cesiumWidget } as any;
  };

  it("does not destroy a user-supplied clippingPlanes on unmount", async () => {
    const destroy = vi.fn();
    const clippingPlanes = { destroy } as any;
    const ctx = makeContext();

    const { unmount } = render(
      <Provider value={ctx}>
        <TimeDynamicPointCloud clippingPlanes={clippingPlanes} />
      </Provider>,
    );

    await waitFor(() => {
      expect(ctx.primitiveCollection.add).toHaveBeenCalledTimes(1);
    });

    unmount();

    await waitFor(() => {
      expect(ctx.primitiveCollection.remove).toHaveBeenCalledTimes(1);
    });
    // The user-owned collection must survive unmount.
    expect(destroy).not.toHaveBeenCalled();
  });

  it("destroys the internal clippingPlanes when none was supplied by the user", async () => {
    const ctx = makeContext();

    const { unmount } = render(
      <Provider value={ctx}>
        <TimeDynamicPointCloud />
      </Provider>,
    );

    await waitFor(() => {
      expect(ctx.primitiveCollection.add).toHaveBeenCalledTimes(1);
    });

    // No throw: nothing user-owned to leak.
    expect(() => unmount()).not.toThrow();
  });
});
