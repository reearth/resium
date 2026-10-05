import { render, waitFor } from "@testing-library/react";
import type { BufferPolygonCollection as CesiumBufferPolygonCollection } from "cesium";
import { HeightReference, PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolygonCollection from "./BufferPolygonCollection";

// Cesium 1.145 exposes `heightReference` as a construction-only readonly getter
// on the collection, so mounting the wrapper and reading it back off the
// instance verifies the ctor forwarding end to end.
function mount(props: Record<string, unknown>) {
  const primitiveCollection = new PrimitiveCollection();
  const ref = createRef<CesiumComponentRef<CesiumBufferPolygonCollection>>();
  render(
    <Provider value={{ primitiveCollection }}>
      <BufferPolygonCollection ref={ref} primitiveCountMax={1} vertexCountMax={4} {...props} />
    </Provider>,
  );
  return ref;
}

it("defaults to no draping", async () => {
  const ref = mount({});
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.heightReference).toBe(HeightReference.NONE);
});

it("forwards heightReference to the collection", async () => {
  const ref = mount({ heightReference: HeightReference.CLAMP_TO_TERRAIN });
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.heightReference).toBe(HeightReference.CLAMP_TO_TERRAIN);
});
