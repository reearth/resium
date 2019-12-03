/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Entity as CesiumEntity } from "cesium";
import { mount } from "enzyme";

import { Provider } from "../core/context";
import Entity, { EntityProps } from "./Entity";
import { reset } from "../../__mocks__/cesium/Entity";

describe("Entity", () => {
  const context = {
    entityCollection: {
      add: jest.fn(),
      remove: jest.fn(),
    },
  };

  const fn = () => () => {};

  afterEach(() => {
    reset();
  });

  it("should mount", () => {
    const entity = new CesiumEntity();

    mount(
      <Provider value={context}>
        <Entity name="test" onDefinitionChange={fn()} />
      </Provider>,
    );

    expect(context.entityCollection.add).toBeCalledWith(entity);
    expect(entity.name).toBe("test");
    expect(entity.definitionChanged.numberOfListeners).toBe(1);
  });

  it("should update", () => {
    const entity = new CesiumEntity();

    const Component: React.FC<EntityProps> = props => (
      <Provider value={context}>
        <Entity {...props} />
      </Provider>
    );

    mount(<Component />).setProps({ name: "test2", onDefinitionChange: fn() });

    expect(entity.name).toBe("test2");
    expect(entity.definitionChanged.numberOfListeners).toBe(1);
  });

  it("should unmount", () => {
    const entity = new CesiumEntity();

    mount(
      <Provider value={context}>
        <Entity />
      </Provider>,
    ).unmount();

    expect(context.entityCollection.remove).toBeCalledWith(entity);
  });
});
