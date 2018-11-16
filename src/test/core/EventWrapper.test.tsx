import React from "react";
import { ScreenSpaceEventHandler, ScreenSpaceEventType } from "cesium";
import { mount } from "enzyme";

import { Provider } from "../../core/context";
import createEventWrapper from "../../core/EventWrapper";
import createCesiumComponent from "../../core/CesiumComponent";

describe("core/EventWrapper", () => {
  it("should attach events to ScreenSpaceEventHandler", () => {
    const sseh = new ScreenSpaceEventHandler();
    const Component = createCesiumComponent<{}, {}, {}>({
      name: "test",
      create() {
        return {};
      },
    });
    const Wrapped = createEventWrapper(Component);
    const onClick = () => {
      /* dummy */
    };

    const wrapper = mount(
      <Provider value={{ cesiumWidget: {} }}>
        <Wrapped onClick={onClick} />
      </Provider>,
    );

    expect(sseh.setInputAction).toBeCalledWith(
      expect.any(Function),
      ScreenSpaceEventType.LEFT_CLICK,
    );

    wrapper.unmount();

    expect(sseh.destroy).toBeCalled();
  });
});
