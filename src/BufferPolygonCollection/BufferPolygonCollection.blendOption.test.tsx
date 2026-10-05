import { render, waitFor } from "@testing-library/react";
import type { BufferPolygonCollection as CesiumBufferPolygonCollection } from "cesium";
import { BlendOption, PrimitiveCollection } from "cesium";
import { createRef } from "react";
import { expect, it } from "vitest";

import type { CesiumComponentRef } from "../core";
import { Provider } from "../core";

import BufferPolygonCollection from "./BufferPolygonCollection";

// Cesium 1.146 made `blendOption` settable after construction, so changing the
// prop must update the live collection instead of re-creating it.
it("updates blendOption in place", async () => {
  // A stable context value, as a real Viewer provides; a fresh object per render
  // would make the core treat it as a recreated parent and rebuild the collection.
  const context = { primitiveCollection: new PrimitiveCollection() };
  const ref = createRef<CesiumComponentRef<CesiumBufferPolygonCollection>>();
  const ui = (blendOption: BlendOption) => (
    <Provider value={context}>
      <BufferPolygonCollection
        ref={ref}
        primitiveCountMax={1}
        vertexCountMax={4}
        blendOption={blendOption}
      />
    </Provider>
  );

  const { rerender } = render(ui(BlendOption.OPAQUE));
  await waitFor(() => expect(ref.current?.cesiumElement).toBeDefined());
  const element = ref.current?.cesiumElement;
  expect(element?.blendOption).toBe(BlendOption.OPAQUE);

  rerender(ui(BlendOption.TRANSLUCENT));
  await waitFor(() =>
    expect(ref.current?.cesiumElement?.blendOption).toBe(
      BlendOption.TRANSLUCENT,
    ),
  );
  expect(ref.current?.cesiumElement).toBe(element);
});
