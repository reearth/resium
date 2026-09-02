import { render, waitFor } from "@testing-library/react";
import type { BufferPolylineCollection as CesiumBufferPolylineCollection } from "cesium";
import { HeightReference, PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolylineCollection from "./BufferPolylineCollection";

// Cesium 1.145 exposes `heightReference` and `widthUnits` as construction-only
// readonly getters on the collection, so mounting the wrapper and reading them
// back off the instance verifies the ctor forwarding end to end.
function mount(props: Record<string, unknown>) {
  const primitiveCollection = new PrimitiveCollection();
  const ref = createRef<CesiumComponentRef<CesiumBufferPolylineCollection>>();
  render(
    <Provider value={{ primitiveCollection }}>
      <BufferPolylineCollection ref={ref} primitiveCountMax={1} vertexCountMax={2} {...props} />
    </Provider>,
  );
  return ref;
}

it("defaults to no draping and pixel widths", async () => {
  const ref = mount({});
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.heightReference).toBe(HeightReference.NONE);
  expect(ref.current?.cesiumElement?.widthUnits).toBe("pixels");
});

it("forwards heightReference to the collection", async () => {
  const ref = mount({ heightReference: HeightReference.CLAMP_TO_GROUND });
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.heightReference).toBe(HeightReference.CLAMP_TO_GROUND);
});

it("forwards widthUnits to the collection", async () => {
  const ref = mount({ widthUnits: "meters" });
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.widthUnits).toBe("meters");
});
