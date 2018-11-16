import React from "react";
import * as Cesium from "cesium";
import { mount } from "enzyme";

import { Provider } from "../core/context";
import Entity, { EntityProps } from "../Entity";

describe("Entity", () => {
  const entity = new Cesium.Entity();
  const context = {
    entityCollection: {
      add: jest.fn(),
      remove: jest.fn(),
    },
  };

  // tslint:disable-next-line:no-empty
  const fn = () => () => {};

  it("should mount", () => {
    const wrapper = mount(
      <Provider value={context}>
        <Entity name="test" onDefinitionChange={fn()} />
      </Provider>,
    );

    expect(context.entityCollection.add).toBeCalledWith(entity);
    expect(entity.name).toBe("test");
    // TODO: reset entity stub for each tests
    // expect(entity.definitionChanged.numberOfListeners).toBe(1);
  });

  it("should update", () => {
    const Component: React.SFC<EntityProps> = props => (
      <Provider value={context}>
        <Entity {...props} />
      </Provider>
    );

    mount(<Component />).setProps({ name: "test2", onDefinitionChange: fn() });

    expect(entity.name).toBe("test2");
    // TODO: reset entity stub for each tests
    // expect(entity.definitionChanged.numberOfListeners).toBe(1);
  });

  it("should unmount", () => {
    mount(
      <Provider value={context}>
        <Entity />
      </Provider>,
    ).unmount();

    expect(context.entityCollection.remove).toBeCalledWith(entity);
  });
});
