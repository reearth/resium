import { render, waitFor } from "@testing-library/react";
import { HeightReference, MVTDataProvider as CesiumMVTDataProvider, PrimitiveCollection } from "cesium";
import { afterEach, expect, it, vi } from "vitest";

import { Provider } from "../core";

import MVTDataProvider from "./MVTDataProvider";

afterEach(() => {
  vi.restoreAllMocks();
});

// `fromUrl` is stubbed out because the real one performs network I/O. The
// wrapper's contract under test is purely which options it hands to Cesium:
// a clamping `heightReference` is invalid without a `scene`, so the wrapper
// must supply the ambient one — and must NOT inject a scene otherwise.
function mountWithSpy(props: Record<string, unknown>) {
  const scene = { id: "ambient-scene" } as never;
  const fromUrl = vi
    .spyOn(CesiumMVTDataProvider, "fromUrl")
    .mockResolvedValue({ show: true, isDestroyed: () => false, destroy: () => {} } as never);
  render(
    <Provider value={{ primitiveCollection: new PrimitiveCollection(), scene }}>
      <MVTDataProvider url="https://example.invalid/{z}/{x}/{y}.pbf" {...props} />
    </Provider>,
  );
  return { fromUrl, scene };
}

it("passes the ambient scene when heightReference asks for draping", async () => {
  const { fromUrl, scene } = mountWithSpy({ heightReference: HeightReference.CLAMP_TO_3D_TILE });
  await waitFor(() => expect(fromUrl).toHaveBeenCalledTimes(1));
  const options = fromUrl.mock.calls[0][1];
  expect(options?.heightReference).toBe(HeightReference.CLAMP_TO_3D_TILE);
  expect(options?.scene).toBe(scene);
});

it("does not inject a scene when heightReference is omitted", async () => {
  const { fromUrl } = mountWithSpy({});
  await waitFor(() => expect(fromUrl).toHaveBeenCalledTimes(1));
  const options = fromUrl.mock.calls[0][1];
  expect(options?.heightReference).toBeUndefined();
  expect(options).not.toHaveProperty("scene");
});
