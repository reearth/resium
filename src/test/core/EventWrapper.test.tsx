import React from "react";
import { ScreenSpaceEventType } from "cesium";
import { mount } from "enzyme";

import { Provider } from "../../core/context";
import createEventWrapper from "../../core/EventWrapper";
import createCesiumComponent from "../../core/CesiumComponent";

describe("core/EventWrapper", () => {
  it("should attach events to ScreenSpaceEventHandler", () => {
    const Component = createCesiumComponent<{}, {}, {}>({
      name: "test",
      create() {
        return {};
      },
    });
    const Wrapped = createEventWrapper(Component);
    const dummyScreenSpaceEventHandler = {
      setInputAction: jest.fn(),
      removeInputAction: jest.fn(),
    };

    const onClick = () => {
      /* dummy */
    };

    const wrapper = mount(
      <Provider value={{ screenSpaceEventHandler: dummyScreenSpaceEventHandler }}>
        <Wrapped onClick={onClick} />
      </Provider>,
    );

    expect(dummyScreenSpaceEventHandler.setInputAction).toBeCalledWith(
      onClick,
      ScreenSpaceEventType.LEFT_CLICK,
    );

    wrapper.unmount();

    expect(dummyScreenSpaceEventHandler.removeInputAction).toBeCalledWith(
      onClick,
      ScreenSpaceEventType.LEFT_CLICK,
    );
  });
});
