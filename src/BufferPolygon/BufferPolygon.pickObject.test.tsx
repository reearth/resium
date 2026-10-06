import { render, waitFor } from "@testing-library/react";
import type { BufferPolygon as CesiumBufferPolygon } from "cesium";
import { PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import BufferPolygonCollection from "../BufferPolygonCollection";
import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolygon from "./BufferPolygon";

// Cesium 1.146 exposes the custom pick object through a public `pickObject`
// getter, so reading it back off the primitive verifies the add() forwarding.
it("forwards pickObject to the primitive", async () => {
  const context = { primitiveCollection: new PrimitiveCollection() };
  const pickObject = { id: "feature-1" };
  const ref = createRef<CesiumComponentRef<CesiumBufferPolygon>>();
  render(
    <Provider value={context}>
      <BufferPolygonCollection primitiveCountMax={1} vertexCountMax={3}>
        <BufferPolygon
          ref={ref}
          positions={new Float64Array([0, 0, 0, 1, 0, 0, 0, 1, 0])}
          pickObject={pickObject}
        />
      </BufferPolygonCollection>
    </Provider>,
  );
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.pickObject).toBe(pickObject);
});
