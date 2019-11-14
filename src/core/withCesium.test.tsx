import React from "react";
import { mount } from "enzyme";

import { withCesium } from "./withCesium";
import { Provider } from "./context";

describe("core/context", () => {
  it("should inject context to cesium prop", () => {
    const Dummy: React.FC<{ cesium: { dummy: string } }> = () => null;
    const WithCesiumDummy = withCesium<{}, { dummy: string }>(Dummy);

    const value = { dummy: "test" };

    const wrapper = mount(
      <Provider value={value}>
        <WithCesiumDummy />
      </Provider>,
    );

    expect(wrapper.find(Dummy).prop("cesium")).toBe(value);
  });
});
