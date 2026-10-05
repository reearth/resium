import { render, waitFor } from "@testing-library/react";
import type { BufferPoint as CesiumBufferPoint } from "cesium";
import { Cartesian3, PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import BufferPointCollection from "../BufferPointCollection";
import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPoint from "./BufferPoint";

// Cesium 1.146 exposes the custom pick object through a public `pickObject`
// getter, so reading it back off the primitive verifies the add() forwarding.
it("forwards pickObject to the primitive", async () => {
  const context = { primitiveCollection: new PrimitiveCollection() };
  const pickObject = { id: "feature-1" };
  const ref = createRef<CesiumComponentRef<CesiumBufferPoint>>();
  render(
    <Provider value={context}>
      <BufferPointCollection primitiveCountMax={1}>
        <BufferPoint
          ref={ref}
          position={Cartesian3.fromDegrees(0, 0)}
          pickObject={pickObject}
        />
      </BufferPointCollection>
    </Provider>,
  );
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  expect(ref.current?.cesiumElement?.pickObject).toBe(pickObject);
});

// Cesium documents pickObject as an object and falls back to its default pick
// result for falsy values, so primitives are rejected at the type level.
export const rejectsNonObjectPickObject = () => (
  // @ts-expect-error `false` is not an object
  <BufferPoint pickObject={false} />
);
