import { render, waitFor } from "@testing-library/react";
import type { BufferPolylineCollection as CesiumBufferPolylineCollection } from "cesium";
import { PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolylineCollection from "./BufferPolylineCollection";

// Cesium leaves picking off by default, and without `allowPicking` no child —
// pickObject included — can ever be picked. The collection has no public
// getter for it, so read the private field the constructor sets.
function mount(props: Record<string, unknown>) {
  const context = { primitiveCollection: new PrimitiveCollection() };
  const ref = createRef<CesiumComponentRef<CesiumBufferPolylineCollection>>();
  render(
    <Provider value={context}>
      <BufferPolylineCollection ref={ref} primitiveCountMax={1} vertexCountMax={2} {...props} />
    </Provider>,
  );
  return ref;
}

it("leaves picking off by default", async () => {
  const ref = mount({});
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect((ref.current?.cesiumElement as any)._allowPicking).toBe(false);
});

it("forwards allowPicking to the collection", async () => {
  const ref = mount({ allowPicking: true });
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect((ref.current?.cesiumElement as any)._allowPicking).toBe(true);
});
