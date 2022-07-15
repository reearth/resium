import { render } from "@testing-library/react";
import { Entity as CesiumEntity } from "cesium";
import { createRef } from "react";
import { expectType, TypeEqual } from "ts-expect";
import { expect, it, vi } from "vitest";

import { Provider, Merge, UnusedCesiumProps, CesiumComponentRef } from "../core";

import Entity, { EntityProps, cesiumEventProps, EntityOtherProps } from "./Entity";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumEntity, CesiumEntity.ConstructorOptions>,
  Omit<EntityProps, keyof EntityOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "isShowing" | "propertyNames";

expectType<TypeEqual<never, UnusedProps>>(true);

const context = () => ({
  entityCollection: {
    add: vi.fn(),
    remove: vi.fn(),
  },
});

const fn = () => {};

it("should mount", async () => {
  const ctx = context();
  const ref = createRef<CesiumComponentRef<CesiumEntity>>();
  render(
    <Provider value={ctx}>
      <Entity ref={ref} name="test" onDefinitionChange={fn} />
    </Provider>,
  );

  expect(ctx.entityCollection.add).toBeCalledWith(expect.any(CesiumEntity));
  expect(ref.current?.cesiumElement).toBeInstanceOf(CesiumEntity);
  expect(ref.current?.cesiumElement?.name).toBe("test");
  expect(ref.current?.cesiumElement?.definitionChanged.numberOfListeners).toBe(1);
});

it("should unmount", () => {
  const ctx = context();

  render(
    <Provider value={ctx}>
      <Entity />
    </Provider>,
  ).unmount();

  expect(ctx.entityCollection.remove).toBeCalledWith(expect.any(CesiumEntity));
});
