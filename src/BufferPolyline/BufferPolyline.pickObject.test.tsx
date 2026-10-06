import { render, waitFor } from "@testing-library/react";
import type { BufferPolyline as CesiumBufferPolyline } from "cesium";
import { PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import BufferPolylineCollection from "../BufferPolylineCollection";
import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolyline from "./BufferPolyline";

// Cesium 1.146 exposes the custom pick object through a public `pickObject`
// getter, so reading it back off the primitive verifies the add() forwarding.
it("forwards pickObject to the primitive", async () => {
  const context = { primitiveCollection: new PrimitiveCollection() };
  const pickObject = { id: "feature-1" };
  const ref = createRef<CesiumComponentRef<CesiumBufferPolyline>>();
  render(
    <Provider value={context}>
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={2}>
        <BufferPolyline
          ref={ref}
          positions={new Float64Array([0, 0, 0, 1, 1, 1])}
          pickObject={pickObject}
        />
      </BufferPolylineCollection>
    </Provider>,
  );
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.pickObject).toBe(pickObject);
});
